import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
//pages
import { ProdutcsListShop, HomeHeader, HomeSpeaker } from "../components";
import HomeSpeakersZ from "../components/HomeSpeakersZ";
import FooterAvatar from "../components/FooterAvatar";
export let loader = async () => {
  let req = customFetch();
  let product = (await req).data.data;
  return { product };
};
function Home() {
  return (
    <>
      <HomeHeader />
      <ProdutcsListShop />
      <HomeSpeaker />
      <HomeSpeakersZ />
      <FooterAvatar />
    </>
  );
}

export default Home;
