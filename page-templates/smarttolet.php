<?php
/**
 * Template Name: SmartToLet — Rental Listings
 * Template Post Type: page
 *
 * A full-featured rental listing page with interactive map,
 * property cards, category filters, and a post-property form.
 *
 * @package dRestaurant Child
 */

get_header();
?>

<!-- SmartToLet Template Wrapper -->
<div class="smarttolet-template">

    <!-- =============================================
         Page Tab Navigation
    ============================================= -->
   <!--  <div class="stl-container" style="padding-top:1.5rem;">
        <div class="stl-page-tabs" id="stlPageTabs">
            <button class="stl-page-tab active" data-tab="home">🏠 Home</button>
            <button class="stl-page-tab" data-tab="listings">📋 Listings</button>
            <button class="stl-page-tab" data-tab="map">🗺️ Map Search</button>
            <button class="stl-page-tab" data-tab="post">➕ Post Property</button>
        </div>
    </div> -->

    <!-- =============================================
         TAB: HOME
    ============================================= -->
    <div class="stl-tab-panel active" id="stl-tab-home">

        <!-- Hero -->
        <section class="stl-hero">
            <div class="stl-orb stl-hero-orb-1"></div>
            <div class="stl-orb stl-hero-orb-2"></div>
            <div class="stl-orb stl-hero-orb-3"></div>
            <div class="stl-grid-overlay"></div>

            <div class="stl-container stl-hero-content">
                <div class="stl-hero-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color:hsl(158 55% 45%)"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                    All Tolet are 100% free
                    <span class="stl-pulse-dot"></span>
                </div>

                <h1 class="stl-hero-title">
                    Find Your 
                    <span class="stl-flip-wrapper">
                        <span class="stl-flip-word stl-gradient-text">Home</span>
                    </span>
                    <br>
                    on the <span class="stl-gradient-text">Google</span> Map
                </h1>

                <p class="stl-hero-description">
                    Browse rooms, flats, and houses with our interactive map. Click any marker to see details instantly — no fees, no middlemen.
                </p>

                <div class="stl-hero-buttons">
                    <a href="#stl-map" class="stl-btn stl-btn-lg stl-btn-primary stl-cta-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        Search on Map
                    </a>
                    <button class="stl-btn stl-btn-lg stl-btn-outline" onclick="STL.switchTab('listings')">
                        Browse Listings
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                </div>

                <div class="stl-hero-stats">
                    <div class="stl-stat-item">
                        <span class="stl-stat-value" id="stlTotalCount">6+</span>
                        <span class="stl-stat-label">Active Listings</span>
                    </div>
                    <div class="stl-stat-item">
                        <span class="stl-stat-value">3</span>
                        <span class="stl-stat-label">Property Types</span>
                    </div>
                    <div class="stl-stat-item">
                        <span class="stl-stat-value">Free</span>
                        <span class="stl-stat-label">Always &amp; Forever</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Map Preview -->
        <section class="stl-map-preview">
            <div class="stl-container">
                <div id="stl-map" class="stl-section-header">
                   <span class="stl-section-tag">
                        <span class="stl-map-marker">
                            <span class="stl-dot"></span>
                        </span>
                        Live Map
                    </span>
                    <h2 class="stl-section-title">Explore Properties on the Map</h2>
                    <p class="stl-section-description">Click any pin to view property details instantly</p>
                </div>
                <div class="stl-map-container">
                    <div id="stlHomeMap"></div>
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section class="stl-how-it-works">
            <div class="stl-container">
                <div class="stl-section-header">
                    <span class="stl-section-tag text-primary">Simple Process</span>
                    <h2 class="stl-section-title">How It Works</h2>
                    <p class="stl-section-description">Three simple steps to find your new home</p>
                </div>
                <div class="stl-steps-grid">
                    <div class="stl-step-card">
                        <span class="stl-step-number">01</span>
                        <div class="stl-step-icon" style="background:hsl(213 85% 50% / 0.15);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(213 85% 50%)" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        </div>
                        <h3 class="stl-step-title">Search</h3>
                        <p class="stl-step-description">Use our interactive map or filters to browse available properties in your area.</p>
                    </div>
                    <div class="stl-step-card">
                        <span class="stl-step-number">02</span>
                        <div class="stl-step-icon" style="background:hsl(248 70% 60% / 0.15);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(248 70% 60%)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <h3 class="stl-step-title">Explore</h3>
                        <p class="stl-step-description">Click on map markers to instantly view property details, photos, and amenities.</p>
                    </div>
                    <div class="stl-step-card">
                        <span class="stl-step-number">03</span>
                        <div class="stl-step-icon" style="background:hsl(158 55% 45% / 0.15);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(158 55% 45%)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <h3 class="stl-step-title">Connect</h3>
                        <p class="stl-step-description">Contact the property owner directly. No middlemen, no fees.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="stl-features">
            <div class="stl-container">
                <div class="stl-section-header">
                    <h2 class="stl-section-title">Why SmartToLet?</h2>
                    <p class="stl-section-description">Everything you need to find the perfect home</p>
                </div>
                <div class="stl-features-grid">
                    <div class="stl-feature-card">
                        <div class="stl-feature-icon" style="background:hsl(158 55% 45% / 0.15);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(158 55% 45%)" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </div>
                        <h3 class="stl-feature-title">Free Forever</h3>
                        <p class="stl-feature-description">No charges for listings or browsing, ever</p>
                    </div>
                    <div class="stl-feature-card">
                        <div class="stl-feature-icon" style="background:hsl(213 85% 50% / 0.15);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(213 85% 50%)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <h3 class="stl-feature-title">Map Search</h3>
                        <p class="stl-feature-description">Visual property discovery on interactive maps</p>
                    </div>
                    <div class="stl-feature-card">
                        <div class="stl-feature-icon" style="background:hsl(248 70% 60% / 0.15);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(248 70% 60%)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <h3 class="stl-feature-title">Instant Details</h3>
                        <p class="stl-feature-description">View property info with a single click</p>
                    </div>
                    <div class="stl-feature-card">
                        <div class="stl-feature-icon" style="background:hsl(35 90% 55% / 0.15);">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(35 90% 55%)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <h3 class="stl-feature-title">Direct Contact</h3>
                        <p class="stl-feature-description">Connect with owners directly, no middlemen</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Categories -->
        <section class="stl-categories">
            <div class="stl-container">
                <div class="stl-section-header">
                    <h2 class="stl-section-title">Property Categories</h2>
                    <p class="stl-section-description">Find exactly what you're looking for</p>
                </div>
                <div class="stl-categories-grid">
                    <div class="stl-category-card" onclick="STL.goToCategory('room')">
                        <div class="stl-category-icon" style="background:hsl(158 55% 45% / 0.14);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(158 55% 45%)" stroke-width="2"><path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
                        </div>
                        <h3 class="stl-category-title">Rooms</h3>
                        <p class="stl-category-description">Affordable rooms in shared houses</p>
                        <span class="stl-category-count" id="stlRoomCount">Loading…</span>
                    </div>
                    <div class="stl-category-card" onclick="STL.goToCategory('flat')">
                        <div class="stl-category-icon" style="background:hsl(213 85% 50% / 0.14);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(213 85% 50%)" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
                        </div>
                        <h3 class="stl-category-title">Flats</h3>
                        <p class="stl-category-description">Modern flats and apartments</p>
                        <span class="stl-category-count" id="stlFlatCount" style="background:hsl(213 85% 50% / 0.14);color:hsl(213 85% 50%)">Loading…</span>
                    </div>
                    <div class="stl-category-card" onclick="STL.goToCategory('house')">
                        <div class="stl-category-icon" style="background:hsl(248 70% 60% / 0.14);">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(248 70% 60%)" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </div>
                        <h3 class="stl-category-title">Houses</h3>
                        <p class="stl-category-description">Family houses and cottages</p>
                        <span class="stl-category-count" id="stlHouseCount" style="background:hsl(248 70% 60% / 0.14);color:hsl(248 70% 60%)">Loading…</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Recent Listings -->
        <section class="stl-listings-section">
            <div class="stl-container">
                <div class="stl-recent-header">
                    <div>
                        <span class="stl-section-tag text-primary">Latest</span>
                        <h2 class="stl-section-title">Recent Listings</h2>
                        <p class="stl-section-description">Fresh properties added recently</p>
                    </div>
                    <button class="stl-btn stl-btn-outline" onclick="STL.switchTab('listings')">
                        View All
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                </div>
                <div class="stl-listings-grid" id="stlFeaturedListings"></div>
            </div>
        </section>

        <!-- CTA -->
        <section class="stl-cta">
            <div class="stl-orb stl-cta-orb-1"></div>
            <div class="stl-orb stl-cta-orb-2"></div>
            <div class="stl-container stl-cta-content">
                <span class="stl-cta-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
                    Zero fees, always
                </span>
                <h2 class="stl-cta-title">List Your Property<br>for Free Today</h2>
                <p class="stl-cta-description">Reach thousands of potential tenants. No hidden fees, no commissions. Just post and connect.</p>
                <div class="stl-cta-buttons">
                    <button class="stl-btn stl-btn-lg stl-btn-white" onclick="STL.switchTab('post')">Post Your Property</button>
                    <button class="stl-btn stl-btn-lg stl-btn-outline-white" onclick="STL.switchTab('listings')">Browse Listings</button>
                </div>
            </div>
        </section>

    </div><!-- /tab-home -->    

    <!-- Modal -->
    <div class="stl-modal-overlay stl-hidden" id="stlModal">
        <div class="stl-modal-content">
            <button class="stl-modal-close" id="stlModalClose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="stl-modal-body" id="stlModalBody"></div>
        </div>
    </div>

    <!-- Toasts -->
    <div class="stl-toast-container" id="stlToastContainer"></div>

</div><!-- /smarttolet-template -->



<?php get_footer(); ?>
