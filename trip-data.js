// ─────────────────────────────────────────────────────────────
//  TRIP DATA  –  edit this file to change days, regions, etc.
//  index.html reads this and renders everything automatically.
// ─────────────────────────────────────────────────────────────

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
  { lat:40.6895, lng:-74.1745, label:'NJ', color:'#D97706', main:true,  regionId:'nj',           title:'NJ Family Base / EWR',            dates:'Oct 9–15' },
  { lat:43.0831, lng:-73.7846, label:'🏛', color:'#64748b', main:false, regionId:'adirondacks',   title:'Saratoga Springs (lunch stop)',     dates:'Sep 27' },
  { lat:44.2795, lng:-73.9799, label:'LP', color:'#059669', main:true,  regionId:'adirondacks',   title:'Lake Placid / Mirror Lake',        dates:'Sep 27 – Oct 2' },
  { lat:43.4262, lng:-73.7123, label:'LG', color:'#0284C7', main:true,  regionId:'lake-george',   title:'Lake George Village',              dates:'Oct 2–4' },
  { lat:42.3806, lng:-76.8733, label:'WG', color:'#7C3AED', main:true,  regionId:'finger-lakes',  title:'Watkins Glen State Park',          dates:'Oct 4–7' },
  { lat:42.4476, lng:-76.4869, label:'IT', color:'#7C3AED', main:true,  regionId:'finger-lakes',  title:'Ithaca / Cornell Botanic Gardens', dates:'Oct 6' },
  { lat:41.7476, lng:-74.0868, label:'NP', color:'#DC2626', main:true,  regionId:'hudson',        title:'New Paltz',                        dates:'Oct 7–9' },
  { lat:44.3516, lng:-73.8587, label:'💧', color:'#64748b', main:false, regionId:'adirondacks',   title:'High Falls Gorge',                 dates:'Sep 29' },
  { lat:44.3659, lng:-73.9026, label:'🏔', color:'#64748b', main:false, regionId:'adirondacks',   title:'Whiteface Veterans\' Memorial Highway', dates:'Oct 1' },
  { lat:44.2279, lng:-74.4644, label:'🦦', color:'#64748b', main:false, regionId:'adirondacks',   title:'The Wild Center, Tupper Lake',     dates:'Sep 30' },
  { lat:43.4246, lng:-73.7532, label:'⛰', color:'#64748b', main:false, regionId:'lake-george',   title:'Prospect Mountain',                dates:'Oct 3' },
  { lat:42.5386, lng:-76.6073, label:'💦', color:'#64748b', main:false, regionId:'finger-lakes',  title:'Taughannock Falls',                dates:'Oct 5/6' },
  { lat:41.7350, lng:-74.2373, label:'🏞', color:'#64748b', main:false, regionId:'hudson',        title:'Minnewaska State Park',            dates:'Oct 8' },
  { lat:41.7688, lng:-74.1567, label:'🏰', color:'#64748b', main:false, regionId:'hudson',        title:'Mohonk Preserve',                  dates:'Oct 8 (optional splurge)' },
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
    dates: 'Oct 9–15',
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
    dates: 'Sep 27 – Oct 2',
    infoCard: {
      prefix: 'adk',
      eat: [
        { icon:'🥪', name:'Big Mountain Deli &amp; Creperie',    badge:'rb-casual', badgeLabel:'Casual',  sub:'2475 Main St · Crêpes, sandwiches, smoothies, vegetarian options. Kid-friendly, quick turnover. Sun–Thu 8am–3pm, Fri–Sat 8am–5pm.' },
        { icon:'☕', name:'Origin Coffee Co.',                   badge:'rb-casual', badgeLabel:'Casual',  sub:'2669 Main St · Best specialty coffee, matcha &amp; smoothies in the village. Breakfast and lunch all day. Strongest non-alcoholic menu in Lake Placid.' },
        { icon:'🍝', name:'Caffe Rustica',                       badge:'rb-fine',   badgeLabel:'Fine',    sub:'1936 Saranac Ave · House-made pasta &amp; fresh seafood. Best Italian in the Adirondacks.' },
        { icon:'🌊', name:'The Cottage at Mirror Lake',          badge:'rb-casual', badgeLabel:'Casual',  sub:'77 Mirror Lake Dr · American food with lakeside patio views. Perfect for a relaxed dinner.' },
        { icon:'🍔', name:'Noon Mark Burgers &amp; Pie',         badge:'rb-casual', badgeLabel:'Casual',  sub:'Main St · Classic diner energy. Great burgers, homemade pies. Very kid-friendly.' },
      ],
      nohike: [
        { icon:'🏆', name:'Olympic Museum',              sub:'2634 Main St · Open 9:30am–5pm daily. North America\'s 2nd-largest Winter Olympic collection. 1980 "Miracle on Ice" artifacts. ~$15/adult, great for families.' },
        { icon:'🛶', name:'Mirror Lake Paddling',         sub:'Kayak &amp; canoe rentals from Mirror Lake Inn or local outfitters. Calm flat water, easy for all ages. Beautiful foliage views.' },
        { icon:'🎳', name:'Big Z\'s Bowling &amp; Entertainment', sub:'State-of-the-art lanes, full arcade, multi-sport simulator, shuffleboard. Solid rainy-day option.' },
        { icon:'🎬', name:'Palace Theatre',               sub:'Downtown Lake Placid · Historic single-screen theater showing current films. Affordable, cozy afternoon escape.' },
        { icon:'🛍', name:'Main Street Shopping',         sub:'Galleries, outdoor gear, fudge shops, Olympic memorabilia stores. An easy 2-hour wander with something for everyone.' },
      ]
    },
    days: ['d3', 'd_sep28', 'd4', 'd5', 'd_oct1', 'd6']
  },
  {
    id: 'lake-george',
    emoji: '🌊',
    title: 'Lake George',
    colorVar: '--lake-george',
    dates: 'Oct 2–4',
    infoCard: {
      prefix: 'lg',
      eat: [
        { icon:'🏕', name:'Log Jam Restaurant',      badge:'rb-fine',   badgeLabel:'Fine',   sub:'1484 US-9 · #1 rated in the area. Adirondack lodge decor, cozy fireplaces, unlimited salad bar. Book ahead on weekends.' },
        { icon:'🌊', name:'Algonquin Restaurant',    badge:'rb-fine',   badgeLabel:'Fine',   sub:'Bolton Landing (~20 min) · True lakeside dining, live deck music in season, handcrafted dishes &amp; sweeping water views.' },
        { icon:'🍝', name:'Mario\'s Restaurant',     badge:'rb-casual', badgeLabel:'Casual', sub:'Canada St · Authentic Italian: veal parm, fettuccine alfredo made fresh. Reliable family crowd-pleaser.' },
        { icon:'🥞', name:'The Silo',                badge:'rb-casual', badgeLabel:'Casual', sub:'Queensbury (~10 min south) · Best breakfast in the region. Massive portions, signature apple cider donuts. Arrive early.' },
        { icon:'🏰', name:'Shepard\'s',              badge:'rb-fine',   badgeLabel:'Fine',   sub:'Stone Queen Anne mansion, lakeside views. Great for a special dinner. Reserve ahead.' },
      ],
      nohike: [
        { icon:'🏰', name:'Fort William Henry Museum',  sub:'Canada St · Living history museum of the 1757 French &amp; Indian War siege. Guided tours, re-enactments, period artifacts.' },
        { icon:'🍷', name:'Adirondack Winery',          sub:'In the Village · Wine tasting room with Adirondack-inspired labels. Easy walk from the waterfront. Pick a bottle for the evening.' },
        { icon:'🚢', name:'Lake George Boat Cruise',    sub:'Lake George Steamboat Co or Shoreline Cruises · See the fall foliage from the water. 1–2 hr tours depart from the village dock.' },
        { icon:'🎨', name:'The Hyde Collection',        sub:'Glens Falls (~15 min) · World-class art in a 1912 historic home — Rembrandt, Picasso, Rubens. Free on Sundays.' },
        { icon:'🛍', name:'Lake George Outlets',        sub:'Half-mile south of Village · 50+ stores (J.Crew, Coach, etc). Good backup for a rainy afternoon.' },
      ]
    },
    days: ['d7', 'd8']
  },
  {
    id: 'finger-lakes',
    emoji: '🍷',
    title: 'Finger Lakes',
    colorVar: '--finger-lakes',
    dates: 'Oct 4–7',
    infoCard: {
      prefix: 'fl',
      eat: [
        { icon:'🍷', name:'Graft Wine + Cider Bar',    badge:'rb-wine',   badgeLabel:'Wine',   sub:'413 N Franklin St, Watkins Glen · Farm-to-table, all locally sourced &amp; seasonal. Best sit-down dinner in town.' },
        { icon:'🚂', name:'Seneca Harbor Station',     badge:'rb-casual', badgeLabel:'Casual', sub:'3 N Franklin St · 1876 train station turned restaurant. Seneca Lake views, great seafood &amp; steaks.' },
        { icon:'🌿', name:'Ravinous Kitchen',          badge:'rb-casual', badgeLabel:'Casual', sub:'Watkins Glen · Field-to-table, weekly changing seasonal menu. Creative &amp; genuinely local.' },
        { icon:'🌱', name:'Moosewood Restaurant',      badge:'rb-casual', badgeLabel:'Casual', sub:'215 N Cayuga St, Ithaca · Legendary vegetarian institution since 1973. A genuine Ithaca landmark.' },
        { icon:'🐟', name:'BoatYard Grill',            badge:'rb-casual', badgeLabel:'Casual', sub:'525 Taughannock Blvd, Ithaca · Best seafood in Ithaca. Cayuga Lake dock views. Great clam chowder &amp; halibut.' },
        { icon:'🍕', name:'Revelry Yards',             badge:'rb-brew',   badgeLabel:'Brew',   sub:'Ithaca · Wood-fired pizza, craft micro-brewery upstairs. Lunch, brunch &amp; dinner. Lively atmosphere.' },
      ],
      nohike: [
        { icon:'🔬', name:'Corning Museum of Glass',      badge:'rb-must', badgeLabel:'★ Must-do', sub:'Corning, ~45 min from Watkins Glen · $25/adult, kids under 17 free. Open 9am–5pm daily. You can make your own glass piece. One of the best museums in the US — easily fills 3 hours.' },
        { icon:'🍷', name:'Seneca Lake Wine Trail',        sub:'35+ wineries along both shores. Drive the loop, stop at 3–4. Highlights: Wagner Vineyards, Castel Grisch, Hazlitt\'s 1852. No reservation usually needed mid-week.' },
        { icon:'🦕', name:'Museum of the Earth',           sub:'1259 Trumansburg Rd, Ithaca · Fossils, dinosaurs, hands-on paleontology. Very kid-friendly. ~$10/adult.' },
        { icon:'🌾', name:'Windmill Farm &amp; Craft Market', sub:'Penn Yan, ~30 min · Saturdays only. Large open-air market: local food, crafts, produce, baked goods. Worth the drive.' },
        { icon:'🎭', name:'Hangar Theatre',                sub:'Ithaca · Professional regional theater in a converted 1940s airplane hangar. Check schedule for fall shows.' },
      ]
    },
    days: ['d9', 'd10', 'd11']
  },
  {
    id: 'hudson',
    emoji: '🍂',
    title: 'Hudson Valley · Catskills',
    colorVar: '--hudson',
    dates: 'Oct 7–9',
    infoCard: {
      prefix: 'hv',
      eat: [
        { icon:'🥞', name:'Main Street Bistro',          badge:'rb-casual', badgeLabel:'Casual', sub:'59 Main St · New Paltz\'s beloved breakfast &amp; brunch institution for 30+ years. Arrive early on weekends — line forms outside.' },
        { icon:'🍺', name:'Garvan\'s Gastropub',         badge:'rb-brew',   badgeLabel:'Brew',   sub:'215 Huguenot St · Traditional Irish food in an actual 1759 building. Full of character. Great for an evening out.' },
        { icon:'🌶', name:'Lola\'s',                     badge:'rb-casual', badgeLabel:'Casual', sub:'Main St · Eclectic menu mixing Southern comfort, Thai, and global flavors. Strong cocktails. Local favorite.' },
        { icon:'🍷', name:'Jar\'d Wine Pub',             badge:'rb-wine',   badgeLabel:'Wine',   sub:'68 Main St · Natural &amp; biodynamic wines, cozy back porch overlooking the Wallkill rail trail. Low-key and great.' },
        { icon:'🍺', name:'Bacchus Restaurant &amp; Bar',badge:'rb-brew',   badgeLabel:'Brew',   sub:'Long list of Hudson Valley craft beers + full pub menu. Lively on weekend evenings.' },
      ],
      nohike: [
        { icon:'🏛', name:'Huguenot Street Historic District', sub:'New Paltz · America\'s oldest surviving street (1692). Six original stone houses still standing. Self-guided walking or paid guided tours.' },
        { icon:'🎨', name:'Samuel Dorsky Museum of Art',       sub:'SUNY New Paltz campus · Free. Strong rotating exhibitions, contemporary &amp; American art. Worth 1–2 hours.' },
        { icon:'🎸', name:'Woodstock Village',                 sub:'~30 min west · The iconic music town. Great galleries, eclectic shops, live music &amp; coffee. Easy half-day escape.' },
        { icon:'🏡', name:'FDR Home &amp; Presidential Library',sub:'Hyde Park, ~50 min north · Roosevelt\'s family estate + Eleanor\'s Val-Kill cottage. ~$20/adult. Fascinating in any season.' },
        { icon:'🎨', name:'Olana State Historic Site',         sub:'Hudson, ~1 hr north · Frederic Church\'s Persian-style mansion with jaw-dropping Hudson Valley panorama. Stunning in October foliage.' },
      ]
    },
    days: ['d12', 'd13']
  }
];

