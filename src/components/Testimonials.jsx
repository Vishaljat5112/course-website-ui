import { useEffect, useState } from "react";
import bgImg from "../assets/testimonials_background.jpg";
import userImg from "../assets/Testimonials_user.jpg";


const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      text: `In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
      vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
      finibus tortor fermentum.`,
      name: "JAMES COOPER",
      role: "Graduate Student",
      image: userImg,
    },
    {
      id: 2,
      text: `Great platform! I learned so much from the courses and mentors.
      The learning experience is very smooth and practical.`,
      name: "MICHAEL SMITH",
      role: "Web Developer",
      image: userImg,
    },
    {
      id: 3,
      text: `Amazing teachers and best learning environment.
      Highly recommended for beginners and professionals.`,
      name: "SARA JONES",
      role: "UI/UX Designer",
      image: userImg,
    },
  ];

  const [active, setActive] = useState(0);

  // Auto-slide testimonials every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

   return (
    <section
      className="relative min-h-150 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center text-white overflow-hidden">
        {/* heading */}
        <div className="mb-10">
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-4xl font-bold">What our students say</h2>
        </div>

        {/* slider */}
        <div className="relative">
          
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-full px-4">
                {/* quote icon */}
                <div className="text-yellow-400 text-5xl mb-4">“</div>

                {/* text */}
                <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10">
                  {item.text}
                </p>

                {/* user */}
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/30 mb-4"
                  />

                  <h4 className="font-bold text-yellow-400 tracking-wide">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-300">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === index ? "bg-yellow-400 scale-125" : "bg-white/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;