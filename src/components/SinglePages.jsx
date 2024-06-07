import { useLoaderData, useParams } from "react-router-dom";
import Pagesheader from "./Pagesheader";
import HeadPhonesList from "./HeadPhonesList";
import { customFetch } from "../utils";
import ProdutcsListShop from "./ProdutcsListShop";
export let loader = async ({ params }) => {
  let req = customFetch(`?category=${params.id}`);
  let product = (await req).data.data;
  return { product };
};
function SinglePages() {
  let { product } = useLoaderData();
  let params = useParams();
  if (product) {
    return (
      <>
        <Pagesheader name={params.id} />
        <HeadPhonesList />
        <ProdutcsListShop />
      </>
    );
  }else{
    return <h1>SALOM</h1>
  }
}

export default SinglePages;
