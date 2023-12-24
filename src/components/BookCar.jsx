import React from "react";
import { FaCarSide } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Dropdown from "../components/Dropdown";
import { FaLocationDot } from "react-icons/fa6";
import bgCarBook from "../assets/book-car/book-bg.png"
// import Header from "./Header";
export default function BookCar() {



  const cars = [
    { key: 0, value: "Select your car type" },
    { key: 1, value: "VW Golf 6" },
    { key: 2, value: "Toyota Camry" },
    { key: 3, value: "BMW 320 ModernLine" },
    { key: 4, value: "Mercedes-Benz GLK" },
    { key: 5, value: "VW Passat CC" },
    { key: 6, value: "Audi A1 S-Line" },
  ];

  const pickUpCities = [
    { key: 0, value: "Select pick up location" },
    { key: 1, value: "Kolkata" },
    { key: 2, value: "Bengaluru" },
    { key: 3, value: "Delhi" },
    { key: 3, value: "Noida" },
    { key: 3, value: "Gurgaon" },
    { key: 3, value: "Manali" },
    { key: 3, value: "Sikkim" },
  ];
  const dropOffCities = [
    { key: 0, value: "Select drop off location" },
    { key: 1, value: "Kolkata" },
    { key: 2, value: "Bengaluru" },
    { key: 3, value: "Delhi" },
    { key: 3, value: "Noida" },
    { key: 3, value: "Gurgaon" },
    { key: 3, value: "Manali" },
    { key: 3, value: "Sikkim" },
  ];


//   const [isClicked, setIsClicked]= useState(false)

  return (
    <form className="w-full px-8 lg:px-20 pt-6 py:10 lg:py-20 flex-wrap">
      <div
        className="flex flex-col gap-4 justify-center flex-wrap items-center lg:gap-6 lg:flex lg:flex-row lg:justify-between p-8 border shadow-md bg-fixed"
        style={{ backgroundImage: `url(${bgCarBook})` }}
      >
        <h1 className="text-2xl font-bold my-3">Book a car</h1>
        <div className="justify-center flex-wrap items-center lg:flex lg:flex-row lg:justify-between">
          <div>
            <Dropdown
              icon={<FaCarSide />}
              title=" Select Your Car Type"
              formTitle=" Select Your Car Type"
              options={cars} // Pass the options array directly
            />
          </div>
          <div>
            <Dropdown
              icon={<FaLocationDot />}
              title="Pick up"
              formTitle=" Select Your Car Type"
              options={pickUpCities} // Pass the options array directly
            />
          </div>
          <div>
            <Dropdown
              icon={<FaLocationDot />}
              title=" Drop off"
              formTitle=" Select Your Car Type"
              options={dropOffCities} // Pass the options array directly
            />
          </div>

          <div className="mb-2">
            <label className="flex text-lg items-center gap-4 font-bold mb-4">
              <span>
                <MdDateRange />
              </span>
              <h4>
                Pick up
                <b className="text-[#FF4D30]">*</b>
              </h4>
            </label>
            <div className="border w-full pl-2 py-3 text-sm text-zinc-500">
              <input
                type="date"
                className="outline-none cursor-pointer gap-56 bg-transparent"
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="flex text-lg items-center gap-4 font-bold mb-4">
              <span>
                <MdDateRange />
              </span>
              <h4>
                Drop off
                <b className="text-[#FF4D30]">*</b>
              </h4>
            </label>
            <div className="border w-full py-3 px-2 text-sm text-zinc-500 ">
              <input
                type="date"
                className="outline-none cursor-pointer gap-56 bg-transparent"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <button
              type="submit"
              className="font-rubik text-lg font-medium rounded py-3 px-[161px] bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out mb-8 lg:mb-0"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
