/* ===========================================
   SmartToLet — Inline JavaScript Controller
   Scoped to the STL namespace to avoid
   conflicts with WordPress / dRestaurant JS.

   Google Maps version — uses:
   - google.maps.Map
   - google.maps.marker.AdvancedMarkerElement  (replaces deprecated Marker)
   - Async-safe: waits for google object instead of double-loading the API

   IMPORTANT — Do NOT add a second Google Maps <script> tag.
   Directorist already loads the Maps API. In functions.php, make
   this script depend on Directorist's map handle so it loads after:

     wp_enqueue_script(
         'stl-front',
         get_template_directory_uri() . '/js/Front.js',
         array( 'jquery', 'directorist-google-map' ),
         '1.0',
         true
     );
=========================================== */

jQuery(document).ready(function ($) {

    var stl_words = [
        "Rental",
        "Home",
        "Sublet",
        "Bachelor",
        "Apartment",
        "Flat",
        "Room"
    ];
    var stl_index = 0;
    var stl_charIndex = 0;
    var stl_currentWord = "";
    var stl_el = $(".stl-flip-word");

    function typeEffect() {
        if (stl_charIndex < stl_words[stl_index].length) {
            stl_currentWord += stl_words[stl_index].charAt(stl_charIndex);
            stl_el.text(stl_currentWord);
            stl_charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (stl_currentWord.length > 0) {
            stl_currentWord = stl_currentWord.slice(0, -1);
            stl_el.text(stl_currentWord);
            setTimeout(eraseEffect, 50);
        } else {
            stl_index++;
            if (stl_index >= stl_words.length) {
                stl_index = 0;
            }
            stl_charIndex = 0;
            setTimeout(typeEffect, 300);
        }
    }

    typeEffect();

});

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

    /* ================================================
       GOOGLE MAPS — Async-safe readiness check.

       Directorist loads the Maps API asynchronously.
       We poll until google.maps AND google.maps.marker
       are both available before initialising our maps.
       This prevents the "Cannot read properties of
       undefined" crashes seen in the console.
    ================================================ */
    function whenMapsReady(callback) {
        if (
            typeof google !== 'undefined' &&
            typeof google.maps !== 'undefined' &&
            typeof google.maps.marker !== 'undefined' &&
            typeof google.maps.marker.AdvancedMarkerElement !== 'undefined'
        ) {
            callback();
        } else {
            setTimeout(function () { whenMapsReady(callback); }, 250);
        }
    }

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
        var inp = document.getElementById('stlSearchInput');
        if (inp) {
            inp.addEventListener('input', function () {
                searchQuery = this.value.toLowerCase();
                renderListings();
            });
        }
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

    /* ================================================
       GOOGLE MAPS — Home Map
       Uses AdvancedMarkerElement (replaces deprecated
       google.maps.Marker).
       Waits for Maps API to be fully ready before init.
    ================================================ */
    function initHomeMap() {
        var el = document.getElementById('stlHomeMap');
        if (!el) return;

        whenMapsReady(function () {
            if (homeMap) return; // already initialised

            homeMap = new google.maps.Map(el, {
                center: { lat: 51.535, lng: -0.1 },
                zoom: 12,
                mapId: 'STL_HOME_MAP' // required for AdvancedMarkerElement
            });

            STL_DATA.forEach(function (p) {
                var pin = new google.maps.marker.AdvancedMarkerElement({
                    position: { lat: p.lat, lng: p.lng },
                    map: homeMap,
                    title: p.title
                });

                pin.addListener('click', function () {
                    openModal(p.id);
                });

                homeMarkers.push(pin);
            });
        });
    }

    /* ================================================
       GOOGLE MAPS — Main Map (Map tab)
       Same pattern: waits for API, uses
       AdvancedMarkerElement, mapId required.
    ================================================ */
    function initMainMap() {
        var el = document.getElementById('stlMainMap');
        if (!el) return;

        whenMapsReady(function () {
            if (!mainMap) {
                mainMap = new google.maps.Map(el, {
                    center: { lat: 51.535, lng: -0.1 },
                    zoom: 12,
                    mapId: 'STL_MAIN_MAP' // required for AdvancedMarkerElement
                });
            }

            renderMapMarkers();
            renderMapSidebar();

            document.querySelectorAll('#stlMapCategoryTabs .stl-category-tab').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    activeMapCat = this.dataset.cat;
                    document.querySelectorAll('#stlMapCategoryTabs .stl-category-tab').forEach(function (b) {
                        b.classList.remove('active');
                    });
                    this.classList.add('active');
                    renderMapMarkers();
                    renderMapSidebar();
                });
            });
        });
    }

    /* ================================================
       GOOGLE MAPS — Render markers
       Uses AdvancedMarkerElement.
       To remove markers: set .map = null (not setMap).
    ================================================ */
    function renderMapMarkers() {
        // AdvancedMarkerElement: remove by setting map property to null
        mainMarkers.forEach(function (m) { m.map = null; });
        mainMarkers = [];

        var filtered = STL_DATA.filter(function (p) {
            return activeMapCat === 'all' || p.category === activeMapCat;
        });

        filtered.forEach(function (p) {
            var pin = new google.maps.marker.AdvancedMarkerElement({
                position: { lat: p.lat, lng: p.lng },
                map: mainMap,
                title: p.title
            });

            pin.addListener('click', function () {
                openModal(p.id);
            });

            mainMarkers.push(pin);
        });
    }

    /* ---- Map Sidebar (unchanged) ---- */
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