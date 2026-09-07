/*
  rooms-data.js
  ---------------------------------------------------------------
  One shared list of rooms. Every page (home, city-info,
  room-details) loads this file and reads from the same ROOMS
  array, so you only ever add/edit a room in ONE place.

  Later, when you connect this to PHP/MySQL, replace this whole
  array with something like:

      let ROOMS = [];
      fetch('get-rooms.php')
        .then(res => res.json())
        .then(data => { ROOMS = data; });
*/

const ROOMS = [
  {
    "id": 1,
    "title": "Single Room in Cape Town",
    "city": "Cape Town",
    "province": "Western Cape",
    "address": "64 Station Road, Cape Town",
    "price": 3300,
    "rating": 4.82,
    "datePosted": "2026-05-28",
    "amenities": [
      "Backup power",
      "Walking distance to campus",
      "Study desk",
      "Fully furnished"
    ],
    "description": "A single room for students, close to campus and public transport in Cape Town.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 2,
    "title": "Single Room in Cape Town",
    "city": "Cape Town",
    "province": "Western Cape",
    "address": "10 Kerk Street, Cape Town",
    "price": 3100,
    "rating": 4.72,
    "datePosted": "2026-06-04",
    "amenities": [
      "Shared kitchen",
      "Private bathroom",
      "CCTV surveillance",
      "Gym access"
    ],
    "description": "A single room for students, close to campus and public transport in Cape Town.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 3,
    "title": "Shared Room in Cape Town",
    "city": "Cape Town",
    "province": "Western Cape",
    "address": "58 Kerk Street, Cape Town",
    "price": 2600,
    "rating": 4.79,
    "datePosted": "2026-04-04",
    "amenities": [
      "Gym access",
      "Bicycle storage",
      "Braai area",
      "Free WiFi",
      "Shared kitchen"
    ],
    "description": "A shared room for students, close to campus and public transport in Cape Town.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 4,
    "title": "Studio Room in Cape Town",
    "city": "Cape Town",
    "province": "Western Cape",
    "address": "88 Long Street, Cape Town",
    "price": 4200,
    "rating": 4.89,
    "datePosted": "2026-06-15",
    "amenities": [
      "Shared kitchen",
      "Laundry facilities",
      "Study desk",
      "24hr security"
    ],
    "description": "A studio room for students, close to campus and public transport in Cape Town.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 5,
    "title": "Studio Room in Cape Town",
    "city": "Cape Town",
    "province": "Western Cape",
    "address": "119 Andries Street, Cape Town",
    "price": 3900,
    "rating": 4.88,
    "datePosted": "2026-06-19",
    "amenities": [
      "Private bathroom",
      "CCTV surveillance",
      "Laundry facilities",
      "Study desk",
      "Gym access",
      "Backup power"
    ],
    "description": "A studio room for students, close to campus and public transport in Cape Town.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 6,
    "title": "Studio Room in Cape Town",
    "city": "Cape Town",
    "province": "Western Cape",
    "address": "19 Andries Street, Cape Town",
    "price": 4400,
    "rating": 4.9,
    "datePosted": "2026-08-26",
    "amenities": [
      "Secure parking",
      "Bicycle storage",
      "Backup power",
      "Study desk"
    ],
    "description": "A studio room for students, close to campus and public transport in Cape Town.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 7,
    "title": "Ensuite Room in Stellenbosch",
    "city": "Stellenbosch",
    "province": "Western Cape",
    "address": "95 President Street, Stellenbosch",
    "price": 4000,
    "rating": 4.49,
    "datePosted": "2026-01-16",
    "amenities": [
      "Walking distance to campus",
      "24hr security",
      "Private bathroom",
      "Fully furnished"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Stellenbosch.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 8,
    "title": "Backpacker Bunk in Stellenbosch",
    "city": "Stellenbosch",
    "province": "Western Cape",
    "address": "45 Kloof Street, Stellenbosch",
    "price": 1600,
    "rating": 4.78,
    "datePosted": "2026-03-01",
    "amenities": [
      "Secure parking",
      "Shared kitchen",
      "Communal lounge",
      "Laundry facilities",
      "Backup power",
      "Fully furnished"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Stellenbosch.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 9,
    "title": "Backpacker Bunk in Stellenbosch",
    "city": "Stellenbosch",
    "province": "Western Cape",
    "address": "16 Van Riebeeck Street, Stellenbosch",
    "price": 2000,
    "rating": 4.49,
    "datePosted": "2026-02-27",
    "amenities": [
      "Study desk",
      "Bicycle storage",
      "24hr security",
      "Laundry facilities"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Stellenbosch.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 10,
    "title": "Bachelor Room in Stellenbosch",
    "city": "Stellenbosch",
    "province": "Western Cape",
    "address": "129 Long Street, Stellenbosch",
    "price": 5200,
    "rating": 4.82,
    "datePosted": "2026-05-26",
    "amenities": [
      "CCTV surveillance",
      "Shared kitchen",
      "Backup power",
      "Communal lounge",
      "Private bathroom"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Stellenbosch.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 11,
    "title": "Studio Room in Stellenbosch",
    "city": "Stellenbosch",
    "province": "Western Cape",
    "address": "104 Jorissen Street, Stellenbosch",
    "price": 5100,
    "rating": 4.83,
    "datePosted": "2026-08-25",
    "amenities": [
      "Secure parking",
      "Shared kitchen",
      "Gym access",
      "Communal lounge",
      "Study desk"
    ],
    "description": "A studio room for students, close to campus and public transport in Stellenbosch.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 12,
    "title": "Single Room in Stellenbosch",
    "city": "Stellenbosch",
    "province": "Western Cape",
    "address": "42 Bree Street, Stellenbosch",
    "price": 2400,
    "rating": 5.0,
    "datePosted": "2026-05-24",
    "amenities": [
      "Braai area",
      "Air conditioning",
      "Study desk",
      "Laundry facilities",
      "Bicycle storage",
      "CCTV surveillance"
    ],
    "description": "A single room for students, close to campus and public transport in Stellenbosch.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 13,
    "title": "Bachelor Room in George",
    "city": "George",
    "province": "Western Cape",
    "address": "31 Bree Street, George",
    "price": 4200,
    "rating": 4.6,
    "datePosted": "2026-05-05",
    "amenities": [
      "Gym access",
      "Bicycle storage",
      "Fully furnished",
      "24hr security",
      "Study desk",
      "Backup power"
    ],
    "description": "A bachelor room for students, close to campus and public transport in George.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 14,
    "title": "Single Room in George",
    "city": "George",
    "province": "Western Cape",
    "address": "69 Jorissen Street, George",
    "price": 3300,
    "rating": 4.66,
    "datePosted": "2026-02-23",
    "amenities": [
      "24hr security",
      "Gym access",
      "Study desk",
      "Fully furnished",
      "Backup power",
      "Bicycle storage"
    ],
    "description": "A single room for students, close to campus and public transport in George.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 15,
    "title": "Shared Room in George",
    "city": "George",
    "province": "Western Cape",
    "address": "43 Prinsloo Street, George",
    "price": 2300,
    "rating": 4.95,
    "datePosted": "2026-01-01",
    "amenities": [
      "Free WiFi",
      "Air conditioning",
      "24hr security",
      "Secure parking",
      "Communal lounge",
      "Study desk"
    ],
    "description": "A shared room for students, close to campus and public transport in George.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 16,
    "title": "Studio Room in George",
    "city": "George",
    "province": "Western Cape",
    "address": "63 Church Street, George",
    "price": 4500,
    "rating": 4.84,
    "datePosted": "2026-02-05",
    "amenities": [
      "Shared kitchen",
      "Study desk",
      "Walking distance to campus",
      "Secure parking",
      "CCTV surveillance",
      "Gym access"
    ],
    "description": "A studio room for students, close to campus and public transport in George.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 17,
    "title": "Backpacker Bunk in George",
    "city": "George",
    "province": "Western Cape",
    "address": "44 Loop Street, George",
    "price": 2200,
    "rating": 4.78,
    "datePosted": "2026-07-15",
    "amenities": [
      "Braai area",
      "Private bathroom",
      "Gym access",
      "Bicycle storage",
      "Walking distance to campus"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in George.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 18,
    "title": "Studio Room in George",
    "city": "George",
    "province": "Western Cape",
    "address": "97 Bree Street, George",
    "price": 5000,
    "rating": 4.54,
    "datePosted": "2026-06-11",
    "amenities": [
      "CCTV surveillance",
      "Study desk",
      "Private bathroom",
      "Braai area",
      "Communal lounge"
    ],
    "description": "A studio room for students, close to campus and public transport in George.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 19,
    "title": "Shared Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "3 Long Street, Knysna",
    "price": 2700,
    "rating": 4.9,
    "datePosted": "2026-01-19",
    "amenities": [
      "Study desk",
      "Private bathroom",
      "Communal lounge",
      "Free WiFi"
    ],
    "description": "A shared room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 20,
    "title": "Bachelor Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "126 Station Road, Knysna",
    "price": 4900,
    "rating": 4.63,
    "datePosted": "2026-08-05",
    "amenities": [
      "Backup power",
      "Walking distance to campus",
      "Air conditioning",
      "Braai area"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 21,
    "title": "Ensuite Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "26 Long Street, Knysna",
    "price": 4500,
    "rating": 4.63,
    "datePosted": "2026-07-19",
    "amenities": [
      "Braai area",
      "24hr security",
      "Laundry facilities",
      "Communal lounge"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 22,
    "title": "Single Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "27 Bree Street, Knysna",
    "price": 3200,
    "rating": 4.9,
    "datePosted": "2026-03-08",
    "amenities": [
      "Bicycle storage",
      "Walking distance to campus",
      "24hr security",
      "Communal lounge"
    ],
    "description": "A single room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 23,
    "title": "Shared Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "116 Loop Street, Knysna",
    "price": 2100,
    "rating": 4.47,
    "datePosted": "2026-01-13",
    "amenities": [
      "Braai area",
      "Shared kitchen",
      "Backup power",
      "Secure parking"
    ],
    "description": "A shared room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 24,
    "title": "Single Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "142 Prinsloo Street, Knysna",
    "price": 2900,
    "rating": 4.98,
    "datePosted": "2026-01-14",
    "amenities": [
      "Study desk",
      "Fully furnished",
      "Gym access",
      "Free WiFi"
    ],
    "description": "A single room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 25,
    "title": "Shared Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "126 Kerk Street, Knysna",
    "price": 2000,
    "rating": 4.57,
    "datePosted": "2026-04-16",
    "amenities": [
      "Laundry facilities",
      "Braai area",
      "Communal lounge",
      "Free WiFi",
      "Shared kitchen"
    ],
    "description": "A shared room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 26,
    "title": "Studio Room in Knysna",
    "city": "Knysna",
    "province": "Western Cape",
    "address": "110 Station Road, Knysna",
    "price": 5200,
    "rating": 4.71,
    "datePosted": "2026-05-27",
    "amenities": [
      "Communal lounge",
      "Shared kitchen",
      "Private bathroom",
      "Backup power",
      "Braai area",
      "Free WiFi"
    ],
    "description": "A studio room for students, close to campus and public transport in Knysna.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 27,
    "title": "Backpacker Bunk in Gqeberha (Port Elizabeth)",
    "city": "Gqeberha (Port Elizabeth)",
    "province": "Eastern Cape",
    "address": "14 Church Street, Gqeberha (Port Elizabeth)",
    "price": 2000,
    "rating": 4.97,
    "datePosted": "2026-01-21",
    "amenities": [
      "Communal lounge",
      "Gym access",
      "Braai area",
      "CCTV surveillance",
      "Shared kitchen",
      "Free WiFi"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Gqeberha (Port Elizabeth).",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 28,
    "title": "Shared Room in Gqeberha (Port Elizabeth)",
    "city": "Gqeberha (Port Elizabeth)",
    "province": "Eastern Cape",
    "address": "19 Kloof Street, Gqeberha (Port Elizabeth)",
    "price": 1900,
    "rating": 4.72,
    "datePosted": "2026-06-19",
    "amenities": [
      "Secure parking",
      "Laundry facilities",
      "Study desk",
      "Air conditioning",
      "Private bathroom",
      "Bicycle storage"
    ],
    "description": "A shared room for students, close to campus and public transport in Gqeberha (Port Elizabeth).",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 29,
    "title": "Single Room in Gqeberha (Port Elizabeth)",
    "city": "Gqeberha (Port Elizabeth)",
    "province": "Eastern Cape",
    "address": "135 Bree Street, Gqeberha (Port Elizabeth)",
    "price": 2800,
    "rating": 4.47,
    "datePosted": "2026-04-18",
    "amenities": [
      "Gym access",
      "Private bathroom",
      "Fully furnished",
      "Walking distance to campus",
      "24hr security"
    ],
    "description": "A single room for students, close to campus and public transport in Gqeberha (Port Elizabeth).",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 30,
    "title": "Shared Room in Gqeberha (Port Elizabeth)",
    "city": "Gqeberha (Port Elizabeth)",
    "province": "Eastern Cape",
    "address": "82 President Street, Gqeberha (Port Elizabeth)",
    "price": 2200,
    "rating": 5.0,
    "datePosted": "2026-01-19",
    "amenities": [
      "Free WiFi",
      "Secure parking",
      "Air conditioning",
      "Braai area"
    ],
    "description": "A shared room for students, close to campus and public transport in Gqeberha (Port Elizabeth).",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 31,
    "title": "Bachelor Room in Gqeberha (Port Elizabeth)",
    "city": "Gqeberha (Port Elizabeth)",
    "province": "Eastern Cape",
    "address": "69 Loop Street, Gqeberha (Port Elizabeth)",
    "price": 4800,
    "rating": 4.56,
    "datePosted": "2026-02-13",
    "amenities": [
      "Walking distance to campus",
      "CCTV surveillance",
      "Study desk",
      "Private bathroom"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Gqeberha (Port Elizabeth).",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 32,
    "title": "Ensuite Room in Gqeberha (Port Elizabeth)",
    "city": "Gqeberha (Port Elizabeth)",
    "province": "Eastern Cape",
    "address": "137 Kloof Street, Gqeberha (Port Elizabeth)",
    "price": 4100,
    "rating": 4.96,
    "datePosted": "2026-02-07",
    "amenities": [
      "Air conditioning",
      "CCTV surveillance",
      "Fully furnished",
      "Study desk"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Gqeberha (Port Elizabeth).",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 33,
    "title": "Single Room in East London",
    "city": "East London",
    "province": "Eastern Cape",
    "address": "143 Andries Street, East London",
    "price": 2300,
    "rating": 4.8,
    "datePosted": "2026-02-25",
    "amenities": [
      "Gym access",
      "Backup power",
      "Air conditioning",
      "Private bathroom"
    ],
    "description": "A single room for students, close to campus and public transport in East London.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 34,
    "title": "Backpacker Bunk in East London",
    "city": "East London",
    "province": "Eastern Cape",
    "address": "127 Loop Street, East London",
    "price": 1900,
    "rating": 4.33,
    "datePosted": "2026-04-02",
    "amenities": [
      "Study desk",
      "Communal lounge",
      "Fully furnished",
      "Laundry facilities",
      "Backup power"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in East London.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 35,
    "title": "Shared Room in East London",
    "city": "East London",
    "province": "Eastern Cape",
    "address": "115 Market Street, East London",
    "price": 2200,
    "rating": 4.68,
    "datePosted": "2026-08-18",
    "amenities": [
      "Braai area",
      "Gym access",
      "Free WiFi",
      "Study desk",
      "Bicycle storage",
      "Shared kitchen"
    ],
    "description": "A shared room for students, close to campus and public transport in East London.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 36,
    "title": "Studio Room in East London",
    "city": "East London",
    "province": "Eastern Cape",
    "address": "34 Kerk Street, East London",
    "price": 4200,
    "rating": 4.93,
    "datePosted": "2026-02-26",
    "amenities": [
      "Air conditioning",
      "24hr security",
      "Bicycle storage",
      "Free WiFi"
    ],
    "description": "A studio room for students, close to campus and public transport in East London.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 37,
    "title": "Backpacker Bunk in East London",
    "city": "East London",
    "province": "Eastern Cape",
    "address": "28 Bree Street, East London",
    "price": 1800,
    "rating": 4.91,
    "datePosted": "2026-08-09",
    "amenities": [
      "Braai area",
      "Air conditioning",
      "Walking distance to campus",
      "Shared kitchen",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in East London.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 38,
    "title": "Shared Room in East London",
    "city": "East London",
    "province": "Eastern Cape",
    "address": "47 Church Street, East London",
    "price": 2400,
    "rating": 4.49,
    "datePosted": "2026-08-06",
    "amenities": [
      "Fully furnished",
      "Bicycle storage",
      "Laundry facilities",
      "CCTV surveillance",
      "Communal lounge",
      "Private bathroom"
    ],
    "description": "A shared room for students, close to campus and public transport in East London.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 39,
    "title": "Ensuite Room in Makhanda",
    "city": "Makhanda",
    "province": "Eastern Cape",
    "address": "122 Van Riebeeck Street, Makhanda",
    "price": 3300,
    "rating": 4.51,
    "datePosted": "2026-08-08",
    "amenities": [
      "Laundry facilities",
      "Braai area",
      "Secure parking",
      "24hr security"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Makhanda.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 40,
    "title": "Shared Room in Makhanda",
    "city": "Makhanda",
    "province": "Eastern Cape",
    "address": "51 Church Street, Makhanda",
    "price": 2100,
    "rating": 4.55,
    "datePosted": "2026-05-19",
    "amenities": [
      "Fully furnished",
      "Backup power",
      "Braai area",
      "Study desk",
      "CCTV surveillance"
    ],
    "description": "A shared room for students, close to campus and public transport in Makhanda.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 41,
    "title": "Ensuite Room in Makhanda",
    "city": "Makhanda",
    "province": "Eastern Cape",
    "address": "31 Church Street, Makhanda",
    "price": 4200,
    "rating": 4.72,
    "datePosted": "2026-04-05",
    "amenities": [
      "24hr security",
      "Air conditioning",
      "Backup power",
      "Free WiFi",
      "Study desk"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Makhanda.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 42,
    "title": "Backpacker Bunk in Makhanda",
    "city": "Makhanda",
    "province": "Eastern Cape",
    "address": "132 Kerk Street, Makhanda",
    "price": 2000,
    "rating": 4.48,
    "datePosted": "2026-07-14",
    "amenities": [
      "Bicycle storage",
      "CCTV surveillance",
      "Air conditioning",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Makhanda.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 43,
    "title": "Ensuite Room in Makhanda",
    "city": "Makhanda",
    "province": "Eastern Cape",
    "address": "139 Loop Street, Makhanda",
    "price": 3200,
    "rating": 4.74,
    "datePosted": "2026-07-02",
    "amenities": [
      "Laundry facilities",
      "24hr security",
      "Communal lounge",
      "Study desk",
      "Fully furnished",
      "CCTV surveillance"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Makhanda.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 44,
    "title": "Single Room in Makhanda",
    "city": "Makhanda",
    "province": "Eastern Cape",
    "address": "78 Jorissen Street, Makhanda",
    "price": 3300,
    "rating": 4.69,
    "datePosted": "2026-02-22",
    "amenities": [
      "Air conditioning",
      "Fully furnished",
      "Laundry facilities",
      "24hr security",
      "Braai area",
      "Backup power"
    ],
    "description": "A single room for students, close to campus and public transport in Makhanda.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 45,
    "title": "Backpacker Bunk in Mthatha",
    "city": "Mthatha",
    "province": "Eastern Cape",
    "address": "46 Bree Street, Mthatha",
    "price": 2100,
    "rating": 4.45,
    "datePosted": "2026-08-06",
    "amenities": [
      "Air conditioning",
      "Laundry facilities",
      "Gym access",
      "Free WiFi",
      "Backup power",
      "Walking distance to campus"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Mthatha.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 46,
    "title": "Bachelor Room in Mthatha",
    "city": "Mthatha",
    "province": "Eastern Cape",
    "address": "84 Bree Street, Mthatha",
    "price": 6100,
    "rating": 4.63,
    "datePosted": "2026-01-07",
    "amenities": [
      "CCTV surveillance",
      "Secure parking",
      "Fully furnished",
      "Private bathroom",
      "Gym access"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Mthatha.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 47,
    "title": "Backpacker Bunk in Mthatha",
    "city": "Mthatha",
    "province": "Eastern Cape",
    "address": "23 Bree Street, Mthatha",
    "price": 1700,
    "rating": 4.77,
    "datePosted": "2026-03-02",
    "amenities": [
      "Fully furnished",
      "Study desk",
      "Braai area",
      "Bicycle storage",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Mthatha.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 48,
    "title": "Shared Room in Mthatha",
    "city": "Mthatha",
    "province": "Eastern Cape",
    "address": "13 Church Street, Mthatha",
    "price": 2000,
    "rating": 4.35,
    "datePosted": "2026-04-23",
    "amenities": [
      "Communal lounge",
      "Air conditioning",
      "Braai area",
      "Bicycle storage"
    ],
    "description": "A shared room for students, close to campus and public transport in Mthatha.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 49,
    "title": "Backpacker Bunk in Mthatha",
    "city": "Mthatha",
    "province": "Eastern Cape",
    "address": "100 Andries Street, Mthatha",
    "price": 1800,
    "rating": 4.3,
    "datePosted": "2026-07-25",
    "amenities": [
      "Bicycle storage",
      "Private bathroom",
      "Shared kitchen",
      "Fully furnished",
      "Walking distance to campus"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Mthatha.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 50,
    "title": "Single Room in Mthatha",
    "city": "Mthatha",
    "province": "Eastern Cape",
    "address": "47 Long Street, Mthatha",
    "price": 2800,
    "rating": 4.39,
    "datePosted": "2026-05-07",
    "amenities": [
      "CCTV surveillance",
      "Free WiFi",
      "Gym access",
      "Private bathroom",
      "Study desk",
      "Secure parking"
    ],
    "description": "A single room for students, close to campus and public transport in Mthatha.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 51,
    "title": "Backpacker Bunk in Mthatha",
    "city": "Mthatha",
    "province": "Eastern Cape",
    "address": "83 Loop Street, Mthatha",
    "price": 2300,
    "rating": 4.82,
    "datePosted": "2026-05-10",
    "amenities": [
      "Braai area",
      "Communal lounge",
      "Gym access",
      "Secure parking",
      "Shared kitchen"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Mthatha.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 52,
    "title": "Studio Room in Durban",
    "city": "Durban",
    "province": "KwaZulu-Natal",
    "address": "72 Van Riebeeck Street, Durban",
    "price": 4500,
    "rating": 4.8,
    "datePosted": "2026-03-05",
    "amenities": [
      "Communal lounge",
      "Fully furnished",
      "Private bathroom",
      "Backup power",
      "Secure parking",
      "Study desk"
    ],
    "description": "A studio room for students, close to campus and public transport in Durban.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 53,
    "title": "Studio Room in Durban",
    "city": "Durban",
    "province": "KwaZulu-Natal",
    "address": "140 Main Road, Durban",
    "price": 4800,
    "rating": 4.79,
    "datePosted": "2026-07-13",
    "amenities": [
      "Backup power",
      "Shared kitchen",
      "Private bathroom",
      "Laundry facilities"
    ],
    "description": "A studio room for students, close to campus and public transport in Durban.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 54,
    "title": "Shared Room in Durban",
    "city": "Durban",
    "province": "KwaZulu-Natal",
    "address": "106 Kerk Street, Durban",
    "price": 1900,
    "rating": 4.57,
    "datePosted": "2026-08-02",
    "amenities": [
      "CCTV surveillance",
      "Laundry facilities",
      "Free WiFi",
      "Private bathroom",
      "Communal lounge"
    ],
    "description": "A shared room for students, close to campus and public transport in Durban.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 55,
    "title": "Bachelor Room in Durban",
    "city": "Durban",
    "province": "KwaZulu-Natal",
    "address": "99 Van Riebeeck Street, Durban",
    "price": 4200,
    "rating": 4.9,
    "datePosted": "2026-08-18",
    "amenities": [
      "Free WiFi",
      "24hr security",
      "Backup power",
      "Bicycle storage",
      "Laundry facilities"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Durban.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 56,
    "title": "Ensuite Room in Durban",
    "city": "Durban",
    "province": "KwaZulu-Natal",
    "address": "58 President Street, Durban",
    "price": 3900,
    "rating": 4.77,
    "datePosted": "2026-08-09",
    "amenities": [
      "Braai area",
      "Secure parking",
      "Free WiFi",
      "Laundry facilities",
      "24hr security"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Durban.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 57,
    "title": "Ensuite Room in Durban",
    "city": "Durban",
    "province": "KwaZulu-Natal",
    "address": "121 Van Riebeeck Street, Durban",
    "price": 3700,
    "rating": 4.7,
    "datePosted": "2026-01-07",
    "amenities": [
      "Free WiFi",
      "CCTV surveillance",
      "Laundry facilities",
      "Air conditioning"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Durban.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 58,
    "title": "Single Room in Durban",
    "city": "Durban",
    "province": "KwaZulu-Natal",
    "address": "36 Kerk Street, Durban",
    "price": 3200,
    "rating": 4.45,
    "datePosted": "2026-03-28",
    "amenities": [
      "24hr security",
      "Free WiFi",
      "Backup power",
      "Laundry facilities",
      "Communal lounge"
    ],
    "description": "A single room for students, close to campus and public transport in Durban.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 59,
    "title": "Ensuite Room in Pietermaritzburg",
    "city": "Pietermaritzburg",
    "province": "KwaZulu-Natal",
    "address": "109 Prinsloo Street, Pietermaritzburg",
    "price": 4000,
    "rating": 4.34,
    "datePosted": "2026-04-06",
    "amenities": [
      "Shared kitchen",
      "Secure parking",
      "Free WiFi",
      "Walking distance to campus",
      "Gym access"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Pietermaritzburg.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 60,
    "title": "Shared Room in Pietermaritzburg",
    "city": "Pietermaritzburg",
    "province": "KwaZulu-Natal",
    "address": "12 Prinsloo Street, Pietermaritzburg",
    "price": 1900,
    "rating": 4.73,
    "datePosted": "2026-03-06",
    "amenities": [
      "Secure parking",
      "Private bathroom",
      "Braai area",
      "Free WiFi"
    ],
    "description": "A shared room for students, close to campus and public transport in Pietermaritzburg.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 61,
    "title": "Shared Room in Pietermaritzburg",
    "city": "Pietermaritzburg",
    "province": "KwaZulu-Natal",
    "address": "31 Bree Street, Pietermaritzburg",
    "price": 2500,
    "rating": 4.72,
    "datePosted": "2026-07-24",
    "amenities": [
      "Laundry facilities",
      "Secure parking",
      "Walking distance to campus",
      "Backup power",
      "24hr security",
      "Shared kitchen"
    ],
    "description": "A shared room for students, close to campus and public transport in Pietermaritzburg.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 62,
    "title": "Backpacker Bunk in Pietermaritzburg",
    "city": "Pietermaritzburg",
    "province": "KwaZulu-Natal",
    "address": "43 Prinsloo Street, Pietermaritzburg",
    "price": 1600,
    "rating": 4.77,
    "datePosted": "2026-04-13",
    "amenities": [
      "Private bathroom",
      "Air conditioning",
      "Free WiFi",
      "Backup power",
      "CCTV surveillance"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Pietermaritzburg.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 63,
    "title": "Ensuite Room in Pietermaritzburg",
    "city": "Pietermaritzburg",
    "province": "KwaZulu-Natal",
    "address": "64 Voortrekker Street, Pietermaritzburg",
    "price": 3800,
    "rating": 4.86,
    "datePosted": "2026-08-08",
    "amenities": [
      "Air conditioning",
      "Braai area",
      "Fully furnished",
      "Communal lounge"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Pietermaritzburg.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 64,
    "title": "Bachelor Room in Pietermaritzburg",
    "city": "Pietermaritzburg",
    "province": "KwaZulu-Natal",
    "address": "138 Main Road, Pietermaritzburg",
    "price": 4300,
    "rating": 4.31,
    "datePosted": "2026-04-24",
    "amenities": [
      "Walking distance to campus",
      "Study desk",
      "Gym access",
      "Fully furnished",
      "24hr security"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Pietermaritzburg.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 65,
    "title": "Single Room in Richards Bay",
    "city": "Richards Bay",
    "province": "KwaZulu-Natal",
    "address": "119 Main Road, Richards Bay",
    "price": 2800,
    "rating": 4.49,
    "datePosted": "2026-08-11",
    "amenities": [
      "Backup power",
      "Laundry facilities",
      "Shared kitchen",
      "Walking distance to campus",
      "Gym access",
      "Fully furnished"
    ],
    "description": "A single room for students, close to campus and public transport in Richards Bay.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 66,
    "title": "Bachelor Room in Richards Bay",
    "city": "Richards Bay",
    "province": "KwaZulu-Natal",
    "address": "113 President Street, Richards Bay",
    "price": 5700,
    "rating": 4.92,
    "datePosted": "2026-03-07",
    "amenities": [
      "Gym access",
      "24hr security",
      "Braai area",
      "Private bathroom",
      "Study desk",
      "Backup power"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Richards Bay.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 67,
    "title": "Ensuite Room in Richards Bay",
    "city": "Richards Bay",
    "province": "KwaZulu-Natal",
    "address": "9 Main Road, Richards Bay",
    "price": 4400,
    "rating": 4.86,
    "datePosted": "2026-04-04",
    "amenities": [
      "Fully furnished",
      "Shared kitchen",
      "Secure parking",
      "Private bathroom",
      "24hr security"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Richards Bay.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 68,
    "title": "Studio Room in Richards Bay",
    "city": "Richards Bay",
    "province": "KwaZulu-Natal",
    "address": "4 Loop Street, Richards Bay",
    "price": 4600,
    "rating": 4.69,
    "datePosted": "2026-03-06",
    "amenities": [
      "Laundry facilities",
      "Study desk",
      "Private bathroom",
      "Walking distance to campus",
      "Communal lounge",
      "Secure parking"
    ],
    "description": "A studio room for students, close to campus and public transport in Richards Bay.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 69,
    "title": "Backpacker Bunk in Richards Bay",
    "city": "Richards Bay",
    "province": "KwaZulu-Natal",
    "address": "127 Bree Street, Richards Bay",
    "price": 2200,
    "rating": 4.78,
    "datePosted": "2026-03-23",
    "amenities": [
      "Free WiFi",
      "Study desk",
      "Backup power",
      "Private bathroom",
      "Laundry facilities"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Richards Bay.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 70,
    "title": "Backpacker Bunk in Richards Bay",
    "city": "Richards Bay",
    "province": "KwaZulu-Natal",
    "address": "143 President Street, Richards Bay",
    "price": 2000,
    "rating": 4.79,
    "datePosted": "2026-03-14",
    "amenities": [
      "Walking distance to campus",
      "Laundry facilities",
      "Communal lounge",
      "Gym access",
      "24hr security",
      "Braai area"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Richards Bay.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 71,
    "title": "Studio Room in Richards Bay",
    "city": "Richards Bay",
    "province": "KwaZulu-Natal",
    "address": "32 Long Street, Richards Bay",
    "price": 4600,
    "rating": 4.43,
    "datePosted": "2026-07-22",
    "amenities": [
      "Laundry facilities",
      "24hr security",
      "Study desk",
      "Walking distance to campus",
      "Gym access",
      "Shared kitchen"
    ],
    "description": "A studio room for students, close to campus and public transport in Richards Bay.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 72,
    "title": "Studio Room in Margate",
    "city": "Margate",
    "province": "KwaZulu-Natal",
    "address": "74 Kloof Street, Margate",
    "price": 5400,
    "rating": 4.43,
    "datePosted": "2026-01-04",
    "amenities": [
      "Laundry facilities",
      "Backup power",
      "Private bathroom",
      "24hr security"
    ],
    "description": "A studio room for students, close to campus and public transport in Margate.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 73,
    "title": "Backpacker Bunk in Margate",
    "city": "Margate",
    "province": "KwaZulu-Natal",
    "address": "72 Market Street, Margate",
    "price": 2300,
    "rating": 4.96,
    "datePosted": "2026-06-24",
    "amenities": [
      "Study desk",
      "Gym access",
      "Backup power",
      "Walking distance to campus"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Margate.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 74,
    "title": "Ensuite Room in Margate",
    "city": "Margate",
    "province": "KwaZulu-Natal",
    "address": "5 Van Riebeeck Street, Margate",
    "price": 3500,
    "rating": 4.98,
    "datePosted": "2026-03-09",
    "amenities": [
      "Air conditioning",
      "Secure parking",
      "CCTV surveillance",
      "Braai area",
      "24hr security",
      "Shared kitchen"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Margate.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 75,
    "title": "Ensuite Room in Margate",
    "city": "Margate",
    "province": "KwaZulu-Natal",
    "address": "18 Van Riebeeck Street, Margate",
    "price": 3500,
    "rating": 4.34,
    "datePosted": "2026-02-11",
    "amenities": [
      "Communal lounge",
      "Study desk",
      "Air conditioning",
      "Fully furnished",
      "Bicycle storage"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Margate.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 76,
    "title": "Bachelor Room in Margate",
    "city": "Margate",
    "province": "KwaZulu-Natal",
    "address": "65 Voortrekker Street, Margate",
    "price": 5100,
    "rating": 4.73,
    "datePosted": "2026-08-03",
    "amenities": [
      "Braai area",
      "Air conditioning",
      "CCTV surveillance",
      "Bicycle storage"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Margate.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 77,
    "title": "Bachelor Room in Margate",
    "city": "Margate",
    "province": "KwaZulu-Natal",
    "address": "115 President Street, Margate",
    "price": 5400,
    "rating": 4.73,
    "datePosted": "2026-07-22",
    "amenities": [
      "Braai area",
      "Backup power",
      "Air conditioning",
      "Communal lounge",
      "Free WiFi"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Margate.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 78,
    "title": "Single Room in Margate",
    "city": "Margate",
    "province": "KwaZulu-Natal",
    "address": "56 Bree Street, Margate",
    "price": 2500,
    "rating": 4.35,
    "datePosted": "2026-01-01",
    "amenities": [
      "Shared kitchen",
      "Communal lounge",
      "Private bathroom",
      "CCTV surveillance",
      "Gym access"
    ],
    "description": "A single room for students, close to campus and public transport in Margate.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 79,
    "title": "Ensuite Room in Johannesburg",
    "city": "Johannesburg",
    "province": "Gauteng",
    "address": "10 Station Road, Johannesburg",
    "price": 4700,
    "rating": 4.9,
    "datePosted": "2026-01-19",
    "amenities": [
      "Air conditioning",
      "Walking distance to campus",
      "Backup power",
      "CCTV surveillance"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Johannesburg.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 80,
    "title": "Backpacker Bunk in Johannesburg",
    "city": "Johannesburg",
    "province": "Gauteng",
    "address": "69 Jorissen Street, Johannesburg",
    "price": 1800,
    "rating": 4.4,
    "datePosted": "2026-03-13",
    "amenities": [
      "Laundry facilities",
      "Communal lounge",
      "Study desk",
      "Gym access",
      "Private bathroom",
      "Fully furnished"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Johannesburg.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 81,
    "title": "Shared Room in Johannesburg",
    "city": "Johannesburg",
    "province": "Gauteng",
    "address": "44 Church Street, Johannesburg",
    "price": 1900,
    "rating": 4.51,
    "datePosted": "2026-04-20",
    "amenities": [
      "Air conditioning",
      "Secure parking",
      "Study desk",
      "CCTV surveillance",
      "Walking distance to campus"
    ],
    "description": "A shared room for students, close to campus and public transport in Johannesburg.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 82,
    "title": "Studio Room in Johannesburg",
    "city": "Johannesburg",
    "province": "Gauteng",
    "address": "128 Loop Street, Johannesburg",
    "price": 5400,
    "rating": 4.53,
    "datePosted": "2026-03-09",
    "amenities": [
      "Shared kitchen",
      "Air conditioning",
      "Free WiFi",
      "Laundry facilities",
      "Walking distance to campus"
    ],
    "description": "A studio room for students, close to campus and public transport in Johannesburg.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 83,
    "title": "Single Room in Johannesburg",
    "city": "Johannesburg",
    "province": "Gauteng",
    "address": "7 Long Street, Johannesburg",
    "price": 2300,
    "rating": 4.66,
    "datePosted": "2026-05-02",
    "amenities": [
      "Gym access",
      "Air conditioning",
      "Free WiFi",
      "Bicycle storage",
      "Shared kitchen",
      "Secure parking"
    ],
    "description": "A single room for students, close to campus and public transport in Johannesburg.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 84,
    "title": "Studio Room in Johannesburg",
    "city": "Johannesburg",
    "province": "Gauteng",
    "address": "113 Kloof Street, Johannesburg",
    "price": 4300,
    "rating": 4.52,
    "datePosted": "2026-01-27",
    "amenities": [
      "Communal lounge",
      "Study desk",
      "Secure parking",
      "24hr security",
      "Laundry facilities",
      "Bicycle storage"
    ],
    "description": "A studio room for students, close to campus and public transport in Johannesburg.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 85,
    "title": "Shared Room in Johannesburg",
    "city": "Johannesburg",
    "province": "Gauteng",
    "address": "128 Kerk Street, Johannesburg",
    "price": 2300,
    "rating": 4.62,
    "datePosted": "2026-03-25",
    "amenities": [
      "Bicycle storage",
      "Braai area",
      "Communal lounge",
      "Gym access",
      "Free WiFi"
    ],
    "description": "A shared room for students, close to campus and public transport in Johannesburg.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 86,
    "title": "Studio Room in Pretoria",
    "city": "Pretoria",
    "province": "Gauteng",
    "address": "105 Prinsloo Street, Pretoria",
    "price": 4100,
    "rating": 4.34,
    "datePosted": "2026-05-21",
    "amenities": [
      "Free WiFi",
      "Fully furnished",
      "Braai area",
      "Gym access",
      "Secure parking",
      "Laundry facilities"
    ],
    "description": "A studio room for students, close to campus and public transport in Pretoria.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 87,
    "title": "Studio Room in Pretoria",
    "city": "Pretoria",
    "province": "Gauteng",
    "address": "115 Bree Street, Pretoria",
    "price": 5300,
    "rating": 4.95,
    "datePosted": "2026-05-01",
    "amenities": [
      "Laundry facilities",
      "Backup power",
      "Gym access",
      "Shared kitchen"
    ],
    "description": "A studio room for students, close to campus and public transport in Pretoria.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 88,
    "title": "Backpacker Bunk in Pretoria",
    "city": "Pretoria",
    "province": "Gauteng",
    "address": "9 Voortrekker Street, Pretoria",
    "price": 2200,
    "rating": 4.69,
    "datePosted": "2026-01-24",
    "amenities": [
      "Secure parking",
      "Walking distance to campus",
      "Shared kitchen",
      "Backup power",
      "Gym access",
      "Free WiFi"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Pretoria.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 89,
    "title": "Shared Room in Pretoria",
    "city": "Pretoria",
    "province": "Gauteng",
    "address": "32 President Street, Pretoria",
    "price": 1900,
    "rating": 4.59,
    "datePosted": "2026-05-12",
    "amenities": [
      "Backup power",
      "Secure parking",
      "Walking distance to campus",
      "Communal lounge",
      "Gym access",
      "Bicycle storage"
    ],
    "description": "A shared room for students, close to campus and public transport in Pretoria.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 90,
    "title": "Ensuite Room in Pretoria",
    "city": "Pretoria",
    "province": "Gauteng",
    "address": "143 President Street, Pretoria",
    "price": 3900,
    "rating": 4.82,
    "datePosted": "2026-02-07",
    "amenities": [
      "Bicycle storage",
      "Private bathroom",
      "Air conditioning",
      "Gym access"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Pretoria.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 91,
    "title": "Single Room in Pretoria",
    "city": "Pretoria",
    "province": "Gauteng",
    "address": "108 Prinsloo Street, Pretoria",
    "price": 2600,
    "rating": 4.51,
    "datePosted": "2026-06-11",
    "amenities": [
      "Gym access",
      "Braai area",
      "Free WiFi",
      "Backup power",
      "Walking distance to campus"
    ],
    "description": "A single room for students, close to campus and public transport in Pretoria.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 92,
    "title": "Backpacker Bunk in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "40 Van Riebeeck Street, Soweto",
    "price": 2200,
    "rating": 4.56,
    "datePosted": "2026-01-15",
    "amenities": [
      "Communal lounge",
      "24hr security",
      "CCTV surveillance",
      "Gym access",
      "Bicycle storage"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 93,
    "title": "Studio Room in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "63 Andries Street, Soweto",
    "price": 4400,
    "rating": 4.52,
    "datePosted": "2026-05-10",
    "amenities": [
      "Bicycle storage",
      "Private bathroom",
      "Braai area",
      "Communal lounge",
      "Laundry facilities",
      "Free WiFi"
    ],
    "description": "A studio room for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 94,
    "title": "Backpacker Bunk in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "40 Kerk Street, Soweto",
    "price": 2100,
    "rating": 4.91,
    "datePosted": "2026-08-28",
    "amenities": [
      "Study desk",
      "Shared kitchen",
      "Gym access",
      "Air conditioning",
      "24hr security"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 95,
    "title": "Ensuite Room in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "118 Loop Street, Soweto",
    "price": 3500,
    "rating": 4.98,
    "datePosted": "2026-01-20",
    "amenities": [
      "Backup power",
      "Laundry facilities",
      "Braai area",
      "Fully furnished"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 96,
    "title": "Ensuite Room in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "103 Main Road, Soweto",
    "price": 4000,
    "rating": 4.97,
    "datePosted": "2026-06-21",
    "amenities": [
      "Shared kitchen",
      "Braai area",
      "24hr security",
      "Fully furnished",
      "Gym access",
      "Laundry facilities"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 97,
    "title": "Backpacker Bunk in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "140 Van Riebeeck Street, Soweto",
    "price": 2200,
    "rating": 4.94,
    "datePosted": "2026-03-03",
    "amenities": [
      "Shared kitchen",
      "Private bathroom",
      "Fully furnished",
      "Braai area"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 98,
    "title": "Backpacker Bunk in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "27 Kerk Street, Soweto",
    "price": 1600,
    "rating": 4.33,
    "datePosted": "2026-08-08",
    "amenities": [
      "Private bathroom",
      "Secure parking",
      "Shared kitchen",
      "Walking distance to campus",
      "Backup power",
      "Free WiFi"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 99,
    "title": "Single Room in Soweto",
    "city": "Soweto",
    "province": "Gauteng",
    "address": "97 Main Road, Soweto",
    "price": 2600,
    "rating": 4.78,
    "datePosted": "2026-02-19",
    "amenities": [
      "Backup power",
      "Private bathroom",
      "Gym access",
      "Laundry facilities",
      "Air conditioning"
    ],
    "description": "A single room for students, close to campus and public transport in Soweto.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 100,
    "title": "Shared Room in Midrand",
    "city": "Midrand",
    "province": "Gauteng",
    "address": "99 Kloof Street, Midrand",
    "price": 1900,
    "rating": 4.75,
    "datePosted": "2026-05-06",
    "amenities": [
      "Secure parking",
      "Communal lounge",
      "Air conditioning",
      "Shared kitchen",
      "Private bathroom",
      "CCTV surveillance"
    ],
    "description": "A shared room for students, close to campus and public transport in Midrand.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 101,
    "title": "Studio Room in Midrand",
    "city": "Midrand",
    "province": "Gauteng",
    "address": "121 Jorissen Street, Midrand",
    "price": 3800,
    "rating": 4.51,
    "datePosted": "2026-04-25",
    "amenities": [
      "24hr security",
      "Study desk",
      "Secure parking",
      "Communal lounge",
      "Air conditioning"
    ],
    "description": "A studio room for students, close to campus and public transport in Midrand.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 102,
    "title": "Backpacker Bunk in Midrand",
    "city": "Midrand",
    "province": "Gauteng",
    "address": "79 President Street, Midrand",
    "price": 1900,
    "rating": 4.47,
    "datePosted": "2026-06-07",
    "amenities": [
      "Bicycle storage",
      "Braai area",
      "Secure parking",
      "Study desk"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Midrand.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 103,
    "title": "Studio Room in Midrand",
    "city": "Midrand",
    "province": "Gauteng",
    "address": "77 Andries Street, Midrand",
    "price": 4700,
    "rating": 4.91,
    "datePosted": "2026-08-04",
    "amenities": [
      "Bicycle storage",
      "Backup power",
      "Free WiFi",
      "Air conditioning"
    ],
    "description": "A studio room for students, close to campus and public transport in Midrand.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 104,
    "title": "Backpacker Bunk in Midrand",
    "city": "Midrand",
    "province": "Gauteng",
    "address": "129 Jorissen Street, Midrand",
    "price": 1500,
    "rating": 4.75,
    "datePosted": "2026-06-19",
    "amenities": [
      "Secure parking",
      "Air conditioning",
      "Bicycle storage",
      "24hr security",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Midrand.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 105,
    "title": "Studio Room in Midrand",
    "city": "Midrand",
    "province": "Gauteng",
    "address": "26 Bree Street, Midrand",
    "price": 4200,
    "rating": 4.56,
    "datePosted": "2026-02-06",
    "amenities": [
      "Study desk",
      "Backup power",
      "Bicycle storage",
      "Secure parking",
      "Free WiFi",
      "Air conditioning"
    ],
    "description": "A studio room for students, close to campus and public transport in Midrand.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 106,
    "title": "Studio Room in Nelspruit (Mbombela)",
    "city": "Nelspruit (Mbombela)",
    "province": "Mpumalanga",
    "address": "108 Andries Street, Nelspruit (Mbombela)",
    "price": 4800,
    "rating": 4.91,
    "datePosted": "2026-04-10",
    "amenities": [
      "Laundry facilities",
      "Shared kitchen",
      "Bicycle storage",
      "Gym access"
    ],
    "description": "A studio room for students, close to campus and public transport in Nelspruit (Mbombela).",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 107,
    "title": "Bachelor Room in Nelspruit (Mbombela)",
    "city": "Nelspruit (Mbombela)",
    "province": "Mpumalanga",
    "address": "71 Jorissen Street, Nelspruit (Mbombela)",
    "price": 5800,
    "rating": 4.98,
    "datePosted": "2026-03-20",
    "amenities": [
      "Gym access",
      "CCTV surveillance",
      "Braai area",
      "Secure parking"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Nelspruit (Mbombela).",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 108,
    "title": "Backpacker Bunk in Nelspruit (Mbombela)",
    "city": "Nelspruit (Mbombela)",
    "province": "Mpumalanga",
    "address": "31 Prinsloo Street, Nelspruit (Mbombela)",
    "price": 2000,
    "rating": 4.81,
    "datePosted": "2026-04-18",
    "amenities": [
      "Shared kitchen",
      "Communal lounge",
      "Bicycle storage",
      "Private bathroom",
      "Fully furnished"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Nelspruit (Mbombela).",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 109,
    "title": "Bachelor Room in Nelspruit (Mbombela)",
    "city": "Nelspruit (Mbombela)",
    "province": "Mpumalanga",
    "address": "103 Voortrekker Street, Nelspruit (Mbombela)",
    "price": 5300,
    "rating": 4.56,
    "datePosted": "2026-07-24",
    "amenities": [
      "Gym access",
      "Communal lounge",
      "Study desk",
      "Secure parking"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Nelspruit (Mbombela).",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 110,
    "title": "Backpacker Bunk in Nelspruit (Mbombela)",
    "city": "Nelspruit (Mbombela)",
    "province": "Mpumalanga",
    "address": "99 Kloof Street, Nelspruit (Mbombela)",
    "price": 1900,
    "rating": 4.73,
    "datePosted": "2026-06-04",
    "amenities": [
      "Walking distance to campus",
      "Study desk",
      "Fully furnished",
      "Private bathroom",
      "Secure parking",
      "Free WiFi"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Nelspruit (Mbombela).",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 111,
    "title": "Studio Room in Nelspruit (Mbombela)",
    "city": "Nelspruit (Mbombela)",
    "province": "Mpumalanga",
    "address": "18 Bree Street, Nelspruit (Mbombela)",
    "price": 4500,
    "rating": 4.38,
    "datePosted": "2026-01-12",
    "amenities": [
      "CCTV surveillance",
      "Communal lounge",
      "Walking distance to campus",
      "Backup power",
      "Fully furnished",
      "Laundry facilities"
    ],
    "description": "A studio room for students, close to campus and public transport in Nelspruit (Mbombela).",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 112,
    "title": "Studio Room in White River",
    "city": "White River",
    "province": "Mpumalanga",
    "address": "26 Voortrekker Street, White River",
    "price": 5300,
    "rating": 4.77,
    "datePosted": "2026-07-23",
    "amenities": [
      "Backup power",
      "Laundry facilities",
      "Secure parking",
      "24hr security"
    ],
    "description": "A studio room for students, close to campus and public transport in White River.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 113,
    "title": "Backpacker Bunk in White River",
    "city": "White River",
    "province": "Mpumalanga",
    "address": "41 Kerk Street, White River",
    "price": 2300,
    "rating": 4.96,
    "datePosted": "2026-03-16",
    "amenities": [
      "Private bathroom",
      "Braai area",
      "Secure parking",
      "Air conditioning",
      "Laundry facilities"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in White River.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 114,
    "title": "Single Room in White River",
    "city": "White River",
    "province": "Mpumalanga",
    "address": "57 Main Road, White River",
    "price": 3300,
    "rating": 4.99,
    "datePosted": "2026-04-11",
    "amenities": [
      "CCTV surveillance",
      "Private bathroom",
      "Braai area",
      "24hr security",
      "Study desk"
    ],
    "description": "A single room for students, close to campus and public transport in White River.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 115,
    "title": "Bachelor Room in White River",
    "city": "White River",
    "province": "Mpumalanga",
    "address": "103 Church Street, White River",
    "price": 5300,
    "rating": 4.76,
    "datePosted": "2026-06-25",
    "amenities": [
      "Laundry facilities",
      "Study desk",
      "Braai area",
      "Secure parking",
      "CCTV surveillance"
    ],
    "description": "A bachelor room for students, close to campus and public transport in White River.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 116,
    "title": "Backpacker Bunk in White River",
    "city": "White River",
    "province": "Mpumalanga",
    "address": "87 Church Street, White River",
    "price": 1500,
    "rating": 4.35,
    "datePosted": "2026-07-28",
    "amenities": [
      "Backup power",
      "Bicycle storage",
      "Air conditioning",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in White River.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 117,
    "title": "Bachelor Room in White River",
    "city": "White River",
    "province": "Mpumalanga",
    "address": "57 Kloof Street, White River",
    "price": 4800,
    "rating": 4.93,
    "datePosted": "2026-01-01",
    "amenities": [
      "Fully furnished",
      "Bicycle storage",
      "Shared kitchen",
      "CCTV surveillance"
    ],
    "description": "A bachelor room for students, close to campus and public transport in White River.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 118,
    "title": "Shared Room in Sabie",
    "city": "Sabie",
    "province": "Mpumalanga",
    "address": "66 Loop Street, Sabie",
    "price": 2000,
    "rating": 4.39,
    "datePosted": "2026-04-08",
    "amenities": [
      "Private bathroom",
      "Fully furnished",
      "Braai area",
      "Free WiFi"
    ],
    "description": "A shared room for students, close to campus and public transport in Sabie.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 119,
    "title": "Shared Room in Sabie",
    "city": "Sabie",
    "province": "Mpumalanga",
    "address": "6 Main Road, Sabie",
    "price": 2700,
    "rating": 4.59,
    "datePosted": "2026-02-02",
    "amenities": [
      "Gym access",
      "Free WiFi",
      "Shared kitchen",
      "Walking distance to campus"
    ],
    "description": "A shared room for students, close to campus and public transport in Sabie.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 120,
    "title": "Backpacker Bunk in Sabie",
    "city": "Sabie",
    "province": "Mpumalanga",
    "address": "116 President Street, Sabie",
    "price": 1600,
    "rating": 4.33,
    "datePosted": "2026-08-05",
    "amenities": [
      "Private bathroom",
      "Secure parking",
      "Gym access",
      "Communal lounge",
      "Air conditioning"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Sabie.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 121,
    "title": "Backpacker Bunk in Sabie",
    "city": "Sabie",
    "province": "Mpumalanga",
    "address": "119 Station Road, Sabie",
    "price": 2300,
    "rating": 4.38,
    "datePosted": "2026-07-15",
    "amenities": [
      "Free WiFi",
      "Communal lounge",
      "Secure parking",
      "Laundry facilities",
      "Bicycle storage",
      "Fully furnished"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Sabie.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 122,
    "title": "Ensuite Room in Sabie",
    "city": "Sabie",
    "province": "Mpumalanga",
    "address": "22 Jorissen Street, Sabie",
    "price": 3400,
    "rating": 4.74,
    "datePosted": "2026-06-01",
    "amenities": [
      "Backup power",
      "Study desk",
      "Shared kitchen",
      "Communal lounge",
      "Air conditioning"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Sabie.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 123,
    "title": "Backpacker Bunk in Sabie",
    "city": "Sabie",
    "province": "Mpumalanga",
    "address": "137 Kerk Street, Sabie",
    "price": 2000,
    "rating": 4.86,
    "datePosted": "2026-02-02",
    "amenities": [
      "CCTV surveillance",
      "Gym access",
      "Air conditioning",
      "Laundry facilities",
      "Study desk"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Sabie.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 124,
    "title": "Backpacker Bunk in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "117 Kerk Street, Secunda",
    "price": 1800,
    "rating": 4.58,
    "datePosted": "2026-07-19",
    "amenities": [
      "Braai area",
      "24hr security",
      "Communal lounge",
      "Secure parking"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 125,
    "title": "Single Room in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "82 Kerk Street, Secunda",
    "price": 2700,
    "rating": 4.36,
    "datePosted": "2026-01-22",
    "amenities": [
      "Gym access",
      "24hr security",
      "Shared kitchen",
      "Fully furnished",
      "Secure parking",
      "Study desk"
    ],
    "description": "A single room for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 126,
    "title": "Single Room in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "97 Voortrekker Street, Secunda",
    "price": 2800,
    "rating": 4.53,
    "datePosted": "2026-02-04",
    "amenities": [
      "Study desk",
      "Air conditioning",
      "Gym access",
      "Braai area"
    ],
    "description": "A single room for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 127,
    "title": "Ensuite Room in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "110 Van Riebeeck Street, Secunda",
    "price": 4300,
    "rating": 4.7,
    "datePosted": "2026-02-27",
    "amenities": [
      "Study desk",
      "Backup power",
      "Air conditioning",
      "CCTV surveillance",
      "24hr security",
      "Communal lounge"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 128,
    "title": "Shared Room in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "29 Long Street, Secunda",
    "price": 2500,
    "rating": 4.46,
    "datePosted": "2026-04-26",
    "amenities": [
      "Walking distance to campus",
      "Study desk",
      "Bicycle storage",
      "Backup power",
      "Air conditioning"
    ],
    "description": "A shared room for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 129,
    "title": "Bachelor Room in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "144 Kloof Street, Secunda",
    "price": 6100,
    "rating": 4.79,
    "datePosted": "2026-03-24",
    "amenities": [
      "Gym access",
      "Free WiFi",
      "Shared kitchen",
      "Backup power"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 130,
    "title": "Studio Room in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "48 Church Street, Secunda",
    "price": 4900,
    "rating": 4.74,
    "datePosted": "2026-01-08",
    "amenities": [
      "Bicycle storage",
      "Study desk",
      "Shared kitchen",
      "Walking distance to campus"
    ],
    "description": "A studio room for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 131,
    "title": "Single Room in Secunda",
    "city": "Secunda",
    "province": "Mpumalanga",
    "address": "57 Loop Street, Secunda",
    "price": 3300,
    "rating": 4.52,
    "datePosted": "2026-03-28",
    "amenities": [
      "Braai area",
      "Secure parking",
      "24hr security",
      "Shared kitchen",
      "Communal lounge"
    ],
    "description": "A single room for students, close to campus and public transport in Secunda.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 132,
    "title": "Bachelor Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "15 Jorissen Street, Polokwane",
    "price": 4400,
    "rating": 4.77,
    "datePosted": "2026-03-14",
    "amenities": [
      "24hr security",
      "Bicycle storage",
      "Air conditioning",
      "Free WiFi"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 133,
    "title": "Ensuite Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "115 President Street, Polokwane",
    "price": 4500,
    "rating": 4.54,
    "datePosted": "2026-02-01",
    "amenities": [
      "Gym access",
      "Private bathroom",
      "Bicycle storage",
      "Communal lounge",
      "Study desk"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 134,
    "title": "Studio Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "80 Loop Street, Polokwane",
    "price": 5300,
    "rating": 4.31,
    "datePosted": "2026-03-22",
    "amenities": [
      "Secure parking",
      "Laundry facilities",
      "Air conditioning",
      "Free WiFi"
    ],
    "description": "A studio room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 135,
    "title": "Shared Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "67 Prinsloo Street, Polokwane",
    "price": 2000,
    "rating": 4.6,
    "datePosted": "2026-02-06",
    "amenities": [
      "Fully furnished",
      "Study desk",
      "Free WiFi",
      "Secure parking",
      "Walking distance to campus"
    ],
    "description": "A shared room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 136,
    "title": "Ensuite Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "145 Loop Street, Polokwane",
    "price": 3900,
    "rating": 4.31,
    "datePosted": "2026-01-12",
    "amenities": [
      "Walking distance to campus",
      "Study desk",
      "Laundry facilities",
      "Communal lounge",
      "Free WiFi",
      "Braai area"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 137,
    "title": "Single Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "111 Kloof Street, Polokwane",
    "price": 2700,
    "rating": 4.58,
    "datePosted": "2026-03-28",
    "amenities": [
      "Bicycle storage",
      "Walking distance to campus",
      "Fully furnished",
      "Laundry facilities",
      "Backup power",
      "Study desk"
    ],
    "description": "A single room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 138,
    "title": "Shared Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "94 President Street, Polokwane",
    "price": 2700,
    "rating": 4.6,
    "datePosted": "2026-04-19",
    "amenities": [
      "Braai area",
      "Communal lounge",
      "Study desk",
      "Private bathroom"
    ],
    "description": "A shared room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 139,
    "title": "Bachelor Room in Polokwane",
    "city": "Polokwane",
    "province": "Limpopo",
    "address": "81 Kerk Street, Polokwane",
    "price": 4400,
    "rating": 4.66,
    "datePosted": "2026-02-02",
    "amenities": [
      "Fully furnished",
      "Private bathroom",
      "24hr security",
      "Bicycle storage",
      "Shared kitchen",
      "Study desk"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Polokwane.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 140,
    "title": "Bachelor Room in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "91 Jorissen Street, Tzaneen",
    "price": 4800,
    "rating": 4.44,
    "datePosted": "2026-06-15",
    "amenities": [
      "Backup power",
      "Private bathroom",
      "Study desk",
      "Shared kitchen",
      "Communal lounge"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 141,
    "title": "Shared Room in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "128 Market Street, Tzaneen",
    "price": 1900,
    "rating": 4.99,
    "datePosted": "2026-03-27",
    "amenities": [
      "CCTV surveillance",
      "Fully furnished",
      "Air conditioning",
      "Communal lounge",
      "Bicycle storage"
    ],
    "description": "A shared room for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 142,
    "title": "Backpacker Bunk in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "114 Market Street, Tzaneen",
    "price": 2000,
    "rating": 4.86,
    "datePosted": "2026-06-12",
    "amenities": [
      "Communal lounge",
      "Secure parking",
      "Fully furnished",
      "Backup power"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 143,
    "title": "Single Room in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "20 Loop Street, Tzaneen",
    "price": 2700,
    "rating": 4.88,
    "datePosted": "2026-01-20",
    "amenities": [
      "CCTV surveillance",
      "Secure parking",
      "Free WiFi",
      "Braai area",
      "24hr security"
    ],
    "description": "A single room for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 144,
    "title": "Backpacker Bunk in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "131 Kloof Street, Tzaneen",
    "price": 1600,
    "rating": 4.93,
    "datePosted": "2026-05-04",
    "amenities": [
      "CCTV surveillance",
      "Air conditioning",
      "Gym access",
      "Bicycle storage",
      "Walking distance to campus"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 145,
    "title": "Bachelor Room in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "123 Main Road, Tzaneen",
    "price": 4800,
    "rating": 4.65,
    "datePosted": "2026-02-17",
    "amenities": [
      "Backup power",
      "Free WiFi",
      "Secure parking",
      "Study desk",
      "24hr security",
      "Bicycle storage"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 146,
    "title": "Single Room in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "114 Andries Street, Tzaneen",
    "price": 2500,
    "rating": 4.59,
    "datePosted": "2026-04-03",
    "amenities": [
      "24hr security",
      "Communal lounge",
      "CCTV surveillance",
      "Backup power",
      "Laundry facilities"
    ],
    "description": "A single room for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 147,
    "title": "Backpacker Bunk in Tzaneen",
    "city": "Tzaneen",
    "province": "Limpopo",
    "address": "87 Prinsloo Street, Tzaneen",
    "price": 1500,
    "rating": 4.57,
    "datePosted": "2026-03-09",
    "amenities": [
      "Fully furnished",
      "Study desk",
      "Gym access",
      "Communal lounge"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Tzaneen.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 148,
    "title": "Shared Room in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "38 Voortrekker Street, Modimolle",
    "price": 2300,
    "rating": 4.39,
    "datePosted": "2026-07-14",
    "amenities": [
      "Air conditioning",
      "Fully furnished",
      "Walking distance to campus",
      "CCTV surveillance",
      "Laundry facilities"
    ],
    "description": "A shared room for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 149,
    "title": "Single Room in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "98 Loop Street, Modimolle",
    "price": 2600,
    "rating": 4.94,
    "datePosted": "2026-01-24",
    "amenities": [
      "Fully furnished",
      "Braai area",
      "Shared kitchen",
      "Communal lounge",
      "Walking distance to campus",
      "Bicycle storage"
    ],
    "description": "A single room for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 150,
    "title": "Backpacker Bunk in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "94 Loop Street, Modimolle",
    "price": 2100,
    "rating": 4.54,
    "datePosted": "2026-08-01",
    "amenities": [
      "Walking distance to campus",
      "Backup power",
      "Shared kitchen",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 151,
    "title": "Ensuite Room in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "37 Long Street, Modimolle",
    "price": 3800,
    "rating": 4.37,
    "datePosted": "2026-08-02",
    "amenities": [
      "Shared kitchen",
      "Backup power",
      "Braai area",
      "Bicycle storage"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 152,
    "title": "Bachelor Room in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "88 Church Street, Modimolle",
    "price": 5800,
    "rating": 4.88,
    "datePosted": "2026-08-02",
    "amenities": [
      "Backup power",
      "Air conditioning",
      "Laundry facilities",
      "Shared kitchen",
      "Bicycle storage",
      "Walking distance to campus"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 153,
    "title": "Bachelor Room in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "114 Andries Street, Modimolle",
    "price": 4700,
    "rating": 4.47,
    "datePosted": "2026-05-02",
    "amenities": [
      "Braai area",
      "24hr security",
      "Fully furnished",
      "Walking distance to campus"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 154,
    "title": "Bachelor Room in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "116 Prinsloo Street, Modimolle",
    "price": 5100,
    "rating": 4.63,
    "datePosted": "2026-08-18",
    "amenities": [
      "Secure parking",
      "Backup power",
      "Bicycle storage",
      "Braai area"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 155,
    "title": "Shared Room in Modimolle",
    "city": "Modimolle",
    "province": "Limpopo",
    "address": "114 Bree Street, Modimolle",
    "price": 2300,
    "rating": 4.59,
    "datePosted": "2026-02-14",
    "amenities": [
      "Air conditioning",
      "Bicycle storage",
      "Laundry facilities",
      "Gym access",
      "CCTV surveillance"
    ],
    "description": "A shared room for students, close to campus and public transport in Modimolle.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 156,
    "title": "Bachelor Room in Louis Trichardt",
    "city": "Louis Trichardt",
    "province": "Limpopo",
    "address": "66 Van Riebeeck Street, Louis Trichardt",
    "price": 4600,
    "rating": 4.95,
    "datePosted": "2026-07-15",
    "amenities": [
      "Communal lounge",
      "Braai area",
      "24hr security",
      "Gym access"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Louis Trichardt.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 157,
    "title": "Bachelor Room in Louis Trichardt",
    "city": "Louis Trichardt",
    "province": "Limpopo",
    "address": "23 Station Road, Louis Trichardt",
    "price": 4500,
    "rating": 4.88,
    "datePosted": "2026-01-24",
    "amenities": [
      "Gym access",
      "Secure parking",
      "Communal lounge",
      "Shared kitchen"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Louis Trichardt.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 158,
    "title": "Shared Room in Louis Trichardt",
    "city": "Louis Trichardt",
    "province": "Limpopo",
    "address": "91 Jorissen Street, Louis Trichardt",
    "price": 2500,
    "rating": 4.56,
    "datePosted": "2026-04-15",
    "amenities": [
      "Braai area",
      "Free WiFi",
      "Laundry facilities",
      "Gym access"
    ],
    "description": "A shared room for students, close to campus and public transport in Louis Trichardt.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 159,
    "title": "Single Room in Louis Trichardt",
    "city": "Louis Trichardt",
    "province": "Limpopo",
    "address": "9 Long Street, Louis Trichardt",
    "price": 2700,
    "rating": 4.85,
    "datePosted": "2026-02-08",
    "amenities": [
      "Private bathroom",
      "Braai area",
      "Walking distance to campus",
      "Fully furnished",
      "24hr security"
    ],
    "description": "A single room for students, close to campus and public transport in Louis Trichardt.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 160,
    "title": "Single Room in Louis Trichardt",
    "city": "Louis Trichardt",
    "province": "Limpopo",
    "address": "122 Jorissen Street, Louis Trichardt",
    "price": 2600,
    "rating": 4.3,
    "datePosted": "2026-01-21",
    "amenities": [
      "Backup power",
      "Bicycle storage",
      "Walking distance to campus",
      "Secure parking",
      "CCTV surveillance",
      "Air conditioning"
    ],
    "description": "A single room for students, close to campus and public transport in Louis Trichardt.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 161,
    "title": "Single Room in Louis Trichardt",
    "city": "Louis Trichardt",
    "province": "Limpopo",
    "address": "40 Long Street, Louis Trichardt",
    "price": 2600,
    "rating": 4.39,
    "datePosted": "2026-03-06",
    "amenities": [
      "Braai area",
      "Study desk",
      "Bicycle storage",
      "Backup power",
      "Private bathroom",
      "Communal lounge"
    ],
    "description": "A single room for students, close to campus and public transport in Louis Trichardt.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 162,
    "title": "Backpacker Bunk in Mahikeng",
    "city": "Mahikeng",
    "province": "North West",
    "address": "30 Voortrekker Street, Mahikeng",
    "price": 2200,
    "rating": 4.8,
    "datePosted": "2026-03-19",
    "amenities": [
      "Free WiFi",
      "Fully furnished",
      "Gym access",
      "Air conditioning",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Mahikeng.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 163,
    "title": "Ensuite Room in Mahikeng",
    "city": "Mahikeng",
    "province": "North West",
    "address": "92 Kloof Street, Mahikeng",
    "price": 3200,
    "rating": 4.36,
    "datePosted": "2026-04-09",
    "amenities": [
      "Braai area",
      "Shared kitchen",
      "Fully furnished",
      "Communal lounge"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Mahikeng.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 164,
    "title": "Single Room in Mahikeng",
    "city": "Mahikeng",
    "province": "North West",
    "address": "131 Loop Street, Mahikeng",
    "price": 3000,
    "rating": 4.57,
    "datePosted": "2026-04-12",
    "amenities": [
      "Free WiFi",
      "Laundry facilities",
      "Braai area",
      "Secure parking",
      "Communal lounge",
      "Fully furnished"
    ],
    "description": "A single room for students, close to campus and public transport in Mahikeng.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 165,
    "title": "Studio Room in Mahikeng",
    "city": "Mahikeng",
    "province": "North West",
    "address": "19 Main Road, Mahikeng",
    "price": 3800,
    "rating": 4.84,
    "datePosted": "2026-07-21",
    "amenities": [
      "Secure parking",
      "Walking distance to campus",
      "Fully furnished",
      "Braai area",
      "Study desk"
    ],
    "description": "A studio room for students, close to campus and public transport in Mahikeng.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 166,
    "title": "Studio Room in Mahikeng",
    "city": "Mahikeng",
    "province": "North West",
    "address": "92 Church Street, Mahikeng",
    "price": 4200,
    "rating": 4.99,
    "datePosted": "2026-05-11",
    "amenities": [
      "Fully furnished",
      "Braai area",
      "Communal lounge",
      "Shared kitchen",
      "CCTV surveillance",
      "Secure parking"
    ],
    "description": "A studio room for students, close to campus and public transport in Mahikeng.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 167,
    "title": "Backpacker Bunk in Mahikeng",
    "city": "Mahikeng",
    "province": "North West",
    "address": "36 Prinsloo Street, Mahikeng",
    "price": 1700,
    "rating": 4.33,
    "datePosted": "2026-02-24",
    "amenities": [
      "CCTV surveillance",
      "Free WiFi",
      "Backup power",
      "Private bathroom"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Mahikeng.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 168,
    "title": "Single Room in Mahikeng",
    "city": "Mahikeng",
    "province": "North West",
    "address": "81 Jorissen Street, Mahikeng",
    "price": 2700,
    "rating": 4.83,
    "datePosted": "2026-02-21",
    "amenities": [
      "Bicycle storage",
      "Braai area",
      "Gym access",
      "Secure parking",
      "Backup power",
      "Free WiFi"
    ],
    "description": "A single room for students, close to campus and public transport in Mahikeng.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 169,
    "title": "Studio Room in Rustenburg",
    "city": "Rustenburg",
    "province": "North West",
    "address": "86 Van Riebeeck Street, Rustenburg",
    "price": 3900,
    "rating": 4.82,
    "datePosted": "2026-01-06",
    "amenities": [
      "Private bathroom",
      "Bicycle storage",
      "24hr security",
      "Laundry facilities",
      "CCTV surveillance"
    ],
    "description": "A studio room for students, close to campus and public transport in Rustenburg.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 170,
    "title": "Ensuite Room in Rustenburg",
    "city": "Rustenburg",
    "province": "North West",
    "address": "129 Market Street, Rustenburg",
    "price": 4200,
    "rating": 4.81,
    "datePosted": "2026-01-21",
    "amenities": [
      "Communal lounge",
      "24hr security",
      "Bicycle storage",
      "Gym access",
      "Backup power",
      "Study desk"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Rustenburg.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 171,
    "title": "Ensuite Room in Rustenburg",
    "city": "Rustenburg",
    "province": "North West",
    "address": "77 Loop Street, Rustenburg",
    "price": 3700,
    "rating": 4.51,
    "datePosted": "2026-06-15",
    "amenities": [
      "Private bathroom",
      "Study desk",
      "24hr security",
      "Fully furnished",
      "Backup power"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Rustenburg.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 172,
    "title": "Backpacker Bunk in Rustenburg",
    "city": "Rustenburg",
    "province": "North West",
    "address": "115 Market Street, Rustenburg",
    "price": 2100,
    "rating": 5.0,
    "datePosted": "2026-03-15",
    "amenities": [
      "CCTV surveillance",
      "Free WiFi",
      "Walking distance to campus",
      "24hr security",
      "Air conditioning"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Rustenburg.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 173,
    "title": "Backpacker Bunk in Rustenburg",
    "city": "Rustenburg",
    "province": "North West",
    "address": "105 Voortrekker Street, Rustenburg",
    "price": 1500,
    "rating": 4.85,
    "datePosted": "2026-01-09",
    "amenities": [
      "24hr security",
      "Free WiFi",
      "Shared kitchen",
      "Air conditioning",
      "Fully furnished"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Rustenburg.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 174,
    "title": "Shared Room in Rustenburg",
    "city": "Rustenburg",
    "province": "North West",
    "address": "95 Long Street, Rustenburg",
    "price": 1900,
    "rating": 4.78,
    "datePosted": "2026-04-11",
    "amenities": [
      "Bicycle storage",
      "Air conditioning",
      "Free WiFi",
      "CCTV surveillance",
      "Shared kitchen"
    ],
    "description": "A shared room for students, close to campus and public transport in Rustenburg.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 175,
    "title": "Ensuite Room in Potchefstroom",
    "city": "Potchefstroom",
    "province": "North West",
    "address": "37 Kloof Street, Potchefstroom",
    "price": 3400,
    "rating": 4.97,
    "datePosted": "2026-01-07",
    "amenities": [
      "Walking distance to campus",
      "Laundry facilities",
      "24hr security",
      "Fully furnished",
      "Backup power",
      "Private bathroom"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Potchefstroom.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 176,
    "title": "Backpacker Bunk in Potchefstroom",
    "city": "Potchefstroom",
    "province": "North West",
    "address": "134 President Street, Potchefstroom",
    "price": 1700,
    "rating": 4.61,
    "datePosted": "2026-06-17",
    "amenities": [
      "Private bathroom",
      "Backup power",
      "Bicycle storage",
      "CCTV surveillance",
      "Walking distance to campus"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Potchefstroom.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 177,
    "title": "Studio Room in Potchefstroom",
    "city": "Potchefstroom",
    "province": "North West",
    "address": "33 Long Street, Potchefstroom",
    "price": 5300,
    "rating": 4.61,
    "datePosted": "2026-01-23",
    "amenities": [
      "Shared kitchen",
      "Secure parking",
      "Communal lounge",
      "Walking distance to campus"
    ],
    "description": "A studio room for students, close to campus and public transport in Potchefstroom.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 178,
    "title": "Backpacker Bunk in Potchefstroom",
    "city": "Potchefstroom",
    "province": "North West",
    "address": "90 Bree Street, Potchefstroom",
    "price": 2000,
    "rating": 4.8,
    "datePosted": "2026-01-14",
    "amenities": [
      "Shared kitchen",
      "Gym access",
      "CCTV surveillance",
      "Backup power",
      "Bicycle storage",
      "Communal lounge"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Potchefstroom.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 179,
    "title": "Backpacker Bunk in Potchefstroom",
    "city": "Potchefstroom",
    "province": "North West",
    "address": "94 Prinsloo Street, Potchefstroom",
    "price": 1700,
    "rating": 4.85,
    "datePosted": "2026-01-07",
    "amenities": [
      "Secure parking",
      "Study desk",
      "Private bathroom",
      "Bicycle storage",
      "Shared kitchen",
      "Braai area"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Potchefstroom.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 180,
    "title": "Studio Room in Potchefstroom",
    "city": "Potchefstroom",
    "province": "North West",
    "address": "143 President Street, Potchefstroom",
    "price": 4900,
    "rating": 5.0,
    "datePosted": "2026-07-17",
    "amenities": [
      "Shared kitchen",
      "Study desk",
      "Backup power",
      "Laundry facilities"
    ],
    "description": "A studio room for students, close to campus and public transport in Potchefstroom.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 181,
    "title": "Bachelor Room in Klerksdorp",
    "city": "Klerksdorp",
    "province": "North West",
    "address": "106 Prinsloo Street, Klerksdorp",
    "price": 5500,
    "rating": 4.63,
    "datePosted": "2026-05-21",
    "amenities": [
      "Shared kitchen",
      "Communal lounge",
      "24hr security",
      "Fully furnished",
      "Study desk",
      "Secure parking"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Klerksdorp.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 182,
    "title": "Studio Room in Klerksdorp",
    "city": "Klerksdorp",
    "province": "North West",
    "address": "143 Jorissen Street, Klerksdorp",
    "price": 4200,
    "rating": 4.88,
    "datePosted": "2026-05-21",
    "amenities": [
      "24hr security",
      "Bicycle storage",
      "Shared kitchen",
      "Laundry facilities",
      "Gym access",
      "Free WiFi"
    ],
    "description": "A studio room for students, close to campus and public transport in Klerksdorp.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 183,
    "title": "Shared Room in Klerksdorp",
    "city": "Klerksdorp",
    "province": "North West",
    "address": "43 Market Street, Klerksdorp",
    "price": 2200,
    "rating": 4.48,
    "datePosted": "2026-06-23",
    "amenities": [
      "Secure parking",
      "24hr security",
      "Gym access",
      "Backup power",
      "Study desk"
    ],
    "description": "A shared room for students, close to campus and public transport in Klerksdorp.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 184,
    "title": "Bachelor Room in Klerksdorp",
    "city": "Klerksdorp",
    "province": "North West",
    "address": "79 Market Street, Klerksdorp",
    "price": 5000,
    "rating": 4.41,
    "datePosted": "2026-07-01",
    "amenities": [
      "Shared kitchen",
      "Gym access",
      "Fully furnished",
      "Communal lounge",
      "Air conditioning",
      "Walking distance to campus"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Klerksdorp.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 185,
    "title": "Bachelor Room in Klerksdorp",
    "city": "Klerksdorp",
    "province": "North West",
    "address": "12 Main Road, Klerksdorp",
    "price": 6100,
    "rating": 4.7,
    "datePosted": "2026-06-27",
    "amenities": [
      "Shared kitchen",
      "Free WiFi",
      "Fully furnished",
      "Bicycle storage"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Klerksdorp.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 186,
    "title": "Shared Room in Klerksdorp",
    "city": "Klerksdorp",
    "province": "North West",
    "address": "9 Kerk Street, Klerksdorp",
    "price": 2700,
    "rating": 4.86,
    "datePosted": "2026-07-08",
    "amenities": [
      "Air conditioning",
      "Fully furnished",
      "Backup power",
      "Secure parking",
      "Private bathroom"
    ],
    "description": "A shared room for students, close to campus and public transport in Klerksdorp.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 187,
    "title": "Ensuite Room in Klerksdorp",
    "city": "Klerksdorp",
    "province": "North West",
    "address": "20 President Street, Klerksdorp",
    "price": 4100,
    "rating": 4.44,
    "datePosted": "2026-06-16",
    "amenities": [
      "Study desk",
      "Shared kitchen",
      "Secure parking",
      "Laundry facilities",
      "Braai area",
      "Walking distance to campus"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Klerksdorp.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 188,
    "title": "Studio Room in Bloemfontein",
    "city": "Bloemfontein",
    "province": "Free State",
    "address": "90 Andries Street, Bloemfontein",
    "price": 4800,
    "rating": 4.37,
    "datePosted": "2026-03-06",
    "amenities": [
      "Backup power",
      "Bicycle storage",
      "24hr security",
      "Gym access",
      "CCTV surveillance"
    ],
    "description": "A studio room for students, close to campus and public transport in Bloemfontein.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 189,
    "title": "Ensuite Room in Bloemfontein",
    "city": "Bloemfontein",
    "province": "Free State",
    "address": "117 Station Road, Bloemfontein",
    "price": 3500,
    "rating": 4.96,
    "datePosted": "2026-08-26",
    "amenities": [
      "Backup power",
      "Study desk",
      "Free WiFi",
      "Communal lounge"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Bloemfontein.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 190,
    "title": "Bachelor Room in Bloemfontein",
    "city": "Bloemfontein",
    "province": "Free State",
    "address": "42 Long Street, Bloemfontein",
    "price": 5500,
    "rating": 5.0,
    "datePosted": "2026-05-08",
    "amenities": [
      "Fully furnished",
      "Private bathroom",
      "Bicycle storage",
      "Shared kitchen",
      "Secure parking"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Bloemfontein.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 191,
    "title": "Ensuite Room in Bloemfontein",
    "city": "Bloemfontein",
    "province": "Free State",
    "address": "7 President Street, Bloemfontein",
    "price": 4100,
    "rating": 4.45,
    "datePosted": "2026-04-07",
    "amenities": [
      "Bicycle storage",
      "Gym access",
      "Secure parking",
      "Private bathroom"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Bloemfontein.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 192,
    "title": "Single Room in Bloemfontein",
    "city": "Bloemfontein",
    "province": "Free State",
    "address": "128 Station Road, Bloemfontein",
    "price": 2200,
    "rating": 4.39,
    "datePosted": "2026-03-12",
    "amenities": [
      "Communal lounge",
      "Backup power",
      "Gym access",
      "Free WiFi",
      "Study desk",
      "Laundry facilities"
    ],
    "description": "A single room for students, close to campus and public transport in Bloemfontein.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 193,
    "title": "Backpacker Bunk in Bloemfontein",
    "city": "Bloemfontein",
    "province": "Free State",
    "address": "105 Prinsloo Street, Bloemfontein",
    "price": 2000,
    "rating": 4.44,
    "datePosted": "2026-06-02",
    "amenities": [
      "Study desk",
      "Laundry facilities",
      "Free WiFi",
      "Air conditioning",
      "Gym access"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Bloemfontein.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 194,
    "title": "Single Room in Welkom",
    "city": "Welkom",
    "province": "Free State",
    "address": "117 Loop Street, Welkom",
    "price": 2800,
    "rating": 4.39,
    "datePosted": "2026-01-25",
    "amenities": [
      "Gym access",
      "Braai area",
      "Air conditioning",
      "Fully furnished",
      "CCTV surveillance",
      "Study desk"
    ],
    "description": "A single room for students, close to campus and public transport in Welkom.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 195,
    "title": "Ensuite Room in Welkom",
    "city": "Welkom",
    "province": "Free State",
    "address": "88 Prinsloo Street, Welkom",
    "price": 4300,
    "rating": 4.58,
    "datePosted": "2026-01-11",
    "amenities": [
      "Walking distance to campus",
      "Bicycle storage",
      "Shared kitchen",
      "Private bathroom",
      "Air conditioning",
      "Gym access"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Welkom.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 196,
    "title": "Single Room in Welkom",
    "city": "Welkom",
    "province": "Free State",
    "address": "87 Market Street, Welkom",
    "price": 2200,
    "rating": 4.53,
    "datePosted": "2026-06-17",
    "amenities": [
      "CCTV surveillance",
      "Shared kitchen",
      "Air conditioning",
      "Gym access",
      "Communal lounge"
    ],
    "description": "A single room for students, close to campus and public transport in Welkom.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 197,
    "title": "Studio Room in Welkom",
    "city": "Welkom",
    "province": "Free State",
    "address": "78 Kerk Street, Welkom",
    "price": 4300,
    "rating": 4.8,
    "datePosted": "2026-03-21",
    "amenities": [
      "Fully furnished",
      "Gym access",
      "Braai area",
      "CCTV surveillance",
      "Bicycle storage",
      "Secure parking"
    ],
    "description": "A studio room for students, close to campus and public transport in Welkom.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 198,
    "title": "Ensuite Room in Welkom",
    "city": "Welkom",
    "province": "Free State",
    "address": "86 Main Road, Welkom",
    "price": 3200,
    "rating": 4.32,
    "datePosted": "2026-05-10",
    "amenities": [
      "Private bathroom",
      "Laundry facilities",
      "Air conditioning",
      "Backup power",
      "Walking distance to campus",
      "Fully furnished"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Welkom.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 199,
    "title": "Studio Room in Welkom",
    "city": "Welkom",
    "province": "Free State",
    "address": "15 Andries Street, Welkom",
    "price": 4500,
    "rating": 4.84,
    "datePosted": "2026-04-14",
    "amenities": [
      "Communal lounge",
      "Shared kitchen",
      "Gym access",
      "Fully furnished",
      "Walking distance to campus",
      "Air conditioning"
    ],
    "description": "A studio room for students, close to campus and public transport in Welkom.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 200,
    "title": "Backpacker Bunk in Bethlehem",
    "city": "Bethlehem",
    "province": "Free State",
    "address": "30 Church Street, Bethlehem",
    "price": 1800,
    "rating": 4.41,
    "datePosted": "2026-07-09",
    "amenities": [
      "Free WiFi",
      "Secure parking",
      "24hr security",
      "Laundry facilities"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Bethlehem.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 201,
    "title": "Shared Room in Bethlehem",
    "city": "Bethlehem",
    "province": "Free State",
    "address": "122 Loop Street, Bethlehem",
    "price": 2400,
    "rating": 4.53,
    "datePosted": "2026-07-02",
    "amenities": [
      "Study desk",
      "Walking distance to campus",
      "Shared kitchen",
      "Gym access",
      "Private bathroom",
      "Bicycle storage"
    ],
    "description": "A shared room for students, close to campus and public transport in Bethlehem.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 202,
    "title": "Ensuite Room in Bethlehem",
    "city": "Bethlehem",
    "province": "Free State",
    "address": "46 Main Road, Bethlehem",
    "price": 4400,
    "rating": 4.78,
    "datePosted": "2026-08-10",
    "amenities": [
      "Fully furnished",
      "Gym access",
      "24hr security",
      "Communal lounge",
      "Walking distance to campus"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Bethlehem.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 203,
    "title": "Backpacker Bunk in Bethlehem",
    "city": "Bethlehem",
    "province": "Free State",
    "address": "125 Kloof Street, Bethlehem",
    "price": 1900,
    "rating": 4.46,
    "datePosted": "2026-03-21",
    "amenities": [
      "Secure parking",
      "Backup power",
      "Gym access",
      "CCTV surveillance"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Bethlehem.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 204,
    "title": "Studio Room in Bethlehem",
    "city": "Bethlehem",
    "province": "Free State",
    "address": "127 Andries Street, Bethlehem",
    "price": 4400,
    "rating": 4.49,
    "datePosted": "2026-02-04",
    "amenities": [
      "Communal lounge",
      "24hr security",
      "Gym access",
      "Bicycle storage",
      "Walking distance to campus"
    ],
    "description": "A studio room for students, close to campus and public transport in Bethlehem.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 205,
    "title": "Bachelor Room in Bethlehem",
    "city": "Bethlehem",
    "province": "Free State",
    "address": "103 Kerk Street, Bethlehem",
    "price": 5900,
    "rating": 4.36,
    "datePosted": "2026-01-13",
    "amenities": [
      "Backup power",
      "Communal lounge",
      "Free WiFi",
      "CCTV surveillance",
      "Walking distance to campus"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Bethlehem.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 206,
    "title": "Backpacker Bunk in Parys",
    "city": "Parys",
    "province": "Free State",
    "address": "124 Andries Street, Parys",
    "price": 1900,
    "rating": 4.95,
    "datePosted": "2026-07-11",
    "amenities": [
      "Laundry facilities",
      "Braai area",
      "Gym access",
      "Backup power"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Parys.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 207,
    "title": "Studio Room in Parys",
    "city": "Parys",
    "province": "Free State",
    "address": "63 Voortrekker Street, Parys",
    "price": 4200,
    "rating": 4.75,
    "datePosted": "2026-01-14",
    "amenities": [
      "Study desk",
      "Fully furnished",
      "Gym access",
      "Private bathroom"
    ],
    "description": "A studio room for students, close to campus and public transport in Parys.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 208,
    "title": "Single Room in Parys",
    "city": "Parys",
    "province": "Free State",
    "address": "122 Main Road, Parys",
    "price": 2800,
    "rating": 4.58,
    "datePosted": "2026-01-16",
    "amenities": [
      "Backup power",
      "Free WiFi",
      "Gym access",
      "Shared kitchen"
    ],
    "description": "A single room for students, close to campus and public transport in Parys.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 209,
    "title": "Ensuite Room in Parys",
    "city": "Parys",
    "province": "Free State",
    "address": "53 Bree Street, Parys",
    "price": 4700,
    "rating": 4.76,
    "datePosted": "2026-03-04",
    "amenities": [
      "Fully furnished",
      "Backup power",
      "Communal lounge",
      "Free WiFi",
      "Study desk"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Parys.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 210,
    "title": "Bachelor Room in Parys",
    "city": "Parys",
    "province": "Free State",
    "address": "46 Jorissen Street, Parys",
    "price": 4300,
    "rating": 4.43,
    "datePosted": "2026-07-24",
    "amenities": [
      "24hr security",
      "CCTV surveillance",
      "Free WiFi",
      "Laundry facilities",
      "Secure parking"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Parys.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 211,
    "title": "Studio Room in Parys",
    "city": "Parys",
    "province": "Free State",
    "address": "78 Church Street, Parys",
    "price": 3900,
    "rating": 4.68,
    "datePosted": "2026-05-15",
    "amenities": [
      "Private bathroom",
      "CCTV surveillance",
      "24hr security",
      "Backup power",
      "Secure parking",
      "Fully furnished"
    ],
    "description": "A studio room for students, close to campus and public transport in Parys.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 212,
    "title": "Shared Room in Parys",
    "city": "Parys",
    "province": "Free State",
    "address": "71 President Street, Parys",
    "price": 2600,
    "rating": 4.62,
    "datePosted": "2026-03-10",
    "amenities": [
      "Private bathroom",
      "24hr security",
      "Shared kitchen",
      "Walking distance to campus"
    ],
    "description": "A shared room for students, close to campus and public transport in Parys.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 213,
    "title": "Single Room in Kimberley",
    "city": "Kimberley",
    "province": "Northern Cape",
    "address": "77 Main Road, Kimberley",
    "price": 3300,
    "rating": 4.66,
    "datePosted": "2026-01-23",
    "amenities": [
      "Laundry facilities",
      "Shared kitchen",
      "Air conditioning",
      "Fully furnished",
      "Communal lounge",
      "Walking distance to campus"
    ],
    "description": "A single room for students, close to campus and public transport in Kimberley.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 214,
    "title": "Ensuite Room in Kimberley",
    "city": "Kimberley",
    "province": "Northern Cape",
    "address": "37 Market Street, Kimberley",
    "price": 3500,
    "rating": 4.57,
    "datePosted": "2026-05-03",
    "amenities": [
      "Fully furnished",
      "CCTV surveillance",
      "Private bathroom",
      "Free WiFi",
      "Backup power"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Kimberley.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 215,
    "title": "Studio Room in Kimberley",
    "city": "Kimberley",
    "province": "Northern Cape",
    "address": "4 Station Road, Kimberley",
    "price": 4800,
    "rating": 4.38,
    "datePosted": "2026-03-23",
    "amenities": [
      "Walking distance to campus",
      "Communal lounge",
      "Private bathroom",
      "Free WiFi",
      "Fully furnished"
    ],
    "description": "A studio room for students, close to campus and public transport in Kimberley.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 216,
    "title": "Shared Room in Kimberley",
    "city": "Kimberley",
    "province": "Northern Cape",
    "address": "130 Bree Street, Kimberley",
    "price": 2400,
    "rating": 4.73,
    "datePosted": "2026-03-01",
    "amenities": [
      "Air conditioning",
      "Walking distance to campus",
      "Study desk",
      "Fully furnished",
      "Backup power",
      "24hr security"
    ],
    "description": "A shared room for students, close to campus and public transport in Kimberley.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 217,
    "title": "Shared Room in Kimberley",
    "city": "Kimberley",
    "province": "Northern Cape",
    "address": "118 Market Street, Kimberley",
    "price": 2500,
    "rating": 4.86,
    "datePosted": "2026-08-16",
    "amenities": [
      "Walking distance to campus",
      "Laundry facilities",
      "Communal lounge",
      "Gym access",
      "Secure parking",
      "Bicycle storage"
    ],
    "description": "A shared room for students, close to campus and public transport in Kimberley.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 218,
    "title": "Shared Room in Kimberley",
    "city": "Kimberley",
    "province": "Northern Cape",
    "address": "22 Bree Street, Kimberley",
    "price": 2100,
    "rating": 4.38,
    "datePosted": "2026-08-17",
    "amenities": [
      "CCTV surveillance",
      "Gym access",
      "Walking distance to campus",
      "24hr security",
      "Study desk",
      "Air conditioning"
    ],
    "description": "A shared room for students, close to campus and public transport in Kimberley.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 219,
    "title": "Bachelor Room in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "139 Kloof Street, Upington",
    "price": 4800,
    "rating": 4.61,
    "datePosted": "2026-07-07",
    "amenities": [
      "24hr security",
      "Communal lounge",
      "Braai area",
      "Gym access"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 220,
    "title": "Shared Room in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "25 President Street, Upington",
    "price": 2700,
    "rating": 4.59,
    "datePosted": "2026-06-05",
    "amenities": [
      "CCTV surveillance",
      "Bicycle storage",
      "Free WiFi",
      "Secure parking",
      "Shared kitchen",
      "Gym access"
    ],
    "description": "A shared room for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 221,
    "title": "Single Room in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "80 President Street, Upington",
    "price": 3000,
    "rating": 4.7,
    "datePosted": "2026-01-12",
    "amenities": [
      "Free WiFi",
      "Laundry facilities",
      "Backup power",
      "Communal lounge",
      "Walking distance to campus",
      "Private bathroom"
    ],
    "description": "A single room for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 222,
    "title": "Ensuite Room in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "18 Andries Street, Upington",
    "price": 4300,
    "rating": 4.59,
    "datePosted": "2026-08-01",
    "amenities": [
      "Study desk",
      "CCTV surveillance",
      "Communal lounge",
      "Secure parking",
      "Free WiFi",
      "Backup power"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  },
  {
    "id": 223,
    "title": "Shared Room in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "99 Main Road, Upington",
    "price": 2400,
    "rating": 4.91,
    "datePosted": "2026-02-07",
    "amenities": [
      "Bicycle storage",
      "Laundry facilities",
      "Study desk",
      "Fully furnished",
      "Communal lounge"
    ],
    "description": "A shared room for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
    ]
  },
  {
    "id": 224,
    "title": "Backpacker Bunk in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "47 Voortrekker Street, Upington",
    "price": 2000,
    "rating": 4.83,
    "datePosted": "2026-03-21",
    "amenities": [
      "Bicycle storage",
      "Gym access",
      "Shared kitchen",
      "Walking distance to campus",
      "Private bathroom",
      "Free WiFi"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80"
    ]
  },
  {
    "id": 225,
    "title": "Ensuite Room in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "99 Loop Street, Upington",
    "price": 4500,
    "rating": 4.49,
    "datePosted": "2026-01-16",
    "amenities": [
      "Secure parking",
      "Communal lounge",
      "24hr security",
      "Shared kitchen"
    ],
    "description": "A ensuite room for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80"
    ]
  },
  {
    "id": 226,
    "title": "Backpacker Bunk in Upington",
    "city": "Upington",
    "province": "Northern Cape",
    "address": "109 Church Street, Upington",
    "price": 1600,
    "rating": 4.32,
    "datePosted": "2026-06-14",
    "amenities": [
      "Free WiFi",
      "Private bathroom",
      "CCTV surveillance",
      "Study desk",
      "Bicycle storage",
      "Air conditioning"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in Upington.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=700&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80"
    ]
  },
  {
    "id": 227,
    "title": "Shared Room in Springbok",
    "city": "Springbok",
    "province": "Northern Cape",
    "address": "114 Kerk Street, Springbok",
    "price": 1800,
    "rating": 4.34,
    "datePosted": "2026-05-17",
    "amenities": [
      "Laundry facilities",
      "Bicycle storage",
      "Braai area",
      "CCTV surveillance"
    ],
    "description": "A shared room for students, close to campus and public transport in Springbok.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=700&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80"
    ]
  },
  {
    "id": 228,
    "title": "Studio Room in Springbok",
    "city": "Springbok",
    "province": "Northern Cape",
    "address": "83 Van Riebeeck Street, Springbok",
    "price": 4500,
    "rating": 4.45,
    "datePosted": "2026-03-21",
    "amenities": [
      "Fully furnished",
      "Private bathroom",
      "Backup power",
      "Shared kitchen",
      "Communal lounge",
      "Gym access"
    ],
    "description": "A studio room for students, close to campus and public transport in Springbok.",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80"
    ]
  },
  {
    "id": 229,
    "title": "Studio Room in Springbok",
    "city": "Springbok",
    "province": "Northern Cape",
    "address": "46 Loop Street, Springbok",
    "price": 3900,
    "rating": 4.77,
    "datePosted": "2026-08-06",
    "amenities": [
      "Braai area",
      "Gym access",
      "Secure parking",
      "Free WiFi",
      "24hr security",
      "Fully furnished"
    ],
    "description": "A studio room for students, close to campus and public transport in Springbok.",
    "images": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&q=80",
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80"
    ]
  },
  {
    "id": 230,
    "title": "Bachelor Room in Springbok",
    "city": "Springbok",
    "province": "Northern Cape",
    "address": "108 Andries Street, Springbok",
    "price": 5200,
    "rating": 4.63,
    "datePosted": "2026-08-22",
    "amenities": [
      "Backup power",
      "Communal lounge",
      "Laundry facilities",
      "Shared kitchen",
      "Gym access"
    ],
    "description": "A bachelor room for students, close to campus and public transport in Springbok.",
    "images": [
      "https://images.unsplash.com/photo-1519974719765-e6559eac2575?w=700&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
    ]
  },
  {
    "id": 231,
    "title": "Shared Room in Springbok",
    "city": "Springbok",
    "province": "Northern Cape",
    "address": "38 Van Riebeeck Street, Springbok",
    "price": 2200,
    "rating": 4.67,
    "datePosted": "2026-04-16",
    "amenities": [
      "Study desk",
      "Gym access",
      "Laundry facilities",
      "Braai area",
      "CCTV surveillance"
    ],
    "description": "A shared room for students, close to campus and public transport in Springbok.",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80"
    ]
  },
  {
    "id": 232,
    "title": "Shared Room in Springbok",
    "city": "Springbok",
    "province": "Northern Cape",
    "address": "86 Long Street, Springbok",
    "price": 2200,
    "rating": 4.81,
    "datePosted": "2026-02-21",
    "amenities": [
      "Shared kitchen",
      "CCTV surveillance",
      "Secure parking",
      "24hr security",
      "Study desk",
      "Gym access"
    ],
    "description": "A shared room for students, close to campus and public transport in Springbok.",
    "images": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80"
    ]
  },
  {
    "id": 233,
    "title": "Studio Room in De Aar",
    "city": "De Aar",
    "province": "Northern Cape",
    "address": "12 Bree Street, De Aar",
    "price": 5000,
    "rating": 4.81,
    "datePosted": "2026-06-04",
    "amenities": [
      "Laundry facilities",
      "Bicycle storage",
      "CCTV surveillance",
      "Air conditioning"
    ],
    "description": "A studio room for students, close to campus and public transport in De Aar.",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80"
    ]
  },
  {
    "id": 234,
    "title": "Shared Room in De Aar",
    "city": "De Aar",
    "province": "Northern Cape",
    "address": "87 Long Street, De Aar",
    "price": 2500,
    "rating": 4.82,
    "datePosted": "2026-07-26",
    "amenities": [
      "Free WiFi",
      "Private bathroom",
      "CCTV surveillance",
      "Walking distance to campus",
      "Study desk"
    ],
    "description": "A shared room for students, close to campus and public transport in De Aar.",
    "images": [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=700&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80"
    ]
  },
  {
    "id": 235,
    "title": "Ensuite Room in De Aar",
    "city": "De Aar",
    "province": "Northern Cape",
    "address": "54 Andries Street, De Aar",
    "price": 3900,
    "rating": 4.57,
    "datePosted": "2026-05-25",
    "amenities": [
      "Secure parking",
      "Gym access",
      "24hr security",
      "Bicycle storage",
      "Backup power"
    ],
    "description": "A ensuite room for students, close to campus and public transport in De Aar.",
    "images": [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
    ]
  },
  {
    "id": 236,
    "title": "Backpacker Bunk in De Aar",
    "city": "De Aar",
    "province": "Northern Cape",
    "address": "68 Station Road, De Aar",
    "price": 2000,
    "rating": 4.63,
    "datePosted": "2026-08-19",
    "amenities": [
      "Communal lounge",
      "Secure parking",
      "Study desk",
      "Bicycle storage",
      "Walking distance to campus"
    ],
    "description": "A backpacker bunk for students, close to campus and public transport in De Aar.",
    "images": [
      "https://images.unsplash.com/photo-1560448075-bb485b067938?w=700&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80"
    ]
  },
  {
    "id": 237,
    "title": "Studio Room in De Aar",
    "city": "De Aar",
    "province": "Northern Cape",
    "address": "82 Main Road, De Aar",
    "price": 4400,
    "rating": 4.4,
    "datePosted": "2026-03-11",
    "amenities": [
      "Study desk",
      "Air conditioning",
      "Braai area",
      "Private bathroom",
      "Walking distance to campus"
    ],
    "description": "A studio room for students, close to campus and public transport in De Aar.",
    "images": [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80",
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80"
    ]
  },
  {
    "id": 238,
    "title": "Bachelor Room in De Aar",
    "city": "De Aar",
    "province": "Northern Cape",
    "address": "108 Kloof Street, De Aar",
    "price": 6000,
    "rating": 4.7,
    "datePosted": "2026-03-07",
    "amenities": [
      "Backup power",
      "Private bathroom",
      "24hr security",
      "CCTV surveillance",
      "Laundry facilities"
    ],
    "description": "A bachelor room for students, close to campus and public transport in De Aar.",
    "images": [
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=700&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=700&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80"
    ]
  }
];