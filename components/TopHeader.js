import React from "react";

import Image from "next/image";

import Link from "next/link";
import { Input } from "antd";
import {
  ArrowDownOutlined,
  CaretDownOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
const { Search } = Input;

function TopHeader() {
  const onSearch = (value) => console.log(value);

  return (
    <div className="w-full border-b-2">
      <div className="flex justify-between w-full  px-20 items-center">
        <Link href={"/"}>
          <a>
            <Image
              className="hover:cursor-pointer"
              src={"/img/logo.png"}
              width={128}
              height={81}
            />
          </a>
        </Link>
        <div className="md:w-1/2 lg:w-[70%] mx-4 border-blue-400">
          <Search
            placeholder="Search item here..."
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className="list-none flex space-x-4 items-center">
          <Link href={"/"}>
            <div className="hover:cursor-pointer">
              <ShoppingOutlined />
              <h1>Orders</h1>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="hover:cursor-pointer">
              <ShoppingCartOutlined />
              <h1>Cart</h1>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="hover:cursor-pointer">
              <UserOutlined />
              <h1>Sign In</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center border-[1px] p-1 px-20">
        <div className="flex hover:cursor-pointer items-center ">
          <MenuFoldOutlined />
          <div className="ml-2">
            Category
            <CaretDownOutlined className="ml-2" />
          </div>
        </div>
        <div className="flex items-center hover:cursor-pointer">
          <CaretDownOutlined className="mr-2" />

          <div>English - GHS₵</div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
