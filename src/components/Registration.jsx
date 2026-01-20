import search_bg from "../assets/search_background.jpg";

const Registration = () => {
  return (
    <section className="min-h-150 grid grid-cols-1 md:grid-cols-2">
      
      {/* First part means left side portion */}
      <div className="bg-yellow-400 text-white flex flex-col justify-center px-10 py-16">
        <h2 className="text-4xl font-bold mb-4 text-center px-10 py-3">
          Register now and get a discount 50% discount until 1 January
        </h2>

        <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto text-center px-8 py-8">

         Register now and unlock an exclusive 50% discount on selected courses. This limited-time offer is valid until 1 January, so don’t miss your chance to learn from expert instructors at half the price. Start your journey today!
        </p>

        <button className="bg-black text-white px-6 py-3 w-fit font-semibold hover:bg-gray-800 mx-auto">
          REGISTER NOW
        </button>
      </div>

      {/* Second part means right side portion  */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
           `url(${search_bg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50"></div>

        {/* Form */}
        <div className="relative z-10 bg-white p-10 shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Search for your course
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Course Name"
              className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Category"
              className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Degree"
              className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
            />

            <button
              type="button"
              className="w-full bg-yellow-400 text-white py-3 font-semibold hover:bg-yellow-500"
            >
              SEARCH COURSE
            </button>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Registration;
