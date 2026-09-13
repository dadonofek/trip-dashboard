# 🧳 Trip Dashboard

A single-page, zero-build trip planner you can host for free on GitHub Pages.
One `index.html` renders any trip described by a data file: an interactive map
(route, stops, restaurants, hikes), a tap-to-jump calendar, a day-by-day
itinerary with collapsible cards, per-region "where to eat / more to do"
guides, live weather chips, and a booking checklist whose state is saved on
each visitor's device.

No framework, no build step, no server, no API keys. Works offline-ish
(everything except map tiles and weather), and it's phone-first.

## Use it for your own trip

1. **Get a copy** — click **Use this template** (or Fork) on GitHub.
2. **Write your trip file** — copy `trips/upstate-ny-2026.js` to
   `trips/<your-trip-id>.js` and replace its contents. The schema is
   documented below and in comments inside the example file.
   *Shortcut:* paste your rough itinerary plus the example trip file into
   Claude/ChatGPT and ask it to produce a new trip file in the same format —
   the schema is designed to be easy for an LLM to fill in.
3. **Register it** — add an entry to `trips/manifest.js`.
4. **Publish** — repo Settings → Pages → deploy from the `main` branch.
   Your dashboard is live at `https://<you>.github.io/<repo>/`.

With one trip in the manifest, the site opens it directly. With several, the
homepage becomes a trip picker, and each trip has a shareable deep link:

```
https://<you>.github.io/<repo>/?trip=<trip-id>
```

## Repo layout

```
index.html            the renderer — generic, no trip content inside
trips/manifest.js     list of available trips (id, title, dates, file, v)
trips/<trip-id>.js    one self-contained data file per trip
```

When you edit a trip file, **bump its `v` value in the manifest** — it's a
cache-buster so phones (especially iOS Safari) fetch the fresh copy.

## Trip file schema

A trip file assigns one object to `window.TRIP_DATA`:

```js
window.TRIP_DATA = {
  meta: {
    id: 'tuscany-2027',            // unique slug; used in the URL and to
                                   // namespace saved checklist state
    title: 'Tuscany Spring 2027',  // page title + fallback footer
    footer: 'Tuscany 2027 · ...',  // optional footer line
    start: '2027-04-02',           // trip window (ISO) — drives the calendar
    end: '2027-04-16',
    quickLinksLabel: '🌸 Links:',  // optional prefix for quickLinks row
  },

  route: [ [43.77, 11.25], ... ],  // lat/lng polyline drawn on the map.
                                   // The map auto-fits to route+stops+pois.

  routesAlt: [                     // optional — dashed overlay polylines for
    { label: 'Flex: detour',       // alternate/contingency drives. label
      color: '#0EA5E9',            // (optional) shows as a popup on tap;
      points: [ [43.7, 11.2], ... ] } // color defaults to #0EA5E9
  ],

  stops: [                         // anchor markers, visible at every zoom
    { lat: 43.77, lng: 11.25, label: 'FLR', regionId: 'florence',
      title: 'Florence', dates: 'Apr 2–6' },
    // color: '#hex' optional — defaults to the region's color
  ],

  pois: [                          // zoom-tiered detail markers
    // tier 2 appears from zoom 9 (activities, hikes, optional stops)
    // tier 3 from zoom 11 (restaurants, in-town spots)
    // cat drives marker color: activity | hike | scenic | food
    { lat: 43.768, lng: 11.253, tier: 3, cat: 'food', icon: '🍝',
      name: 'Trattoria X', area: 'Florence', sub: 'Why it is worth it.',
      url: 'https://...',          // optional website
      gq: 'Trattoria X Firenze' }, // optional Google-Maps query override
  ],

  regions: [                       // ordered chapters of the trip
    {
      id: 'florence',              // anchor id — also referenced by stops
      emoji: '🏛',
      title: 'Florence',           // section heading
      navLabel: 'Florence',        // short name for nav bar + map legend
      color: '#7C3AED',            // region color (nav, headers, calendar)
      dates: 'Apr 2 – 6',          // display string
      weather: { name: 'Florence, IT', lat: 43.77, lon: 11.25 }, // optional
      infoCard: {                  // optional "eat / more to do" card
        prefix: 'flr',             // unique id prefix for the tabs
        eat:    [ { icon, name, badge?, badgeLabel?, sub, url? }, ... ],
        nohike: [ { icon, name, badge?, badgeLabel?, sub, url? }, ... ],
        // badge classes: rb-casual rb-fine rb-brew rb-wine rb-must
      },
      days: ['d1', 'd2'],          // ordered day ids from `days` below
    },
  ],

  days: {
    d1: {
      date: '2027-04-02',          // ISO — single source of truth; the day
                                   // cards and calendar both format it
      title: 'Arrive FLR → city',
      badge: 'drive',              // drive | explore | hike | flex
      badgeLabel: 'Drive',
      calColor: '#EF4444',         // optional — overrides the region colour
                                   // for this day's calendar cell only, to
                                   // flag a day that needs extra attention
      calNote: 'Tightest day',     // optional — added to the cell's tooltip
      booked: [                    // optional — things that must be reserved
                                   // or bought before the day itself. Puts a
                                   // 🎟 on the calendar cell and a row in the
                                   // "Days that need advance booking" board
                                   // printed under the month grids.
        { label: 'Museum timed entry', must: true },  // must:true → shown in
        { label: 'Ferry ticket' },                    // red = impossible
      ],                                              // without booking ahead
      content: [
        { type: 'activity', icon: '✈️', title: '...', sub: '...',
          tag: 'optional',         // optional badge: optional|rain plan|splurge
          url: '...',              // optional info link
          trailUrl: '...' },       // optional AllTrails link
        { type: 'drive', text: '~120 km · ~2 hrs · A1',
          route: { from: 'Florence', to: 'Siena', via: ['...'] } }, // optional
                                   // route → one-tap Google Maps directions
        { type: 'hiketabs', prefix: 'd1h', tabs: [
          { id: 'base', label: 'Base', active: true, title: '...',
            note: '...', stats: ['5 km', '200 m', 'Easy'], url: '...',
            linkLabel: '🎟 Hours & tickets' }, // optional — defaults to
        ]},                                    // "View on AllTrails"; omit
                                               // url entirely for no link
      ],
    },
  },

  quickLinks: [                    // optional links row atop the checklist
    { label: 'Foliage report', url: 'https://...' },
  ],

  resources: {                     // the booking checklist
    sections: [
      { id: 'flights', icon: '✈️', title: 'Flights',
        intro: 'Optional intro HTML for the section.',
        items: [
          { key: 'flight-out',     // stable id — saved state hangs on this
            label: 'Book flights',
            type: 'booking',       // booking | info | todo (button style)
            priority: 'critical',  // critical | recommended | optional
            status: 'pending',     // pending | done (initial; taps override)
            url: 'https://...',    // optional action link
            dates: 'Apr 2',        // optional
            notes: 'Aisle seats',  // optional
            reservation_deadline: '2027-02-01' }, // optional "book by" warning
        ] },
    ],
  },
};
```

