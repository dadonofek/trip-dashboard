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
// None on this itinerary. Niagara Falls is now part of the fixed
// route, so there are no dashed alternative branches to draw.
routesAlt: [],

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

  // — Transfer-day stops (Sep 30 and Oct 5) —
  { lat:43.9730, lng:-75.9537, tier:2, cat:'food',     icon:'🛒', name:'Hannaford Watertown', area:'21110 US Route 3, Watertown, NY', sub:'Sep 30 lunch + grocery restock about halfway from Lake Placid to Watkins Glen. Mon–Sat 7am–10pm; Sun 7am–9pm.', url:'https://stores.hannaford.com/ny/watertown/8175' },
  { lat:43.1553, lng:-76.1190, tier:2, cat:'food',     icon:'🛒', name:'Wegmans Cicero',      area:'7952 Brewerton Rd, Cicero, NY',   sub:'Oct 5 first southbound break: prepared-food lunch, groceries and baby supplies. Open 6am–midnight daily.', url:'https://www.wegmans.com/stores/cicero-ny' },
  { lat:41.4001, lng:-75.6447, tier:2, cat:'activity', icon:'🌳', name:'Nay Aug Park',        area:'500 Arthur Ave, Scranton, PA',    sub:'Oct 5 second southbound break: 30–40 min outdoor reset. Open dawn–8pm; skip in heavy rain or if running late.', url:'https://nayaugpark.org/' },

  // — Adirondack drive stops —
  { lat:43.0790, lng:-73.7850, tier:2, cat:'activity', icon:'🎠', name:'Saratoga Springs stop',        area:'Saratoga Springs, NY', sub:'Congress Park, lunch on Broadway, Target for supplies. Optional detour, not part of the Sep 25 plan.', gq:'Congress Park, Saratoga Springs, NY' },
  { lat:43.0760, lng:-73.7900, tier:3, cat:'activity', icon:'🏛', name:'Children\'s Museum at Saratoga', area:'Saratoga Springs, NY', sub:'65 S Broadway · $14/person, ages 0–10. Rainy-day backup near the I-87 corridor.' },
  { lat:43.4250, lng:-73.7110, tier:2, cat:'scenic',   icon:'🌊', name:'Lake George village',           area:'Lake George, NY',      sub:'Shepard Park waterfront + Minne Ha-Ha cruise. Optional stop or weekend trip from NJ.' },
  { lat:44.2190, lng:-73.8800, tier:2, cat:'scenic',   icon:'🏞', name:'Cascade Lakes pull-off',        area:'NY-73, Keene, NY',     sub:'Best zero-effort foliage stop on the whole drive. Free lot, 10–20 min.', gq:'Cascade Lakes, NY-73, Keene NY' },
  { lat:44.1910, lng:-73.7900, tier:2, cat:'food',     icon:'🥧', name:'Noon Mark Diner',               area:'Keene Valley, NY',     sub:'Classic Adirondack diner on NY-73. Homemade pies, high chairs. Perfect drive break.' },
  { lat:43.8390, lng:-73.7610, tier:2, cat:'activity', icon:'🏁', name:'Half Marathon start',           area:'Schroon Lake, NY',     sub:'Adirondack Half Marathon · Sun Sep 27, 9am start.', url:'https://www.adirondackmarathon.org/' },

  // — Adirondacks: activities & hikes —
  { lat:44.3516, lng:-73.8587, tier:2, cat:'activity', icon:'💧', name:'High Falls Gorge',              area:'Wilmington, NY',       sub:'Paid gorge walk along the AuSable River. Easy Path is stroller-suitable.', url:'https://highfallsgorge.com/tickets/' },
  { lat:44.3659, lng:-73.9026, tier:2, cat:'scenic',   icon:'🏔', name:'Whiteface Veterans\' Mem. Hwy', area:'Wilmington, NY',       sub:'Drive-up summit, best foliage view in the Adirondacks. Summit 10°F+ colder.', url:'https://lakeplacidlegacysites.com/todo/whiteface-veterans-memorial-highway/' },
  { lat:44.2279, lng:-74.4644, tier:2, cat:'activity', icon:'🦦', name:'The Wild Center',               area:'Tupper Lake, NY',      sub:'Wild Walk canopy trail, animal encounters. Best family nature day near Lake Placid.', url:'https://www.wildcenter.org/visit/' },
  { lat:44.3260, lng:-74.1350, tier:2, cat:'activity', icon:'🎠', name:'Adirondack Carousel',           area:'Saranac Lake, NY',     sub:'Hand-carved wildlife carousel. Easy stop on the drive back from Tupper Lake.' },
  { lat:44.2930, lng:-73.9650, tier:2, cat:'hike',     icon:'🥾', name:'Mt. Baker Trail',               area:'Saranac Lake, NY',     sub:'2.2 mi, ~250 ft, easy family loop near the village.', url:'https://www.alltrails.com/trail/us/new-york/baker-mountain' },
  { lat:44.2180, lng:-73.9210, tier:2, cat:'hike',     icon:'🥾', name:'Mt. Van Hoevenberg',            area:'Lake Placid, NY',      sub:'5.2 mi, ~1,200 ft, moderate panorama hike. Indoor climbing wall as rain plan.', url:'https://www.alltrails.com/trail/us/new-york/mt-van-hoevenberg' },
  { lat:44.2750, lng:-74.0000, tier:2, cat:'hike',     icon:'🥾', name:'Brewster Peninsula Loop',       area:'Lake Placid, NY',      sub:'2.1 mi, ~150 ft, easy shoreline circuit.', url:'https://www.alltrails.com/trail/us/new-york/brewster-peninsula-boundary-and-ridge-trail-loop' },
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
  { lat:42.4180, lng:-76.9170, tier:2, cat:'activity', icon:'🐄', name:'Farm Sanctuary',             area:'Watkins Glen, NY', sub:'Guided farm-animal tours at the famous rescue sanctuary. Optional — book tour slot ahead.', url:'https://www.farmsanctuary.org/visit/', gq:'Farm Sanctuary, Watkins Glen NY' },
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
        { icon:'🐄', name:'Farm Sanctuary',                sub:'Watkins Glen · Guided tours of the famous farm-animal rescue. Optional, very kid-friendly. Check tour schedule and book ahead.', url:'https://www.farmsanctuary.org/visit/' },
        { icon:'🍷', name:'Seneca Lake Wine Trail',        sub:'35+ wineries along both shores. Drive the loop, stop at 3–4. Highlights: Wagner Vineyards, Castel Grisch, Hazlitt\'s 1852. No reservation usually needed mid-week.' },
        { icon:'🦕', name:'Museum of the Earth',           sub:'1259 Trumansburg Rd, Ithaca · Fossils, dinosaurs, hands-on paleontology. Very kid-friendly. ~$10/adult.', url:'https://www.museumoftheearth.org/visit/plan-your-visit' },
        { icon:'🌾', name:'Windmill Farm &amp; Craft Market', sub:'Penn Yan, ~30 min · Saturdays only. Large open-air market: local food, crafts, produce, baked goods. Worth the drive.' },
        { icon:'🎭', name:'Hangar Theatre',                sub:'Ithaca · Professional regional theater in a converted 1940s airplane hangar. Check schedule for fall shows.' },
      ]
    },
    days: ['d6', 'd7', 'd8']
  },
  {
    id: 'niagara',
    emoji: '🌊',
    title: 'Niagara Falls',
    navLabel: 'Niagara',
    color: '#0EA5E9',
    dates: 'Oct 3–5',
    weather: { name: 'Niagara Falls, NY', lat: 43.0962, lon: -79.0377 },
    infoCard: {
      prefix: 'nf',
      eat: [
        { icon:'🍔', name:'The Placery at Hyatt Place', badge:'rb-casual', badgeLabel:'Easy',   sub:'Lobby restaurant / grab-and-go fallback for the Oct 3 arrival night. Use it if the children are finished for the day.' },
        { icon:'🌊', name:'Top of the Falls',           badge:'rb-casual', badgeLabel:'View',   sub:'Goat Island lunch option after Cave of the Winds. Check current hours before relying on it.' },
        { icon:'🇨🇦', name:'Table Rock Market',          badge:'rb-casual', badgeLabel:'Canada', sub:'Simple early dinner beside Horseshoe Falls. Practical with children and keeps the Canadian-side walk compact.' },
      ],
      nohike: [
        { icon:'🏨', name:'Why stay on the US side', badge:'rb-must', badgeLabel:'Recommended', sub:'Both must-do attractions are in Niagara Falls State Park, and the Oct 5 car route leaves toward NJ. Hyatt Place lets the car remain parked; visit Canada on foot instead of adding car-border crossings.' },
        { icon:'🛏', name:'Exact room request',      sub:'Queen Beds (plus sofa bed), standard-floor category: 373–448 sq ft, minifridge and more floor space than the listed high-floor queen category. Confirm exact family occupancy and choose free cancellation.' },
        { icon:'🛂', name:'Canadian-side documents', sub:'Carry valid passports for every adult and child and use Canada’s official checker for each traveler’s documents. Bring a stroller for the promenade and allow for customs both ways.', url:'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html' },
        { icon:'💦', name:'Wet-attraction kit',      sub:'Water-safe shoes, carrier for the younger child, dry socks/clothes in a waterproof bag, and a towel. Maid supplies ponchos; Cave no longer supplies sandals.' },
      ]
    },
    days: ['d9', 'd10', 'd11']
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
      { type:'drive', text:'305 miles · ~5 hr 4 min wheel time in usual traffic via I-87 N; with the two planned stops, budget ~6.5–7.5 hrs from rental-car departure to Lake Placid',
        route:{ from:'Newark Liberty International Airport (EWR)', to:'Lake Placid, NY', via:['Walkway Over the Hudson West Entrance, 87 Haviland Road, Highland, NY','Hannaford, 190 Quaker Road, Queensbury, NY'] } },
      { type:'activity', icon:'🌉', title:'T+1:40 to T+2:25 · Walkway Over the Hudson', sub:'Use the west entrance, 87 Haviland Rd, Highland. Walk west gate → midpoint → west gate: ~1.28 mi total, flat, paved and stroller-friendly; restrooms at the entrance. Paid parking. Do this only if the rental car leaves EWR by 1:30pm and weather is safe; otherwise skip it without replacement. Sep 25 hours: 7am–7pm.', url:'https://walkway.org/visit/' },
      { type:'activity', icon:'🛒', title:'T+4:05 to T+4:50 · Hannaford Queensbury', sub:'190 Quaker Rd · full first shop for breakfast, picnic food, fruit, snacks, diapers and road supplies. Open 7am–11pm daily. Eat a quick prepared-food meal here or nearby before the final mountain leg.', url:'https://stores.hannaford.com/ny/queensbury/8360' },
      { type:'activity', icon:'🏨', title:'T+6:35 · Check in Lake Placid', sub:'The T+ schedule is relative to leaving the rental center and includes normal traffic, a 45-min Walkway stop and a 45-min grocery stop. If the Walkway is skipped, arrive roughly 45–60 min earlier.' },
    ]
  },
  d2: {
    date: '2026-09-26', title: 'Lake Placid easy day + race packet pickup',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'🌿', title:'Mirror Lake loop walk', sub:'Easy flat shoreline loop right from the village, stroller-friendly. Beautiful late-September foliage. Keep the day soft — the half marathon is tomorrow.' },
      { type:'activity', icon:'🏆', title:'Olympic Village sites', sub:'Olympic Center and Museum (2634 Main St, 9:30am–5pm) plus the Olympic Jumping Complex. North America’s 2nd-largest Winter Olympic collection and the 1980 "Miracle on Ice" rink. Great for all ages.', url:'https://lakeplacidolympicmuseum.org/visit/' },
      { type:'activity', icon:'🛍', title:'Main Street wander', sub:'Galleries, outdoor gear, fudge shops and Olympic memorabilia. Easy 1–2 hour stroll with something for everyone. Grab coffee at Origin Coffee Co. (2669 Main St).' },
      { type:'activity', icon:'🎽', title:'Adirondack Marathon Expo & Packet Pickup', sub:'Collect race bibs, timing chips and shirts at the official expo (Sat Sep 26). Confirm exact location and hours on the race site — pickup is also available race morning in Schroon Lake, but getting it done today keeps Sunday calm.', url:'https://www.adirondackmarathon.org/' },
    ]
  },
  d3: {
    date: '2026-09-27', title: 'Adirondack Half Marathon',
    badge: 'hike', badgeLabel: 'Race',
    content: [
      { type:'drive', text:'~45 min drive south to the start · Schroon Lake · half marathon starts 9am — leave Lake Placid early',
        route:{ from:'Lake Placid, NY', to:'Schroon Lake, NY' } },
      { type:'activity', icon:'🏁', title:'Schroon Lake start', sub:'The Adirondack Half Marathon starts at 9am in the town of Schroon, on a scenic loop around Schroon Lake. Arrive with time to park, warm up and find the family cheering spot.', url:'https://www.adirondackmarathon.org/half-marathon' },
      { type:'activity', icon:'🏃', title:'Half marathon', sub:'13.1 miles around Schroon Lake with rolling foliage views. Part of the Adirondack Marathon Distance Festival.', url:'https://www.adirondackmarathon.org/' },
      { type:'activity', icon:'🍽', title:'Recovery lunch', sub:'Refuel in Schroon Lake or back in Lake Placid. Big Mountain Deli or Noon Mark Diner are easy, kid-friendly post-race options.' },
      { type:'activity', icon:'🛋', title:'Easy afternoon', sub:'No agenda. Mirror Lake, an ice cream on Main Street, legs up. Save the bigger outings for the next two days.' },
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
    content: [
      { type:'drive', text:'~45 min each way via NY-86 W / NY-3 W · leave Lake Placid about 9:00am',
        route:{ from:'Lake Placid, NY', to:'The Wild Center, 45 Museum Drive, Tupper Lake, NY' } },
      { type:'activity', icon:'🦦', title:'10:00am–2:30pm · The Wild Center', sub:'Wild Walk, Pines Play Area, animal encounters and indoor exhibits. September–October hours are 10am–5pm; reserve dated tickets for faster entry. Eat at the Waterside Café.', url:'https://www.wildcenter.org/visit/' },
      { type:'activity', icon:'🎠', title:'3:00pm–3:45pm · Adirondack Carousel', tag:'optional', sub:'Saranac Lake stop on the return route. Skip if the children fall asleep in the car.' },
      { type:'activity', icon:'🧳', title:'Evening · Pack for transfer', sub:'Refill the day bag, stage breakfast and load what can safely stay in the car. Sep 30 is now a true transfer day; there is no duplicated Wild Center day.' },
    ]
  },
  d6: {
    date: '2026-09-30', title: 'Lake Placid → Watertown → Watkins Glen',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'280 miles · ~4 hr 56 min wheel time in usual traffic via NY-3 W and I-81 S; follow live navigation for the final Finger Lakes segment. With lunch/restock, budget ~6 hrs door to door',
        route:{ from:'Lake Placid, NY', to:'Watkins Glen, NY', via:['Hannaford, 21110 US Route 3, Watertown, NY'] } },
      { type:'activity', icon:'🚗', title:'8:30am · Leave Lake Placid', sub:'Use NY-3 W through Saranac Lake and Tupper Lake. This is the scenic and fastest mapped route; do not route south through Albany.' },
      { type:'activity', icon:'🛒', title:'~11:00am–12:00pm · Hannaford Watertown', sub:'21110 US Route 3 · the route reaches the I-81 area after roughly 2.5 hours. Use this as the one proper stop: restroom, prepared-food lunch and Finger Lakes grocery restock. Open Wednesday 7am–10pm.', url:'https://stores.hannaford.com/ny/watertown/8175' },
      { type:'activity', icon:'🏨', title:'~2:30pm–3:00pm · Check in Watkins Glen', sub:'The arrival time includes a 60-min Watertown break and normal traffic. Keep the rest of the day empty except lakefront play and an early dinner.' },
    ]
  },
  d7: {
    date: '2026-10-01', title: 'Corning Museum of Glass',
    badge: 'explore', badgeLabel: 'Must-do',
    content: [
      { type:'drive', text:'~45 min each way from Watkins Glen',
        route:{ from:'Watkins Glen, NY', to:'Corning Museum of Glass, Corning, NY' } },
      { type:'activity', icon:'🔬', title:'9:30am–2:30pm · Corning Museum of Glass', sub:'Keep five hours including lunch. Start with a reserved Make Your Own Glass slot, then Hot Shop demos, hands-on innovation galleries and the café. Fully indoor, so swap with Oct 2 if that is the wet day.', url:'https://home.cmog.org/visit' },
      { type:'activity', icon:'🎨', title:'Reserve Make Your Own Glass', sub:'Book the timed experience before the trip; the museum itself does not need the whole day. Choose a child-compatible project and confirm pickup/shipping timing.' },
      { type:'activity', icon:'🌊', title:'Late afternoon · Watkins Glen lakefront', sub:'Return to the base for playground / Seneca Lake waterfront and an early dinner. Do not add another drive.' },
    ]
  },
  d8: {
    date: '2026-10-02', title: 'Watkins Glen Gorge + quiet lake afternoon',
    badge: 'hike', badgeLabel: 'Hike',
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
      { type:'activity', icon:'🛋', title:'After lunch · protected downtime', sub:'Nap / lodging reset first, then Seneca Lake waterfront only. Pack tonight for an 8:15am checkout and Niagara transfer.' },
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
      items: [
        { key: 'act-marathon', label: 'Adirondack Half Marathon', type: 'booking', priority: 'critical', status: 'done', url: 'https://www.adirondackmarathon.org/', notes: 'Sun Sep 27 · Schroon Lake · expo & packet pickup Sat Sep 26' },
        { key: 'act-corning', label: 'Corning Museum of Glass', type: 'booking', priority: 'critical', status: 'pending', url: 'https://home.cmog.org/visit', notes: 'Oct 1 · book Make-Your-Own-Glass slot ahead · rain-proof' },
        { key: 'act-maid', label: 'Maid of the Mist — official online voucher', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.maidofthemist.com/schedule-pricing/', notes: 'Oct 4 at opening · no timed reservation; voucher is valid any 2026 operating day and must be exchanged at the booth. 2026 prices: $30.25 adult, $19.75 ages 6–12, age 5 and under free.' },
        { key: 'act-cave', label: 'Cave of the Winds — same-day timed ticket', type: 'todo', priority: 'recommended', status: 'pending', url: 'https://www.niagarafallsstatepark.com/attractions/cave-of-the-winds/', notes: 'Oct 4 · tickets are not sold online. Buy first thing at the Welcome Center / Cave desk for the earliest slot at or after 10:45am. Pack water-safe shoes.' },
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
