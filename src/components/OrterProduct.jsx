import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
function OrterProduct() {
  let { product } = useLoaderData();
  return (
    <>
      <h5 className=" uppercase font-bold text-3xl text-center my-10">
        {" "}
        you may also like
      </h5>
      <ul className="flex items-start justify-between">
        {product.map((product, id) => {
          return product.others.map((item, id) => {
            return (
              <li key={id} className="flex flex-col items-center gap-5 ">
                <img
                  className="size-80 rounded-lg"
                  src={`.${item.image.desktop}`}
                  alt=""
                />
                <h6 className="font-bold text-xl">{item.slug}</h6>
                <Link
                  to={`/product/${item.slug}`}
                  className="btn  bg-[#D87D4A] border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]"
                >
                  See Product
                </Link>
              </li>
            );
          });
        })}
      </ul>
    </>
  );
}

export default OrterProduct;
