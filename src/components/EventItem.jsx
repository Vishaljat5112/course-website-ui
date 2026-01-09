const EventItem = ({ day, month, title, location, description, image }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      
     
      <div className="border-2 border-yellow-400 w-24 h-24 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-yellow-400">
          {day}
        </span>
        <span className="text-sm font-semibold text-yellow-400">
          {month}
        </span>
      </div>

      
      <div className="md:col-span-1">
        <h3 className="font-semibold text-lg mb-1">
          {title}
        </h3>
        <span className="text-sm text-gray-500 block mb-2">
          {location}
        </span>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>

      {/* Image */}
      <div>
        <img
          src={image} 
          alt={title}
          className="w-full h-40 object-cover"
        />
      </div>
    </div>
  );
};

export default EventItem;
