import { customFetch } from "../utils";
import SingleProductHead from "../components/SingleProductHead";
import SingleProductFuters from "../components/SingleProductFuters";
import FlexGallery from "../components/FlexGallery";
import OrterProduct from "../components/OrterProduct";
import ProdutcsListShop from "../components/ProdutcsListShop";
import FooterAvatar from "../components/FooterAvatar";
import { Link } from "react-router-dom";
export let loader = async ({ params }) => {
  let req = await customFetch(`?slug=${params.slug}`);
  let product = req.data.data;
  return { product };
};
function SingleProduct() {
  return (
    <>
      <div className="aligen-conatiner">
        <SingleProductHead />
        <SingleProductFuters />
        <FlexGallery />
        <OrterProduct />
      </div>
      <ProdutcsListShop />
      <FooterAvatar />
    </>
  );
}

export default SingleProduct;
