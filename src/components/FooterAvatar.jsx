import React from "react";

function FooterAvatar() {
  return (
    <div className="flex items-center justify-center gap-28 my-20 ">
      <div className="flex flex-col gap-8 lg:w-[445px]">
        <h5 className="text-4xl uppercase font-bold">
          Bringing you the <span className=" orange">best</span> audio gear
        </h5>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <figure className="lg:size-[550px] ">
        <img
          className="rounded-lg "
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt=""
        />
      </figure>
    </div>
  );
}

export default FooterAvatar;
