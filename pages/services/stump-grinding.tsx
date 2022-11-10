import Head from 'next/head';
import Image from 'next/image';
import ContactForm from '../../components/contactForm';
import Hero from '../../components/hero';
import KuhnButton from '../../components/kuhnButton';
import SectionWrapper from '../../components/sectionWrapper';
import heroBg from '../../public/kuhn-about-hero.jpg';
import stumpGrinding from '../../public/kuhn-stump-grinding-full.jpg';

export default function StumpGrinding() {
  return (
    <>
      <Head>
        <title>Stump Grinding Services | Kuhn's Tree Service</title>
        <meta
          name='description'
          content='Call Kuhns Tree Service for professional stump grinding services
          in your area. We offer free estimates and are fully insured.'
        ></meta>
      </Head>
      <Hero backgroundImage={heroBg} text='Stump Grinding' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>
            Stump Grinding Services from Kuhn's Tree Service
          </h2>
          <p className='pb-5'>
            Other companies' stump grinding services tend to come as a separate
            service from the tree removal. When this is the case, trust Kuhn's
            Tree Service to get the job done correctly. With the right tools,
            education, and experience, we handle these types of tree services
            efficiently. It is an essential service if you have a tree removed
            from your property, if you are looking to landscape, or just don't
            want a hazard in your yard while you mow. The Kuhn's team is in your
            corner to help protect you by bringing affordable stump grinding
            services to your area. Give us a call today for a free estimate, and
            be sure to browse our discounts section for even more savings!
          </p>
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <div className='relative'>
        <Image
          src={stumpGrinding}
          alt='Picture of stump grinding'
          layout='responsive'
        />
      </div>

      <SectionWrapper className='lg:max-w-3xl'>
        <h3 className='pb-5'>Why Choose Kuhn's Tree Service</h3>
        <p>
          Not only do we have the right tools, but the Kuhn's Tree Service team
          can help you when you need us most. We offer 24/7 emergency tree
          services for those in Maryland. This includes stump grinding,
          trimming, removal, and more. Our experienced staff works quickly to
          make your space safe and beautiful again.
        </p>
      </SectionWrapper>

      <ContactForm background='bg-[#f7f7f7]' />
    </>
  );
}
