let product = {
  id: 2,
  slug: "xx59-headphones",
  name: "XX59 Headphones",
  image: {
    mobile: "./assets/product-xx59-headphones/mobile/image-product.jpg",
    tablet: "./assets/product-xx59-headphones/tablet/image-product.jpg",
    desktop: "./assets/product-xx59-headphones/desktop/image-product.jpg",
  },
  category: "headphones",
  categoryImage: {
    mobile:
      "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
    tablet:
      "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
    desktop:
      "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
  },
  new: false,
  price: 899,
  description:
    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  features:
    "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
  includes: [
    {
      quantity: 1,
      item: "Headphone unit",
    },
    {
      quantity: 2,
      item: "Replacement earcups",
    },
    {
      quantity: 1,
      item: "User manual",
    },
    {
      quantity: 1,
      item: "3.5mm 5m audio cable",
    },
  ],
  gallery: {
    first: {
      mobile: "./assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
      tablet: "./assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
      desktop: "./assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
    },
    second: {
      mobile: "./assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
      tablet: "./assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
      desktop: "./assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
    },
    third: {
      mobile: "./assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
      tablet: "./assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
      desktop: "./assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    },
  },
  others: [
    {
      slug: "xx99-mark-two-headphones",
      name: "XX99 Mark II",
      image: {
        mobile: "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
        tablet: "./assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
        desktop: "./assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
      },
    },
    {
      slug: "xx99-mark-one-headphones",
      name: "XX99 Mark I",
      image: {
        mobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
        tablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
        desktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
      },
    },
    {
      slug: "zx9-speaker",
      name: "ZX9 Speaker",
      image: {
        mobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
        tablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
        desktop: "./assets/shared/desktop/image-zx9-speaker.jpg",
      },
    },
  ],
};
import { formatPrice } from "../utils/index";
import { useSelector } from "react-redux";
function CartChekout() {
  const { products, price } = useSelector((state) => state.product);

  return (
    <div className="flex flex-col  items-center justify-betwee gap-5 my-5 ">
      {products.map((product) => {
        return (
          <div className="flex justif-between gap-5 w-full">
            <img
              className="size-16 rounded-lg"
              src={`.${product.image.desktop}`}
              alt=""
            />
            <div className="flex items-center justify-between gap-20 w-full">
              <div className="flex flex-col gap- text-sm font-bold">
                <p>{product.name}</p>
                <span className=" opacity-70">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="text-lg font-bold">
                <p className=" opacity-70">{product.amout}x</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartChekout;
