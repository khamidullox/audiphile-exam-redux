import React from "react";
import { useLoaderData } from "react-router-dom";

function Pagesheader({name}) {
  
  return (
    <div className="max-w-full aligen-conatiner bg-black  h-[240px] flex items-center justify-center ">
      <h4 className=" uppercase text-4xl text-white">{name}</h4>
    </div>
  );
}

export default Pagesheader;
