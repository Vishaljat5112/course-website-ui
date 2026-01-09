const About =() =>{
    return(
       <div className="min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-red-500">
                ABOUT US
            </h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
                We are an educational platform dedicated to providing high qualtiy courses that focus on practical learning and real world skills.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
                Our mission is to bridge the gap between acadmic knowledge and industry requirements by offering hands on learning experiences.
            </h2>

            <h2 className="text-2xl font-semibold mb-4 text-red-500">
                Why choose us?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Industry-focused curriculum</li>
                <li>Experienced instructors</li>
                <li>Hands on practical projects</li>
                <li>Flexible learning approach</li>
            </ul>
        </div>
       </div>
    );
};

export default About;