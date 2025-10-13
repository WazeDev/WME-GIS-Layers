# Guide: Adding a New GIS Layer (Google Sheet)

This sheet configures WME GIS Layers. Each row defines a layer. Use the descriptions below when adding or editing:

## Column Reference

| Column               | Description                                                                                           | Example/Notes                      |
|----------------------|------------------------------------------------------------------------------------------------------|-------------------------------------|
| `country`            | ISO 3166-1 alpha-3 code for the country the layer covers.                                            | `USA`, `CAN`, `FRA`                |
| `subL1`              | Top-level subdivision (state/province) code, **UPPERCASE**.                                          | `CA`, `TX`, `ON`, `FRA`            |
| `name`               | Display name for the layer (as seen in UI).                                                          | `California Roads`                 |
| `id`                 | Unique identifier, typically country, region, type (lowercase, dashes/underscores).                  | `us-ca-roads`, `can-on-huron-co-streets` |
| `subL2`              | (Optional) Comma-separated list of second-level subdivisions (counties/regions).                     | `Huron`, `Toronto, Peel`           |
| `url`                | GIS service endpoint (ArcGIS, Socrata, etc). Paste full feature-layer URL.                           | `https://.../FeatureServer/0`      |
| `where`              | (Optional) Filter string (SQL or service-specific syntax) to limit results.                          | `STATE_NAME='CA'`                  |
| `labelFields`        | (Optional) Comma-separated field names to use as feature labels.                                     | `Full_StName, Surface`             |
| `processLabel`       | (Optional) JS code to generate custom label. If blank, uses `labelFields`.                           | `return fieldValues.NAME + ' (' + fieldValues.TYPE + ')';` |
| `style`              | Layer style. `"roads"` for lines; other styles as needed (see docs).                                 | `roads`, `state_points`            |
| `visibleAtZoom`      | Minimum zoom level where layer is shown. Leave blank for default.                                    | `14`                               |
| `labelsVisibleAtZoom`| Minimum zoom for showing labels. Leave blank for default.                                            | `15`                               |
| `enabled`            | `1` to enable/show; `0` or blank to disable/hide.                                                    | `1`                                |
| `restrictTo`         | (Optional) Restrict layer by ranks/usernames. `"AM"` for Area Managers.                              | `R5+AM`, `MapOMatic,AM`            |
| `oneTimeAlert`       | (Optional) Message shown to user once when layer is enabled.                                         | `For AMs only!`                    |

---

## Step-by-Step Checklist

### **COUNTRY and Subdivision Codes**  

- [COUNTRY and Subdivision Codes Cheat Sheet:](./COUNTRY-Subdivision-Cheat-Sheet.md)

---

### <u>**name**</u>  
   Human-friendly layer name:

```
   Santa Cruz Co - Address Points
   Santa Cruz Co - Parcels
   Santa Cruz Co - Roads
   Santa Cruz Co - Parks
   Alameda - City Address Points
   Alameda - City Parcels
   Alameda - City Roads
   Alameda Co - Address Points
   Alameda Co - Parcels
   Alameda Co - Streets
```
---

