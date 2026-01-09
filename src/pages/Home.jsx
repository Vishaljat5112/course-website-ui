import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularCourses from "../components/PopularCourses";
import Registration from "../components/Registration";
import OurServices from "../components/OurServices";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <PopularCourses/>
      <Registration/>
      <OurServices/>
      <Testimonials/>
      <Events/>
        <Footer/>
      
    </>
  );
};

export default Home;
