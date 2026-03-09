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
    <div class="stl-container" style="padding-top:1.5rem;">
        <div class="stl-page-tabs" id="stlPageTabs">
            <button class="stl-page-tab active" data-tab="home">🏠 Home</button>
            <button class="stl-page-tab" data-tab="listings">📋 Listings</button>
            <button class="stl-page-tab" data-tab="map">🗺️ Map Search</button>
            <button class="stl-page-tab" data-tab="post">➕ Post Property</button>
        </div>
    </div>

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
                    All listings are 100% free
                    <span class="stl-pulse-dot"></span>
                </div>

                <h1 class="stl-hero-title">
                    Find Your <span class="stl-gradient-text">Perfect Rental</span> on the Map
                </h1>

                <p class="stl-hero-description">
                    Browse rooms, flats, and houses with our interactive map. Click any marker to see details instantly — no fees, no middlemen.
                </p>

                <div class="stl-hero-buttons">
                    <button class="stl-btn stl-btn-lg stl-btn-primary stl-cta-btn" onclick="STL.switchTab('map')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        Search on Map
                    </button>
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
                <div class="stl-section-header">
                    <span class="stl-section-tag">📍 Live Map</span>
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

    <!-- =============================================
         TAB: LISTINGS
    ============================================= -->
    <div class="stl-tab-panel" id="stl-tab-listings">
        <div class="stl-container" style="padding-top:1rem;padding-bottom:3rem;">
            <div class="stl-page-header">
                <h1 class="stl-page-title">Browse Properties</h1>
                <p class="stl-page-description">Find your next home from our free listings</p>
            </div>

            <div class="stl-listings-controls">
                <div class="stl-search-bar">
                    <svg class="stl-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input type="text" id="stlSearchInput" class="stl-input-field" placeholder="Search by title or location…">
                </div>
            </div>

            <div class="stl-category-tabs" id="stlCategoryTabs">
                <button class="stl-category-tab active" data-cat="all">All</button>
                <button class="stl-category-tab" data-cat="room">Rooms</button>
                <button class="stl-category-tab" data-cat="flat">Flats</button>
                <button class="stl-category-tab" data-cat="house">Houses</button>
            </div>

            <p class="stl-results-count" id="stlResultsCount"></p>
            <div class="stl-listings-grid" id="stlAllListings"></div>
            <div class="stl-no-results stl-hidden" id="stlNoResults">
                <div class="stl-no-results-icon">🏠</div>
                <p>No properties found matching your criteria.</p>
                <button class="stl-btn stl-btn-outline" onclick="STL.clearFilters()">Clear Filters</button>
            </div>
        </div>
    </div><!-- /tab-listings -->

    <!-- =============================================
         TAB: MAP SEARCH
    ============================================= -->
    <div class="stl-tab-panel" id="stl-tab-map">
        <div class="stl-map-page-layout">
            <div class="stl-map-sidebar">
                <div class="stl-sidebar-header">
                    <h2 class="stl-sidebar-title">Map Search</h2>
                    <div class="stl-category-tabs" id="stlMapCategoryTabs">
                        <button class="stl-category-tab active" data-cat="all">All</button>
                        <button class="stl-category-tab" data-cat="room">Rooms</button>
                        <button class="stl-category-tab" data-cat="flat">Flats</button>
                        <button class="stl-category-tab" data-cat="house">Houses</button>
                    </div>
                </div>
                <div class="stl-sidebar-list" id="stlMapSidebarList">
                    <p class="stl-sidebar-count" id="stlMapCount"></p>
                    <div id="stlMapCards"></div>
                </div>
            </div>
            <div class="stl-map-main">
                <div id="stlMainMap"></div>
            </div>
        </div>
    </div><!-- /tab-map -->

    <!-- =============================================
         TAB: POST PROPERTY
    ============================================= -->
    <div class="stl-tab-panel" id="stl-tab-post">
        <div class="stl-container" style="padding-top:1rem;padding-bottom:3rem;max-width:720px;">
            <div class="stl-page-header">
                <h1 class="stl-page-title">Post Your Property</h1>
                <p class="stl-page-description">List your property for free. No hidden charges.</p>
            </div>

            <form id="stlPropertyForm">
                <div class="stl-form-section">
                    <h2 class="stl-form-section-title">Property Details</h2>
                    <div class="stl-form-group">
                        <label class="stl-form-label" for="stlPropTitle">Title</label>
                        <input type="text" id="stlPropTitle" class="stl-input-field" placeholder="e.g. Modern 2-bed flat in London" required>
                    </div>
                    <div class="stl-form-row">
                        <div class="stl-form-group">
                            <label class="stl-form-label" for="stlPropCategory">Category</label>
                            <select id="stlPropCategory" class="stl-input-field" required>
                                <option value="room">Room</option>
                                <option value="flat">Flat</option>
                                <option value="house">House</option>
                            </select>
                        </div>
                        <div class="stl-form-group">
                            <label class="stl-form-label" for="stlPropPrice">Monthly Rent (£)</label>
                            <input type="number" id="stlPropPrice" class="stl-input-field" placeholder="e.g. 800" required>
                        </div>
                    </div>
                    <div class="stl-form-group">
                        <label class="stl-form-label" for="stlPropLocation">Location</label>
                        <input type="text" id="stlPropLocation" class="stl-input-field" placeholder="e.g. Manchester, M1 2JB" required>
                    </div>
                    <div class="stl-form-row stl-form-row-3">
                        <div class="stl-form-group">
                            <label class="stl-form-label" for="stlPropBeds">Bedrooms</label>
                            <input type="number" id="stlPropBeds" class="stl-input-field" placeholder="0" required min="0">
                        </div>
                        <div class="stl-form-group">
                            <label class="stl-form-label" for="stlPropBaths">Bathrooms</label>
                            <input type="number" id="stlPropBaths" class="stl-input-field" placeholder="0" required min="0">
                        </div>
                        <div class="stl-form-group">
                            <label class="stl-form-label" for="stlPropArea">Area (m²)</label>
                            <input type="number" id="stlPropArea" class="stl-input-field" placeholder="0" min="0">
                        </div>
                    </div>
                    <div class="stl-form-group">
                        <label class="stl-form-label" for="stlPropDescription">Description</label>
                        <textarea id="stlPropDescription" class="stl-input-field stl-textarea" rows="4" placeholder="Describe your property…" required></textarea>
                    </div>
                </div>

                <div class="stl-form-section">
                    <h2 class="stl-form-section-title">Contact Information</h2>
                    <div class="stl-form-group">
                        <label class="stl-form-label" for="stlOwnerName">Your Name</label>
                        <input type="text" id="stlOwnerName" class="stl-input-field" placeholder="Full name" required>
                    </div>
                    <div class="stl-form-row">
                        <div class="stl-form-group">
                            <label class="stl-form-label" for="stlOwnerPhone">Phone</label>
                            <input type="text" id="stlOwnerPhone" class="stl-input-field" placeholder="+44…" required>
                        </div>
                        <div class="stl-form-group">
                            <label class="stl-form-label" for="stlOwnerEmail">Email</label>
                            <input type="email" id="stlOwnerEmail" class="stl-input-field" placeholder="you@example.com" required>
                        </div>
                    </div>
                </div>

                <button type="submit" class="stl-btn stl-btn-lg stl-btn-primary stl-btn-full">Post Property — It&apos;s Free!</button>
            </form>
        </div>
    </div><!-- /tab-post -->

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

