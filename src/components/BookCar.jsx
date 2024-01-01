import React, { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import Dropdown from "../components/Dropdown";
import { FaLocationDot } from "react-icons/fa6";
import bgCarBook from "../assets/book-car/book-bg.png";
import { IoMdClose } from "react-icons/io";
import { CAR_DATA } from "./CarData.js";
import BookCarFrom from "./BookCarFrom.jsx";
// import BookCarFrom from "./BookCarFrom.jsx";
// import Header from "./Header";
export default function BookCar() {
  const [inputValues, setInputValues] = useState({
    car: "",
    pickUpCity: "",
    dropOffCity: "",
    pickUpDate: "",
    dropOffDate: "",
  });

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccess1, setShowSuccess1] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const allInputsFilled = Object.keys(inputValues).every((key) => {
      if (key === "pickUpDate" || key === "dropOffDate") {
        return !!inputValues[key]; // Check if date fields are truthy (not undefined or null)
      }
      return inputValues[key] && inputValues[key].trim() !== ""; // Validate other fields normally
    });
    console.log("Form submitted:", inputValues);
    if (allInputsFilled) {
      setShowError(false);
      setShowSuccess(true);
      console.log("Form submitted:", inputValues);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const handleClose = () => {
    setShowSuccess(false); // Close the div by updating the state
    setShowSuccess1(false)
    setShowError(false)
  };
  const handleClose1 = () => {
    setShowSuccess(false);
    setShowSuccess1(true);
  };
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
    { key: 4, value: "Noida" },
    { key: 5, value: "Gurgaon" },
    { key: 6, value: "Manali" },
    { key: 7, value: "Sikkim" },
  ];
  const dropOffCities = [
    { key: 0, value: "Select drop off location" },
    { key: 1, value: "Kolkata" },
    { key: 2, value: "Bengaluru" },
    { key: 3, value: "Delhi" },
    { key: 4, value: "Noida" },
    { key: 5, value: "Gurgaon" },
    { key: 6, value: "Manali" },
    { key: 7, value: "Sikkim" },
  ];

  return (
    <div className=" px-8 lg:px-20 pb-20 flex-wrap">
      <div
        className="flex flex-col  bg-white gap-4 justify-center flex-wrap items-center lg:gap-6 lg:flex lg:flex-row lg:justify-between p-8 border shadow-md bg-fixed overflow-x-auto"
        style={{ backgroundImage: `url(${bgCarBook})` }}
      >
        <h1 className="text-2xl font-bold my-3">Book a car</h1>
        <form onSubmit={handleSubmit} className="">
          {showError && (
            <div className="flex justify-between items-center bg-[#f8d7da] rounded px-10 py-4 mb-6 text-[#721c24] font-rubik text-lg font-medium">
              {" "}
              <span className="">All fields are required!</span>
              <span
                onClick={handleClose}
                className="cursor-pointer text-xl font-bold"
              >
                <IoMdClose />
              </span>
            </div>
          )}
          {showSuccess1 && (
            <div className="flex justify-between items-center bg-[#ace28e] rounded px-10 py-4 mb-6 text-[#264f1a] font-rubik text-lg font-medium">
              {" "}
              <span className="">Check your mail to confirm booking!</span>
              <span
                onClick={handleClose}
                className="cursor-pointer text-xl font-bold"
              >
                <IoMdClose />
              </span>
            </div>
          )}

          {showSuccess && (
            <div className="flex items-center justify-center">
              {" "}
              <div className=" bg-white border shadow-lg absolute justify-center flex-wrap items-center lg:flex lg:flex-row lg:justify-between w-full lg:max-w-[60%] z-[100000] top-[50%]">
                <div className="w-full flex justify-between items-center bg-[#FF4D30] px-4 py-2 text-white ">
                  <h3 className=" font-semibold text-2xl ">
                    COMPLETE RESERVATION
                  </h3>
                  <span
                    onClick={handleClose}
                    className="cursor-pointer text-xl font-bold"
                  >
                    <IoMdClose />
                  </span>
                </div>
                <div className="flex flex-col gap-2 px-8 py-8 bg-[#ffeae6] w-full">
                  <h4 className="text-lg font-semibold text-[#FF4D30]">
                    Upon completing this reservation enquiry, you will receive:
                  </h4>
                  <p className="text-[#706F7B]">
                    Your rental voucher to produce on arrival at the rental desk
                    and a toll-free customer support number.
                  </p>
                </div>
                <div className=" flex flex-col lg:flex-row px-8 pt-8 w-full justify-center items-center lg:items-start lg:justify-between border-b">
                  <div className="flex flex-col">
                    <h5 className="text-lg font-semibold text-[#FF4D30]">
                      Location & Date
                    </h5>
                    <div className="flex flex-col gap-8 pt-4">
                      <div className="flex gap-2">
                        <span>
                          <MdDateRange />
                        </span>
                        <div className="flex flex-col gap-2 font-semibold">
                          <p>Pick-Up Date & Time</p>{" "}
                          <div className="flex gap-4">
                            <p className="text-[#706F7B] font-normal">
                              {inputValues.pickUpDate}
                            </p>
                            <input
                              type="time"
                              className="border outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <MdDateRange />
                        </span>
                        <div className="flex flex-col gap-2 font-semibold">
                          <p>Drop-Off Date & Time</p>{" "}
                          <div className="flex gap-4">
                            <p className="text-[#706F7B] font-normal">
                              {inputValues.dropOffDate}
                            </p>
                            <input
                              type="time"
                              className="border outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <FaLocationDot />
                        </span>
                        <div className="flex flex-col gap-2 font-semibold">
                          <p>Pick-Up Location</p>{" "}
                          <p className="text-[#706F7B] font-normal">
                            {inputValues.pickUpCity}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span>
                          <FaLocationDot />
                        </span>
                        <div className="flex flex-col gap-2 font-semibold">
                          <p>Drop-Off Location</p>{" "}
                          <p className="text-[#706F7B] font-normal">
                            {inputValues.dropOffCity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------car details------------------------------------------------- */}
                  <div>
                    <div className="flex flex-col gap-2 lg:items-start items-center pt-8 lg:pt-0 ">
                      <h5 className="text-lg font-semibold text-[#FF4D30]">
                        <span className="text-black">Car - </span>
                        {inputValues.car}
                      </h5>
                      {CAR_DATA.map((carGroup, index) => (
                        <div key={index}>
                          {carGroup.map((car, carIndex) => {
                            if (car.name === inputValues.car) {
                              return (
                                <div key={carIndex}>
                                  <img
                                    className="w-[90%]"
                                    src={car.img}
                                    alt=""
                                  />
                                </div>
                              );
                            }
                            return null; // Ensure to return something in all cases within map
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-8 py-8">
                  <div className="flex flex-col items-center lg:items-start">
                    {/* ---------------------------------form--------------------------------- */}

                    <BookCarFrom />
                    <div className="bg-[#f8f8f8] py-10 flex items-center justify-center">
                      <button
                        type="submit"
                        onClick={handleClose1}
                        className="font-rubik text-2xl font-medium rounded py-3 px-[100px] bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out mb-8 lg:mb-0"
                      >
                        Reserve Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* -------------------------------------form component-------------------------------------------------- */}
              </div>
            </div>
          )}
          <div className="justify-center flex-wrap items-center lg:flex lg:flex-row lg:justify-between">
            <div>
              <Dropdown
                icon={<FaCarSide />}
                title=" Select Your Car Type"
                name="car"
                onChange={handleInputChange}
                value={inputValues.car}
                options={cars} // Pass the options array directly
              />
            </div>
            <div>
              <Dropdown
                icon={<FaLocationDot />}
                title="Pick up"
                name="pickUpCity"
                onChange={handleInputChange}
                value={inputValues.pickUpCity}
                options={pickUpCities} // Pass the options array directly
              />
            </div>
            <div>
              <Dropdown
                name="dropOffCity"
                icon={<FaLocationDot />}
                title="Drop off"
                onChange={handleInputChange}
                value={inputValues.dropOffCity}
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
                  placeholder="dd-mm-yyyy"
                  min={new Date().toLocaleDateString()}
                  max="2030-12-31"
                  onChange={handleInputChange}
                  name="pickUpDate"
                  value={inputValues.pickUpDate}
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
                  placeholder="dd-mm-yyyy"
                  onChange={handleInputChange}
                  name="dropOffDate"
                  value={inputValues.dropOffDate}
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
        </form>
      </div>
    </div>
  );
}
