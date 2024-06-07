import { useSelector } from "react-redux";
import { formatPrice } from "../utils/index";
function Cart() {
  const { products, price } = useSelector((state) => state.product);

  return (
    <div className="">
      {products.map((product) => {
        return (
          <div className="flex items-center justify-between gap-2 my-5 ">
            <div className="flex gap-2 items-center">
              <img
                className="size-16 rounded-lg"
                src={`.${product.image.desktop}`}
                alt=""
              />
              <div className="flex flex-col items-start text-sm font-bold">
                <p>{product.name}</p>
                <span className=" opacity-70">
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>
            {/* <div className=" flex items-center text-xs justify-center gap-5 bg-[#F1F1F1]  p-2 px-3">
              <button className="hover:orange">-</button>
              {product.amout}
              <button className="hover:orange">+</button>
            </div> */}{" "}
            <div className="text-lg font-b">
              <p className=" opacity-70">{product.amout}x</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
