"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconList from "@/assets/images/svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const [showNav, setShowNav] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("resize", (data: any) => {
      console.log(data);
      let width = data?.target?.outerWidth;
      if (width <= 768) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    });
  }, []);

  return (
    <div className="header-2 bg-white relative">
      <nav className="bg-white py-2 md:py-4 md:pt-0  w-[95%] mx-auto">
        <div className="w-full hidden py-3  mb-1 md:flex justify-end  md:mx-auto ">
          <div className="flex justify-center items-center gap-3">
            <Link className="text-xs text-black" href={"#"}>
              Help
            </Link>
            <Link className="text-xs text-black" href={"#"}>
              Orders & Returns
            </Link>
            <Link className="text-xs text-black" href={"#"}>
              Hi, John
            </Link>
          </div>
        </div>
        <div className="    md:flex md:items-center mx-auto ">
          <div className="flex justify-between items-center w-full">
            <div className="w-full flex-1">
              <Link href="/" className="font-bold text-2xl text-black">
                TURNOVER
              </Link>
            </div>
            <ul
              className={`  absolute top-[75%] z-10 md:relative ${
                showNav ? "flex " : "hidden"
              } flex-col flex-auto  md:flex-row md:ml-auto mt-3 md:mt-0 justify-center bg-white w-[99.8%] md:w-full left-0 font-bold  md:p-0 py-1 px-2`}
              id="navbar-collapse"
            >
              <li
                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded ${
                  pathname === "/categoreis" ? "border " : ""
                } `}
              >
                <Link href="/categoreis">Categories</Link>
              </li>
              <li
                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                  pathname === "/sale" ? "border " : ""
                }`}
              >
                <Link href="/sale">Sale</Link>
              </li>
              <li
                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                  pathname === "/clearance" ? "border " : ""
                } `}
              >
                <Link href="/clearance">Clearance</Link>
              </li>
              <li
                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                  pathname === "/price-drop" ? "border " : ""
                } `}
              >
                <Link href="/price-drop">Price Drop</Link>
              </li>
              <li
                className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${
                  pathname === "/deals" ? "border " : ""
                } `}
              >
                <Link href="/deals">Deals</Link>
              </li>
            </ul>
            <div className=" flex items-center justify-end">
              <div className="flex justify-center gap-3">
                <Image
                  priority
                  src={IconList?.SearchIcon}
                  width={32}
                  height={32}
                  alt="Search anything"
                />
                <Image
                  priority
                  src={IconList?.CartIcon}
                  width={32}
                  height={32}
                  alt="cart"
                />
                <div className="md:hidden">
                  <Image
                    priority
                    src={IconList?.UserIcon}
                    width={32}
                    height={32}
                    alt="cart"
                  />
                </div>
                <Image
                  priority
                  className="md:hidden"
                  onClick={() => setShowNav(!showNav)}
                  src={IconList?.HamburgerIcon}
                  width={32}
                  height={32}
                  alt="cart"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
