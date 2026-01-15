import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

import newsBg from "../assets/news-bg.jpg";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const News = () => {
        const newsData = [
            {
                    id:1,
                    image: news1,
                    title: "New Courses Updated",
                    desc: "We have launched new practical courses for beginners.",
            },

            {
                    id:2,
                    image: news2,
                    title: "Workshop Announced",
                    desc: "join our upcoming workshop co learn with experts.",

            },
            {
                    id:3,
                    image: news3,
                    title: "Our students are doing great in placements and projects.",
            },
        ];

  return (
    <>
      <Navbar />

      <PageHeader title="News" subtitle="Get latest info here.." bgImage={newsBg} />

     <section className="py-16 bg-gray-50 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Latest News</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData.map((item) => (
              <div key={item.id} className="bg-white shadow overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                  <button className="text-sm font-semibold text-yellow-500 hover:text-yellow-600">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;
