import React from "react";
import { aboutgrids } from '../exports'
import AboutGrid from "../components/AboutGrid.jsx";

const About = () => {
  return (
    <section
      id="services"
      className="bg-slate-200 w-full flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12"
    >
      <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2">
        <h1 className="text-green-600 font-bold text-6xl">
          Hosting solutions with benefits
        </h1>
        <p className="text-slate-05 text-2xl">
          Elevate your hosting experience with exclusive benefits! Enjoy
          priority support, increased earnings, and access to special
          promotions. Join us now for a host-centric journey like never before!
        </p>
        <div className="flex justify-center items-center">
            <button className="bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer"> Read More </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full lg:w-1/2 flex-wrap">
        {aboutgrids.map((grid) => (
          <div key={grid} className="w-full lg:w-1/2">
            <AboutGrid {...grid} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
