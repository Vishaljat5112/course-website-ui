import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

import contactBg from "../assets/contact-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ NEW: validation function
  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    // required
    if (!name || !email || !message) return "All fields are required!";

    // name validation
    if (name.length < 3) return "Name must be at least 3 characters";
    if (name.length > 50) return "Name must be less than 50 characters";

    // name only letters + spaces
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) return "Name should contain only letters";

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";

    // message validation
    if (message.length < 10) return "Message must be at least 10 characters";
    if (message.length > 1000) return "Message must be less than 1000 characters";

    return null; // ✅ valid
  };

  // input change handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ UPDATED: validation check
    const errorMsg = validateForm();
    if (errorMsg) return alert(errorMsg);

    try {
      setLoading(true);

      // ✅ UPDATED: send trimmed values (clean data)
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      };

      const res = await axios.post("http://localhost:5000/api/contact", payload);

      alert(res.data.message || "Message sent ✅");

      // reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert(err?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Contact"
        subtitle="Any Query? please contact us..."
        bgImage={contactBg}
      />

      <section className="py-16 bg-gray-50 ">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          {/* Left Info */}
          <div className="px-3 py-5">
            <h3 className="text-xl font-bold mb-4 flex justify-center items-center">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6">
              Feel free to Contact Us for any query related to courses or
              admissions.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>
                <b>Address: </b> Indore,MP
              </p>
              <p>
                <b>Phone:</b>+91 99999 88888
              </p>
              <p>
                <b>Email:</b>hello@course.com
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              Contact Form
            </h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                minLength={3} // ✅ NEW
                maxLength={50} // ✅ NEW
                className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
              />

              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                minLength={10} // ✅ NEW
                maxLength={1000} // ✅ NEW
                className="w-full border px-4 py-3 outline-none focus:border-yellow-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 text-white px-6 py-3 font-semibold hover:bg-yellow-500 w-full disabled:opacity-60"
              >
                {loading ? "SENDING..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
