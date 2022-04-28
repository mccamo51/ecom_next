import React from "react";

function ProductItem({ product }) {
  return (
    <div>
      <div class="bg-grey-light py-8 w-full flex justify-center items-center">
        <div class="bg-white rounded w-1/4 shadow hover:shadow-md duration-4">
         
          <div class="p-6 text-grey-darker text-justify flex flex-col">
            <img
              src="https://picsum.photos/300/300"
              alt="Some image"
              class="w-64 flex self-center rounded-sm shadow-lg mb-6"
            />
             <div class="flex flex-row justify-between uppercase font-bold text-blue-dark border-b p-6">
            <p>My awesome item name</p>
            <div class="cursor-pointer text-grey-dark hover:text-blue duration-4">
              <i class="fas fa-ellipsis-v"></i>
            </div>
          </div>
            <div class="pt-4">
              <span class="uppercase bg-green-600 text-white font-bold p-2 text-xs shadow rounded">
                25% off
              </span>
              <span class="uppercase bg-yellow-dark text-grey-darkest font-bold p-2 text-xs shadow rounded">
                stock: 3
              </span>
            </div>
          </div>
          {/* <div class="p-6 text-grey-darker text-justify flex flex-row justify-end border-t">
            <button class="uppercase self-end text-blue mx-8 text-sm hover:text-blue-dark duration-4 self-center">
              details
            </button>
            <button class="uppercase self-end bg-green font-bold text-white px-6 py-4 rounded hover:bg-green-dark duration-4">
              <i class="fa fa-cart-plus mr-4"></i>Add to cart
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

{
  /* </div>
    <div className="w-[120px] flex flex-col items-center ">
      <img
        src="https://s.alicdn.com/@sc04/kf/Hd50adb282cdf496f84baf63413ae0bc3c.jpg_120x120xz.jpg"
        alt=""
        width={120}
      />
      <div className="flex flex-col items-start w-full p-2">
        <div
          className="font-bold font-serif border-b-2 text-sm mb-2 
        text-center overflow-ellipsis W-[100px] "
        >
          Product Name
        </div>
        <div className="text-base font-bold flex-1">GH¢ 100</div>
        <div className="text-xs font-thin flex-1 items-start line-through">
          GH¢ 100
        </div>
      </div>
</div> */
}
