import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

import CourseCard from "../components/CourseCard";
import coursesData from "../data/coursesData";

import elementsBg from "../assets/elements-bg.jpg";


const Elements =() =>{
    return(
        <>
        <Navbar/>

        <PageHeader
        title="Elements"
        subtitle="Key learning elements designed for student success and growth."
        bgImage={elementsBg}
        />
         <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">UI Elements</h2>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-yellow-400 text-white px-6 py-3 font-semibold hover:bg-yellow-500">
              Primary Button
            </button>
            <button className="bg-black text-white px-6 py-3 font-semibold hover:bg-gray-800">
              Dark Button
            </button>
            <button className="border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
              Outline Button
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        </div>
      </section>

        



        <Footer/>
        </>
    );
};

export default Elements;