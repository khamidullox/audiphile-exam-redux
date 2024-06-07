import React from "react";
import { useLoaderData } from "react-router-dom";

function FlexGallery() {
  let { product } = useLoaderData();
 
  return (
    <div>
      {product.map((item, id) => {
        return (
          <div key={id} className="flex gap-5">
            <div className="flex flex-col gap-8 ">
              <img
                className="rounded-lg"
                src={`.${item.gallery.first.desktop}`}
                alt=""
              />
              <img
                className="rounded-lg"
                src={`.${item.gallery.second.desktop}`}
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded-lg"
                src={`.${item.gallery.third.desktop}`}
                alt=""
              />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FlexGallery;
