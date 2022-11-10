import Head from 'next/head';
import ContactForm from '../components/contactForm';
import Hero from '../components/hero';
import SectionWrapper from '../components/sectionWrapper';
import heroBg from '../public/kuhn-contact-hero.jpg';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us for an Estimate | Kuhn's Tree Service</title>
      </Head>
      <Hero backgroundImage={heroBg} text='Contact Us' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>Kuhn's Tree Service</h2>
          <div className='pb-5'>
            <p className='font-bold'>Service Areas</p>
            <p>
              Maryland, Silver Spring, Gaithersburg, Chevy Chase, Bethesda,
              Potomac, Rockville, Olney, Kensington, Washington DC (NE and NW),
              Laurel, Takoma Park, Northern Prince George's County, and Parts of
              Howard County
            </p>
          </div>
          <div className='pb-5'>
            <p className='font-bold'>Send Checks or Correspondence To</p>
            <p>PO BOX 4178</p>
            <p>Silver Spring, MD 20914</p>
          </div>
          <div className='pb-5'>
            <p className='font-bold'>Phone</p>
            <p>
              <a
                href='tel:301-384-4724'
                className='text-kuhn-light-green hover:text-black'
              >
                301-384-4724
              </a>
            </p>
          </div>
          <div className='pb-5'>
            <p className='font-bold'>Email</p>
            <p>
              <a
                href='mailto:kuhnstreeservice@gmail.com'
                className='text-kuhn-light-green hover:text-black'
              >
                kuhnstreeservice@gmail.com
              </a>
            </p>
          </div>
          <div className='pb-5'>
            <p className='font-bold'>Hours of Operation</p>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>24 Hour Emergency Storm Damage Service</p>
          </div>
        </div>
      </SectionWrapper>

      <ContactForm background='bg-[#f7f7f7]' />
    </>
  );
}
