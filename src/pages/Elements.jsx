import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

import elementsBg from "../assets/elements-bg.jpg";


const Elements =() =>{
    return(
        <>
        <Navbar/>

        <PageHeader
        title="Elements"
        subtitle="...ELEMENTS..."
        bgImage={elementsBg}
        />
         <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">UI Elements</h2>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 shadow bg-white">
              <h3 className="font-semibold text-lg mb-2">Card Title</h3>
              <p className="text-sm text-gray-600">
                This is a simple card component for UI elements showcase.
              </p>
            </div>

            <div className="p-6 shadow bg-white">
              <h3 className="font-semibold text-lg mb-2">Card Title</h3>
              <p className="text-sm text-gray-600">
                This is a simple card component for UI elements showcase.
              </p>
            </div>

            <div className="p-6 shadow bg-white">
              <h3 className="font-semibold text-lg mb-2">Card Title</h3>
              <p className="text-sm text-gray-600">
                This is a simple card component for UI elements showcase.
              </p>
            </div>
          </div>
        </div>
      </section>

        



        <Footer/>
        </>
    );
};

export default Elements;