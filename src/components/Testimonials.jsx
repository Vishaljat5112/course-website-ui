import Testimonialsbg from "../assets/testimonials_background.jpg";
import userImg from "../assets/Testimonials_user.jpg";


const Testimonials = () => {
  return (
    <section
      className="relative min-h-125 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Testimonialsbg})`,
      }}
    >
      
      <div className="absolute inset-0 bg-black/70"></div>

      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 py-24">
        
      
        <div className="mb-8">
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold">
            What our students say
          </h2>
        </div>

       
        <p className="text-sm md:text-base leading-relaxed mb-10 text-gray-200">
          In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
          vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
          finibus tortor fermentum. In aliquam, augue a gravida rutrum,
          ante nisl fermentum nulla.
        </p>

        
        <div className="flex flex-col items-center">
          <img
            src={userImg}  
            alt="student"
            className="w-20 h-20 rounded-full object-cover mb-4"
          />

          <h4 className="font-semibold text-yellow-400">
            James Cooper
          </h4>

          <span className="text-sm text-gray-300">
            Graduate Student
          </span>
        </div>

       
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full bg-white/50"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          <span className="w-2 h-2 rounded-full bg-white/50"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