// ── DAYS ───────────────────────────────────────────────────
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
    date: 'Sep 27', title: 'Arrive EWR · Settle in with family',
    badge: 'flex', badgeLabel: 'Flex',
    content: [
      { type:'activity', icon:'✈️', title:'Land at EWR',   sub:'Pick up rental car. Plan for traffic.' },
      { type:'activity', icon:'🏠', title:'Family time',    sub:'Recharge, grocery run, sync on gear.' },
    ]
  },
  d2: {
    date: 'Sep 28', title: 'Rest day · Prep &amp; local explore',
    badge: 'flex', badgeLabel: 'Flex',
    content: [
      { type:'activity', icon:'🛒', title:'Pack for Adirondacks',            sub:'Layers, rain gear, hiking shoes, snacks.' },
      { type:'activity', icon:'🌳', title:'Local park or Palisades walk', tag:'optional', sub:'Easy leg-stretch before the long drive tomorrow.' },
    ]
  },
  d3: {
    date: 'Sep 27', title: 'Arrive EWR → Drive to Lake Placid (~5 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'activity', icon:'✈️', title:'Land at EWR', sub:'Pick up rental car at the EWR Rental Car Center — AirTrain to Terminal A, then walk the covered corridor to the rental building.' },
      { type:'drive', text:'~290 miles · ~4.5–5.5 hrs total · I-87 N → NY-73 W · Final stretch through Keene Valley is spectacular' },
      { type:'activity', icon:'🎠', title:'Stop option A: Saratoga Springs (~3 hrs in)', sub:'Congress Park Carousel: $1/ride, kids under 5 free. Runs Sundays through Halloween — 27 Sep is a Sunday. Stroller-friendly park with duck pond. Lunch on Broadway Ave, Target nearby for supplies. Best family decompression stop before the mountains.' },
      { type:'activity', icon:'🏛', title:'Saratoga indoor backup (weekdays)', tag:'optional', sub:'Children\'s Museum at Saratoga (65 S Broadway) — Tue–Sat 9am–4pm, Sun 1–4pm. $14/person, under 12 months free. Ages 0–10, dedicated infant/toddler zone. Good if weather is poor.' },
      { type:'activity', icon:'🌊', title:'Stop option B: Lake George village (3.5 hrs in)', tag:'optional', sub:'More scenic than Saratoga. Shepard Park waterfront is free with a playground and foliage views. Minne Ha-Ha 1-hr paddlewheel cruise (~$17–26/adult, kids under 4 free) — book ahead, check October schedule. This is where the Adirondack feeling properly begins.' },
      { type:'activity', icon:'🍽', title:'Lunch stop: Noon Mark Diner, Keene Valley', tag:'optional', sub:'1770 NY-73, Keene Valley — daily 7am–4pm. Classic Adirondack diner since 1981. Homemade pies, locally sourced comfort food, high chairs. Perfect 30-min break right on the NY-73 mountain stretch into Lake Placid.' },
      { type:'activity', icon:'🏞', title:'Photo stop: Cascade Lakes pull-off (on NY-73)', sub:'Best zero-effort foliage stop on the entire drive. Twin alpine lakes with sheer cliffs reflecting fall colour. Free parking lot, picnic tables, 10–20 min. Fills early on fall weekends — stop on the way in, not the way back.' },
      { type:'activity', icon:'🏨', title:'Check in Lake Placid', sub:'Mirror Lake Inn or condo with kitchenette. Walk Mirror Lake in the evening — the Rt 73 stretch through Keene Valley is dramatic even at dusk.' },
    ]
  },
  d_sep28: {
    date: 'Sep 28', title: 'First morning in Lake Placid — soft settle-in day',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'☕', title:'Slow village morning', sub:'Origin Coffee Co. (2669 Main St) for specialty coffee and breakfast. No alarm — recovery day, especially if the Sep 27 drive was tiring.' },
      { type:'activity', icon:'🚣', title:'Mirror Lake Boat Rentals', sub:'Pedal-boats and hydrobikes daily 10am–sunset through mid-October. No reservations. Calm flat water, perfect for small kids.' },
      { type:'activity', icon:'🌿', title:'Mirror Lake Loop walk', sub:'Easy flat shoreline loop, stroller-friendly. Beautiful late-September foliage right from the village. Good substitute if the boats don\'t interest the kids.' },
      { type:'activity', icon:'🏘', title:'Day trip option: Saranac Lake (15 min)', tag:'optional', sub:'Calmer and less touristy than Lake Placid. Adirondack Carousel ($2.50/ride, Fri 12–5pm, Sat 10am–5pm, Sun 12–5pm) — 24 hand-carved wildlife figures, very popular with young kids. Lake Flower waterfront walk. Significantly cheaper dining and lodging than Lake Placid.' },
      { type:'activity', icon:'🦋', title:'Paul Smith\'s VIC (20 min from Saranac Lake)', tag:'optional', sub:'Free trails, Tue–Sun 9am–5pm. One fully paved stroller/wheelchair-accessible mile with lookouts. Free butterfly house. Best zero-cost nature stop in the region if you want an easy walk.' },
    ]
  },
  d4: {
    date: 'Sep 29', title: 'High Falls Gorge + Lake Placid village',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'💧', title:'High Falls Gorge', sub:'Short paid walk along AuSable River gorge. Easy Path is stroller-suitable; suspended walkways better with backpack carrier. ~45 min. Free parking.' },
      { type:'hiketabs', prefix:'sep29', tabs:[
        { id:'base', label:'Afternoon Trail', active:true,
          title:'Brewster Peninsula Loop',
          note:'Short easy circuit near Lake Placid. Abandon early if kids flag.',
          stats:['2.1 mi','~150 ft','Easy'],
          url:'https://www.alltrails.com/trail/us/new-york/brewster-peninsula-boundary-and-ridge-trail-loop' },
      ]},
      { type:'activity', icon:'🍦', title:'Lake Placid village afternoon', sub:'Main Street shops, Olympic museum, Mirror Lake shoreline. If everyone is tired after the gorge, skip the trail entirely.' },
    ]
  },
  d5: {
    date: 'Sep 30', title: 'Wild Center + Tupper Lake',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'drive', text:'~45 min drive to Tupper Lake · day trip from Lake Placid base' },
      { type:'activity', icon:'🦦', title:'The Wild Center', sub:'Wild Walk canopy trail, Pines Play Area, animal encounters, 115 acres. Best full family nature day near Lake Placid. Open daily.' },
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
  d_oct1: {
    date: 'Oct 1', title: 'Whiteface Veterans\' Memorial Highway',
    badge: 'hike', badgeLabel: 'Hike/Ride',
    content: [
      { type:'activity', icon:'🏔', title:'Whiteface Veterans\' Memorial Highway', sub:'Open through 12 Oct. Drive-up summit with the best foliage view in the Adirondacks. Summit is at least 10°F colder than the base — pack extra layers. Note: the gondola runs Fri–Sun only after 11 Sep; Oct 1 is a Thursday, so the highway is the right call.' },
      { type:'activity', icon:'🏋', title:'Mt. Van Hoevenberg (backup)', tag:'rain plan', sub:'Indoor climbing wall or Legacy Tour if weather closes the summit. Good all-ages fallback.' },
      { type:'hiketabs', prefix:'oct1', tabs:[
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
    date: 'Oct 2', title: 'Drive Lake Placid → Lake George (~1.5 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~70 miles · ~1.5 hrs · NY-73 E → I-87 S' },
      { type:'activity', icon:'🏨', title:'Check in Lake George Village',    sub:'Fort William Henry Hotel or lakefront motel. Easy base for Prospect Mtn.' },
      { type:'activity', icon:'🌊', title:'Lake George waterfront stroll',   sub:'Million Dollar Beach area, Canada St shops and ice cream.' },
    ]
  },
  d7: {
    date: 'Oct 3', title: 'Prospect Mountain + Lake George village',
    badge: 'explore', badgeLabel: 'Explore',
    content: [
      { type:'activity', icon:'🚗', title:'Prospect Mountain Veterans Memorial Highway', sub:'Drive-up summit (or hike if trail open). Sweeping 100-mile foliage view. Free to hike, small fee to drive.' },
      { type:'activity', icon:'⛵', title:'Minne Ha-Ha paddlewheel cruise', tag:'optional', sub:'One-hour paddlewheel cruise on Lake George. Great for kids. Departs from the village dock.' },
      { type:'activity', icon:'🌳', title:'Shepard Park waterfront', sub:'Free play at the village park. Beach access, benches, lawn space — easy afternoon wind-down.' },
    ]
  },
  d8: {
    date: 'Oct 4', title: 'Drive Lake George → Watkins Glen (~5 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~217 miles · ~5h05–5h15 · I-87 S → I-90 W → I-88 S → NY-414 S · Treat as a full transfer day' },
      { type:'activity', icon:'🛑', title:'Plan for one proper meal break', sub:'5+ hours with small children needs at least one structured rest stop — schedule by time, not by complaints.' },
      { type:'activity', icon:'🏨', title:'Check in near Watkins Glen', sub:'Seneca Lodge (kitchenette cabins next to gorge entrance) or lakeside inn. If late arrival, skip the lakefront walk and take an early dinner.' },
    ]
  },
  d9: {
    date: 'Oct 5', title: 'Watkins Glen Gorge Trail',
    badge: 'hike', badgeLabel: 'Hike',
    content: [
      { type:'activity', icon:'🏞', title:'Watkins Glen Gorge Trail', sub:'800 stone steps, 19 waterfalls, dramatic gorge walls. The best gorge hike in NY. Arrive early — gets busy.' },
      { type:'hiketabs', prefix:'wg', tabs:[
        { id:'base',    label:'Base',    active:true,
          title:'Gorge Trail out-and-back',
          note:'Walk to the top of the gorge, return same way. 45–60 min.',
          stats:['1.6 mi rt','~420 ft','Easy-Mod'],
          url:'https://www.alltrails.com/trail/us/new-york/glen-creek-gorge-trail' },
        { id:'upgrade', label:'Upgrade',
          title:'Gorge + South Rim loop',
          note:'Full loop with elevated south rim views. 1.5–2 hrs.',
          stats:['3 mi','~500 ft','Moderate'],
          url:'https://www.alltrails.com/trail/us/new-york/watkins-glen-south-rim-trail' },
        { id:'stretch', label:'Stretch',
          title:'All trails + North Rim',
          note:'Complete the full trail system. 3–4 hrs. Bring lunch.',
          stats:['5+ mi','~700 ft','Strenuous'],
          url:'https://www.alltrails.com/trail/us/new-york/north-rim-and-gorge-loop' },
      ]},
    ]
  },
  d10: {
    date: 'Oct 6', title: 'Taughannock Falls + Ithaca',
    badge: 'hike', badgeLabel: 'Hike',
    content: [
      { type:'activity', icon:'💧', title:'Taughannock Falls State Park',
        sub:'Tallest waterfall in the Northeast (215 ft — taller than Niagara!). Easy flat gorge walk, ~1.5 mi rt.',
        trailUrl:'https://www.alltrails.com/trail/us/new-york/taughannock-falls-via-gorge-trail' },
      { type:'activity', icon:'🌿', title:'Cornell Botanic Gardens, Ithaca', sub:'Free. Beautiful fall color. Good rainy-day option — much of it is covered/greenhouse.' },
      { type:'activity', icon:'🍕', title:'Ithaca Commons for dinner',       sub:'Collegetown energy, great food diversity.' },
    ]
  },
  d11: {
    date: 'Oct 7', title: 'Drive Finger Lakes → New Paltz (~3 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~200 miles · ~3 hrs · I-86 E → NY-17 → I-87 S → Exit 18' },
      { type:'activity', icon:'🛑', title:'Catskill Mountains scenic drive', sub:'Route 28 through the Catskills is stunning in October. Add 30 min but worth it.' },
      { type:'activity', icon:'🏨', title:'Check in New Paltz',              sub:'Village is walkable. Minnewaska accessible by 15-min drive. Mohonk nearby.' },
    ]
  },
  d12: {
    date: 'Oct 8', title: 'Minnewaska State Park · Shawangunk Ridge',
    badge: 'hike', badgeLabel: 'Hike',
    content: [
      { type:'activity', icon:'🏔', title:'Minnewaska State Park Preserve', sub:'Sky Lakes, white conglomerate cliffs, incredible foliage. Reserve parking online in advance — fills up fast on weekends.' },
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
        sub:'Spectacular Victorian castle resort. Day hiker fee ~$30/person. Worth it if budget allows.' },
    ]
  },
  d13: {
    date: 'Oct 9', title: 'Drive New Paltz → NJ (~1.5 hrs)',
    badge: 'drive', badgeLabel: 'Drive',
    content: [
      { type:'drive', text:'~90 miles · ~1.5 hrs · I-87 S → I-287 W' },
      { type:'activity', icon:'🏠', title:'Return to NJ family base', sub:'Oct 9–15 wind-down, family time, EWR departure.' },
    ]
  },
};

