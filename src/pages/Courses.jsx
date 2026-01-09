import CourseCard from "../components/CourseCard";
import coursesData from "../data/coursesData";

const Courses = () => {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-4xl font-bold mb-12 text-center">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Courses;
