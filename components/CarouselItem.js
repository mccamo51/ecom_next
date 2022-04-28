import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";
import makeAxiosRequest from "../util/services";

function CarouselItem() {
  const [banner, setBanner] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function getBanner() {
    const val = await makeAxiosRequest("GET", "/banners");
    console.log(val);
    setBanner(val);
    setLoading(false);
  }
  useEffect(() => {
    getBanner();
  }, []);
  if (isLoading) {
    return <div>Loading</div>;
  }
  const banners = banner[0]?.items;
  console.log("loaded data", banners);
  return (
    <Carousel autoplay>
      {banners.map((val, index) => (
        <img
          src={`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}${val.image.url}`}
          key={val.id}
          alt=""
        />
      ))}
    </Carousel>
  );
}

export default CarouselItem;
