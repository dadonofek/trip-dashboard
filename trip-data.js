// ─────────────────────────────────────────────────────────────
//  TRIP DATA  –  edit this file to change days, regions, etc.
//  index.html reads this and renders everything automatically.
// ─────────────────────────────────────────────────────────────

// ── TRIP SPAN ──────────────────────────────────────────────
// Overall trip window (ISO dates). Drives the calendar view's
// month range and the in-range day shading.
const TRIP = { start: '2026-09-25', end: '2026-10-15' };

// ── MAP ROUTE (lat/lng pairs) ──────────────────────────────
const ROUTE = [
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
  [42.10,-75.91],     // Binghamton / I-86
  [42.08,-75.38],     // I-86 east
  [42.08,-74.91],     // Monticello
  [41.80,-74.42],     // Liberty
  [41.73,-74.19],     // Ellenville
  [41.7476,-74.0868], // ★ NEW PALTZ
  [41.50,-74.01],     // I-87 south / Newburgh
  [41.22,-73.98],     // Harriman
  [41.07,-73.87],     // Tarrytown
  [40.85,-73.96],     // GWB
  [40.77,-74.07],     // back into NJ
  [40.6895,-74.1745]  // ★ EWR / NJ end
];

// ── MAP MARKERS ────────────────────────────────────────────
const STOPS = [
  { lat:40.6895, lng:-74.1745, label:'NJ', color:'#D97706', main:true,  regionId:'nj',           title:'NJ Family Base / EWR',            dates:'Oct 7–15' },
  { lat:43.0831, lng:-73.7846, label:'🏛', color:'#64748b', main:false, regionId:'adirondacks',   title:'Saratoga Springs (lunch stop)',     dates:'Sep 25' },
  { lat:44.2795, lng:-73.9799, label:'LP', color:'#059669', main:true,  regionId:'adirondacks',   title:'Lake Placid / Mirror Lake',        dates:'Sep 25 – 30' },
  { lat:42.3806, lng:-76.8733, label:'WG', color:'#7C3AED', main:true,  regionId:'finger-lakes',  title:'Watkins Glen State Park',          dates:'Sep 30 – Oct 4' },
  { lat:42.1460, lng:-77.0547, label:'CG', color:'#7C3AED', main:true,  regionId:'finger-lakes',  title:'Corning Museum of Glass',          dates:'Oct 1' },
  { lat:42.4476, lng:-76.4869, label:'IT', color:'#7C3AED', main:true,  regionId:'finger-lakes',  title:'Ithaca / Cornell Botanic Gardens', dates:'Oct 3' },
  { lat:42.6958, lng:-74.3368, label:'HC', color:'#DC2626', main:true,  regionId:'hudson',        title:'Howe Caverns',                     dates:'Oct 4' },
  { lat:41.7476, lng:-74.0868, label:'NP', color:'#DC2626', main:true,  regionId:'hudson',        title:'New Paltz',                        dates:'Oct 4–7' },
  { lat:44.3516, lng:-73.8587, label:'💧', color:'#64748b', main:false, regionId:'adirondacks',   title:'High Falls Gorge',                 dates:'Sep 28' },
  { lat:44.3659, lng:-73.9026, label:'🏔', color:'#64748b', main:false, regionId:'adirondacks',   title:'Whiteface Veterans\' Memorial Highway', dates:'Sep 29' },
  { lat:44.2279, lng:-74.4644, label:'🦦', color:'#64748b', main:false, regionId:'adirondacks',   title:'The Wild Center, Tupper Lake',     dates:'Sep 30' },
  { lat:42.5386, lng:-76.6073, label:'💦', color:'#64748b', main:false, regionId:'finger-lakes',  title:'Taughannock Falls',                dates:'Oct 3' },
  { lat:41.7079, lng:-74.0110, label:'WH', color:'#DC2626', main:false, regionId:'hudson',        title:'Walkway Over the Hudson',          dates:'Oct 5' },
  { lat:41.7350, lng:-74.2373, label:'🏞', color:'#64748b', main:false, regionId:'hudson',        title:'Minnewaska State Park',            dates:'Oct 5' },
  { lat:41.7688, lng:-74.1567, label:'🏰', color:'#64748b', main:false, regionId:'hudson',        title:'Mohonk Preserve',                  dates:'Oct 5 (optional splurge)' },
];

