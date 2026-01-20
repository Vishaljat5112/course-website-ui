const FeatureCard = ({ title ,icon: Icon}) => {
  return (
    <div className="bg-black text-white p-8 text-center shadow-lg hover:bg-yellow-300 hover:text-white cursor-pointer flex flex-row items-center">
{/* Icon */}
      <div className="text-yellow-400 hover:text-white">
        <Icon size={60} strokeWidth={1.5} />
      </div>
      <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4 hover:text-black">
        View more
      </p>
      </div>
    </div>
    
  );
};

export default FeatureCard;

