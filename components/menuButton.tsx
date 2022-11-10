import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ActiveLink from './activeLink';

interface MenuButtonProps {
  children: JSX.Element | JSX.Element[];
}

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className='h-full w-full'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ActiveLink href='/services' activeClassName='text-kuhn-light-green'>
          <a className='flex h-full items-center hover:text-kuhn-light-green'>
            Services <FaChevronDown className='ml-2 inline' />
          </a>
        </ActiveLink>
      </div>
      <div
        className={`absolute top-24 z-[100] w-56 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'mt-3 opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul>
          <li>
            <ActiveLink
              href='/services/tree-trimming'
              activeClassName='text-kuhn-light-green'
            >
              <a className='inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green'>
                Tree Trimming
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href='/services/tree-removal'
              activeClassName='text-kuhn-light-green'
            >
              <a className='inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green'>
                Tree Removal
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href='/services/stump-grinding'
              activeClassName='text-kuhn-light-green'
            >
              <a className='inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green'>
                Stump Grinding
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href='/services/firewood-for-sale'
              activeClassName='text-kuhn-light-green'
            >
              <a className='inline-block h-full w-full px-3 py-4 hover:text-kuhn-light-green'>
                Firewood for Sale
              </a>
            </ActiveLink>
          </li>
        </ul>
      </div>
    </>
  );
}
