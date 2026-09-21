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
  [42.3806,-76.8733], // Watkins Glen base
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
  [40.6895,-74.1745]  // ★ NJ family base
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
  { lat:40.6895, lng:-74.1745, label:'NJ', color:'#D97706', regionId:'nj',           title:'NJ Family Base / EWR',       dates:'Oct 5–15' },
  { lat:44.2795, lng:-73.9799, label:'LP', color:'#059669', regionId:'adirondacks',  title:'Lake Placid / Mirror Lake',  dates:'Sep 25 – 30' },
  { lat:42.3806, lng:-76.8733, label:'WG', color:'#7C3AED', regionId:'finger-lakes', title:'Watkins Glen State Park',    dates:'Sep 30 – Oct 3' },
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
  { lat:43.0862, lng:-79.0633, tier:2, cat:'activity', icon:'🏨', name:'Hyatt Place Niagara Falls',        area:'310 Rainbow Blvd S, Niagara Falls, NY', sub:'Recommended base for Oct 3–5: 0.23 mi from Maid of the Mist, indoor pool, self-parking and rooms with two queen beds plus sofa-sleeper. Book a refundable rate; breakfast and parking must be verified.', url:'https://www.hyatt.com/hyatt-place/en-US/iagzn-hyatt-place-niagara-falls' },
  { lat:43.0856, lng:-79.0664, tier:2, cat:'activity', icon:'⛴', name:'Maid of the Mist',                 area:'Niagara Falls, NY', sub:'Must-do Oct 4 at opening. 2026 October hours: daily 9am–5pm. No timed reservations; boarding is first-come, first-served. Online voucher must be exchanged at the booth. Stroller parking recommended.', url:'https://www.maidofthemist.com/schedule-pricing/' },
  { lat:43.0793, lng:-79.0743, tier:2, cat:'activity', icon:'💨', name:'Cave of the Winds',                area:'Niagara Falls, NY', sub:'Strongly recommended Oct 4 after Maid. Timed, same-day ticket; buy first thing at the Welcome Center or Cave. Oct 4 hours 9am–6:15pm. Bring wet-safe shoes; sandals are no longer issued.', url:'https://www.niagarafallsstatepark.com/attractions/cave-of-the-winds/' },
  { lat:43.0786, lng:-79.0760, tier:2, cat:'scenic',   icon:'🏝', name:'Goat Island',                      area:'Niagara Falls, NY', sub:'Oct 5 quiet morning: Terrapin Point + Three Sisters Islands, 45–60 min. Free; most upper-park paths are stroller-friendly.', gq:'Goat Island, Niagara Falls State Park NY' },
  { lat:43.0900, lng:-79.0677, tier:2, cat:'scenic',   icon:'🌉', name:'Rainbow Bridge pedestrian crossing', area:'Niagara Falls, NY / ON', sub:'Oct 4 Canadian-side visit on foot. Bring valid passports for every traveler. Return-to-US pedestrian toll: $1 USD in quarters, $1.25 CAD cash, or $1.25 CAD contactless per person.', url:'https://www.niagarafallsbridges.com/crossing-info/pedestrian-crossing-information' },
  { lat:43.0816, lng:-79.0784, tier:2, cat:'scenic',   icon:'🇨🇦', name:'Queen Victoria Park + Table Rock', area:'Niagara Falls, ON 🇨🇦', sub:'Oct 4 late afternoon through illumination: the broad Canadian panorama of American + Horseshoe Falls. Use the stroller; allow time for customs in both directions.', gq:'Table Rock Centre, Niagara Falls Ontario' },
  { lat:43.0870, lng:-79.0680, tier:3, cat:'scenic',   icon:'🌈', name:'Illumination + fireworks',         area:'Niagara Falls, NY / ON', sub:'Oct 4: illumination starts 6:15pm. Fireworks are scheduled at 10pm, weather permitting; treat them as optional for the children.', url:'https://www.niagaraparks.com/events/event/niagara-falls-fireworks-series' },
  { lat:43.0791, lng:-79.0789, tier:3, cat:'activity', icon:'🚇', name:'Journey Behind the Falls',         area:'Niagara Falls, ON 🇨🇦', sub:'Optional only if Cave of the Winds is unavailable or the family has unusual energy. Do not stack a third wet attraction into the core day.', url:'https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls/' },

  // — NJ base —
  { lat:40.7430, lng:-74.1720, tier:2, cat:'activity', icon:'🏛', name:'The Newark Museum of Art', area:'Newark, NJ',       sub:'Thu–Sun 12–5pm, $10/adult. Fully accessible.' },
  { lat:40.7660, lng:-74.1730, tier:2, cat:'scenic',   icon:'🌳', name:'Branch Brook Park',        area:'Newark, NJ',       sub:'Free, dawn–10pm. Easy leg-stretch for all ages.' },
  { lat:40.7040, lng:-74.0550, tier:2, cat:'activity', icon:'🗽', name:'Statue of Liberty ferry',  area:'Jersey City, NJ',  sub:'Liberty State Park terminal. Best as a half-day.', gq:'Liberty State Park ferry terminal, Jersey City NJ' },
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
      ]
    },
    days: []
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
        { icon:'🛏', name:'Exact room request',      sub:'Queen Beds (plus sofa bed), standard-floor category: 373–448 sq ft, minifridge and more floor space than the listed high-floor queen category. Confirm exact family occupancy and choose free cancellation.' },
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
      { type:'activity', icon:'✈️', title:'Land at EWR', sub:'Pick up rental car at the EWR Rental Car Center — AirTrain to Terminal A, then walk the covered corridor to the rental building.' },
      { type:'drive', text:'305 miles · ~5 hr 4 min wheel time in usual traffic via I-87 N; with the planned stops, budget ~7.5–9 hrs from rental-car departure to Lake Placid',
        route:{ from:'Newark Liberty International Airport (EWR)', to:'Lake Placid, NY', via:['Walkway Over the Hudson West Entrance, 87 Haviland Road, Highland, NY','Hannaford, 190 Quaker Road, Queensbury, NY','Aviation Mall, 578 Aviation Road, Queensbury, NY'] } },
      { type:'activity', icon:'🌉', title:'T+1:40 to T+2:25 · Walkway Over the Hudson', sub:'Use the west entrance, 87 Haviland Rd, Highland. Walk west gate → midpoint → west gate: ~1.28 mi total, flat, paved and stroller-friendly; restrooms at the entrance. Paid parking. Do this only if the rental car leaves EWR by 1:30pm and weather is safe; otherwise skip it without replacement. Sep 25 hours: 7am–7pm.', url:'https://walkway.org/visit/' },
      { type:'activity', icon:'🛒', title:'T+4:05 to T+4:50 · Hannaford Queensbury', sub:'190 Quaker Rd · full first shop for breakfast, picnic food, fruit, snacks, diapers and road supplies. Open 7am–11pm daily. Eat a quick prepared-food meal here or nearby before the final mountain leg.', url:'https://stores.hannaford.com/ny/queensbury/8360' },
      { type:'activity', icon:'🛍', title:'T+4:50 to T+6:20 · Aviation Mall shopping — Target &amp; DICK\'S Sporting Goods', sub:'578 Aviation Rd, Queensbury, off I-87 Exit 19 near Lake George. Target: affordable warm basics for the girls and you — sweatshirts, leggings, long sleeves, socks, seasonal jackets — plus basic backpacks. DICK\'S Sporting Goods, same mall: better pick for a hiking daypack, outdoor layers and branded jackets. Allow 60–90 minutes for both; specific sizes and backpack models will depend on stock.', url:'https://www.google.com/maps/search/?api=1&query=Aviation+Mall%2C+578+Aviation+Road%2C+Queensbury%2C+NY', urlLabel:'📍 Open in Google Maps' },
      { type:'activity', icon:'🏨', title:'T+8:05 · Check in Lake Placid', sub:'The T+ schedule is relative to leaving the rental center and includes normal traffic, a 45-min Walkway stop, a 45-min grocery stop and a 60–90 min Aviation Mall shopping stop. If the Walkway or the mall stop is skipped, arrive roughly 45–90 min earlier.' },
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
        route:{ from:'Lake Placid, NY', to:'Schroon Lake, NY' } },
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
        route:{ from:'Schroon Lake, NY', to:'Lake Placid, NY', via:['Fort Ticonderoga, 102 Fort Ti Road, Ticonderoga, NY'] } },
      { type:'drive', text:'Option B · Schroon Lake → Natural Stone Bridge &amp; Caves → Lake Placid · roughly 20–30 min out and 1 hr 15 home',
        route:{ from:'Schroon Lake, NY', to:'Lake Placid, NY', via:['Natural Stone Bridge and Caves, 535 Stone Bridge Road, Pottersville, NY'] } },
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
        route:{ from:'Lake Placid, NY', to:'The Wild Center, 45 Museum Drive, Tupper Lake, NY' } },
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
        route:{ from:'Lake Placid, NY', to:'Watkins Glen, NY', via:['Hannaford, 21110 US Route 3, Watertown, NY','Green Lakes State Park, 7900 Green Lakes Road, Fayetteville, NY'] } },
      { type:'activity', icon:'🚗', title:'8:30am · Leave Lake Placid', sub:'Use NY-3 W through Saranac Lake and Tupper Lake. This is the scenic and fastest mapped route; do not route south through Albany. Leaving on time is what makes the Green Lakes stop possible.' },
      { type:'activity', icon:'🛒', title:'~11:00am–11:45am · Hannaford Watertown', sub:'21110 US Route 3 · the route reaches the I-81 area after roughly 2.5 hours. Restroom, prepared-food lunch and Finger Lakes grocery restock. Hold this to about 45 minutes so the park stop survives. Open Wednesday 7am–10pm.', url:'https://stores.hannaford.com/ny/watertown/8175' },
      { type:'activity', icon:'💚', title:'~1:00pm–1:30pm · Arrive Green Lakes State Park', sub:'7900 Green Lakes Rd, Fayetteville, just east of Syracuse and a short hop off I-81. Two meromictic lakes with genuinely blue-green water ringed by old-growth forest — this is what turns the transfer into a sightseeing day rather than six hours of highway. Open year-round, dawn to dusk. No booking; the $10 vehicle fee is charged daily only through Labor Day, so late September is normally free — carry $10 anyway in case it is being collected.', url:'https://parks.ny.gov/visit/state-parks/green-lakes-state-park' },
      { type:'activity', icon:'🚶', title:'~1:30pm–3:00pm · Walk beside Green Lake', sub:'Roughly 90 minutes. The lakeside loop around Green Lake is flat, wide and stroller-friendly — photos, a snack on the shore, and extend toward Round Lake only if everyone is still enjoying it. Turn back whenever you like; the whole point is that this stop shortens cleanly.' },
      { type:'activity', icon:'🏨', title:'~5:00pm–5:30pm · Check in Watkins Glen', sub:'Green Lakes to Watkins Glen is roughly 1 hr 45. Keep the rest of the day empty except lakefront play and an early dinner. Tomorrow is Corning.' },
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
      { type:'drive', text:'~45 min each way from Watkins Glen',
        route:{ from:'Watkins Glen, NY', to:'Corning Museum of Glass, Corning, NY' } },
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
      { type:'drive', text:'~20 min west of Watkins Glen · the younger one can nap in the car on the way out',
        route:{ from:'Watkins Glen, NY', to:'Farm Sanctuary, 3150 Aikens Road, Watkins Glen, NY' } },
      { type:'activity', icon:'🐄', title:'~2:00pm · Farm Sanctuary guided tour', sub:'Meeting rescued cows, pigs, sheep and turkeys at the original farm-animal sanctuary — a completely different register from the morning waterfalls, and the kind of thing the girls will actually remember. Tours are guided, run about an hour, and <strong>every visit requires advance registration</strong>. October hours are Friday, Saturday and Sunday, so Fri Oct 2 fits the published schedule, but the specific afternoon slot has not been confirmed — book it before the trip and set the day around whatever time you get. Arrive 15 minutes early.', url:'https://www.farmsanctuary.org/the-sanctuaries/watkins-glen-ny/', urlLabel:'🎟 Book a visit' },
      { type:'activity', icon:'🛍', title:'Until ~4:00pm · Shop and grounds', sub:'The tour is only an hour; the grounds and gift shop absorb the rest comfortably. Head back whenever the girls are finished.' },
      { type:'activity', icon:'🛋', title:'Evening · Dinner and pack for Niagara', sub:'Seneca Lake waterfront if there is anything left in the tank, then an early dinner. Pack tonight — checkout is 7:30am tomorrow and the car leaves at 8:15am.' },
      { type:'activity', icon:'😴', title:'Fallback · protected downtime instead', tag:'optional', sub:'If no suitable tour slot is available, or the gorge has emptied everyone out, drop the sanctuary: nap and lodging reset first, then Seneca Lake waterfront only. This is the one new outing that needs a booking, so it is also the one that can simply not happen.' },
    ]
  },
  d9: {
    date: '2026-10-03', title: 'Taughannock + Ithaca → Niagara Falls',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'activity', icon:'🧳', title:'7:30am checkout; 8:15am leave Watkins Glen', sub:'Load before breakfast. This protects the Niagara evening and avoids trying to sightsee in Ithaca late in the day.' },
      { type:'activity', icon:'💧', title:'9:00am–10:30am · Taughannock Falls', sub:'Use the broad, flat Gorge Trail to the 215-ft falls, ~1.5 mi round trip. Stroller works in normal conditions; take the carrier if the trail is wet.', trailUrl:'https://www.alltrails.com/trail/us/new-york/taughannock-falls-via-gorge-trail' },
      { type:'activity', icon:'🍕', title:'10:50am–11:50am · Early lunch in Ithaca', sub:'Ithaca Commons only. Skip Cornell Botanic Gardens and Sciencenter on this transfer day; Niagara is now the priority.' },
      { type:'drive', text:'166 miles · ~3 hr from Ithaca Commons to Hyatt Place in usual traffic; add a short restroom stop and follow live navigation',
        route:{ from:'Ithaca Commons, Ithaca, NY', to:'Hyatt Place Niagara Falls, 310 Rainbow Blvd S, Niagara Falls, NY' } },
      { type:'activity', icon:'🏨', title:'~3:00pm · Hyatt Place arrival', sub:'Park once, leave bags if the room is not ready, then settle into a Queen Beds (plus sofa bed) room. Use the indoor pool / room until about 5:15pm.' },
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
      { type:'activity', icon:'🥞', title:'7:15am · Breakfast, check out and load car', sub:'Complete checkout before the final walk so the 9:15am departure is real.' },
      { type:'activity', icon:'🏝', title:'8:00am–9:00am · Goat Island final look', sub:'Three Sisters Islands + any Terrapin Point view missed yesterday. Keep it to 60 min. Bad-weather / tired-child substitute: hotel pool, open from 6am.' },
      { type:'drive', text:'418 miles · ~6 hr 39 min wheel time in usual traffic with the two planned stops; budget ~8 hr 15 min door to door via I-90 E → I-81 S → I-380 S → I-80 E',
        route:{ from:'Hyatt Place Niagara Falls, Niagara Falls, NY', to:'Newark, NJ', via:['Wegmans, 7952 Brewerton Road, Cicero, NY','Nay Aug Park, 500 Arthur Avenue, Scranton, PA'] } },
      { type:'activity', icon:'🚗', title:'9:15am · Leave Niagara Falls', sub:'Fuel the car before departure and protect the two planned break windows; this is the longest drive of the trip.' },
      { type:'activity', icon:'🛒', title:'~11:50am–12:40pm · Wegmans Cicero', sub:'After 166 miles / ~2 hr 36 min. Prepared-food lunch, restroom, final groceries and baby supplies for the NJ stay. Open 6am–midnight.', url:'https://www.wegmans.com/stores/cicero-ny' },
      { type:'activity', icon:'🌳', title:'~3:00pm–3:40pm · Nay Aug Park, Scranton', sub:'After another 144 miles / ~2 hr 19 min. Use it as a movement break, not a sightseeing stop: short paved wander / play, then back in the car. Open dawn–8pm.', url:'https://nayaugpark.org/' },
      { type:'activity', icon:'🚻', title:'Rain / delay backup: Great Bend Welcome Center', tag:'optional', sub:'If Nay Aug is wet or the schedule is over 30 min late, replace it with a 15-min restroom stop at the I-81 South Welcome Center, 26273 Route 11, Great Bend. Staffed 9am–5:30pm.', url:'https://www.pa.gov/agencies/penndot/traveling-in-pa/welcome-centers' },
      { type:'activity', icon:'🏠', title:'~5:30pm · Arrive NJ family base', sub:'The final leg from Nay Aug is 109 miles / ~1 hr 49 min in usual traffic. NJ family stay begins Oct 5; this ends the road-trip loop.' },
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
        { key: 'flight-elal', label: 'EL AL flight booking (EWR round-trip)', type: 'booking', priority: 'critical', status: 'done', refNote: 'Flight tickets (iCloud)', refUrl: 'https://www.icloud.com/iclouddrive/0afUqBB17d_tyn1tZTOaAH50g#New_flight_tickets' },
        { key: 'flight-esta', label: 'ESTA — US visa waiver application', type: 'booking', priority: 'critical', status: 'pending', url: 'https://esta.cbp.dhs.gov/', notes: 'Apply at least 72 hrs before departure' },
      ]
    },
    {
      id: 'car',
      icon: '🚗',
      title: 'Car Rental — EWR',
      intro: '<strong>Book in advance</strong> — walk-up rates run 3–4× higher. The EWR Rental Car Center is a free AirTrain ride from any terminal. NY &amp; NJ tolls are fully cashless — accept the agency E-ZPass transponder.',
      items: [
        { key: 'car-book', label: 'Book SUV / minivan — Alamo, Newark Airport', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.alamo.com/en/car-rental/locations/us/nj/ewr.html' },
        { key: 'car-childseat', label: 'Verify child seat availability with rental company', type: 'todo', priority: 'critical', status: 'pending' },
        { key: 'car-ezpass', label: 'Confirm E-ZPass transponder at pickup', type: 'info', priority: 'critical', status: 'pending', url: 'https://www.ezpassnj.com/' },
      ]
    },
    {
      id: 'hotels',
      icon: '🏨',
      title: 'Hotels & Stays',
      items: [
        { key: 'hotel-lp', label: 'Lake Placid — Mirror Lake Inn or Main St motel (5 nights)', type: 'booking', priority: 'critical', status: 'done', dates: 'Sep 25 – Sep 30', refNote: 'Accommodation booking (iCloud)', refUrl: 'https://www.icloud.com/iclouddrive/00cnF63Bkv2tFuED7Waq6EBfg#Lake_placid_accommodation_' },
        { key: 'hotel-fl', label: 'Finger Lakes — Watkins Glen lodge / lakeside inn (3 nights)', type: 'booking', priority: 'critical', status: 'pending', dates: 'Sep 30 – Oct 3', notes: 'Check out by 7:30am Oct 3. This replaces the prior 5-night hold.' },
        { key: 'hotel-niagara', label: 'Hyatt Place Niagara Falls — Queen Beds + sofa (2 nights)', type: 'booking', priority: 'critical', status: 'pending', dates: 'Oct 3 – Oct 5', url: 'https://www.hyatt.com/hyatt-place/en-US/iagzn-hyatt-place-niagara-falls', notes: 'Recommended US-side base, 310 Rainbow Blvd S. Choose the standard “Queen Beds (plus sofa bed)” category, not the smaller high-floor queen category; confirm exact family occupancy. Live Sep 5 search showed $688.56 displayed total with a free-cancellation filter versus $585.96 without that filter; rates can change. Verify taxes, final cancellation cutoff, breakfast and parking before payment.' },
      ]
    },
    {
      id: 'activities',
      icon: '🎟',
      title: 'Reservations',
      intro: '<strong>Book these before you fly.</strong> Three things on this trip genuinely cannot be done as a walk-up: the race (already registered), the <strong>Farm Sanctuary tour on Oct 2</strong>, and the Corning Make-Your-Own-Glass slot if you want a specific time. Everything marked <em>Recommended</em> can be bought at the door but is cheaper in queue time booked ahead. Two things must <em>not</em> be pre-booked — Cave of the Winds is same-day only, and the Whiteface toll is sold in person at the Toll House. The calendar above marks every day that needs a booking with 🎟.',
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
