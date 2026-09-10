// ─────────────────────────────────────────────────────────────
//  TRIP MANIFEST — the list of trips this dashboard can show.
//
//  Each entry:
//    id    — must match meta.id inside the trip file; also the
//            value used in the URL:  index.html?trip=<id>
//    title — shown on the trip picker landing page
//    dates — human-readable date range for the picker
//    file  — path to the trip data file (relative to index.html)
//    v     — cache-buster: bump whenever you edit that trip file
//            so phones (notably iOS Safari) fetch the fresh copy
//
//  With a single entry, index.html loads it directly. With more
//  than one, visitors get a trip picker (and ?trip=<id> deep-links
//  straight to a specific trip).
// ─────────────────────────────────────────────────────────────
window.TRIPS_MANIFEST = [
  {
    id: 'upstate-ny-2026',
    title: 'Upstate NY Family Foliage 2026',
    dates: 'Sep 25 – Oct 15, 2026',
    file: 'trips/upstate-ny-2026.js',
    v: '20260910a',
  },
  {
    id: 'segovia-madrid-summer-2026',
    title: 'Segovia & Madrid Alpine Summer 2026',
    dates: 'Aug 18 – 24, 2026',
    file: 'trips/segovia-madrid-summer-2026.js',
    v: '20260624',
  },
];
