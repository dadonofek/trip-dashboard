// ─────────────────────────────────────────────────────────────
//  TRIP DATA  –  Segovia & Madrid Alpine Summer 2026
//  index.html reads window.TRIP_DATA and renders everything.
//  Schema reference: see README.md.
// ─────────────────────────────────────────────────────────────
window.TRIP_DATA = {

// ── META ───────────────────────────────────────────────────
meta: {
  id: 'segovia-madrid-summer-2026',
  title: 'Segovia & Madrid Alpine Summer 2026',
  footer: 'Segovia & Madrid Alpine Summer 2026 · Aug 18–24 · A water-centric mountain adventure for the whole family',
  start: '2026-08-18',
  end: '2026-08-24',
  quickLinksLabel: '🌊 Info & booking:',
},

// ── MAP ROUTE (lat/lng pairs) ──────────────────────────────
// Main journey arc: MAD → base → Segovia → MAD departure
route: [
  [40.4983, -3.5676], // MAD Barajas Airport
  [40.5500, -3.6400], // A-1 north out of Madrid
  [40.6700, -3.7500], // Approaching Guadarrama foothills
  [40.8000, -3.8300], // Puerto de Navacerrada area
  [40.9500, -3.9500], // Segovia province border
  [41.0500, -3.9000], // Pirón valley descent
  [41.1180, -3.8670], // ★ SANTO DOMINGO DE PIRÓN (base, 6 nights)
  [40.9429, -4.1087], // ★ SEGOVIA (departure-day city stop)
  [40.8200, -4.0500], // AP-6 / A-6 toward Madrid
  [40.6500, -3.8800], // Las Rozas
  [40.4983, -3.5676], // MAD Barajas return
],

// ── DAY-TRIP ROUTE OVERLAYS (dashed on map) ───────────────
routesAlt: [
  { label: 'Day 2: Base → Boca del Asno → La Granja (~25 min each)', color: '#059669', points: [
    [41.1180, -3.8670], // Santo Domingo de Pirón
    [40.9900, -3.9600], // Puerto de Navacerrada
    [40.8770, -4.0220], // ★ Boca del Asno (Valsaín)
    [40.9009, -4.0133], // ★ Royal Palace La Granja de San Ildefonso
    [41.1180, -3.8670], // Return to base
  ]},
  { label: 'Day 3: Base → Hoces del Duratón / Sepúlveda (~55 min)', color: '#1D4ED8', points: [
    [41.1180, -3.8670], // Santo Domingo de Pirón
    [41.2000, -3.7800], // N-110 north
    [41.3009, -3.7490], // ★ Sepúlveda
    [41.3200, -3.6900], // Sebulcor — kayak launch
    [41.3490, -3.7250], // ★ Hermitage of San Frutos
    [41.1180, -3.8670], // Return to base
  ]},
  { label: 'Day 4: Base → Cercedilla (Aventura Amazonia + pools, ~50 min)', color: '#DC2626', points: [
    [41.1180, -3.8670], // Santo Domingo de Pirón
    [40.9500, -3.9800], // AP-6 south
    [40.8000, -4.0000], // Guadarrama pass
    [40.7360, -4.0533], // ★ Cercedilla
    [40.7280, -4.0730], // ★ Aventura Amazonia / Las Berceas
    [41.1180, -3.8670], // Return to base
  ]},
  { label: 'Day 5 Option A: Base → Madrid city (~1h 15min)', color: '#7C3AED', points: [
    [41.1180, -3.8670], // Santo Domingo de Pirón
    [40.9000, -3.8800], // south toward Madrid
    [40.7000, -3.7500], // A-1 approach
    [40.5000, -3.6500], // Madrid outskirts
    [40.4168, -3.7038], // ★ Madrid city center
  ]},
  { label: 'Day 6: Base → Rascafría / Las Presillas (~45 min)', color: '#0EA5E9', points: [
    [41.1180, -3.8670], // Santo Domingo de Pirón
    [41.0000, -3.8800], // south through Segovia province
    [40.9200, -3.8700], // Puerto de la Morcuera direction
    [40.8853, -3.8693], // ★ Rascafría / Las Presillas
    [40.8935, -3.8752], // ★ El Paular Monastery
    [41.1180, -3.8670], // Return to base
  ]},
],

// ── MAP MARKERS — MAIN STOPS ───────────────────────────────
stops: [
  { lat:40.4983, lng:-3.5676, label:'MAD', color:'#92400E', regionId:'base',       title:'Madrid Barajas Airport (MAD)',              dates:'Aug 18 & 24' },
  { lat:41.1180, lng:-3.8670, label:'🏡',  color:'#92400E', regionId:'base',       title:'Santo Domingo de Pirón — Base (1,079m)',   dates:'Aug 18–24 · 6 nights' },
  { lat:40.8770, lng:-4.0220, label:'BA',  color:'#059669', regionId:'guadarrama', title:'Boca del Asno — Eresma River Pools',       dates:'Aug 19' },
  { lat:40.9009, lng:-4.0133, label:'LG',  color:'#059669', regionId:'guadarrama', title:'Royal Palace La Granja de San Ildefonso',   dates:'Aug 19 & 22 night' },
  { lat:41.3009, lng:-3.7490, label:'SP',  color:'#1D4ED8', regionId:'duraton',    title:'Sepúlveda + Hoces del Río Duratón',        dates:'Aug 20' },
  { lat:40.7280, lng:-4.0730, label:'AA',  color:'#DC2626', regionId:'cercedilla', title:'Aventura Amazonia + Las Berceas Pools',    dates:'Aug 21' },
  { lat:40.4168, lng:-3.7038, label:'MAD', color:'#7C3AED', regionId:'madrid',     title:'Madrid city — Museum day (flex option)',   dates:'Aug 22 · if chosen' },
  { lat:40.8880, lng:-3.8720, label:'LP',  color:'#0EA5E9', regionId:'lozoya',     title:'Las Presillas Natural Pools — Rascafría', dates:'Aug 23' },
  { lat:40.9429, lng:-4.1087, label:'SG',  color:'#92400E', regionId:'base',       title:'Segovia — Historic Center + Farewell Lunch', dates:'Aug 24' },
],

// ── MAP POIs ───────────────────────────────────────────────
// tier 2: visible at zoom 9+ · tier 3: visible at zoom 11+
// cat: activity | hike | scenic | food
pois: [

  // — Base: Santo Domingo de Pirón —
  { lat:41.1175, lng:-3.8668, tier:3, cat:'scenic',   icon:'⛪', name:'Parish Church of Santo Domingo de Silos', area:'Santo Domingo de Pirón, Segovia', sub:'Romanesque parish church with sculptural corbels and a preserved belfry topped with seasonal stork nests. Starting point of the Camino de San Frutos through the village.', gq:'Iglesia Santo Domingo de Silos, Santo Domingo de Pirón' },
  { lat:41.1150, lng:-3.8700, tier:3, cat:'scenic',   icon:'🏚', name:'Rancho Alfaro ruins',                     area:'Santo Domingo de Pirón, Segovia', sub:'18th-century sheep-shearing and wool-washing station built c.1750 by José Alfaro. On the Red List of Heritage in Danger since 2024. A short walk from the village center.', gq:'Rancho Alfaro, Santo Domingo de Pirón' },
  { lat:41.1070, lng:-3.8760, tier:2, cat:'food',     icon:'🍷', name:'El Palomar de Brieva',                    area:'Brieva, Segovia', sub:'Calle Ancha 21, Brieva (3-min drive from base). Chef Myriam Sanz. Refined regional Castilian cuisine in a painstakingly restored tavern: original wooden beams, wood-burning oven, courtyard patio. The best dinner near the base.', url:'https://www.elpalomardebrieva.com/' },

  // — Day 2: Boca del Asno & La Granja de San Ildefonso —
  { lat:40.8770, lng:-4.0220, tier:2, cat:'activity', icon:'💧', name:'Boca del Asno — Eresma River Pools',      area:'Valsaín, Segovia', sub:'Crystalline mountain river pools at 16–18°C — naturally carved granite pools, small cascades, and wading shelves. Heavily shaded by Scots pines. Free entry and parking (arrive before 10am on hot days). Playground and sensory play area near parking.', url:'https://www.turismodesegovia.com/es/turismo-de-naturaleza/centro-de-visitantes-valle-de-valsain-boca-del-asno' },
  { lat:40.8785, lng:-4.0235, tier:3, cat:'hike',     icon:'🥾', name:'Senda de las Pesquerías Reales',          area:'Valsaín, Segovia', sub:'Historic stone-paved royal fishing trail built for King Charles III. Follows the Eresma River upstream through shaded pine forest from the Boca del Asno pools. Easy, scenic, family-friendly walk.', gq:'Senda de las Pesquerías Reales, Valsaín' },
  { lat:40.9009, lng:-4.0133, tier:2, cat:'activity', icon:'⛲', name:'Real Sitio de La Granja de San Ildefonso', area:'La Granja de San Ildefonso, Segovia', sub:'"Versailles of Spain" — 26 monumental fountains powered entirely by natural gravity. Wed afternoon fountain shows from 5:30pm (€5); Sat night illuminated Baños de Diana, 10:30–11:30pm (€3, gardens open 10pm). Rotating fountains include the towering Carrera de Caballos and 40-jet El Canastillo.', gq:'Real Palacio de La Granja de San Ildefonso' },

  // — Day 3: Hoces del Río Duratón —
  { lat:41.3200, lng:-3.7100, tier:2, cat:'activity', icon:'🚣', name:'Hoces del Río Duratón — Kayak & Canoe',   area:'Sebulcor / San Miguel de Bernuy, Segovia', sub:'3–4 hour guided flatwater kayak/canoe excursion through 100m limestone cliffs. Calm, dammed reservoir water — no rapids. Europe\'s largest griffon vulture colony soars directly overhead. €16–20/child, €26–40/adult. Meet guides in Sebulcor or San Miguel de Bernuy.', url:'https://www.turismocastillayleon.com/en/nature/hoces-del-rio-duraton-natural-park' },
  { lat:41.3009, lng:-3.7490, tier:2, cat:'food',     icon:'🍖', name:'Sepúlveda — medieval town + wood-fired lunch', area:'Sepúlveda, Segovia', sub:'One of Castile\'s finest Romanesque villages. Famous for traditional wood-fired roasts (cordero asado, cochinillo). Perfect post-kayak celebratory lunch in the stone-paved streets. 11th-century church of El Salvador and Castile\'s oldest municipal charter (1020).', gq:'Sepúlveda, Segovia, Spain' },
  { lat:41.3490, lng:-3.7250, tier:2, cat:'scenic',   icon:'🏛', name:'Hermitage of San Frutos',                  area:'Hoces del Duratón, Segovia', sub:'12th-century Romanesque chapel perched on a narrow rocky peninsula above the canyon. Flat 1km gravel path from the trailhead — easy for all ages. Spectacular panoramic views of the Duratón River far below. Best at late afternoon as vultures return to their cliff nests.', gq:'Ermita de San Frutos, Hoces del Duratón' },
  { lat:41.3250, lng:-3.7050, tier:3, cat:'scenic',   icon:'🦅', name:'Griffon vulture colony viewpoint',         area:'Hoces del Duratón, Segovia', sub:'Europe\'s largest nesting griffon vulture colony. Birds with 3-meter wingspans soar directly overhead while you paddle. Also home to Egyptian vultures, golden eagles, and peregrine falcons. Nesting in the ocher-colored cliffs just meters above the river.' },

  // — Day 4: Cercedilla —
  { lat:40.7280, lng:-4.0730, tier:2, cat:'activity', icon:'🌲', name:'Aventura Amazonia Cercedilla',             area:'Cercedilla, Madrid', sub:'Largest tree-top adventure park in Madrid. 7 circuits in Scots pines, 114 games, 33 ziplines. Smart-carabiner safety system. 3-hr pass: €25 adult (16+) · €23 junior (>1.35m) · €20 child (6+, 1.15–1.34m). 30-min safety briefing on arrival. Book parking (€9) and tickets online in advance.', url:'https://aventura-amazonia.com/cercedilla' },
  { lat:40.7250, lng:-4.0700, tier:2, cat:'activity', icon:'🏊', name:'Las Berceas Recreational Pools',           area:'Cercedilla, Madrid', sub:'Two large treated pools set in a 30-hectare wild pine forest. Expansive grassy lawns, changing rooms, café. Weekday €9 adult / €6 child (3–15); weekend €14 / €10. Strictly requires online pre-booking for both tickets AND parking. Walk next door from Aventura Amazonia.', url:'https://cercedilla.es/' },
  { lat:40.7360, lng:-4.0533, tier:3, cat:'scenic',   icon:'🏔', name:'Fuenfría Valley — Cercedilla',             area:'Cercedilla, Madrid', sub:'High-altitude valley in the Sierra de Guadarrama. Base for the Aventura Amazonia park and Las Berceas pools. Noticeably cooler microclimate than the lowlands — perfect for an active August day.' },

  // — Day 5 Option A: Madrid —
  { lat:40.4168, lng:-3.7043, tier:2, cat:'activity', icon:'🪄', name:'Museum of Illusions Madrid',               area:'Puerta del Sol, Madrid', sub:'Mind-bending optical illusions, interactive puzzle rooms, and a vortex tunnel. Highly engaging for preteens. Climate-controlled — ideal midday escape from the August heat near Puerta del Sol.', gq:'Museum of Illusions Madrid, Puerta del Sol' },
  { lat:40.4283, lng:-3.6863, tier:2, cat:'activity', icon:'🍬', name:'Sweet Space Museum (ABC Serrano)',          area:'Calle Serrano 61, Madrid', sub:'Sensory, candy-themed contemporary art gallery. Interactive rooms designed by international artists, colorful ball pits, and sweet tastings. Great for the 8–12 age group.', url:'https://www.esmadrid.com/en/tourist-information/sweet-space-museum' },
  { lat:40.4225, lng:-3.7130, tier:3, cat:'food',     icon:'🍝', name:'La Mucca — Plaza España',                  area:'Plaza España, Madrid', sub:'Supervised on-site children\'s play area — parents enjoy a sit-down meal while kids play safely. Practical and relaxing family lunch for the Madrid day.', gq:'La Mucca Plaza España, Madrid' },
  { lat:40.4530, lng:-3.6883, tier:2, cat:'activity', icon:'⚽', name:'Estadio Santiago Bernabéu Tour',            area:'Chamartín, Madrid', sub:'Self-guided tour of the newly transformed Bernabéu: panoramic pitch views, trophy room, first-team changing rooms. Great for soccer fans. Note: the Madrid Cable Car (Teleférico) is closed throughout all of 2026 for major remodeling — reopening planned early 2027.', url:'https://www.realmadrid.com/en-US/tour-bernabeu/individual' },

  // — Day 5 Option B: La Pedriza —
  { lat:40.7230, lng:-3.8930, tier:2, cat:'hike',     icon:'🪨', name:'La Pedriza — Senda de las Formas',         area:'Guadarrama National Park, Madrid', sub:'Option B for Aug 22 · Short 1.6km trail through a pine forest filled with unusual granite rock formations naturally eroded into animal shapes — a seal, a tortoise, a bird. Works as a scavenger hunt for children. Easy and short enough to save energy for the La Granja Saturday night fountain show.', gq:'Senda de las Formas, La Pedriza, Manzanares el Real' },

  // — Day 6: Lozoya Valley / Rascafría —
  { lat:40.8880, lng:-3.8720, tier:2, cat:'activity', icon:'🏊', name:'Las Presillas Natural Pools',               area:'Rascafría, Madrid', sub:'Three large natural pools fed by the cold Lozoya River. Dramatic Peñalara peak backdrop. Free pedestrian entry; parking €9–20/day. Strict rules: no dogs, no glass, no private chairs on the grass. Arrive by 9:30am on hot summer Sundays to secure prime spots.', gq:'Las Presillas, Rascafría, Madrid' },
  { lat:40.8935, lng:-3.8752, tier:2, cat:'scenic',   icon:'⛪', name:'Monasterio de Santa María de El Paular',    area:'Rascafría, Madrid', sub:'Majestic monastery dating to the late 14th century. Cross the historic Puente del Perdón (Bridge of Forgiveness) from Las Presillas to reach it. A short, beautiful post-swim cultural walk.', gq:'Monasterio Santa María de El Paular, Rascafría' },
  { lat:40.8945, lng:-3.8735, tier:3, cat:'scenic',   icon:'🌲', name:'Finnish Forest (Bosque Finlandés)',          area:'Rascafría, Madrid', sub:'Peaceful woodland of birch, poplar, and fir trees with a Nordic atmosphere. Quiet lake and historic wooden sauna pier. Perfect for a gentle family stroll after the monastery visit.', gq:'Bosque Finlandés, Rascafría, Madrid' },

  // — Day 7: Segovia —
  { lat:40.9481, lng:-4.1176, tier:2, cat:'scenic',   icon:'🏛', name:'Roman Aqueduct of Segovia',                 area:'Segovia, Castile & León', sub:'1st-century AD Roman aqueduct — 20,000+ granite blocks assembled without a single drop of mortar. Towers nearly 30 meters at its peak. One of the best-preserved Roman monuments in Europe. UNESCO World Heritage Site.', gq:'Roman Aqueduct of Segovia' },
  { lat:40.9490, lng:-4.1185, tier:3, cat:'activity', icon:'😈', name:'Estatua del Demonio Constructor',           area:'Calle San Juan, Segovia', sub:'Bronze statue of the devil taking a selfie, based on the legend that the devil built the aqueduct in a single night. Fun photo opportunity for kids on Calle San Juan near the aqueduct.', gq:'Estatua del Diablo, Calle San Juan, Segovia' },
  { lat:40.9480, lng:-4.1198, tier:2, cat:'scenic',   icon:'⛪', name:'Segovia Cathedral',                          area:'Segovia, Castile & León', sub:'Soaring late-Gothic cathedral on the pedestrian Calle Real route. Walk from the aqueduct to the Cathedral to the Alcázar in a single straight line.', gq:'Catedral de Segovia' },
  { lat:40.9519, lng:-4.1305, tier:2, cat:'activity', icon:'🏰', name:'Alcázar of Segovia',                         area:'Segovia, Castile & León', sub:'Spectacular castle on a rocky promontory flanked by the Eresma and Clamores rivers. Distinctive slate-spire towers — one of the inspirations for Walt Disney\'s Cinderella Castle. Spiral staircase of the Tower of John II for panoramic sierra views. Medieval armory room.', gq:'Alcázar de Segovia' },
  { lat:40.9468, lng:-4.1195, tier:2, cat:'food',     icon:'🍽', name:'Restaurante José María',                     area:'Calle Cronista Lecea 11, Segovia', sub:'Legendary Segovia institution under Rocío Ruiz and her father José María. Signature wood-fired cochinillo (suckling pig): the host cuts it with a ceramic plate edge — then smashes the plate on the floor as a tenderness demonstration. Pago de Carraovejas wine for adults. Reserve well in advance.', url:'https://www.restaurantejosemaria.com/en/our-home/' },

  // — More water hikes: waterfalls & natural pools (AllTrails-rated) —
  { lat:40.8470, lng:-3.9710, tier:3, cat:'hike', icon:'💦', name:'Cascada del Chorro Grande (from La Granja)',     area:'San Ildefonso, Segovia', sub:'AllTrails 4.6★ (60 reviews). A 5.6km loop climbing from the Royal Site of La Granja to the foot of the Chorro Grande — at an 80m vertical drop over gneiss walls, the highest waterfall in the Sierra de Guadarrama. Moderate; the final approach narrows and is rocky (good traction shoes, long trousers). Pairs naturally with the Day 2 La Granja visit. Note: in late August the falls run thin — go for the gorge scenery and forest, not a full torrent.', gq:'Cascada del Chorro Grande, La Granja de San Ildefonso', url:'https://www.alltrails.com/trail/spain/segovia/granja-de-san-ildefonso-cascada-chorro-grande' },
  { lat:40.8556, lng:-3.8918, tier:3, cat:'hike', icon:'💦', name:'Cascadas del Purgatorio',                       area:'Rascafría, Madrid', sub:'AllTrails 4.7★ (148 reviews) — the area\'s signature waterfall hike. The 12.9km out-and-back starts at the El Paular Monastery car park (same Puente del Perdón you cross on Day 6), follows the Aguilón stream up through oak and Scots pine, with dippers and griffon vultures overhead, to a waterfall set in a dramatic stone gorge. Moderate; the last stretch is narrow and rocky. ~3.5–4h round trip — turn back early with the kids and the riverside first half is still lovely.', gq:'Cascada del Purgatorio, Rascafría', url:'https://www.alltrails.com/trail/spain/madrid/rv-6-2-cascadas-del-purgatorio--2' },
  { lat:40.8240, lng:-3.9520, tier:3, cat:'hike', icon:'🏊', name:'Poza de Sócrates — natural bathing pool',       area:'Rascafría / Puerto de Cotos, Madrid', sub:'AllTrails 4.6★ (78 reviews). An 8km loop along the Arroyo de las Guarramillas to a clear natural pool beside a small waterfall and lush vegetation — a historic bathing spot named for footballer Sócrates Quintana, set aside for recreation. Moderate; the final descent to the poza needs care. A genuine waterfall-plus-swim combination in the high Lozoya valley.', gq:'Poza de Sócrates, Rascafría', url:'https://www.alltrails.com/trail/spain/madrid/puerto-de-coto-refugio-el-pingarron-poza-de-socrates' },
  { lat:40.8550, lng:-3.7630, tier:3, cat:'hike', icon:'💦', name:'Chorrera de Mojonavalle (Canencia)',            area:'Canencia, Madrid', sub:'AllTrails 4.7★ (32 reviews) for the short 4.7km loop from Puerto de Canencia — the most family-friendly waterfall walk here (~1.5–2h). Shaded the whole way under pine and birch beside the stream, ending at a panoramic lookout over a 30m cascade. Trail can be muddy near the water (proper shoes). The longer 10.5km loop rates an even higher 4.8★.', gq:'Mirador Chorrera de Mojonavalle, Puerto de Canencia', url:'https://www.alltrails.com/trail/spain/madrid/puerto-de-canencia-mirador-chorrera-de-mojonavalle' },
  { lat:40.7355, lng:-3.8775, tier:3, cat:'hike', icon:'🏊', name:'Charca Verde & Cascada del Chivato (La Pedriza)', area:'Manzanares el Real, Madrid', sub:'AllTrails 4.7★ (29 reviews). A 9.5km out-and-back from the Alta Montaña restaurant car park along the Manzanares River, past the emerald Charca Verde pool to the Chorreras del Manzanares and the Cascada del Chivato. Pools and granite-slide cascades make it a strong water option for the Day 5 La Pedriza alternative. Moderate; partially paved start.', gq:'Charca Verde, La Pedriza, Manzanares el Real', url:'https://www.alltrails.com/trail/spain/madrid/charca-verde-las-chorreras-del-manzanares-cascada-del-chivato' },
],

// ── REGIONS ────────────────────────────────────────────────
regions: [
  {
    id: 'base',
    emoji: '🏡',
    title: 'Santo Domingo de Pirón & Segovia',
    navLabel: 'Base / Segovia',
    color: '#92400E',
    dates: 'Aug 18 & 24',
    weather: { name: 'Segovia, Spain', lat: 40.9429, lon: -4.1087 },
    infoCard: {
      prefix: 'base',
      eat: [
        { icon:'🍷', name:'El Palomar de Brieva',      badge:'rb-fine',   badgeLabel:'Fine',      sub:'Calle Ancha 21, Brieva · 3-min drive from base. Chef Myriam Sanz. Refined regional Castilian cuisine in a beautifully restored historic tavern — original wooden beams, wood-burning oven, charming courtyard patio. The top dinner option near Santo Domingo de Pirón. Reserve ahead.', url:'https://www.elpalomardebrieva.com/' },
        { icon:'🍽', name:'Restaurante José María',    badge:'rb-must',   badgeLabel:'★ Must-do', sub:'Calle Cronista Lecea 11, Segovia · Legendary wood-fired cochinillo — whole pig cut at the table with a ceramic plate, then the plate is smashed on the floor as a tenderness demonstration. Signature Pago de Carraovejas wine. Artisanal ice cream for kids. The meal that ends the trip. Reserve well ahead.', url:'https://www.restaurantejosemaria.com/en/our-home/' },
      ],
      nohike: [
        { icon:'🏘', name:'Santo Domingo de Pirón village walk', sub:'Explore the village sgraffito facades, the historic stone mill, the traditional shoeing foal, and the Romanesque Parish Church of Santo Domingo de Silos with its stork-nesting belfry. Walk the local segment of the Camino de San Frutos. Gentle and perfect for an arrival day or a rest afternoon.' },
        { icon:'🏚', name:'Rancho Alfaro ruins',       sub:'18th-century sheep-shearing station ordered by José Alfaro (~1750). An important chapter in the region\'s pastoral wool economy. On the Red List of Heritage in Danger since 2024. Short walk from the village center.' },
        { icon:'🏰', name:'Alcázar de Segovia',        sub:'15-min drive from base. One of the most iconic castles in Spain — a rocky promontory, slate spires, and rooms full of medieval armor. Climb the Tower of John II for panoramic Sierra de Guadarrama views. One of the inspirations for Disney\'s Cinderella Castle.', gq:'Alcázar de Segovia' },
        { icon:'🏛', name:'Roman Aqueduct of Segovia', sub:'20,000+ granite blocks, no mortar, nearly 30m tall — built in the 1st century AD. A 15-min drive from the base. Start of the UNESCO historic center walk: aqueduct → Calle Real → Cathedral → Alcázar.', gq:'Roman Aqueduct, Segovia' },
      ]
    },
    days: ['d1', 'd7']
  },
  {
    id: 'guadarrama',
    emoji: '🏔',
    title: 'Sierra de Guadarrama',
    navLabel: 'Guadarrama',
    color: '#059669',
    dates: 'Aug 19 & 21',
    weather: { name: 'Cercedilla, Spain', lat: 40.7360, lon: -4.0533 },
    infoCard: {
      prefix: 'gdr',
      eat: [
        { icon:'🧺', name:'Picnic at Boca del Asno',       badge:'rb-casual', badgeLabel:'Casual', sub:'Pack lunch from the base and enjoy it at the picnic tables near the parking area, under the towering Scots pines along the Eresma River. The finest shaded picnic setting in the Sierra de Guadarrama.' },
        { icon:'☕', name:'Las Berceas café (Cercedilla)',  badge:'rb-casual', badgeLabel:'Casual', sub:'On-site café at the Las Berceas Recreational Pools complex — convenient refueling between Aventura Amazonia and the afternoon pool session.' },
      ],
      nohike: [
        { icon:'💧', name:'Boca del Asno — Eresma River Pools', sub:'Mountain river pools at 16–18°C, shaded by Scots pines. Smooth granite pools, small cascades, natural water chutes. Free entry and parking. Arrive before 10am on hot weekends. Playground and sensory play area near the lot.', url:'https://www.turismodesegovia.com/es/turismo-de-naturaleza/centro-de-visitantes-valle-de-valsain-boca-del-asno' },
        { icon:'⛲', name:'La Granja — Fountain Shows',    sub:'Wednesday afternoons from 5:30pm (€5) — rotating fountain activation with park rangers through the gardens. Saturday night August special: Baños de Diana illuminated fountain, 10:30–11:30pm (€3, gardens open 10pm). The night show is a genuinely magical experience for children.', gq:'Real Palacio de La Granja de San Ildefonso' },
        { icon:'🌲', name:'Aventura Amazonia Cercedilla',  sub:'7 tree-top circuits · 114 games · 33 ziplines · smart-carabiner safety system. Child (6+, 1.15–1.34m): Kids & Explorador. Preteens (>1.35m): Jungla, Aventura, and the Canopy — the only all-zipline course in Madrid (470m of consecutive aerial slides). 3-hr pass from €20–25/person. Book tickets and parking online in advance.', url:'https://aventura-amazonia.com/cercedilla' },
        { icon:'🏊', name:'Las Berceas Recreational Pools', sub:'30-hectare pine forest park with two large treated pools · grassy lawns · changing rooms. Weekday €9 adult / €6 child (3–15); weekend €14 / €10. Online pre-booking strictly required for both tickets and parking. Walk next door from Aventura Amazonia.', url:'https://cercedilla.es/' },
        { icon:'💦', name:'Cascada del Chorro Grande hike (from La Granja)', sub:'AllTrails 4.6★ (60 reviews). A 5.6km loop from the Royal Site of La Granja up to the foot of the Chorro Grande — at 80m, the highest waterfall in the Sierra de Guadarrama, dropping over gneiss walls. Moderate, ~2–2.5h; the final approach is narrow and rocky, so wear grippy shoes and long trousers. Easy to bolt onto the Day 2 La Granja visit. Honest note: by late August the flow is reduced — come for the gorge and pine-forest scenery.', url:'https://www.alltrails.com/trail/spain/segovia/granja-de-san-ildefonso-cascada-chorro-grande', linkLabel:'🥾 AllTrails route &amp; reviews' },
      ]
    },
    days: ['d2', 'd4']
  },
  {
    id: 'duraton',
    emoji: '🦅',
    title: 'Hoces del Río Duratón',
    navLabel: 'Duratón',
    color: '#1D4ED8',
    dates: 'Aug 20',
    weather: { name: 'Sepúlveda, Spain', lat: 41.3009, lon: -3.7490 },
    infoCard: {
      prefix: 'dur',
      eat: [
        { icon:'🍖', name:'Wood-fired lunch in Sepúlveda', badge:'rb-casual', badgeLabel:'Casual', sub:'Sepúlveda is celebrated throughout Castile for its traditional wood-fired roasts. Cordero asado (roast lamb) and cochinillo (suckling pig) cooked in stone asadors on the medieval square. The natural post-kayak celebratory meal.', gq:'Restaurante asador, Sepúlveda' },
      ],
      nohike: [
        { icon:'🚣', name:'Guided kayak / canoe — Hoces del Duratón', sub:'3–4 hr guided flatwater tour through 100m limestone cliffs. Calm dammed reservoir — no rapids, safe for ages 8–12. Family-sized double canoes available. €16–20/child, €26–40/adult. Meet guides in Sebulcor or San Miguel de Bernuy. Free national park entry.', url:'https://www.turismocastillayleon.com/en/nature/hoces-del-rio-duraton-natural-park' },
        { icon:'🏛', name:'Hermitage of San Frutos', sub:'12th-century Romanesque chapel on a narrow rocky peninsula above the canyon. 1km flat gravel path — easy for all ages. Panoramic views of the Duratón River looping far below. Best at dusk as griffon vultures return to their cliff nests.', gq:'Ermita de San Frutos, Hoces del Duratón' },
        { icon:'🏛', name:'Sepúlveda medieval village', sub:'One of Castile\'s best-preserved Romanesque villages. Stone-paved streets, the 11th-century church of El Salvador, and Castile\'s oldest municipal charter (1020). Easy post-kayak wander before the San Frutos drive.', gq:'Sepúlveda, Segovia' },
      ]
    },
    days: ['d3']
  },
  {
    id: 'madrid',
    emoji: '🏙',
    title: 'Madrid City — Flex Day',
    navLabel: 'Madrid (flex)',
    color: '#7C3AED',
    dates: 'Aug 22 · Option A',
    weather: { name: 'Madrid, Spain', lat: 40.4168, lon: -3.7038 },
    infoCard: {
      prefix: 'mad',
      eat: [
        { icon:'🍝', name:'La Mucca — Plaza España', badge:'rb-casual', badgeLabel:'Casual', sub:'Plaza España · Supervised children\'s play area on-site — parents enjoy a proper meal while kids play safely nearby. A practical, relaxing family lunch strategy in August Madrid heat.', gq:'La Mucca Plaza España, Madrid' },
      ],
      nohike: [
        { icon:'🪄', name:'Museum of Illusions Madrid',     sub:'Near Puerta del Sol · Optical illusions, interactive puzzle rooms, vortex tunnel. Climate-controlled and highly engaging for the 8–12 age group. Ideal midday activity when city temperatures peak above 35°C.', gq:'Museum of Illusions Madrid' },
        { icon:'🍬', name:'Sweet Space Museum',             sub:'ABC Serrano shopping center (Calle Serrano 61) · Candy-themed contemporary art gallery. Interactive rooms by international artists, colorful ball pits, sweet tastings. A genuinely fun and unique experience for children.', url:'https://www.esmadrid.com/en/tourist-information/sweet-space-museum' },
        { icon:'⚽', name:'Bernabéu Stadium Tour',          sub:'Newly transformed stadium · panoramic pitch views, trophy room, first-team changing rooms. Self-guided. Strong option for football fans. Note: the Madrid Cable Car (Teleférico) is closed throughout all of 2026 for major remodeling — do not plan on it.', url:'https://www.realmadrid.com/en-US/tour-bernabeu/individual' },
        { icon:'🪨', name:'Option B: La Pedriza + La Granja Night', sub:'Alternative to Madrid: gentle 1.6km Senda de las Formas granite rock trail in the morning (La Pedriza), then the illuminated Baños de Diana fountain at La Granja Saturday night (10:30–11:30pm, €3). A fully outdoor, close-to-base day ending with a magical light show.', gq:'Senda de las Formas, La Pedriza, Manzanares el Real' },
        { icon:'🏊', name:'Charca Verde & Cascada del Chivato (La Pedriza water option)', sub:'AllTrails 4.7★ (29 reviews). If Option B leans toward water rather than the dry rock trail: a 9.5km out-and-back from the Alta Montaña restaurant car park follows the Manzanares River past the emerald Charca Verde pool to the Chorreras del Manzanares and the Cascada del Chivato. Granite-slide cascades and pools the whole way. Moderate, ~3h; partially paved start. Holds water far better than the high-sierra waterfalls in August.', url:'https://www.alltrails.com/trail/spain/madrid/charca-verde-las-chorreras-del-manzanares-cascada-del-chivato', linkLabel:'🥾 AllTrails route &amp; reviews' },
      ]
    },
    days: ['d5']
  },
  {
    id: 'lozoya',
    emoji: '🏊',
    title: 'Lozoya Valley — Rascafría',
    navLabel: 'Lozoya',
    color: '#0EA5E9',
    dates: 'Aug 23',
    weather: { name: 'Rascafría, Spain', lat: 40.8853, lon: -3.8693 },
    infoCard: {
      prefix: 'loz',
      eat: [
        { icon:'🧺', name:'Picnic at Las Presillas',    badge:'rb-casual', badgeLabel:'Casual', sub:'Bring food to the natural pools — the well-manicured lawns are perfect for a family picnic. Important: glass containers are strictly prohibited. Private lawn chairs are also not allowed (rules announced via megaphone).' },
        { icon:'🍽', name:'Lunch in Rascafría village', badge:'rb-casual', badgeLabel:'Casual', sub:'Small mountain village near Las Presillas with local bars and restaurants serving hearty Castilian mountain food. Good for a post-swim lunch before the monastery and forest walk.', gq:'Restaurante Rascafría, Madrid' },
      ],
      nohike: [
        { icon:'🏊', name:'Las Presillas Natural Pools', sub:'Three large river pools fed by the clean, cold Lozoya River with Peñalara peak backdrop. Free pedestrian entry; parking €9–20/day. No dogs, no glass, no chairs. Arrive by 9:30am on hot Sundays.', gq:'Las Presillas, Rascafría' },
        { icon:'⛪', name:'El Paular Monastery',         sub:'Late 14th-century Santa María de El Paular Monastery across the Puente del Perdón from Las Presillas. A short, beautiful walk after swimming in the river pools.', gq:'Monasterio El Paular, Rascafría' },
        { icon:'🌲', name:'Finnish Forest (Bosque Finlandés)', sub:'Birch, poplar, and fir woodland near El Paular with a quiet lake and historic wooden sauna pier. Resembles a Nordic forest. Very peaceful family stroll after the monastery visit.', gq:'Bosque Finlandés, Rascafría' },
        { icon:'💦', name:'Cascadas del Purgatorio', sub:'AllTrails 4.7★ (148 reviews) — the signature waterfall hike of the valley, and it starts from the very same El Paular Monastery car park. Cross the Puente del Perdón and follow the Aguilón stream up through oak and pine (dippers and griffon vultures overhead) to a waterfall in a dramatic stone gorge. Full loop is 12.9km / ~3.5–4h, moderate, with a narrow rocky final stretch — but the riverside first half makes a great shorter out-and-back with kids. Pairs perfectly with the Las Presillas swim day.', url:'https://www.alltrails.com/trail/spain/madrid/rv-6-2-cascadas-del-purgatorio--2', linkLabel:'🥾 AllTrails route &amp; reviews' },
        { icon:'🏊', name:'Poza de Sócrates — natural pool & waterfall', sub:'AllTrails 4.6★ (78 reviews). An 8km loop up the Arroyo de las Guarramillas to a clear natural bathing pool beside a small waterfall — a historic swimming spot named after footballer Sócrates Quintana. Moderate (~2.5–3h); the final descent to the pool needs care. A real waterfall-plus-swim option higher up the Lozoya valley if Las Presillas is packed.', url:'https://www.alltrails.com/trail/spain/madrid/puerto-de-coto-refugio-el-pingarron-poza-de-socrates', linkLabel:'🥾 AllTrails route &amp; reviews' },
        { icon:'💦', name:'Chorrera de Mojonavalle (Canencia)', sub:'AllTrails 4.7★ (32 reviews) for the short 4.7km loop from Puerto de Canencia — the most family-friendly waterfall walk in the area (~1.5–2h), fully shaded under pine and birch beside the stream, ending at a lookout over a 30m cascade. Can be muddy near the water. The longer 10.5km loop rates 4.8★. A short detour east of the Lozoya valley.', url:'https://www.alltrails.com/trail/spain/madrid/puerto-de-canencia-mirador-chorrera-de-mojonavalle', linkLabel:'🥾 AllTrails route &amp; reviews' },
      ]
    },
    days: ['d6']
  },
],

// ── DAYS ───────────────────────────────────────────────────
days: {
  d1: {
    date: '2026-08-18', title: 'Arrival at MAD → Santo Domingo de Pirón',
    badge: 'drive', badgeLabel: 'Arrival',
    content: [
      { type:'activity', icon:'✈️', title:'Land at Madrid Barajas Airport (MAD)', sub:'Collect the rental car at the MAD terminal rental desks or the off-airport lot. <strong>A private car is absolutely mandatory for this trip</strong> — public transit to Santo Domingo de Pirón runs only twice on weekdays and once on Saturdays, with no service on Sundays.' },
      { type:'drive', text:'~95 km · ~1h 20min · A-1 north → N-110 toward Segovia → local roads · Final stretch through the Pirón valley is beautiful and cool',
        route:{ from:'Madrid Barajas Airport, Spain', to:'Santo Domingo de Pirón, Segovia, Spain' } },
      { type:'activity', icon:'🏡', title:'Check in and acclimatize', sub:'The village sits at 1,079 meters above sea level — noticeably cooler than Madrid, with refreshingly mild August evenings. Spend the afternoon adjusting to the elevation. The village has ~50 permanent residents: quiet, authentic, and completely free of mass tourism.' },
      { type:'activity', icon:'🚶', title:'Evening stroll — Camino de San Frutos', sub:'A gentle late-afternoon walk along the local segment of the historic Camino de San Frutos, which runs directly through the village. The route forks here: one path winds through the low mountains, the other leads toward the Caballar valley. Children can hunt for sgraffito decorative patterns on the historic stone facades.' },
      { type:'activity', icon:'⛪', title:'Parish Church of Santo Domingo de Silos — stork watch', sub:'Look for nesting white storks on the stone bell tower of this Romanesque parish church. The storks are a symbol of the village and highly visible from the main square. The church features sculptural corbels and a beautifully preserved belfry.' },
      { type:'activity', icon:'🍷', title:'Dinner: El Palomar de Brieva (3-min drive)', sub:'Calle Ancha 21, Brieva. Chef Myriam Sanz. Refined regional Castilian cuisine in a painstakingly restored historic tavern: original wooden beams, wood-burning oven, charming courtyard patio. Adults can enjoy a glass of wine from the carefully curated cellar; children are welcomed with warm hospitality and homemade dishes. Reserve ahead.', url:'https://www.elpalomardebrieva.com/', urlLabel:'🔗 El Palomar de Brieva' },
    ]
  },
  d2: {
    date: '2026-08-19', title: 'Boca del Asno River Pools + La Granja Fountains',
    badge: 'explore', badgeLabel: 'Water + Gardens',
    content: [
      { type:'activity', icon:'⏰', title:'Strategically scheduled for Wednesday', sub:'Today is designed around the mid-week fountain show at La Granja (Wednesday afternoons only, from 5:30pm). Arrive at Boca del Asno before 10am to claim the best river spots before the crowds arrive on this popular hot-day destination.' },
      { type:'drive', text:'~25 min · SG-V-2113 south · through Torrecaballeros · over the Puerto de Navacerrada · down into the Valsaín pine forests',
        route:{ from:'Santo Domingo de Pirón, Segovia, Spain', to:'Boca del Asno, Valsaín, Segovia, Spain' } },
      { type:'activity', icon:'💧', title:'Boca del Asno — Eresma River Pools (morning)', sub:'The Eresma River has carved smooth granite pools, small cascades, and natural wading shelves through the pine forest. Water stays at 16–18°C even in late August — brisk and incredibly refreshing. The entire area is shaded by towering Scots pines, offering excellent protection from the midday sun.\n\nChildren can safely wade in the shallow rock-ringed pools, slide down natural granite water chutes, and explore the sensory play area and playground near the main parking lot.\n\n<strong>Free entry · Free parking · Arrive before 10am.</strong>', url:'https://www.turismodesegovia.com/es/turismo-de-naturaleza/centro-de-visitantes-valle-de-valsain-boca-del-asno', urlLabel:'🔗 Visitor centre & info' },
      { type:'hiketabs', prefix:'aug19', tabs:[
        { id:'trail', label:'River Walk', active:true,
          title:'Senda de las Pesquerías Reales',
          note:'Historic stone-paved royal fishing trail built for King Charles III to reach his favourite fishing spots along the Eresma. Follows the river upstream from the pools through the shaded pine forest. Turn around whenever the kids flag — the outward journey is the reward.',
          stats:['1–3 km', 'Minimal elevation', 'Easy'],
          url:'https://www.turismodesegovia.com/es/turismo-de-naturaleza/centro-de-visitantes-valle-de-valsain-boca-del-asno' },
      ]},
      { type:'activity', icon:'🧺', title:'Picnic lunch under the Scots pines', sub:'Pack lunch from the base and enjoy it at the picnic tables near the parking area. The shaded forest keeps temperatures comfortable even at midday — a perfect contrast to the 35°C+ heat in the lowlands.' },
      { type:'drive', text:'~10 min · 7 km west to La Granja · leave Boca del Asno by 4:30pm to be in position for 5pm',
        route:{ from:'Boca del Asno, Valsaín, Segovia, Spain', to:'Real Sitio de La Granja de San Ildefonso, Spain' } },
      { type:'activity', icon:'⛲', title:'Royal Palace of La Granja de San Ildefonso — Fountain Show (from 5:30pm)', sub:'The "Versailles of Spain," built by King Philip V in the early 1700s as a summer retreat. The park features 26 monumental fountains powered entirely by natural gravity: water collected in a high reservoir called El Mar creates sufficient pressure to shoot jets many meters into the air without mechanical pumps.\n\nOn Wednesday afternoons, park rangers activate a rotating selection of fountains from 5:30pm. Visitors follow a designated route as successive fountains come to life: the towering <em>Carrera de Caballos</em> (Horse Race), the playful <em>El Canastillo</em> (The Basket, with 40 distinct water jets), and the dramatic <em>Cascada Nueva</em>.\n\n<strong>Entry €5 · Buy online or at the box office by 5pm.</strong>', gq:'Real Palacio de La Granja de San Ildefonso, San Ildefonso' },
    ]
  },
  d3: {
    date: '2026-08-20', title: 'Kayaking the Hoces del Río Duratón',
    badge: 'hike', badgeLabel: 'Kayak Day',
    content: [
      { type:'drive', text:'~55 min · N-110 east toward Segovia → N-122 north → local roads · Meet guides in Sebulcor or San Miguel de Bernuy',
        route:{ from:'Santo Domingo de Pirón, Segovia, Spain', to:'Sebulcor, Segovia, Spain' } },
      { type:'activity', icon:'🚣', title:'Guided kayak / canoe excursion — half-day flatwater tour', sub:'The Hoces del Río Duratón Natural Park protects a dramatic limestone canyon carved by the Duratón River, with vertical cliffs rising over 100 meters above the water. The dammed reservoir section used for tours is exceptionally calm, clear, and completely free of rapids — safe for children aged 8, 10, and 12.\n\nOver 3–4 hours, the family paddles along quiet turquoise bends while griffon vultures with 3-meter wingspans soar directly overhead from their nests in the cliff crevices. Many operators use stable double or family-sized canoes, so an adult can paddle alongside a child.\n\n<strong>Prices: €16–20/child · €26–40/adult · Free national park entry.</strong>', url:'https://www.turismocastillayleon.com/en/nature/hoces-del-rio-duraton-natural-park', urlLabel:'🔗 Park info & tour operators' },
      { type:'activity', icon:'🦅', title:'Wildlife: Europe\'s largest griffon vulture colony', sub:'Look up constantly — Europe\'s largest nesting griffon vulture colony occupies these cliffs. The birds with 3-meter wingspans nest in crevices just meters above the river and regularly glide directly overhead while you paddle. Also watch for Egyptian vultures, golden eagles, and peregrine falcons.' },
      { type:'drive', text:'~10 min to Sepúlveda for lunch',
        route:{ from:'Sebulcor, Segovia, Spain', to:'Sepúlveda, Segovia, Spain' } },
      { type:'activity', icon:'🍖', title:'Lunch in Sepúlveda — wood-fired Castilian roast', sub:'Sepúlveda is one of the finest surviving Romanesque villages in Castile: stone-paved streets, an 11th-century church of El Salvador, and Castile\'s oldest municipal charter (1020). The town is also celebrated for its traditional wood-fired roasts — cordero asado (roast lamb) and cochinillo (suckling pig). The natural post-kayak celebratory lunch.' },
      { type:'activity', icon:'🏛', title:'Hermitage of San Frutos — canyon viewpoint (afternoon)', sub:'A short drive from Sepúlveda, then a flat, easy 1km gravel path to a 12th-century Romanesque chapel perched dramatically on a narrow rocky peninsula above the canyon. The views of the Duratón River looping through the gorge far below are spectacular. Late afternoon is the best time — vultures return to their nests at dusk, soaring in thermal columns above the cliffs. A magical, quiet end to the day.', gq:'Ermita de San Frutos, Hoces del Duratón' },
    ]
  },
  d4: {
    date: '2026-08-21', title: 'Aventura Amazonia Treetops + Alpine Pools, Cercedilla',
    badge: 'hike', badgeLabel: 'Adventure',
    content: [
      { type:'activity', icon:'⏰', title:'Pre-book everything online before this day', sub:'Weekend capacity at both Aventura Amazonia and Las Berceas is strictly controlled. Purchase the 3-hr pass, the €9 parking pass, and Las Berceas pool tickets online in advance. Walk-up is not guaranteed on busy August weekends.' },
      { type:'drive', text:'~50 min · through Segovia · AP-6 south · exit at Cercedilla · up to the Fuenfría Valley pine forest',
        route:{ from:'Santo Domingo de Pirón, Segovia, Spain', to:'Aventura Amazonia, Cercedilla, Madrid, Spain' } },
      { type:'activity', icon:'🌲', title:'Aventura Amazonia Cercedilla — treetop adventure (morning)', sub:'The largest tree-top multi-adventure park in Madrid. 7 distinct obstacle circuits built high in the Scots pines, incorporating 114 games and 33 ziplines. The park\'s "smart-carabiner" safety system prevents accidental detachment throughout — parents can relax while children climb.\n\nA mandatory 30-minute safety briefing precedes 3 hours of unlimited access to the circuits:\n\n• <strong>8-year-old (1.15–1.34m):</strong> Kids & Explorador circuits\n• <strong>10 & 12-year-olds (>1.35m):</strong> Jungla, Aventura, and the spectacular <em>Canopy</em> circuit — the only all-zipline course in Madrid, with over 470 meters of continuous aerial slides\n\n<strong>Tickets: €25 adult (16+) · €23 junior (>1.35m) · €20 child (6+, 1.15–1.34m) · Parking €9</strong>', url:'https://aventura-amazonia.com/cercedilla', urlLabel:'🎟 Book tickets (Aventura Amazonia)' },
      { type:'activity', icon:'🏊', title:'Las Berceas Recreational Pools — alpine swim (afternoon)', sub:'Walk next door to the Las Berceas pools — a beautiful 30-hectare park featuring two large, crystal-clear treated pools set entirely within a wild pine forest. Expansive grassy lawns for sunbathing, modern changing rooms, and a café on-site.\n\nThe elevated Fuenfría Valley setting (mountain air, pine canopy shade) keeps temperatures comfortable and the water refreshing — a perfect reward after the treetop exertion.\n\n<strong>Weekday: €9 adult / €6 child (3–15) · Weekend: €14 / €10 · Online pre-booking strictly required.</strong>', url:'https://cercedilla.es/', urlLabel:'🔗 Las Berceas info (Cercedilla)' },
    ]
  },
  d5: {
    date: '2026-08-22', title: 'Madrid Museums OR La Pedriza + La Granja Night Show',
    badge: 'flex', badgeLabel: 'Flex Day',
    content: [
      { type:'activity', icon:'🌀', title:'Decide the night before: Option A (Madrid city) or Option B (mountain + night show)', sub:'<strong>Option A</strong> is a full day of climate-controlled interactive museums in Madrid — ideal if the family wants an urban cultural day and the kids need a break from nature. <strong>Option B</strong> is a short, gentle mountain hike in the morning followed by the La Granja Saturday-night illuminated fountain show — it stays close to base and ends with a genuinely magical late-night experience.' },
      { type:'activity', icon:'🏙', title:'OPTION A: Madrid city day (~1h 15min drive each way)', tag:'optional',
        sub:'Drive south to central Madrid. Strategy: do climate-controlled activities during the hottest midday hours (noon–4pm) when city temperatures routinely exceed 35°C.' },
      { type:'activity', icon:'🪄', title:'[Option A] Museum of Illusions Madrid', sub:'Near Puerta del Sol — mind-bending optical illusions, interactive puzzle rooms, and a vortex tunnel. Genuinely captivating for the 8–12 age group and highly engaging for adults too. Climate-controlled throughout. Book tickets online ahead.', gq:'Museum of Illusions Madrid, Puerta del Sol' },
      { type:'activity', icon:'🍬', title:'[Option A] Sweet Space Museum (ABC Serrano)', sub:'Calle Serrano 61, Madrid — sensory candy-themed contemporary art gallery with interactive rooms designed by international artists, colorful ball pits, and sweet tastings along the way. A fun and visually inventive experience for children.', url:'https://www.esmadrid.com/en/tourist-information/sweet-space-museum', urlLabel:'🔗 Sweet Space Museum info' },
      { type:'activity', icon:'🍝', title:'[Option A] Lunch: La Mucca, Plaza España', sub:'Supervised on-site children\'s play area — parents can enjoy a proper sit-down meal while the kids play safely nearby. A practical and relaxing family lunch in the heat of the afternoon.', gq:'La Mucca Plaza España, Madrid' },
      { type:'activity', icon:'⚽', title:'[Option A] Bernabéu Stadium Tour (afternoon)', sub:'Self-guided tour of the newly transformed Santiago Bernabéu stadium: panoramic pitch views, trophy room, first-team changing rooms. The best option for soccer fans in the family.\n\n<strong>Note:</strong> The historic Madrid Cable Car (Teleférico) is closed throughout all of 2026 for major structural remodeling — planned reopening in early 2027. Do not plan on it.', url:'https://www.realmadrid.com/en-US/tour-bernabeu/individual', urlLabel:'🎟 Book Bernabéu tour' },
      { type:'activity', icon:'🪨', title:'OPTION B: Senda de las Formas, La Pedriza (morning)', tag:'optional',
        sub:'A gentle 1.6km trail through the La Pedriza granite landscape of Guadarrama National Park, winding through a pine forest full of unusual rock formations naturally eroded into animal shapes — a seal, a tortoise, a bird. Frame it as a scavenger hunt for the kids. Easy and short enough to leave plenty of energy for the night show.', gq:'Senda de las Formas, La Pedriza, Manzanares el Real' },
      { type:'activity', icon:'🌊', title:'[Option B] La Granja — Baños de Diana illuminated fountain (10:30pm)', sub:'August Saturday-night special at the Royal Palace of La Granja: the monumental Baños de Diana (Baths of Diana) fountain is activated from 10:30pm to 11:30pm, dramatically illuminated against the night sky. Water cascades over elaborate marble sculptures of mythological figures accompanied by classical music and refreshing spray.\n\n<strong>Entry €3 · Gardens open from 10pm · Book ahead.</strong>', gq:'Real Palacio de La Granja de San Ildefonso, San Ildefonso' },
    ]
  },
  d6: {
    date: '2026-08-23', title: 'Las Presillas Natural Pools — Lozoya Valley',
    badge: 'explore', badgeLabel: 'River Day',
    content: [
      { type:'activity', icon:'⏰', title:'Arrive Las Presillas by 9:30am', sub:'This is the most popular natural pool site in the Madrid region on hot summer Sundays. An early arrival is essential to secure prime spots on the manicured green lawns and guarantee a parking space. Car park is €9/day but can reach €20 on peak August Sundays.' },
      { type:'drive', text:'~45 min · south through Segovia province · Puerto de la Morcuera mountain pass · descent into the Lozoya valley',
        route:{ from:'Santo Domingo de Pirón, Segovia, Spain', to:'Las Presillas, Rascafría, Madrid, Spain' } },
      { type:'activity', icon:'🏊', title:'Las Presillas Natural Pools — morning swim', sub:'Three large, beautifully maintained natural swimming pools fed by the clean, cold Lozoya River. Crystal-clear water with a dramatic backdrop of the Peñalara massif — one of the highest peaks in the Sierra de Guadarrama.\n\nTo preserve the pristine environment, the park enforces strict rules (periodically announced via megaphone): <strong>no dogs · no glass containers · no private lawn chairs on the grass.</strong> The expansive, well-manicured green lawns are perfect for families to spread out and sunbathe between swims.' },
      { type:'activity', icon:'🌉', title:'Puente del Perdón → Monasterio de Santa María de El Paular', sub:'After swimming, walk across the historic Puente del Perdón (Bridge of Forgiveness) to visit the majestic Santa María de El Paular Monastery, which dates to the late 14th century. One of the oldest Carthusian monasteries in Castile — imposing architecture in a peaceful mountain river valley. An effortless and beautiful post-swim cultural visit.', gq:'Monasterio Santa María de El Paular, Rascafría' },
      { type:'activity', icon:'🌲', title:'Finnish Forest (Bosque Finlandés)', sub:'A short walk from El Paular Monastery — a peaceful woodland of birch, poplar, and fir trees with a distinctly Nordic atmosphere. Features a quiet lake and a historic wooden sauna pier. Perfect for a gentle family stroll in the cool afternoon mountain air before the drive back to base.', gq:'Bosque Finlandés, Rascafría, Madrid' },
    ]
  },
  d7: {
    date: '2026-08-24', title: 'Segovia Historic Center + Farewell Feast → MAD',
    badge: 'drive', badgeLabel: 'Departure',
    content: [
      { type:'activity', icon:'🏛', title:'Roman Aqueduct of Segovia', sub:'15-minute drive from the base. One of the finest surviving Roman monuments in Europe — 20,000+ granite blocks assembled without a single drop of mortar, standing nearly 30 meters tall at its peak. Built by the Roman Empire in the 1st century AD. UNESCO World Heritage Site. A breathtaking opening to the final morning.' },
      { type:'activity', icon:'😈', title:'Fun stop: Estatua del Demonio Constructor', sub:'Find the bronze statue of the devil taking a selfie on Calle San Juan, just near the aqueduct. Based on the local legend that the devil built the entire aqueduct in a single night to win a bet with a young girl (who outwitted him at dawn). A fun photo opportunity and a great way to explain the aqueduct\'s history through storytelling for the kids.', gq:'Estatua del Diablo, Calle San Juan, Segovia' },
      { type:'activity', icon:'🚶', title:'Walk: Aqueduct → Calle Real → Cathedral → Alcázar', sub:'The entire historic center is pedestrian and walkable in a single straight route. From the aqueduct, stroll along Calle Real to the soaring late-Gothic Segovia Cathedral, then continue down to the Alcázar — the fairy-tale castle perched on a dramatic rocky promontory flanked by the Eresma and Clamores rivers. Its distinctive slate-spire towers were a primary inspiration for Walt Disney\'s Cinderella Castle.' },
      { type:'activity', icon:'🏰', title:'Alcázar of Segovia — inside', sub:'Grand ceremonial halls, the historic Sala de Armas (armory room) filled with medieval armor and weapons — a guaranteed hit with the kids — and the spiral staircase of the Tower of John II for panoramic views of the Sierra de Guadarrama. Budget 1–1.5 hours inside.', gq:'Alcázar de Segovia' },
      { type:'activity', icon:'🍽', title:'Farewell lunch: Restaurante José María', sub:'Calle Cronista Lecea 11, Segovia. A legendary Segovian institution under the management of Rocío Ruiz and her father José María. The signature dish is wood-fired cochinillo (suckling pig) roasted in custom ovens — producing incredibly tender meat and glass-crisp skin.\n\nThe house specialty of the experience: the host cuts the whole pig at the table using the edge of a ceramic plate to demonstrate its exceptional tenderness, then <strong>dramatically breaks the plate on the floor</strong>. Adults enjoy a glass of the signature Pago de Carraovejas wine; children can choose artisanal ice creams and classic regional treats.\n\n<strong>Reserve well in advance — this is one of Segovia\'s most celebrated restaurants.</strong>', url:'https://www.restaurantejosemaria.com/en/our-home/', urlLabel:'🔗 Reserve at José María' },
      { type:'drive', text:'~90 km · ~1 hr · AP-6 south → A-1 → MAD Barajas · a comfortable, straightforward drive to the airport',
        route:{ from:'Segovia, Spain', to:'Madrid Barajas Airport, Spain' } },
    ]
  },
},

// ── QUICK LINKS ────────────────────────────────────────────
quickLinks: [
  { label: 'AEMET weather forecast (Spain)', url: 'https://www.aemet.es/en/home' },
  { label: 'Aventura Amazonia booking', url: 'https://aventura-amazonia.com/reservas/cercedilla.php' },
  { label: 'José María restaurant', url: 'https://www.restaurantejosemaria.com/en/our-home/' },
],

// ── RESOURCES (trip checklist) ─────────────────────────────
resources: {
  sections: [
    {
      id: 'flights',
      icon: '✈️',
      title: 'Flights',
      items: [
        { key: 'flight-out',  label: 'Book outbound flight to MAD (Aug 18)', type: 'booking', priority: 'critical', status: 'pending', notes: 'Arrive MAD with enough time to collect the car and reach Pirón by early evening (plan for 3pm+ landing)' },
        { key: 'flight-home', label: 'Book return flight from MAD (Aug 24)', type: 'booking', priority: 'critical', status: 'pending', notes: 'Drive from Segovia is ~1hr — plan a 5pm+ departure to allow time for the farewell lunch' },
      ]
    },
    {
      id: 'car',
      icon: '🚗',
      title: 'Car Rental — MAD',
      intro: '<strong>A rental car is mandatory for this entire trip.</strong> Public transit to Santo Domingo de Pirón runs only twice on weekdays, once on Saturdays, and not at all on Sundays. The AP-6 Segovia motorway uses electronic tolls — confirm payment method at pickup.',
      items: [
        { key: 'car-book',      label: 'Book family car / SUV at MAD Airport', type: 'booking', priority: 'critical', status: 'pending', notes: 'Needs to seat 2 adults + 3 children comfortably with luggage for 6 nights. Book well in advance.' },
        { key: 'car-childseat', label: 'Confirm child seat availability with rental agency', type: 'todo', priority: 'critical', status: 'pending', notes: 'Legally required in Spain for children under 135cm / 12 years of age' },
        { key: 'car-tolls',     label: 'Confirm electronic toll payment at pickup (Via-T or credit card)', type: 'info', priority: 'critical', status: 'pending', notes: 'AP-6 (Segovia motorway) is a key toll road used on multiple days of this trip' },
      ]
    },
    {
      id: 'accommodation',
      icon: '🏠',
      title: 'Accommodation',
      intro: 'The entire trip is based in one place — 6 nights in or very close to Santo Domingo de Pirón. Look for a <em>casa rural</em> (rural house) with outdoor space for 5. The village has ~50 residents: very limited options, book as early as possible.',
      items: [
        { key: 'acc-piron', label: 'Book casa rural — Santo Domingo de Pirón (6 nights)', type: 'booking', priority: 'critical', status: 'pending', dates: 'Aug 18–24', reservation_deadline: '2026-06-01', notes: 'Extremely limited availability in this tiny village — book the moment the trip is confirmed' },
      ]
    },
    {
      id: 'activities',
      icon: '🎟',
      title: 'Reservations',
      items: [
        { key: 'act-elpalomar',    label: 'El Palomar de Brieva — dinner (Aug 18, Tue)', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.elpalomardebrieva.com/', notes: 'Aug 18 evening · reserve ahead — popular restaurant in a tiny village', reservation_deadline: '2026-08-01' },
        { key: 'act-lagranja-wed', label: 'La Granja fountain show tickets (Aug 19, Wed)', type: 'booking', priority: 'critical', status: 'pending', notes: 'Aug 19 · Wed from 5:30pm · €5/person · buy online or at box office by 5pm', gq:'Real Palacio de La Granja de San Ildefonso' },
        { key: 'act-kayak',        label: 'Hoces del Duratón — guided kayak tour (Aug 20, Thu)', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.turismocastillayleon.com/en/nature/hoces-del-rio-duraton-natural-park', notes: 'Aug 20 · 3.5-hr guided tour · from €16/child · €26/adult · book via local operator in Sebulcor or San Miguel de Bernuy', reservation_deadline: '2026-07-15' },
        { key: 'act-amazonia',     label: 'Aventura Amazonia — tickets + parking (Aug 21, Fri)', type: 'booking', priority: 'critical', status: 'pending', url: 'https://aventura-amazonia.com/reservas/cercedilla.php', notes: 'Aug 21 · 3-hr pass €20–25/person · parking €9 · buy online before the day', reservation_deadline: '2026-08-10', urlLabel: '🎟 Aventura Amazonia booking' },
        { key: 'act-berceas',      label: 'Las Berceas Pools — tickets + parking (Aug 21, Fri)', type: 'booking', priority: 'critical', status: 'pending', url: 'https://cercedilla.es/', notes: 'Aug 21 · strictly requires online pre-booking · Fri (weekday): €9 adult / €6 child (3–15)' },
        { key: 'act-josemaria',    label: 'Restaurante José María — farewell lunch (Aug 24, Mon)', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.restaurantejosemaria.com/en/our-home/', notes: 'Aug 24 · Calle Cronista Lecea 11, Segovia · reserve well ahead — legendary restaurant', reservation_deadline: '2026-08-01' },
        { key: 'act-lagranja-sat', label: 'La Granja Baños de Diana night show (Aug 22 Sat — Option B)', type: 'booking', priority: 'optional', status: 'pending', notes: 'Aug 22 · 10:30–11:30pm · €3/person · gardens open from 10pm · only if Option B chosen for Sat', gq:'Real Palacio de La Granja de San Ildefonso' },
        { key: 'act-bernabeu',     label: 'Bernabéu Stadium Tour (Aug 22 — Option A only)', type: 'booking', priority: 'optional', status: 'pending', url: 'https://www.realmadrid.com/en-US/tour-bernabeu/individual', notes: 'Aug 22 · only relevant if Option A (Madrid city day) is chosen' },
      ]
    },
    {
      id: 'ops',
      icon: '📋',
      title: 'Before You Go',
      items: [
        { key: 'ops-offline-maps', label: 'Download offline Google Maps (Segovia + Madrid regions)', type: 'todo', priority: 'critical', status: 'pending', url: 'https://support.google.com/maps/answer/6291838', notes: 'Mountain roads near Pirón and the Duratón area have patchy mobile signal — essential' },
        { key: 'ops-esim',         label: 'Get a Spanish / EU SIM or roaming plan', type: 'booking', priority: 'critical', status: 'pending', url: 'https://www.airalo.com/', notes: 'Airalo Spain eSIM or check your carrier\'s EU data roaming rates. Activate before landing.' },
        { key: 'ops-swimgear',     label: 'Pack: swimwear, water shoes, rash guards, dry bags, high-SPF sun cream', type: 'todo', priority: 'critical', status: 'pending', notes: 'River or pool activity on almost every day — rash guards recommended for kids in cold mountain water' },
        { key: 'ops-kayakclothes', label: 'Pack: quick-dry clothes + full change for kayak day (Aug 20)', type: 'todo', priority: 'critical', status: 'pending', notes: 'You WILL get wet — pack a complete dry change of clothes per person for the Duratón day' },
        { key: 'ops-layers',       label: 'Pack: light warm layer for evenings at 1,079m elevation', type: 'todo', priority: 'recommended', status: 'pending', notes: 'August evenings in Santo Domingo de Pirón are noticeably cooler than the Madrid lowlands — a light fleece per person' },
        { key: 'ops-cash',         label: 'Keep €50–100 cash (some rural sites are cash-only)', type: 'todo', priority: 'recommended', status: 'pending', notes: 'Las Presillas parking, local kayak operators in Sebulcor, and some Sepúlveda asadores may not accept cards' },
        { key: 'ops-picnic',       label: 'Plan picnic supplies for Aug 19 (Boca del Asno) and Aug 23 (Las Presillas)', type: 'todo', priority: 'recommended', status: 'pending', notes: 'Las Presillas prohibits glass containers — bring food in plastic or reusable containers only' },
      ]
    },
  ]
},

};