// ── REGIONS ────────────────────────────────────────────────
// Each region has: id, emoji, title, colorVar (CSS var name),
// dates, infoCard (or null), and an ordered list of day ids.
const REGIONS = [
  {
    id: 'nj',
    emoji: '🏠',
    title: 'NJ Family Base',
    colorVar: '--nj',
    dates: 'Oct 7 – 15',
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
    colorVar: '--adirondacks',
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
    colorVar: '--finger-lakes',
    dates: 'Sep 30 – Oct 4',
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
        { icon:'🍷', name:'Seneca Lake Wine Trail',        sub:'35+ wineries along both shores. Drive the loop, stop at 3–4. Highlights: Wagner Vineyards, Castel Grisch, Hazlitt\'s 1852. No reservation usually needed mid-week.' },
        { icon:'🦕', name:'Museum of the Earth',           sub:'1259 Trumansburg Rd, Ithaca · Fossils, dinosaurs, hands-on paleontology. Very kid-friendly. ~$10/adult.', url:'https://www.museumoftheearth.org/visit/plan-your-visit' },
        { icon:'🌾', name:'Windmill Farm &amp; Craft Market', sub:'Penn Yan, ~30 min · Saturdays only. Large open-air market: local food, crafts, produce, baked goods. Worth the drive.' },
        { icon:'🎭', name:'Hangar Theatre',                sub:'Ithaca · Professional regional theater in a converted 1940s airplane hangar. Check schedule for fall shows.' },
      ]
    },
    days: ['d7', 'd8', 'd9', 'd10']
  },
  {
    id: 'hudson',
    emoji: '🍂',
    title: 'Hudson Valley · Catskills',
    colorVar: '--hudson',
    dates: 'Oct 4 – Oct 7',
    weather: { name: 'New Paltz, NY', lat: 41.7476, lon: -74.0868 },
    infoCard: {
      prefix: 'hv',
      eat: [
        { icon:'🥞', name:'Main Street Bistro',          badge:'rb-casual', badgeLabel:'Casual', sub:'59 Main St · New Paltz\'s beloved breakfast &amp; brunch institution for 30+ years. Arrive early on weekends — line forms outside.', url:'https://www.mainstreetbistro.com/menu/' },
        { icon:'🍺', name:'Garvan\'s Gastropub',         badge:'rb-brew',   badgeLabel:'Brew',   sub:'215 Huguenot St · Traditional Irish food in an actual 1759 building. Full of character. Great for an evening out.', url:'https://www.garvans.com/dinner.html' },
        { icon:'🌶', name:'Lola\'s',                     badge:'rb-casual', badgeLabel:'Casual', sub:'Main St · Eclectic menu mixing Southern comfort, Thai, and global flavors. Strong cocktails. Local favorite.', url:'https://www.lolascafeandcatering.com/menu/new-paltz-menu/' },
        { icon:'🍷', name:'Jar\'d Wine Pub',             badge:'rb-wine',   badgeLabel:'Wine',   sub:'68 Main St · Natural &amp; biodynamic wines, cozy back porch overlooking the Wallkill rail trail. Low-key and great.', url:'https://www.tripadvisor.com/Restaurant_Review-g48245-d4041829-Reviews-Jar_d_Wine_Pub-New_Paltz_Catskill_Region_New_York.html' },
        { icon:'🍺', name:'Bacchus Restaurant &amp; Bar',badge:'rb-brew',   badgeLabel:'Brew',   sub:'Long list of Hudson Valley craft beers + full pub menu. Lively on weekend evenings.' },
      ],
      nohike: [
        { icon:'🏛', name:'Huguenot Street Historic District', sub:'New Paltz · America\'s oldest surviving street (1692). Six original stone houses still standing. Self-guided walking or paid guided tours.', url:'https://www.huguenotstreet.org/visit' },
        { icon:'🎨', name:'Samuel Dorsky Museum of Art',       sub:'SUNY New Paltz campus · Free. Strong rotating exhibitions, contemporary &amp; American art. Worth 1–2 hours.', url:'https://www.newpaltz.edu/museum/information/museumvisit.html' },
        { icon:'🎸', name:'Woodstock Village',                 sub:'~30 min west · The iconic music town. Great galleries, eclectic shops, live music &amp; coffee. Easy half-day escape.' },
        { icon:'🏡', name:'FDR Home &amp; Presidential Library',sub:'Hyde Park, ~50 min north · Roosevelt\'s family estate + Eleanor\'s Val-Kill cottage. ~$20/adult. Fascinating in any season.' },
        { icon:'🎨', name:'Olana State Historic Site',         sub:'Hudson, ~1 hr north · Frederic Church\'s Persian-style mansion with jaw-dropping Hudson Valley panorama. Stunning in October foliage.' },
      ]
    },
    days: ['d11', 'd12', 'd13', 'd14']
  }
];

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
const DAYS = {
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
    ]
  },
  d11: {
    date: '2026-10-04', title: 'Howe Caverns → New Paltz (~4 hrs total)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'Finger Lakes → Howe Caverns → New Paltz · ~3 hrs to the caverns, ~1.5 hrs on to New Paltz · I-86 E → I-88 E → I-87 S',
        route:{ from:'Watkins Glen, NY', to:'New Paltz, NY', via:['Howe Caverns, Howes Cave, NY'] } },
      { type:'activity', icon:'🕳', title:'Howe Caverns cave tour', sub:'156 feet underground, 52°F year-round — bring a layer. The classic 1.5-hr guided Traditional Tour walks paved, lit paths through the caverns. Fully rain-proof. Book ahead on a Columbus Day weekend Saturday.', url:'https://howecaverns.com/' },
      { type:'activity', icon:'🚣', title:'Underground boat ride', sub:'The tour ends with a quiet boat ride across the Lake of Venus on the underground river — a hit with kids.' },
      { type:'activity', icon:'🏨', title:'Continue to New Paltz', sub:'~1.5 hrs on to New Paltz. Village is walkable; Minnewaska is a 15-min drive and Mohonk is nearby. Check in and take an easy dinner on Main Street.' },
    ]
  },
  d12: {
    date: '2026-10-05', title: 'Minnewaska State Park · Shawangunk Ridge',
    badge: 'hike', badgeLabel: 'Hike',
    content: [
      { type:'activity', icon:'🏔', title:'Minnewaska State Park Preserve', sub:'Sky Lakes, white conglomerate cliffs, incredible foliage. Reserve parking online in advance — fills up fast on weekends.', url:'https://parks.ny.gov/visit/state-parks/minnewaska-state-park-preserve' },
      { type:'hiketabs', prefix:'minn', tabs:[
        { id:'base',    label:'Base',    active:true,
          title:'Awosting Falls + Lake Minnewaska loop',
          note:'Hits the best highlights. Family-friendly.',
          stats:['3.5 mi','~350 ft','Easy-Mod'],
          url:'https://www.alltrails.com/trail/us/new-york/lake-minnewaska-awosting-falls' },
        { id:'upgrade', label:'Upgrade',
          title:'Lake Awosting loop',
          note:'Full ridge traverse. More solitude. Pack lunch.',
          stats:['8 mi','~900 ft','Moderate'],
          url:'https://www.alltrails.com/trail/us/new-york/lake-awosting-via-reserve-access-and-purple-loop' },
      ]},
      { type:'activity', icon:'🏰', title:'Mohonk Preserve / Mountain House', tag:'splurge', style:'margin-top:10px',
        sub:'Spectacular Victorian castle resort. Day hiker fee ~$30/person. Worth it if budget allows.', url:'https://www.mohonk.com/experience-passes/hiking-trails-pass/' },
    ]
  },
  d13: {
    date: '2026-10-06', title: 'Walkway Over the Hudson + apple orchard',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'🌉', title:'Walkway Over the Hudson', sub:'Highland, ~20 min from New Paltz · Free, open 7am–sunset. 1.28 miles gate-to-gate, 212 ft above the Hudson River. Fully fenced — excellent with small children. The best dramatic Hudson Valley view without any trail difficulty. Easy 5.1 km out-and-back.', url:'https://walkway.org/visit/' },
      { type:'activity', icon:'🍎', title:'Apple orchard — Masker Orchards', sub:'Warwick, ~50 min · Classic pick-your-own with hayride access to the rows. Big, festive, very kid-friendly in peak October apple season.', url:'https://www.maskers.com/' },
      { type:'activity', icon:'🍏', title:'Alternative: Fishkill Farms', tag:'optional', sub:'Hopewell Junction, ~35 min · Smaller, more curated pick-your-own with apples, cider donuts and a farm store. Good rainy-weekend backup to Masker.', url:'https://www.fishkillfarms.com/' },
    ]
  },
  d14: {
    date: '2026-10-07', title: 'Drive New Paltz → NJ (~1.5 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~90 miles · ~1.5 hrs · I-87 S → I-287 W',
        route:{ from:'New Paltz, NY', to:'Newark, NJ' } },
      { type:'activity', icon:'🏠', title:'Return to NJ family base', sub:'Oct 7–15 wind-down and family time. A Lake George reunion weekend (~Oct 10–12) makes an easy excursion from here before the EWR departure.' },
    ]
  },
};

