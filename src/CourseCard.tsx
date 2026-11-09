export interface Course {
  term: string;
  number: string;
  meets: string;
  title: string;
}

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => (
  <div className="flex h-full flex-col rounded-lg border border-gray-300 p-2 font-sans">
    <div className="flex-1 px-2 pt-4 pb-4">
      <h2 className="mb-2 text-xl">
        {course.term} CS {course.number}
      </h2>
      <p className="text-sm leading-relaxed">{course.title}</p>
    </div>
    <hr className="border-gray-300" />
    <p className="px-2 py-3 text-sm">{course.meets}</p>
  </div>
);
