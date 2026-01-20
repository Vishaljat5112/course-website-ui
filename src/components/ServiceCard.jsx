const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-start text-left px-6">
      <div className="mb-4 text-yellow-400 ">
        <Icon size={50} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
