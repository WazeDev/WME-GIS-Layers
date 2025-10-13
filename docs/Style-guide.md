# Style Settings (`StyleDefinition`)

## Overview

A **StyleDefinition** controls the appearance of GIS features (points, lines, polygons, and labels) in the WME GIS Layers script. Styles can be set globally, per-layer, or for specific feature types (e.g., roads).

***Most layers should use one of the preset styles from the LAYER_STYLES object, which ensures a consistent and tested look for common geospatial themes like cities, parks, roads, or points. For advanced or unique visualization needs, you may freely define a custom style for any layer or feature.***

```
 cities
 forests_parks
 milemarkers
 parcels
 points
 post_offices
 state_parcels
 state_points
 road_labels
 structures
 ```

Style properties let you define things like colors, opacities, label formats, sizes, font styles, and label alignment for visualization in the editor.

**Each layer, or even each feature type, may override style properties as needed.**  

Properties not set in a style use the values from `DEFAULT_STYLE`.

---

## Properties

| Property             | Type             | Description                                                      | Typical Default        |
|----------------------|------------------|------------------------------------------------------------------|------------------------|
| `fillColor`          | string           | Fill color (polygons/symbols, CSS syntax: `"#ff0000"`)           | `"#000"`               |
| `pointRadius`        | number           | Size (pixels) for point markers                                  | `4`                    |
| `label`              | string           | Label or template (supports `${vars}` interpolation)             | `"${getLabel}"`        |
| `fillOpacity`        | number           | Fill opacity (0: transparent, 1: opaque)                         | `0.95`                 |
| `strokeColor`        | string           | Polygon/line/border color                                        | `"#ffa500"`            |
| `strokeOpacity`      | number           | Border/line opacity (0–1)                                        | `0.95`                 |
| `strokeWidth`        | number           | Border/line width in pixels                                      | `1.5`                  |
| `fontColor`          | string           | Label text color                                                 | `"#ffc520"`            |
| `fontSize`           | number, string   | Label text size (`12` or `"12px"` or `"1em"`)                    | `12`                   |
| `labelOutlineColor`  | string           | Color of the label outline/halo                                  | `"black"`              |
| `labelOutlineWidth`  | number, string   | Outline width around label text                                  | `3`                    |
| `fontWeight`         | string           | Font weight (`"bold"`, `"normal"`, number, etc.)                 | *(optional)*           |
| `labelYOffset`       | number           | Vertical offset of label (pixels)                                | *(optional)*           |
| `labelAlign`         | string           | Label alignment (e.g., `"ct"` for center-top, `"cm"` for center-middle) | *(optional)*   |
| `pathLabel`          | string           | Label to display along a path/line                               | *(roads only)*         |
| `labelSelect`        | boolean          | If true, label text is selectable / clickable                    | *(optional)*           |
| `pathLabelYOffset`   | number, string   | Label distance from path (px or percent)                         | *(roads only)*         |
| `pathLabelCurve`     | number, string   | Smoothness for path-following labels                             | *(roads only)*         |
| `pathLabelReadable`  | number, string   | If true, auto-flip label for best reading direction              | *(roads only)*         |
| `stroke`             | boolean          | Whether to draw a border/stroke                                  | *(optional)*           |
| `fontFamily`         | string           | Font family (CSS: `"Arial, sans-serif"`, etc.)                   | `"inherit"`            |


**Notes:**  
- *Optional* means the property is not required in your style. If omitted, the default for that layer or global default will be used.
- For roads, some properties may only take effect for lines/polylines, not polygons or points.

---

## Property Descriptions

