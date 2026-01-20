import {
  BookOpen,
  School,
  Library,
  User,
  Award,
  GraduationCap,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: BookOpen,
      title: "Online Courses",
      description:
       "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum..",
    },
    {
      id: 2,
      icon: School,
      title: "Indoor Courses",
      description:
        " In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.",
    },
    {
      id: 3,
      icon: Library,
      title: "Amazing Library",
      description:
        " In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.",
    },
    {
      id: 4,
      icon: User,
      title: "Exceptional Professors",
      description:
        " In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum..",
    },
    {
      id: 5,
      icon: Award,
      title: "Top Programs",
      description:
        "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.",
    },
    {
      id: 6,
      icon: GraduationCap,
      title: "Graduate Diploma",
      description:
       "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
