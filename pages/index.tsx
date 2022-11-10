import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import hero from '../public/kuhn-hero.jpg';
import leavesBg from '../public/kuhn-leaves-bg.jpg';
import woodBg from '../public/kuhn-wood-bg.jpg';
import trimming from '../public/kuhn-tree-trimming.jpg';
import grinding from '../public/kuhn-stump-grinding.jpg';
import removal from '../public/kuhn-tree-removal.jpg';
import fallen from '../public/kuhn-tree-fallen.jpg';
import gallery1 from '../public/kuhn-gallery-1.jpg';
import gallery2 from '../public/kuhn-gallery-2.jpg';
import gallery3 from '../public/kuhn-gallery-3.jpg';
import gallery4 from '../public/kuhn-gallery-4.jpg';
import ContactForm from '../components/contactForm';
import SectionWrapper from '../components/sectionWrapper';
import KuhnButton from '../components/kuhnButton';
import { ImageFrame } from './gallery';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Maryland Tree Trimming & Removal Services | Kuhns Tree Service{' '}
        </title>
        <meta
          name='description'
          content='Kuhns Tree Service offers tree trimming and removal services to
          residential and commercial properties in Silver Spring, Maryland. Call
          us today for a free estimate!'
        ></meta>
      </Head>

      {/* Hero */}
      <div className='min-h-fit w-full bg-[#00000061] text-slate-50 md:bg-[#00000026]'>
        <div className='relative h-80 pt-[15%] pb-[20%] md:py-[33%] lg:h-10 lg:py-[20%]'>
          <Image
            src={hero}
            alt='Picture of Kuhns trucks'
            className='-z-10'
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            priority
          />
          <div className='relative z-10 mx-auto grid h-full max-w-[90%] place-items-center md:bottom-10 lg:bottom-20 lg:max-w-7xl'>
            <h1>Call today for a free estimate</h1>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='relative h-fit'>
          <Image
            src={leavesBg}
            alt='Background picture of leaves'
            className='-z-10'
            layout='fill'
            objectFit='cover'
            priority
          />
          <div className='relative z-10 mx-auto flex max-w-[90%] flex-col items-center gap-y-10 py-9 md:flex-row lg:max-w-6xl'>
            <p className='flex-grow text-xl font-bold uppercase text-white md:text-left'>
              Tree services delivered with the earth in mind
            </p>
            <div className='md:text-right'>
              <a
                href='tel:301-384-4724'
                className='inline-block bg-kuhn-light-green py-4 px-8 text-lg text-white hover:bg-[#1b381f]'
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>
            More Than 35 Years of Serving Your Community
          </h2>
          <p className='pb-5'>
            When you need tree services in Maryland, there is only one team to
            call. Kuhn's Tree Service has been helping residents for more than
            35 years our team has removed tree and their stumps, trimmed,
            planted, and more. We've become a reliable source for post-storm
            cleanup, as heavy winds, rain, and snow can all break limbs or split
            trees. We also help healthy trees get the attention they need to
            keep providing your front or backyard with cooling shade. Simply
            give us a call to discuss the issues and let our team provide the
            answers you need today.
          </p>
          <p className='pb-5'>
            Kuhn's Tree Service is fully licensed and insured.
          </p>
          <KuhnButton href='/about' text='Who We Are' center />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background={woodBg}>
        <h3 className='py-4'>Tree Services Available from Kuhn's Experts</h3>
        <p className='pb-5 text-center'>
          Our team of tree professionals not only get the work you need
          accomplished, but we do so with the environment in mind. Our safety
          practices help get rid of the Green Waste created from our tree
          services by using it to craft picnic tables, Adirondack chairs,
          benches, bird houses, flooring, and custom cut lumber of any size or
          dimension. If you are unsure of the issues with your tree, simply give
          us a call and our experts will inspect and check on the health of your
          tree's limbs and trunk. We will let you know what we can do to help or
          if the tree needs removed entirely. Trust our tree service technicians
          to accomplish the following when you need us most:
        </p>
        <div className='md: my-5 grid grid-cols-1 place-items-center gap-24 text-white md:grid-cols-3'>
          <Link href='/services/tree-trimming'>
            <div className='w-fit cursor-pointer bg-[#244b29] pb-2 shadow-xl hover:bg-kuhn-light-green'>
              <Image src={trimming} alt='Picture of tree trimming' />
              <p className='font-heading text-lg font-bold text-white'>
                Tree Trimming
              </p>
            </div>
          </Link>
          <Link href='/services/tree-removal'>
            <div className='w-fit cursor-pointer bg-[#244b29] pb-2 shadow-xl hover:bg-kuhn-light-green'>
              <Image src={removal} alt='Picture of tree removal' />
              <p className='font-heading text-lg font-bold text-white'>
                Tree Removal
              </p>
            </div>
          </Link>
          <Link href='/services/stump-grinding'>
            <div className='w-fit cursor-pointer bg-[#244b29] pb-2 shadow-xl hover:bg-kuhn-light-green'>
              <Image src={grinding} alt='Picture of stump grinding' />
              <p className='font-heading text-lg font-bold text-white'>
                Stump Grinding
              </p>
            </div>
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl'>
        <div className='my-5 grid grid-cols-1 gap-14 md:grid-cols-2'>
          <div className='order-last flex flex-col justify-center gap-4 text-left md:-order-none md:pt-5'>
            <h3>24-Hour Emergency Tree Services</h3>
            <p>
              Lightning strikes, major ice storms, and heavy winds can all cause
              unpredictable damage to the trees on your property. That damage
              can lead to downed electrical wires, broken windows, and other
              issues. Kuhn's Tree Service helps by swiftly removing the troubled
              trees anytime you need us. We offer emergency tree services 24
              hours a day, 7 days a week. We equip our response team with
              trucks, chippers, cranes, and other special equipment to get the
              job done quickly, protecting you and your family from further
              problems.
            </p>
            <KuhnButton href='/contact' text='Contact Us' />
          </div>
          <div className='grid place-items-center'>
            <Image src={fallen} alt='Picture of a tree fallen on a house' />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <h3 className='text-kuhn-light-green'>Tree Services Gallery</h3>
        <div className='grid grid-cols-1 gap-10 pt-11 pb-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-20'>
          <ImageFrame url={gallery1} />
          <ImageFrame url={gallery2} />
          <ImageFrame url={gallery3} />
          <ImageFrame url={gallery4} />
        </div>
        <KuhnButton href='/gallery' text='See Gallery' center />
      </SectionWrapper>

      <ContactForm background='bg-white' />
    </>
  );
};

export default Home;
