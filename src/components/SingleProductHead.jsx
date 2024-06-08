import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { addAmout, addAmoutProduct, addProduct } from "../app/ProductSlice";
function SingleProductHead() {
  let { product } = useLoaderData();
  const { products } = useSelector((state) => state.product);
  let [amout, setAmout] = useState(1);
  let dispetch = useDispatch();

  return (
    <>
    
      <div className="flex flex-col  gap-16 my-20">
        {product &&
          product.map((headphones, id) => {
            let { image, name, description, slug, price } = headphones;
            let newObj = {
              ...headphones,
              amout: amout,
            };
            return (
              <div
                key={id}
                className={`flex items-center justify-between  g ${
                  headphones.new && "order-first"
                }`}
              >
                <figure className="rounded-xl">
                  <img
                    className="w-[510px]  h-[540px] rounded-xl object-cover"
                    src={`.${image.desktop}`}
                    alt=""
                  />
                </figure>
                <div
                  className={` w-[445px] h-[345px] flex flex-col items-start justify-center gap-10 
    `}
                >
                  {headphones.new && (
                    <span className=" orange tracking-[5px] uppercase -mb-5">
                      NEW PRODUCT
                    </span>
                  )}
                  <h4 className="text-5xl font-bold">{name}</h4>
                  <p className=" leading-6 opacity-65">{description}</p>
                  <p className="font-bold">{formatPrice(price)}</p>
                  <div className="flex gap-10 items-center justify-center">
                    <p className="flex items-center justify-center gap-5 bg-[#F1F1F1]  p-3 px-10">
                      <button
                        onClick={() => {
                          setAmout(amout - 1);
                        }}
                        className="hover:orange text-lg"
                        disabled={amout == 1 ? true : false}
                      >
                        -
                      </button>
                      {amout}
                      <button
                        onClick={() => {
                          setAmout(amout + 1);
                        }}
                        className="hover:orange text-lg"
                      >
                        +
                      </button>
                    </p>
                    <button
                      onClick={() => {
                        dispetch(addAmoutProduct(newObj));
                        setAmout(1);
                      }}
                      className="btn  bg-[#D87D4A] border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SingleProductHead;
