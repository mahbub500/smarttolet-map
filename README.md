# dRestaurant Child — SmartToLet

A WordPress child theme of **dRestaurant** (by wpWax) that adds a
fully featured **SmartToLet Rental Listings** page template.

---

## Installation

1. **Upload** the `drestaurant-child` folder to `wp-content/themes/`.
2. In WordPress Admin → **Appearance → Themes**, activate **dRestaurant Child - SmartToLet**.
   (The parent dRestaurant theme must also be installed, but does not need to be active.)
3. Go to **Pages → Add New** (or edit any existing page).
4. In the right-hand **Page Attributes** panel, open the **Template** dropdown.
5. Select **SmartToLet — Rental Listings** and publish/update.
6. Visit the page on the front end — the full SmartToLet interface will appear.

---

## File Structure

```
drestaurant-child/
├── style.css                        ← Child theme header + all SmartToLet CSS
├── functions.php                    ← Enqueue styles, register & load template
└── page-templates/
    └── smarttolet.php               ← The page template (HTML + JS)
```

---

## Customising Property Data

Sample listings live in the `STL_DATA` JavaScript array inside
`page-templates/smarttolet.php`.  Each listing object has:

| Key           | Type   | Description                      |
|---------------|--------|----------------------------------|
| `id`          | int    | Unique identifier                |
| `title`       | string | Property headline                |
| `category`    | string | `room` / `flat` / `house`        |
| `price`       | int    | Monthly rent in £                |
| `location`    | string | Display address                  |
| `beds`        | int    | Number of bedrooms               |
| `baths`       | int    | Number of bathrooms              |
| `area`        | int    | Floor area in m²                 |
| `tags`        | array  | Feature tags shown on card       |
| `description` | string | Full property description        |
| `owner`       | string | Landlord name                    |
| `phone`       | string | Contact phone                    |
| `email`       | string | Contact email                    |
| `lat` / `lng` | float  | GPS coordinates for map marker   |
| `image`       | string | Image URL                        |

To pull live data from WordPress, replace the `STL_DATA` variable with a
`wp_localize_script()` call in `functions.php` that outputs your ACF or
custom post type data as JSON.

---

## Dependencies (loaded automatically)

- **Leaflet.js 1.9.4** — interactive map (CDN)
- **Google Fonts** — Space Grotesk + Plus Jakarta Sans (CDN)

All other styles and scripts are self-contained in the theme files.
