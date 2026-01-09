const FeatureCard = ({ title }) => {
  return (
    <div className="bg-black text-white p-8 text-center shadow-lg hover:bg-yellow-300 hover:text-black cursor-pointer">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">
        View more
      </p>
    </div>
  );
};

export default FeatureCard;
