import React from "react";
import { Link } from "react-router-dom";
let shop = [
  {
    img: "/image-category-thumbnail-headphones.png",
    name: "headphones",
  },
  {
    img: "/image-category-thumbnail-speakers.png",
    name: "speakers",
  },
  {
    img: "/image-category-thumbnail-earphones.png",
    name: "earphones",
  },
];
function ProdutcsListShop() {
  return (
    <ul className=" uppercase flex items-center justify-between my-36 aligen-conatiner gap-5 ">
      {shop.map((product, id) => {
        return (
          <>
            <Link key={id} to={`/pages/${product.name}`}>
              <li className=" flex flex-col  items-center justify-end gap-2 lg:w-[340px] md:w-72 sm:w-52 w-36 h-44 pb-5 rounded-lg  bg-[#F1F1F1] relative ">
                <img
                  className=" size-52 absolute -top-16 "
                  src={`/assets/shared/desktop${product.img}`}
                  alt=""
                />
                <h5 className=" font-bold tracking-wider">{product.name}</h5>
                <Link
                  to={`/${product.name}`}
                  className="text-xs tracking-widest hover:orange"
                >
                  Shop <span className="text-[#D87D4A]">&gt;</span>
                </Link>
              </li>
            </Link>
          </>
        );
      })}
    </ul>
  );
}

export default ProdutcsListShop;
