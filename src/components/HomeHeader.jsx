import React from "react";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="max-w-full aligen-conatiner bg-[#121212] bg-[url(`/assets/home/desktop/image-hero.jpg`)] h-[600px] flex  grid-cols-2 items-center justify-center lg:gap-96 ">
      <div className=" text-white flex flex-col gap-5 items-start  w-96">
        <span className=" opacity-50  tracking-[6px]">NEW PRODUCT</span>
        <h1 className=" font-bold text-6xl ">XX99 Mark II HeadphoneS</h1>
        <p className=" opacity-70  leading-7 w-80 ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to="/pages/headphones" className="btn  bg-[#D87D4A] border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]">
          See Product
        </Link>
      </div>
      <figure className="w-[550px] h-[500px]">
        <img
          src="/assets/home/tablet/image-header.jpg"
          className=" object-contain"
          alt=""
        />
      </figure>
    </div>
  );
}

export default HomeHeader;
