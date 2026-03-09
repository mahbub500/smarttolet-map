<?php
/**
 * dRestaurant Child Theme Functions
 * Enqueues parent + child styles and registers the SmartToLet page template.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ---------------------------------------------------------------
   1. Enqueue parent theme stylesheet + child stylesheet + fonts
--------------------------------------------------------------- */
add_action( 'wp_enqueue_scripts', 'drestaurant_child_enqueue_styles' );
function drestaurant_child_enqueue_styles() {
    // Parent theme
    wp_enqueue_style(
        'drestaurant-parent-style',
        get_template_directory_uri() . '/style.css',
        [],
        wp_get_theme( 'drestaurant' )->get( 'Version' )
    );

    // Child theme
    wp_enqueue_style(
        'drestaurant-child-style',
        get_stylesheet_uri(),
        [ 'drestaurant-parent-style' ],
        wp_get_theme()->get( 'Version' )
    );

    // Google Fonts for SmartToLet template
    wp_enqueue_style(
        'smarttolet-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap',
        [],
        null
    );

    // Leaflet CSS (loaded on all pages; JS only loaded in template)
    wp_enqueue_style(
        'leaflet-css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        [],
        '1.9.4'
    );
}

/* ---------------------------------------------------------------
   2. Register the SmartToLet page template via a filter
   (works without needing a separate plugin)
--------------------------------------------------------------- */
add_filter( 'theme_page_templates', 'drestaurant_child_add_page_templates' );
function drestaurant_child_add_page_templates( $templates ) {
    $templates['page-templates/smarttolet.php'] = __( 'SmartToLet — Rental Listings', 'drestaurant-child' );
    return $templates;
}

/* ---------------------------------------------------------------
   3. Load the correct template file when selected
--------------------------------------------------------------- */
add_filter( 'template_include', 'drestaurant_child_load_page_template' );
function drestaurant_child_load_page_template( $template ) {
    if ( is_page() ) {
        $meta = get_post_meta( get_the_ID(), '_wp_page_template', true );
        if ( 'page-templates/smarttolet.php' === $meta ) {
            $child_template = get_stylesheet_directory() . '/page-templates/smarttolet.php';
            if ( file_exists( $child_template ) ) {
                return $child_template;
            }
        }
    }
    return $template;
}

/* ---------------------------------------------------------------
   4. Enqueue Leaflet JS only on pages that use the template
--------------------------------------------------------------- */
add_action( 'wp_enqueue_scripts', 'drestaurant_child_enqueue_template_scripts' );
function drestaurant_child_enqueue_template_scripts() {
    if ( ! is_page() ) return;
    $meta = get_post_meta( get_the_ID(), '_wp_page_template', true );
    if ( 'page-templates/smarttolet.php' !== $meta ) return;

    wp_enqueue_script(
        'leaflet-js',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        [],
        '1.9.4',
        true
    );
}
