import { NavLink } from "react-router-dom";
import Img1 from "../../assets/banner1.jpg"
import Img2 from "../../assets/banner2.jpg"
import Img3 from "../../assets/banner3.jpg"
import Img4 from "../../assets/banner4.jpg"
import { Button, Carousel } from "flowbite-react";
const Hero = () => {
    return (
        <div className="mt-10 w-11/12 mx-auto">
    <div className="lg:h-96 md:h-80 h-60">
      <Carousel className="rounded-full">
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div>
        <img  className="lg:h-96 md:h-80 h-60" src={Img1} alt="" />
        </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div>
        <img  className="lg:h-96 md:h-80 h-60" src={Img2} alt="" />
        </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div>
        <img  className="lg:h-96 md:h-80 h-60" src={Img3} alt="" />
        </div>
        </div>
        <div  className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div>
        <img  className="lg:h-96 md:h-80 h-60" src={Img4} alt="" />
        </div>
        </div>
      </Carousel>
      <Button href="events" className="flex justify-center mx-auto mt-5">Explore Events</Button>
    </div>
        </div>
    );
};

export default Hero;