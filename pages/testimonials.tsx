import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Hero from '../components/hero';
import KuhnButton from '../components/kuhnButton';
import SectionWrapper from '../components/sectionWrapper';
import heroBg from '../public/kuhn-testimonials-hero.jpg';
import reviewCert from '../public/tree-removal-review.png';

let reviews: Review[] = require('../data/reviews.json');

type Review = {
  author: string;
  location: string;
  review: string;
};

export default function Testimonials() {
  return (
    <>
      <NextSeo
        title='Satisfied Tree Service Customer Testimonials'
        description="Our main priority when providing our customers with our professional tree services is to ensure their satisfaction and protect their property. Kuhn's Tree Service is fully licensed and insured."
      />

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
            dedicated tree technicians and give us a call today. We've included
            reviews below to demonstrate what customers had to say about our
            tree removal, trimming, stump grinding, and more.
          </p>
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-3xl' background='bg-[#f7f7f7]'>
        <div className='my-5 grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='grid place-items-center'>
            <a href='https://www.treeremovalreview.com/usa/maryland/'>
              <Image
                src={reviewCert}
                alt='A certificate from TreeRemovalReview.com with the text "Best rated tree service in Maryland"'
              />
            </a>
          </div>
          <div className='order-last flex flex-col justify-center gap-4 text-center md:-order-none md:pt-5 md:text-left'>
            <h3>Rated The Best Tree Service in Maryland in 2022!</h3>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <>
          <h2 className='pt-5 pb-3'>Customer Reviews and Testimonials</h2>
          <div className='columns-1 gap-11 pt-8 md:columns-2 lg:columns-3'>
            {reviews.map((item, index) => {
              return (
                <div
                  key={index}
                  className='relative inline-block w-full pt-10 align-top'
                >
                  <div className='mb-2 border-l-[12px] border-kuhn-light-green bg-[#f7f7f7] px-4 pt-12 pb-5'>
                    {/* needed extra padding at the top of each box so quote svg wouldn't be cut off in safari*/}
                    <div className='absolute right-0 top-4'>
                      {/* needed img element since Image not loading on safari */}
                      <img
                        src='/quote.svg'
                        alt='quote icon'
                        width='65'
                        height='40'
                      />
                    </div>
                    <p className='px-2 pb-5 text-left'>{item.review}</p>
                    <div className='pr-8 text-right'>
                      <p className='text-xl font-bold'>{item.author}</p>
                      <p className=''>{item.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </SectionWrapper>
    </>
  );
}
