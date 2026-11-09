# Term filter

Add an interactive term filter so users can choose whether to see classes for
Fall, Winter, or Spring.

- Add a `TermSelector` component with three radio-style buttons labeled Fall,
  Winter, and Spring. Exactly one is selected at a time, and the selected one
  is visibly highlighted with Tailwind classes.
- Add a `TermPage` component that holds the term selector above the existing
  course card grid.
- `TermPage` owns a `selectedTerm` state variable, initially `'Fall'`. Pass the
  value and a setter to `TermSelector`, and pass the value to the course list.
- The course list shows only courses whose `term` matches `selectedTerm`.
- Clicking a term button immediately updates the displayed courses.
- Define `type Term = 'Fall' | 'Winter' | 'Spring'` and use it for the state
  and props instead of plain strings.
- Keep the existing data fetching, loading and error states, schedule title,
  and `CourseCard` unchanged. `App` renders `TermPage` once the schedule loads.
- Don't add course selection, routing, or other features.
