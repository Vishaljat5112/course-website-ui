import EventItem from "./EventItem";
import event1 from "../assets/event_1.jpg";
import event2 from "../assets/event_2.jpg";
import event3 from "../assets/event_3.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      day: "07",
      month: "January",
      title: "Student Festival",
      location: "Grand Central Park",
      description:
       " Celebrate creativity, culture, fun events, and student talent.",
      image: event1, 
    },
    {
      id: 2,
      day: "07",
      month: "January",
      title: "Open day in the University campus",
      location: "Grand Central Park",
      description:
       " Explore campus life, meet faculty, and discover programs.",
      image: event2,
    },
    {
      id: 3,
      day: "07",
      month: "January",
      title: "Student Graduation Ceremony",
      location: "Grand Central Park",
      description:
        "Honoring achievements, memories, and successful student graduation moments.",
      image: event3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold">
            Upcoming Events
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-12 ">
          {events.map((event) => (
            <EventItem
              key={event.id}
              day={event.day}
              month={event.month}
              title={event.title}
              location={event.location}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
