import React from "react";
import { Link } from "react-router-dom";
function HomeSpeakersZ() {
  return (
    <>
      <div className="h-80 aligen-conatiner my-10 bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-no-repeat  flex flex-col items-start justify-center gap-8 ">
        <h6 className="text-4xl font-bold ">ZX7 SPEAKER</h6>
        <Link to="/pages/speakers" className="btn bg-transparent  border-1 border-black text-black uppercase rounded-none tracking-wider fontre px-10 hover:text-white hover:bg-black">
          See Products
        </Link>
      </div>
      <div className="h-80 aligen-conatiner flex justify-between gap-10">
        <figure className=" ">
          <img
            className="rounded-lg w-[540px] h-80"
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt=""
          />
        </figure>
        <div className="bg-[#F1F1F1] w-[540px] rounded-lg h-80 flex items-start pl-10 gap-10 justify-center flex-col">
          {" "}
          <h6 className="text-4xl font-bold ">YX1 EARPHONES</h6>
          <Link to="/pages/earphones" className="btn bg-transparent  border-1 border-black text-black uppercase rounded-none tracking-wider fontre px-10 hover:text-white hover:bg-black">
            See Products
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeSpeakersZ;
