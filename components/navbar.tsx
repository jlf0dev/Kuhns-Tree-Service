import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaArrowLeft, FaPhoneAlt } from 'react-icons/fa';
import logo from '../public/KuhnsTreeService_logo.png';
import ActiveLink from './activeLink';
import MenuButton from './menuButton';
import MobileMenuButton from './mobileMenuButton';

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
      <IconContext.Provider value={{ size: '16' }}>
        <div className='hidden w-full bg-kuhn-green py-0.5 md:block'>
          <div className='m-auto flex max-w-6xl justify-between py-1 text-white'>
            <p className='pl-7 text-sm'>Operating for Over 35 Years</p>
            <div className='md:pr-7 lg:pr-0'>
              <a
                href='tel:301-384-4724'
                className='hover:text-kuhn-light-green'
              >
                <p className='text-sm'>
                  <FaPhoneAlt className='mr-2 inline' />
                  301-384-4724
                </p>
              </a>
            </div>
          </div>
        </div>
      </IconContext.Provider>

      {/* Mobile Menu */}
      <IconContext.Provider value={{ size: '32' }}>
        <div
          className={`fixed top-0 z-50 h-screen w-4/5 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? 'left-0' : '-left-full'
          }`}
        >
          <div className='m-4 flex min-h-[55px] items-center justify-between pr-1'>
            <div className='w-2/3'>
              <Link href='/'>
                <a className=' h-full w-full'>
                  <Image
                    src={logo}
                    alt='Kuhns Tree Service'
                    layout={'responsive'}
                    objectFit='contain'
                  />
                </a>
              </Link>
            </div>
            <button onClick={() => setOpen(false)} aria-label='Close Menu'>
              <FaArrowLeft className='text-kuhn-light-green' />
            </button>
          </div>
          <ul className='m-4 mt-9 flex flex-col text-lg font-bold uppercase'>
            <li className=''>
              <ActiveLink href='/about' activeClassName='text-kuhn-light-green'>
                <a
                  className='inline-block h-full w-full py-3'
                  onClick={closeMenu}
                >
                  About Us
                </a>
              </ActiveLink>
            </li>
            <li className=''>
              <MobileMenuButton closeMenu={closeMenu} />
            </li>
            <li className=''>
              <ActiveLink
                href='/discounts'
                activeClassName='text-kuhn-light-green'
              >
                <a
                  className='inline-block h-full w-full py-3'
                  onClick={closeMenu}
                >
                  Discounts
                </a>
              </ActiveLink>
            </li>
            <li className=''>
              <ActiveLink
                href='/gallery'
                activeClassName='text-kuhn-light-green'
              >
                <a
                  className='inline-block h-full w-full py-3'
                  onClick={closeMenu}
                >
                  Gallery
                </a>
              </ActiveLink>
            </li>
            <li className=''>
              <ActiveLink
                href='/testimonials'
                activeClassName='text-kuhn-light-green'
              >
                <a
                  className='inline-block h-full w-full py-3'
                  onClick={closeMenu}
                >
                  Testimonials
                </a>
              </ActiveLink>
            </li>
            <li className=''>
              <ActiveLink
                href='/contact'
                activeClassName='text-kuhn-light-green'
              >
                <a
                  className='inline-block h-full w-full py-3'
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
        className={`fixed top-0 left-0 z-40 h-screen w-full bg-[#00000080] transition-all duration-300 ease-in-out ${
          !isOpen && 'pointer-events-none opacity-0'
        }`}
      ></div>

      {/* Navbar */}
      <div className='m-auto flex h-fit max-w-[90%] flex-wrap items-center justify-between lg:max-w-6xl lg:py-5'>
        <div className='relative flex h-[75px] w-full items-center justify-center lg:w-64'>
          <Hamburger toggleMenu={toggleMenu} />
          <div className='grid h-full w-full place-items-center'>
            <Link href='/'>
              <a className='relative mx-auto inline-block h-[77%] w-64'>
                <Image
                  src={logo}
                  alt='Kuhns Tree Service'
                  layout={'fill'}
                  objectFit='contain'
                />
              </a>
            </Link>
          </div>
        </div>
        <ul className='hidden flex-col items-center justify-between gap-6 text-sm font-bold uppercase lg:flex lg:flex-row'>
          <li className='h-11'>
            <ActiveLink href='/about' activeClassName='text-kuhn-light-green'>
              <a className='grid h-full place-items-center hover:text-kuhn-light-green'>
                About Us
              </a>
            </ActiveLink>
          </li>
          <li className='h-11'>
            <MenuButton />
          </li>
          <li className='h-11'>
            <ActiveLink
              href='/discounts'
              activeClassName='text-kuhn-light-green'
            >
              <a className='grid h-full place-items-center hover:text-kuhn-light-green'>
                Discounts
              </a>
            </ActiveLink>
          </li>
          <li className='h-11'>
            <ActiveLink href='/gallery' activeClassName='text-kuhn-light-green'>
              <a className='grid h-full place-items-center hover:text-kuhn-light-green'>
                Gallery
              </a>
            </ActiveLink>
          </li>
          <li className='h-11'>
            <ActiveLink
              href='/testimonials'
              activeClassName='text-kuhn-light-green'
            >
              <a className='grid h-full place-items-center hover:text-kuhn-light-green'>
                Testimonials
              </a>
            </ActiveLink>
          </li>
          <li className='h-11'>
            <ActiveLink href='/contact' activeClassName='text-kuhn-light-green'>
              <a className='grid h-full place-items-center hover:text-kuhn-light-green'>
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
      className='absolute left-0'
      aria-label='Open Menu'
    >
      <div className='lg:hidden'>
        <span className='mb-[5px] block h-[4px] w-[33px] rounded-[3px] bg-kuhn-light-green' />
        <span className='mb-[5px] block h-[4px] w-[33px] rounded-[3px] bg-kuhn-light-green' />
        <span className='mb-[5px] block h-[4px] w-[33px] rounded-[3px] bg-kuhn-light-green' />
      </div>
    </button>
  );
}
