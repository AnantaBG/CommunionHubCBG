/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <div>
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mt-10 flex justify-center mx-auto text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-slate-600'
            >
                Welcome to CommunionHUB!
            </motion.h1>
            <motion.h5
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-5 flex justify-center mx-auto text-center text-lg lg:text-xl'
            >
                🙏 Join a vibrant community of people seeking connection and shared purpose.
            </motion.h5>
        </div>
    );
};

export default Intro;