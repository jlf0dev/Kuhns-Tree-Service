import Head from 'next/head';
import Image from 'next/image';
import ContactForm from '../components/contactForm';
import Hero from '../components/hero';
import KuhnButton from '../components/kuhnButton';
import SectionWrapper from '../components/sectionWrapper';
import heroBg from '../public/kuhn-about-hero.jpg';
import trucks from '../public/kuhn-trucks.jpg';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - 35 Years of Experience | Kuhn's Tree Service</title>
        <meta
          name='description'
          content='Kuhns Tree Service has over 35 years of experience in tree trimming 
          and removal services. Call us today for a free estimate!'
        ></meta>
      </Head>
      <Hero backgroundImage={heroBg} text='About Us' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>Over 35 Years of Experience</h2>
          <p className='pb-5'>
            Kuhn's Tree Service is your friend in the industry to help with all
            the necessary tree services you need to protect your landscaping and
            home from potential danger. We pride ourselves on quality,
            commitment, and dedication to proper tree care at an affordable
            price. For more than three decades, residents in Maryland have
            entrusted our employees to help keep their trees living their best
            life and safeguarding your home from potential issues with falling,
            dead, or diseased branches. Reach out to our team today to let us
            inspect and diagnose your tree. We can then get to work developing a
            personalized treatment plan to help them live longer or remove and
            take care of the Green Waste in an environmentally friendly way.
          </p>
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <div className='h- relative'>
        <Image src={trucks} alt='Picture of Kuhns trucks' layout='responsive' />
      </div>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='my-5 grid grid-cols-1 gap-14 md:grid-cols-2'>
          <div className='flex flex-col gap-4 text-left md:pt-5'>
            <h3>Kuhn's Tree Service Offers Complete Tree Care</h3>
            <p>
              When the leaves don't return in the spring or you are noticing
              more fallen twigs in your yard as you mow, it may be time to call
              Kuhn's Tree Service for help. Our experts have studied the
              diseases affecting trees and their treatments. Equipped with
              industry-leading tools, trucks, and the experience required to
              quickly take care of your trees' needs. We've been helping
              properties in the area for the past 35 years! Below are some of
              the tree services you can expect for our crew:
            </p>
            <ul className='list-disc pl-10'>
              <li className='mb-1'>Tree Removal</li>
              <li className='mb-1'>Tree Pruning</li>
              <li className='mb-1'>Landscaping</li>
              <li className='mb-1'>Storm Damage</li>
              <li className='mb-1'>And Many More</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4 text-left md:pt-5'>
            <h3>Clients We Serve in Maryland</h3>
            <p>
              We aim to help the homes and offices in the area with whatever
              tree services they need, when they need them most. You can call on
              us day or night, and our team members will be on their way to cut,
              trim, remove, and more. Previous customers include:
            </p>
            <ul className='list-disc pl-10'>
              <li className='mb-1'>Homeowners</li>
              <li className='mb-1'>Apartment Complexes</li>
              <li className='mb-1'>Construction Companies</li>
              <li className='mb-1'>Property Management Companies</li>
              <li className='mb-1'>Insurance Companies</li>
              <li className='mb-1'>Homeowners Association</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-3xl'>
        <h3 className='pb-5'>No Storm Stands in Our Way</h3>
        <p>
          24 hours a day, 7 days a week, our staff is prepared to assist by
          bringing our experience, tools, and knowledge to your door. Following
          a storm, emergency services are imperative to ensure your staff and
          family stay safe from falling limbs weakened by the heavy winds, rain,
          or snow we experience throughout the year.
        </p>
      </SectionWrapper>

      <ContactForm background='bg-[#f7f7f7]' />
    </>
  );
}
