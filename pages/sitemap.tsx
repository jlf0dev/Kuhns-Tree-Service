import Hero from '../components/hero';
import SectionWrapper from '../components/sectionWrapper';
import heroBg from '../public/kuhn-about-hero.jpg';
import { NextSeo } from 'next-seo';
import ActiveLink from '../components/activeLink';

const pages = [

    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
    {
        url: "/services",
        title: "Services",
        subPages: [
            {
                url: "/services/tree-trimming",
                title: "Tree Trimming"
            },
            {
                url: "/services/tree-removal",
                title: "Tree Removal"
            },
            {
                url: "/services/stump-grinding",
                title: "Stump Grinding"
            },
            {
                url: "/services/firewood-for-sale",
                title: "Firewood For Sale"
            }
        ],
    },
    {
        url: "/discounts",
        title: "Discounts"
    },
    {
        url: "/gallery",
        title: "Gallery"
    },
    {
        url: "/testimonials",
        title: "Testimonials"
    },
    {
        url: "/contact",
        title: "Contact"
    },
    {
        url: "/privacy-policy",
        title: "Privacy Policy"
    }
];

export default function Sitemap() {
    return (
        <>
            <NextSeo
                title='Sitemap | Professional Tree Services in Silver Spring, Maryland'
                description="Sitemap | Professional Tree Services in Silver Spring, Maryland"
            />

            <Hero backgroundImage={heroBg} text='Sitemap' />

            <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
                <div className='flex flex-col gap-3 text-left'>
                    <ul className='list-disc'>
                        {
                            pages.map((page, index) => {
                                return <li key={index} className='mb-1'>
                                    <ActiveLink
                                        href={page.url}
                                        activeClassName='text-kuhn-light-green'
                                    >
                                        <a className='inline-block py-1 hover:text-kuhn-light-green px-2'>{page.title}</a>
                                    </ActiveLink>
                                    {page.subPages && <ul className='list-disc px-5 py-2'>
                                        {page.subPages.map((subPage, i) => {
                                            return <li key={i} className='mb-1'>
                                                <ActiveLink
                                                    href={subPage.url}
                                                    activeClassName='text-kuhn-light-green'
                                                >
                                                    <a className='inline-block py-1 hover:text-kuhn-light-green px-2'>{subPage.title}</a>
                                                </ActiveLink>
                                            </li>
                                        })}
                                    </ul>
                                    }
                                </li>
                            })
                        }
                    </ul>
                </div>
            </SectionWrapper>
        </>
    );
}
