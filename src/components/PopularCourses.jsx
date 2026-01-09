import CourseCard from "./CourseCard";
import authorImg from "../assets/author.jpg";
import course1 from "../assets/course_1.jpg";
import course2 from "../assets/course_2.jpg";
import course3 from "../assets/course_3.jpg";



const PopularCourses = () => {
    const courses = [
        {
            id: 1,
            title: "A complete guide to design",
            subtitle: "Adobe Guide, Layers, Smart Objects etc...",
            author: "Michael Smith",
            price: 29,
            image: course1,
            authorImage: authorImg,
        },
        {
            id: 2,
            title: "Beginners guide to HTML",
            subtitle: "Adobe Guide, Layers, Smart Objects etc...",
            author: "Michael Smith",
            price: 29,
            image: course2,
            authorImage: authorImg, 
        },
        {
            id: 3,
            title: "Advanced Photoshop",
            subtitle: "Adobe Guide, Layers, Smart Objects etc...",
            author: "Michael Smith",
            price: 29,
            image: course3,
            authorImage: authorImg,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
                    <h2 className="text-3xl font-bold">
                        Popular Courses
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            image={course.image}
                            title={course.title}
                            subtitle={course.subtitle}
                            author={course.author}
                            price={course.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;
