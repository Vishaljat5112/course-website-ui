import CourseCard from "../components/CourseCard";
import coursesData from "../data/coursesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Courses = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen py-20 bg-gray-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 ">

        <h1 className="text-4xl font-bold mb-12 text-center">
          Our Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Courses;
