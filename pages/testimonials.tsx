import Head from 'next/head';
import Hero from '../components/hero';
import KuhnButton from '../components/kuhnButton';
import SectionWrapper from '../components/sectionWrapper';
import heroBg from '../public/kuhn-testimonials-hero.jpg';

let reviews: Review[] = require('../data/reviews.json');

type Review = {
  author: string;
  review: string;
};

export default function Testimonials() {
  return (
    <>
      <Head>
        <title>
          Satisfied Tree Service Customer Testimonials | Kuhn's Tree Service
        </title>
      </Head>
      <Hero backgroundImage={heroBg} text='Testimonials' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>
            Over 35 Years of Satisfied Kuhn's Tree Service Customers
          </h2>
          <p className='pb-5'>
            Our main priority when providing our customers with our professional
            tree services is to ensure their satisfaction and protect their
            property. It can be very dangerous to try and do these services
            yourself. You will either not have the right tools or not know how
            to use those tools appropriately. Leave the hard work to our
            dedicated tree technicians and give us a call today. The following
            is what our previous customers had to say about our tree removal,
            trimming, stump grinding, and more.
          </p>
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <>
          <h3 className='pb-10'>Customer Reviews and Testimonials</h3>
          {reviews.map((item, index) => {
            return (
              <div key={index}>
                <div className='pb-10 text-left'>
                  <p className='pb-5'>{item.review}</p>
                  <p className='font-bold'>{item.author}</p>
                </div>
                <hr className='pb-10' />
              </div>
            );
          })}
        </>
      </SectionWrapper>
    </>
  );
}
