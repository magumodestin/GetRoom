(function() {
    // ----- NAV: hamburger toggle (same pattern as home.js) -----
    const menuTrigger = document.getElementById('menuTrigger');
    const menuPanel = document.getElementById('menuPanel');
    if (menuTrigger && menuPanel) {
        menuTrigger.addEventListener('click', function(e) {
            e.stopPropagation();
            menuPanel.classList.toggle('open');
        });
        document.addEventListener('click', function(e) {
            if (!menuPanel.contains(e.target) && !menuTrigger.contains(e.target)) {
                menuPanel.classList.remove('open');
            }
        });
    }

    // ----- LOAD THE ROOM -----
    // Reads ?id=3 from the URL (set by the "Show details" link on
    // the card) and finds the matching room in the ROOMS array
    // from rooms-data.js.
    const params = new URLSearchParams(window.location.search);
    const roomId = parseInt(params.get('id'), 10);
    const room = ROOMS.find(r => r.id === roomId);

    const page = document.getElementById('detailsPage');

    if (!room) {
        page.innerHTML = `
            <p class="details-loading">We couldn't find that room.</p>
            <a href="home.html" class="back-link">← Back to all rooms</a>
        `;
        return;
    }

    document.title = `${room.title} | GetRoom`;

    // A small icon for each amenity we know about. Anything not in
    // this list just falls back to a plain checkmark, so a new
    // amenity you add later still shows up fine without needing an
    // icon assigned right away.
    const AMENITY_ICONS = {
        "Free WiFi": "📶",
        "Study desk": "📚",
        "Shared kitchen": "🍳",
        "Private bathroom": "🚿",
        "Backup power": "🔋",
        "24hr security": "🔒",
        "Laundry facilities": "🧺",
        "Secure parking": "🅿️",
        "Gym access": "🏋️",
        "Air conditioning": "❄️",
        "Fully furnished": "🛋️",
        "Walking distance to campus": "🚶",
        "Bicycle storage": "🚲",
        "Braai area": "🔥",
        "CCTV surveillance": "📹",
        "Communal lounge": "🛋️"
    };

    page.innerHTML = `
        <a href="javascript:history.back()" class="back-link">← Back</a>
        <div class="details-layout">
            <div class="carousel" data-carousel>
                <div class="carousel-track" data-track>
                    ${room.images.map(src => `<img src="${src}" alt="${room.title}">`).join('')}
                </div>
                <button class="carousel-arrow prev" data-prev aria-label="Previous photo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button class="carousel-arrow next" data-next aria-label="Next photo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <div class="carousel-dots" data-dots></div>
            </div>

            <div class="details-panel">
                <div class="details-title">${room.title}</div>
                <div class="details-location">${room.city}, ${room.province}</div>
                <div class="details-rating">★ ${room.rating}</div>
                <div class="details-price">R ${room.price.toLocaleString()} <span>/ month</span></div>

                <div class="details-address">
                    <strong>Address</strong>
                    ${room.address}
                </div>

                <p class="details-description">${room.description}</p>

                <div class="amenities-title">What this room offers</div>
                <ul class="amenities-list">
                    ${room.amenities.map(item => `<li><span class="amenity-icon">${AMENITY_ICONS[item] || '✅'}</span>${item}</li>`).join('')}
                </ul>

                <button class="enquire-btn" type="button" onclick="alert('Enquiry sent! The host will contact you soon.')">Enquire about this room</button>
            </div>
        </div>
    `;

    // room-cards.js's initCarousel() sets up the photo gallery —
    // it's already loaded on this page before this script runs.
    document.querySelectorAll('[data-carousel]').forEach(initCarousel);
})();
