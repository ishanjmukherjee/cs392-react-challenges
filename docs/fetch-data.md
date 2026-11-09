# Fetch data

Replace the hard-coded `schedules` object in `src/App.tsx` with data fetched at
runtime from `https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php`.
The response is JSON shaped like `{ title: string, courses: Record<string, Course> }`,
the same shape as the current `Schedule` type, so keep the existing `Schedule`
and `Course` types and the `CourseCard` grid unchanged.

Fetch once when the app loads, using React state and an effect inside a
reusable custom hook, `useJsonQuery(url)`, which returns the data, a loading
flag, and an error. While loading, show "Loading courses…". If the request
fails or the response isn't OK, show an error message instead of crashing.
When the data arrives, show the schedule title and all courses for fall,
winter, and spring as cards.

Use plain `fetch` with no new dependencies. Type the parsed JSON rather than
using `any`. Don't add filtering, selection, or other features.
