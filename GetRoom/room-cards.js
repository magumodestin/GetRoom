/*
  room-cards.js
  ---------------------------------------------------------------
  Turns an array of room objects (see rooms-data.js) into a grid
  of Airbnb-style cards, each with its own swipeable photo
  carousel and a "Show details" button.

  Used by both home.html and city-info.html so the card design
  only has to be built once.
*/

// Sorts a copy of the rooms array by the chosen option and
// returns the new array (never changes the original ROOMS list).
function sortRooms(rooms, sortBy) {
  const sorted = [...rooms];
  switch (sortBy) {
    case 'newest':
      sorted.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
      break;
    case 'oldest':
      sorted.sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
      break;
    case 'cheap':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'expensive':
      sorted.sort((a, b) => b.price - a.price);
      break;
  }
  return sorted;
}

// Builds the HTML for one room card and drops it into `container`.
function renderRoomCards(container, rooms) {
  container.innerHTML = ''; // clear out anything already there

  if (rooms.length === 0) {
    container.innerHTML = `<p class="no-rooms">No rooms found. Try a different search.</p>`;
    return;
  }

  rooms.forEach(room => {
    const card = document.createElement('article');
    card.className = 'room-card';
    card.innerHTML = `
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
      <div class="room-info">
        <div class="room-title-row">
          <span class="room-name">${room.title}</span>
          <span class="room-rating">★ ${room.rating}</span>
        </div>
        <div class="room-sub">${room.city}, ${room.province}</div>
        <div class="room-price"><span>R ${room.price.toLocaleString()}</span> / month</div>
        <a class="details-btn" href="room-details.html?id=${room.id}">Show details</a>
      </div>
    `;
    container.appendChild(card);
  });

  // Wire up every carousel that just got added to the page.
  container.querySelectorAll('[data-carousel]').forEach(initCarousel);
}

function initCarousel(root) {
  const track = root.querySelector('[data-track]');
  const slides = Array.from(track.children);
  const dotsWrap = root.querySelector('[data-dots]');
  const prevBtn = root.querySelector('[data-prev]');
  const nextBtn = root.querySelector('[data-next]');

  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
  }

  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); goTo(index - 1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); goTo(index + 1); });

  // ---- swipe support ----
  let startX = 0, currentX = 0, dragging = false;

  track.addEventListener('touchstart', (e) => {
    dragging = true;
    startX = e.touches[0].clientX;
    track.style.transition = 'none';
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    currentX = e.touches[0].clientX - startX;
    const percent = (currentX / root.offsetWidth) * 100;
    track.style.transform = `translateX(calc(-${index * 100}% + ${percent}%))`;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    dragging = false;
    track.style.transition = '';
    const threshold = root.offsetWidth * 0.15;
    if (currentX < -threshold) goTo(index + 1);
    else if (currentX > threshold) goTo(index - 1);
    else goTo(index);
    currentX = 0;
  });

  // click left/right half of the image to navigate (desktop)
  track.addEventListener('click', (e) => {
    const rect = root.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width / 2) goTo(index - 1);
    else goTo(index + 1);
  });
}
