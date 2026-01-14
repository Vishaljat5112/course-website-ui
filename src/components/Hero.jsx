import FeatureCard from "./FeatureCard";
import heroBg from "../assets/slider_background.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center h-screen"
       style={{
    backgroundImage: `url(${heroBg})`,
  }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Get your{" "}
          <span className="bg-yellow-400 text-black px-2">
            Education
          </span>{" "}
          today!
        </h1>
      </div>

      {/* Bottom Cards */}
      <div className="relative z-10 max-w-7xl mx-auto -mt-40 px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <FeatureCard title="Online Courses" />
          <FeatureCard title="Our Library" />
          <FeatureCard title="Our Teachers" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
