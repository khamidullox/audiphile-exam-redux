import React from "react";
import { useLoaderData } from "react-router-dom";

function SingleProductFuters() {
  let { product } = useLoaderData();

  return product.map((audioPhile) => {
    let {
      id,
      slug,
      name,
      image,
      category,
      categoryImage,
      price,
      description,
      features,
      includes,
      gallery,
      others,
    } = audioPhile;

    return (
      <div key={id} className="my-10 flex items-start justify-between ">
        <div className="w-[650px] flex flex-col gap-5">
          <h5 className="text-2xl font-bold">FEATURES</h5>
          <p className=" opacity-70">{features.slice(0, 315)}</p>
          <p className=" opacity-70">{features.slice(315, 721)}</p>
        </div>
        <div>
          <h5 className=" uppercase mb-10 text-2xl font-bold">in the box</h5>
          <ul className="flex flex-col gap-4">
            {includes.map((box, id) => {
              return (
                <li key={id} className="flex gap-5 ">
                  <span className="orange">{box.quantity}x</span>{" "}
                  <span className=" opacity-70">{box.item}</span>{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  });
}

export default SingleProductFuters;
