import { useState } from "react";
import Head from "next/head";
import TopHeader from "../components/TopHeader";
import CarouselItem from "../components/CarouselItem";
import { Carousel } from "antd";
import ProductItem from "../components/ProductItem";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopHeader />

      <div className=" w-full px-20 pt-3">
        <CarouselItem />
        <ProductItem />
      </div>
    </div>
  );
}
