import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import InputForm from "../components/InputForm";
import Cart from "../components/Cart";
import CartChekout from "../components/CartChekout";
import CartPriceText from "../components/CartPriceText";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
export let action = async ({ request }) => {
  let formData = await request.formData();
  let address = formData.get("address");
  let name = formData.get("name");
  let eNumber = formData.get("e-Number");
  let flexRadioDefault = formData.get("flexRadioDefault");
  let phone = formData.get("phone");
  let ePin = formData.get("e-Pin");
  let code = formData.get("code");
  let city = formData.get("city");
  let country = formData.get("country");
  return {
    address,
    name,
    phone,
    flexRadioDefault,
    city,
    country,
    code,
    eNumber,
    ePin,
  };
};
function Chekout() {
  const { products, price } = useSelector((state) => state.product);
  let shipping = 50;

  return (
    <>
      <div className=" aligen-conatiner mt-5">
        <Link className=" aligen-conatiner " to="/">
          Go back
        </Link>
      </div>
      <Form
        method="post"
        className=" aligen-conatiner my-10 flex items-start justify-betwee gap-8"
      >
        <div className=" w-full">
          <div className=" border shadow-lg rounded-xl px-10">
            <h2 className="text-3xl font-bold my-10">CHECKOUT</h2>
            <h3 className=" font-bold text-2xl orange mb-5">Billing Details</h3>
            <div className="grid grid-cols-2 gap-5">
              <InputForm
                size="max-w-xs"
                name="name"
                lebal="Name"
                type="text"
                placeholder="Alexei Ward"
              />
              <InputForm
                size="max-w-xs"
                name="email"
                lebal="Email Address"
                type="email"
                placeholder="Alexei Ward"
              />{" "}
              <InputForm
                size="max-w-xs"
                name="phone"
                lebal="Phone Number"
                type="number"
                placeholder="+1 202-555-0136"
              />
            </div>
            <h3 className=" font-bold text-xl orange my-5 uppercase">
              shipping info
            </h3>
            <InputForm
              size=""
              name="address"
              type="text"
              lebal="Address"
              placeholder="1137 Williams Avenue"
            />
            <div className="grid grid-cols-2 gap-5">
              <InputForm
                size="max-w-xs"
                name="code"
                lebal="ZIP Code"
                type="number"
                placeholder="10001"
              />
              <InputForm
                size="max-w-xs"
                name="city"
                lebal="City"
                type="text"
                placeholder="New York"
              />{" "}
              <InputForm
                size="max-w-xs"
                name="country"
                lebal="Country"
                type="text"
                placeholder="United States"
              />
            </div>
            <h3 className=" font-bold text-xl orange my-5 uppercase">
              payment details
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="font-bold text-lg mt-5">Payment Method</p>
              </div>
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem] border p-5 rounded-xl max-w-xs">
                <input
                  className=" ml-1 relative float-left -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault01"
                />
                <label
                  className="mt-px inline-block ps-[0.15rem] hover:cursor-pointer"
                  htmlFor="radioDefault01"
                >
                  e-Money
                </label>
              </div>
              <div></div>
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem] border p-5 rounded-xl max-w-xs">
                <input
                  className=" ml-1 relative float-left -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                  type="radio"
                  name="flexRadioDefault"
                  id="radioDefault02"
                  defaultChecked
                />
                <label
                  className="mt-px inline-block ps-[0.15rem] hover:cursor-pointer"
                  htmlFor="radioDefault02"
                >
                  Cash on Delivery
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 my-10">
              <InputForm
                lebal="e-Money Number"
                placeholder="238521993"
                size="max-w-xs"
                name="e-Number"
                type="number"
              />
              <InputForm
                type="number"
                lebal="e-Money PINr"
                placeholder="6891"
                size="max-w-xs"
                name="e-Pin"
              />
            </div>
          </div>
        </div>
        <div className="w-[500px]     my-2  border shadow-lg rounded-xl px-5 flex flex-col items-start justify-center gap-2 py-5">
          <h4 className="font-bold text-xl uppercase">summary</h4>
          <CartChekout />
          <CartPriceText name="TOTAL">
            <span>{formatPrice(price)}</span>
          </CartPriceText>
          <CartPriceText name="SHIPPING">
            <span>{formatPrice(shipping)}</span>
          </CartPriceText>
          <CartPriceText name="VAT (INCLUDED)">
            <span>{formatPrice(price * 0.2)}</span>
          </CartPriceText>
          <CartPriceText css="orange" name="GRAND TOTAL">
            <span className="orange">
              {formatPrice(shipping + price + price * 0.2)}
            </span>
          </CartPriceText>
          <button className="orange w-full btn  bg-[#D87D4A] border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85] mt-5">
            CONTINUE & PAY
          </button>
        </div>
      </Form>
    </>
  );
}

export default Chekout;
