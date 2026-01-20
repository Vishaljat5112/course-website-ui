const CourseCard = ({ image, title, subtitle, author, price  }) => {
  return (
    <div className="bg-white  overflow-hidden py-4 px-8">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-65 object-cover  "
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-xl mb-1 text-center">
          {title}
        </h3>
        <p className="text-sm text-gray-500 font-bold mb-4 text-center">
          {subtitle}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between bg-gray-200">
        <div className="flex items-center gap-2 px-5 py-3">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <span className="text-sm font-medium">
            {author}
          </span>
        </div>

        <div className="bg-yellow-400 text-white font-semibold px-4 py-3">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
