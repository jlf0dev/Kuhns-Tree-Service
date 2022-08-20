import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import logo from "../public/KuhnsTreeService_logo.png";
import ActiveLink from "./activeLink";
import MenuButton from "./menuButton";
import MobileMenuButton from "./mobileMenuButton";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const closeMenu = () => setOpen(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setOpen(false); // close menu if path changes
  }, [pathname]);

  return (
    <>
      {/* Top Bar with Phone Number */}
      <IconContext.Provider value={{ size: "16" }}>
        <div className="hidden md:block w-full bg-kuhn-green py-0.5">
          <div className="max-w-6xl m-auto text-white py-1 flex justify-between">
            <p className="pl-7 text-sm">Operating for Over 35 Years</p>
            <div className="md:pr-7 lg:pr-0">
              <a
                href="tel:301-384-4724"
                className="hover:text-kuhn-light-green"
              >
                <p className="text-sm">
                  <FaPhoneAlt className="inline mr-2" />
                  301-384-4724
                </p>
              </a>
            </div>
          </div>
        </div>
      </IconContext.Provider>

      {/* Mobile Menu */}
      <IconContext.Provider value={{ size: "32" }}>
        <div
          className={`fixed z-50 h-screen bg-white w-4/5 top-0 transition-all ease-in-out duration-300 ${
            isOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="min-h-[55px] flex justify-between items-center m-4 pr-1">
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
            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <FaArrowLeft className="text-kuhn-light-green" />
            </button>
          </div>
          <ul className="uppercase font-bold text-lg flex flex-col m-4 mt-9">
            <li className="">
              <ActiveLink href="/about" activeClassName="text-kuhn-light-green">
                <a
                  className="inline-block h-full w-full py-3"
                  onClick={closeMenu}
                >
                  About Us
                </a>
              </ActiveLink>
            </li>
            <li className="">
              <MobileMenuButton closeMenu={closeMenu} />
            </li>
            <li className="">
              <ActiveLink
                href="/discounts"
                activeClassName="text-kuhn-light-green"
              >
                <a
                  className="inline-block h-full w-full py-3"
                  onClick={closeMenu}
                >
                  Discounts
                </a>
              </ActiveLink>
            </li>
            <li className="">
              <ActiveLink
                href="/gallery"
                activeClassName="text-kuhn-light-green"
              >
                <a
                  className="inline-block h-full w-full py-3"
                  onClick={closeMenu}
                >
                  Gallery
                </a>
              </ActiveLink>
            </li>
            <li className="">
              <ActiveLink
                href="/testimonials"
                activeClassName="text-kuhn-light-green"
              >
                <a
                  className="inline-block h-full w-full py-3"
                  onClick={closeMenu}
                >
                  Testimonials
                </a>
              </ActiveLink>
            </li>
            <li className="">
              <ActiveLink
                href="/contact"
                activeClassName="text-kuhn-light-green"
              >
                <a
                  className="inline-block h-full w-full py-3"
                  onClick={closeMenu}
                >
                  Contact Us
                </a>
              </ActiveLink>
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
        <div className="h-[75px] w-full flex items-center justify-center lg:w-64 relative">
          <Hamburger toggleMenu={toggleMenu} />
          <div className="w-full h-full grid place-items-center">
            <Link href="/">
              <a className="relative inline-block h-[77%] w-64 mx-auto">
                <Image
                  src={logo}
                  alt="Kuhns Tree Service"
                  layout={"fill"}
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
        </div>
        <ul className="hidden lg:flex flex-col lg:flex-row justify-between items-center uppercase font-bold text-sm gap-6">
          <li className="h-11">
            <ActiveLink href="/about" activeClassName="text-kuhn-light-green">
              <a className="h-full grid place-items-center hover:text-kuhn-light-green">
                About Us
              </a>
            </ActiveLink>
          </li>
          <li className="h-11">
            <MenuButton />
          </li>
          <li className="h-11">
            <ActiveLink
              href="/discounts"
              activeClassName="text-kuhn-light-green"
            >
              <a className="h-full grid place-items-center hover:text-kuhn-light-green">
                Discounts
              </a>
            </ActiveLink>
          </li>
          <li className="h-11">
            <ActiveLink href="/gallery" activeClassName="text-kuhn-light-green">
              <a className="h-full grid place-items-center hover:text-kuhn-light-green">
                Gallery
              </a>
            </ActiveLink>
          </li>
          <li className="h-11">
            <ActiveLink
              href="/testimonials"
              activeClassName="text-kuhn-light-green"
            >
              <a className="h-full grid place-items-center hover:text-kuhn-light-green">
                Testimonials
              </a>
            </ActiveLink>
          </li>
          <li className="h-11">
            <ActiveLink href="/contact" activeClassName="text-kuhn-light-green">
              <a className="h-full grid place-items-center hover:text-kuhn-light-green">
                Contact Us
              </a>
            </ActiveLink>
          </li>
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
    <button
      onClick={toggleMenu}
      className="absolute left-0"
      aria-label="Open Menu"
    >
      <div className="lg:hidden">
        <span className="block w-[33px] h-[4px] mb-[5px] rounded-[3px] bg-kuhn-light-green" />
        <span className="block w-[33px] h-[4px] mb-[5px] rounded-[3px] bg-kuhn-light-green" />
        <span className="block w-[33px] h-[4px] mb-[5px] rounded-[3px] bg-kuhn-light-green" />
      </div>
    </button>
  );
}
