import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaChevronDown } from 'react-icons/fa';
import ActiveLink from './activeLink';

interface MobileMenuButtonProps {
  closeMenu: () => void;
}

export default function MobileMenuButton({ closeMenu }: MobileMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
  return (
    <>
      <IconContext.Provider value={{ size: '20' }}>
        <div className='flex w-full flex-row justify-between'>
          <ActiveLink href='/services' activeClassName='text-kuhn-light-green'>
            <a className='inline-block h-full w-full py-5' onClick={closeMenu}>
              Services
            </a>
          </ActiveLink>
          <div className='grid place-items-center' onClick={toggleDropdown}>
            <FaChevronDown
              className={`mx-4 my-3 inline transition-all duration-500 ease-in-out ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <ul>
            <li>
              <ActiveLink
                href='/services/tree-trimming'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full px-7 py-4'>
                  Tree Trimming
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/services/tree-removal'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full px-7 py-4'>
                  Tree Removal
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/services/stump-grinding'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full px-7 py-4'>
                  Stump Grinding
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/services/firewood-for-sale'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full px-7 py-4'>
                  Firewood for Sale
                </a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}
