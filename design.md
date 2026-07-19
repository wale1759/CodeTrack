# CodeTrack design system

CodeTrack is a calm, progress-led learning tracker. The interface should feel encouraging and practical: green communicates forward movement, teal communicates learning data, and amber is reserved for streak celebration.

## Brand

- **Product name:** `CodeTrack` - "Code" in ink, "Track" in primary green.
- **Mark:** A rounded-square 3x3 grid of green tiles on an ink background.
- **Core message:** Build the habit; make daily learning progress visible.
- **Streak badge:** Flame icon + monospaced count, for example `12-day streak`.

## Colour tokens

| Token | Hex | Use |
| --- | --- | --- |
| `--green-primary` | `#16A34A` | Primary actions, positive progress, active heatmap cells |
| `--green-deep` | `#15803D` | Hover/pressed primary state, strongest heatmap level |
| `--green-soft` | `#DCFCE7` | Soft success fills and subtle positive backgrounds |
| `--teal` | `#0D9488` | Secondary data series, info accents, time metrics |
| `--amber` | `#F59E0B` | Streaks and "at risk" emphasis only |
| `--danger` | `#DC2626` | Destructive actions and inline validation errors |
| `--ink` | `#0F1419` | Headings, key numbers, dark buttons, logo base |
| `--body` | `#3A4250` | Default body text |
| `--muted` | `#6B7280` | Supporting text, labels, metadata |
| `--subtle` | `#F4F7F5` | Application/page background and quiet surfaces |
| `--border` | `#E5E9E7` | Card, field, divider, and track borders |

### Heatmap scale

Use a five-step activity scale, from no activity to most activity:

`#EBEDF0` -> `#9BE3B8` -> `#4ECB7E` -> `#16A34A` -> `#0E6E3C`

## Typography

Use three typefaces with clearly separate roles.

| Role | Typeface | Weight / size guidance | Use |
| --- | --- | --- | --- |
| Display | Space Grotesk | 700 | Major headings and key numerical emphasis |
| UI/body | Inter | 400–600, typically 14–18px | Navigation, buttons, labels, cards, and prose |
| Mono | JetBrains Mono | 400–600 | Stats, dates, durations, counts, tags, and utility labels |

- Display heading example: **"Build the habit"**.
- Body copy should be readable and conversational, using `--body`.
- Section overlines use uppercase mono, small size, generous letter-spacing, and primary green or muted text.
- Large metrics are ink-coloured, compact, and paired with a coloured mono unit such as `days` or `hrs`.

## Layout and spacing

- Base spacing unit: **4px**.
- Preferred scale: `4, 8, 12, 16, 24, 32, 48, 64px`.
- Use generous white space and clear section dividers; desktop compositions use a broad two-column system, while the compact reference stacks into full-width sections.
- Page background: `--subtle`; cards and panels: white.
- Standard cards are softly rounded with a thin `--border` stroke and low, diffuse shadow.

## Radius and elevation

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | `6px` | Tags, compact controls |
| `--radius-md` | `10px` | Inputs and buttons |
| `--radius-lg` | `12px` | Standard cards |
| `--radius-xl` | `14px` | Large feature panels |
| `--radius-pill` | `999px` | Status, streak, and compact filter badges |

- Elevation should stay restrained: none for quiet surfaces, then a soft sparse shadow for raised cards, and a slightly stronger soft shadow for prominent primary controls.

## Components

### Buttons

- One green primary action per view. Primary button uses `--green-primary`, white semibold text, medium radius, and a soft green shadow; hover uses `--green-deep`.
- Secondary button is white with `--border`, ink text, and may lead with a simple line icon.
- Ghost/text button is borderless with body/ink text.
- Dark button is `--ink` with white text, for a contrasting account/action path.
- Danger button uses `--danger` with white text.
- Disabled/loading buttons use a softened green (`--green-primary` at reduced contrast); loading includes a small spinner.
- Square icon buttons use the same height as controls and a `--radius-md` corner.

### Tags, badges, and avatars

- Tags are small mono pills/chips: teal for topical labels (for example `# react`), green for completion (`mastered`), and neutral for general taxonomy.
- Status badges are pill-shaped: soft green for "On track," pale amber for "Streak at risk," teal for "New," and neutral grey for "Draft."
- Streak badges use pale amber fill, amber border/text, flame icon, and monospaced streak count.
- Avatars are circular, compact, and may overlap. Use light neutral/brand-tinted fills with short initials.

### Forms

- Labels sit above fields in Inter semibold, ink.
- Inputs are white, bordered with `--border`, roughly medium control height, and use `--radius-md`.
- Placeholder text is muted.
- Focus treatment is green (outline/ring); reserve red border and red inline helper copy for errors.
- Password fields may include a small monospaced trailing "SHOW" action.
- Checkboxes are compact squares; checked state is green with a white check.

### Cards and metrics

- Metric cards have white fill, subtle border, medium/large radius, and roomy internal padding.
- Start with a small coloured line icon and muted label, then the large metric. Supporting benchmark text sits beneath in muted copy.
- Keep units visibly distinct: amber for streak days, teal for hours, ink for count values.

## Progress and activity data

- **Progress rows:** Label on the left, mono summary on the right, thin pale track beneath, and a 4–6px rounded fill. Use green for primary learning goals and teal for a secondary topic/data series.
- **Activity bars:** Minimal vertical green bars on a quiet baseline. Keep day initials and axis labels small mono and muted.
- **Contribution heatmap:** Small rounded squares in the defined heatmap scale, grouped by month. Include a "Less -> More" legend.
- Present data as personal momentum, not as dense analytics: limited chrome, strong hierarchy, and no unnecessary gridlines.

## Iconography and motion

- Use simple, friendly outline icons with rounded geometry (flame, calendar, clock, play, search, plus, check).
- Icons usually inherit their semantic colour: green for progress, teal for time/data, amber for streaks, red for errors.
- Motion should be brief and affirming: gentle hover lift/shadow for buttons and cards, subtle progress transitions, and no distracting continuous animation.

## Accessibility guardrails

- Do not use colour as the only status signal; pair it with an icon, label, or helper text.
- Keep text and control contrast high against white and subtle backgrounds.
- Preserve clear keyboard focus, especially the green input focus ring.
- Maintain generous target sizes and label all icon-only controls.
