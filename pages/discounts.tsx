import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/hero'
import Image from 'next/image'
import SectionWrapper from '../components/sectionWrapper'
import heroBg from '../public/kuhn-discount-hero.jpg'
import crew from '../public/kuhn-crew-working.jpg'
import ContactForm from '../components/contactForm'
import KuhnButton from '../components/kuhnButton'

export default function Discounts() {
  return (
    <>
      <Head>
        <title>
          Discounts Available for Maryland Customers | Kuhn's Tree Service
        </title>
      </Head>
      <Hero backgroundImage={heroBg} text='Discounts' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>Affordable Tree Services in Maryland</h2>
          <p className='pb-5'>
            Kuhn's Tree Service does what we can to help the community look it's
            best, whether it takes shape as tree trimming, removal, stump
            grinding, snow removal, and so much more. We also do so in an
            affordable way. When you are in need of our team, make sure you
            browse through our current specials and discounts to help save
            yourself even more money by working with our experienced,
            professionally trained, and well-equipped team members. No matter
            how big or small the job, we get it done efficiently, effectively
            and done right the first time.
          </p>
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='my-5 grid grid-cols-1 gap-14 md:grid-cols-2'>
          <div className='grid place-items-center'>
            <Image src={crew} alt='Picture of crew removing trees' />
          </div>
          <div className='order-last flex flex-col justify-center gap-4 text-left md:-order-none md:pt-5'>
            <h3>Discounts Currently Available from Kuhn's Tree Service</h3>
            <p>
              Below are some of the special discounts we offer for our stellar
              tree services. Keep in mind there will be a delivery fee for the
              cords, and the discounts available cannot be combined. Please let
              us know if you have any other questions during your free estimate
              and consultation.
            </p>
            <ul className='list-disc pl-10'>
              <li className='mb-1'>5% off for senior citizens</li>
              <li className='mb-1'>5% off for active military</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <ContactForm background='bg-white' />
    </>
  )
}
