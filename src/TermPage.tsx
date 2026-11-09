import { useState } from 'react';
import { type Course, CourseCard } from './CourseCard';
import { type Term, TermSelector } from './TermSelector';

interface TermPageProps {
  courses: Record<string, Course>;
}

export const TermPage = ({ courses }: TermPageProps) => {
  const [selectedTerm, setSelectedTerm] = useState<Term>('Fall');

  const termCourses = Object.entries(courses).filter(
    ([, course]) => course.term === selectedTerm,
  );

  return (
    <>
      <TermSelector
        selectedTerm={selectedTerm}
        setSelectedTerm={setSelectedTerm}
      />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-2">
        {termCourses.map(([id, course]) => (
          <li key={id}>
            <CourseCard course={course} />
          </li>
        ))}
      </ul>
    </>
  );
};
