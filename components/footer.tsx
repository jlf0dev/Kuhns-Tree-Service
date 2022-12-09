import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import ActiveLink from './activeLink';
import AngiesListIcon from './icons/angies-list';

export default function Footer() {
  return (
    <footer className='text-white'>
      <div className='h-full w-full bg-kuhn-dark-green'>
        <div className='mx-auto flex h-full w-full max-w-[90%] flex-col py-5 lg:w-[90%] lg:max-w-7xl lg:flex-row lg:flex-wrap'>
          <ul className='flex flex-col items-center justify-center md:flex-row md:justify-between lg:h-full lg:min-w-[900px]'>
            <li>
              <ActiveLink href='/' activeClassName='text-kuhn-light-green'>
                <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                  <p className='text-base md:text-sm'>Home</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href='/about' activeClassName='text-kuhn-light-green'>
                <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                  <p className='text-base md:text-sm'>About Us</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/services'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                  <p className='text-base md:text-sm'>Services</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/discounts'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                  <p className='text-base md:text-sm'>Discounts</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/gallery'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                  <p className='text-base md:text-sm'>Gallery</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/testimonials'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                  <p className='text-base md:text-sm'>Testimonials</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href='/contact'
                activeClassName='text-kuhn-light-green'
              >
                <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                  <p className='text-base md:text-sm'>Contact Us</p>
                </a>
              </ActiveLink>
            </li>
            <li>
              <IconContext.Provider value={{ size: '20' }}>
                <a
                  href='tel:301-384-4724'
                  className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'
                >
                  <p className='text-base md:text-sm'>
                    <FaPhoneAlt className='mr-2 inline' />
                    Call Now 301-384-4724
                  </p>
                </a>
              </IconContext.Provider>
            </li>
          </ul>
          <div className='flex h-full items-center justify-center py-3 lg:ml-auto lg:justify-end lg:justify-self-end'>
            <IconContext.Provider value={{ size: '30' }}>
              <a
                href='https://www.facebook.com/kuhnstreeservices/'
                className='hover:text-kuhn-light-green'
                title='Facebook'
              >
                <FaFacebookSquare className='mr-2 inline' />
                <span className='sr-only'>Facebook</span>
              </a>
            </IconContext.Provider>
            <a
              href='https://www.angi.com/companylist/us/md/silver-spring/kuhn%27s-tree-service-inc-reviews-161480.htm'
              className='hover:text-kuhn-light-green'
              title="Angie's List"
            >
              <AngiesListIcon />
            </a>
          </div>
        </div>
      </div>
      <div className='w-full bg-kuhn-green md:h-24'>
        <div className='mx-auto flex h-full max-w-[90%] flex-col items-center justify-center py-10 text-center md:flex-row md:justify-start md:py-5 md:text-left lg:w-[90%] lg:max-w-7xl'>
          <p className='text-base md:text-sm'>
            © 2022 Kuhn's Tree Service. All Rights Reserved.
          </p>
          <div className='md:px-10'>
            <ActiveLink
              href='/privacy-policy'
              activeClassName='text-kuhn-light-green'
            >
              <a className='inline-block h-full w-full py-3 hover:text-kuhn-light-green'>
                <p className='text-base md:text-sm'>Privacy Policy</p>
              </a>
            </ActiveLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
