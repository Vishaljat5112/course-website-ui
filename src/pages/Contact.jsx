import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

import contactBg from "../assets/contact-bg.jpg";

const Contact = () => {
    return (
        <>
        <Navbar/>
        <PageHeader title="Contact" subtitle="Any Query? please contact us..." bgImage={contactBg}  />

      <section className="py-16 bg-gray-50 border-4">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ">

          {/* Left Info */}
          <div >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6"> Feel free to Contact Us for any query related to courses or admissions.
            </p>

            <div className="space-y-3 text-gray-700">
                <p><b>Address: </b> Indore,MP</p>
                <p><b>Phone:</b>+91 99999 88888</p>
                <p><b>Email:</b>hello@course.com</p>
            </div>


          </div>


          {/* Right Form */}
          <div className="bg-white shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-center"> Contact Form </h3>

                <form className="space-y-3">
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
                    />
                    <input 
                    type="text"
                    placeholder="Your Email"
                    className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
                    />
                    <textarea 
                    rows="4"
                    placeholder="Message"
                    className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
                    ></textarea>

                    <button
                    type="button"
                    className="bg-yellow-400 text-white px-6 py-3 font-semibold hover:bg-yellow-500 w-full"
                    >SEND</button>


                </form>


          </div>

        </div>
      </section>

        <Footer/>
        </>
    );
};

export default Contact;