import { IconContext } from "react-icons";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import ActiveLink from "./activeLink";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="lg:h-24 h-full w-full bg-kuhn-dark-green">
        <div className="max-w-[90%] lg:max-w-7xl h-full w-full mx-auto flex flex-col lg:flex-row py-5">
          <ul className="lg:min-w-[900px] lg:h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
            <li>
              <ActiveLink href="/" activeClassName="text-kuhn-light-green">
                <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                  <p className="text-base md:text-sm">Home</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about" activeClassName="text-kuhn-light-green">
                <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                  <p className="text-base md:text-sm">About Us</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/services"
                activeClassName="text-kuhn-light-green"
              >
                <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                  <p className="text-base md:text-sm">Services</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/discounts"
                activeClassName="text-kuhn-light-green"
              >
                <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                  <p className="text-base md:text-sm">Discounts</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/gallery"
                activeClassName="text-kuhn-light-green"
              >
                <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                  <p className="text-base md:text-sm">Gallery</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/testimonials"
                activeClassName="text-kuhn-light-green"
              >
                <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                  <p className="text-base md:text-sm">Testimonials</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/contact"
                activeClassName="text-kuhn-light-green"
              >
                <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                  <p className="text-base md:text-sm">Contact Us</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <IconContext.Provider value={{ size: "20" }}>
                <a
                  href="tel:301-384-4724"
                  className="hover:text-kuhn-light-green inline-block h-full w-full py-3"
                >
                  <p className="text-base md:text-sm">
                    <FaPhoneAlt className="inline mr-2" />
                    Call Now 301-384-4724
                  </p>
                </a>
              </IconContext.Provider>
            </li>
          </ul>
          <div className="lg:w-full h-full flex items-center justify-center lg:justify-end lg:justify-self-end py-3">
            <IconContext.Provider value={{ size: "30" }}>
              <a
                href="https://www.facebook.com/kuhnstreeservices/"
                className="hover:text-kuhn-light-green"
              >
                <FaFacebookSquare className="inline mr-2" />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="md:h-24 w-full bg-kuhn-green">
        <div className="lg:max-w-7xl max-w-[90%] mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-start py-10 md:py-5 text-center md:text-left">
          <p className="text-base md:text-sm">
            © 2022 Kuhn's Tree Service. All Rights Reserved.
          </p>
          <div className="md:px-10">
            <ActiveLink
              href="/privacy-policy"
              activeClassName="text-kuhn-light-green"
            >
              <a className="hover:text-kuhn-light-green inline-block h-full w-full py-3">
                <p className="text-base md:text-sm">Privacy Policy</p>
              </a>
            </ActiveLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
