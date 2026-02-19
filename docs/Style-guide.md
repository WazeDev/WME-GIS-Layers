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
 traffic_lights
 bridges
 state_parcels
 state_points
 road_labels
 road_hazards
 structures
 zones_fire
 zones_flood
 zones_school_safety
 camera_red
 camera_speed
 boundary_international
 boundary_state
 boundary_district
 boundary_sub-district
 boundary_village
 water_bodies
 water_rivers_streams
 ```

Style properties let you define things like colors, opacities, label formats, sizes, font styles, and label alignment for visualization in the editor.

**Each layer, or even each feature type, may override style properties as needed.**

Properties not set in a style use the values from `DEFAULT_STYLE`.

---

## Properties

| Property             | Type             | Description                                                                      | Typical Default        |
|----------------------|------------------|----------------------------------------------------------------------------------|------------------------|
| `fillColor`          | string           | Fill color (polygons/symbols, CSS syntax: `"#ff0000"`)                           | `"#000"`               |
| `pointRadius`        | number           | Size (pixels) for point markers                                                  | `4`                    |
| `label`              | string           | Label or template (`${vars}`). Set to `""` for road layers using `pathLabel`.    | `"${getLabel}"`        |
| `fillOpacity`        | number           | Fill opacity (0: transparent, 1: opaque)                                         | `0.95`                 |
| `strokeColor`        | string           | Polygon/line/border color                                                        | `"#ffa500"`            |
| `strokeOpacity`      | number           | Border/line opacity (0–1)                                                        | `0.95`                 |
| `strokeWidth`        | number           | Border/line width in pixels                                                      | `1.5`                  |
| `strokeDashstyle`    | string           | Dash pattern for strokes (e.g., `"dash"`, `"dot"`, `"solid"`)                    | *(optional)*           |
| `fontColor`          | string           | Label text color                                                                 | `"#ffc520"`            |
| `fontSize`           | number, string   | Label text size (`12` or `"12px"` or `"1em"`)                                    | `12`                   |
| `labelOutlineColor`  | string           | Color of the label outline/halo                                                  | `"black"`              |
| `labelOutlineWidth`  | number, string   | Outline width around label text                                                  | `3`                    |
| `fontWeight`         | string           | Font weight (`"bold"`, `"normal"`, number, etc.)                                 | *(optional)*           |
| `labelYOffset`       | number           | Vertical offset of label (pixels)                                                | *(optional)*           |
| `labelAlign`         | string           | Label alignment (e.g., `"ct"` for center-top, `"cm"` for center-middle)          | *(optional)*           |
| `pathLabel`          | string           | Label to display along a path/line (road layers)                                 | *(roads only)*         |
| `labelSelect`        | boolean          | If true, label text is selectable / clickable                                    | *(optional)*           |
| `pathLabelYOffset`   | number, string   | Label distance from path (px or percent). Supports `"${getOffset}"` template.    | *(roads only)*         |
| `pathLabelCurve`     | number, string   | Smoothness for path-following labels. Supports `"${getSmooth}"` template.        | *(roads only)*         |
| `pathLabelReadable`  | number, string   | Flips label to best reading direction. Supports `"${getReadable}"` template.     | *(roads only)*         |
| `stroke`             | boolean          | Whether to draw a border/stroke                                                  | *(optional)*           |
| `fontFamily`         | string           | Font family (CSS: `"Arial, sans-serif"`, etc.)                                   | `"inherit"`            |
| `externalGraphic`    | string           | URL of an external image to use as the point marker (replaces default circle)    | *(optional)*           |
| `graphicWidth`       | number           | Width of the external graphic in pixels                                          | *(optional)*           |
| `graphicHeight`      | number           | Height of the external graphic in pixels                                         | *(optional)*           |
| `graphicXOffset`     | number           | Horizontal offset of the graphic from its anchor point (usually `-width/2`)      | *(optional)*           |
| `graphicYOffset`     | number           | Vertical offset of the graphic from its anchor point (usually `-height/2`)       | *(optional)*           |


**Notes:**
- *Optional* means the property is not required in your style. If omitted, the default for that layer or global default will be used.
- For roads, some properties may only take effect for lines/polylines, not polygons or points.
- `externalGraphic` styles replace the default circle marker with a custom image. Use `graphicXOffset`/`graphicYOffset` of `-width/2` and `-height/2` to center the image on the feature point.

---

## Property Descriptions

- **`fillColor`**: Main fill color for polygons and point markers (default: black for general layers, blue for roads).
- **`pointRadius`**: Size in pixels of markers for point features.
- **`label`**: Main text label. Can use `"${FieldName}"` or `"${getLabel}"` for dynamic content. Set to `""` for road layers that use `pathLabel`.
- **`fillOpacity`**: Polygon/point fill opacity, 0 for transparent, 1 for opaque.
- **`strokeColor`**: Outline or line color.
- **`strokeOpacity`**: Transparency for border/line (0–1).
- **`strokeWidth`**: Border/line width.
- **`strokeDashstyle`**: Dash pattern for the stroke. Common values: `"solid"` (default), `"dash"`, `"dot"`, `"dashdot"`.
- **`fontColor`**: Text color for the label.
- **`fontSize`**: Label text size. Can be a number (pixels) or CSS string.
- **`labelOutlineColor`**: Halo color around label.
- **`labelOutlineWidth`**: Width of the label outline in pixels (or string).
- **`fontWeight`**: `"bold"`, `"normal"`, or numeric CSS weights.
- **`labelYOffset`**: Shift label up/down in pixels relative to its feature.
- **`labelAlign`**: Label alignment: e.g., `"ct"` (center-top), `"cm"` (center-middle).
- **`pathLabel`**: For lines/roads, label displayed along the path. Use `"${getLabel}"` for dynamic content.
- **`labelSelect`**: If `true`, text in label can be selected or clicked.
- **`pathLabelYOffset`**: Offset of the path label from the line. Supports `"${getOffset}"` dynamic template.
- **`pathLabelCurve`**: How much to smooth/follow the path with the label. Supports `"${getSmooth}"` dynamic template.
- **`pathLabelReadable`**: If set, tries to keep text upright even on reversed lines. Supports `"${getReadable}"` dynamic template.
- **`stroke`**: Controls whether stroke/border is drawn.
- **`fontFamily`**: Custom font CSS value for label text.
- **`externalGraphic`**: URL to an image file used as the point marker. Replaces the default circle.
- **`graphicWidth`** / **`graphicHeight`**: Pixel dimensions of the external graphic.
- **`graphicXOffset`** / **`graphicYOffset`**: Anchor offset for the graphic, typically `-width/2` and `-height/2` to center it on the point.

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
  fontSize: 12,
  labelOutlineColor: 'black',
  labelOutlineWidth: 3,
  fontFamily: 'inherit'
};


let ROAD_STYLE = {
  pointRadius: 12,
  fillColor: '#369',
  pathLabel: '${getLabel}',
  label: '',
  fontColor: '#faf',
  labelSelect: true,
  pathLabelYOffset: '${getOffset}',
  pathLabelCurve: '${getSmooth}',
  pathLabelReadable: '${getReadable}',
  labelAlign: '${getAlign}',
  labelOutlineWidth: 3,
  labelOutlineColor: '#000',
  strokeWidth: 3,
  stroke: true,
  strokeColor: '#f0f',
  strokeOpacity: 0.4,
  fontWeight: 'bold',
  fontSize: 12,
  fontFamily: 'inherit'
};

const LAYER_STYLES = {
  bridges: {
    strokeColor: '#FFA233',
    strokeWidth: 3,
    strokeOpacity: 1.0,
    fillOpacity: 0.5,
    fillColor: '#FFA233',
    fontWeight: 'bold',
    fontColor: 'white',
    labelOutlineColor: 'black',
    labelOutlineWidth: 2,
    pointRadius: 15,
  },
  cities: {
    labelOutlineWidth: 1.5,
    labelOutlineColor: 'black',
    strokeWidth: 2,
    stroke: true,
    strokeColor: '#00ffff',
    strokeOpacity: 1.0,
    fontWeight: 'bold',
    fontColor: 'white',
    fillColor: '#00ffff',
    fillOpacity: 0.0,
  },
  forests_parks: {
    strokeWidth: 2,
    strokeColor: '#90EE90',
    fontWeight: 'bold',
    fontColor: '#90EE90',
    fillColor: '#90EE90',
    fillOpacity: 0.3,
  },
  milemarkers: {
    strokeColor: '#fff',
    fontColor: '#fff',
    fontWeight: 'bold',
    fillOpacity: 0,
    labelYOffset: 10,
    pointRadius: 2,
  },
  parcels: {
    fillOpacity: 0,
    fillColor: '#ffa500',
    strokeColor: '#ffa500',
    strokeWidth: 3,
    strokeOpacity: 0.4,
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
  traffic_lights: {
    externalGraphic: 'https://freesvg.org/img/stop-light-h.png',
    graphicWidth: 24,
    graphicHeight: 24,
    graphicXOffset: -12,
    graphicYOffset: -12,
    labelYOffset: -12,
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
  },
  road_hazards: {
    externalGraphic: 'https://freesvg.org/img/ryanlerch-Speed-Bump-Sign.png',
    graphicWidth: 24,
    graphicHeight: 24,
    graphicXOffset: -12,
    graphicYOffset: -12,
    labelYOffset: -24,
    fontColor: '#FFA500',
    fontWeight: 'bold',
    labelOutlineColor: 'black',
    labelOutlineWidth: 2,
  },
  structures: {
    fillOpacity: 0,
    strokeColor: '#f7f',
    fontColor: '#f7f',
  },
  zones_fire: {
    strokeColor: '#ff4136',
    fillOpacity: 0.33,
    fillColor: '#ff851b',
    fontWeight: 'bold',
    fontColor: '#ff4136',
    labelYOffset: -10,
    labelAlign: 'ct',
  },
  zones_flood: {
    strokeColor: '#0074d9',
    fillOpacity: 0.33,
    fillColor: '#7fdbff',
    fontWeight: 'bold',
    fontColor: '#0074d9',
    labelYOffset: -10,
    labelAlign: 'ct',
  },
  zones_school_safety: {
    pathLabel: '${getLabel}',
    label: '',
    labelSelect: true,
    pathLabelYOffset: 15,
    pathLabelCurve: '',
    pathLabelReadable: 1,
    labelAlign: 'center',
    labelOutlineWidth: 2,
    labelOutlineColor: 'black',
    strokeWidth: 15,
    stroke: true,
    strokeColor: '#FFA500',
    strokeOpacity: 0.50,
    fontWeight: 'bold',
    fontColor: '#FFA500',
  },
  camera_red: {
    externalGraphic: 'https://freesvg.org/img/camera-michael-tunniclif-01.png',
    graphicWidth: 24,
    graphicHeight: 24,
    graphicXOffset: -12,
    graphicYOffset: -12,
    labelYOffset: -24,
    fontColor: 'red',
    fontWeight: 'bold',
    labelOutlineColor: 'white',
    labelOutlineWidth: 2,
  },
  camera_speed: {
    externalGraphic: 'https://freesvg.org/img/Blitzer-Icon.png',
    graphicWidth: 24,
    graphicHeight: 24,
    graphicXOffset: -12,
    graphicYOffset: -12,
    labelYOffset: -24,
    fontColor: 'red',
    fontWeight: 'bold',
    labelOutlineColor: 'white',
    labelOutlineWidth: 2,
  },
  boundary_international: {
    labelOutlineWidth: 2,
    labelOutlineColor: 'black',
    strokeWidth: 5,
    stroke: true,
    strokeColor: '#e62',
    strokeOpacity: 1.0,
    fontWeight: 'bold',
    fontColor: '#e62',
    fillColor: '#e62',
    fillOpacity: 0.0,
  },
  boundary_state: {
    labelOutlineWidth: 2,
    labelOutlineColor: 'black',
    strokeWidth: 4,
    stroke: true,
    strokeColor: '#1dd1ff',
    strokeOpacity: 1.0,
    fontWeight: 'bold',
    fontColor: '#1dd1ff',
    fillColor: '#1dd1ff',
    fillOpacity: 0.0,
  },
  boundary_district: {
    labelOutlineWidth: 2,
    labelOutlineColor: 'white',
    strokeWidth: 4,
    stroke: true,
    strokeColor: '#8A2BE2',
    strokeOpacity: 1.0,
    fontWeight: 'bold',
    fontColor: '#8A2BE2',
    fillColor: '#8A2BE2',
    fillOpacity: 0.0,
  },
  'boundary_sub-district': {
    labelOutlineWidth: 2,
    labelOutlineColor: 'black',
    strokeWidth: 2,
    stroke: true,
    strokeColor: '#7FFF00',
    strokeOpacity: 1.0,
    fontWeight: 'bold',
    fontColor: '#7FFF00',
    fillColor: '#7FFF00',
    fillOpacity: 0.0,
  },
  boundary_village: {
    labelOutlineWidth: 2,
    labelOutlineColor: 'white',
    strokeWidth: 2,
    stroke: true,
    strokeColor: '#FF1493',
    strokeOpacity: 1.0,
    fontWeight: 'bold',
    fontColor: '#FF1493',
    fillColor: '#FF1493',
    fillOpacity: 0.0,
  },
  water_bodies: {
    strokeColor: '#33ccff',
    strokeOpacity: 1,
    strokeWidth: 3,
    strokeDashstyle: 'dash',
    fillOpacity: 0.4,
    fillColor: '#3399ff',
    fontWeight: 'bold',
    fontColor: 'blue',
    labelOutlineColor: 'white',
    labelOutlineWidth: 3,
  },
  water_rivers_streams: {
    pathLabel: '${getLabel}',
    label: '',
    pathLabelYOffset: 15,
    pathLabelReadable: 1,
    pathLabelCurve: '.0002',
    strokeColor: '#33ccff',
    strokeOpacity: 1,
    strokeWidth: 3,
    strokeDashstyle: 'dash',
    fillOpacity: 0.4,
    fillColor: '#3399ff',
    fontWeight: 'bold',
    fontColor: 'blue',
    labelOutlineColor: 'white',
    labelOutlineWidth: 3,
  },
};
```

**Hints and Tips**
- Most style properties support valid CSS color formats (hex, rgb, named colors).
- Numeric values are in pixels (where applicable). Use strings for CSS units if needed.
- For label/template values, wrap fields in `${}`.
- Use `externalGraphic` with matching `graphicWidth`/`graphicHeight` and offset `-width/2`/`-height/2` to center custom icons on point features.
- Use `labelAlign`, `labelYOffset`, etc. for custom label placement.
- Road-style layers (and any layer using path-following labels) should set `label: ""` and use `pathLabel` instead.
- If a property is not set, the script will fall back to the base default value.
