import type { NextPage } from 'next';
import { useState } from 'react';
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
import { NextSeo } from 'next-seo';
import Script from 'next/script';

const Home: NextPage = () => {
  const [showMore, setShowMore] = useState(false);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kuhn's Tree Service",
    "image": "https://www.kuhnstreeservice.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKuhnsTreeService_logo.88f64daf.png&w=1920&q=75",
    "@id": "",
    "url": "https://www.kuhnstreeservice.com/",
    "telephone": "301-384-4724",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PO BOX 4178",
      "addressLocality": "Silver Spring",
      "addressRegion": "MD",
      "postalCode": "20914",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.08,
      "longitude": -77
    },
    "sameAs": "https://www.facebook.com/kuhnstreeservices/"
  };

  return (
    <>
      {/* Page specific SEO, shared tags are set in _app.tsx */}
      <NextSeo
        title='Professional Tree Services in Silver Spring, MD | 24-Hour Emergency Tree Services'
        description="When you need professional tree services at your home in the Silver Spring area, call on Kuhn's Tree Service. We have the experience and tools for the job! Kuhn's Tree Service is fully licensed and insured."
      />

      <Script
        id="structured-data"
        type="application/ld+json"
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

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
          <div className='relative z-10 mx-auto grid h-full w-[90%] max-w-[90%] place-items-center md:bottom-10 lg:bottom-20 lg:max-w-7xl'>
            <h1>Call Today for a Free Tree Service Estimate</h1>
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
          <div className='relative z-10 mx-auto flex w-[90%] max-w-[90%] flex-col items-center gap-y-10 py-9 md:flex-row lg:max-w-6xl'>
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
            35 years. Our team has removed trees and their stumps, trimmed,
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
        <div className='flex flex-col gap-3 text-left'>
          <h2 className='py-5'>Kuhn's Tree Service</h2>
          <p>
            When you need tree trimming or tree removal in Maryland, trust
            Kuhn's Tree Service.
          </p>
          <p>
            We’ve been proudly serving our community for over 35 years. We do
            more than just cut trees. We also offer emergency services and green
            waste solutions, making us the go-to crew for all of your
            tree-related projects.
          </p>
          <p>
            We take pride in what we do, and it’s our goal to ensure that every
            homeowner, business owner, and property manager in Silver Springs
            has healthy, safe, and well-maintained trees.
          </p>

          {showMore && (
            <>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Tree Services
              </h3>
              <p>
                Trees offer many benefits to homeowners, businesses, and
                communities, but they must be properly cared for throughout
                their lives.
              </p>
              <p>
                When trees die or become sick or structurally compromised, they
                may need to come down. To this end, Kuhns Tree Services provides
                tree trimming and tree removal in Maryland.
              </p>
              <h4 className='py-2'>Tree Removal</h4>
              <p>
                When it comes to tree removal in Maryland, not just anyone can
                perform the job. Trees need to be carefully inspected and
                sometimes documented before removal. The state of Maryland has
                statewide and local ordinances intended to protect trees, and
                violating these ordinances can result in hefty fines.
              </p>
              <p>
                In addition, removing a diseased tree requires special
                expertise. Diseased trees always run the risk of spreading to
                other nearby trees and plants. Tree diseases are sometimes hard
                to spot without a trained eye.
              </p>
              <p>
                That’s why it’s never recommended to attempt tree removal
                yourself. We’ve responded to countless emergency calls due to
                DIY jobs gone wrong.
              </p>
              <p>
                The experts at Kuhn's Tree Service always perform a thorough
                inspection prior to starting a job. If you aren’t sure what to
                do with your tree, we’ll tell you whether you need a full
                removal and advise you on your various options. We’re here to
                help you make an informed decision that’s right for your home or
                business.
              </p>
              <p>
                We also take the time to plan properly for the removal. Simply
                cutting down a tree without a plan for where it will fall or how
                to remove it after can be a recipe for disaster.
              </p>
              <p>
                Rest assured that when you work with us, your trees are in good
                hands.
              </p>
              <h4 className='py-2'>Stump Grinding</h4>
              <p>
                The job of tree removal is often not complete without stump
                grinding. Stump grinding removes every last trace of the stump
                that’s left behind after a tree has been cut down. It leaves the
                area with a clean slate that blends in with the surrounding
                environment.
              </p>
              <p>
                If you hire a company for a removal service and they don’t
                remove the stump, it can leave the job feeling incomplete. Stump
                grinding may also be necessary if you’re trying to make room for
                new landscaping.
              </p>
              <p>
                There are several ways to get rid of the stump left behind after
                a tree has been cut down. Unfortunately, attempting a DIY
                removal or hiring a contractor without the proper grinding tools
                can leave the area looking ragged and unattractive. Even worse,
                it can ruin equipment like lawnmowers and weed eaters when roots
                start to re-sprout.
              </p>
              <p>
                As part of our tree removal services, we offer stump grinding to
                ensure the tree is completely gone and prevent resprouting.
                Grinding with the proper tools is the only way to completely get
                rid of the stump.
              </p>
              <p>
                If you’ve had a tree cut down in the past, we also offer
                standalone stump grinding services and can take care of any
                unsightly stumps that have been left behind on your property.
              </p>
              <p>
                Properly removing a stump isn’t an easy task. Leave it to the
                experts at Kuhn’s to get it done right the first time.
              </p>
              <h4 className='py-2'>Tree Trimming</h4>
              <p>
                Many homeowners and property managers have a
                plant-it-and-forget-it attitude toward the trees on their
                property. While it’s true that trees don’t require a lot of
                maintenance compared to other plants, most need to be trimmed at
                least every three to five years.
              </p>
              <p>
                Routine maintenance and tree trimming not only leaves your trees
                looking nice, but it helps promote healthy growth. Without
                trimming, a tree can easily become unbalanced, which can
                eventually put the structural integrity of the tree at risk.
              </p>
              <p>
                When a tree starts growing in an unruly way, it can be difficult
                to correct. In addition, letting your trees grow wild can make
                them more prone to breakage in the event of a destructive
                weather event, putting your property at risk.
              </p>
              <p>
                Finally, trees that receive regular maintenance have a longer
                life than those that are neglected. Trees are an investment
                worth protecting, and tree trimming is the best way to do that.
              </p>
              <p>
                If you can’t remember the last time you scheduled a professional
                tree trimming service, you’re probably overdue. Give your trees
                the love they deserve by scheduling a trimming service with
                Kuhn’s.
              </p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Our Clients</h3>
              <p>
                Tending to trees in residential settings is very different from
                looking after those on commercial properties. Zoning
                regulations, HOA rules, and business disruptions must all be
                considered, making routine care tedious and difficult.
              </p>
              <p>
                Luckily, Kuhn’s specializes in both residential and commercial
                tree services. Some of our many customers include:
              </p>
              <ul className='list-disc pl-10'>
                <li className='mb-1'>Homeowners</li>
                <li className='mb-1'>Construction companies</li>
                <li className='mb-1'>Apartment complexes</li>
                <li className='mb-1'>Homeowners associations</li>
                <li className='mb-1'>Insurance companies</li>
                <li className='mb-1'>Property management companies</li>
              </ul>
              <p>
                Whether you need a single tree removed or have a large
                commercial complex that requires maintenance, we’ve got you
                covered.
              </p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Environmentally Conscious Tree Trimming and Removal
              </h3>
              <p>
                Many people don’t think of the tree service industry as a
                wasteful one, but servicing trees can produce a lot of excess
                waste. Cut trees, trimming, and stumps often end up in
                landfills, and many trees that are cut down for aesthetic
                reasons are not recycled or replanted.
              </p>
              <p>
                Tree removal and tree trimming in Maryland are part of the
                natural life cycle of nature. But even necessary tree
                maintenance isn’t always environmentally friendly.
              </p>
              <p>
                We knew we could do better, so we developed a removal and
                recycling program that’s more environmentally conscious than
                most tree services. We eliminated this kind of waste from our
                tree services by using it to create new products.
              </p>
              <p>For example, our waste has been used to craft:</p>
              <ul className='list-disc pl-10'>
                <li className='mb-1'>Picnic tables</li>
                <li className='mb-1'>Benches</li>
                <li className='mb-1'>Bird houses</li>
                <li className='mb-1'>Adirondack chairs</li>
                <li className='mb-1'>Flooring</li>
                <li className='mb-1'>Custom-cut lumber</li>
              </ul>
              <p>
                Instead of going into a landfill to rot, our tree waste gets a
                new life and goes on to live for many more years. Items made
                from our recycled wood are truly one of a kind. When you choose
                to work with Kuhn’s, you can take advantage of premium tree
                removal or tree trimming in Maryland without feeling guilty that
                you’re wasting precious plant life.
              </p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                24-Hour Emergency Tree Services
              </h3>
              <p>
                Weather events like lightning strikes, ice storms, and heavy
                winds can all take a toll on your property’s trees. Sometimes,
                damage can lead to disrupted electrical wires, broken windows,
                or damaged property and infrastructure.
              </p>
              <p>
                When a tree or limb falls, it doesn’t always happen during
                normal business hours. Leaving a fallen tree or limb on wires or
                a building can cause further damage. That’s why Kuhn’s offers
                24-hour emergency tree services. We’re available around the
                clock seven days a week to respond to emergency tree situations.
              </p>
              <p>
                Our response team is ready to deploy trucks, cranes, chippers,
                and other equipment to get the job done as soon as you need us.
              </p>

              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Serving the Community for 35 Years
              </h3>
              <p>
                Kuhn’s Tree Services is proud to be a family-operated,
                women-owned local business. We’ve been serving our community for
                more than three decades. In that time, we’ve worked hard to earn
                our reputation as the most dependable tree service company in
                the area.
              </p>
              <p>
                We’re committed to providing quality service at an affordable
                price without any of the hassles that come with the big national
                companies. These services typically aren’t as familiar with the
                local environment and ordinances, and they can be more difficult
                to reach if something goes wrong.
              </p>
              <p>
                At Kuhn’s, we stay current on the latest tree developments in
                Silver Springs and surrounding areas. Whether it’s an emerging
                tree disease or a new preservation ordinance, rest assured that
                our staff has done their homework. And since we’re in the
                neighborhood, you always know where to find us for any lingering
                questions or follow-up work.
              </p>
              <p>
                Our crew strives to provide top-tier service for each and every
                one of our clients. Whether you need a small trim, large-scale
                tree removal services, or something in between, we’re ready to
                help. Call us today to talk to one of our friendly team members
                and get a free estimate.
              </p>
            </>
          )}
          <KuhnButton
            href=''
            text={showMore ? 'Show Less' : 'Read More'}
            center
            onClick={(e: any) => {
              e.preventDefault();
              setShowMore(!showMore);
            }}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-white'>
        <h3 className='text-kuhn-light-green'>Tree Services Gallery</h3>
        <div className='grid grid-cols-1 gap-10 pt-11 pb-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-20'>
          <ImageFrame url={gallery1} />
          <ImageFrame url={gallery2} />
          <ImageFrame url={gallery3} />
          <ImageFrame url={gallery4} />
        </div>
        <KuhnButton href='/gallery' text='See Gallery' center />
      </SectionWrapper>

      <ContactForm background='bg-[#f7f7f7]' />
    </>
  );
};

export default Home;
