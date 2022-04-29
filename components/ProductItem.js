import React, { useEffect, useState } from "react";
import makeAxiosRequest from "../util/services";
import Link from "next/link";
import Page from "./Page";

function ProductItem() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function getProducts() {
    const val = await makeAxiosRequest("GET", "/products");
    console.log(val);
    setProducts(val);
    setLoading(false);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
      <div className="w-full flex flex-wrap justify-between">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-grey-light py-8 w-[24%] flex justify-center items-center cursor-pointer"
            >
              <Link href={`/Details/${product.id}`}>
                <div className="bg-white rounded w-full shadow hover:shadow-md duration-4">
                  <div className="p-3 text-grey-darker text-justify flex flex-col">
                    <img
                      src={`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}${product.thumbnail.url}`}
                      alt="Some image"
                      className="w-60 flex self-center rounded-sm shadow-lg mb-3"
                    />
                    <div className="flex flex-col justify-between uppercase font-bold text-blue-dark border-b">
                      <a>
                        <div className="truncate">{product.title}</div>
                      </a>
                      <p className="capitalize">Shop: {product.vendor}</p>
                    </div>
                    <div className="pt-4 space-x-2 justify-between">
                      <span className="uppercase bg-green-600 text-white font-bold p-2 text-xs shadow rounded">
                        GH₵ {product.price}
                      </span>
                      <span className="bg-yellow-dark text-grey-darkest font-bold px-3 py-2 text-xs shadow rounded items-center">
                        {product.review} ⭐
                      </span>
                      <span className="uppercase bg-blue-500 text-gray-100 font-bold p-2 text-xs shadow rounded">
                        Add to Cart
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
  );
}

export default ProductItem;