### <u>**id**</u>
   Unique, lowercase identifier: combine country, region, type`.

   ```
   us-ca-alameda-city-pts
   us-ca-alamada-city-parcels
   us-ca-alameda-city-roads
   us-ca-alameda-co-addr-pts
   us-ca-alameda-co-parcels
   us-ca-alameda-co-streets
   ```
---

### <u>**subL2** *(optional)*</u>
   If needed, comma-separated list of counties/regions. See COUNTRY and Subdivision table  above.

---

### <u>**url**</u>  
   Full GIS endpoint that returns data, not a web page.

---

### <u>**where** *(optional)*</u>  
   Write a filter or SQL-like expression to limit records shown.
   
   Field (item) names must match available metadata for the layer.

   Filed (item) used here do NOT have to be in the labelFields list!

   ```
   SYMBOL_CODE <> '106' AND SYMBOL_CODE IS NOT NULL

   confidence = 'nominal' OR confidence = 'high'

   STATE = '01' AND POP100>10000

   R_Type = 'Complete Closure' OR R_Type = 'Special Event'
   ```
    **Tips:**
    - String and numeric comparisons are supported (=, <>, >, etc.).
    - Use logical operators (AND, OR) to combine conditions.
    - Check your layer’s field names in its metadata before creating a filter.

---

### <u>**labelFields** *(optional)*</u>
   Provide a comma-separated list of field names used for labeling map features.
   
   By default, the label will be a space-separated string of the non-NULL values from these fields.
   
   Examples:
   ```
   NAME

   STATE,COUNTY
   
   HOUSE_NUMBER,ROAD_NAME
   ```
   Tip: Double-check the field names in your data layer’s metadata.

---

### <u>**processLabel** *(optional)*</u>

Write JavaScript code that returns a custom label string for your map features.  
You have access to a `fieldValues` object with your feature’s data fields.

Often used to clean, format, or combine address fields, using the `label` variable and GIS-L built-in regex rules (`_regexReplace`).

---

#### How to Use Custom Regex Label/Address Cleaning Rules

- GIS-L provides ready-to-use regular expressions (`_regexReplace`) for cleaning and formatting labels or address strings.
- Use these to standardize, simplify, or split up your address/label fields.
- You always start with a variable called `label` (the input string to clean).

**Applying a Rule:**  
Use: `return label.replace(_regexReplace.rX, 'replacement string');`  
Where `rX` is a rule from the list below.

---

#### **Rule Reference**

- **r0 — Strip leading zeros or blank if label starts with non-digit**  
  Pattern: `/^(0+(\s.*)?|\D.*)/`  
  Removes labels beginning with '0' or a non-digit.  
  Usage:  
  `return label.replace(_regexReplace.r0, '');`  
  Example:  
    - `'000 Main St' → ''`  
    - `'N/A' → ''`

- **r1 — Truncate after the street type**  
  Pattern includes common street types.  
  Usage:  
  `return label.replace(_regexReplace.r1, '$1$2');`  
  Example:  
    - `'123 Main Street Apt 4B' → '123 Main Street'`

- **r2 — Remove ZIP code at end**  
  Pattern: `/\s\d{5}$/`  
  Usage:  
  `return label.replace(_regexReplace.r2, '');`  
  Example:  
    - `'123 Main St 90210' → '123 Main St'`

- **r3 — Remove everything after ",", "~", or ";"**  
  Pattern: `/(~|,|;|\s?\r\n).*$/`  
  Usage:  
  `return label.replace(_regexReplace.r3, '');`  
  Example:  
    - `'123 Main St, Apt 2B' → '123 Main St'`  
    - `'123 Main St ~Former Name' → '123 Main St'`

- **r4 — Move trailing numbers to the front**  
  Pattern: `/^(.*)\s(\d+).*/`  
  Usage:  
  `return label.replace(_regexReplace.r4, '$2 $1');`  
  Example:  
    - `'Main St 260' → '260 Main St'`

- **r5 — Insert newline after digits (including "-")**  
  Pattern: `/^([-\d]+)\s+([^,]+).*/`  
  Usage:  
  `return label.replace(_regexReplace.r5, '$1\n$2');`  
  Example:  
    - `'123-125 Main Street, Upper Level' → '123-125\nMain Street'`

- **r6 — Newline between numbers and street**  
  Pattern: `/^(\d+)\s+(.*)/`  
  Usage:  
  `return label.replace(_regexReplace.r6, '$1\n$2');`  
  Example:  
    - `'123 Main Street' → '123\nMain Street'`

---

#### **Chaining Example**

You can combine multiple replacements for more powerful cleaning.

Example:  
`return label.replace(_regexReplace.r0, '').replace(_regexReplace.r2, '').replace(_regexReplace.r3, '').replace(_regexReplace.r5, '$1\n$2');`  

This blanks zero addresses, removes ZIP codes, strips after comma or tilde, and splits the number/street onto two lines.

---

#### **Complete Sample Usage**

To clean and format a typical address label:

`return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r2, '').replace(_regexReplace.r3, '');`

Or quickly split number/street for map popups:

`return label.replace(_regexReplace.r0, '').replace(_regexReplace.r6, '$1\n$2');`

---

**Tips:**  
- Use `fieldValues.FIELDNAME` if you need to build your own string from specific record fields.
- Test your rules with your own data!
- You can use `.toUpperCase()`, `.trim()`, and other JS string methods for extra tweaks.

---

### <u>**Advanced processLabel Examples**</u>

For more complex needs, you can use a variety of JavaScript logic in your `processLabel` function—including value mapping, conditional assembly, concatenation, and multi-field formatting using the `fieldValues` object. Here are some advanced patterns:

---

#### 1. Value Mapping with Code Translation

Map code numbers to readable labels and combine with other fields.

```javascript
var FEATURE_TYPE_MAP = {
  "6": "Divided Paved Road",
  "9": "Four Lane Undivided Paved Road",
  "8": "Two Lane Undivided Paved Road",
  "7": "One Lane Undivided Paved Road",
  "5": "Two Lane Gravel Road",
  "4": "One Lane Gravel Road",
  "14": "Dry-Weather Road",
  "3": "Interchange Ramp",
  "12": "Winter Road",
  "2": "Ford/Winter Crossing",
  "10": "Driveway",
  "1": "Ferry Crossing"
};

