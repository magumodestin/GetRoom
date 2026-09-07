GetRoom

GetRoom is a student accommodation platform for South Africa — helping students find budget-to-luxury rooms near their campus, browse by province and city, and view full listing details before reaching out.

Built with plain HTML, CSS, and JavaScript (no frameworks), designed to plug into a PHP/MySQL backend.

---

Features

- Browse rooms — an Airbnb-style card grid with a swipeable photo carousel per listing (touch-swipe on mobile, hover arrows on desktop)
- Search by city — quick search bar on the home page
- Sort listings — Newest, Oldest, Price: Low to High, Price: High to Low
- Province to City explorer — pick one of South Africa's 9 provinces, then a city, to see rooms available there
- Room details page — full address, monthly price, description, and amenities (Free WiFi, Gym access, Security, Laundry, and more) shown with icons
- Responsive navigation — collapses into a hamburger menu on small screens
- 238 sample listings across 36 South African cities, ready to swap for real data

Tech Stack

- HTML5, CSS3, vanilla JavaScript
- No build step, no dependencies — open any .html file in a browser
- Designed for a PHP + MySQL backend (planned)

Project Structure

getroom/
  home.html            Main landing page — hero, search, and the room grid
  home.css
  home.js

  find.html            Province to city picker
  find.css
  find.js

  city-info.html       Shows available rooms for a chosen city
  city-info.js

  room-details.html    Full details for a single room
  room-details.css
  room-details.js

  rooms-data.js        Single source of room data — used by every page
  room-cards.js        Shared card grid, carousel, and sorting logic
  room-cards.css       Shared card and carousel styling

Getting Started

1. Clone the repo
2. Open home.html in your browser (or serve the folder with XAMPP or any local server)
3. Click Find room to browse by province and city, or use the search bar on the home page

No installation or build steps required — it's plain HTML/CSS/JS.

How the pages connect

home.html (Find room) -> find.html (pick province then city) -> city-info.html (Show details) -> room-details.html

All four pages read from the same rooms-data.js file, so a room only ever needs to be added or edited in one place.

Planned

- Connect rooms-data.js to a PHP/MySQL backend so listings come from a real database
- User accounts for landlords to post rooms and students to save favorites
- Booking/enquiry form wired to a backend endpoint

License

Add your preferred license here (e.g. MIT).
