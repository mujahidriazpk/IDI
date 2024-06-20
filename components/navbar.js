import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  return (
    <div className="w-full absolute">
      <div className=" bg-[#141414] w-full text-white flex justify-center uppercase">
        <div className="flex w-full sm:w-1/2 justify-around items-center">
          <p>HIGHEST QUALITY</p>
          <Image src={require("../public/img/dot.png")} />
          <p>Fastest Turnaround</p>
          <Image src={require("../public/img/dot.png")} />
          <p>Most Affordable</p>
        </div>
      </div>
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <Image
                        src="/img/logo.png"
                        alt="logo"
                        width="300"
                        height="100"
                        className="w-auto"
                      />
                    </span>
                  </span>
                </Link>
                {/*
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </Link>
                    ))}
                    <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                        Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
                */}
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        {/* 
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
          */}
        <div className="flex flex-wrap mr-3 space-x-4 nav__item justify-center items-center">
          <div className="flex flex-col grey clear-both w-auto text-sm items-center text-[#BEBDBD] font-semibold uppercase">
            <div className="flex">
              {Array.from({ length: 5 }).map(() => {
                return (
                  <>
                    <img src="/img/star.png" />
                  </>
                )
              })}
            </div>
            <div className={"h-[1px] border-b-[1px] w-full border-primary"} />
            <p>5 Star Google Rating</p>
          </div>
          <div className="uppercase flex flex-col grey clear-both w-auto text-sm items-center text-[#BEBDBD] font-semibold">
            <Link href="tel:1-800-380-9058" className="text-base">1-800-380-9058</Link>
            <div className={"h-[1px] border-b-[1px] w-full border-primary"} />
            <p>Free Consultation</p>
          </div>
          <div>
            <Link href="#quote_form" className="px-4 py-2 mt-4 text-sm uppercase text-white bg-[#2164A1] w-auto font-semibold">
              Get Quote
            </Link>
          </div>

          {/*<ThemeChanger />*/}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
