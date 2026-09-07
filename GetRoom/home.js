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
        menuPanel.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                menuPanel.classList.remove('open');
            });
        });
    }

    // ----- SEARCH -----
    // Typing a city and pressing Enter takes you straight to that
    // city's results page — same place find.html sends you to.
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(e) {
            if (e.key !== 'Enter') return;
            const city = searchInput.value.trim();
            if (city === '') return;
            const params = new URLSearchParams({ city: city });
            window.location.href = `city-info.html?${params.toString()}`;
        });
    }
    // ----- ABOUT TOGGLE -----
    // Clicking "About" swaps the tagline+button for the About card.
    // Clicking it again swaps back. Both the desktop nav link and
    // the one inside the mobile menu share the "about-link" class,
    // so one listener covers both.
    const heroContent = document.getElementById('heroContent');
    const aboutSection = document.getElementById('about');
    const aboutLinks = document.querySelectorAll('.about-link');

    aboutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // stop the browser's default "#about" jump
            const showingAbout = !aboutSection.hidden;
            aboutSection.hidden = showingAbout;   // hide it if it was showing
            heroContent.hidden = !showingAbout;   // show tagline+button again if About was showing
        });
    });
})();
