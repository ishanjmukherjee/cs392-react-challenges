# Card UI for the course list

Restyle the course list in `src/App.tsx` as a responsive grid of cards, matching
the look of `docs/card-ui.png`.

Each card shows, top to bottom:

- the term and course number as a heading, e.g., "Fall CS 101"
- the course title
- a divider, then the meeting time, e.g., "MWF 11:00-11:50"

Cards have a light border, rounded corners, and comfortable padding, as in the
reference.

Layout behavior:

- Cards wrap onto more rows as the screen narrows, down to one column on a
  phone. Each row fills the available width.
- Cards on the same row are the same height with the same internal spacing.
- The divider and meeting time sit at the bottom of every card, so they line up
  across a row even when titles wrap to different lengths.

Pull the card out into its own `CourseCard` component that takes a course as a
typed prop, so later features (term filters, selection) can build on it.

## Context

- Vite + React 19 + TypeScript. Tailwind CSS v4 is already installed and loaded
  via `@tailwindcss/vite` and `@import 'tailwindcss'` in `src/index.css`. There
  is no `tailwind.config.js`; v4 doesn't need one. Style with utility classes
  rather than new CSS files.
- The reference image shows example courses that differ from the app's data.
  Keep the existing hard-coded `schedules` data and the schedule title heading.
- Node isn't on the global PATH on this machine. Use
  `export PATH=/Users/ishanjmukherjee/projects/cs392-local/.tools/node-v24.21.0-darwin-arm64/bin:$PATH`
  before running npm.
- Done means `npm run build` and `npm run lint` pass. Leave the changes
  uncommitted so they can be reviewed.