// ── RESOURCES (trip operations center) ─────────────────────
// Each section has: id, icon, title, intro (optional), items[]
// Each item has:
//   label        — display text
//   type         — booking | info | todo | live-map | live-weather | forecast
//   priority     — critical | recommended | optional
//   status       — pending | reserved | done
//   url          — (optional) direct link
//   dates        — (optional) e.g. "Sep 27 – Oct 2"
//   notes        — (optional) sub-text hint
//   reservation_deadline — (optional) e.g. "2026-08-01"
const RESOURCES = {
  sections: [
    {
      id: 'flights',
      icon: '✈️',
      title: 'Flights',
      items: [
        { label: 'EL AL flight booking (EWR round-trip)', type: 'booking', priority: 'critical', status: 'done', refNote: 'Flight tickets (iCloud)', refUrl: 'https://www.icloud.com/iclouddrive/0afUqBB17d_tyn1tZTOaAH50g#New_flight_tickets' },
        { label: 'ESTA — US visa waiver application', type: 'booking', priority: 'critical', status: 'pending', url: 'https://esta.cbp.dhs.gov/', notes: 'Apply at least 72 hrs before departure' },
        { label: 'Newark Airport (EWR) terminal map', type: 'info', priority: 'recommended', status: 'pending', url: 'https://www.newarkairport.com/maps-and-guides' },
        { label: 'EWR Rental Car Center — AirTrain directions', type: 'info', priority: 'recommended', status: 'pending', url: 'https://www.newarkairport.com/transportation/airport-car-rentals' },
      ]
    },
    {
      id: 'car',
      icon: '🚗',
      title: 'Car Rental — EWR',
      intro: 'All major agencies at the <strong>EWR Rental Car Center</strong> — free AirTrain from any terminal (~10 min). <strong>Book in advance</strong>: walk-up rates run 3–4× higher. NY &amp; NJ tolls are fully cashless — accept an E-ZPass transponder from the agency or bring your own.',
      items: [
        { label: 'Alamo — Newark Airport (SUV / minivan)', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.alamo.com/en/car-rental/locations/us/nj/ewr.html' },
        { label: 'National — Newark Airport (alternative)', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://www.nationalcar.com/en/car-rental/locations/us/nj/newark-liberty-international-airport.html' },
        { label: 'Hertz — Newark Airport', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://www.hertz.com/rentacar/location/unitedstates/newjersey/newark/EWRT11' },
        { label: 'NJ EZPass — cashless tolls info', type: 'info', priority: 'critical', status: 'pending', url: 'https://www.ezpassnj.com/' },
        { label: 'Verify child seat availability with rental company', type: 'todo', priority: 'critical', status: 'pending' },
        { label: 'Photograph all 4 corners at pickup + dropoff', type: 'todo', priority: 'recommended', status: 'pending' },
      ]
    },
    {
      id: 'hotels',
      icon: '🏨',
      title: 'Hotels & Stays',
      items: [
        { label: 'Lake Placid — Mirror Lake Inn or Main St motel (5 nights)', type: 'booking', priority: 'critical', status: 'done', dates: 'Sep 25 – Sep 30', reservation_deadline: '2026-07-01', refNote: 'Accommodation booking (iCloud)', refUrl: 'https://www.icloud.com/iclouddrive/00cnF63Bkv2tFuED7Waq6EBfg#Lake_placid_accommodation_' },
        { label: 'Finger Lakes — Watkins Glen lodge / lakeside inn (4 nights)', type: 'booking', priority: 'critical', status: 'pending', dates: 'Sep 30 – Oct 4', reservation_deadline: '2026-08-01' },
        { label: 'Hudson Valley — New Paltz village hotel / B&B (3 nights)', type: 'booking', priority: 'critical', status: 'pending', dates: 'Oct 4 – Oct 7', reservation_deadline: '2026-08-01' },
        { label: 'NJ — family base (no booking needed)', type: 'info', priority: 'recommended', status: 'done', dates: 'Oct 7 – Oct 15' },
        { label: 'NY State Campgrounds — Reserve America', type: 'booking', priority: 'optional', status: 'pending', url: 'https://newyorkstateparks.reserveamerica.com/' },
        { label: 'Ausable Chasm Campground (optional base camp)', type: 'booking', priority: 'optional', status: 'pending', url: 'https://www.ausablechasm.com/ausable-chasm-campground' },
      ]
    },
    {
      id: 'foliage',
      icon: '🍂',
      title: 'Foliage Tracking',
      items: [
        { label: 'Official I LOVE NY Fall Foliage Report', type: 'live-map', priority: 'critical', status: 'pending', url: 'https://www.iloveny.com/things-to-do/fall/foliage-report/', notes: 'Statewide weekly report + interactive color map (Adirondacks, Catskills, Finger Lakes regions)' },
        { label: 'ExploreFall — New York', type: 'live-map', priority: 'recommended', status: 'pending', url: 'https://www.explorefall.com/states/new-york', notes: 'County-by-county color predictions and reader reports' },
        { label: 'SmokyMountains.com Predictive Foliage Map', type: 'forecast', priority: 'recommended', status: 'pending', url: 'https://smokymountains.com/fall-foliage-map/', notes: 'Nationwide week-by-week slider — drag to your travel dates' },
        { label: 'Adirondack Foliage Report', type: 'live-map', priority: 'recommended', status: 'pending', url: 'https://visitadirondacks.com/things-to-do/foliage', notes: 'Best for the Lake Placid / High Peaks stretch (peaks late Sep — you arrive on time)' },
        { label: 'Monitor foliage reports — 7 days before Sep 27 arrival', type: 'todo', priority: 'critical', status: 'pending' },
      ]
    },
    {
      id: 'activities',
      icon: '🎟',
      title: 'Reservations & Attractions',
      items: [
        { label: 'Adirondack Half Marathon', type: 'booking', priority: 'critical', status: 'done', url: 'https://www.adirondackmarathon.org/', notes: 'Sun Sep 27 · Schroon Lake · expo & packet pickup Sat Sep 26' },
        { label: 'Corning Museum of Glass', type: 'booking', priority: 'critical', status: 'pending', url: 'https://home.cmog.org/visit', notes: 'Oct 1 · book Make-Your-Own-Glass slot ahead · rain-proof' },
        { label: 'Howe Caverns Tour', type: 'booking', priority: 'critical', status: 'pending', url: 'https://howecaverns.com/', notes: 'Oct 4 · cave tour + boat ride en route to New Paltz' },
        { label: 'Minnewaska State Park — parking reservation', type: 'booking', priority: 'critical', status: 'pending', url: 'https://parks.ny.gov/parks/minnewaska', notes: 'Fills fast on Oct weekends' },
        { label: 'Ausable Chasm — hours & rates', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://www.ausablechasm.com/hours-rates' },
        { label: 'Whiteface Mountain Gondola', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://whiteface.com/', notes: 'Gondola Fri–Sun only after Sep 11' },
        { label: 'Watkins Glen State Park entry', type: 'booking', priority: 'recommended', status: 'pending', url: 'https://parks.ny.gov/parks/watkinsglen' },
        { label: 'Mohonk day hiker pass (optional splurge ~$30/pp)', type: 'booking', priority: 'optional', status: 'pending' },
        { label: 'Wild Center — Tupper Lake visitor info', type: 'info', priority: 'recommended', status: 'pending', url: 'https://wildcenter.org/' },
        { label: 'Adirondacks Visitor Guide — first-time visitors', type: 'info', priority: 'recommended', status: 'pending', url: 'https://visitadirondacks.com/first-time-visitors' },
      ]
    },
    {
      id: 'weather',
      icon: '🌤',
      title: 'Live Weather',
      items: [
        { label: 'Whiteface Mountain summit forecast (Adirondacks)', type: 'live-weather', priority: 'critical', status: 'pending', url: 'https://www.mountain-forecast.com/peaks/Whiteface-Mountain/forecasts/1483', notes: 'Summit often 10–20°F colder than the village — pack extra layers' },
        { label: 'Adirondacks / North Country — NWS Burlington', type: 'live-weather', priority: 'recommended', status: 'pending', url: 'https://www.weather.gov/btv/' },
        { label: 'Capital Region & Hudson Valley — NWS Albany', type: 'live-weather', priority: 'recommended', status: 'pending', url: 'https://www.weather.gov/aly/' },
        { label: 'Finger Lakes / Southern Tier — NWS Binghamton', type: 'live-weather', priority: 'recommended', status: 'pending', url: 'https://www.weather.gov/bgm/' },
      ]
    },
    {
      id: 'ops',
      icon: '📋',
      title: 'Ops & Gear',
      items: [
        { label: 'Download offline Google Maps (all 5 regions)', type: 'todo', priority: 'critical', status: 'pending', url: 'https://support.google.com/maps/answer/6291838', notes: 'Needs Wi-Fi — do before departure' },
        { label: 'Buy US eSIM — Airalo or Holafly', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.airalo.com/', notes: 'Activate 1 day before landing' },
        { label: 'Install NY Tolls by Mail app (backup if no E-ZPass)', type: 'todo', priority: 'critical', status: 'pending' },
        { label: 'Pack rain backup activity list per region', type: 'todo', priority: 'recommended', status: 'pending' },
        { label: 'Waterproof layer for each family member', type: 'todo', priority: 'critical', status: 'pending' },
        { label: 'Hiking shoes / waterproof boots', type: 'todo', priority: 'critical', status: 'pending' },
        { label: 'Layers — Oct nights are cold (35–45°F)', type: 'todo', priority: 'critical', status: 'pending' },
        { label: 'Snacks & reusable water bottles', type: 'todo', priority: 'recommended', status: 'pending' },
        { label: 'Car phone mount', type: 'todo', priority: 'recommended', status: 'pending' },
      ]
    }
  ]
};
