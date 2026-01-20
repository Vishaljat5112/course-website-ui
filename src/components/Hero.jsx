import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import FeatureCard from "./FeatureCard";
import { Globe, LibraryBig, User } from "lucide-react";
import Navbar from "../components/Navbar";
import heroBg1 from "../assets/slider_background.jpg";
import heroBg2 from "../assets/slider_background.jpg";
import heroBg3 from "../assets/slider_background.jpg";

const bgImages = [
  heroBg1,
  heroBg2,
  heroBg3,
];
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center" >
      
      <div className="w-full h-screen">
        <Swiper className="w-full h-full" slidesPerView={1} loop={true} 
        modules={[Autoplay]}
        autoplay={{
          delay:3000,
          disableOnInteraction:false,
        }}
        
        >
          {bgImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>

                {/* Overlay */}
                <div className="absolute inset-0 "></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 animate-pulse">
                  <h1 className="text-white text-4xl md:text-6xl ">
                    Get your{" "}
                    <span className="bg-yellow-400 text-white px-2">
                      Education
                    </span>{" "}
                    today!
                  </h1>
                </div>

                {/* Bottom Cards */}
                <div className="relative z-20 max-w-6xl mx-auto -mt-40 px-10 pb-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <FeatureCard title="Online Courses" icon={Globe } />
                    <FeatureCard title="Our Library" icon={LibraryBig } /> 
                    <FeatureCard title="Our Teachers" icon={User } />
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Overlay */}

    </section>
  );
};

export default Hero;
