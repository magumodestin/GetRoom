  (function() {
            // ----- NAV: hamburger toggle -----
            const menuTrigger = document.getElementById('menuTrigger');
            const menuPanel = document.getElementById('menuPanel');
            if (menuTrigger && menuPanel) {
                menuTrigger.addEventListener('click', function(e) {
                    e.stopPropagation();
                    menuPanel.classList.toggle('open');
                });
                // close when clicking outside
                document.addEventListener('click', function(e) {
                    if (!menuPanel.contains(e.target) && !menuTrigger.contains(e.target)) {
                        menuPanel.classList.remove('open');
                    }
                });
                // close on any nav-link click inside panel
                menuPanel.querySelectorAll('.nav-link, .menu-logout-item').forEach(link => {
                    link.addEventListener('click', function() {
                        menuPanel.classList.remove('open');
                    });
                });
            }

            // ----- PROVINCE / CITY logic (same as find.js) -----
            const feedbackTextEl = document.getElementById('feedbackText');
            const feedbackContainer = document.getElementById('feedbackArea');
            const allCategoryItems = document.querySelectorAll('.category-item');

            function showFeedback(message, isCity = false, cityName = '', provinceName = '') {
                let displayMsg = '';
                if (isCity) {
                    displayMsg = `🏙️ Selected city: ${cityName} (${provinceName}) 🏙️`;
                } else {
                    displayMsg = `📌 Selected province: ${message} — click on any city inside the menu`;
                }
                feedbackTextEl.textContent = displayMsg;
                feedbackContainer.classList.add('feedback-highlight');
                setTimeout(() => {
                    feedbackContainer.classList.remove('feedback-highlight');
                }, 300);
            }

            // main buttons
            const mainButtons = document.querySelectorAll('.category-item .cat-btn');
            mainButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const parentItem = btn.closest('.category-item');
                    if (!parentItem) return;
                    const isAlreadyActive = parentItem.classList.contains('active');
                    allCategoryItems.forEach(item => item.classList.remove('active'));
                    if (!isAlreadyActive) {
                        parentItem.classList.add('active');
                        const provinceSpan = btn.querySelector('span:first-child');
                        const provinceName = provinceSpan ? provinceSpan.innerText.trim() : "Province";
                        showFeedback(provinceName, false, '', '');
                    }
                });
            });

            // close when clicking outside
            document.addEventListener('click', () => {
                allCategoryItems.forEach(item => item.classList.remove('active'));
            });

            // city clicks
            const allCities = document.querySelectorAll('.sub-option');
            allCities.forEach(city => {
                city.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const cityName = city.getAttribute('data-city') || city.innerText.trim();
                    const provinceName = city.getAttribute('data-province') || "Province";
                    showFeedback('', true, cityName, provinceName);
                    const params = new URLSearchParams({ city: cityName, province: provinceName });
                    window.location.href = `city-info.html?${params.toString()}`;
                });
            });

            console.log("SA Provinces Explorer + nav ready.");
        })();