import React from "react";
import Image from '../assets/images/heroimg.png'

const Hero = () => {
  return (
    <section
      className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 bg-slate-100
    h-auto lg:h-screen"
    >
      <div
        className="flex justify-between items-start flex-col gap-8 lg:w-1/2 px-10 py-10
        lg:px-20 lg:py-20"
      >
        <h1 className="text-green-600 font-bold text-6xl">
          One Click solution for your static website.
        </h1>

        <p className="text-slate-90 text-1xl">
        The agency's website is a digital time capsule, frozen in an era of web design evolution. Its outdated layout, obsolete graphics, and convoluted navigation make for a jarring user experience. With broken links and stale content, it's a relic that fails to keep pace with the dynamic online landscape, reflecting a bygone era rather than the agency's current relevance.
        </p>

        <div className="flex justify-center items-center gap-7">
          <button
            className="bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md
                text-[18px] hover:bg-black hover:text-white cursor-pointer"
          >
            View More
          </button>

          <button
            className="border border-black text-black px-4 lg:px-8 py-3 rounded-md
                text-[18px] hover:bg-black hover:text-white cursor-pointer"
          >
            Wactch Video
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 px-5 py-20 object-cover">
            <img src={Image} alt="heroImage" width={500} height={500} />
        </div>
    </section>
  );
};

export default Hero;
