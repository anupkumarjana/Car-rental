import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import bgHome from "../assets/hero/hero-bg.png";
import home from "../assets/home/home.png";
import BookCar from "../components/BookCar";
import Header from "../components/Header";
import Feature from "../components/Feature";
import VehicleModels from "../components/VehicleModels";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className=" font-poppins w-full h-full bg-gradient-to-b from-[#f8f8f8] to-white">
      <div
        className="bg-no-repeat w-full h-full bg-right bg-contain "
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <Header />
        <div className="flex w-full px-8 lg:px-20 pt-6 py:10 lg:py-20 ">
          <div className="flex flex-col justify-center text-center md:justify-start md:text-start py-20 flex-wrap gap-2">
            <p className="text-2xl font-bold">Plan your trip now</p>
            <h1 className="text-[3.5rem] font-bold leading-[60px]">
              Save <span className="text-[#FF4D30]">big</span> with our car
              rental
            </h1>
            <p className="text-[#706F7B] font-rubik pt-6">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="pt-10 flex md:justify-start justify-center items-center gap-10">
              <button className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-4 px-8 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out">
                {" "}
                <p>Book Ride</p>{" "}
                <span className="">
                  <FaRegCircleCheck />
                </span>{" "}
              </button>
              <button className="font-rubik text-lg font-medium flex items-center gap-2 rounded py-4 px-8 bg-black text-white hover:bg-white border-black hover:text-black transition-all duration-300 ease-in-out">
                Learn More <FiArrowRightCircle />
              </button>
            </div>
          </div>
          <div className="w-[90%] hidden md:block">
            <img src={home} alt="car" className="" />
          </div>
        </div>
      </div>
      {/* ----------------------------------Book car------------------------------------------- */}
      <BookCar />
      <Feature />
      <VehicleModels />
      <Banner/>
      <ChooseUs/>
      <Testimonial/>
    </div>
  );
}
