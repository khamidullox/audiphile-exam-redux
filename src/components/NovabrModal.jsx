import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { deleteAll } from "../app/ProductSlice";

function NovabrModal() {
  const { amout, products, price } = useSelector((state) => state.product);
  let dispetch = useDispatch();
  return (
    <div className="navbar-end">
      <dialog id="my_modal_2" className="modal top-0">
        <div className="modal-box text-black rounded-md absolute top-16 right-24 w-80">
          <div className="flex  items-center justify-between">
            <h6 className="text-xl font-bold"> Cart ({products.length})</h6>
            <button
              onClick={() => {
                dispetch(deleteAll());
              }}
              className=" link"
            >
              Remove all
            </button>
          </div>{" "}
          <div>
            <Cart />
            <div className="flex justify-between items-center gap-5 my-5">
              <h5 className="text-lg font-bold opacity-70">Total</h5>{" "}
              <p className="font-bold">{formatPrice(price)}</p>
            </div>
          </div>
          <form
            method="dialog"
            className="modal-backdrop bg-black-500/[0.1] relative "
          >
            <Link
              to="/chekout"
              className=" btn w-full  bg-[#D87D4A] border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]uppercase"
            >
              Chekout
            </Link>{" "}
          </form>
        </div>
        <form method="dialog" className="modal-backdrop bg-black-500/[0.1] ">
          <button>close</button>
        </form>
      </dialog>

      <button
        className="bt bg-transparent border-none relative "
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        {amout >= 1 && (
          <span
            className="text-xs bg-orange-600 text-white flex items-center justify-center p-2  size-4 rounded-full absolute -top-3
           -right-2"
          >
            {amout}
          </span>
        )}
      </button>
      <div className="modal" role="dialog" id="my_modal_8">
        <dialog id="my_modal_2" className="modal">
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}

{
  /* <Link to="/chekout">Chek</Link> */
}
export default NovabrModal;
