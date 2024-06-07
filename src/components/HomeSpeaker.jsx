import React from "react";
import { Link } from "react-router-dom";

function HomeSpeaker() {
  return (
    <div className=" lg:h-[560px] md:h-[720px] bg-orange aligen-conatiner rounded-lg lg:flex lg:flex-row md:flex-col items-center justify-center gap-36   ">
      <figure>
        <img
          className="lg:w-[410px] lg:h-[490px] -mb-16 size-96 "
          src="/assets/home/desktop/image-speaker-zx9.png "
          alt=""
        />
      </figure>
      <div className="w-80 flex flex-col gap-5 lg:items-start items-center justify-between ">
        <h5 className="text-6xl uppercase font-bold text-white">ZX9 SPEAKER</h5>
        <p className=" opacity-70 text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          to="/pages/speakers"
          className="btn bg-black  border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#4C4C4C]"
        >
          see product
        </Link>
      </div>
    </div>
  );
}

export default HomeSpeaker;
