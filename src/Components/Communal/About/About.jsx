import NavBar from "../../Home/Navbar";
import { FaUsers, FaLightbulb, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhone, FaMap } from "react-icons/fa"; // Import icons

const About = () => {
  return (
    <div className="w-11/12 mx-auto justify-center mb-5">
      <NavBar />
      <h1 className="text-5xl font-semibold text-slate-600 text-center flex justify-center mt-5">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {/* Team Section */}
        <div className="text-center p-6 border rounded-lg shadow-md">
          <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
          <p className="text-gray-600">
            A dedicated team of professionals passionate about making a
            difference.
          </p>
        </div>

        {/* Vision Section */}
        <div className="text-center p-6 border rounded-lg shadow-md">
          <FaLightbulb className="text-4xl text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To create a world where everyone has access to the resources and
            support they need.
          </p>
        </div>

        {/* Mission Section */}
        <div className="text-center p-6 border rounded-lg shadow-md">
          <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To empower communities through collaborative initiatives and
            sustainable solutions.
          </p>
        </div>

        {/* Location Section */}
        <div className="text-center p-6 border rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
          <p className="text-gray-600">
            Serving communities globally with local impact.
          </p>
        </div>
      </div>
      <div className="mt-10 p-6 border rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">More About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          We are a group of individuals dedicated to improving the lives of
          people in our community and beyond. Our organization was founded on
          the principles of compassion, collaboration, and sustainability. We
          believe that by working together, we can create a better future for
          all. We are committed to transparency and accountability in all our
          activities. Our goal is to empower individuals and communities to
          thrive. We invite you to join us on our journey to make a positive
          impact on the world.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="mt-10 p-6 border rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <FaEnvelope className="text-3xl text-blue-500 mx-auto mb-2" />
            <p className="text-gray-600">info@example.com</p>
          </div>
          <div className="text-center">
            <FaPhone className="text-3xl text-green-500 mx-auto mb-2" />
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="text-center">
            <FaMap className="text-3xl text-red-500 mx-auto mb-2" />
            <p className="text-gray-600">123 Main St, Anytown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;