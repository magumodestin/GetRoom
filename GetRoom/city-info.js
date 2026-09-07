(function() {
    // ----- NAV: hamburger toggle -----
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

    // ----- READ CITY FROM THE URL -----
    // find.js sends the user here as city-info.html?city=Pretoria&province=Gauteng
    const params = new URLSearchParams(window.location.search);
    const city = params.get('city') || 'Unknown city';
    const province = params.get('province') || '';

    document.title = `Rooms in ${city} | GetRoom`;
    document.getElementById('cityHeading').textContent = `Rooms Near ${city}`;

    // ----- FILTER ROOMS BY CITY -----
    // ROOMS comes from rooms-data.js, renderRoomCards/sortRooms from room-cards.js
    const matchingRooms = ROOMS.filter(
        room => room.city.toLowerCase() === city.toLowerCase()
    );

    const subheading = document.getElementById('citySubheading');
    if (matchingRooms.length > 0) {
        subheading.textContent = `${matchingRooms.length} room${matchingRooms.length > 1 ? 's' : ''} available in ${city}${province ? ', ' + province : ''}.`;
    } else {
        subheading.textContent = `No rooms listed in ${city} yet — check back soon, or try another city.`;
    }

    // ----- SORT -----
    const roomsGrid = document.getElementById('roomsGrid');
    const sortSelect = document.getElementById('sortSelect');

    function draw() {
        const sorted = sortRooms(matchingRooms, sortSelect ? sortSelect.value : 'newest');
        renderRoomCards(roomsGrid, sorted);
    }

    draw();
    if (sortSelect) sortSelect.addEventListener('change', draw);
})();
