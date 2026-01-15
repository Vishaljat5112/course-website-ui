const PageHeader = ({ title, subtitle, bgImage}) => {
    return(
        <section className="relative h-120 bg-cover bg-center flex items-center" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
                <p className="text-sm md:text-base text-gray-200">{subtitle}</p>
            </div>
        </section>
    );
};

export default PageHeader;