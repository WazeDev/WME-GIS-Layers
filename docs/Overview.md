# WME GIS Layers: Script Overview

> _UserScript to add and manage GIS layers in Waze Map Editor_  
> **Author:** MapOMatic / JS55CT  
> **Script Download:** [View on GreasyFork](https://greasyfork.org/scripts/369632-wme-gis-layers)

---

## Table of Contents

- [WME GIS Layers: Script Overview](#wme-gis-layers-script-overview)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Settings \& Configuration](#settings--configuration)
  - [Dependencies](#dependencies)
  - [API Reference](#api-reference)
    - [Types \& Structures](#types--structures)
      - [`StyleDefinition`](#styledefinition)
      - [`GisLayer`](#gislayer)
      - [`Settings`](#settings)
    - [Key Functions](#key-functions)
      - [`fetchFeatures()`](#fetchfeatures)
      - [`renderLayers()`](#renderlayers)
      - [`toggleLayer(layerId)`](#togglelayerlayerid)
      - [`setLayerVisibility(layerId, visible)`](#setlayervisibilitylayerid-visible)
      - [`getFeatureLabel(feature, layer)`](#getfeaturelabelfeature-layer)
      - [`getUrl(extent, gisLayer, zoom)`](#geturlextent-gislayer-zoom)
      - [`processFeaturesArcGIS(data, token, gisLayer)`](#processfeaturesarcgisdata-token-gislayer)
      - [`processFeaturesGeoJSON(data, token, gisLayer)`](#processfeaturesgeojsondata-token-gislayer)
      - [`whatsInView(forceRefresh?: boolean): Promise<WhatsInViewResult>`](#whatsinviewforcerefresh-boolean-promisewhatsinviewresult)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [UI Reference](#ui-reference)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [Back to Top](#back-to-top)
---

## Overview

**WME GIS Layers** is a script for the Waze Map Editor that enables loading, displaying, and managing GIS data layers from sources like ArcGIS and Socrata. It features dynamic filtering, region/country selection, custom groups, popup label tools, advanced styling, and many other production-grade utilities for map editors.

---

## Features

- **Dynamic GIS Layer Loading:** ArcGIS/Socrata sources, region/country subdivision selection.
- **Map Feature Styling:** Customizable opacity, colors, fonts, label outlines.
- **Interactive UI Panels:** Layer tabs, settings, and custom group manager.
- **Label Popups:** Unique label aggregation, copying, and formatting tools.
- **Keyboard Shortcuts:** Instant toggling and filtering actions.
- **Deduplication Algorithms:** Consolidate features and addresses.
- **Layer Group Manager:** Save/load sets of visible regions and layers.
- **Settings Persistence:** User config saved between sessions.
- **Performance Optimizations:** Debounced/parallel data loading, race condition checks.
- **API Integration:** Socrata App Token support for restricted data.

---

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) in your browser.
2. [Install the script from GreasyFork](https://greasyfork.org/scripts/369632-wme-gis-layers).
3. Reload [Waze Map Editor](https://www.waze.com/editor).
4. Go to the "GIS Layers" tab in the left sidebar.

---

## Usage

- **Enable/Disable Layers:**  
  Use the power icon or sidebar checkbox to toggle GIS layers.

- **Select Regions/Layers:**  
  Choose countries/states/regions to see layers for specific areas.

- **Layer Popup:**  
  View, format, and copy unique labels found in the map area.

- **Custom Groups:**  
  Save/load sets of commonly used layers/regions for fast switching.

- **Keyboard Shortcuts:**  
  Assign shortcuts from WME Keyboard Shortcuts menu.

---

## Settings & Configuration

| Setting               | Description                                              | Default     |
|-----------------------|---------------------------------------------------------|--------------|
| Enabled               | Enables/disables GIS overlay                            | `true`       |
| Visible Layers        | Which layers are shown                                  | `Empty`      |
| Selected Regions      | Active country/sub-region codes                         | `Empty`      |
| Fill Parcels          | Toggles polygon fill                                    | `false`      |
| Label Font/Size       | Edit font family/size for all layer labels              | `Default`    |
| Address Display       | Choose address-label format (HN, street, both, none)    | `all`        |
| Socrata App Token     | Set API key for Socrata sources (recommended)           | `Empty`      |
| Layer Groups          | Manage saved region/layer configurations for fast recall| `Empty`      |

_Adjust these in the 'Settings' tab UI in WME._

---

## Dependencies

- **jQuery**
- **WazeWrap** (WME utility library)
- **lodash**
- **turf.js** (geospatial utilities)
- **OpenLayers**
- **bootstrap** (WME utility for SDK initialization)
- **ESTreeProcessor** (utility for label scripts)
- **wmeGisLBBOX** (utility for Geo boundary location)

---

## API Reference

### Types & Structures

#### `StyleDefinition`

Controls the appearance of GIS features (points, lines, polygons, and labels) in the WME GIS Layers script. Styles can be set globally, per-layer, or for specific feature types (e.g., roads).

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

- [Style Settings (`StyleDefinitions`)](./Style-guide.md)

---

#### `GisLayer`

Represents a GIS data layer for use in WME GIS Layers. Layers can be point, line, or polygon features and may have special styling, labeling, and visibility rules.

**Properties:**

| Property                  | Type                           | Description                                                                                              | Default/Optional           |
|---------------------------|--------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------|
| `id`                      | `string`                       | Unique identifier for the layer. Set in the Layers Google Sheet.                                         | Required                   |
| `enabled`                 | `number`                       | `1` if enabled; `0` if disabled (by user or config).                                                     | Default: `0`               |
| `name`                    | `string`                       | Human-readable name of the layer for display.                                                            | Required                   |
| `country`                 | `string`                       | Country ISO_ALPHA3 code associated, e.g., `"USA"`, `"CAN"`.                                              | Required                   |
| `subL1`                   | `string`                       | Subdivision level 1 name/code (state/province, uppercase).                                               | Required                   |
| `subL2`                   | `string[]`                     | Array of subdivision level 2 names (counties/regions).                                                   | Optional                   |
| `url`                     | `string`                       | Service URL for the layer's data (ArcGIS MapServer or Socrata endpoint).                                 | Required                   |
| `where`                   | `string`                       | SQL/query filter string for limiting results. E.g., `"STATE_NAME='CA'"`.                                 | Optional                   |
| `labelFields`             | `string[]`                     | Array of field names used for feature labels (in order of preference).                                   | Optional                   |
| `processLabel`            | `string`                       | JavaScript code to process and generate custom label text.                                               | Optional                   |
| `labelProcessingError`    | `boolean`                      | Flag: `true` if error occurred during custom label compilation.                                          | Default: `false`           |
| `style`                   | `object` &#124; `"roads"`      | Style object for rendering (see `StyleDefinition`). `"roads"` for road-specific styling.                 | Optional                   |
| `isRoadLayer`             | `boolean`                      | `true` if layer contains road/line/path features. Determines certain rendering logic.                    | Optional/auto-detect       |
| `visibleAtZoom`           | `number` &#124; `null`         | Minimum map zoom level to show layer. `null` uses global/default setting.                                | Optional                   |
| `labelsVisibleAtZoom`     | `number` &#124; `null`         | Minimum zoom to show feature labels.                                                                     | Optional                   |
| `restrictTo`              | `string`                       | Comma-separated restrictions for layer visibility (e.g., ranks, usernames, `"am"` for area managers).    | Optional                   |
| `notAllowed`              | `boolean`                      | `true` if current user does not meet `restrictTo` requirements.                                          | Default: `false`           |
| `oneTimeAlert`            | `string`                       | Info/alert message shown once when layer is first enabled.                                               | Optional                   |
| `platform`                | `'ArcGIS'` &#124; `'SocrataV2'` &#124; `'SocrataV3'` &#124; `'Other'` | Service platform type, auto-detected from URL/schema.             | Optional/auto-detect       |
| `countrySubL1`            | `string`                       | Computed field for country-subL1 key (e.g., `"USA-CALIFORNIA"`).                                         | Auto-generated             |

**Example:**

```javascript
const gisLayer = {
  id: "roads_ca",
  enabled: 1,
  name: "California Roads",
  country: "USA",
  subL1: "CA",
  url: "https://sampleserver/arcgis/rest/services/Roads/MapServer/0",
  style: "roads",
  isRoadLayer: true,
  visibleAtZoom: 6,
  labelsVisibleAtZoom: 8,
  restrictTo: "R5+AM", // Area Managers and rank 5
  oneTimeAlert: "This layer is for Area Managers only!",
  platform: "ArcGIS",
  countrySubL1: "USA-CA"
};

// Example 1: Huron County - Streets (Canada, Ontario, Roads)
{
  id: "can-on-huron-co-streets",
  name: "Huron County - Streets",
  country: "CAN",
  subL1: "ON",
  subL2: ["Huron"],
  platform: "ArcGIS",
  url: "https://services1.arcgis.com/Nl1VlZHemqspPW1n/ArcGIS/rest/services/Road_Centreline/FeatureServer/0",
  where: "",
  labelFields: ["Full_StName", "Surface"],
  processLabel: `var label = fieldValues.Full_StName; 
                 if (fieldValues.Surface !== undefined) 
                { label += " | " + (fieldValues.Surface == 1 ? "Paved" : "Unpaved"); 
                 } label;`,
  style: "roads",
  enabled: 1,
  visibleAtZoom: 17,
  labelsVisibleAtZoom: null,
  restrictTo: undefined,
  oneTimeAlert: undefined,
  isRoadLayer: true,
  countrySubL1: "CAN-ON"
}

// Example 2: France - National Bridges
{
  id: "fra-national-bridges",
  name: "France - National Bridges",
  country: "FRA",
  subL1: "FRA", // National-level layer
  platform: "ArcGIS",
  url: "https://kartes.cerema.fr/server/rest/services/oa_public/FeatureServer/0",
  where: `LOWER(ph1_natured_ge) LIKE '%pont%'
          OR LOWER(oa_nomusue_el) LIKE '%pont%'
          OR LOWER(ph1_typetab_er) LIKE '%pont%'
          OR LOWER(oa_identifi_ce) LIKE '%pont%'`,
  labelFields: [ "oa_idmetier", "oa_codeinseecom", "oa_identifi_ce", "oa_nomdel_al", "oa_nomusue_el" ],
  processLabel: `label = "#" + (fieldValues.oa_idmetier || fieldValues.oa_codeinseecom) + "\\n" +
                (fieldValues.oa_identifi_ce || "") + "\\n" +
                "over " + (fieldValues.oa_nomdel_al || "");

            if (fieldValues.oa_nomusue_el) {
               label += " (" + fieldValues.oa_nomusue_el + ")";
            }
             return label;`,
  style: "post_offices",
  enabled: 1,
  visibleAtZoom: 12,
  labelsVisibleAtZoom: 15,
  restrictTo: undefined,
  oneTimeAlert: undefined,
  isRoadLayer: false,
  countrySubL1: "FRA-FRA"
}

// Example 3: Public Shelters (CalOES, USA California)
{
  id: "us-ca-caloes-shelters",
  name: "Public Shelters (CalOES)",
  country: "USA",
  subL1: "CA",
  platform: "ArcGIS",
  url: "https://services1.arcgis.com/P5Mv5GY5S66M8Z1Q/arcgis/rest/services/Evacuation_Center/FeatureServer/0",
  where: "SHELTER_STATUS_CODE = OPEN",
  labelFields: [],
  processLabel: `return fieldValues.SHELTER_NAME + '\\n' + fieldValues.ADDRESS_1 + '\\nSTATUS: ' + fieldValues.SHELTER_STATUS_CODE;`,
  style: "state_points",
  enabled: 1,
  visibleAtZoom: 15,
  labelsVisibleAtZoom: 15,
  restrictTo: "R2+AM",
  oneTimeAlert: undefined,
  isRoadLayer: false,
  countrySubL1: "USA-CA"
}
```
---

#### `Settings`

Represents user preferences, UI configurations, and per-layer/group overrides for the WME GIS Layers script.

**Properties:**

| Property                      | Type                                                 | Description                                                                                                      | Default/Optional         |
|-------------------------------|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------- |--------------------------|
| `lastVersion`                 | `string`                                             | Last script version seen (e.g., `"2025.08.01.000"`).                                                             | Required                 |
| `enabled`                     | `boolean`                                            | Whether the script is enabled.                                                                                   | Default: `true           |
| `visibleLayers`               | `string[]`                                           | Array of visible layer IDs (global across all regions/groups).                                                   | Default: `[]`            |
| `onlyShowApplicableLayers`    | `boolean`                                            | If `true`, show only layers applicable to the currently selected region(s).                                      | Optional                 |
| `onlyShowApplicableLayersZoom`| `boolean`                                            | If `true`, restrict applicable layers to those visible at current zoom.                                          | Optional                 |
| `selectedSubL1`               | `string[]`                                           | Array of selected sub-L1 codes (e.g., `["CAN-ON", "USA-CT"]`).                                                   | Default: `[]`            |
| `fillParcels`                 | `boolean`                                            | If `true`, filled parcel polygons are used when available.                                                       | Default: `false`         |
| `oneTimeAlerts`               | `Object.<string, number>`                            | Map of alert keys to timestamps (for tracking "once per user" info banners).                                     | Optional                 |
| `layers`                      | `Object.<string, LayerSettings>`                     | Map of layer IDs to layer-specific settings (see below).                                                         | Optional                 |
| `shortcuts`                   | `Object.<string, { raw: string, combo: string }>` OR <br> `Object.<string, string>` | Map of shortcut/action IDs to keyboard combos (`raw`, `combo` or legacy string).  | Optional                 |
| `isPopupVisible`              | `boolean`                                            | If `true`, the settings/config popup is open.                                                                    | Optional                 |
| `useAcronyms`                 | `boolean`                                            | Use acronyms in some labels/fields (e.g., "HWY" instead of "Highway").                                           | Optional                 |
| `useTitleCase`                | `boolean`                                            | Use Title Case for labels.                                                                                       | Optional                 |
| `useStateHwy`                 | `boolean`                                            | If `true`, prefer `"State Hwy"` format for roads instead of other conventions.                                   | Optional                 |
| `removeNewLines`              | `boolean`                                            | Remove new lines from feature names/labels.                                                                      | Optional                 |
| `collapsedSections`           | `Object.<string, boolean>`                           | Map of section/UI names (region codes, etc) to collapsed state.                                                  | Optional                 |
| `layerGroups`                 | `Object.<string, LayerGroupSettings>`                | Map of group names to group-specific settings (see below).                                                       | Optional                 |
| `addrLabelDisplay`            | `string`                                             | Address label display mode (e.g., `"all"`, `"simple"`, `"off"`).                                                 | Optional                 |
| `socrataAppToken`             | `string`                                             | Token for Socrata API access.                                                                                    | Optional                 |
| `fontFamily`                  | `string`                                             | Font family for labels (e.g., `"Arial, sans-serif"`, `"inherit"`).                                               | Default: `"inherit"`     |
| `fontSize`                    | `number`                                             | Font size in pixels (e.g., `20`).                                                                                | Default: `20`            |
| `toggleHnsOnlyShortcut`       | `string`                                             | (Legacy) Key combo for "Toggle HNS Only"; replaced by entry in `shortcuts.toggleHnsOnlyShortcut`.                | Deprecated               |
| `toggleEnabledShortcut`       | `string`                                             | (Legacy) Key combo for "Toggle Script Enabled"; replaced by entry in `shortcuts.toggleEnabledShortcut`.          | Deprecated               |
| `getLayerSetting`             | `(layerID: string, settingName: string) => *`              | Utility: Gets a setting for a specific layer.                                                              | Function                 |
| `setLayerSetting`             | `(layerID: string, settingName: string, value: *) => void` | Utility: Sets a layer setting.                                                                             | Function                 |
| `removeLayerSetting`          | `(layerID: string, [settingName]: string) => void`         | Utility: Removes a specific setting or all settings for a layer.                                           | Function                 |

---

**LayerSettings sub-object:**

Describes per-layer customizations.

| Property   | Type           | Description                                                                                      |
|------------|----------------|--------------------------------------------------------------------------------------------------|
| `offset`   | `{ x: number, y: number }` (optional) | XY offset for the layer display (pixels or map units, layer-dependent).   |

---

**LayerGroupSettings sub-object:**

Describes per-group customizations.

| Property             | Type                       | Description                                                                   |
|----------------------|----------------------------|-------------------------------------------------------------------------------|
| `selectedSubL1`      | `string[]`                 | Array of sub-L1 region codes for this group.                                  |
| `visibleLayers`      | `string[]`                 | Array of visible layer IDs for this group.                                    |
| `collapsedSections`  | `Object.<string, boolean>` | Map of section names to collapsed state.                                      |
| `addrLabelDisplay`   | `string`                   | Address label display mode ("all", "simple", etc).                            |
| `fillParcels`        | `boolean`                  | Whether to fill parcels for this group.                                       |
| `fontFamily`         | `string` (optional)        | Font family for labels (if available).                                        |
| `fontSize`           | `number` (optional)        | Font size for labels (pixels, if available).                                  |

---

**Example:**

```javascript
const settings = {
  lastVersion: "2025.08.01.001",
  enabled: true,
  visibleLayers: ["roads_ca", "state_points"],
  onlyShowApplicableLayers: true,
  selectedSubL1: ["USA-CA", "CAN-ON"],
  fillParcels: false,
  fontFamily: "inherit",
  fontSize: 20,
  addrLabelDisplay: "all",
  layers: {
    "roads_ca": {
      offset: { x: 2, y: 0 }
    }
    // ... more layer-specific settings
  },
  shortcuts: {
    "toggleScriptEnabled": { raw: "2,67", combo: "Ctrl+C" },
    "toggleMapMode": { raw: "3,77", combo: "Ctrl+M" }
  },
  oneTimeAlerts: {
    "new_feature_warning": 1689019123
  },
  layerGroups: {
    "California": {
      selectedSubL1: ["USA-CA"],
      visibleLayers: ["roads_ca", "state_points"],
      collapsedSections: { "USA-CA": false, "USA-NV": true },
      addrLabelDisplay: "all",
      fillParcels: true,
      fontFamily: "Arial, sans-serif",
      fontSize: 14
    }
    // ... more groups
  },
  // ...additional fields
  getLayerSetting: function(layerID, settingName) { /* ... */ },
  setLayerSetting: function(layerID, settingName, value) { /* ... */ },
  removeLayerSetting: function(layerID, settingName) { /* ... */ }
};
```

**Refer to the script JSDoc for full type fields.**

---

### Key Functions

#### `fetchFeatures()`
Fetches GIS features for all *visible layers* according to the currently selected region(s) and zoom level.  
Handles filtering, request batching, and error checks for different data sources (ArcGIS, Socrata, etc).

- **Parameters:** *(none)*
- **Returns:** `Promise<void>`
- **Behavior:**
  - Determines which layers are visible.
  - Checks active region/sub-L1 selections and current map zoom.
  - For each layer:
    - Builds a request URL (ArcGIS, Socrata, or other).
    - Applies any filters (`where` clause).
    - Sends asynchronous fetch/XHR requests as needed.
    - On success, parses feature data and caches in memory.
    - Handles errors (shows alerts/toasts if fetch fails).
  - Updates the UI map overlay with new features.

---

#### `renderLayers()`
Renders all fetched GIS features for visible layers onto the WME map.  
Handles point, line, polygon, and label rendering, applies styling and visibility logic.

- **Parameters:** *(none)*
- **Behavior:**
  - Iterates over each visible layer's features.
  - Applies style from layer config (see `StyleDefinition`).
  - Handles per-layer and global overrides (custom fonts, colors, etc).
  - Draws features as SVG, Canvas, or OpenLayers objects.
  - Places and styles labels according to user settings.
  - Respects zoom and visibility rules.

---

#### `toggleLayer(layerId)`
Toggles enabled/visible state for a given GIS layer.

- **Parameters:** `layerId` (string) – The ID of the layer to toggle.
- **Returns:** `void`
- **Behavior:**
  - Switches layer visibility in `Settings.visibleLayers`.
  - Triggers re-fetch and re-render if necessary.
  - Shows one-time alert if defined on first enable.

---

#### `setLayerVisibility(layerId, visible)`
Sets the visibility of a specific layer, updating settings and triggering re-render.

- **Parameters:**  
  - `layerId` (string)  
  - `visible` (boolean)
- **Returns:** `void`

---

#### `getFeatureLabel(feature, layer)`
Generates the display label for a GIS feature, using configured fields or a custom label processing function.

- **Parameters:**
  - `feature` (object) – The raw feature data object.
  - `layer` (`GisLayer`) – The layer configuration for label logic.
- **Returns:** `string` – Label text.

---

#### `getUrl(extent, gisLayer, zoom)`
Constructs a GIS feature query URL for a layer based on platform type, map extent, and zoom level.

Supports:
- **ArcGIS:** builds a geometry envelope query for FeatureServer endpoints
- **Socrata V2:** builds a SODA `$where` query for the `.geojson` endpoint
- **Socrata V3:** builds a SQL-in-query for the `/query.geojson` endpoint

**Parameters:**
- `extent` (`[number, number, number, number]`) -  Bounding box: `[xmin, ymin, xmax, ymax]` in longitude/latitude (WGS84).
- `gisLayer` (`GisLayer` object): The GIS layer definition (includes `url`, `platform`, `labelFields`, `where`, etc.).
- `zoom` (`number`): Current map zoom level (may be used for spatial offset or precision).

**Returns:**  
- `string` – The fully constructed query URL for the layer’s platform and extent.  
Returns empty string if platform unsupported or required fields (e.g., `labelFields`) are missing.

**Details:**
- **ArcGIS Platform:**  
  - Builds a `/query` endpoint URL with a geometry envelope payload, output fields, and spatial reference.
  - Includes `maxAllowableOffset` for better performance at lower zooms.
  - Applies layer filter (`where` clause) if provided.
- **Socrata V2/SODA:**  
  - First field in `labelFields` should be the geometry field (e.g., `'location'`, `'the_geom'`, `'geometry'`).
  - Applies a `$where` clause with bounding box and custom filters.
  - Limits feature count (typically to 3000).
- **Socrata V3:**  
  - Builds a SQL query string: `SELECT ... WHERE ... LIMIT ...`
  - URL-encoded as query param `?query=...`.
  - Also enforces bounding box and attribution limits.
- **Unknown platform:**  
  - Logs a debug message and returns empty string.

**Example:**
```javascript
const extent = [-74.2, 40.7, -74.1, 40.8]; // [xmin, ymin, xmax, ymax]
const layer = {
  platform: 'ArcGIS',
  url: 'https://example.com/FeatureServer/0',
  labelFields: ['name'],
  where: 'status = "open"'
};
const zoom = 15;
const queryUrl = getUrl(extent, layer, zoom);
// → returns constructed ArcGIS query URL
```

---

#### `processFeaturesArcGIS(data, token, gisLayer)`
Processes and adds GIS features from **ArcGIS** response data to the appropriate map layer.

- Handles ArcGIS response objects containing features and/or error.
- Supports Point, MultiPoint, Polygon, and Polyline geometries.
- Applies offset as configured in layer settings.
- Assigns feature properties and labels; deduplicates points.
- Updates global feature collections.
- Manages UI feedback for errors/success.
- Aborts work if `token.cancel === true` at any moment.

**Parameters:**

| Name      | Type      | Description                                                                                  |
|-----------|-----------|----------------------------------------------------------------------------------------------|
| `data`    | `Object`  | ArcGIS response object. Should include `.features` (Array) and/or `.error`.                  |
| `token`   | `Object`  | Cancellation token object. If `token.cancel === true`, aborts all processing.                |
| `gisLayer`| `GisLayer`| GIS layer descriptor (`id`, `isRoadLayer`, `name`, etc).                                     |

**Returns:**  
`void`

**Example:**  
```javascript
processFeaturesArcGIS(
  { features: [ { geometry: { x: 1, y: 2 } } ] },
  { cancel: false },
  { id: 'roads', isRoadLayer: true, name: 'Streets' }
);
```

---

#### `processFeaturesGeoJSON(data, token, gisLayer)`
Processes and adds features from a **GeoJSON** FeatureCollection or Feature array to the appropriate GIS map layer.

- Handles geometry flattening (`turf.flatten`), offsetting, line clipping, label assignment, and deduplication.
- Updates global feature collections and provides UI feedback.
- Aborts work if `token.cancel === true` at any moment.

**Parameters:**

| Name      | Type      | Description                                                               |
|-----------|-----------|---------------------------------------------------------------------------|
| `data`    | `Object`  | GeoJSON response object with a `features` array and possible error fields. |
| `token`   | `Object`  | Cancellation token object. If `token.cancel === true`, aborts processing.  |
| `gisLayer`| `GisLayer`| GIS layer descriptor (`id`, `name`, `isRoadLayer`, etc).                  |

**Returns:**  
`void`

---

#### `whatsInView(forceRefresh?: boolean): Promise<WhatsInViewResult>`

Asynchronously determines which geographical regions are visible within the current map viewport.

Retrieves the current map extent in WGS84, constructs a [`ViewportBBox`](#ViewportBBox), and passes it to [`WmeGisLBBOX.whatsInView`](#WmeGisLBBOX.whatsInView) with high-precision intersection checks.  
The results are cached in an upper-scope `_whatsInView` variable and also returned from this function.

Result caching is based on the current map extent. If the viewport has not changed since the last call and `forceRefresh` is not set, returns the cached result instead of recomputing.

**Steps:**
1. Get current map extent in the "wgs84" coordinate system.
2. If the extent is unchanged and `forceRefresh` is `false`, return the cached result.
3. Convert extent into a [`ViewportBBox`](#ViewportBBox) (`minLon`, `minLat`, `maxLon`, `maxLat`).
4. Call [`WmeGisLBBOX.whatsInView`](#WmeGisLBBOX.whatsInView) with high-precision enabled and `returnGeoJson` disabled.
5. Store and return the detailed intersecting regions as a [`WhatsInViewResult`](#WhatsInViewResult).

**Parameters:**

| Name           | Type      | Description                                                     |
|----------------|-----------|-----------------------------------------------------------------|
| `forceRefresh` | `boolean` | (Optional) If `true`, forces a refresh even if the viewport has not changed since last call. Default is `false`. |

**Returns:**  
`Promise<WhatsInViewResult>` – The intersecting regions as returned by [`WmeGisLBBOX.whatsInView`](#WmeGisLBBOX.whatsInView).

**Example:**
```js
const regions = await whatsInView();
// regions: { "USA": {...}, "CAN": {...}, ... }
```

---

## Keyboard Shortcuts

| Shortcut            | Function               | Saved in Settings?  |
|---------------------|-----------------------|----------------------|
| Toggle Layers       | Enable/disable overlay| Yes                  |
| Toggle HN Only      | HN-only address labels| Yes                  |

Configure these via 'WME Keyboard Shortcuts'.

---

## UI Reference

**Panels:**
- **Layers Tab:** See/filter all GIS layers for your chosen regions.
- **Settings Tab:** Fine-tune appearance, fonts, region enablement, tokens.
- **Layer Group Manager:** Quick save/load custom layer sets for workflow.

**Popups:**
- **Labels Popup:** Copy, format, view all unique visible GIS labels.

**Dialogs:**
- **Layer Settings:** Right-click a layer label for offset/zoom config.

---

## Troubleshooting

- **No layers loading?**
  - Check region selection (Settings).
  - Ensure Socrata App Token is set for restricted sources.
- **Cannot copy labels?**
  - Make sure your permissions allow clipboard access.
- **Script version error?**
  - Update the script on GreasyFork.

**Contact:** _Use the "Submit a request" link or open an issue on Github._

---

## Contributing

Want to add a layer? Fix a bug?  
- Fork this repo.
- Open pull requests or submit issues.
- Share your improvements!

---

## [Back to Top](#wme-gis-layers-script-documentation)

---