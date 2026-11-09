# Card UI with Tailwind

Restyle the course list in `src/App.tsx` as a grid of cards using Tailwind
utility classes, matching the reference image `docs/card-ui.png`.

- Each course is a card with a light gray border, rounded corners, and padding.
- Card contents, top to bottom: a heading with the term and course number
  (e.g., "Fall CS 101"), the course title, a horizontal divider, and the
  meeting time (e.g., "MWF 11:00-11:50").
- Cards wrap onto more rows on narrower screens, and each row fills the
  available screen width.
- Cards on the same row have the same height and internal spacing, and the
  divider and meeting time line up at the bottom of every card regardless of
  title length.
- Put the card in its own `CourseCard` component with typed props.
- Do not add filtering, selection, data fetching, or other features.
