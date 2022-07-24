import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../public/KuhnsTreeService_logo.png";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  return (
    <>
      {/* Top Bar with Phone Number */}
      <div className="hidden md:block w-full bg-kuhn-green">
        <div className="max-w-6xl m-auto grid grid-cols-2 text-white py-1">
          <p className="pl-7 text-sm">Operating for Over 35 Years</p>
          <p className="text-right text-sm">301-384-4724</p>
        </div>
      </div>

      {/* Mobile Menu */}
      <IconContext.Provider value={{ size: "32" }}>
        <div
          className={`fixed z-50 h-screen bg-white w-4/5 top-0 transition-all ease-in-out duration-300 ${
            isOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="h-[55px] flex justify-between items-center m-4 pr-1">
            <div className="w-2/3">
              <Link href="/">
                <a className=" h-full w-full">
                  <Image
                    src={logo}
                    alt="Kuhns Tree Service"
                    layout={"responsive"}
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <button onClick={() => setOpen(false)}>
              <FaArrowLeft className="text-kuhn-light-green" />
            </button>
          </div>
          <ul className="uppercase font-bold text-lg flex flex-col gap-y-6 m-4 mt-9">
            <li className="">
              <Link href="/" className="">
                <a className="">About Us</a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a className="">Services</a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a className="">Discounts</a>
              </Link>
            </li>
            <li className="">
              <Link href="/menu">
                <a className="">Gallery</a>
              </Link>
            </li>
            <li className="">
              <Link href="/menu">
                <a className="">Testimonials</a>
              </Link>
            </li>
            <li className="">
              <Link href="/menu">
                <a className="">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </IconContext.Provider>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#00000080] z-40 transition-all ease-in-out duration-300 ${
          !isOpen && "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Navbar */}
      <div className="max-w-[90%] lg:max-w-6xl m-auto h-fit lg:py-5 flex flex-wrap justify-between items-center">
        <div className="h-[75px] w-full flex items-center justify-center lg:w-64">
          <Hamburger toggleMenu={toggleMenu} />
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

interface HamburgerProps {
  toggleMenu: () => void;
}

function Hamburger({ toggleMenu }: HamburgerProps) {
  return (
    <button onClick={toggleMenu}>
      <div className="lg:hidden">
        <span className="block w-[33px] h-[4px] mb-[5px] rounded-[3px] bg-kuhn-light-green" />
        <span className="block w-[33px] h-[4px] mb-[5px] rounded-[3px] bg-kuhn-light-green" />
        <span className="block w-[33px] h-[4px] mb-[5px] rounded-[3px] bg-kuhn-light-green" />
      </div>
    </button>
  );
}
