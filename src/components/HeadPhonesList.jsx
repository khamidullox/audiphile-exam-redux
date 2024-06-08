import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
function HeadPhonesList({ category }) {
  let { product } = useLoaderData();
  return (
    <div className="flex flex-col aligen-conatiner gap-16 my-20">
      {product.map((headphones, id) => {
        let { image, name, description, slug } = headphones;

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
              className={` w-[445px] h-[345px] flex flex-col items-start justify-center gap-10 ${
                (id == 0 || name == "ZX7 Speaker") && "order-first"
              } `}
            >
              {headphones.new && (
                <span className=" orange tracking-[5px] uppercase -mb-5">
                  NEW PRODUCT
                </span>
              )}
              <h4 className="text-5xl font-bold">{name}</h4>
              <p className=" leading-6 opacity-65">{description}</p>
              <Link
                to={`/product/${slug}`}
                className="btn  bg-[#D87D4A] border-none text-white uppercase rounded-none tracking-wider fontre px-10 hover:opacity-100 hover:bg-[#FBAF85]"
              >
                See Product
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeadPhonesList;
