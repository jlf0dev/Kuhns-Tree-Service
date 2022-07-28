import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ActiveLink from "./activeLink";

interface MenuButtonProps {
  children: JSX.Element | JSX.Element[];
}

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="w-full h-full"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ActiveLink href="/services" activeClassName="text-kuhn-light-green">
          <a className="h-full flex items-center hover:text-kuhn-light-green">
            Services <FaChevronDown className="inline ml-2" />
          </a>
        </ActiveLink>
      </div>
      <div
        className={`absolute bg-white transition-all ease-in-out duration-300 top-24 z-[100] w-56 ${
          isOpen ? "opacity-100 mt-3" : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul>
          <li>
            <ActiveLink
              href="/services/tree-trimming"
              activeClassName="text-kuhn-light-green"
            >
              <a className="inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green">
                Tree Trimming
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/services/tree-removal"
              activeClassName="text-kuhn-light-green"
            >
              <a className="inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green">
                Tree Removal
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/services/stump-grinding"
              activeClassName="text-kuhn-light-green"
            >
              <a className="inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green">
                Stump Grinding
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/services/firewood-for-sale"
              activeClassName="text-kuhn-light-green"
            >
              <a className="inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green">
                Firewood for Sale
              </a>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </>
  );
}
