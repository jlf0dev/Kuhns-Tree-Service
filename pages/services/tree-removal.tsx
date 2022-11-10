import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../../components/hero';
import SectionWrapper from '../../components/sectionWrapper';
import heroBg from '../../public/kuhn-removal-hero.jpg';
import removal from '../../public/kuhn-tree-removal.jpg';
import ContactForm from '../../components/contactForm';
import KuhnButton from '../../components/kuhnButton';

export default function TreeRemoval() {
  return (
    <>
      <Head>
        <title>Professional Tree Removal | Kuhn's Tree Service</title>
      </Head>
      <Hero backgroundImage={heroBg} text='Tree Removal' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>
            Leave Tree Removal to the Professionals
          </h2>
          <p className='pb-5'>
            For over 35 years, Kuhn's Tree Service has been the team to call
            when you need tree removal services at your home or surrounding your
            office. This is a job you should leave to the professionals. Trying
            to do this yourself can have disastrous results for your health,
            home, or office. If you have an issue with trees, please give us a
            call to speedily get to your home to begin our assessment. Each tree
            deserves personalized attention because they all grow in unique
            ways. They all showcase different characteristics and go through
            hibernation and blossom periods in a variety of manners and time
            periods. Our team carries the training and knowledge to know when
            and how to remove a tree.
          </p>
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='my-5 grid grid-cols-1 gap-14 md:grid-cols-2'>
          <div className='grid place-items-center'>
            <Image src={removal} alt='Picture of chainsaw cutting tree' />
          </div>
          <div className='order-last flex flex-col justify-center gap-4 text-left md:-order-none md:pt-5'>
            <h3>Signs and Steps for Tree Removal</h3>
            <p>
              While some trees may look unhealthy, they may not need to be
              removed and could need special treatment instead. The
              professionals at Kuhn's Tree Service know exactly when it's time
              to say, “TIMBER!” Trees often have to be removed when they become
              diseased, such as an oak dying from golden-spotted oak borer
              damage, or the roots have caused structural damage to your
              foundation or sidewalks. We begin this multi-step process by
              removing the limbs to limit the reach of the tree. We then cut the
              trunk down and finish by removing the stump from the ground.
              Because of the size of some older trees, the project can produce
              quite a bit of wood and foliage waste removal becomes a
              significant part of the process. Kuhn's Tree Service is unique in
              the way we handle this Green Waste. You can either ask us for the
              wood to be created into stacked cords for fire building, mulching,
              or we will handle it in another environmentally friendly way.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-3xl'>
        <h3 className='pb-5'>Experience Where It Counts</h3>
        <p>
          ot only should you have a professional team remove your tree when
          needed, but you need an experienced one. Our team has helped Maryland
          with these services for more than 35 years Within this time we have
          been able to train our staff on traditional and modern methods and
          work with industry-leading tools. We keep your property and trees safe
          by handling effectively and efficiently. Thanks to our cutting-edge
          technology, there is no tree we can't handle! Removing the stump is
          also included in this service because of the necessity, we don't
          consider it a separate service.
        </p>
      </SectionWrapper>

      <ContactForm background='bg-[#f7f7f7]' />
    </>
  );
}