// ── LOGISTICS ──────────────────────────────────────────────
const LOGISTICS = {
  carRental: {
    icon: '🚗',
    title: 'Car Rental — EWR',
    intro: 'All major agencies operate from the <strong>EWR Rental Car Center</strong> — take the free AirTrain from your terminal (follow signs, ~10 min ride). On-site: <strong>Hertz, Avis, Budget, Enterprise, National, Alamo, Dollar, Thrifty.</strong>',
    items: [
      '<strong>Book in advance</strong> — walk-up rates can be 3–4× higher. Compare on <em>AutoSlash</em> or Kayak, then book direct.',
      '<strong>Get an SUV or wagon</strong> — Adirondack mountain roads + luggage + passengers = you want the space &amp; clearance.',
      '<strong>E-ZPass transponder</strong> — NY &amp; NJ tolls are fully cashless. Accept one from the rental agency or bring your own. Without it, "toll-by-mail" adds $3.50+ per toll at a high markup.',
      '<strong>Photograph all 4 corners</strong> at pickup and again at dropoff — timestamp photos protect against disputes.',
      '<strong>Return with a full tank</strong> — refuel 2–3 miles from the airport. Gas at the rental return is expensive.',
      'Have passport, home driver\'s license, and credit card (main driver\'s name) ready at the counter.',
    ]
  },
  cards: [
    {
      icon: '🏨', title: 'Accommodations',
      items: [
        'Book Saratoga Springs hotel (Sep 27 — suite or downtown with parking)',
        'Book Lake Placid hotel (Mirror Lake Inn or Main St motel)',
        'Book Lake George hotel (lakefront)',
        'Book near Watkins Glen (Seneca Lodge?)',
        'Book New Paltz hotel/B&amp;B',
      ]
    },
    {
      icon: '🎟', title: 'Reservations Needed',
      items: [
        'Minnewaska parking reservation (fills fast)',
        'Whiteface Veterans\' Memorial Highway (open through 12 Oct, no ticket needed)',
        'Mohonk day hiker pass (if splurging)',
        'Watkins Glen entry (check pass options)',
      ]
    },
    {
      icon: '🎒', title: 'Gear Checklist',
      items: [
        'Waterproof layer (rain is likely in Adirondacks)',
        'Hiking shoes / waterproof boots',
        'Layers (Oct nights are cold 35–45°F)',
        'Snacks, reusable water bottles',
        'Car phone mount + offline maps downloaded',
      ]
    },
    {
      icon: '🍂', title: 'Foliage Tips',
      items: [
        'Check foliagetracker.com week before departure',
        'Adirondacks peak: late Sep (arrive early!)',
        'Finger Lakes/Hudson Valley peak: early Oct',
        'Book weekend activities early — foliage crowds!',
      ]
    },
  ]
};
