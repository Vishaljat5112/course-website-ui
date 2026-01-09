import CourseCard from "./CourseCard";
import coursesData from "../data/coursesData";

const PopularCourses =() =>{
        return(
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Popular Courses
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coursesData.map((course) => (
                            <CourseCard key={course.id} {...course}/>
                        ))}
                    </div>
                </div>
            </section>
        );
};

export default PopularCourses;