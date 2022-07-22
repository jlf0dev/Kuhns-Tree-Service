import Image from "next/image";
import Link from "next/link";
import logo from "../public/KuhnsTreeService_logo.png";
import Hamburger from "./hamburger";

export default function Navbar() {
  return (
    <>
      {/* Top Bar with Phone Number */}
      <div className="hidden md:block w-full bg-kuhn-green">
        <div className="max-w-6xl m-auto grid grid-cols-2 text-white py-1">
          <p className="pl-7 text-sm">Operating for Over 35 Years</p>
          <p className="text-right text-sm">301-384-4724</p>
        </div>
      </div>

      {/* Navbar */}
      <div className="max-w-[90%] lg:max-w-6xl m-auto h-fit lg:py-5 flex flex-wrap justify-between items-center">
        <div className="h-[75px] w-full flex items-center justify-center lg:w-64">
          <Hamburger />
          <Link href="/">
            <a className="relative inline-block h-[77%] w-full">
              <Image
                src={logo}
                alt="Kuhns Tree Service"
                layout={"fill"}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <ul className="hidden lg:flex flex-col lg:flex-row justify-between items-center uppercase font-bold text-sm gap-6">
          <li className="">
            <Link href="/" className="">
              <a className="">About Us</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/about">
              <a className="h-full grid place-items-center">Services</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/about">
              <a className="h-full grid place-items-center">Discounts</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/menu">
              <a className="h-full grid place-items-center">Gallery</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/menu">
              <a className="h-full grid place-items-center">Testimonials</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/menu">
              <a className="h-full grid place-items-center">Contact Us</a>
            </Link>
          </li>
          {/* <li className="w-full h-11 md:h-fit">
            <Link href="/contact" className="text-[#ffba00] md:text-black">
              <a className="md:bg-[#ffba00] clipped-button md:text-black md:py-2 md:px-5 md:uppercase md:hover:bg-black md:hover:text-slate-50 md:font-bold h-full grid place-items-center">
                Contact
              </a>
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
}
