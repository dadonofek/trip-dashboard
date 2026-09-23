// ─────────────────────────────────────────────────────────────
//  TRIP DATA  –  Upstate NY Family Foliage 2026
//  index.html reads window.TRIP_DATA and renders everything.
//  Schema reference: see README.md. To add a new trip, copy this
//  file, change everything, and register it in trips/manifest.js.
// ─────────────────────────────────────────────────────────────
window.TRIP_DATA = {

// ── META ───────────────────────────────────────────────────
// id        — unique slug; namespaces saved checklist state
// start/end — overall trip window (ISO dates). Drives the
//             calendar's month range and in-range day shading.
// quickLinksLabel — prefix shown before the quickLinks row
// legacyTaskKey   — (optional) old localStorage key to migrate
meta: {
  id: 'upstate-ny-2026',
  title: 'Upstate NY Family Foliage 2026',
  footer: 'Upstate NY Family Foliage 2026 · Sep 25 – Oct 15 · Built with ❤️ for the Ofek family',
  start: '2026-09-25',
  end: '2026-10-15',
  quickLinksLabel: '🍂 Foliage check:',
  legacyTaskKey: 'trip-dashboard-tasks-v2',
},

// ── MAP ROUTE (lat/lng pairs) ──────────────────────────────
// The map auto-fits to the route + stops, so no center/zoom needed.
route: [
  [40.6885,-74.1769], // EWR / NJ start
  [41.22,-74.01],     // I-87 N
  [41.7106,-73.9544], // Walkway Over the Hudson transit stop
  [42.65,-73.75],     // Albany
  [43.3310,-73.6564], // Hannaford Queensbury
  [43.83,-73.77],     // Schroon Lake
  [44.18,-73.78],     // Keene / NY-73
  [44.2795,-73.9799], // ★ LAKE PLACID
  [44.3295,-74.1313], // Saranac Lake / NY-3 W
  [44.2239,-74.4644], // Tupper Lake / NY-3 W
  [44.16,-75.04],     // Star Lake / NY-3 W
  [43.9730,-75.9537], // Hannaford Watertown
  [43.0553,-75.9672], // Green Lakes State Park (Sep 30 stop)
  [43.05,-76.15],     // Syracuse / I-81 S
  [42.60,-76.18],     // Cortland
  [42.3806,-76.8733], // ★ WATKINS GLEN
  [42.1460,-77.0547], // Corning day trip
  [42.4683,-76.9057], // Fir Tree Point base (Seneca Lake, Rock Stream)
  [42.5460,-76.5993], // Taughannock Falls
  [42.4476,-76.4869], // Ithaca lunch
  [42.87,-76.98],     // Geneva
  [43.02,-77.75],     // Rochester / I-90 W
  [43.00,-78.19],     // Batavia
  [42.98,-78.74],     // Buffalo
  [43.0862,-79.0633], // ★ NIAGARA FALLS
  [43.00,-78.19],     // I-90 E
  [43.02,-77.75],     // Rochester
  [43.1553,-76.1190], // Wegmans Cicero
  [42.60,-76.18],     // I-81 S
  [42.10,-75.91],     // Binghamton
  [41.4001,-75.6447], // Nay Aug Park / Scranton
  [40.98,-75.19],     // Stroudsburg / I-80 E
  [40.86,-74.42],     // Parsippany
  [40.7355,-74.0660]  // ★ 272 Hoboken Ave, Jersey City (Oct 5 Airbnb)
],

// ── ALTERNATE ROUTES (dashed on the map) ───────────────────
// The Sep 27 afternoon is deliberately undecided: both spurs out of
// Schroon Lake are drawn so the choice is visible on the map.
routesAlt: [
  { label: 'Sep 27 PM option A: Fort Ticonderoga + corn maze', color: '#F59E0B',
    points: [ [43.8390,-73.7610], [43.8510,-73.5300], [43.8419,-73.3878], [43.9700,-73.4500], [44.1100,-73.5900], [44.2795,-73.9799] ] },
  { label: 'Sep 27 PM option B: Natural Stone Bridge & Caves', color: '#0EA5E9',
    points: [ [43.8390,-73.7610], [43.7454,-73.8090], [43.7397,-73.8375], [43.8390,-73.7610], [44.0500,-73.8100], [44.2795,-73.9799] ] },
],

// ── MAP MARKERS — MAIN STOPS ───────────────────────────────
// Always visible at any zoom: the trip's anchor locations.
// color falls back to the region's color when omitted.
stops: [
  { lat:40.6885, lng:-74.1769, label:'EWR', color:'#D97706', regionId:'nj',          title:'Newark Liberty (EWR) — land Sep 25, fly home Oct 15', dates:'Sep 25 · Oct 15' },
  { lat:40.7355, lng:-74.0660, label:'JC', color:'#D97706', regionId:'nj',           title:'272 Hoboken Ave Apt 8, Jersey City (Airbnb)', dates:'Oct 5–9' },
  { lat:40.7368, lng:-74.0355, label:'HB', color:'#D97706', regionId:'nj',           title:'452 1st St Apt 3, Hoboken (Airbnb)',          dates:'Oct 12–15' },
  { lat:40.7813, lng:-73.9740, label:'AM', color:'#D97706', regionId:'nj',           title:'American Museum of Natural History — Oct 6 anchor', dates:'Oct 6' },
  { lat:40.5741, lng:-73.9752, label:'AQ', color:'#D97706', regionId:'nj',           title:'New York Aquarium, Coney Island — Oct 8 anchor',    dates:'Oct 8' },
  { lat:40.7040, lng:-73.9880, label:'DU', color:'#D97706', regionId:'nj',           title:'DUMBO — Space Club + Brooklyn Bridge Park, Oct 14', dates:'Oct 14' },
  { lat:44.2795, lng:-73.9799, label:'LP', color:'#059669', regionId:'adirondacks',  title:'Lake Placid / Mirror Lake',  dates:'Sep 25 – 30' },
  { lat:42.4683, lng:-76.9057, label:'FT', color:'#7C3AED', regionId:'finger-lakes', title:'Fir Tree Point, Rock Stream (Airbnb, Seneca Lake)', dates:'Sep 30 – Oct 3' },
  { lat:42.1460, lng:-77.0547, label:'CG', color:'#7C3AED', regionId:'finger-lakes', title:'Corning Museum of Glass',    dates:'Oct 1' },
  { lat:42.5460, lng:-76.5993, label:'TF', color:'#7C3AED', regionId:'finger-lakes', title:'Taughannock Falls / Ithaca', dates:'Oct 3' },
  { lat:43.0862, lng:-79.0633, label:'NF', color:'#0EA5E9', regionId:'niagara',      title:'Niagara Falls',              dates:'Oct 3–5' },
],

// ── MAP POIs — EVERYTHING ELSE ─────────────────────────────
// tier 2 appears from zoom 9 (day-trip activities, hikes, optional
// stops); tier 3 from zoom 11 (restaurants, in-town spots).
// cat drives the marker colour: activity | hike | scenic | food
// gq (optional) overrides the Google-Maps search query.
pois: [
  // — Sep 25 arrival-day transit stops —
  { lat:41.7106, lng:-73.9544, tier:2, cat:'scenic',   icon:'🌉', name:'Walkway Over the Hudson — west entrance', area:'87 Haviland Rd, Highland, NY', sub:'Sep 25 transit stop only. Walk west gate → midpoint → west gate: ~1.28 mi total, flat, paved and stroller-friendly. Paid parking; weather permitting.', url:'https://walkway.org/visit/' },
  { lat:43.3310, lng:-73.6564, tier:2, cat:'food',     icon:'🛒', name:'Hannaford Queensbury',                    area:'190 Quaker Rd, Queensbury, NY', sub:'Sep 25 primary grocery load after the Walkway. Open 7am–11pm daily; directly useful before the final Lake Placid leg.', url:'https://stores.hannaford.com/ny/queensbury/8360' },
  { lat:43.3267, lng:-73.6768, tier:2, cat:'activity', icon:'🛍', name:'Aviation Mall — Target &amp; DICK\'S Sporting Goods', area:'578 Aviation Rd, Queensbury, NY', sub:'Sep 25 shopping stop, off I-87 Exit 19 near Lake George. Target: affordable warm basics for the girls — sweatshirts, leggings, long sleeves, socks, seasonal jackets — plus basic backpacks and groceries. DICK\'S Sporting Goods, same mall: better pick for a hiking daypack, outdoor layers and branded jackets. Budget 60–90 min for both, combined with the Hannaford grocery stop.', gq:'Aviation Mall, 578 Aviation Road, Queensbury, NY' },

  // — Transfer-day stops (Sep 30 and Oct 5) —
  { lat:43.0553, lng:-75.9672, tier:2, cat:'scenic',   icon:'💚', name:'Green Lakes State Park', area:'7900 Green Lakes Rd, Fayetteville, NY', sub:'Sep 30 mid-transfer stop, just east of Syracuse. Two blue-green meromictic lakes ringed by old-growth forest; the Green Lake shore loop is flat and stroller-friendly. Open year-round dawn–dusk, no booking. The $10 vehicle fee is charged daily only through Labor Day.', url:'https://parks.ny.gov/visit/state-parks/green-lakes-state-park' },
  { lat:43.9730, lng:-75.9537, tier:2, cat:'food',     icon:'🛒', name:'Hannaford Watertown', area:'21110 US Route 3, Watertown, NY', sub:'Sep 30 lunch + grocery restock about halfway from Lake Placid to Watkins Glen. Mon–Sat 7am–10pm; Sun 7am–9pm.', url:'https://stores.hannaford.com/ny/watertown/8175' },
  { lat:43.1553, lng:-76.1190, tier:2, cat:'food',     icon:'🛒', name:'Wegmans Cicero',      area:'7952 Brewerton Rd, Cicero, NY',   sub:'Oct 5 first southbound break: prepared-food lunch, groceries and baby supplies. Open 6am–midnight daily.', url:'https://www.wegmans.com/stores/cicero-ny' },
  { lat:41.4001, lng:-75.6447, tier:2, cat:'activity', icon:'🌳', name:'Nay Aug Park',        area:'500 Arthur Ave, Scranton, PA',    sub:'Oct 5 second southbound break: 30–40 min outdoor reset. Open dawn–8pm; skip in heavy rain or if running late.', url:'https://nayaugpark.org/' },

  // — Adirondack drive stops —
  { lat:43.0790, lng:-73.7850, tier:2, cat:'activity', icon:'🎠', name:'Saratoga Springs stop',        area:'Saratoga Springs, NY', sub:'Congress Park, lunch on Broadway, Target for supplies. Optional detour, not part of the Sep 25 plan.', gq:'Congress Park, Saratoga Springs, NY' },
  { lat:43.0760, lng:-73.7900, tier:3, cat:'activity', icon:'🏛', name:'Children\'s Museum at Saratoga', area:'Saratoga Springs, NY', sub:'65 S Broadway · $14/person, ages 0–10. Rainy-day backup near the I-87 corridor.' },
  { lat:43.4250, lng:-73.7110, tier:2, cat:'scenic',   icon:'🌊', name:'Lake George village',           area:'Lake George, NY',      sub:'Shepard Park waterfront + Minne Ha-Ha cruise. Optional stop or weekend trip from NJ.' },
  { lat:44.2190, lng:-73.8800, tier:2, cat:'scenic',   icon:'🏞', name:'Cascade Lakes pull-off',        area:'NY-73, Keene, NY',     sub:'Best zero-effort foliage stop on the whole drive. Free lot, 10–20 min.', gq:'Cascade Lakes, NY-73, Keene NY' },
  { lat:44.1910, lng:-73.7900, tier:2, cat:'food',     icon:'🥧', name:'Noon Mark Diner',               area:'Keene Valley, NY',     sub:'Classic Adirondack diner on NY-73. Homemade pies, high chairs. Perfect drive break.' },
  { lat:43.8419, lng:-73.3878, tier:2, cat:'activity', icon:'🏰', name:'Fort Ticonderoga + Heroic Corn Maze', area:'102 Fort Ti Rd, Ticonderoga, NY', sub:'Sep 27 afternoon option A, ~40–45 min east of Schroon Lake. Open Tue–Sun through Oct 25, 9:30am–5pm (last admission 4:30pm); the 6-acre Heroic Corn Maze is included with admission, 10am–4:30pm, last daytime entry 4pm. Buying online in advance is encouraged but not required. Flat grounds — the easier of the two post-race options.', url:'https://fortticonderoga.org/visit/buy-tickets/' },
  { lat:43.7397, lng:-73.8375, tier:2, cat:'activity', icon:'🕳', name:'Natural Stone Bridge & Caves', area:'535 Stone Bridge Rd, Pottersville, NY', sub:'Sep 27 afternoon option B, roughly 20–30 min south of Schroon Lake. Off-peak hours Sep 8–Oct 18: 10am–5pm, last tour ticket sold 3:30pm. Waterfalls, surface caves, dinosaur dig and optional gem mining — but the ~1.2 km self-guided trail has 500+ uneven steps, which is a real consideration after the half marathon and with a carrier. Walk-up tickets.', url:'https://stonebridgeandcaves.com/plan-your-trip/' },
  { lat:43.8390, lng:-73.7610, tier:2, cat:'activity', icon:'🏁', name:'Schroon Lake — race finish / packet pickup area', area:'Schroon Lake, NY', sub:'Adirondack Half Marathon finish line · Sun Sep 27. Packet pickup 6:45–7:45am at the pavilion above the finish line. The race itself starts point-to-point in the town of Adirondack, 9am.', url:'https://www.adirondackmarathon.org/half-marathon' },

  { lat:44.295367, lng:-74.001217, tier:2, cat:'activity', icon:'🏨', name:'Lake Placid Inn: Residences', area:'2050 Saranac Ave, Lake Placid, NY 12946', sub:'Booked: check-in Fri Sep 25 from 4:00pm, checkout Wed Sep 30 by 10:00am. Superior apartment, 5 nights, 2 adults + 2 children. Booking.com confirmation 5967.307.623. Free private parking on site. Phone +1 518 523 6162. Coordinates are the ones printed on the confirmation (N 44° 17.722, W 74° 0.073).', gq:'Lake Placid Inn Residences, 2050 Saranac Ave, Lake Placid, NY 12946' },

  // — Adirondacks: activities & hikes —
  { lat:44.3516, lng:-73.8587, tier:2, cat:'activity', icon:'💧', name:'High Falls Gorge',              area:'Wilmington, NY',       sub:'Paid gorge walk along the AuSable River. Easy Path is stroller-suitable.', url:'https://highfallsgorge.com/tickets/' },
  { lat:44.3659, lng:-73.9026, tier:2, cat:'scenic',   icon:'🏔', name:'Whiteface Veterans\' Mem. Hwy', area:'Wilmington, NY',       sub:'Drive-up summit, best foliage view in the Adirondacks. Summit 10°F+ colder.', url:'https://lakeplacidlegacysites.com/todo/whiteface-veterans-memorial-highway/' },
  { lat:44.2279, lng:-74.4644, tier:2, cat:'activity', icon:'🦦', name:'The Wild Center',               area:'Tupper Lake, NY',      sub:'Wild Walk canopy trail, animal encounters. Best family nature day near Lake Placid.', url:'https://www.wildcenter.org/visit/' },
  { lat:44.3260, lng:-74.1350, tier:2, cat:'activity', icon:'🎠', name:'Adirondack Carousel',           area:'Saranac Lake, NY',     sub:'Hand-carved wildlife carousel. Easy stop on the drive back from Tupper Lake.' },
  { lat:44.2930, lng:-73.9650, tier:2, cat:'hike',     icon:'🥾', name:'Mt. Baker Trail',               area:'Saranac Lake, NY',     sub:'2.2 mi, ~250 ft, easy family loop near the village.', url:'https://www.alltrails.com/trail/us/new-york/baker-mountain' },
  { lat:44.2180, lng:-73.9210, tier:2, cat:'hike',     icon:'🥾', name:'Mt. Van Hoevenberg',            area:'Lake Placid, NY',      sub:'5.2 mi, ~1,200 ft, moderate panorama hike. Indoor climbing wall as rain plan.', url:'https://www.alltrails.com/trail/us/new-york/mt-van-hoevenberg' },
  { lat:44.2750, lng:-74.0000, tier:2, cat:'hike',     icon:'🥾', name:'Brewster Peninsula Loop',       area:'Lake Placid, NY',      sub:'Flexible out-and-back forest/lakeshore walk, roughly 45–60 minutes as a time budget rather than a fixed-distance route. Lakeshore sections are rocky and uneven.', url:'https://www.lakeplacid.com/hiking/peninsula-nature-trails' },
  { lat:44.242151, lng:-73.996493, tier:2, cat:'hike', icon:'🥾', name:'Heaven Hill Trails',            area:'Lake Placid, NY',      sub:'Sep 26 default morning walk. Old Orchard Loop (~2.3 km, gentle) and Big Field Loop (~1.45 km, flatter, shorter) — official trailhead.', url:'https://www.lakeplacid.com/hiking/heaven-hill-trails' },
  { lat:44.2800, lng:-73.9830, tier:3, cat:'activity', icon:'🏆', name:'Olympic Museum & Center',       area:'Lake Placid, NY',      sub:'2634 Main St · 1980 "Miracle on Ice" rink, daily 9:30–5.', url:'https://lakeplacidolympicmuseum.org/visit/' },
  { lat:44.2862, lng:-73.9806, tier:3, cat:'activity', icon:'🛶', name:'Mirror Lake paddling',          area:'Lake Placid, NY',      sub:'Kayak & canoe rentals, calm flat water for all ages.', url:'https://www.mlboatrental.com/', gq:'Mirror Lake Boat Rental, Lake Placid NY' },
  { lat:44.2848, lng:-74.0006, tier:3, cat:'activity', icon:'🎳', name:'Big Z\'s Bowling',              area:'Lake Placid, NY',      sub:'Lanes, arcade, simulators. Solid rainy-day option.' },
  { lat:44.2779, lng:-73.9817, tier:3, cat:'activity', icon:'🎬', name:'Palace Theatre',                area:'Lake Placid, NY',      sub:'Historic downtown cinema. Cozy afternoon escape.' },

  // — Adirondacks: food —
  { lat:44.2786, lng:-73.9822, tier:3, cat:'food', icon:'🥪', name:'Big Mountain Deli & Creperie', area:'Lake Placid, NY', sub:'Crêpes, sandwiches, smoothies. Kid-friendly, quick.', url:'https://order.toasttab.com/online/big-mountain-deli-creperie-2475-main-street' },
  { lat:44.2823, lng:-73.9850, tier:3, cat:'food', icon:'☕', name:'Origin Coffee Co.',            area:'Lake Placid, NY', sub:'Best specialty coffee & smoothies in the village.', url:'https://www.origincoffeeadk.com/menus' },
  { lat:44.2839, lng:-73.9966, tier:3, cat:'food', icon:'🍝', name:'Caffe Rustica',                area:'Lake Placid, NY', sub:'House-made pasta & seafood. Best Italian in the Adirondacks.', url:'https://www.rusticalp.com/menu' },
  { lat:44.2842, lng:-73.9821, tier:3, cat:'food', icon:'🌊', name:'The Cottage at Mirror Lake',   area:'Lake Placid, NY', sub:'Lakeside patio, relaxed American dinner.' },
  { lat:44.2810, lng:-73.9840, tier:3, cat:'food', icon:'🍔', name:'Noon Mark Burgers & Pie',      area:'Lake Placid, NY', sub:'Diner energy, great burgers & homemade pies.' },

  { lat:42.4683, lng:-76.9057, tier:2, cat:'activity', icon:'🏠', name:'Airbnb — Fir Tree Point', area:'21 Fir Tree Point Road, Rock Stream, NY 14878', sub:'Booked and paid: check-in Wed Sep 30 from 3:00pm, checkout Sat Oct 3 at 10:00am. On Seneca Lake, ~20 min north of Watkins Glen. Confirmation HMWAHEAX5X, hosted by David, $991.27 total.', gq:'21 Fir Tree Point Road, Rock Stream, NY 14878' },
  // — Finger Lakes: activities —
  { lat:42.5386, lng:-76.6073, tier:2, cat:'hike',     icon:'💦', name:'Taughannock Falls',          area:'Trumansburg, NY', sub:'215 ft — taller than Niagara. Flat gorge trail, ~1.5 mi rt.', url:'https://www.alltrails.com/trail/us/new-york/taughannock-falls-via-gorge-trail' },
  { lat:42.6126, lng:-76.8550, tier:2, cat:'activity', icon:'🍷', name:'Seneca Lake Wine Trail',     area:'Lodi, NY',        sub:'35+ wineries. Highlights: Wagner Vineyards, Hazlitt\'s 1852.', gq:'Wagner Vineyards, Lodi NY' },
  { lat:42.5950, lng:-77.0590, tier:2, cat:'activity', icon:'🌾', name:'Windmill Farm Market',       area:'Penn Yan, NY',    sub:'Saturdays only. Big open-air market: food, crafts, produce.' },
  { lat:42.4670, lng:-76.5320, tier:2, cat:'activity', icon:'🦕', name:'Museum of the Earth',        area:'Ithaca, NY',      sub:'Fossils, dinosaurs, hands-on paleontology. Very kid-friendly.', url:'https://www.museumoftheearth.org/visit/plan-your-visit' },
  { lat:42.4520, lng:-76.5000, tier:2, cat:'activity', icon:'🔬', name:'Sciencenter',                area:'Ithaca, NY',      sub:'250+ interactive exhibits, Curiosity Corner for under-4s. Best indoor backup.', url:'https://sciencenter.org/visit/hours-pricing/' },
  { lat:42.4500, lng:-76.4690, tier:2, cat:'scenic',   icon:'🌿', name:'Cornell Botanic Gardens',    area:'Ithaca, NY',      sub:'Free, beautiful fall colour. Dry-weather option.', url:'https://cornellbotanicgardens.org/visit' },
  { lat:42.4550, lng:-76.5090, tier:3, cat:'activity', icon:'🎭', name:'Hangar Theatre',             area:'Ithaca, NY',      sub:'Regional theater in a converted 1940s hangar.' },
  { lat:42.4396, lng:-76.4970, tier:3, cat:'activity', icon:'🛍', name:'Ithaca Commons',             area:'Ithaca, NY',      sub:'Collegetown energy, great food diversity. Oct 3 early-lunch stop.' },
  { lat:42.4085, lng:-76.9297, tier:2, cat:'activity', icon:'🐄', name:'Farm Sanctuary',             area:'3150 Aikens Rd, Watkins Glen, NY', sub:'Oct 2 afternoon. Hour-long guided tours of the original farm-animal rescue, ~20 min west of town. Open Fri–Sun in October. Every visit requires advance registration — book the slot before the trip. Arrive 15 min early.', url:'https://www.farmsanctuary.org/the-sanctuaries/watkins-glen-ny/', gq:'Farm Sanctuary, Watkins Glen NY' },
  { lat:42.4003, lng:-76.5594, tier:2, cat:'hike',     icon:'🏞', name:'Robert H. Treman State Park', area:'Ithaca, NY',     sub:'Enfield Glen gorge walk to 115-ft Lucifer Falls. Optional quieter alternative to Watkins Glen.', url:'https://parks.ny.gov/visit/state-parks/robert-h-treman-state-park' },

  // — Finger Lakes: food —
  { lat:42.3838, lng:-76.8714, tier:3, cat:'food', icon:'🍷', name:'Graft Wine + Cider Bar',  area:'Watkins Glen, NY', sub:'Farm-to-table, all local. Best sit-down dinner in town.', url:'https://www.graftwineciderbar.com/' },
  { lat:42.3876, lng:-76.8700, tier:3, cat:'food', icon:'🚂', name:'Seneca Harbor Station',   area:'Watkins Glen, NY', sub:'1876 train station, lake views, seafood & steaks.', url:'https://senecaharborstation.com/restaurant/' },
  { lat:42.3820, lng:-76.8720, tier:3, cat:'food', icon:'🌿', name:'Ravinous Kitchen',        area:'Watkins Glen, NY', sub:'Field-to-table, weekly changing seasonal menu.' },
  { lat:42.4410, lng:-76.4980, tier:3, cat:'food', icon:'🌱', name:'Moosewood Restaurant',    area:'Ithaca, NY',       sub:'Legendary vegetarian institution since 1973.', url:'https://www.moosewoodrestaurant.com/menu' },
  { lat:42.4500, lng:-76.5120, tier:3, cat:'food', icon:'🐟', name:'BoatYard Grill',          area:'Ithaca, NY',       sub:'Best seafood in Ithaca, Cayuga Lake dock views.', url:'https://boatyardgrill.com/hours.php' },
  { lat:42.4400, lng:-76.4960, tier:3, cat:'food', icon:'🍕', name:'Revelry Yards',           area:'Ithaca, NY',       sub:'Wood-fired pizza + craft micro-brewery upstairs.', url:'https://www.revelryyards.com/menus.html' },

  // — Niagara Falls (Oct 3–5, fixed) —
  { lat:43.0862, lng:-79.0633, tier:2, cat:'activity', icon:'🏨', name:'Hyatt Place Niagara Falls',        area:'310 Rainbow Blvd South, Niagara Falls, NY 14303', sub:'Booked: check-in Sat Oct 3 from 3:00pm, check-out Mon Oct 5 by 11:00am. 2 nights, Queen Room with Sofa Bed, 2 adults + 2 children. Booking.com confirmation 6319943337, total US$719.34, no prepayment. Free cancellation until Oct 2 11:59pm EDT. Breakfast is US$11 per person per night and parking is charged at a seasonal daily rate — neither is included. Phone +1 716-285-5000.', url:'https://www.hyatt.com/hyatt-place/en-US/iagzn-hyatt-place-niagara-falls' },
  { lat:43.0856, lng:-79.0664, tier:2, cat:'activity', icon:'⛴', name:'Maid of the Mist',                 area:'Niagara Falls, NY', sub:'Must-do Oct 4 at opening. 2026 October hours: daily 9am–5pm. No timed reservations; boarding is first-come, first-served. Online voucher must be exchanged at the booth. Stroller parking recommended.', url:'https://www.maidofthemist.com/schedule-pricing/' },
  { lat:43.0793, lng:-79.0743, tier:2, cat:'activity', icon:'💨', name:'Cave of the Winds',                area:'Niagara Falls, NY', sub:'Strongly recommended Oct 4 after Maid. Timed, same-day ticket; buy first thing at the Welcome Center or Cave. Oct 4 hours 9am–6:15pm. Bring wet-safe shoes; sandals are no longer issued.', url:'https://www.niagarafallsstatepark.com/attractions/cave-of-the-winds/' },
  { lat:43.0786, lng:-79.0760, tier:2, cat:'scenic',   icon:'🏝', name:'Goat Island',                      area:'Niagara Falls, NY', sub:'Oct 5 quiet morning: Terrapin Point + Three Sisters Islands, 45–60 min. Free; most upper-park paths are stroller-friendly.', gq:'Goat Island, Niagara Falls State Park NY' },
  { lat:43.0900, lng:-79.0677, tier:2, cat:'scenic',   icon:'🌉', name:'Rainbow Bridge pedestrian crossing', area:'Niagara Falls, NY / ON', sub:'Oct 4 Canadian-side visit on foot. Bring valid passports for every traveler. Return-to-US pedestrian toll: $1 USD in quarters, $1.25 CAD cash, or $1.25 CAD contactless per person.', url:'https://www.niagarafallsbridges.com/crossing-info/pedestrian-crossing-information' },
  { lat:43.0816, lng:-79.0784, tier:2, cat:'scenic',   icon:'🇨🇦', name:'Queen Victoria Park + Table Rock', area:'Niagara Falls, ON 🇨🇦', sub:'Oct 4 late afternoon through illumination: the broad Canadian panorama of American + Horseshoe Falls. Use the stroller; allow time for customs in both directions.', gq:'Table Rock Centre, Niagara Falls Ontario' },
  { lat:43.0870, lng:-79.0680, tier:3, cat:'scenic',   icon:'🌈', name:'Illumination + fireworks',         area:'Niagara Falls, NY / ON', sub:'Oct 4: illumination starts 6:15pm. Fireworks are scheduled at 10pm, weather permitting; treat them as optional for the children.', url:'https://www.niagaraparks.com/events/event/niagara-falls-fireworks-series' },
  { lat:43.0791, lng:-79.0789, tier:3, cat:'activity', icon:'🚇', name:'Journey Behind the Falls',         area:'Niagara Falls, ON 🇨🇦', sub:'Optional only if Cave of the Winds is unavailable or the family has unusual energy. Do not stack a third wet attraction into the core day.', url:'https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls/' },

  // — NJ base —
  { lat:40.7355, lng:-74.0660, tier:2, cat:'activity', icon:'🏠', name:'Airbnb — 272 Hoboken Avenue Apt 8', area:'Jersey City, NJ 07306', sub:'Booked and paid: check-in Mon Oct 5 from 4:00pm, checkout Fri Oct 9 at 11:00am. “Luxury 2BR Escape | PATH to NYC & MetLife Stadium”, confirmation HMMTENAE2T, 4 guests. Marker position is approximate — use the Google Maps link for the exact address.', gq:'272 Hoboken Avenue, Jersey City, NJ 07306' },
  { lat:40.7368, lng:-74.0355, tier:2, cat:'activity', icon:'🏠', name:'Airbnb — 452 1st Street Apt 3', area:'Hoboken, NJ 07030', sub:'Booked and paid: check-in Mon Oct 12 from 4:00pm, checkout Thu Oct 15 at 11:00am. “Jazz Suite — King Bed Studio, 15 Min to NYC”, confirmation HMT9MD8KEN, 4 guests. Marker position is approximate — use the Google Maps link for the exact address.', gq:'452 1st Street, Hoboken, NJ 07030' },
  { lat:40.7268, lng:-74.0364, tier:2, cat:'activity', icon:'🔑', name:'Avis drop-off — Jersey Cty/Newport Centre Mall (JC3)', area:'30 Mall Dr W, Jersey City, NJ 07310', sub:'Rental car must be returned here by 7:00pm on Mon Oct 5 — NOT at EWR. Counter is on the main level of the centre by the elevator. Mon–Fri 7:30am–7:00pm, so 7:00pm is the closing time, not a soft deadline. Reservation #25622224IL5.', gq:'Avis Car Rental, 30 Mall Drive West, Jersey City, NJ 07310' },
  { lat:40.7430, lng:-74.1720, tier:2, cat:'activity', icon:'🏛', name:'The Newark Museum of Art', area:'Newark, NJ',       sub:'Thu–Sun 12–5pm, $10/adult. Fully accessible.' },
  { lat:40.7660, lng:-74.1730, tier:2, cat:'scenic',   icon:'🌳', name:'Branch Brook Park',        area:'Newark, NJ',       sub:'Free, dawn–10pm. Easy leg-stretch for all ages.' },
  { lat:40.7040, lng:-74.0550, tier:2, cat:'activity', icon:'🗽', name:'Statue of Liberty ferry',  area:'Jersey City, NJ',  sub:'Liberty State Park terminal. Best as a half-day.', gq:'Liberty State Park ferry terminal, Jersey City NJ' },

  // — NYC days from the NJ base (Oct 6–8 and Oct 12–14) —
  { lat:40.7813, lng:-73.9740, tier:2, cat:'activity', icon:'🦕', name:'American Museum of Natural History', area:'200 Central Park West at 79th St, New York, NY 10024', sub:'Oct 6 anchor. Open daily 10am–5:30pm; $37 adult for out-of-state visitors, ticketed exhibitions priced and timed separately. Reserve a timed-entry slot online. The 81st St B/C station exits inside the museum.', url:'https://www.amnh.org/plan-your-visit' },
  { lat:40.7818, lng:-73.9714, tier:3, cat:'activity', icon:'🌳', name:'Diana Ross Playground + Great Lawn', area:'Central Park at W 81st St, New York, NY', sub:'Oct 6 afternoon, directly across Central Park West from the museum exit. Free. The Ramble → Bethesda Terrace walk south from Turtle Pond is the adult alternative.', gq:'Diana Ross Playground, Central Park West at 81st Street, New York NY' },
  { lat:40.7864, lng:-73.9766, tier:2, cat:'activity', icon:'🎨', name:'Children\'s Museum of Manhattan', area:'212 W 83rd St, New York, NY 10024', sub:'Oct 7 morning. Tue–Sun 10am–5pm, closed Mondays, so Wed Oct 7 is a normal open day. Five floors of hands-on exhibits for under-6s, drop-in programs included, all-day re-entry. Tickets online (~$1 cheaper) or at the door.', url:'https://cmom.org/visit/' },
  { lat:40.7924, lng:-73.9766, tier:3, cat:'activity', icon:'🦛', name:'Hippo Playground', area:'W 91st St &amp; Riverside Dr, New York, NY 10024', sub:'Oct 7 afternoon, ~10 min walk from the museum. Free Riverside Park playground with hippo sculptures and climbing structures. The promenade south toward the 79th St Boat Basin is the adult walk.', gq:'Hippo Playground, West 91st Street and Riverside Drive, New York NY' },
  { lat:40.5741, lng:-73.9752, tier:2, cat:'activity', icon:'🐠', name:'New York Aquarium', area:'602 Surf Ave, Brooklyn, NY 11224', sub:'Oct 8 anchor. Sep 8–Oct 31 hours 10am–5pm, last entry 4pm. $29.95 adult / $25.95 child (3–12) off-peak, under 2 free; buy online to skip the gate line. Ocean Wonders: Sharks!, sea-lion demos and touch pools. Directly on the Coney Island boardwalk; ~90 min each way from Jersey City.', url:'https://nyaquarium.com/plan-your-visit/hours-and-rates' },
  { lat:40.7080, lng:-74.0554, tier:2, cat:'activity', icon:'🔬', name:'Liberty Science Center', area:'222 Jersey City Blvd, Jersey City, NJ 07305', sub:'Oct 8 easier backup. Mon–Thu 10am–4pm, Fri–Sun 10am–5pm. Fifteen minutes from the Jersey City apartment by light rail instead of 90 minutes to Coney Island. Admission online; planetarium shows extra. +1 201-200-1000.', url:'https://lsc.org/buy-tickets/admission' },
  { lat:40.7590, lng:-73.9776, tier:2, cat:'activity', icon:'🧸', name:'American Girl Place New York', area:'75 Rockefeller Plaza, New York, NY 10019', sub:'Oct 12 morning, the activity for the two older girls. Mon–Fri 10am–6pm, Sat 10am–7pm, Sun 10am–6pm. Entry to the store is free; doll salon, ear piercing and create-your-own are paid. The in-store café takes reservations — book if you want lunch there.', url:'https://www.americangirl.com/pages/nyc-store' },
  { lat:40.7247, lng:-73.9976, tier:2, cat:'activity', icon:'🍦', name:'Museum of Ice Cream', area:'558 Broadway, New York, NY 10012', sub:'Oct 13 morning. Thirteen installations over three floors plus the sprinkle pool. <strong>Timed entry, online booking required</strong>; from about $39 per ticket for ages 3+, under 2 free. The official site lists Tuesday hours but several guides list Tuesday as the closed day — verify the calendar offers Tue Oct 13.', url:'https://www.museumoficecream.com/new-york-city/' },
  { lat:40.7206, lng:-74.0136, tier:3, cat:'activity', icon:'🐟', name:'Pier 26 — science playground &amp; Tide Deck', area:'N Moore St &amp; West St, Hudson River Park, New York, NY', sub:'Oct 13 afternoon, ~20 min walk west of SoHo. Free. Climbable sturgeon sculptures and nets; the Tide Deck salt marsh at the pier\'s western end is open to the public on staff-led tours only.', url:'https://hudsonriverpark.org/activities/tide-deck/' },
  { lat:40.7040, lng:-73.9880, tier:2, cat:'activity', icon:'🚀', name:'Space Club DUMBO', area:'254 Plymouth St, Brooklyn, NY 11201', sub:'Oct 14 morning. Open daily, listed 8am–7pm. Three levels of slides, trampolines, ball and bead pits, Magna-Tile and Lego stations, with a café. A pass covering one adult + one child is about $39 for two hours — book the slot rather than turning up. +1 212-812-2996.', url:'https://spaceclub.com/' },
  { lat:40.7035, lng:-73.9953, tier:3, cat:'scenic',   icon:'🎠', name:'Brooklyn Bridge Park + Jane\'s Carousel', area:'Water St, Brooklyn, NY 11201', sub:'Oct 14 midday, five minutes from Space Club. Carousel rides $2, closed Tuesdays and open Wednesdays; Main Street playground, Pebble Beach and the Washington St bridge view. Lunch at Time Out Market or Empire Stores.', gq:'Jane\'s Carousel, Brooklyn Bridge Park, Brooklyn NY' },
  { lat:40.6963, lng:-73.9967, tier:3, cat:'scenic',   icon:'🚶', name:'Brooklyn Heights Promenade', area:'Columbia Heights, Brooklyn, NY 11201', sub:'Oct 14 adults-only option: a third of a mile of bench-lined balcony over the BQE facing Lower Manhattan. Free, a ten-minute climb up from Brooklyn Bridge Park.', gq:'Brooklyn Heights Promenade, Brooklyn NY' },
  { lat:40.7479, lng:-74.0048, tier:3, cat:'scenic',   icon:'🌿', name:'The High Line', area:'Gansevoort St to Hudson Yards, New York, NY', sub:'Oct 13 adults-only option: walk north along Hudson River Park from Pier 26 to Gansevoort St and continue on the elevated park. Free, open daily, no booking.', url:'https://www.thehighline.org/visit/' },
  { lat:40.7376, lng:-74.0285, tier:3, cat:'scenic',   icon:'🌇', name:'Pier A Park + Hoboken waterfront walkway', area:'Hoboken, NJ 07030', sub:'Oct 12 afternoon family block and the best free evening walk of the NJ stay — a flat continuous path from Pier A north past Pier C with the full Manhattan skyline opposite. Ten minutes from the 1st Street apartment.', gq:'Pier A Park, Hoboken NJ' },
],

// ── REGIONS ────────────────────────────────────────────────
// Each region has: id, emoji, title, navLabel (short name for the
// top nav + map legend), color (hex — used for the nav underline,
// region header, calendar dots and stop markers), dates,
// weather (or omit), infoCard (or null), and an ordered list of day ids.
regions: [
  {
    id: 'nj',
    emoji: '🏠',
    title: 'NJ Family Base',
    navLabel: 'NJ',
    color: '#D97706',
    dates: 'Oct 5 – 15',
    weather: { name: 'Newark, NJ', lat: 40.7357, lon: -74.1724 },
    infoCard: {
      prefix: 'nj',
      eat: [
        { icon:'🛫', name:'Zaro\'s Bakery',                     badge:'rb-casual', badgeLabel:'Casual', sub:'Newark Airport Terminal B · Grab-and-go pastries, coffee, vegetarian-friendly. Daily 5am–10pm. Best for arrival/departure days.' },
        { icon:'☕', name:'PJ\'s at The Newark Museum of Art',  badge:'rb-casual', badgeLabel:'Casual', sub:'49 Washington St · Light lunch, coffee, sandwiches. Thu–Fri 12–7pm, Sat–Sun 10–5pm. Pairs with a museum stop.' },
      ],
      nohike: [
        { icon:'🏛', name:'The Newark Museum of Art',           sub:'49 Washington St · Thu–Sun 12–5pm. $10 adult / $8 child. Fully ADA-accessible. Groups 10+ need advance reservation.' },
        { icon:'🌳', name:'Branch Brook Park',                  sub:'Park Ave &amp; Lake St · Open dawn–10pm, free. Light-rail accessible. Easy leg-stretch for all ages before the drive north.' },
        { icon:'🗽', name:'Statue of Liberty (Liberty State Park ferry)', sub:'~25–30 min drive to ferry terminal. Ferries year-round, last ~3:30pm. Best for a half-day — don\'t attempt on a compressed airport day.' },
        { icon:'🧭', name:'Oct 9–11 · family away on its own trip', badge:'rb-must', badgeLabel:'No NYC plans', sub:'The Jersey City Airbnb runs Oct 5–9 and the Hoboken Airbnb runs Oct 12–15. The three nights in between — <strong>Oct 9, 10 and 11</strong> — are the family\'s own out-of-town trip, so no NYC sightseeing and no NJ lodging are planned for them here. The dashboard resumes with the Hoboken check-in at 4:00pm on Mon Oct 12. Note the rental car goes back on Oct 5, so Oct 5–15 is a transit-only stretch.' },
        { icon:'🦕', name:'American Museum of Natural History', sub:'200 Central Park West at 79th St · daily 10am–5:30pm, $37 adult out-of-state, timed entry — the Oct 6 anchor. The 81st St subway station exits straight into the museum.', url:'https://www.amnh.org/plan-your-visit' },
        { icon:'🎨', name:'Children\'s Museum of Manhattan', sub:'212 W 83rd St · Tue–Sun 10am–5pm, closed Mondays. Five floors aimed squarely at under-6s; the Oct 7 morning. Pairs with Hippo Playground at W 91st &amp; Riverside Dr.', url:'https://cmom.org/visit/' },
        { icon:'🐠', name:'New York Aquarium', sub:'602 Surf Ave, Coney Island · Sep 8–Oct 31 hours 10am–5pm, last entry 4pm. $29.95 adult / $25.95 child off-peak. The Oct 8 day; ~90 min each way from Jersey City.', url:'https://nyaquarium.com/plan-your-visit/hours-and-rates' },
        { icon:'🔬', name:'Liberty Science Center', badge:'rb-must', badgeLabel:'Easy backup', sub:'222 Jersey City Blvd, Liberty State Park · Mon–Thu 10am–4pm, Fri–Sun 10am–5pm. Fifteen minutes from the Jersey City apartment by light rail — the rain / low-energy substitute for the Coney Island day.', url:'https://lsc.org/buy-tickets/admission' },
        { icon:'🍦', name:'Museum of Ice Cream', sub:'558 Broadway, SoHo · <strong>timed entry, online booking required</strong>, from ~$39 for ages 3+. The Oct 13 morning. Confirm the calendar offers Tue Oct 13 — some listings show Tuesday as a closed day.', url:'https://www.museumoficecream.com/new-york-city/' },
        { icon:'🚀', name:'Space Club DUMBO', sub:'254 Plymouth St, Brooklyn · daily, listed 8am–7pm. Three-level immersive indoor playground; a pass covering one adult + one child is about $39 for two hours. The Oct 14 morning, five minutes from Brooklyn Bridge Park.', url:'https://spaceclub.com/' },
        { icon:'🚶', name:'Grown-up walks, no tickets needed', sub:'One per NYC day, all free: the Ramble → Bethesda Terrace in Central Park (Oct 6), the Riverside Park promenade (Oct 7), the boardwalk to Brighton Beach (Oct 8), the Hoboken waterfront walkway (Oct 12), Hudson River Park north to the High Line (Oct 13), and the Brooklyn Heights Promenade (Oct 14).' },
      ]
    },
    days: ['d12', 'd12b', 'd12c', 'd13', 'd14', 'd14b', 'd14c', 'd15']
  },
  {
    id: 'adirondacks',
    emoji: '🏔',
    title: 'Adirondacks · Lake Placid',
    navLabel: 'Adirondacks',
    color: '#059669',
    dates: 'Sep 25–30',
    weather: { name: 'Lake Placid, NY', lat: 44.2795, lon: -73.9799 },
    infoCard: {
      prefix: 'adk',
      eat: [
        { icon:'🥪', name:'Big Mountain Deli &amp; Creperie',    badge:'rb-casual', badgeLabel:'Casual',  sub:'2475 Main St · Crêpes, sandwiches, smoothies, vegetarian options. Kid-friendly, quick turnover. Sun–Thu 8am–3pm, Fri–Sat 8am–5pm.', url:'https://order.toasttab.com/online/big-mountain-deli-creperie-2475-main-street' },
        { icon:'☕', name:'Origin Coffee Co.',                   badge:'rb-casual', badgeLabel:'Casual',  sub:'2669 Main St · Best specialty coffee, matcha &amp; smoothies in the village. Breakfast and lunch all day. Strongest non-alcoholic menu in Lake Placid.', url:'https://www.origincoffeeadk.com/menus' },
        { icon:'🍝', name:'Caffe Rustica',                       badge:'rb-fine',   badgeLabel:'Fine',    sub:'1936 Saranac Ave · House-made pasta &amp; fresh seafood. Best Italian in the Adirondacks.', url:'https://www.rusticalp.com/menu' },
        { icon:'🌊', name:'The Cottage at Mirror Lake',          badge:'rb-casual', badgeLabel:'Casual',  sub:'77 Mirror Lake Dr · American food with lakeside patio views. Perfect for a relaxed dinner.', url:'https://www.toasttab.com/local/order/mirror-lake-inn-resort-and-spa-the-cottage-77-mirror-lake-drive' },
        { icon:'🍔', name:'Noon Mark Burgers &amp; Pie',         badge:'rb-casual', badgeLabel:'Casual',  sub:'Main St · Classic diner energy. Great burgers, homemade pies. Very kid-friendly.' },
      ],
      nohike: [
        { icon:'🏆', name:'Olympic Museum',              sub:'2634 Main St · Open 9:30am–5pm daily. North America\'s 2nd-largest Winter Olympic collection. 1980 "Miracle on Ice" artifacts. ~$15/adult, great for families.', url:'https://lakeplacidolympicmuseum.org/visit/' },
        { icon:'🛶', name:'Mirror Lake Paddling',         sub:'Kayak &amp; canoe rentals from Mirror Lake Inn or local outfitters. Calm flat water, easy for all ages. Beautiful foliage views.', url:'https://www.mlboatrental.com/' },
        { icon:'🎳', name:'Big Z\'s Bowling &amp; Entertainment', sub:'State-of-the-art lanes, full arcade, multi-sport simulator, shuffleboard. Solid rainy-day option.' },
        { icon:'🎬', name:'Palace Theatre',               sub:'Downtown Lake Placid · Historic single-screen theater showing current films. Affordable, cozy afternoon escape.' },
        { icon:'🛍', name:'Main Street Shopping',         sub:'Galleries, outdoor gear, fudge shops, Olympic memorabilia stores. An easy 2-hour wander with something for everyone.' },
        { icon:'🏰', name:'Fort Ticonderoga + Heroic Corn Maze', badge:'rb-must', badgeLabel:'Sep 27 option A', sub:'102 Fort Ti Rd, ~40–45 min east of Schroon Lake · Open Tue–Sun through Oct 25, 9:30am–5pm, last admission 4:30pm. The 6-acre corn maze is included with admission: 10am–4:30pm, last daytime entry 4pm. Buying online in advance is encouraged, not required, and admission is valid two consecutive days. Flat grounds — the gentler of the two post-race choices.', url:'https://fortticonderoga.org/visit/buy-tickets/' },
        { icon:'🕳', name:'Natural Stone Bridge &amp; Caves',    badge:'rb-must', badgeLabel:'Sep 27 option B', sub:'535 Stone Bridge Rd, Pottersville, roughly 20–30 min south of Schroon Lake · Off-peak hours Sep 8–Oct 18 are 10am–5pm with the last tour ticket sold at 3:30pm. Waterfalls, surface caves, dinosaur dig, optional gem mining. The ~1.2 km trail has 500+ uneven steps — choose it only if the legs and the carrier can take it. Walk-up tickets.', url:'https://stonebridgeandcaves.com/plan-your-trip/' },
      ]
    },
    days: ['d1', 'd2', 'd3', 'd4', 'd5']
  },
  {
    id: 'finger-lakes',
    emoji: '🍷',
    title: 'Finger Lakes',
    navLabel: 'Finger Lakes',
    color: '#7C3AED',
    dates: 'Sep 30 – Oct 3',
    weather: { name: 'Watkins Glen, NY', lat: 42.3806, lon: -76.8733 },
    infoCard: {
      prefix: 'fl',
      eat: [
        { icon:'🍷', name:'Graft Wine + Cider Bar',    badge:'rb-wine',   badgeLabel:'Wine',   sub:'413 N Franklin St, Watkins Glen · Farm-to-table, all locally sourced &amp; seasonal. Best sit-down dinner in town.', url:'https://www.graftwineciderbar.com/' },
        { icon:'🚂', name:'Seneca Harbor Station',     badge:'rb-casual', badgeLabel:'Casual', sub:'3 N Franklin St · 1876 train station turned restaurant. Seneca Lake views, great seafood &amp; steaks.', url:'https://senecaharborstation.com/restaurant/' },
        { icon:'🌿', name:'Ravinous Kitchen',          badge:'rb-casual', badgeLabel:'Casual', sub:'Watkins Glen · Field-to-table, weekly changing seasonal menu. Creative &amp; genuinely local.' },
        { icon:'🌱', name:'Moosewood Restaurant',      badge:'rb-casual', badgeLabel:'Casual', sub:'215 N Cayuga St, Ithaca · Legendary vegetarian institution since 1973. A genuine Ithaca landmark.', url:'https://www.moosewoodrestaurant.com/menu' },
        { icon:'🐟', name:'BoatYard Grill',            badge:'rb-casual', badgeLabel:'Casual', sub:'525 Taughannock Blvd, Ithaca · Best seafood in Ithaca. Cayuga Lake dock views. Great clam chowder &amp; halibut.', url:'https://boatyardgrill.com/hours.php' },
        { icon:'🍕', name:'Revelry Yards',             badge:'rb-brew',   badgeLabel:'Brew',   sub:'Ithaca · Wood-fired pizza, craft micro-brewery upstairs. Lunch, brunch &amp; dinner. Lively atmosphere.', url:'https://www.revelryyards.com/menus.html' },
      ],
      nohike: [
        { icon:'🔬', name:'Corning Museum of Glass',      badge:'rb-must', badgeLabel:'★ Must-do', sub:'Corning, ~45 min from Watkins Glen · $25/adult, kids under 17 free. Open 9am–5pm daily. You can make your own glass piece. One of the best museums in the US — easily fills 3 hours.', url:'https://visit.cmog.org/plan-your-visit' },
        { icon:'🐄', name:'Farm Sanctuary',                badge:'rb-must', badgeLabel:'Book ahead', sub:'3150 Aikens Rd, ~20 min west of Watkins Glen · Hour-long guided tours of the original farm-animal rescue. Open Fri–Sun in October. <strong>Every visit requires advance registration</strong> — this is the Oct 2 afternoon plan and it does not work as a walk-up.', url:'https://www.farmsanctuary.org/the-sanctuaries/watkins-glen-ny/' },
        { icon:'💚', name:'Green Lakes State Park',        sub:'7900 Green Lakes Rd, Fayetteville · The Sep 30 transfer-day stop, just east of Syracuse. Two blue-green meromictic lakes, old-growth forest, and a flat stroller-friendly shore loop. Open year-round dawn–dusk, no booking. The $10 vehicle fee is charged daily only through Labor Day.', url:'https://parks.ny.gov/visit/state-parks/green-lakes-state-park' },
        { icon:'🍷', name:'Seneca Lake Wine Trail',        sub:'35+ wineries along both shores. Drive the loop, stop at 3–4. Highlights: Wagner Vineyards, Castel Grisch, Hazlitt\'s 1852. No reservation usually needed mid-week.' },
        { icon:'🦕', name:'Museum of the Earth',           sub:'1259 Trumansburg Rd, Ithaca · Fossils, dinosaurs, hands-on paleontology. Very kid-friendly. ~$10/adult.', url:'https://www.museumoftheearth.org/visit/plan-your-visit' },
        { icon:'🌾', name:'Windmill Farm &amp; Craft Market', sub:'Penn Yan, ~30 min · Saturdays only. Large open-air market: local food, crafts, produce, baked goods. Worth the drive.' },
        { icon:'🎭', name:'Hangar Theatre',                sub:'Ithaca · Professional regional theater in a converted 1940s airplane hangar. Check schedule for fall shows.' },
      ]
    },
    days: ['d6', 'd7', 'd8', 'd9']
  },
  {
    id: 'niagara',
    emoji: '🌊',
    title: 'Niagara Falls',
    navLabel: 'Niagara',
    color: '#0EA5E9',
    dates: 'Oct 3 (eve) – Oct 5',
    weather: { name: 'Niagara Falls, NY', lat: 43.0962, lon: -79.0377 },
    infoCard: {
      prefix: 'nf',
      eat: [
        { icon:'🍔', name:'The Placery at Hyatt Place', badge:'rb-casual', badgeLabel:'Easy',   sub:'Lobby restaurant / grab-and-go fallback for the Oct 3 arrival night. Use it if the children are finished for the day.' },
        { icon:'🌊', name:'Top of the Falls',           badge:'rb-casual', badgeLabel:'View',   sub:'Goat Island lunch option after Cave of the Winds. Check current hours before relying on it.' },
        { icon:'🇨🇦', name:'Table Rock Market',          badge:'rb-casual', badgeLabel:'Canada', sub:'Simple early dinner beside Horseshoe Falls. Practical with children and keeps the Canadian-side walk compact.' },
      ],
      nohike: [
        { icon:'📍', name:'Where Oct 3 lives',        sub:'The Oct 3 card — Taughannock, Ithaca and the drive over — sits on the Finger Lakes chapter above, because the whole day is spent leaving the Finger Lakes. Niagara picks up with the evening arrival at the bottom of that card.' },
        { icon:'🏨', name:'Why stay on the US side', badge:'rb-must', badgeLabel:'Recommended', sub:'Both must-do attractions are in Niagara Falls State Park, and the Oct 5 car route leaves toward NJ. Hyatt Place lets the car remain parked; visit Canada on foot instead of adding car-border crossings.' },
        { icon:'🛏', name:'Room booked',             sub:'Queen Room with Sofa Bed, 2 nights, booked for 2 adults + 2 children (ages 2 and 4) — confirmation 6319943337. Nothing prepaid; the property takes payment and may place a card hold at check-in. Photo ID and credit card required at the desk.' },
        { icon:'🛂', name:'Canadian-side documents', sub:'Carry valid passports for every adult and child and use Canada’s official checker for each traveler’s documents. Bring a stroller for the promenade and allow for customs both ways.', url:'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html' },
        { icon:'💦', name:'Wet-attraction kit',      sub:'Water-safe shoes, carrier for the younger child, dry socks/clothes in a waterproof bag, and a towel. Maid supplies ponchos; Cave no longer supplies sandals.' },
      ]
    },
    days: ['d10', 'd11']
  }
],

// ── DAYS ───────────────────────────────────────────────────
// Each day has a `date` in ISO yyyy-mm-dd form — the single source
// of truth for when the day happens. index.html formats it for the
// day cards and the calendar view. Change a date here and the whole
// dashboard (cards + calendar) updates automatically.
// content items: { type:'activity'|'drive'|'hiketabs', ... }
//
// activity fields:
//   icon, title, sub
//   tag  (optional) — shown as optional-tag badge: 'optional'|'rain plan'|'splurge'
//   trailUrl (optional) — appends AllTrails link inside the sub text
//   style (optional) — inline style on the outer .activity div
//
// drive fields: text
//
// hiketabs fields:
//   prefix — used to form element IDs (e.g. 'oct1' → 'oct1-base')
//   tabs   — array of { id, label, active?, title, desc?, note?, stats[], url }
//     desc  — appended inline to title: "<strong>title</strong>desc"
//     note  — rendered as a separate <p> below stats (no note → <br>)
days: {
  d1: {
    date: '2026-09-25', title: 'Arrive EWR → Walkway → Lake Placid',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'activity', icon:'✈️', title:'5:15am · Land at EWR — EL AL LY0027, Terminal B', sub:'TLV Ben Gurion Terminal 3 departs 00:30 Fri Sep 25, arrives Newark Liberty Terminal B at 05:15 the same morning. Boeing 787-9, seats 45G/45H/45J/45K, one checked bag each. Reservation code QVYLZC.' },
      { type:'activity', icon:'🔑', title:'6:00am · Avis pickup — Rental Car Center, 3rd floor', sub:'Reservation #25622224IL5, Ford Explorer or similar, unlimited mileage, estimated $559.47. From Terminal B follow the AirTrain to Terminal A, go downstairs and out toward the parking garage, then the escalator to the 3rd floor. Counter is open 24 hrs. A credit-card hold of $300 or the full rental cost is placed at pickup; bring the licence and a credit card. Note the car is due back at Newport Centre Mall in Jersey City — not EWR — by 7:00pm on Oct 5.', url:'https://www.google.com/maps/search/?api=1&query=Avis+Newark+Liberty+International+Airport%2C+132+Carson+Road%2C+Newark%2C+NJ+07114', urlLabel:'📍 Open in Google Maps' },
      { type:'drive', text:'305 miles · ~5 hr 4 min wheel time in usual traffic via I-87 N; with the planned stops, budget ~7.5–9 hrs from rental-car departure to Lake Placid',
        route:{ from:'Newark Liberty International Airport (EWR)', to:'Lake Placid Inn: Residences, 2050 Saranac Ave, Lake Placid, NY 12946', via:['Walkway Over the Hudson West Entrance, 87 Haviland Road, Highland, NY','Hannaford, 190 Quaker Road, Queensbury, NY','Aviation Mall, 578 Aviation Road, Queensbury, NY'] } },
      { type:'activity', icon:'🌉', title:'T+1:40 to T+2:25 · Walkway Over the Hudson', sub:'Use the west entrance, 87 Haviland Rd, Highland. Walk west gate → midpoint → west gate: ~1.28 mi total, flat, paved and stroller-friendly; restrooms at the entrance. Paid parking. Do this only if the rental car leaves EWR by 1:30pm and weather is safe; otherwise skip it without replacement. Sep 25 hours: 7am–7pm.', url:'https://walkway.org/visit/' },
      { type:'activity', icon:'🛒', title:'T+4:05 to T+4:50 · Hannaford Queensbury', sub:'190 Quaker Rd · full first shop for breakfast, picnic food, fruit, snacks, diapers and road supplies. Open 7am–11pm daily. Eat a quick prepared-food meal here or nearby before the final mountain leg.', url:'https://stores.hannaford.com/ny/queensbury/8360' },
      { type:'activity', icon:'🛍', title:'T+4:50 to T+6:20 · Aviation Mall shopping — Target &amp; DICK\'S Sporting Goods', sub:'578 Aviation Rd, Queensbury, off I-87 Exit 19 near Lake George. Target: affordable warm basics for the girls and you — sweatshirts, leggings, long sleeves, socks, seasonal jackets — plus basic backpacks. DICK\'S Sporting Goods, same mall: better pick for a hiking daypack, outdoor layers and branded jackets. Allow 60–90 minutes for both; specific sizes and backpack models will depend on stock.', url:'https://www.google.com/maps/search/?api=1&query=Aviation+Mall%2C+578+Aviation+Road%2C+Queensbury%2C+NY', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🏨', title:'T+8:05 · Check in at Lake Placid Inn: Residences', sub:'2050 Saranac Ave, Lake Placid, NY 12946 · check-in from 4:00pm, Booking.com confirmation 5967.307.623 (PIN 9097), 5 nights, free private parking on site. Phone ahead with an arrival estimate: +1 518 523 6162. The T+ schedule is relative to leaving the rental center around 7:00am and includes normal traffic, a 45-min Walkway stop, a 45-min grocery stop and a 60–90 min Aviation Mall shopping stop. If the Walkway or the mall stop is skipped you can arrive 45–90 min earlier — but check-in does not open before 4:00pm, so use the spare time in Queensbury rather than waiting in the car in Lake Placid.', url:'https://www.google.com/maps/search/?api=1&query=Lake+Placid+Inn+Residences%2C+2050+Saranac+Ave%2C+Lake+Placid%2C+NY+12946', urlLabel:'📍 Open in Google Maps' },
    ]
  },
  d2: {
    date: '2026-09-26', title: 'Heaven Hill + relaxed Lake Placid day',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'🍳', title:'Morning · Unhurried breakfast', sub:'No fixed start time — let everyone sleep in and adjust for jet lag. Ease into the day before heading out around 10am.' },
      { type:'activity', icon:'🌲', title:'10:00am–11:15am · Choose one nature walk', sub:'Pick a single option below and keep it easy — tomorrow is race day. Heaven Hill\'s Old Orchard Loop is the default plan.' },
      { type:'hiketabs', prefix:'d2-nature', tabs:[
        { id:'heaven-orchard', label:'Heaven Hill — Old Orchard', active:true,
          title:'Heaven Hill — Old Orchard Loop',
          note:'Default plan. Gentle gradient through woodland and open meadow, with mountain views along the way.',
          stats:['~2.3 km','Gentle grade','Woodland + meadow'],
          url:'https://www.lakeplacid.com/hiking/heaven-hill-trails' },
        { id:'heaven-short', label:'Heaven Hill — Big Field (shorter)',
          title:'Heaven Hill — Big Field Loop',
          note:'A shorter loop within the same Heaven Hill trail network, relatively flat throughout. Choose this if anyone is tired or time is short.',
          stats:['~1.45 km','Relatively flat','Shorter option'],
          url:'https://www.lakeplacid.com/hiking/heaven-hill-trails' },
        { id:'brewster', label:'Brewster Peninsula (different location)',
          title:'Brewster Peninsula — short forest/lakeshore walk',
          note:'A different location from Heaven Hill. Flexible out-and-back — treat it as a time budget, not a fixed-distance route, and turn around whenever ready. Lakeshore sections are rocky and uneven underfoot.',
          stats:['~45–60 min','Out-and-back','Rocky lakeshore'],
          url:'https://www.lakeplacid.com/hiking/peninsula-nature-trails' },
      ]},
      { type:'activity', icon:'🍽', title:'11:30am–12:30pm · Lunch in Lake Placid village', sub:'Casual lunch back in the village — Big Mountain Deli or Origin Coffee Co. are easy, quick options.' },
      { type:'activity', icon:'🛋', title:'1:00pm–3:00pm · Return to accommodation', sub:'Naps and rest for everyone. Keep the afternoon fully unscheduled ahead of tomorrow\'s 9am half marathon start.' },
      { type:'activity', icon:'🌊', title:'3:30pm–4:30pm · Mirror Lake waterfront + Main Street stroll', tag:'optional', sub:'Shops and ice cream along the waterfront and Main Street. No need to complete the full lake loop — keep it short and low-key.' },
      { type:'activity', icon:'🌙', title:'Early evening · Early dinner + race prep', sub:'Early dinner, prepare race clothes, gear and photo ID, then early night. Collect the bib Sunday morning in Schroon Lake; the half marathon starts at 9am in the town of Adirondack.' },
      { type:'activity', icon:'🏆', title:'Rain plan · Olympic Museum instead of the morning walk', tag:'rain plan', sub:'Swap the nature walk for the Olympic Museum, 2634 Main St. Allow 60–90 minutes. Saturday hours 9:30am–5pm; tickets sold at the entrance; ages six and under free.', url:'https://lakeplacidolympicmuseum.org/visit/' },
    ]
  },
  d3: {
    date: '2026-09-27', title: 'Half marathon + family morning in Schroon Lake',
    badge: 'hike', badgeLabel: 'Race',
    booked: [
      { label: 'Adirondack Half Marathon — already registered; collect the packet 6:45–7:45am', must: true },
      { label: 'Fort Ticonderoga (afternoon option A) — buy admission online ahead; day-of sale at the booth also works', must: false },
    ],
    content: [
      { type:'activity', icon:'🎒', title:'Before you go · Family morning prep', sub:'Pack breakfast, snacks, warm layers, a picnic blanket and small toys. Leave Shachar the car keys and dry clothes for after the race.' },
      { type:'drive', text:'Drive from Lake Placid to Schroon Lake · targeting arrival around 7:00am for packet pickup and the shuttle',
        route:{ from:'Lake Placid Inn: Residences, 2050 Saranac Ave, Lake Placid, NY 12946', to:'Schroon Lake, NY' } },
      { type:'activity', icon:'🎽', title:'6:45am–7:45am · Packet pickup', sub:'At the pavilion above the finish line in Schroon Lake. Bring photo ID.', url:'https://www.adirondackmarathon.org/half-marathon' },
      { type:'activity', icon:'🚌', title:'7:40am–8:05am · Runner shuttle departures', sub:'Board from Route 9, beside the Adirondack Inn, for transport to the start in the town of Adirondack.' },
      { type:'activity', icon:'👀', title:'Around 8:00am · Watch the full marathon start', tag:'optional', sub:'Watch the full marathon start on Main Street.' },
      { type:'activity', icon:'🏖', title:'8:15am–10:20am · Family breakfast picnic & playground', sub:'Breakfast picnic, playground and lakeside time at Schroon Lake Town Park / Public Beach. Optional short village stroll and quiet play.', url:'https://townofschroonny.gov/parks-outdoor-facilities/' },
      { type:'activity', icon:'🏁', title:'9:00am · Half marathon start — town of Adirondack', sub:'Point-to-point course starting in the town of Adirondack and finishing in Schroon Lake. Ofek takes the runner shuttle; Shachar and the girls remain in Schroon Lake near the finish.', url:'https://www.adirondackmarathon.org/half-marathon' },
      { type:'activity', icon:'🏃', title:'Half marathon', sub:'13.1-mile point-to-point course from the town of Adirondack to Schroon Lake, with rolling foliage views. Part of the Adirondack Marathon Distance Festival.', url:'https://www.adirondackmarathon.org/' },
      { type:'activity', icon:'📍', title:'From 10:25am · Gather near the finish', sub:'Head to the public-beach finish area, following spectator signs.' },
      { type:'activity', icon:'⏱', title:'Around 10:45am · Ofek’s estimated finish', sub:'Estimated finish time if running a 1:45 half marathon; not a guaranteed time.' },
      { type:'activity', icon:'📸', title:'11:00am–12:30pm · Dry clothes, photos and recovery lunch', sub:'Dry clothes, family photos and lunch in Schroon Lake — Pitkin’s or a takeaway picnic. Decide the afternoon here, once you can see how the legs and the girls are holding up.' },
      { type:'activity', icon:'🗺', title:'12:30pm · Pick the afternoon — both options stay open', sub:'Deliberately undecided until race day. Fort Ticonderoga and Natural Stone Bridge &amp; Caves are both open on Sun Sep 27 and neither has to be committed to in advance, so choose on the day. Doing nothing is the third real option, not a failure.' },
      { type:'hiketabs', prefix:'d3-pm', tabs:[
        { id:'fort', label:'Fort Ticonderoga + corn maze', active:true,
          title:'Fort Ticonderoga + Heroic Corn Maze',
          note:'~40–45 min east of Schroon Lake via NY-74. Sun Sep 27 hours 9:30am–5pm, last admission 4:30pm; the 6-acre Heroic Corn Maze runs 10am–4:30pm with last daytime entry at 4pm and is included in general admission. Rough shape: 1:15pm arrive, fort and gardens plus a historical demonstration, then the maze, leave around 3:45pm. Return to Lake Placid is roughly 1 hr 20 – 1 hr 30, so back about 5:15–5:45pm. Lowest-effort option for post-race legs — the fort grounds are walkable and mostly flat. Admission is valid two consecutive days. Drive times here are planning estimates.',
          stats:['~40–45 min drive','Flat grounds','Maze last entry 4pm'],
          linkLabel:'🎟 Hours &amp; tickets',
          url:'https://fortticonderoga.org/visit/buy-tickets/' },
        { id:'caves', label:'Stone Bridge &amp; Caves',
          title:'Natural Stone Bridge &amp; Caves, Pottersville',
          note:'Roughly 20–30 min south of Schroon Lake (planning estimate). Off-peak hours Sep 8–Oct 18 are 10am–5pm with the last tour ticket sold at 3:30pm. Waterfalls, the largest cave entrance in the eastern US, a dinosaur dig and optional gem mining — the strongest option if caves appeal more than history. The real trade-off: the ~1.2 km self-guided trail has 500+ uneven steps, which is a lot to ask of post-half-marathon legs and of whoever is carrying the baby. Tickets are sold on site; no advance booking.',
          stats:['~20–30 min drive','~1.2 km, 500+ steps','Last ticket 3:30pm'],
          linkLabel:'🔗 Hours &amp; admission',
          url:'https://stonebridgeandcaves.com/plan-your-trip/' },
        { id:'rest', label:'Straight back — rest',
          title:'Straight back to Lake Placid',
          note:'The honest fallback, and the right call if the race went hard or the girls are done. Back in Lake Placid by early afternoon for showers and naps, then Mirror Lake, an ice cream on Main Street and legs up. Whiteface and the Wild Center are the next two days — protecting those is worth more than one extra outing.',
          stats:['~1 hr drive','No agenda','Naps + Mirror Lake'] },
      ]},
      { type:'drive', text:'Option A · Schroon Lake → Fort Ticonderoga → Lake Placid · roughly 45 min out and 1 hr 20 – 1 hr 30 home',
        route:{ from:'Schroon Lake, NY', to:'Lake Placid Inn: Residences, 2050 Saranac Ave, Lake Placid, NY 12946', via:['Fort Ticonderoga, 102 Fort Ti Road, Ticonderoga, NY'] } },
      { type:'drive', text:'Option B · Schroon Lake → Natural Stone Bridge &amp; Caves → Lake Placid · roughly 20–30 min out and 1 hr 15 home',
        route:{ from:'Schroon Lake, NY', to:'Lake Placid Inn: Residences, 2050 Saranac Ave, Lake Placid, NY 12946', via:['Natural Stone Bridge and Caves, 535 Stone Bridge Road, Pottersville, NY'] } },
      { type:'activity', icon:'🌆', title:'Evening · Back in Lake Placid, early dinner', sub:'Whichever option wins, aim to be back by about 5:45pm. Short Mirror Lake stroll if anyone still has legs, then an early dinner and an early night — Whiteface is tomorrow morning.' },
      { type:'activity', icon:'🌧', title:'Rain plan · Family morning in Lake Placid', tag:'rain plan', sub:'If persistently cold and wet, consider a family morning in Lake Placid instead; Ofek takes the car to the race and rejoins the family afterward. In steady rain skip both afternoon options — the corn maze and the cave trail are both bad in wet weather.' },
    ]
  },
  d4: {
    date: '2026-09-28', title: 'Whiteface Highway + High Falls Gorge',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'🏔', title:'8:45am–11:30am · Whiteface Veterans’ Memorial Highway', sub:'Do the weather-sensitive summit first. Fall admission is sold in person at the Toll House; the highway is open daily 8:45am–5:30pm through Oct 12. Drive-up summit, elevator alternative to the final stairs, and minimal leg load the day after the race. Pack layers: the summit is at least 10°F colder.', url:'https://whiteface.com/todo/whiteface-veterans-memorial-highway/' },
      { type:'activity', icon:'🍽', title:'11:45am–12:30pm · Wilmington lunch', sub:'Eat between the two attractions. Keep it quick and warm; this is a recovery day, not a hiking day.' },
      { type:'activity', icon:'💧', title:'1:00pm–2:15pm · High Falls Gorge', sub:'The gorge is in the same Wilmington corridor. Use the Easy Path with stroller; use the carrier only if taking the suspended walkways. Turn back whenever legs feel heavy.', url:'https://highfallsgorge.com/tickets/', urlLabel:'🎟 Tickets &amp; hours' },
      { type:'activity', icon:'🛋', title:'After 3pm · Lake Placid recovery', sub:'No added hike. Hotel rest, Mirror Lake shoreline or Main Street only. If Whiteface is clouded or closed, reverse the order and use the Olympic Museum as the weather backup.' },
    ]
  },
  d5: {
    date: '2026-09-29', title: 'Wild Center + Saranac Lake',
    badge: 'explore', badgeLabel: 'Explore',
    booked: [
      { label: 'The Wild Center — reserve dated tickets with an arrival time slot', must: false },
    ],
    content: [
      { type:'drive', text:'~45 min each way via NY-86 W / NY-3 W · leave Lake Placid about 9:00am',
        route:{ from:'Lake Placid Inn: Residences, 2050 Saranac Ave, Lake Placid, NY 12946', to:'The Wild Center, 45 Museum Drive, Tupper Lake, NY' } },
      { type:'activity', icon:'🦦', title:'10:00am–2:30pm · The Wild Center', sub:'Wild Walk, Pines Play Area, animal encounters and indoor exhibits. September–October hours are 10am–5pm; reserve dated tickets for faster entry. Eat at the Waterside Café.', url:'https://www.wildcenter.org/visit/' },
      { type:'activity', icon:'🎠', title:'3:00pm–3:45pm · Adirondack Carousel', tag:'optional', sub:'Saranac Lake stop on the return route. Skip if the children fall asleep in the car.' },
      { type:'activity', icon:'🧳', title:'Evening · Pack for transfer', sub:'Refill the day bag, stage breakfast and load what can safely stay in the car. Sep 30 is now a true transfer day; there is no duplicated Wild Center day.' },
    ]
  },
  d6: {
    date: '2026-09-30', title: 'Lake Placid → Watertown → Green Lakes → Watkins Glen',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~320 miles with the Green Lakes detour · the detour adds roughly 40–60 min of driving to the 280-mile / ~4 hr 56 min base route via NY-3 W and I-81 S. With a 45-min Watertown break and a 90-min park stop, budget ~8–8.5 hrs door to door. Distances beyond the base route are planning estimates, not a checked live route',
        route:{ from:'Lake Placid Inn: Residences, 2050 Saranac Ave, Lake Placid, NY 12946', to:'21 Fir Tree Point Road, Rock Stream, NY 14878', via:['Hannaford, 21110 US Route 3, Watertown, NY','Green Lakes State Park, 7900 Green Lakes Road, Fayetteville, NY'] } },
      { type:'activity', icon:'🧳', title:'By 10:00am · Check out of Lake Placid Inn: Residences', sub:'2050 Saranac Ave · checkout is until 10:00am on the confirmation, so the 8:30am departure below already clears it comfortably. Strip the apartment, load the car and leave the key as instructed at check-in.', url:'https://www.google.com/maps/search/?api=1&query=Lake+Placid+Inn+Residences%2C+2050+Saranac+Ave%2C+Lake+Placid%2C+NY+12946', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🚗', title:'8:30am · Leave Lake Placid', sub:'Use NY-3 W through Saranac Lake and Tupper Lake. This is the scenic and fastest mapped route; do not route south through Albany. Leaving on time is what makes the Green Lakes stop possible.' },
      { type:'activity', icon:'🛒', title:'~11:00am–11:45am · Hannaford Watertown', sub:'21110 US Route 3 · the route reaches the I-81 area after roughly 2.5 hours. Restroom, prepared-food lunch and Finger Lakes grocery restock. Hold this to about 45 minutes so the park stop survives. Open Wednesday 7am–10pm.', url:'https://stores.hannaford.com/ny/watertown/8175' },
      { type:'activity', icon:'💚', title:'~1:00pm–1:30pm · Arrive Green Lakes State Park', sub:'7900 Green Lakes Rd, Fayetteville, just east of Syracuse and a short hop off I-81. Two meromictic lakes with genuinely blue-green water ringed by old-growth forest — this is what turns the transfer into a sightseeing day rather than six hours of highway. Open year-round, dawn to dusk. No booking; the $10 vehicle fee is charged daily only through Labor Day, so late September is normally free — carry $10 anyway in case it is being collected.', url:'https://parks.ny.gov/visit/state-parks/green-lakes-state-park' },
      { type:'activity', icon:'🚶', title:'~1:30pm–3:00pm · Walk beside Green Lake', sub:'Roughly 90 minutes. The lakeside loop around Green Lake is flat, wide and stroller-friendly — photos, a snack on the shore, and extend toward Round Lake only if everyone is still enjoying it. Turn back whenever you like; the whole point is that this stop shortens cleanly.' },
      { type:'activity', icon:'🏨', title:'~5:00pm–5:30pm · Check in at Fir Tree Point', sub:'21 Fir Tree Point Road, Rock Stream, NY 14878, on Seneca Lake ~20 min north of Watkins Glen. Green Lakes to here is roughly 1 hr 55. Check-in from 3:00pm, confirmation HMWAHEAX5X, hosted by David, +1 919-605-2977, $991.27 total, already paid. Keep the rest of the day empty except lakefront play and an early dinner. Tomorrow is Corning.', url:'https://www.google.com/maps/search/?api=1&query=21+Fir+Tree+Point+Road%2C+Rock+Stream%2C+NY+14878', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'⏭', title:'If you are running late · skip Green Lakes', tag:'optional', sub:'The park is the flexible part of the day, not a commitment. If you leave Lake Placid after ~9:30am, the weather is poor, or the girls are asleep and settled, drive straight through and reach Watkins Glen around 3pm instead. Nothing else on the trip depends on it.' },
    ]
  },
  d7: {
    date: '2026-10-01', title: 'Corning Museum of Glass',
    badge: 'explore', badgeLabel: 'Must-do',
    booked: [
      { label: 'Corning Make Your Own Glass — reserve the timed slot; these sell out', must: false },
    ],
    content: [
      { type:'drive', text:'~50 min each way from Fir Tree Point',
        route:{ from:'21 Fir Tree Point Road, Rock Stream, NY 14878', to:'Corning Museum of Glass, Corning, NY' } },
      { type:'activity', icon:'🔬', title:'9:30am–2:30pm · Corning Museum of Glass', sub:'Keep five hours including lunch. Start with a reserved Make Your Own Glass slot, then Hot Shop demos, hands-on innovation galleries and the café. Fully indoor, so swap with Oct 2 if that is the wet day.', url:'https://home.cmog.org/visit' },
      { type:'activity', icon:'🎨', title:'Reserve Make Your Own Glass', sub:'Book the timed experience before the trip; the museum itself does not need the whole day. Choose a child-compatible project and confirm pickup/shipping timing.' },
      { type:'activity', icon:'🌊', title:'Late afternoon · Watkins Glen lakefront', sub:'Return to the base for playground / Seneca Lake waterfront and an early dinner. Do not add another drive.' },
    ]
  },
  d8: {
    date: '2026-10-02', title: 'Watkins Glen Gorge + Farm Sanctuary',
    badge: 'hike', badgeLabel: 'Hike',
    booked: [
      { label: 'Farm Sanctuary guided tour — ALL visits require advance registration; book the afternoon slot now', must: true },
    ],
    content: [
      { type:'activity', icon:'🏞', title:'8:30am–10:30am · Watkins Glen Gorge Trail', sub:'Enter at the Main Entrance. Family base plan: walk through Cavern Cascade, continue only while everyone is comfortable, then turn around the same way. Use the carrier, not the stroller: the gorge has many wet stone steps. Oct 2 is before the usual mid-to-late-October seasonal gorge closure, but verify conditions that morning.', url:'https://parks.ny.gov/visit/state-parks/watkins-glen-state-park' },
      { type:'hiketabs', prefix:'wg', tabs:[
        { id:'base',    label:'Family base', active:true,
          title:'Main Entrance → Cavern Cascade → return',
          note:'Captures the signature gorge without committing to all 800+ steps. Turn around after 45–60 minutes outbound at the latest.',
          stats:['~1–1.5 mi rt','Many stairs','Easy-Moderate'],
          url:'https://www.alltrails.com/trail/us/new-york/glen-creek-gorge-trail' },
        { id:'upgrade', label:'Upgrade',
          title:'Continue farther up Gorge Trail',
          note:'Only if both children and the post-race legs are genuinely strong. No weekday shuttle; every step out must be walked back or linked to a rim trail.',
          stats:['Up to ~3 mi','800+ steps','Moderate'],
          url:'https://www.alltrails.com/trail/us/new-york/watkins-glen-south-rim-trail' },
      ]},
      { type:'activity', icon:'🍽', title:'12:00pm–1:00pm · Lunch after the gorge', sub:'Back in Watkins Glen. Dry off, change anyone who got wet on the stone steps, and eat properly before driving out.' },
      { type:'drive', text:'~25 min west of Fir Tree Point via Watkins Glen · the younger one can nap in the car on the way out',
        route:{ from:'21 Fir Tree Point Road, Rock Stream, NY 14878', to:'Farm Sanctuary, 3150 Aikens Road, Watkins Glen, NY' } },
      { type:'activity', icon:'🐄', title:'~2:00pm · Farm Sanctuary guided tour', sub:'Meeting rescued cows, pigs, sheep and turkeys at the original farm-animal sanctuary — a completely different register from the morning waterfalls, and the kind of thing the girls will actually remember. Tours are guided, run about an hour, and <strong>every visit requires advance registration</strong>. October hours are Friday, Saturday and Sunday, so Fri Oct 2 fits the published schedule, but the specific afternoon slot has not been confirmed — book it before the trip and set the day around whatever time you get. Arrive 15 minutes early.', url:'https://www.farmsanctuary.org/the-sanctuaries/watkins-glen-ny/', urlLabel:'🎟 Book a visit' },
      { type:'activity', icon:'🛍', title:'Until ~4:00pm · Shop and grounds', sub:'The tour is only an hour; the grounds and gift shop absorb the rest comfortably. Head back whenever the girls are finished.' },
      { type:'activity', icon:'🛋', title:'Evening · Dinner and pack for Niagara', sub:'Seneca Lake waterfront if there is anything left in the tank, then an early dinner. Pack tonight — checkout at Fir Tree Point is 10:00am tomorrow and the plan is to leave by 8:15am.' },
      { type:'activity', icon:'😴', title:'Fallback · protected downtime instead', tag:'optional', sub:'If no suitable tour slot is available, or the gorge has emptied everyone out, drop the sanctuary: nap and lodging reset first, then Seneca Lake waterfront only. This is the one new outing that needs a booking, so it is also the one that can simply not happen.' },
    ]
  },
  d9: {
    date: '2026-10-03', title: 'Taughannock + Ithaca → Niagara Falls',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'activity', icon:'🧳', title:'By 10:00am checkout; 8:15am leave for Taughannock', sub:'Check out of Fir Tree Point, 21 Fir Tree Point Road, Rock Stream, by 10:00am (confirmation HMWAHEAX5X) — load the car before breakfast and leave by 8:15am so the checkout deadline is not tight. This protects the Niagara evening and avoids trying to sightsee in Ithaca late in the day.', url:'https://www.google.com/maps/search/?api=1&query=21+Fir+Tree+Point+Road%2C+Rock+Stream%2C+NY+14878', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'💧', title:'9:00am–10:30am · Taughannock Falls', sub:'Use the broad, flat Gorge Trail to the 215-ft falls, ~1.5 mi round trip. Stroller works in normal conditions; take the carrier if the trail is wet.', trailUrl:'https://www.alltrails.com/trail/us/new-york/taughannock-falls-via-gorge-trail' },
      { type:'activity', icon:'🍕', title:'10:50am–11:50am · Early lunch in Ithaca', sub:'Ithaca Commons only. Skip Cornell Botanic Gardens and Sciencenter on this transfer day; Niagara is now the priority.' },
      { type:'drive', text:'166 miles · ~3 hr from Ithaca Commons to Hyatt Place in usual traffic; add a short restroom stop and follow live navigation',
        route:{ from:'Ithaca Commons, Ithaca, NY', to:'Hyatt Place Niagara Falls, 310 Rainbow Blvd South, Niagara Falls, NY 14303' } },
      { type:'activity', icon:'🏨', title:'~3:00pm · Hyatt Place check-in (from 3:00pm)', sub:'310 Rainbow Blvd South, Niagara Falls, NY 14303 · check-in opens 3:00pm, confirmation 6319943337, Queen Room with Sofa Bed, 2 nights. Photo ID and credit card required at the desk; nothing is prepaid. Park once, leave bags if the room is not ready, then use the indoor pool / room until about 5:15pm.', url:'https://www.google.com/maps/search/?api=1&query=Hyatt+Place+Niagara+Falls%2C+310+Rainbow+Blvd+South%2C+Niagara+Falls%2C+NY+14303', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🌊', title:'5:30pm–7:00pm · First look + illumination', sub:'Walk to Prospect Point and the Observation Tower area. Illumination starts at 6:15pm. Eat at The Placery afterward; do not cross the border tonight.' },
      { type:'activity', icon:'🎆', title:'10:00pm · Fireworks', tag:'optional', sub:'Scheduled nightly through Oct 12, weather permitting. View from Prospect Point or the hotel patio if open; skip without regret if the children are asleep.', url:'https://www.niagaraparks.com/events/event/niagara-falls-fireworks-series' },
    ]
  },
  d10: {
    date: '2026-10-04', title: 'Maid + Cave + Canadian panorama',
    badge: 'explore', badgeLabel: 'Must-do',
    booked: [
      { label: 'Maid of the Mist — buy the online voucher ahead (skips the ticket-window line; boarding is still first-come)', must: false },
      { label: 'Cave of the Winds — same-day only, cannot be pre-booked: buy at 9am on the day', must: false },
    ],
    content: [
      { type:'activity', icon:'🎒', title:'8:00am · Breakfast + wet-attraction kit', sub:'Water-safe shoes, carrier, dry socks/clothes and towel in a waterproof bag. Leave the stroller at the hotel for the wet-attraction block; collect it for Canada.' },
      { type:'activity', icon:'🎟', title:'9:00am · Buy Cave of the Winds timed tickets first', sub:'At the Ralph C. Wilson Jr. Welcome Center or Cave ticket desk, buy the earliest slot at or after 10:45am. Tickets are same-day and not sold online. Oct 4 posted hours: 9am–6:15pm.', url:'https://www.niagarafallsstatepark.com/attractions/cave-of-the-winds/' },
      { type:'activity', icon:'⛴', title:'9:10am–10:20am · Maid of the Mist', sub:'Must-do. Exchange the online voucher, then join the first-come line; boats depart about every 15 min and the ride lasts 20 min. 2026 price: $30.25 adult, $19.75 ages 6–12, age 5 and under free. Runs 9am–5pm on Oct 4. Use stroller parking if you bring it.', url:'https://www.maidofthemist.com/schedule-pricing/' },
      { type:'activity', icon:'💨', title:'10:45am–12:15pm · Cave of the Winds', sub:'Strongly recommended. Use the assigned time; the Hurricane Deck is optional, so an adult can remain on the less-wet lower platforms with a child. Bring wet-safe footwear because sandals are no longer distributed. Return to the hotel if anyone is chilled.', url:'https://www.niagarafallsstatepark.com/attractions/cave-of-the-winds/' },
      { type:'activity', icon:'🏝', title:'12:15pm–1:30pm · Terrapin Point + lunch', sub:'Take the Horseshoe Falls overlook immediately after Cave, then lunch at Top of the Falls if open. Otherwise use the hotel or a nearby quick option.' },
      { type:'activity', icon:'🛋', title:'1:30pm–3:30pm · Dry clothes + nap / pool', sub:'Protected reset. Do not trade this away for another attraction.' },
      { type:'activity', icon:'🇨🇦', title:'3:45pm–7:15pm · Canadian side on foot', sub:'Take every traveler’s valid passport and the stroller. Walk across Rainbow Bridge, continue through Queen Victoria Park to Table Rock, eat an early dinner, and see the 6:15pm illumination from the Canadian panorama. Allow flexible customs time both ways. The return-to-US pedestrian toll is $1 USD in quarters, $1.25 CAD cash, or $1.25 CAD contactless per person.', url:'https://www.niagarafallsbridges.com/crossing-info/pedestrian-crossing-information' },
      { type:'activity', icon:'🚇', title:'Journey Behind the Falls', tag:'optional', sub:'Substitute this only if Cave of the Winds is unavailable or someone opts out of Cave. Do not make it a third wet attraction.', url:'https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls/' },
      { type:'activity', icon:'🎆', title:'10:00pm · Fireworks', tag:'optional', sub:'A second chance if everyone is awake; weather can cancel the display.' },
    ]
  },
  d11: {
    date: '2026-10-05', title: 'Niagara morning → NJ family base',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'activity', icon:'🥞', title:'7:15am · Breakfast, check out and load car', sub:'Hyatt Place checkout is until 11:00am, but complete it before the final walk so the 9:15am departure is real. Settle the room charge, breakfast (US$11 per person per night if taken) and any parking at the desk.' },
      { type:'activity', icon:'🏝', title:'8:00am–9:00am · Goat Island final look', sub:'Three Sisters Islands + any Terrapin Point view missed yesterday. Keep it to 60 min. Bad-weather / tired-child substitute: hotel pool, open from 6am.' },
      { type:'drive', text:'~425 miles · ~6 hr 45 min wheel time in usual traffic with the two planned stops; budget ~8 hr 15 min door to door via I-90 E → I-81 S → I-380 S → I-80 E. The destination is the Jersey City Airbnb, not Newark',
        route:{ from:'Hyatt Place Niagara Falls, 310 Rainbow Blvd South, Niagara Falls, NY 14303', to:'272 Hoboken Avenue, Jersey City, NJ 07306', via:['Wegmans, 7952 Brewerton Road, Cicero, NY','Nay Aug Park, 500 Arthur Avenue, Scranton, PA'] } },
      { type:'activity', icon:'🚗', title:'9:15am · Leave Niagara Falls', sub:'Fuel the car before departure and protect the two planned break windows; this is the longest drive of the trip.' },
      { type:'activity', icon:'🛒', title:'~11:50am–12:40pm · Wegmans Cicero', sub:'After 166 miles / ~2 hr 36 min. Prepared-food lunch, restroom, final groceries and baby supplies for the NJ stay. Open 6am–midnight.', url:'https://www.wegmans.com/stores/cicero-ny' },
      { type:'activity', icon:'🌳', title:'~3:00pm–3:40pm · Nay Aug Park, Scranton', sub:'After another 144 miles / ~2 hr 19 min. Use it as a movement break, not a sightseeing stop: short paved wander / play, then back in the car. Open dawn–8pm.', url:'https://nayaugpark.org/' },
      { type:'activity', icon:'🚻', title:'Rain / delay backup: Great Bend Welcome Center', tag:'optional', sub:'If Nay Aug is wet or the schedule is over 30 min late, replace it with a 15-min restroom stop at the I-81 South Welcome Center, 26273 Route 11, Great Bend. Staffed 9am–5:30pm.', url:'https://www.pa.gov/agencies/penndot/traveling-in-pa/welcome-centers' },
      { type:'activity', icon:'🏠', title:'~5:30pm · Check in — 272 Hoboken Avenue Apt 8, Jersey City', sub:'272 Hoboken Avenue Apt 8, Jersey City, NJ 07306 · check-in from 4:00pm, so arriving around 5:30pm is inside the window. Airbnb “Luxury 2BR Escape | PATH to NYC &amp; MetLife Stadium”, confirmation HMMTENAE2T, 4 guests, already paid ($1,229.52). Host line: +1 786-566-0309. The final leg from Nay Aug is roughly 110 miles / ~1 hr 50 min in usual traffic. Unload everything here before returning the car — you will not have the car afterwards.', url:'https://www.google.com/maps/search/?api=1&query=272+Hoboken+Avenue%2C+Jersey+City%2C+NJ+07306', urlLabel:'📍 Open in Google Maps' },
      { type:'drive', text:'~2.5 miles · ~10–15 min from the Airbnb to the Avis counter at Newport Centre Mall. Leave by ~6:30pm; this is the hard deadline of the day',
        route:{ from:'272 Hoboken Avenue, Jersey City, NJ 07306', to:'Avis Car Rental, 30 Mall Drive West, Jersey City, NJ 07310' } },
      { type:'activity', icon:'🔑', title:'By 7:00pm · Return the Avis car — Newport Centre Mall (JC3)', sub:'30 Mall Dr W, Jersey City, NJ 07310, main level of the centre by the elevator · reservation #25622224IL5. <strong>Not EWR</strong> — the drop-off on the confirmation is this city location, and Mon–Fri hours are 7:30am–7:00pm, so 7:00pm is when the branch closes. Refuel first, unpair phones from the car, and check for after-hours key-drop by calling +1 201-217-8209 if the drive is running late. Walk or take the PATH/light rail back to the Airbnb — roughly 10 minutes by car, longer on foot.', url:'https://www.google.com/maps/search/?api=1&query=Avis+Car+Rental%2C+30+Mall+Drive+West%2C+Jersey+City%2C+NJ+07310', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🚆', title:'From tonight · no car for the rest of the trip', sub:'Oct 5–15 is car-free by design: the rental ends tonight. Jersey City and Hoboken both sit on the PATH, and the Oct 15 run to EWR will need a taxi/rideshare or NJ Transit rather than a car.' },
    ]
  },
  d12: {
    date: '2026-10-06', title: 'AMNH + Central Park',
    badge: 'explore', badgeLabel: 'Museum',
    booked: [
      { label: 'AMNH — reserve a timed-entry slot online (walk-up is possible but the line is not)', must: false },
    ],
    content: [
      { type:'activity', icon:'🚆', title:'~8:45am · PATH from Journal Square to 33rd St', sub:'From 272 Hoboken Avenue the nearest PATH is Journal Square; take the JSQ–33rd St line to 33rd St, then the uptown C (or B on a weekday) to 81st St–Museum of Natural History, which surfaces inside the museum. Budget ~60–70 min door to door with a stroller and allow for elevator detours.' },
      { type:'activity', icon:'🦕', title:'10:00am–1:30pm · American Museum of Natural History', sub:'200 Central Park West at 79th St · open daily 10am–5:30pm. Reserve a timed-entry slot online before the trip — general admission is $37 per adult for out-of-state visitors and ticketed special exhibitions are priced separately and need their own entry time. With a 2- and a 4-year-old the realistic core is the dinosaur halls on the 4th floor, the blue whale in the Hall of Ocean Life and the Gilder Center; do not try to cover the building.', url:'https://www.amnh.org/plan-your-visit', urlLabel:'🎟 Hours &amp; tickets' },
      { type:'activity', icon:'🥪', title:'~1:30pm · Lunch', sub:'Museum food court on the lower level is the least-friction option with small children; otherwise Columbus Ave between 79th and 81st has quick counter food a block from the exit.' },
      { type:'activity', icon:'🌳', title:'2:30pm–4:30pm · Central Park', sub:'Cross Central Park West and use the Diana Ross Playground at W 81st St, then the Great Lawn / Turtle Pond if the girls still have energy. Free, open dawn to 1am, and this is the natural decompression after a museum morning.', url:'https://www.google.com/maps/search/?api=1&query=Diana+Ross+Playground%2C+Central+Park+West+at+81st+Street%2C+New+York%2C+NY', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🚶', title:'Adults-only alternative: Ramble → Bethesda Terrace walk', tag:'optional', sub:'If one adult wants a non-kid hour, the walk south from the Turtle Pond through the Ramble to Bethesda Terrace and the Lake is the best adult wander in the park and rejoins the playground group easily. Roughly 45–60 min at a slow pace, no tickets.', url:'https://www.google.com/maps/search/?api=1&query=Bethesda+Terrace%2C+Central+Park%2C+New+York%2C+NY' },
      { type:'activity', icon:'🌇', title:'~5:00pm · Back to Jersey City', sub:'Reverse the PATH trip before the worst of the evening rush if possible. Dinner at the apartment — this is the first full day after the long Niagara drive.' },
    ]
  },
  d12b: {
    date: '2026-10-07', title: 'Children\'s Museum of Manhattan + Hippo Playground',
    badge: 'explore', badgeLabel: 'Kids',
    content: [
      { type:'activity', icon:'🎨', title:'10:00am–1:00pm · Children\'s Museum of Manhattan', sub:'212 W 83rd St, between Broadway and Amsterdam · open Tue–Sun 10am–5pm, <strong>closed Mondays</strong> — Wed Oct 7 is a normal open day. Five floors built for exactly this age range, with daily drop-in programs included in admission. Tickets are sold online (about $1 cheaper) or at the door; all-day re-entry. Take the PATH to 33rd St and the 1 train to 86th St.', url:'https://cmom.org/visit/', urlLabel:'🎟 Hours &amp; tickets' },
      { type:'activity', icon:'🥪', title:'~1:00pm · Lunch on Amsterdam Ave', sub:'Plenty of casual, stroller-tolerant counter places within two blocks of the museum. Nothing booked.' },
      { type:'activity', icon:'🦛', title:'2:00pm–4:00pm · Hippo Playground, Riverside Park', sub:'W 91st St &amp; Riverside Dr · roughly a 10-minute walk northwest of the museum. Free, sprinklers off by October, hippo sculptures, climbing structures and shade. The classic pairing with a CMOM morning.', url:'https://www.google.com/maps/search/?api=1&query=Hippo+Playground%2C+West+91st+Street+and+Riverside+Drive%2C+New+York%2C+NY+10024', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🚶', title:'Adults-only alternative: Riverside Park promenade walk', tag:'optional', sub:'From the playground the Riverside Park promenade runs south along the Hudson to the 79th St Boat Basin — flat, quiet, good fall colour and skyline views across to New Jersey. A 30–45 min walk with no tickets and no children required.', url:'https://www.google.com/maps/search/?api=1&query=Riverside+Park+79th+Street+Boat+Basin%2C+New+York%2C+NY' },
      { type:'activity', icon:'🚆', title:'~4:30pm · Home before rush hour', sub:'1 train to 34th St, PATH back to Journal Square. Short day on purpose — tomorrow is the long Coney Island run.' },
    ]
  },
  d12c: {
    date: '2026-10-08', title: 'NY Aquarium, Coney Island',
    badge: 'explore', badgeLabel: 'Aquarium',
    content: [
      { type:'activity', icon:'🚆', title:'~8:45am · Long transit day — leave early', sub:'Journal Square PATH → 33rd St, then the D or N to Coney Island–Stillwell Ave, or the F/Q to W 8th St–NY Aquarium, which is the closest station and lands at the gate. Budget 90 minutes each way; this is the longest transit day of the NJ stretch and it is the reason the aquarium gets a whole day.' },
      { type:'activity', icon:'🐠', title:'10:00am–2:00pm · New York Aquarium', sub:'602 Surf Ave, Brooklyn, NY 11224 · Sep 8 – Oct 31 hours are 10:00am–5:00pm with last entry at 4:00pm. 2026 rates: $29.95 adult and $25.95 child (3–12) off-peak, $32.95 / $27.95 peak; 2 and under free. Buy online to skip the gate queue. Ocean Wonders: Sharks!, the sea-lion demonstrations and the touch pools are the parts that hold a 4-year-old.', url:'https://nyaquarium.com/plan-your-visit/hours-and-rates', urlLabel:'🎟 Hours &amp; rates' },
      { type:'activity', icon:'🎡', title:'2:00pm–3:30pm · Coney Island boardwalk', sub:'The aquarium sits directly on the Riegelmann Boardwalk. Walk west to the beach and Luna Park; note that in October Luna Park runs a reduced weekend-leaning schedule, so treat rides as a bonus, not the plan. Nathan\'s on Surf Ave is the obvious late lunch.' },
      { type:'activity', icon:'🚶', title:'Adults-only alternative: boardwalk to Brighton Beach', tag:'optional', sub:'East along the boardwalk from the aquarium is about 20 minutes to Brighton Beach and its Russian bakeries and food shops — completely flat, free, and a genuinely different corner of New York from the rest of this week.', url:'https://www.google.com/maps/search/?api=1&query=Brighton+Beach+Boardwalk%2C+Brooklyn%2C+NY' },
      { type:'activity', icon:'🔬', title:'Easier backup: Liberty Science Center', tag:'optional', sub:'222 Jersey City Blvd, Liberty State Park, Jersey City · Mon–Thu 10am–4pm. If the weather is bad or nobody has a 3-hour round trip in them, this is 15 minutes from the Jersey City apartment by light rail instead of 90 minutes each way, and it covers the same "big indoor science day" need. Buy admission online; planetarium shows are extra.', url:'https://lsc.org/buy-tickets/admission' },
    ]
  },
  d13: {
    date: '2026-10-09', title: 'Checkout Jersey City → family away Oct 9–11',
    badge: 'flex', badgeLabel: 'Away',
    content: [
      { type:'activity', icon:'🧳', title:'By 11:00am · Check out of 272 Hoboken Avenue Apt 8', sub:'272 Hoboken Avenue Apt 8, Jersey City, NJ 07306 · checkout is 11:00am on Fri Oct 9, confirmation HMMTENAE2T. Take everything — the Hoboken apartment is not available until 4:00pm on Mon Oct 12.', url:'https://www.google.com/maps/search/?api=1&query=272+Hoboken+Avenue%2C+Jersey+City%2C+NJ+07306', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🧭', title:'Oct 9, 10 and 11 · own out-of-town trip', sub:'These three days are the family\'s own separate trip away from the New York area, so nothing is planned here and no NYC sightseeing is scheduled. Lodging for these three nights sits with that trip, not with the two NJ Airbnbs. The dashboard picks up again on Mon Oct 12 with the Hoboken check-in.' },
      { type:'activity', icon:'🚆', title:'No car for the transfer', sub:'The rental went back on Oct 5, so getting out of Jersey City on the 9th and back to Hoboken on the 12th has to work on PATH, NJ Transit or a rideshare with four people, luggage and a stroller.' },
    ]
  },
  d14: {
    date: '2026-10-12', title: 'American Girl Place → Hoboken check-in',
    badge: 'explore', badgeLabel: 'Kids',
    booked: [
      { label: 'American Girl Café — reserve a table if you want lunch there (the café takes reservations and fills up)', must: false },
    ],
    content: [
      { type:'activity', icon:'🧸', title:'10:30am–1:00pm · American Girl Place, Rockefeller Center', sub:'75 Rockefeller Plaza, at W 51st St · Mon–Fri 10am–6pm. The flagship store is free to walk into; the two older girls can do the doll salon, ear piercing, the create-your-own studio and the café together while the little ones cycle through more slowly. The in-store café now takes reservations — book it if you want lunch there rather than queuing. This is the "something for the big girls" slot of the trip.', url:'https://www.americangirl.com/pages/nyc-store', urlLabel:'🔗 Store &amp; café info' },
      { type:'activity', icon:'🌰', title:'1:00pm–2:15pm · Rockefeller Center plaza + lunch', sub:'Straight out of the store: the sunken plaza, the Channel Gardens and the Atlas statue are all a two-minute walk and cost nothing. Lunch at the American Girl café if reserved, otherwise the concourse below Rockefeller Plaza has fast options with seating and restrooms.', url:'https://www.google.com/maps/search/?api=1&query=Rockefeller+Center%2C+45+Rockefeller+Plaza%2C+New+York%2C+NY+10111', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🎠', title:'2:30pm–3:45pm · Back to Hoboken, Pier A Park', sub:'PATH from 33rd St to Hoboken Terminal, then a short walk to Pier A Park and Church Square Park playground. This is the afternoon family block: lawn, skyline, playground, and it is five minutes from the apartment so luggage and tired children are both manageable.', url:'https://www.google.com/maps/search/?api=1&query=Pier+A+Park%2C+Hoboken%2C+NJ+07030', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🏠', title:'From 4:00pm · Check in at 452 1st Street Apt 3, Hoboken', sub:'452 1st Street Apt 3, Hoboken, NJ 07030 · check-in from 4:00pm Mon Oct 12, checkout 11:00am Thu Oct 15. Airbnb “Jazz Suite — King Bed Studio, 15 Min to NYC”, confirmation HMT9MD8KEN, 4 guests, paid $773.39. Host: Luxanto Vacation Rentals (Shawn Cunningham), +1 702-895-7777. Pier A Park is a 10-minute walk away, so time the afternoon to land here at 4:00pm rather than dragging bags around midtown.', url:'https://www.google.com/maps/search/?api=1&query=452+1st+Street%2C+Hoboken%2C+NJ+07030', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🚶', title:'Adults-only alternative: Hoboken waterfront walkway', tag:'optional', sub:'After check-in, the Hudson River Walkway runs flat and continuous from Pier A north past Pier C and the 14th St Viaduct with the full Manhattan skyline opposite — the best free evening walk of the NJ stay, about 30–40 minutes one way.', url:'https://www.google.com/maps/search/?api=1&query=Hoboken+Waterfront+Walkway%2C+Hoboken%2C+NJ' },
    ]
  },
  d14b: {
    date: '2026-10-13', title: 'Museum of Ice Cream + SoHo + Pier 26',
    badge: 'explore', badgeLabel: 'Museum',
    booked: [
      { label: 'Museum of Ice Cream — timed entry, online booking required; check the calendar shows Tue Oct 13', must: true },
    ],
    content: [
      { type:'activity', icon:'🍦', title:'11:00am–1:00pm · Museum of Ice Cream', sub:'558 Broadway, SoHo · 13 installations over three floors, unlimited ice cream samples, and the sprinkle pool. <strong>All visitors must book a timed slot online before arriving</strong> — entry windows are 30 minutes. General admission starts around $39 per ticket for ages 3+, under-2s free; prices move with date and time. One caution: the official site currently lists Tuesday hours, but several third-party guides list Tuesday as the museum\'s closed day — check that the booking calendar actually offers Tue Oct 13 before building the day around it, and swap with Oct 14 if not.', url:'https://www.museumoficecream.com/new-york-city/', urlLabel:'🎟 Book timed entry' },
      { type:'activity', icon:'🛍', title:'1:00pm–2:30pm · SoHo + lunch', sub:'The museum sits on Broadway in the middle of SoHo. Cast-iron blocks, Prince and Spring Streets, and easy lunch in any direction. Cobblestones are rough on a stroller — Broadway and Lafayette are the smoothest north-south runs.' },
      { type:'activity', icon:'🐟', title:'3:00pm–5:00pm · Pier 26, Hudson River Park', sub:'Entrance at N Moore St &amp; West St, Tribeca · about a 20-minute walk west from SoHo. Free. The science playground has two climbable sturgeon sculptures and nets; the Tide Deck at the western end is an engineered salt marsh that floods with the tide and is open to the public on staff-led tours only — check the day\'s schedule on arrival.', url:'https://hudsonriverpark.org/activities/tide-deck/', urlLabel:'🔗 Pier 26 &amp; Tide Deck' },
      { type:'activity', icon:'🚶', title:'Adults-only alternative: Hudson River Park north to the High Line', tag:'optional', sub:'From Pier 26 the waterfront path runs flat and uninterrupted north through Tribeca and the West Village to Gansevoort St, where the High Line begins and carries on above the street to Hudson Yards. Free, no booking, and about an hour at an unhurried pace.', url:'https://www.thehighline.org/visit/' },
    ]
  },
  d14c: {
    date: '2026-10-14', title: 'DUMBO — Space Club + Brooklyn waterfront',
    badge: 'explore', badgeLabel: 'Kids',
    content: [
      { type:'activity', icon:'🚀', title:'10:00am–12:00pm · Space Club DUMBO', sub:'254 Plymouth St, Brooklyn · open daily, listed 8am–7pm. Three levels of slides, trampolines, ball and bead pits, Magna-Tile and Lego stations, plus a café for the adults. A pass covering one adult and one child runs about $39 for two hours, so two adults and two children is roughly two passes — book the slot online, it is a capacity-limited play space rather than a drop-in park. From Hoboken: PATH to World Trade Center, then the A/C one stop to High St, or the F to York St.', url:'https://spaceclub.com/', urlLabel:'🎟 Passes &amp; hours' },
      { type:'activity', icon:'🎠', title:'12:30pm–3:00pm · Brooklyn Bridge Park + Jane\'s Carousel', sub:'Five minutes from Plymouth St: Jane\'s Carousel in its glass pavilion at the foot of the bridge ($2 a ride, closed Tuesdays but open Wednesdays), the Main Street playground and the Pebble Beach view of the Manhattan Bridge from Washington St. Lunch at Time Out Market or the Empire Stores on Water St.', url:'https://www.google.com/maps/search/?api=1&query=Jane%27s+Carousel%2C+Brooklyn+Bridge+Park%2C+Brooklyn%2C+NY+11201', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🚶', title:'Adults-only alternative: Brooklyn Heights Promenade', tag:'optional', sub:'A ten-minute climb up from the park to Columbia Heights and then the Promenade — a third of a mile of bench-lined balcony over the BQE facing Lower Manhattan and the harbour. Free, flat once you are up there, and the best skyline view on this side of the river.', url:'https://www.google.com/maps/search/?api=1&query=Brooklyn+Heights+Promenade%2C+Brooklyn%2C+NY+11201' },
      { type:'activity', icon:'🧳', title:'Evening · Last night — pack', sub:'Back to Hoboken in the late afternoon. Checkout tomorrow is 11:00am and the flight is not until 21:00, so anything that can be packed tonight should be.' },
    ]
  },
  d15: {
    date: '2026-10-15', title: 'Checkout → EWR → EL AL LY0026 home',
    badge: 'drive', badgeLabel: 'Fly',
    content: [
      { type:'activity', icon:'🧳', title:'By 11:00am · Check out of 452 1st Street Apt 3', sub:'452 1st Street Apt 3, Hoboken, NJ 07030 · checkout 11:00am Thu Oct 15, confirmation HMT9MD8KEN. The flight is not until 21:00, so arrange luggage storage, a late-afternoon base or a bag-drop plan for the gap between 11:00am and leaving for the airport.', url:'https://www.google.com/maps/search/?api=1&query=452+1st+Street%2C+Hoboken%2C+NJ+07030', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🚕', title:'~5:00pm · Leave for Newark Liberty, Terminal B', sub:'Hoboken to EWR is roughly 25–35 min by taxi or rideshare in normal traffic — the rental car was returned on Oct 5, so budget for a van-sized rideshare with four people, luggage, a stroller and car seats, or use NJ Transit via Newark Penn Station and the AirTrain. Aim to be at the terminal around 18:00, three hours before departure, for an international EL AL flight.', url:'https://www.google.com/maps/search/?api=1&query=Newark+Liberty+International+Airport+Terminal+B', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'✈️', title:'21:00 · EL AL LY0026 EWR → TLV', sub:'Departs Newark Terminal B at 21:00 Thu Oct 15 and lands at Ben Gurion Terminal 3 at 14:25 on Fri Oct 16. Boeing 787-9, 10 hr 25 min, seats 39G/39H/39J/39K, one checked bag each, reservation code QVYLZC. Note the Friday afternoon arrival when arranging a pickup in Israel.' },
    ]
  },
},

// ── QUICK LINKS ────────────────────────────────────────────
// Compact links shown at the top of the checklist, prefixed by
// meta.quickLinksLabel. Omit (or leave empty) to hide the row.
quickLinks: [
  { label: 'I LOVE NY foliage report', url: 'https://www.iloveny.com/things-to-do/fall/foliage-report/' },
  { label: 'Predictive foliage map', url: 'https://smokymountains.com/fall-foliage-map/' },
],

// ── RESOURCES (trip checklist) ─────────────────────────────
// Each section has: id, icon, title, intro (optional), items[]
// Each item has:
//   key          — stable id for saved state (localStorage)
//   label        — display text
//   type         — booking | info | todo
//   priority     — critical | recommended | optional
//   status       — pending | done  (initial; user taps override it)
//   url          — (optional) direct link
//   dates        — (optional) e.g. "Sep 27 – Oct 2"
//   notes        — (optional) sub-text hint
//   reservation_deadline — (optional) e.g. "2026-08-01"
resources: {
  sections: [
    {
      id: 'flights',
      icon: '✈️',
      title: 'Flights',
      items: [
        { key: 'flight-elal', label: 'EL AL flights ticketed — LY0027 out / LY0026 back', type: 'booking', priority: 'critical', status: 'done', dates: 'Sep 25 · Oct 15', notes: 'Reservation code QVYLZC, all four travellers ticketed. <strong>Out:</strong> LY0027 TLV Terminal 3 dep 00:30 Fri Sep 25 → EWR Terminal B arr 05:15 Fri Sep 25 (11 hr 45). <strong>Back:</strong> LY0026 EWR Terminal B dep 21:00 Thu Oct 15 → TLV Terminal 3 arr 14:25 Fri Oct 16 (10 hr 25). Boeing 787-9 both legs, one checked bag per person, child meals for Aviv and Ella. Seats 45G–45K out, 39G–39K back.', refNote: 'Flight tickets (iCloud)', refUrl: 'https://www.icloud.com/iclouddrive/0afUqBB17d_tyn1tZTOaAH50g#New_flight_tickets' },
        { key: 'flight-esta', label: 'ESTA — US visa waiver application', type: 'booking', priority: 'critical', status: 'pending', url: 'https://esta.cbp.dhs.gov/', notes: 'Apply at least 72 hrs before departure' },
      ]
    },
    {
      id: 'car',
      icon: '🚗',
      title: 'Car Rental — EWR',
      intro: '<strong>Booked with Avis, reservation #25622224IL5.</strong> Pick up at the EWR Rental Car Center (132 Carson Rd, 3rd floor — free AirTrain from any terminal, open 24 hrs) and drop off at <strong>Jersey Cty/Newport Centre Mall, JC3, 30 Mall Dr W, Jersey City</strong> — not at the airport. NY &amp; NJ tolls are fully cashless — accept the agency E-ZPass transponder.',
      items: [
        { key: 'car-book', label: 'Avis SUV booked — Ford Explorer or similar, #25622224IL5', type: 'booking', priority: 'critical', status: 'done', dates: 'Sep 25 6:00am – Oct 5 7:00pm', notes: 'Pick up Newark Liberty Intl Airport (EWR), 132 Carson Rd 3rd floor, Fri Sep 25 2026 at 06:00 AM, +1 973-961-4300, open 24 hrs. Drop off Jersey Cty/Newport Centre Mall JC3, 30 Mall Dr W (main level by the elevator), Jersey City NJ 07310, Mon Oct 5 2026 at 07:00 PM, +1 201-217-8209 — Mon–Fri hours are 7:30am–7:00pm, so 7:00pm is closing time. Unlimited mileage, automatic, estimated total $559.47. A $300-or-full-cost credit-card hold is placed at pickup. Changing the return date, time or location adds fees.', refNote: 'Avis confirmation (Itinerary/Avis.pdf)' },
        { key: 'car-dropoff-note', label: 'Remember: Oct 5–15 is car-free', type: 'info', priority: 'recommended', status: 'pending', dates: 'Oct 5 – 15', notes: 'The rental ends the evening of Oct 5, so the Jersey City and Hoboken stays and the Oct 15 run to EWR all have to work on PATH / NJ Transit / rideshare. Plan the airport transfer for four people with luggage, a stroller and car seats.' },
        { key: 'car-childseat', label: 'Verify child seat availability with rental company', type: 'todo', priority: 'critical', status: 'pending' },
        { key: 'car-ezpass', label: 'Confirm E-ZPass transponder at pickup', type: 'info', priority: 'critical', status: 'pending', url: 'https://www.ezpassnj.com/' },
      ]
    },
    {
      id: 'hotels',
      icon: '🏨',
      title: 'Hotels & Stays',
      intro: 'Five stays are confirmed and paid or guaranteed: Lake Placid, Fir Tree Point (Finger Lakes), Niagara Falls, Jersey City and Hoboken. The three nights between the two NJ Airbnbs — <strong>Oct 9, 10 and 11</strong> — are the family\'s own out-of-town trip and are not covered here by design.',
      items: [
        { key: 'hotel-lp', label: 'Lake Placid Inn: Residences, 2050 Saranac Ave (5 nights) — CONFIRMED', type: 'booking', priority: 'critical', status: 'done', dates: 'Sep 25 – Sep 30', notes: '2050 Saranac Ave, Lake Placid, NY 12946 · check-in Fri Sep 25 from 4:00pm, check-out Wed Sep 30 until 10:00am. Booking.com confirmation 5967.307.623, PIN 9097. Superior apartment, 2 adults + 2 children (ages 1 and 4), US$1,171.47 total including the $80 cleaning fee and 5% city tax. First night charged as a deposit; free private parking, free Wi-Fi; an extra bed/crib was requested. Phone +1 518 523 6162.', refNote: 'Accommodation booking (iCloud)', refUrl: 'https://www.icloud.com/iclouddrive/00cnF63Bkv2tFuED7Waq6EBfg#Lake_placid_accommodation_' },
        { key: 'hotel-fl', label: 'Finger Lakes — Fir Tree Point, 21 Fir Tree Point Rd, Rock Stream (3 nights) — CONFIRMED & PAID', type: 'booking', priority: 'critical', status: 'done', dates: 'Sep 30 – Oct 3', notes: '21 Fir Tree Point Road, Rock Stream, NY 14878 (Seneca Lake, ~20 min north of Watkins Glen) · check-in Wed Sep 30 anytime after 3:00pm, checkout Sat Oct 3 at 10:00am. Confirmation HMWAHEAX5X, hosted by David, total $991.27. Host phone +1 919-605-2977. Directions: 11 km north of Watkins Glen on the west side of Seneca Lake — turn toward the lake on Fir Tree Point Rd; the cottage is the middle green cottage at the bottom of the road. Park to the right of the cottage, facing the signs. Front door code: 4821 — turn the handle on the inside of the door to release the lock. Wi-Fi network: Firtree, password: Cottage21. There is no public share link for this reservation — see Lodging/Finger lakes.pdf.', refNote: 'Confirmed booking, see Lodging/Finger lakes.pdf' },
        { key: 'hotel-niagara', label: 'Hyatt Place Niagara Falls — Queen Room with Sofa Bed (2 nights) — CONFIRMED', type: 'booking', priority: 'critical', status: 'done', dates: 'Oct 3 – Oct 5', url: 'https://www.hyatt.com/hyatt-place/en-US/iagzn-hyatt-place-niagara-falls', notes: '310 Rainbow Blvd South, Niagara Falls, NY 14303 · check-in Sat Oct 3 from 3:00pm, check-out Mon Oct 5 until 11:00am. Booking.com confirmation 6319943337, PIN 6208. Queen Room with Sofa Bed, 2 adults + 2 children (2 and 4), total US$719.34, guaranteed by Mastercard with no prepayment. Free cancellation until Oct 2 11:59pm EDT; after that the first night (US$340.20) is charged. Breakfast US$11 per person per night and parking at a seasonal daily rate are both extra. Photo ID + credit card at check-in. Phone +1 716-285-5000.', refNote: 'Booking.com confirmation (Lodging/Hyatt Place Niagara Falls reservation.pdf)' },
        { key: 'hotel-jc-airbnb', label: 'Airbnb — 272 Hoboken Avenue Apt 8, Jersey City (4 nights) — CONFIRMED & PAID', type: 'booking', priority: 'critical', status: 'done', dates: 'Oct 5 – Oct 9', notes: '272 Hoboken Avenue Apt 8, Jersey City, NJ 07306 · check-in Mon Oct 5 from 4:00pm, checkout Fri Oct 9 at 11:00am. “Luxury 2BR Escape | PATH to NYC &amp; MetLife Stadium”, confirmation code HMMTENAE2T, 4 guests, hosted by Luxury Rentals USA, $1,229.52 already paid. Host phone +1 786-566-0309. There is no public share link for this reservation — see Lodging/Airbnb272 Hoboken .pdf.', refNote: 'Confirmed booking, see Lodging/Airbnb272 Hoboken .pdf' },
        { key: 'hotel-nj-gap', label: 'Oct 9 – Oct 11 — family away on its own trip, no NJ lodging needed', type: 'info', priority: 'recommended', status: 'pending', dates: 'Oct 9 – Oct 12', notes: 'Checkout from 272 Hoboken Ave is 11:00am Fri Oct 9 and check-in at 452 1st Street is 4:00pm Mon Oct 12. The three nights in between are the family\'s own out-of-town trip, so no NJ lodging and no NYC sightseeing are planned for them — the day cards deliberately stay empty for Oct 9–11. Only two things to carry: take everything out of Jersey City on the 9th, and remember the rental car went back on Oct 5, so both transfers have to work on transit or a rideshare with four people, luggage and a stroller.' },
        { key: 'hotel-hoboken-airbnb', label: 'Airbnb — 452 1st Street Apt 3, Hoboken (3 nights) — CONFIRMED & PAID', type: 'booking', priority: 'critical', status: 'done', dates: 'Oct 12 – Oct 15', notes: '452 1st Street Apt 3, Hoboken, NJ 07030 · check-in Mon Oct 12 from 4:00pm, checkout Thu Oct 15 at 11:00am. “Jazz Suite — King Bed Studio 15 Min to NYC”, confirmation code HMT9MD8KEN, 4 guests, hosted by Luxanto Vacation Rentals (Shawn Cunningham), total $773.39. Host phone +1 702-895-7777. Checkout is 11:00am but the flight home is not until 21:00 — plan luggage storage for the afternoon. There is no public share link for this reservation — see Lodging/Airbnb 452 1st street.pdf.', refNote: 'Confirmed booking, see Lodging/Airbnb 452 1st street.pdf' },
      ]
    },
    {
      id: 'activities',
      icon: '🎟',
      title: 'Reservations',
      intro: '<strong>Book these before you fly.</strong> Four things on this trip genuinely cannot be done as a walk-up: the race (already registered), the <strong>Farm Sanctuary tour on Oct 2</strong>, the <strong>Museum of Ice Cream on Oct 13</strong> (all visitors must hold an online timed slot), and the Corning Make-Your-Own-Glass slot if you want a specific time. Everything marked <em>Recommended</em> can be bought at the door but is cheaper in queue time booked ahead. Two things must <em>not</em> be pre-booked — Cave of the Winds is same-day only, and the Whiteface toll is sold in person at the Toll House. The calendar above marks every day that needs a booking with 🎟.',
      items: [
        { key: 'act-marathon', label: 'Adirondack Half Marathon', type: 'booking', priority: 'critical', status: 'done', url: 'https://www.adirondackmarathon.org/half-marathon', notes: 'Sun Sep 27 · point-to-point, town of Adirondack → Schroon Lake · packet pickup 6:45–7:45am at the pavilion above the finish line · runner shuttle from Route 9 beside the Adirondack Inn, departs 7:40–8:05am' },
        { key: 'act-packet-pickup', label: 'Collect race packet — Sep 27, target 7am', type: 'todo', priority: 'critical', status: 'pending', url: 'https://www.adirondackmarathon.org/half-marathon', dates: 'Sep 27', notes: 'Packet pickup 6:45–7:45am at the pavilion above the finish line in Schroon Lake. Bring photo ID. Arrive by ~7:00am to leave buffer before the 7:40–8:05am shuttle.' },
        { key: 'act-fortti', label: 'Fort Ticonderoga admission (Sep 27 afternoon option A)', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://fortticonderoga.org/visit/buy-tickets/', dates: 'Sep 27', reservation_deadline: '2026-09-26', notes: 'Open Tue–Sun through Oct 25, 9:30am–5pm (last admission 4:30pm); Heroic Corn Maze included, 10am–4:30pm, last daytime entry 4pm. Online purchase is encouraged but the booth also sells same-day, so this is refundable-by-doing-nothing: buy ahead only once you are reasonably sure. Both race-day options stay open — do not book anything that forces the choice.' },
        { key: 'act-stonebridge', label: 'Natural Stone Bridge & Caves (Sep 27 afternoon option B)', type: 'info', priority: 'optional', status: 'pending', url: 'https://stonebridgeandcaves.com/plan-your-trip/', dates: 'Sep 27', notes: 'No booking needed — tickets are sold on site. Off-peak hours Sep 8–Oct 18: 10am–5pm, last tour ticket 3:30pm. Confirm hours by phone that morning if the weather is marginal. The ~1.2 km trail has 500+ uneven steps.' },
        { key: 'act-wildcenter', label: 'The Wild Center — dated tickets with arrival time slot', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://wildcenter.ticketapp.org/portal/pages/tickets', dates: 'Sep 29', reservation_deadline: '2026-09-27', notes: 'Sep 29 · pick a slot and stay until closing — the slot is arrival time only. The Wild Center reports record visitation, so a reserved slot is worth having even on a Tuesday. The TROLLS exhibition runs through Oct 31.' },
        { key: 'act-greenlakes', label: 'Green Lakes State Park (Sep 30 transfer stop)', type: 'info', priority: 'optional', status: 'pending', url: 'https://parks.ny.gov/visit/state-parks/green-lakes-state-park', dates: 'Sep 30', notes: 'No booking of any kind. Open year-round dawn–dusk. The $10 vehicle fee is charged daily only Memorial Day through Labor Day, so Sep 30 is normally free — carry $10 in case it is still being collected.' },
        { key: 'act-corning', label: 'Corning Museum of Glass — Make Your Own Glass slot', type: 'booking', priority: 'critical', status: 'pending', url: 'https://visit.cmog.org/onsite-visitor-guide/make-your-own-glass', dates: 'Oct 1', reservation_deadline: '2026-09-25', notes: 'Oct 1 · museum admission itself is walk-up, but Make Your Own Glass sells out and should be reserved. The Studio is across the parking lot; arrive 10 min early. Important: everything except sandblasted pieces goes through overnight annealing and can only be collected the next day after 12pm — so either choose a sandblasted project, plan a 45-min Corning round trip on Oct 2, or arrange shipping at the counter. You leave Watkins Glen at 8:15am on Oct 3.' },
        { key: 'act-farmsanctuary', label: 'Farm Sanctuary guided tour — ADVANCE REGISTRATION REQUIRED', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.farmsanctuary.org/the-sanctuaries/watkins-glen-ny/', dates: 'Oct 2', reservation_deadline: '2026-09-25', notes: 'Oct 2 afternoon · every visit requires advance registration; there is no walk-up. Tours run about an hour; arrive 15 min early. October hours are Fri/Sat/Sun, so Fri Oct 2 fits the published schedule, but a specific afternoon slot has not been confirmed — book first, then set the afternoon around the time you are given. Questions: 607-583-2225 x278.' },
        { key: 'act-highfalls', label: 'High Falls Gorge tickets', type: 'booking', priority: 'optional', status: 'pending', url: 'https://highfallsgorge.com/tickets/', dates: 'Sep 28', notes: 'Sep 28 afternoon · sold online or at the main lodge admission counter, so advance purchase is convenience only. 2026 season runs May 2 – Oct 25.' },
        { key: 'act-whiteface', label: 'Whiteface Veterans’ Memorial Highway — do NOT pre-book', type: 'info', priority: 'recommended', status: 'pending', url: 'https://whiteface.com/todo/whiteface-veterans-memorial-highway/', dates: 'Sep 28', notes: 'Fall admission is sold in person at the Toll House only. Open daily 8:45am–5:30pm through Oct 12. Weather-dependent — check the morning of, and reverse the day with High Falls Gorge if the summit is clouded in.' },
        { key: 'act-maid', label: 'Maid of the Mist — official online voucher', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.maidofthemist.com/schedule-pricing/', dates: 'Oct 4', notes: 'Buy the voucher ahead — it skips the ticket-window queue but is <strong>not</strong> a timed reservation: boarding is first-come, first-served and boats leave about every 15 min. Valid any 2026 operating day, exchanged at the booth. 2026 prices: $30.25 adult, $19.75 ages 6–12, age 5 and under free. Season runs Apr 24 – Nov 8, first boat 9am daily.' },
        { key: 'act-cave', label: 'Cave of the Winds — same-day only, do NOT pre-book', type: 'todo', priority: 'recommended', status: 'pending', url: 'https://www.niagarafallsstatepark.com/attractions/cave-of-the-winds/', notes: 'Oct 4 · tickets are not sold online. Buy first thing at the Welcome Center / Cave desk for the earliest slot at or after 10:45am. Pack water-safe shoes.' },
        { key: 'act-canada-docs', label: 'Verify Canadian entry documents for every traveler', type: 'todo', priority: 'critical', status: 'pending', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html', notes: 'Planned pedestrian crossing Oct 4. Carry every adult and child passport; use the official checker for each traveler and re-check shortly before travel.' },
      ]
    },
    {
      id: 'nyc',
      icon: '🗽',
      title: 'NYC days from the NJ base',
      intro: 'Six sightseeing days run out of the two NJ Airbnbs: <strong>Oct 6, 7, 8, 12, 13 and 14</strong>. Oct 9–11 is the family\'s own out-of-town trip and has nothing planned. Only one of these venues is impossible without booking — the <strong>Museum of Ice Cream</strong> — but three more are meaningfully better with a slot held in advance. Everything here is reachable on PATH and the subway; there is no car after Oct 5.',
      items: [
        { key: 'nyc-amnh', label: 'AMNH — reserve a timed-entry slot', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://www.amnh.org/plan-your-visit', dates: 'Oct 6', reservation_deadline: '2026-10-04', notes: '200 Central Park West at 79th St · open daily 10am–5:30pm. General admission $37 per adult for out-of-state visitors; children are cheaper and under-2s free. Walk-up is possible, but entry is timed in 30-minute windows and the queue on the steps is the thing a reservation actually buys you. Ticketed special exhibitions cost extra and need their own entry time — decide before booking whether you want one.' },
        { key: 'nyc-cmom', label: 'Children\'s Museum of Manhattan tickets', type: 'booking', priority: 'optional', status: 'pending', url: 'https://cmom.org/visit/', dates: 'Oct 7', notes: '212 W 83rd St · Tue–Sun 10am–5pm, <strong>closed Mondays</strong> — Wed Oct 7 is a normal open day, so the usual Monday warning does not apply. Tickets are sold at the door or online for about $1 less; admission is all-day with re-entry and includes the drop-in programs. No advance slot required.' },
        { key: 'nyc-aquarium', label: 'New York Aquarium tickets', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://nyaquarium.com/plan-your-visit/hours-and-rates', dates: 'Oct 8', notes: '602 Surf Ave, Coney Island · Sep 8–Oct 31 hours 10am–5pm with <strong>last entry 4:00pm</strong>, which matters because it is ~90 min each way from Jersey City. Off-peak $29.95 adult / $25.95 child (3–12); 2 and under free. Buying online skips the gate queue but is not required.' },
        { key: 'nyc-lsc-backup', label: 'Liberty Science Center — the Oct 8 backup, no booking needed', type: 'info', priority: 'optional', status: 'pending', url: 'https://lsc.org/buy-tickets/admission', dates: 'Oct 8', notes: '222 Jersey City Blvd, Liberty State Park · Mon–Thu 10am–4pm. Fifteen minutes from the Jersey City apartment by light rail. Use it if the weather is bad or the Coney Island round trip is too much; do not book both.' },
        { key: 'nyc-americangirl', label: 'American Girl Café — reserve a table', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://www.americangirl.com/pages/nyc-store', dates: 'Oct 12', reservation_deadline: '2026-10-05', notes: '75 Rockefeller Plaza · store open Mon–Fri 10am–6pm and free to enter, so the visit itself needs nothing booked. The in-store café now takes reservations and is the part that fills up; salon and ear-piercing appointments are also worth booking if the older girls want them. Confirm current hours and services by phone before the day — this is a flagship retail store, not a museum, and its programming changes.' },
        { key: 'nyc-moic', label: 'Museum of Ice Cream — TIMED ENTRY, ONLINE BOOKING REQUIRED', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.museumoficecream.com/new-york-city/', dates: 'Oct 13', reservation_deadline: '2026-10-06', notes: '558 Broadway, SoHo · <strong>all visitors must book online before arriving</strong>; entry windows are 30 minutes, with 15 minutes\' grace either side. From about $39 per ticket for ages 3+, under 2 free, priced by date and time. <strong>Check the booking calendar actually offers Tue Oct 13</strong> — the official site lists Tuesday hours but several third-party guides list Tuesday as the closed day. If Tuesday is closed, swap the Oct 13 and Oct 14 plans.' },
        { key: 'nyc-spaceclub', label: 'Space Club DUMBO — book the play slot', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://spaceclub.com/', dates: 'Oct 14', reservation_deadline: '2026-10-12', notes: '254 Plymouth St, Brooklyn · open daily, listed 8am–7pm. A pass covers one adult and one child for two hours at about $39, so the family needs two. It is a capacity-limited indoor play space rather than a park — reserve the slot, and call +1 212-812-2996 if the site does not show Oct 14.' },
        { key: 'nyc-transit', label: 'Set up contactless / OMNY for the subway and PATH', type: 'todo', priority: 'recommended', status: 'pending', url: 'https://omny.info/', dates: 'Oct 6 – 14', notes: 'PATH and the subway both take contactless tap-to-pay, so no MetroCard is needed — but check each adult card works before the first trip. Children under 44 inches ride the subway free with a paying adult. Plan stroller routes: not every station has an elevator, and the 81st St and W 8th St stations are the ones that matter on Oct 6 and Oct 8.' },
      ]
    },
    {
      id: 'ops',
      icon: '📋',
      title: 'Before You Fly',
      items: [
        { key: 'ops-offline-maps', label: 'Download offline Google Maps (all regions)', type: 'todo', priority: 'critical', status: 'pending', url: 'https://support.google.com/maps/answer/6291838', notes: 'Needs Wi-Fi — do before departure' },
        { key: 'ops-esim', label: 'Buy US eSIM — Airalo or Holafly', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.airalo.com/', notes: 'Activate 1 day before landing' },
        { key: 'ops-packing', label: 'Pack: layers, carrier, stroller, wet shoes, dry bag, snacks & bottles', type: 'todo', priority: 'critical', status: 'pending', notes: 'Niagara kit: water-safe shoes, dry socks/clothes and towel. For the Rainbow Bridge return toll, carry $1 in US quarters per traveler or use contactless payment.' },
      ]
    }
  ]
},

};
