import React from "react";


export default function Dropdown(props) {


  return (
      <div className="w-full mb-2 gap-4 lg:gap-10">
        <label className="flex text-lg items-center gap-4 font-bold mb-4">
          <span>{props.icon}</span>
          <h4>
            {props.title}
            <b className="text-[#FF4D30]">*</b>
          </h4>
        </label>
        <select className="border outline-none w-full lg:w-auto pl-2 pr-48 py-3 text-sm text-zinc-500 box-border">
          {props.options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
  );
}
