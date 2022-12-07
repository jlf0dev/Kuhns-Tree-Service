import { NextSeo } from 'next-seo';
import Image, { StaticImageData } from 'next/image';
import Hero from '../components/hero';
import SectionWrapper from '../components/sectionWrapper';
import heroBg from '../public/kuhn-gallery-hero.jpg';

let pictureUrls: string[] = require('../data/gallery.json');

export default function Gallery() {
  return (
    <>
      <NextSeo
        title='Tree Services Gallery | Professional Tree Services in Silver Springs, Maryland'
        description="Check out our gallery of previous jobs we've completed throughout the Silver Springs Maryland area. Each customer is 100 percent satisfied with the tree services received. Kuhn's Tree Service is fully licensed and insured."
      />

      <Hero backgroundImage={heroBg} text='Gallery' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>
            Previous Tree Services Throughout Maryland
          </h2>
          <p className='pb-5'>
            Check out our gallery of previous jobs we've completed throughout
            Maryland. Each customer is 100 percent satisfied with the tree
            services received. Please reach out today to get your free estimate
            and discuss the tree services we can help you with at your home or
            office.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl'>
        <div className='grid grid-cols-1 gap-y-24 gap-x-10 md:grid-cols-2 lg:grid-cols-3'>
          {pictureUrls.map((url, index) => {
            return <ImageFrame url={url} key={index} />;
          })}
        </div>
      </SectionWrapper>
    </>
  );
}

type FrameProps = {
  url: string | StaticImageData;
};

export const ImageFrame = ({ url }: FrameProps) => {
  return (
    <>
      <div className='relative m-auto h-72 w-72 drop-shadow md:drop-shadow-2xl '>
        <Image
          src={url}
          alt="Picture of Kuhn's tree services working"
          layout='fill'
          objectFit='cover'
        />
      </div>
    </>
  );
};
