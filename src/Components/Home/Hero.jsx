import { motion } from "framer-motion";
import Img1 from "../../assets/banner1.jpg";
import Img2 from "../../assets/banner2.jpg";
import Img3 from "../../assets/banner3.jpg";
import Img4 from "../../assets/banner4.jpg";
import { Button, Carousel } from "flowbite-react";

const Hero = () => {
    return (
        <div className="mt-10 w-11/12 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:h-96 md:h-80 h-60"
            >
                <Carousel className="rounded-full">
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="lg:h-96 md:h-80 h-60"
                                src={Img1}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="lg:h-96 md:h-80 h-60"
                                src={Img2}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:h-96 md:h-80 h-60"
                                src={Img3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <div>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="lg:h-96 md:h-80 h-60"
                                src={Img4}
                                alt=""
                            />
                        </div>
                    </div>
                </Carousel>
                <div className="flex justify-center mx-auto mt-5">
                    <motion.button
                        className="w-full"
                        whileHover={{ scale: 1.10 }}
                        whileTap={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button href="events" className="w-full">
                            Explore Events
                        </Button>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;