- **`fillColor`**: Main fill color for polygons and point markers (default: black for general layers, blue for roads).
- **`pointRadius`**: Size in pixels of markers for point features.
- **`label`**: Main text label. Can use `"${FieldName}"` or `"${getLabel}"` for dynamic content.
- **`fillOpacity`**: Polygon/point fill opacity, 0 for transparent, 1 for opaque.
- **`strokeColor`**: Outline or line color.
- **`strokeOpacity`**: Transparency for border/line (0–1).
- **`strokeWidth`**: Border/line width.
- **`fontColor`**: Text color for the label.
- **`fontSize`**: Label text size. Can be a number (pixels) or CSS string.
- **`labelOutlineColor`**: Halo color around label.
- **`labelOutlineWidth`**: Width of the label outline in pixels (or string).
- **`fontWeight`**: `"bold"`, `"normal"`, or numeric CSS weights.
- **`labelYOffset`**: Shift label up/down in pixels relative to its feature.
- **`labelAlign`**: Label alignment: e.g., `"ct"` (center-top), `"cm"` (center-middle).
- **`pathLabel`**: For lines/roads, label displayed along path.
- **`labelSelect`**: If `true`, text in label can be selected or clicked.
- **`pathLabelYOffset`**: Offset of the path label from the line.
- **`pathLabelCurve`**: How much to smooth/follow the path with label.
- **`pathLabelReadable`**: If set, tries to keep text upright even on reversed lines.
- **`stroke`**: Controls whether stroke/border is drawn.
- **`fontFamily`**: Custom font CSS value for label text.

---

## Example: Default Styles

```javascript

const DEFAULT_STYLE = {
  fillColor: '#000',
  pointRadius: 4,
  label: '${getLabel}',
  fillOpacity: 0.95,
  strokeColor: '#ffa500',
  strokeOpacity: 0.95,
  strokeWidth: 1.5,
  fontColor: '#ffc520',
  fontSize: 13,
  labelOutlineColor: 'black',
  labelOutlineWidth: 3,
  fontFamily: 'inherit'
};


let ROAD_STYLE = {
  pointRadius: 12,
  fillColor: '#369',
  label: '${getLabel}',
  fontColor: '#faf',
  labelSelect: true,
  labelAlign: '${getAlign}',
  labelOutlineWidth: 3,
  labelOutlineColor: '#000',
  strokeWidth: 3,
  stroke: true,
  strokeColor: '#f0f',
  strokeOpacity: 0.4,
  fontWeight: 'bold',
  fontSize: 11,
  fontFamily: 'inherit'
};

 const LAYER_STYLES = {
    cities: {
      fillOpacity: 0.3,
      fillColor: '#f65',
      strokeColor: '#f65',
      fontColor: '#f62',
    },
    forests_parks: {
      fillOpacity: 0.4,
      fillColor: '#585',
      strokeColor: '#484',
      fontColor: '#8b8',
    },
    milemarkers: {
      strokeColor: '#fff',
      fontColor: '#fff',
      fontWeight: 'bold',
      fillOpacity: 0,
      labelYOffset: 10,
      pointRadius: 2,
      fontSize: 12,
    },
    parcels: {
      fillOpacity: 0,
      fillColor: '#ffa500',
    },
    points: {
      strokeColor: '#000',
      fontColor: '#0ff',
      fillColor: '#0ff',
      labelYOffset: -10,
      labelAlign: 'ct',
    },
    post_offices: {
      strokeColor: '#000',
      fontColor: '#f84',
      fillColor: '#f84',
      fontWeight: 'bold',
      labelYOffset: -10,
      labelAlign: 'ct',
    },
    state_parcels: {
      fillOpacity: 0,
      strokeColor: '#e62',
      fillColor: '#e62',
      fontColor: '#e73',
    },
    state_points: {
      strokeColor: '#000',
      fontColor: '#3cf',
      fillColor: '#3cf',
      labelYOffset: -10,
      labelAlign: 'ct',
    },
    road_labels: {
      strokeOpacity: 0,
      fillOpacity: 0,
      fontColor: '#faf',
      labelAlign: 'cm',
    },
    structures: {
      fillOpacity: 0,
      strokeColor: '#f7f',
      fontColor: '#f7f',
    },
  };
  ```
**Hints and Tips**
- Most style properties support valid CSS color formats (hex, rgb, named colors).
- Numeric values are in pixels (where applicable). Use strings for CSS units if needed.
- For label/template values, wrap fields in ${}.
 `{"strokeColor": "#FF00FF", "strokeWidth": "3", "fillOpacity": 0.2, "fillColor": "#ff6666", "fontWeight": "bold", "fontColor": "white", "labelOutlineColor": "black", "labelOutlineWidth": "10"}`
- Use labelAlign, labelYOffset, etc for custom label placement.
- If a property is not set, the script will fall back to the base default value.