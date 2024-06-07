import React, { Children } from "react";
import { formatPrice } from "../utils";

function CartPriceText({ name, price, children, css }) {
  return (
    <h4
      className={`flex justify-between items-center font-bold w-full up ${css}`}
    >
      {name}
      {/* <sapn>{formatPrice(price)}</sapn> */}
      {children}
    </h4>
  );
}

export default CartPriceText;