<script>
/* ===========================================
   SmartToLet — Inline JavaScript Controller
   Scoped to the STL namespace to avoid
   conflicts with WordPress / dRestaurant JS.
=========================================== */
(function () {
    'use strict';

    /* ---- Sample data (replace with WP REST or ACF calls) ---- */
    var STL_DATA = [
        {
            id: 1, title: "Cosy Room in Shared House",
            category: "room", price: 650,
            location: "Hackney, London",
            beds: 1, baths: 1, area: 18,
            tags: ["Bills Included", "Furnished", "Near Tube"],
            description: "A bright double room in a friendly 4-person house share. All bills included. 5 min walk to Hackney Central station.",
            owner: "Sarah Mitchell", phone: "+44 7700 900100", email: "sarah@example.com",
            lat: 51.549, lng: -0.056,
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
        },
        {
            id: 2, title: "Modern Studio Flat",
            category: "flat", price: 1100,
            location: "Shoreditch, London",
            beds: 1, baths: 1, area: 35,
            tags: ["Gym", "Concierge", "City Centre"],
            description: "A stylish studio apartment in the heart of Shoreditch. New build with high-end finishes and a 24/7 concierge.",
            owner: "James Clarke", phone: "+44 7700 900200", email: "james@example.com",
            lat: 51.522, lng: -0.079,
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
        },
        {
            id: 3, title: "3-Bed Victorian Terrace",
            category: "house", price: 2400,
            location: "Islington, London",
            beds: 3, baths: 2, area: 110,
            tags: ["Garden", "Parking", "Period Features"],
            description: "Spacious Victorian terraced house with a south-facing garden and off-street parking. Recently refurbished.",
            owner: "Emma White", phone: "+44 7700 900300", email: "emma@example.com",
            lat: 51.538, lng: -0.102,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80"
        },
        {
            id: 4, title: "Bright Single Room",
            category: "room", price: 550,
            location: "Bethnal Green, London",
            beds: 1, baths: 1, area: 12,
            tags: ["Bills Included", "Short Let OK"],
            description: "A clean single room in a professional houseshare. Friendly housemates. Close to Victoria Park.",
            owner: "Tom Harris", phone: "+44 7700 900400", email: "tom@example.com",
            lat: 51.527, lng: -0.059,
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
        },
        {
            id: 5, title: "2-Bed Garden Flat",
            category: "flat", price: 1800,
            location: "Stoke Newington, London",
            beds: 2, baths: 1, area: 68,
            tags: ["Garden", "Pets Welcome", "Quiet Street"],
            description: "Lovely ground-floor flat with private garden. Perfect for couples or professionals. Cats and small dogs considered.",
            owner: "Laura Scott", phone: "+44 7700 900500", email: "laura@example.com",
            lat: 51.562, lng: -0.074,
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80"
        },
        {
            id: 6, title: "Large Family Home",
            category: "house", price: 3200,
            location: "Hampstead, London",
            beds: 4, baths: 3, area: 180,
            tags: ["Garden", "Parking", "Near Schools"],
            description: "Spacious detached family home with a large garden, garage, and excellent school catchment area.",
            owner: "David Brown", phone: "+44 7700 900600", email: "david@example.com",
            lat: 51.557, lng: -0.179,
            image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=600&q=80"
        }
    ];

    var homeMap = null, mainMap = null;
    var homeMarkers = [], mainMarkers = [];
    var activeListingsCat = 'all', activeMapCat = 'all';
    var searchQuery = '';

    /* ---- Public API ---- */
    window.STL = {
        switchTab: switchTab,
        goToCategory: goToCategory,
        clearFilters: clearFilters,
        openModal: openModal,
    };

    /* ---- Init ---- */
    document.addEventListener('DOMContentLoaded', function () {
        initTabs();
        initFeatured();
        initListings();
        initHomeMap();
        updateCategoryCounts();
        initPostForm();
        initModal();
    });

    /* ---- Tabs ---- */
    function initTabs() {
        document.querySelectorAll('.stl-page-tab').forEach(function (btn) {
            btn.addEventListener('click', function () {
                switchTab(this.dataset.tab);
            });
        });
    }

    function switchTab(name) {
        document.querySelectorAll('.stl-page-tab').forEach(function (b) {
            b.classList.toggle('active', b.dataset.tab === name);
        });
        document.querySelectorAll('.stl-tab-panel').forEach(function (p) {
            p.classList.toggle('active', p.id === 'stl-tab-' + name);
        });
        if (name === 'map') {
            setTimeout(function () { initMainMap(); }, 100);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ---- Category counts ---- */
    function updateCategoryCounts() {
        var counts = { room: 0, flat: 0, house: 0 };
        STL_DATA.forEach(function (p) { counts[p.category]++; });
        var el = document.getElementById('stlRoomCount');
        if (el) el.textContent = counts.room + ' listing' + (counts.room !== 1 ? 's' : '') + ' available';
        el = document.getElementById('stlFlatCount');
        if (el) el.textContent = counts.flat + ' listing' + (counts.flat !== 1 ? 's' : '') + ' available';
        el = document.getElementById('stlHouseCount');
        if (el) el.textContent = counts.house + ' listing' + (counts.house !== 1 ? 's' : '') + ' available';
        el = document.getElementById('stlTotalCount');
        if (el) el.textContent = STL_DATA.length + '+';
    }

    function goToCategory(cat) {
        activeListingsCat = cat;
        switchTab('listings');
        setTimeout(function () { renderListings(); }, 50);
        document.querySelectorAll('#stlCategoryTabs .stl-category-tab').forEach(function (b) {
            b.classList.toggle('active', b.dataset.cat === cat);
        });
    }

    /* ---- Featured ---- */
    function initFeatured() {
        var el = document.getElementById('stlFeaturedListings');
        if (!el) return;
        var recent = STL_DATA.slice(0, 3);
        el.innerHTML = recent.map(cardHTML).join('');
    }

    /* ---- Listings ---- */
    function initListings() {
        renderListings();
        // Search
        var inp = document.getElementById('stlSearchInput');
        if (inp) {
            inp.addEventListener('input', function () {
                searchQuery = this.value.toLowerCase();
                renderListings();
            });
        }
        // Category tabs
        document.querySelectorAll('#stlCategoryTabs .stl-category-tab').forEach(function (btn) {
            btn.addEventListener('click', function () {
                activeListingsCat = this.dataset.cat;
                document.querySelectorAll('#stlCategoryTabs .stl-category-tab').forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');
                renderListings();
            });
        });
    }

    function renderListings() {
        var filtered = STL_DATA.filter(function (p) {
            var catOk = activeListingsCat === 'all' || p.category === activeListingsCat;
            var searchOk = !searchQuery ||
                p.title.toLowerCase().includes(searchQuery) ||
                p.location.toLowerCase().includes(searchQuery);
            return catOk && searchOk;
        });
        var el = document.getElementById('stlAllListings');
        var noEl = document.getElementById('stlNoResults');
        var countEl = document.getElementById('stlResultsCount');
        if (!el) return;
        if (filtered.length === 0) {
            el.innerHTML = '';
            if (noEl) noEl.classList.remove('stl-hidden');
            if (countEl) countEl.textContent = '0 properties found';
        } else {
            el.innerHTML = filtered.map(cardHTML).join('');
            if (noEl) noEl.classList.add('stl-hidden');
            if (countEl) countEl.textContent = filtered.length + ' propert' + (filtered.length === 1 ? 'y' : 'ies') + ' found';
        }
    }

    function clearFilters() {
        activeListingsCat = 'all';
        searchQuery = '';
        var inp = document.getElementById('stlSearchInput');
        if (inp) inp.value = '';
        document.querySelectorAll('#stlCategoryTabs .stl-category-tab').forEach(function (b) {
            b.classList.toggle('active', b.dataset.cat === 'all');
        });
        renderListings();
    }

    /* ---- Card HTML ---- */
    function cardHTML(p) {
        return '<div class="stl-property-card" onclick="STL.openModal(' + p.id + ')">' +
            '<div class="stl-property-card-image">' +
            '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">' +
            '<span class="stl-property-badge ' + p.category + '">' + p.category + '</span>' +
            '<div class="stl-property-price"><span class="stl-property-price-value">£' + p.price.toLocaleString() + '</span><span class="stl-property-price-period">/mo</span></div>' +
            '</div>' +
            '<div class="stl-property-card-body">' +
            '<h3 class="stl-property-card-title">' + p.title + '</h3>' +
            '<p class="stl-property-card-location">📍 ' + p.location + '</p>' +
            '<div class="stl-property-card-stats">' +
            '<span class="stl-property-stat">🛏 ' + p.beds + ' bed' + (p.beds !== 1 ? 's' : '') + '</span>' +
            '<span class="stl-property-stat">🚿 ' + p.baths + ' bath</span>' +
            (p.area ? '<span class="stl-property-stat">📐 ' + p.area + 'm²</span>' : '') +
            '</div>' +
            '<div class="stl-property-tags">' +
            p.tags.map(function (t) { return '<span class="stl-property-tag">' + t + '</span>'; }).join('') +
            '</div></div></div>';
    }

    /* ---- Home Map ---- */
    function initHomeMap() {
        if (typeof L === 'undefined') return;
        var el = document.getElementById('stlHomeMap');
        if (!el || homeMap) return;
        homeMap = L.map('stlHomeMap').setView([51.535, -0.1], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors', maxZoom: 18
        }).addTo(homeMap);
        STL_DATA.forEach(function (p) {
            var marker = L.marker([p.lat, p.lng]).addTo(homeMap);
            marker.bindPopup('<strong>' + p.title + '</strong><br>£' + p.price + '/mo<br><small>' + p.location + '</small>');
            marker.on('click', function () { openModal(p.id); });
        });
    }

    /* ---- Main Map ---- */
    function initMainMap() {
        if (typeof L === 'undefined') return;
        var el = document.getElementById('stlMainMap');
        if (!el) return;
        if (!mainMap) {
            mainMap = L.map('stlMainMap').setView([51.535, -0.1], 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors', maxZoom: 18
            }).addTo(mainMap);
        }
        renderMapMarkers();
        renderMapSidebar();

        // Category tabs in map
        document.querySelectorAll('#stlMapCategoryTabs .stl-category-tab').forEach(function (btn) {
            btn.addEventListener('click', function () {
                activeMapCat = this.dataset.cat;
                document.querySelectorAll('#stlMapCategoryTabs .stl-category-tab').forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');
                renderMapMarkers();
                renderMapSidebar();
            });
        });
        setTimeout(function () { mainMap.invalidateSize(); }, 200);
    }

    function renderMapMarkers() {
        mainMarkers.forEach(function (m) { mainMap.removeLayer(m); });
        mainMarkers = [];
        var filtered = STL_DATA.filter(function (p) {
            return activeMapCat === 'all' || p.category === activeMapCat;
        });
        filtered.forEach(function (p) {
            var marker = L.marker([p.lat, p.lng]).addTo(mainMap);
            marker.bindPopup('<strong>' + p.title + '</strong><br>£' + p.price + '/mo');
            marker.on('click', function () { openModal(p.id); });
            mainMarkers.push(marker);
        });
    }

    function renderMapSidebar() {
        var filtered = STL_DATA.filter(function (p) {
            return activeMapCat === 'all' || p.category === activeMapCat;
        });
        var countEl = document.getElementById('stlMapCount');
        if (countEl) countEl.textContent = filtered.length + ' propert' + (filtered.length === 1 ? 'y' : 'ies');
        var el = document.getElementById('stlMapCards');
        if (!el) return;
        el.innerHTML = filtered.map(function (p) {
            return '<div class="stl-property-card stl-sidebar-property" onclick="STL.openModal(' + p.id + ')">' +
                '<div class="stl-property-card-image" style="aspect-ratio:16/7;">' +
                '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">' +
                '<span class="stl-property-badge ' + p.category + '">' + p.category + '</span>' +
                '</div>' +
                '<div class="stl-property-card-body">' +
                '<h3 class="stl-property-card-title">' + p.title + '</h3>' +
                '<p class="stl-property-card-location">📍 ' + p.location + '</p>' +
                '<strong style="color:hsl(213 85% 50%);font-family:var(--stl-font-display);">£' + p.price.toLocaleString() + '/mo</strong>' +
                '</div></div>';
        }).join('');
    }

    /* ---- Modal ---- */
    function initModal() {
        var closeBtn = document.getElementById('stlModalClose');
        var overlay = document.getElementById('stlModal');
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (overlay) overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeModal();
        });
    }

    function openModal(id) {
        var p = STL_DATA.find(function (x) { return x.id === id; });
        if (!p) return;
        var body = document.getElementById('stlModalBody');
        var overlay = document.getElementById('stlModal');
        if (!body || !overlay) return;
        body.innerHTML =
            '<img class="stl-modal-image" src="' + p.image + '" alt="' + p.title + '">' +
            '<span class="stl-modal-category-badge">' + p.category + '</span>' +
            '<h2 class="stl-modal-title">' + p.title + '</h2>' +
            '<p class="stl-modal-location">📍 ' + p.location + '</p>' +
            '<p class="stl-modal-price">£' + p.price.toLocaleString() + '<span style="font-size:1rem;color:hsl(215 18% 50%);font-weight:400;">/month</span></p>' +
            '<div class="stl-modal-stats">' +
            '<div class="stl-modal-stat"><strong>' + p.beds + '</strong>Bedroom' + (p.beds !== 1 ? 's' : '') + '</div>' +
            '<div class="stl-modal-stat"><strong>' + p.baths + '</strong>Bathroom' + (p.baths !== 1 ? 's' : '') + '</div>' +
            (p.area ? '<div class="stl-modal-stat"><strong>' + p.area + 'm²</strong>Area</div>' : '') +
            '</div>' +
            '<div class="stl-modal-section">' +
            '<h3 class="stl-modal-section-title">Description</h3>' +
            '<p class="stl-modal-description">' + p.description + '</p>' +
            '</div>' +
            '<div class="stl-modal-section">' +
            '<h3 class="stl-modal-section-title">Features</h3>' +
            '<div class="stl-modal-tags">' + p.tags.map(function (t) { return '<span class="stl-modal-tag">' + t + '</span>'; }).join('') + '</div>' +
            '</div>' +
            '<div class="stl-modal-section">' +
            '<h3 class="stl-modal-section-title">Contact ' + p.owner + '</h3>' +
            '<a class="stl-modal-contact-btn" href="tel:' + p.phone + '">📞 ' + p.phone + '</a>&nbsp;&nbsp;' +
            '<a class="stl-modal-contact-btn" href="mailto:' + p.email + '" style="background:hsl(158 55% 45%)">✉️ Email</a>' +
            '</div>';
        overlay.classList.remove('stl-hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        var overlay = document.getElementById('stlModal');
        if (overlay) overlay.classList.add('stl-hidden');
        document.body.style.overflow = '';
    }

    /* ---- Post Form ---- */
    function initPostForm() {
        var form = document.getElementById('stlPropertyForm');
        if (!form) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            showToast('🎉 Property submitted! We\'ll review and publish it shortly.', 'success');
            form.reset();
        });
    }

    /* ---- Toast ---- */
    function showToast(msg, type) {
        var container = document.getElementById('stlToastContainer');
        if (!container) return;
        var toast = document.createElement('div');
        toast.className = 'stl-toast ' + (type || 'success');
        toast.innerHTML = '<span>' + (type === 'success' ? '✅' : '❌') + '</span><span>' + msg + '</span>';
        container.appendChild(toast);
        setTimeout(function () {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 4000);
    }

}());
</script>

<?php get_footer(); ?>
