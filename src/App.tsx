import { type Course } from './CourseCard';
import { useJsonQuery } from './hooks/useJsonQuery';
import { TermPage } from './TermPage';

interface Schedule {
  title: string;
  courses: Record<string, Course>;
}

const SCHEDULE_URL =
  'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php';

export const App = () => {
  const {
    data: schedule,
    isLoading,
    error,
  } = useJsonQuery<Schedule>(SCHEDULE_URL);

  if (error) {
    return (
      <main>
        <p role="alert">Error loading courses: {error.message}</p>
      </main>
    );
  }

  if (isLoading || !schedule) {
    return (
      <main>
        <p>Loading courses…</p>
      </main>
    );
  }

  return (
    <main>
      <h1>{schedule.title}</h1>
      <TermPage courses={schedule.courses} />
    </main>
  );
};
