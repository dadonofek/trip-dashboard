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
  [40.6895,-74.1745], // EWR / NJ start
  [40.77,-74.07],     // NJ Turnpike north
  [40.85,-73.96],     // George Washington Bridge
  [41.07,-73.87],     // Tarrytown / Tappan Zee
  [41.22,-73.98],     // Harriman
  [41.50,-74.01],     // Newburgh / I-84 junction
  [41.93,-73.99],     // Kingston
  [42.22,-73.86],     // Catskill
  [42.65,-73.75],     // Albany / I-90 junction
  [43.08,-73.79],     // Saratoga Springs area
  [43.43,-73.71],     // Lake George area
  [43.83,-73.77],     // Schroon Lake
  [44.18,-73.78],     // Keene / Au Sable Forks
  [44.2795,-73.9799], // ★ LAKE PLACID
  [44.18,-73.78],     // back south via NY-73
  [43.83,-73.77],     // Schroon Lake
  [43.4262,-73.7123], // ★ LAKE GEORGE
  [42.65,-73.75],     // Albany
  [42.82,-73.94],     // Schenectady
  [42.94,-74.19],     // Amsterdam
  [43.05,-74.85],     // Little Falls
  [43.10,-75.23],     // Utica
  [43.05,-76.15],     // Syracuse
  [42.84,-76.14],     // I-81 south approach
  [42.60,-76.18],     // Cortland
  [42.51,-76.54],     // NY-13/414 junction
  [42.3806,-76.8733], // ★ WATKINS GLEN
  [42.42,-76.76],     // north on NY-414
  [42.44,-76.60],     // Trumansburg
  [42.4476,-76.4869], // ★ ITHACA
  [42.30,-76.16],     // NY-13 south
  [42.10,-75.91],     // Binghamton / I-81 S
  [41.41,-75.66],     // Scranton / I-380
  [41.12,-75.36],     // Mt Pocono
  [40.98,-75.19],     // Stroudsburg / I-80 E
  [40.90,-74.70],     // Netcong, NJ
  [40.86,-74.42],     // Parsippany / I-280
  [40.6895,-74.1745]  // ★ EWR / NJ end
],

// ── FLEX ROUTES (dashed on the map) ────────────────────────
// Optional branches that only happen if the Niagara option is
// chosen at the Oct 2–3 decision point. Rendered as dashed lines
// in the Niagara region color.
routesAlt: [
  { label: 'Flex Oct 4: Watkins Glen → Niagara Falls (~2.5–3 hrs)', color: '#0EA5E9', points: [
    [42.3806,-76.8733], // Watkins Glen
    [42.87,-76.98],     // Geneva / NY-14 N
    [43.00,-77.42],     // Victor / I-90 W
    [43.02,-77.75],     // Rochester south
    [43.00,-78.19],     // Batavia
    [42.98,-78.74],     // Buffalo north / I-290
    [43.02,-78.96],     // Grand Island / I-190 N
    [43.0830,-79.0640]  // ★ NIAGARA FALLS
  ]},
  { label: 'Flex Oct 5: Niagara Falls → NJ (~6–6.5 hrs)', color: '#0EA5E9', points: [
    [43.0830,-79.0640], // Niagara Falls
    [42.90,-78.85],     // Buffalo / I-90 E
    [43.00,-78.19],     // Batavia
    [43.02,-77.75],     // Rochester
    [43.05,-77.05],     // I-90 E past Geneva
    [43.05,-76.15],     // Syracuse / I-81 S
    [42.60,-76.18],     // Cortland
    [42.10,-75.91],     // Binghamton
    [41.41,-75.66],     // Scranton / I-380
    [41.12,-75.36],     // Mt Pocono
    [40.98,-75.19],     // Stroudsburg / I-80 E
    [40.90,-74.70],     // Netcong, NJ
    [40.86,-74.42],     // Parsippany / I-280
    [40.6895,-74.1745]  // ★ Newark / NJ base
  ]},
],

// ── MAP MARKERS — MAIN STOPS ───────────────────────────────
// Always visible at any zoom: the trip's anchor locations.
// color falls back to the region's color when omitted.
stops: [
  { lat:40.6895, lng:-74.1745, label:'NJ', color:'#D97706', regionId:'nj',           title:'NJ Family Base / EWR',            dates:'Oct 5–15' },
  { lat:44.2795, lng:-73.9799, label:'LP', color:'#059669', regionId:'adirondacks',  title:'Lake Placid / Mirror Lake',        dates:'Sep 25 – 30' },
  { lat:42.3806, lng:-76.8733, label:'WG', color:'#7C3AED', regionId:'finger-lakes', title:'Watkins Glen State Park',          dates:'Sep 30 – Oct 5' },
  { lat:42.1460, lng:-77.0547, label:'CG', color:'#7C3AED', regionId:'finger-lakes', title:'Corning Museum of Glass',          dates:'Oct 1' },
  { lat:42.4476, lng:-76.4869, label:'IT', color:'#7C3AED', regionId:'finger-lakes', title:'Ithaca / Cornell Botanic Gardens', dates:'Oct 3' },
  { lat:43.0830, lng:-79.0640, label:'NF', color:'#0EA5E9', regionId:'niagara',      title:'Niagara Falls (flex option)',      dates:'Oct 4–5 · if chosen' },
],