var label = "";
if (fieldValues.FEATURE_TYPE) {
  // Use mapped description if available, else code value
  var mapped = FEATURE_TYPE_MAP[fieldValues.FEATURE_TYPE];
  label += mapped ? mapped : fieldValues.FEATURE_TYPE;
}
if (fieldValues.ROAD_CLASS) {
  label += ' | ' + fieldValues.ROAD_CLASS;
}
return label;
```

#### 2. Concatenation and Field Checks

Add only fields that exist, joining with pipe delimiters.

```javascript
var label = "";
if (fieldValues.FULLNAME) {
  label += fieldValues.FULLNAME;
}
if (fieldValues.GENERICSURFACETYPE) {
  label += ' | ' + fieldValues.GENERICSURFACETYPE;
}
if (fieldValues.SPEED) {
  label += ' | KMH: ' + fieldValues.SPEED;
}
return label;
```

#### 3. Declarative Array Assembly

Build your label by assembling a list, skipping empty values, and joining by |.

```javascript
label = [
  // Street name/detail
  fieldValues.StandardizedStreetName ? [
    fieldValues.StandardizedStreetName,
    fieldValues.StreetType,
    fieldValues.SuffixDirection
  ].filter(Boolean).join(' ') : null,

  // Surface type
  fieldValues.SurfaceType || null,

  // Speed zone
  fieldValues.SpeedZone ? 'KMH: ' + fieldValues.SpeedZone : null

].filter(Boolean).join(' | ');

return label;
```

**Pro Tips**
- Advanced logic allows you to format numbers, abbreviate values, or control which fields appear for different feature types.
- You can combine these JavaScript patterns with regex cleaning methods for even more flexibility.
- Always test your script in WME and check for errors.

---

### <u>**processLabel Known Limitations & Issues**</u>

- [Limitations & Unsupported Features of ESTreeProcessor:](./ESTreeProcessor.md)

- **Access to "external" variables is LIMITED.**  
  - Only the following globals are accessible, `sdk`, `Math`, `_regexReplace`, `parseInt` , `Number` , `Boolean` and `Date`.
  - These restrictions are intended to keep your label scripts simple, safe, and fast. Most common address formatting and mapping tasks do not require advanced JS features.
  - If your script needs a function, object, or utility that's not available, **let the developer know so it can be safely added.**

---


###   <u>**style**</u>  
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

###   <u>**visibleAtZoom**</u>
    Minimum zoom for layer to appear (number). (12 most zoomed out to 22 most Zoomed in)
    Defult is not set is 18!

---

###   <u>**labelsVisibleAtZoom** *(optional)*</u>
    Minimum zoom for labels (number).  Must be <= to `visibleAtZoom`
    Defult is `visibleAtZoom` value -1.

---

###   <u>**enabled**</u>
    `1` to show layer in the script.
    `0` or blank to hide in the script.

---

###   <u>**restrictTo** *(optional)*</u>
Some GIS layers use a `restrictTo` field to specify which users or roles can access (view/edit) the layer in WME.  
The parser interprets the contents of this field and sets `layerDef.notAllowed` accordingly.

### How It Works

- The `restrictTo` field (if present) should be a comma-separated string, such as:  
  `R4,AM,johndoe`
- Each entry describes a group or user:
    - **`R#`**: Restrict to users of rank `#` (Waze editor rank `<#>`). Supports optional `+AM` (area manager):  
      - `R4` = rank 4+
      - `R4+AM` = rank 4+ who are area managers
      - `AM` = any area manager
    - **Usernames**: Restrict to an individual (case-insensitive), e.g. `johndoe`

### Permission Checking

When the script loads a layer with `restrictTo`:

1. It splits the string into entries.
2. For each entry, it checks:
    - Does the current user have the required rank? For `R#`, is user rank `>= #`? For `+AM`, also require Area Manager status.
    - Is the current user an Area Manager (`AM`)?
    - Does the entry match the user's username?
3. If **any** entry matches the current user, permission is **granted** (`layerDef.notAllowed = false`).
4. If **no** entry matches, the layer is **restricted** (`layerDef.notAllowed = true`).

---

###   <u>**oneTimeAlert** *(optional)*</u>
Message (info/caution) shown to the user once when they enable the layer in the script.

---

## Tips & Best Practices

- **id** must be globally unique
- **url** should directly return GIS features—not a web page!
- Use `"roads"` style for road/line layers
- Only official codes for country/subdivision
- Use `restrictTo` to control sensitive layers

---

## Validation Checklist

- Required fields (`country`, `subL1`, `name`, `id`, `url`) are filled
- **url** returns valid GIS data (test it!)
- **id** does not duplicate any other layer
- Any `processLabel` code returns a label string
- Zoom levels fit map plan
- Each loaded layer is logged with metadata and timing info (ID, name, source, fetch/processing time), for troubleshooting and validation.

---