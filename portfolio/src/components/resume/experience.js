import React from "react";

export default function Experience() {
  return (
    <div className="flex items-center justify-center   md:w-full lg:w-full xl:w-full w-screen">
      <div className=" md:w-1/3 lg:w-full xl:w-full w-64  flex flex-col ">
        <div className="bg-white shadow-md  rounded-3xl p-4 pt-10 pb-12 ">
          <div className="flex-none flex">
            <h1 className="bold text-2xl lg:text-3xl xl:text-4xl sm:w-2/5 text-black mb-3 pl-12">
              Experience
            </h1>
          </div>
          <div className="flex-none lg:flex">
            <h2 className="bold text-1xl xl:text-2xl text-black mb-4 pl-12">
              Intern
            </h2>
          </div>
          <div className="flex-none lg:flex py-12">
            <p className="pl-12">Corposense Consultancy Services (8 Months)</p>
          </div>
          <div className="flex-none lg:flex">
            <p className="pl-12">
              Test suitability of an website for blind and color-blind persons
              using Selenium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
