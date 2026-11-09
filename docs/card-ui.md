# Card UI with Tailwind

Restyle the course list in `src/App.tsx` as a grid of cards using Tailwind
utility classes, matching the reference image `docs/card-ui.png`.

## Card contents

Each course is one card containing, top to bottom:

1. A heading with the term and course number, e.g., "Fall CS 101".
2. The course title in smaller text, e.g., "Computer Science: Concepts,
   Philosophy, and Connections".
3. A thin horizontal divider.
4. The meeting time, e.g., "MWF 11:00-11:50".

Cards have a light gray border, rounded corners, a white background, and
consistent internal padding.

## Layout

- Cards wrap onto multiple rows depending on screen width: one column on
  phones, more columns on wider screens.
- Each row fills the available screen width, with an even gap between cards.
- Cards on the same row are the same height, regardless of title length.
- The divider and meeting time sit at the bottom of every card, so they line up
  across a row even when titles wrap to different numbers of lines.

## Code structure

- Extract a `CourseCard` component that takes a `course: Course` prop.
- Keep the list's semantics (`ul`/`li`) and a stable key per course.
- Keep the schedule title as an `h1` above the grid.

## Out of scope

Do not add selection, filtering, fetching, routing, or new data. Do not
introduce other CSS libraries or hand-written CSS; use Tailwind classes only.