// ── MAP POIs — EVERYTHING ELSE ─────────────────────────────
// tier 2 appears from zoom 9 (day-trip activities, hikes, optional
// stops); tier 3 from zoom 11 (restaurants, in-town spots).
// cat drives the marker colour: activity | hike | scenic | food
// gq (optional) overrides the Google-Maps search query.
pois: [
  // — Arrival-day & drive stops —
  { lat:43.0790, lng:-73.7850, tier:2, cat:'activity', icon:'🎠', name:'Saratoga Springs stop',        area:'Saratoga Springs, NY', sub:'Arrival-day break: Congress Park, lunch on Broadway, Target for supplies.', gq:'Congress Park, Saratoga Springs, NY' },
  { lat:43.0760, lng:-73.7900, tier:3, cat:'activity', icon:'🏛', name:'Children\'s Museum at Saratoga', area:'Saratoga Springs, NY', sub:'65 S Broadway · $14/person, ages 0–10. Arrival-day or rainy-day backup.' },
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
  { lat:42.4396, lng:-76.4970, tier:3, cat:'activity', icon:'🛍', name:'Ithaca Commons',             area:'Ithaca, NY',      sub:'Collegetown energy, great food diversity for dinner.' },
  { lat:42.4570, lng:-76.5110, tier:2, cat:'activity', icon:'🛥', name:'Cayuga Lake boat day',       area:'Ithaca, NY',      sub:'Pontoon rental or sightseeing cruise from the Ithaca waterfront. Relaxed on-the-water foliage day.', gq:'Cayuga Boat Rentals, Ithaca NY' },
  { lat:42.4180, lng:-76.9170, tier:2, cat:'activity', icon:'🐄', name:'Farm Sanctuary',             area:'Watkins Glen, NY', sub:'Guided farm-animal tours at the famous rescue sanctuary. Optional — book tour slot ahead.', url:'https://www.farmsanctuary.org/visit/', gq:'Farm Sanctuary, Watkins Glen NY' },
  { lat:42.4003, lng:-76.5594, tier:2, cat:'hike',     icon:'🏞', name:'Robert H. Treman State Park', area:'Ithaca, NY',     sub:'Enfield Glen gorge walk to 115-ft Lucifer Falls. Optional quieter alternative to Watkins Glen.', url:'https://parks.ny.gov/visit/state-parks/robert-h-treman-state-park' },

  // — Niagara flex option (Oct 4–5, only if chosen) —
  { lat:43.0856, lng:-79.0664, tier:2, cat:'activity', icon:'⛴', name:'Maid of the Mist',          area:'Niagara Falls, NY', sub:'Flex Oct 5 morning · Boat to the base of Horseshoe Falls, ponchos provided. Timed tickets online.', url:'https://www.maidofthemist.com/' },
  { lat:43.0793, lng:-79.0743, tier:2, cat:'activity', icon:'💨', name:'Cave of the Winds',         area:'Niagara Falls, NY', sub:'Flex Oct 4 afternoon · Elevator 175 ft down to the Hurricane Deck below Bridal Veil Falls. You will get soaked.', url:'https://www.niagarafallsstatepark.com/attractions-and-tours/cave-of-the-winds' },
  { lat:43.0786, lng:-79.0760, tier:2, cat:'scenic',   icon:'🏝', name:'Goat Island',               area:'Niagara Falls, NY', sub:'Flex Oct 5 · Terrapin Point panorama + Three Sisters Islands rapids. Free, stroller-friendly.', gq:'Goat Island, Niagara Falls State Park NY' },
  { lat:43.0870, lng:-79.0680, tier:3, cat:'scenic',   icon:'🌈', name:'Night illumination (Prospect Point)', area:'Niagara Falls, NY', sub:'Flex Oct 4 evening · Falls lit in color nightly from dusk; some nights add fireworks.', url:'https://www.niagarafallsusa.com/' },
  { lat:43.1369, lng:-79.0772, tier:3, cat:'activity', icon:'🦋', name:'Butterfly Conservatory',    area:'Niagara Falls, ON 🇨🇦', sub:'Option B (2nd night) only · 2,000+ free-flying butterflies. Canadian side — passports required.', url:'https://www.niagaraparks.com/visit/attractions/butterfly-conservatory/' },
  { lat:43.1176, lng:-79.0686, tier:3, cat:'activity', icon:'🚡', name:'Whirlpool Aero Car',        area:'Niagara Falls, ON 🇨🇦', sub:'Option B (2nd night) only · 1916 cable car over the whirlpool rapids. Canadian side.', url:'https://www.niagaraparks.com/visit/attractions/whirlpool-aero-car/' },
  { lat:43.0791, lng:-79.0789, tier:3, cat:'activity', icon:'🚇', name:'Journey Behind the Falls',  area:'Niagara Falls, ON 🇨🇦', sub:'Option B (2nd night) only · Tunnels behind the Horseshoe Falls curtain. Canadian side.', url:'https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls/' },
  { lat:43.2557, lng:-79.0717, tier:3, cat:'scenic',   icon:'🍇', name:'Niagara-on-the-Lake',       area:'Niagara-on-the-Lake, ON 🇨🇦', sub:'Option B (2nd night) only · Beautiful historic town ~25 min north, surrounded by wineries (ice wine country).', gq:'Niagara-on-the-Lake, Ontario' },

  // — Finger Lakes: food —
  { lat:42.3838, lng:-76.8714, tier:3, cat:'food', icon:'🍷', name:'Graft Wine + Cider Bar',  area:'Watkins Glen, NY', sub:'Farm-to-table, all local. Best sit-down dinner in town.', url:'https://www.graftwineciderbar.com/' },
  { lat:42.3876, lng:-76.8700, tier:3, cat:'food', icon:'🚂', name:'Seneca Harbor Station',   area:'Watkins Glen, NY', sub:'1876 train station, lake views, seafood & steaks.', url:'https://senecaharborstation.com/restaurant/' },
  { lat:42.3820, lng:-76.8720, tier:3, cat:'food', icon:'🌿', name:'Ravinous Kitchen',        area:'Watkins Glen, NY', sub:'Field-to-table, weekly changing seasonal menu.' },
  { lat:42.4410, lng:-76.4980, tier:3, cat:'food', icon:'🌱', name:'Moosewood Restaurant',    area:'Ithaca, NY',       sub:'Legendary vegetarian institution since 1973.', url:'https://www.moosewoodrestaurant.com/menu' },
  { lat:42.4500, lng:-76.5120, tier:3, cat:'food', icon:'🐟', name:'BoatYard Grill',          area:'Ithaca, NY',       sub:'Best seafood in Ithaca, Cayuga Lake dock views.', url:'https://boatyardgrill.com/hours.php' },
  { lat:42.4400, lng:-76.4960, tier:3, cat:'food', icon:'🍕', name:'Revelry Yards',           area:'Ithaca, NY',       sub:'Wood-fired pizza + craft micro-brewery upstairs.', url:'https://www.revelryyards.com/menus.html' },

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
    days: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6']
  },
  {
    id: 'finger-lakes',
    emoji: '🍷',
    title: 'Finger Lakes',
    navLabel: 'Finger Lakes',
    color: '#7C3AED',
    dates: 'Sep 30 – Oct 5',
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
        { icon:'🛥', name:'Cayuga Lake boat day',          sub:'Pontoon rental or sightseeing cruise from the Ithaca waterfront. The relaxed on-the-water day is now a core part of this leg — book a slot a day or two ahead.' },
        { icon:'🐄', name:'Farm Sanctuary',                sub:'Watkins Glen · Guided tours of the famous farm-animal rescue. Optional, very kid-friendly. Check tour schedule and book ahead.', url:'https://www.farmsanctuary.org/visit/' },
        { icon:'🍷', name:'Seneca Lake Wine Trail',        sub:'35+ wineries along both shores. Drive the loop, stop at 3–4. Highlights: Wagner Vineyards, Castel Grisch, Hazlitt\'s 1852. No reservation usually needed mid-week.' },
        { icon:'🦕', name:'Museum of the Earth',           sub:'1259 Trumansburg Rd, Ithaca · Fossils, dinosaurs, hands-on paleontology. Very kid-friendly. ~$10/adult.', url:'https://www.museumoftheearth.org/visit/plan-your-visit' },
        { icon:'🌾', name:'Windmill Farm &amp; Craft Market', sub:'Penn Yan, ~30 min · Saturdays only. Large open-air market: local food, crafts, produce, baked goods. Worth the drive.' },
        { icon:'🎭', name:'Hangar Theatre',                sub:'Ithaca · Professional regional theater in a converted 1940s airplane hangar. Check schedule for fall shows.' },
      ]
    },
    days: ['d7', 'd8', 'd9', 'd10', 'd15', 'd11']
  },
  {
    id: 'niagara',
    emoji: '🌊',
    title: 'Niagara Falls · Flex Option',
    navLabel: 'Niagara (flex)',
    color: '#0EA5E9',
    dates: 'Oct 4–5 · only if chosen',
    weather: { name: 'Niagara Falls, NY', lat: 43.0962, lon: -79.0377 },
    infoCard: null,
    days: ['d16', 'd17']
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
    date: '2026-09-25', title: 'Arrive EWR → Lake Placid (~5 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'activity', icon:'✈️', title:'Land at EWR', sub:'Pick up rental car at the EWR Rental Car Center — AirTrain to Terminal A, then walk the covered corridor to the rental building.' },
      { type:'drive', text:'~290 miles · ~4.5–5.5 hrs total · I-87 N → NY-73 W · Final stretch through Keene Valley is spectacular',
        route:{ from:'Newark Liberty International Airport (EWR)', to:'Lake Placid, NY', via:['Saratoga Springs, NY','Keene Valley, NY'] } },
      { type:'activity', icon:'🎠', title:'Stop option A: Saratoga Springs (~3 hrs in)', sub:'Congress Park Carousel: $1/ride, kids under 5 free. Runs weekends in fall — 25 Sep is a Friday, so the indoor Children\'s Museum (below) is the better Saratoga stop on arrival day. Stroller-friendly park with duck pond. Lunch on Broadway Ave, Target nearby for supplies. Best family decompression stop before the mountains.' },
      { type:'activity', icon:'🏛', title:'Saratoga indoor backup', tag:'optional', sub:'Children\'s Museum at Saratoga (65 S Broadway) — Tue–Sat 9am–4pm, Sun 1–4pm. $14/person, under 12 months free. Ages 0–10, dedicated infant/toddler zone. Good arrival-day option (Fri) or if weather is poor.' },
      { type:'activity', icon:'🌊', title:'Stop option B: Lake George village (3.5 hrs in)', tag:'optional', sub:'More scenic than Saratoga. Shepard Park waterfront is free with a playground and foliage views. Minne Ha-Ha 1-hr paddlewheel cruise (~$17–26/adult, kids under 4 free) — book ahead, check October schedule. This is where the Adirondack feeling properly begins. You can also come back here as a weekend excursion from the NJ base.' },
      { type:'activity', icon:'🍽', title:'Lunch stop: Noon Mark Diner, Keene Valley', tag:'optional', sub:'1770 NY-73, Keene Valley — daily 7am–4pm. Classic Adirondack diner since 1981. Homemade pies, locally sourced comfort food, high chairs. Perfect 30-min break right on the NY-73 mountain stretch into Lake Placid.' },
      { type:'activity', icon:'🏞', title:'Photo stop: Cascade Lakes pull-off (on NY-73)', sub:'Best zero-effort foliage stop on the entire drive. Twin alpine lakes with sheer cliffs reflecting fall colour. Free parking lot, picnic tables, 10–20 min. Fills early on fall weekends — stop on the way in, not the way back.' },
      { type:'activity', icon:'🏨', title:'Check in Lake Placid', sub:'Mirror Lake Inn or condo with kitchenette. Walk Mirror Lake in the evening — the Rt 73 stretch through Keene Valley is dramatic even at dusk.' },
    ]
  },
  d2: {
    date: '2026-09-26', title: 'Lake Placid easy day + race packet pickup',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'🌿', title:'Mirror Lake loop walk', sub:'Easy flat shoreline loop right from the village, stroller-friendly. Beautiful late-September foliage. Keep the day soft — the half marathon is tomorrow.' },
      { type:'activity', icon:'🏆', title:'Olympic Village sites', sub:'Olympic Center and Museum (2634 Main St, 9:30am–5pm) plus the Olympic Jumping Complex. North America\'s 2nd-largest Winter Olympic collection and the 1980 "Miracle on Ice" rink. Great for all ages.', url:'https://lakeplacidolympicmuseum.org/visit/' },
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
    date: '2026-09-28', title: 'High Falls Gorge + Lake Placid village',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'💧', title:'High Falls Gorge', sub:'Short paid walk along AuSable River gorge. Easy Path is stroller-suitable; suspended walkways better with backpack carrier. ~45 min. Free parking.', url:'https://highfallsgorge.com/tickets/', urlLabel:'🎟 Tickets &amp; hours' },
      { type:'hiketabs', prefix:'sep28', tabs:[
        { id:'base', label:'Afternoon Trail', active:true,
          title:'Brewster Peninsula Loop',
          note:'Short easy circuit near Lake Placid. Abandon early if kids flag — recovery is still the priority the day after the race.',
          stats:['2.1 mi','~150 ft','Easy'],
          url:'https://www.alltrails.com/trail/us/new-york/brewster-peninsula-boundary-and-ridge-trail-loop' },
      ]},
      { type:'activity', icon:'🍦', title:'Lake Placid village afternoon', sub:'Main Street shops, Olympic museum, Mirror Lake shoreline. If everyone is tired after the gorge, skip the trail entirely.' },
    ]
  },
  d5: {
    date: '2026-09-29', title: 'Whiteface Veterans\' Memorial Highway',
    badge: 'hike', badgeLabel: 'Hike/Ride',
    content: [
      { type:'activity', icon:'🏔', title:'Whiteface Veterans\' Memorial Highway', sub:'Open through 12 Oct. Drive-up summit with the best foliage view in the Adirondacks. Summit is at least 10°F colder than the base — pack extra layers. Note: the gondola runs Fri–Sun only after 11 Sep; Sep 29 is a Tuesday, so the highway is the right call.', url:'https://lakeplacidlegacysites.com/todo/whiteface-veterans-memorial-highway/' },
      { type:'activity', icon:'🏋', title:'Mt. Van Hoevenberg (backup)', tag:'rain plan', sub:'Indoor climbing wall or Legacy Tour if weather closes the summit. Good all-ages fallback.' },
      { type:'hiketabs', prefix:'sep29', tabs:[
        { id:'base',    label:'Base Hike', active:true,
          title:'Mt. Baker Trail', desc:' — easy family loop near Lake Placid village.',
          stats:['2.2 mi','~250 ft gain','Easy'],
          url:'https://www.alltrails.com/trail/us/new-york/baker-mountain' },
        { id:'upgrade', label:'Upgrade',
          title:'Mt. Van Hoevenberg', desc:' — solid panorama, moderate switchbacks.',
          stats:['5.2 mi','~1,200 ft gain','Moderate'],
          url:'https://www.alltrails.com/trail/us/new-york/mt-van-hoevenberg' },
      ]},
    ]
  },
  d6: {
    date: '2026-09-30', title: 'Wild Center + Tupper Lake',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'drive', text:'~45 min drive to Tupper Lake · day trip from Lake Placid base',
        route:{ from:'Lake Placid, NY', to:'The Wild Center, Tupper Lake, NY' } },
      { type:'activity', icon:'🦦', title:'The Wild Center', sub:'Wild Walk canopy trail, Pines Play Area, animal encounters, 115 acres. Best full family nature day near Lake Placid. Open daily.', url:'https://www.wildcenter.org/visit/' },
      { type:'hiketabs', prefix:'sep30', tabs:[
        { id:'base', label:'Trail Option', active:true,
          title:'Wild Center Trail',
          note:'Short easy loop near Tupper Lake. Good for free play between exhibits.',
          stats:['1.2 mi','~50 ft','Easy'],
          url:'https://www.alltrails.com/trail/us/new-york/the-wild-center-trail' },
      ]},
      { type:'activity', icon:'🎠', title:'Adirondack Carousel, Saranac Lake', tag:'optional', sub:'Year-round family stop on the drive back. Hand-carved Adirondack wildlife carousel.' },
    ]
  },
  d7: {
    date: '2026-09-30', title: 'Drive Lake Placid → Watkins Glen (~4.5 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~225 miles · ~4.5 hrs · I-87 S → I-90 W → I-86 W → NY-414 S · Treat as a full transfer day',
        route:{ from:'Lake Placid, NY', to:'Watkins Glen, NY', via:['Albany, NY','Syracuse, NY'] } },
      { type:'activity', icon:'🛑', title:'Plan for one proper meal break', sub:'4.5+ hours with small children needs at least one structured rest stop — schedule by time, not by complaints.' },
      { type:'activity', icon:'🏨', title:'Check in near Watkins Glen', sub:'Seneca Lodge (kitchenette cabins next to gorge entrance) or lakeside inn. If late arrival, skip the lakefront walk and take an early dinner.' },
    ]
  },
  d8: {
    date: '2026-10-01', title: 'Corning Museum of Glass',
    badge: 'explore', badgeLabel: 'Must-do',
    content: [
      { type:'drive', text:'~45 min south from Watkins Glen · easy day trip',
        route:{ from:'Watkins Glen, NY', to:'Corning Museum of Glass, Corning, NY' } },
      { type:'activity', icon:'🔬', title:'Corning Museum of Glass', sub:'$25/adult, kids under 17 free. Open 9am–5pm daily. One of the best museums in the US — easily fills 3+ hours. Fully indoor, so it is the region\'s best rain-proof day.', url:'https://home.cmog.org/visit' },
      { type:'activity', icon:'🔥', title:'Live glassblowing demos', sub:'Hot Shop demonstrations run throughout the day in the amphitheater. Watch molten glass shaped in real time — captivating for all ages.' },
      { type:'activity', icon:'🎨', title:'Make-your-own glass', sub:'Make Your Own Glass experiences (ornament, flower, pendant) — small extra fee, often timed-entry. Book on arrival or online to lock a slot.' },
      { type:'activity', icon:'🖼', title:'Museum galleries', sub:'35 centuries of glass art and a hands-on innovation center. Café on site for lunch. Rain-proof — keep this in your back pocket if a gorge day gets washed out.' },
    ]
  },
  d9: {
    date: '2026-10-02', title: 'Watkins Glen Gorge Trail',
    badge: 'hike', badgeLabel: 'Hike',
    content: [
      { type:'activity', icon:'🏞', title:'Watkins Glen Gorge Trail', sub:'800 stone steps, 19 waterfalls, dramatic gorge walls. The best gorge hike in NY. Arrive early — gets busy. Note: the park shuttle runs weekends only after Sep 8 — Oct 2 is a Friday so no shuttle. Plan an out-and-back, not a full loop.', url:'https://parks.ny.gov/visit/state-parks/watkins-glen-state-park' },
      { type:'hiketabs', prefix:'wg', tabs:[
        { id:'base',    label:'Base',    active:true,
          title:'Gorge Trail out-and-back',
          note:'Walk to the top of the gorge, return same way. 45–60 min. Best option on a weekday — no shuttle needed.',
          stats:['1.6 mi rt','~420 ft','Easy-Mod'],
          url:'https://www.alltrails.com/trail/us/new-york/glen-creek-gorge-trail' },
        { id:'upgrade', label:'Upgrade',
          title:'Gorge + South Rim loop',
          note:'Full loop with elevated south rim views. 1.5–2 hrs. Requires walking back along road — manageable without the shuttle.',
          stats:['3 mi','~500 ft','Moderate'],
          url:'https://www.alltrails.com/trail/us/new-york/watkins-glen-south-rim-trail' },
      ]},
      { type:'activity', icon:'🌊', title:'Decision point tonight: Niagara flex option', tag:'optional', sub:'Over dinner tonight (or tomorrow evening at the latest), decide on the floating Niagara option. Ask: 1) Are we still excited? 2) Are the kids handling hotels well? 3) Is the weather favorable? 4) Have we already had enough waterfalls and nature? If YES to going — check out Oct 4 instead of Oct 5, drive ~2.5 hrs to Niagara Falls for 1 night (Maid of the Mist, Cave of the Winds, Goat Island, night illumination), then straight to NJ on Oct 5. If NO — keep the base plan: extra Finger Lakes lake day Oct 4, then the drive to NJ on Oct 5. Either way you sleep in NJ on the night of Oct 5.' },
    ]
  },
  d10: {
    date: '2026-10-03', title: 'Taughannock Falls + Ithaca',
    badge: 'hike', badgeLabel: 'Hike',
    content: [
      { type:'activity', icon:'💧', title:'Taughannock Falls State Park',
        sub:'Tallest waterfall in the Northeast (215 ft — taller than Niagara!). Wide, flat gorge trail — easy for all ages, ~1.5 mi rt.',
        trailUrl:'https://www.alltrails.com/trail/us/new-york/taughannock-falls-via-gorge-trail' },
      { type:'activity', icon:'🔬', title:'Sciencenter, Ithaca', tag:'rain plan', sub:'601 1st St, Ithaca · 250+ interactive exhibits, free parking. Curiosity Corner specifically designed for age 4 and under. Best indoor backup in the area — go here if weather shuts down the gorge.', url:'https://sciencenter.org/visit/hours-pricing/' },
      { type:'activity', icon:'🌿', title:'Cornell Botanic Gardens, Ithaca', tag:'optional', sub:'Free. Beautiful fall colour. Only viable in dry weather — mostly outdoor.', url:'https://cornellbotanicgardens.org/visit' },
      { type:'activity', icon:'🍕', title:'Ithaca Commons for dinner',       sub:'Collegetown energy, great food diversity.' },
      { type:'activity', icon:'🌊', title:'Niagara decision — final call tonight', tag:'optional', sub:'If the Niagara option wasn\'t settled last night, lock it in this evening. Going means tomorrow (Oct 4) becomes the drive to Niagara Falls instead of the Cayuga Lake boat day.' },
    ]
  },
  d15: {
    date: '2026-10-04', title: 'Cayuga Lake boat day + relaxed lake time',
    badge: 'explore', badgeLabel: 'Lake Day',
    content: [
      { type:'activity', icon:'🛥', title:'Cayuga Lake on the water', sub:'Rent a pontoon or take a sightseeing cruise from the Ithaca waterfront — foliage from the lake, zero hiking. Book a morning slot a day or two ahead.', gq:'Cayuga Boat Rentals, Ithaca NY' },
      { type:'activity', icon:'🌊', title:'Relaxed lake time', sub:'No agenda after the boat. Taughannock Falls beach area or Myers Park in Lansing for shoreline lounging, playground and snacks. This day exists to NOT cram activities.' },
      { type:'activity', icon:'🐄', title:'Farm Sanctuary', tag:'optional', sub:'Watkins Glen · Guided tours of the famous farm-animal rescue — very kid-friendly. Sunday tours run in October; check schedule and book ahead.', url:'https://www.farmsanctuary.org/visit/' },
      { type:'activity', icon:'🏞', title:'Robert H. Treman State Park', tag:'optional', sub:'~15 min from Ithaca · Enfield Glen gorge walk to 115-ft Lucifer Falls. Only if everyone still wants one more gorge — skipping it is fine.', url:'https://parks.ny.gov/visit/state-parks/robert-h-treman-state-park' },
      { type:'activity', icon:'🌊', title:'Niagara version of this day', tag:'optional', sub:'If the Niagara option was chosen on Oct 2–3, this whole day is replaced — see the dedicated "Niagara Falls · Flex Option" card below for the full plan (drive, Maid of the Mist, Cave of the Winds, Goat Island, illumination, overnight, and the Oct 5 drive to NJ).' },
    ]
  },
  d16: {
    date: '2026-10-04', title: 'FLEX Day 1: Watkins Glen → Niagara Falls',
    badge: 'drive', badgeLabel: 'Flex Option',
    content: [
      { type:'activity', icon:'🌀', title:'Only if chosen on the Oct 2–3 decision point', sub:'This card activates only if the family said YES in the Finger Lakes: still excited, kids handling hotels well, weather favorable, not yet waterfalled-out. Otherwise ignore it — the base plan (Oct 4 lake day, Oct 5 drive to NJ) stands. One night is the right dose; see Option B below for when two would make sense.' },
      { type:'drive', text:'~150 miles · ~2.5–3 hrs · NY-14 N → I-90 W → I-190 N · Leave Watkins Glen in the morning, arrive early afternoon',
        route:{ from:'Watkins Glen, NY', to:'Niagara Falls State Park, Niagara Falls, NY' } },
      { type:'activity', icon:'🌊', title:'Niagara Falls afternoon', sub:'Check in, then walk into the state park for the first look from Prospect Point. Park the car once — everything on the NY side is walkable from the falls-adjacent hotels.' },
      { type:'activity', icon:'💨', title:'Cave of the Winds', sub:'Elevator 175 ft down, then wooden walkways to the Hurricane Deck at the base of Bridal Veil Falls. You WILL get soaked — sandals and ponchos provided. Check fall operating status before counting on it.', url:'https://www.niagarafallsstatepark.com/attractions-and-tours/cave-of-the-winds' },
      { type:'activity', icon:'🌈', title:'Illuminated falls at night', sub:'The falls are lit in color every night from dusk — visible from Prospect Point, a short walk from the NY-side hotels. Fireworks run some fall evenings; check the schedule.', url:'https://www.niagarafallsusa.com/' },
      { type:'activity', icon:'🏨', title:'Sleep Niagara Falls (NY side)', sub:'One night. Book a hotel walkable to the state park so the illumination is a stroll, not a drive. Book only once the decision is made — keep it refundable.' },
    ]
  },
  d17: {
    date: '2026-10-05', title: 'FLEX Day 2: Maid of the Mist → NJ',
    badge: 'drive', badgeLabel: 'Flex Option',
    content: [
      { type:'activity', icon:'⛴', title:'Maid of the Mist', sub:'First boats of the morning have the shortest lines. The classic ride to the base of Horseshoe Falls — ponchos provided, kids love it. Runs into early November, weather permitting. Timed tickets online.', url:'https://www.maidofthemist.com/' },
      { type:'activity', icon:'🏝', title:'Goat Island walk', sub:'Stroller-friendly paths between the American and Horseshoe Falls: Terrapin Point for the big panorama, Three Sisters Islands for rapids up close. Free.' },
      { type:'activity', icon:'🍽', title:'Lunch before the drive', sub:'Eat properly in Niagara Falls before setting out — it\'s the longest drive of the trip and a good meal buys quiet miles.' },
      { type:'drive', text:'~400 miles · ~6–6.5 hrs · I-90 E → I-81 S → I-380/I-80 E · Plan two proper breaks (Syracuse and Scranton areas split it in thirds).',
        route:{ from:'Niagara Falls, NY', to:'Newark, NJ' } },
      { type:'activity', icon:'🇨🇦', title:'Option B: a 2nd Niagara night?', tag:'optional', sub:'Only makes sense if you add the Canadian side: Butterfly Conservatory, Whirlpool Aero Car, Journey Behind the Falls, Niagara-on-the-Lake (beautiful town) and winery visits. Needs passports + border crossing both ways with kids, and pushes NJ arrival to Oct 6. For this trip, 1 night is the recommended dose — treat Option B as a stretch goal, not the default.' },
    ]
  },
  d11: {
    date: '2026-10-05', title: 'Drive Watkins Glen → NJ (~4 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~230 miles · ~4 hrs · NY-13 S → I-81 S → I-380/I-80 E · Treat as a transfer day — sleep in NJ tonight',
        route:{ from:'Watkins Glen, NY', to:'Newark, NJ', via:['Binghamton, NY','Scranton, PA'] } },
      { type:'activity', icon:'🛑', title:'Plan one proper meal break', sub:'Binghamton or Scranton splits the drive roughly in half — schedule the stop by time, not by complaints.' },
      { type:'activity', icon:'🏠', title:'Arrive at the NJ family base', sub:'Oct 5–15 wind-down and family time. A Lake George reunion weekend (~Oct 10–12) makes an easy excursion from here before the EWR departure.' },
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
        { key: 'hotel-fl', label: 'Finger Lakes — Watkins Glen lodge / lakeside inn (5 nights)', type: 'booking', priority: 'critical', status: 'pending', dates: 'Sep 30 – Oct 5', reservation_deadline: '2026-08-01', notes: 'Book the last night (Oct 4) free-cancellation — the Niagara flex option would check out Oct 4 instead. Night of Oct 5 is at the NJ base either way' },
        { key: 'hotel-niagara', label: 'Niagara Falls — flex option, 1 night (only if chosen)', type: 'booking', priority: 'optional', status: 'pending', dates: 'Oct 4 – Oct 5', notes: 'Do NOT commit now. Decide evening of Oct 2–3 in the Finger Lakes; book that night if going' },
      ]
    },
    {
      id: 'activities',
      icon: '🎟',
      title: 'Reservations',
      items: [
        { key: 'act-marathon', label: 'Adirondack Half Marathon', type: 'booking', priority: 'critical', status: 'done', url: 'https://www.adirondackmarathon.org/', notes: 'Sun Sep 27 · Schroon Lake · expo & packet pickup Sat Sep 26' },
        { key: 'act-corning', label: 'Corning Museum of Glass', type: 'booking', priority: 'critical', status: 'pending', url: 'https://home.cmog.org/visit', notes: 'Oct 1 · book Make-Your-Own-Glass slot ahead · rain-proof' },
        { key: 'act-boat', label: 'Cayuga Lake boat — pontoon rental or cruise', type: 'booking', priority: 'recommended', status: 'pending', notes: 'Oct 4 · book 1–2 days ahead from the Finger Lakes once weather is known' },
        { key: 'act-niagara-decision', label: 'DECIDE: Niagara flex option', type: 'todo', priority: 'recommended', status: 'pending', notes: 'Evening of Oct 2–3 · still excited? kids OK with hotels? weather good? enough waterfalls already? If go: book Niagara night + Maid of the Mist, cancel the last Watkins Glen night' },
      ]
    },
    {
      id: 'ops',
      icon: '📋',
      title: 'Before You Fly',
      items: [
        { key: 'ops-offline-maps', label: 'Download offline Google Maps (all regions)', type: 'todo', priority: 'critical', status: 'pending', url: 'https://support.google.com/maps/answer/6291838', notes: 'Needs Wi-Fi — do before departure' },
        { key: 'ops-esim', label: 'Buy US eSIM — Airalo or Holafly', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.airalo.com/', notes: 'Activate 1 day before landing' },
        { key: 'ops-packing', label: 'Pack: rain layers, hiking shoes, warm layers, snacks & bottles', type: 'todo', priority: 'critical', status: 'pending', notes: 'Oct nights are cold (35–45°F) — waterproof layer per person' },
      ]
    }
  ]
},

};
