/* eslint-disable no-unused-vars */
import NavBar from "../../Home/Navbar";
import { FaUsers, FaLightbulb, FaHeart, FaMapMarkerAlt, FaEnvelope, FaPhone, FaMap } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="w-11/12 mx-auto justify-center mb-5">
          <Helmet>
        <title>CommunionHUB | About</title>
          </Helmet>
            <NavBar />
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-semibold text-slate-600 text-center flex justify-center mt-5"
            >
                About Us
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center p-6 border rounded-lg shadow-md"
                >
                    <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                    <p className="text-gray-600">
                        A dedicated team of professionals passionate about making a difference.
                    </p>
                </motion.div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center p-6 border rounded-lg shadow-md"
                >
                    <FaLightbulb className="text-4xl text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                    <p className="text-gray-600">
                        To create a world where everyone has access to the resources and support they need.
                    </p>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center p-6 border rounded-lg shadow-md"
                >
                    <FaHeart className="text-4xl text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        To empower communities through collaborative initiatives and sustainable solutions.
                    </p>
                </motion.div>

                {/* Location Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center p-6 border rounded-lg shadow-md"
                >
                    <FaMapMarkerAlt className="text-4xl text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Our Location</h2>
                    <p className="text-gray-600">
                        Serving communities globally with local impact.
                    </p>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 p-6 border rounded-lg shadow-md"
            >
                <h2 className="text-3xl font-semibold mb-4 text-center">More About Us</h2>
                <p className="text-gray-700 leading-relaxed">
                    We are a group of individuals dedicated to improving the lives of people in our community and beyond. Our organization was founded on the principles of compassion, collaboration, and sustainability. We believe that by working together, we can create a better future for all. We are committed to transparency and accountability in all our activities. Our goal is to empower individuals and communities to thrive. We invite you to join us on our journey to make a positive impact on the world.
                </p>
            </motion.div>

            {/* Contact Us Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-10 p-6 border rounded-lg shadow-md"
            >
                <h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-center"
                    >
                        <FaEnvelope className="text-3xl text-blue-500 mx-auto mb-2" />
                        <p className="text-gray-600">info@example.com</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-center"
                    >
                        <FaPhone className="text-3xl text-green-500 mx-auto mb-2" />
                        <p className="text-gray-600">+1 (123) 456-7890</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-center"
                    >
                        <FaMap className="text-3xl text-red-500 mx-auto mb-2" />
                        <p className="text-gray-600">123 Main St, Anytown, USA</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;