Checklist progress (done-state + booking references) is stored in each
visitor's browser `localStorage` under `trip-tasks-<meta.id>` — it is private
to the device, survives reloads, and never leaves the browser. The
**Export tasks** button downloads it as JSON to share a snapshot.

## Sharing with friends

There are two ways to share, and they behave very differently. The short
version: **a templated/forked copy is fully independent — the owner of the
original repo never sees it.** A trip only appears on *your* site if its
file lives in *your* repo.

### One-time setup for the repo owner

1. Merge this code to `main`.
2. Settings → **Pages** → deploy from the `main` branch (if not already on).
3. Settings → **General** → tick **Template repository** — this adds the
   green *Use this template* button friends will click.
4. Share the repo URL.

### Path A — a friend wants their own dashboard

Friend's steps (needs a free GitHub account, no coding required if they use
an LLM):

1. Open your repo → click **Use this template** → *Create a new repository*.
2. Write their trip file: copy `trips/upstate-ny-2026.js` to
   `trips/<their-trip-id>.js` and replace the contents. Easiest route:
   paste the example file + the schema section of this README + their rough
   itinerary into Claude and ask for a trip file in the same format.
3. Update `trips/manifest.js` to point at their file.
4. Their repo → Settings → Pages → deploy from `main`.
5. Their dashboard is live at `https://<their-username>.github.io/<repo>/`.

You do nothing, and you see nothing — their copy is completely detached
from yours. If they want your later improvements to the renderer, they have
to pull them in themselves (GitHub's *Sync fork* button, for forks).

### Path B — a trip hosted on *your* site

For trips you plan together, or friends who don't want their own repo:

1. The friend writes just the trip data file (step A2 above) and sends it
   to you — or opens a pull request if they're comfortable with GitHub.
2. You drop it into `trips/`, add a manifest entry, and push.
3. Your homepage now shows a trip picker, and their trip is shareable at
   `https://<you>.github.io/<repo>/?trip=<their-trip-id>`.

Here you *do* see their itinerary — it's in your repo.

### Who sees what

| | Itinerary visible to you? | Checklist ticks shared? |
|---|---|---|
| Path A (their copy) | No — unless they send their link | No |
| Path B (your repo) | Yes — the file is in your repo | No — ticks are per-device |

Checklist progress never syncs between people or devices: it lives in each
visitor's browser localStorage. The **Export tasks** button is the manual
way to send someone a snapshot.

## Credits

Maps by [Leaflet](https://leafletjs.com/) + OSM/CARTO tiles. Weather by
[Open-Meteo](https://open-meteo.com/) (no key needed, free for
non-commercial use).
