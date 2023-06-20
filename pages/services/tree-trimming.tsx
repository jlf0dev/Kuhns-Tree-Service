import Image from 'next/image';
import Hero from '../../components/hero';
import SectionWrapper from '../../components/sectionWrapper';
import heroBg from '../../public/kuhn-trimming-hero.jpg';
import saw from '../../public/kuhn-saw-branch.jpg';
import ContactForm from '../../components/contactForm';
import KuhnButton from '../../components/kuhnButton';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

export default function TreeTrimming() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <NextSeo
        title='Residential & Commercial Tree Trimming Service in Silver Spring, MD'
        description="We provide residential and commercial tree trimming services in Silver Spring, Maryland. Keep your trees looking great and healthy with Kuhn's Tree Service. Call us today!"
      />

      <Hero
        backgroundImage={heroBg}
        text='Residential & Commercial Tree Trimming Services'
        alt='Person cutting a tree branch with a chainsaw.'
      />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>Tree Trimming from Kuhn's Tree Service</h2>
          <p className='pb-5'>
            When you work with Kuhn's Tree Service, you can expect high-quality residential and commercial tree trimming services and professionalism unparalleled in the industry. For more than 25 years, we've been helping residents and
            businesses in Maryland take care of their trees and keep them
            looking their best. What is tree trimming exactly? Tree trimming is
            when we systematically removed certain branches for aesthetic or
            health reasons. Whether you need more light around your lawn or
            house, you have trees branching out where they shouldn't be, or you
            wish for your trees to grow stronger and healthier, our team can
            assess their needs and your wants to provide you with short- and
            long-term tree trimming programs. If you think you need our help,
            then it's time to give us a call. Our team comes to your house to
            help assess and diagnose the trees and then create a personalized
            treatment plan to help them live longer, better lives, and retain
            their aesthetic.
          </p>
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='my-5 grid grid-cols-1 gap-14 md:grid-cols-2'>
          <div className='grid place-items-center'>
            <Image src={saw} alt='Picture of chainsaw cutting tree' />
          </div>
          <div className='order-last flex flex-col justify-center gap-4 text-left md:-order-none md:pt-5'>
            <h2>Tree trimming Service for Homes and Businesses</h2>
            <p>
              Our team has not only the knowledge, but the proper tools to
              ensure we deliver the best tree trimming services in Maryland. We
              train our staff in traditional and contemporary methods, while
              providing them the tools necessary to get the job done efficiently
              and effectively. If you have questions about the process or why we
              decided to remove certain branches, please ask! Our team is more
              than happy to explain in detail the process and reasoning behind
              our tree trimming services. Count on us for the following:
            </p>
            <div className='grid grid-cols-2'>
              <ul className='list-disc pl-10'>
                <li className='mb-1'>Deadwood Removal</li>
                <li className='mb-1'>Tree Shaping</li>
                <li className='mb-1'>Roof or Building Clearance</li>
                <li className='mb-1'>Crown Thinning and Reduction</li>
                <li className='mb-1'>Weight Reduction</li>
              </ul>
              <ul className='list-disc pl-10'>
                <li className='mb-1'>Shaping</li>
                <li className='mb-1'>Vista Pruning</li>
                <li className='mb-1'>Crown Raising</li>
                <li className='mb-1'>Crown Cleaning</li>
                <li className='mb-1'>Tree Restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-3xl'>
        <h3 className='pb-5'>Emergency Tree Trimming Services</h3>
        <p>
          Kuhn's Tree Service is at the ready whenever you need assistance with
          tree trimming services. Available 24/7, we can be there at a moment's
          notice to get rid of fallen, broken, or dead branches at your home or
          office. Heavy wind, rain, and snow storms can cause major damage to
          your trees which can also affect the safety of your home. If you
          notice there are potentially dangerous limbs, let us know so we can
          help before they become a major issue.
        </p>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='flex flex-col gap-3 text-left'>
          <h2 className='py-5'>Maryland Commercial & Residential Tree Trimming Service</h2>
          <p>
            Trees are a valuable and essential element of any property in Maryland. In addition to providing shade, strategically-planted and well-maintained trees add a hefty dose of natural beauty to your property and help elevate its curb appeal and property value. At Kuhn's Tree Service, we are proud to be the premier provider of tree care services for businesses and families in Silver Springs, MD, and the surrounding areas.
          </p>
          {showMore && (
            <>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Residential Tree Trimming Services that Keep Your Family Safe</h3>
              <p>As one yourself, you are more than aware that homeowners have many responsibilities to juggle. Unfortunately, those obligations cause many homeowners to put proper tree care on the back burner, despite periodic trims and pruning being necessary to keep your trees happy and healthy.</p>
              <p>If you're like most homeowners, you simply don't have the time or equipment to give your trees the care they require. That's where Kuhn's Tree Service comes in. Our residential tree-trimming experts are proud to help keep your trees healthy and your family safe by removing overhanging or sagging branches that may pose safety risks.</p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Commercial Tree Trimming Services that Work for Your Business</h3>
              <p>When it comes to commercial tree trimming, we understand that the appearance of your property is an important factor in attracting and maintaining clients. That's why we are proud to provide comprehensive tree care services to help maintain your company's professional appearance.</p>
              <p>At Kuhn's Tree Service, we will work with you to create a personalized care plan and schedule that meets the specific needs of your business by assessing your trees' current condition and discussing what kind of goals you hope to achieve.</p>
              <p>Whether your storefront has a few small oaks that you want to properly care for as they age or your property is lined with towering cypresses that you want to make more welcoming, we will create a plan that works for you.</p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Our Residential and Commercial Tree Trimming Services</h3>
              <p>You can likely tell when it's time to give us a call just by taking a look at your trees, but you may not know which service to request when you reach out to the team. Of course, if you aren't sure which tree-trimming services are right for you, our team will help you determine what is best for your property. Regardless, here's a quick rundown of the various types of tree-trimming services we provide:</p>
              <h4 className='pt-10 pb-5'>Deadwood Removal</h4>
              <p>Deadwood removal involves removing dead or decaying limbs and branches from trees, which is done as a preventive measure to stave off tree decay, pest infestations, and various tree diseases. Deadwood removal also improves the appearance of the tree and prevents any dead limbs from becoming safety hazards.</p>
              <h4 className='pt-10 pb-5'>Tree Shaping</h4>
              <p>Tree shaping can be tricky business, but it's incredibly rewarding when done properly. As the name suggests, tree shaping involves the pruning and trimming of branches to create a specific shape or form, and it is often done to increase aesthetic appeal or conform to a specific style. The process requires a high degree of precision and attention to detail that all of our commercial and residential tree-trimming experts proudly possess.</p>
              <h4 className='pt-10 pb-5'>Roof or Building Clearance</h4>
              <p>Tree branches that have grown up against your roof or another part of your building can pose serious safety risks. In the event of serious storms or heavy winds, branches that are too close may cause property damage.</p>
              <p>That's why, no matter what kind of property you own, it's essential to keep a healthy clearance around your property's building and roof. Our team will ensure your property has proper space on all sides to help minimize the risk of damage in the event of extreme weather.</p>
              <h4 className='pt-10 pb-5'>Crown Thinning and Reduction</h4>
              <p>Crown thinning helps increase air circulation and light penetration by removing a small number of short branches in the crown of the tree, which is essential for your tree's health and look.</p>
              <p>Crown reduction involves removing some of the larger branches to reduce the overall size of the tree. Compared to thinning, crown reduction may be necessary when a tree has not been trimmed or maintained for a while and has become too big or unruly for your property.</p>
              <h4 className='pt-10 pb-5'>Crown Raising</h4>
              <p>If the trees on your property have branches that hang too low, crown raising may be what you're looking for. During crown raising, our experts remove branches that are too low to help increase the clearance around the tree. Crown raising can help improve the appearance of the tree and create more space for people to walk underneath and around the tree.</p>
              <h4 className='pt-10 pb-5'>Crown Cleaning</h4>
              <p>Dead, diseased, and damaged branches can accumulate at the crown of the tree, way beyond your reach, but our crown cleaning services make simple work of these pesky branches to help improve the overall appearance and health of the tree.</p>
              <h4 className='pt-10 pb-5'>Weight Reduction</h4>
              <p>Weight reduction helps keep trees healthy by reducing the amount of stress on the tree. Branches that are too heavy will weigh down your tree and pose a higher risk of snapping. We can strategically identify and locate problematic branches and swiftly remove them before they cause damage to the rest of the tree or your property.</p>
              <h4 className='pt-10 pb-5'>Vista Pruning</h4>
              <p>If your property is in a picturesque area, we can use strategic vista pruning to frame specific views or open up to a particular area. Vista pruning usually involves removing branches to improve the view from a particular location, but we can also use this technique to add some excitement and beauty to an otherwise boring landscape.</p>
              <h4 className='pt-10 pb-5'>Tree Restoration</h4>
              <p>If your tree needs a little more TLC than just a simple pruning, our tree restoration services can help you restore some of your property's natural beauty. Whether a storm has damaged your tree and left it lopsided, or if years of neglect have caused it to become overgrown or misshapen, we will help restore its natural form and appearance.</p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Why Are Professional Tree Trimming Services Better than DIY Efforts?</h3>
              <p>Many homeowners think they can care for their trees themselves, but there are several reasons why it's better to turn to residential and commercial tree trimming experts to maintain your landscape's aesthetic.</p>
              <p>For starters, trimming trees can be dangerous work, especially if you're dealing with large branches or trees that are close to power lines or other vital or dangerous structures. Our team of commercial and tree-trimming experts is trained in the proper techniques and best practices for all of these scenarios.</p>
              <p>Additionally, most homeowners don't have the knowledge and level of expertise necessary to identify various tree ailments, but perhaps most importantly, most homeowners do not have the proper equipment to undertake big trimming jobs. Our team is fully equipped with everything we need to get the job done and dispose of any debris and uses the appropriate safety equipment to ensure that the job is completed safely.</p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Why Our Team Is Right for the Job</h3>
              <p>Whether you're a homeowner interested in residential tree-trimming services or a business owner looking for commercial tree-trimming services, you can expect the same great quality of care from Kuhn's Tree Service.</p>
              <h4 className='pt-10 pb-5'>Safety Is Always Our Top Priority</h4>
              <p>At Kuhn's Tree Service, safety is our top priority. Our team is equipped with the latest safety equipment and follows all industry safety standards to ensure that every job is completed safely and efficiently.</p>
              <p>We are fully licensed and insured, so you can trust us to handle all of your tree care needs with the highest level of professionalism. We use the latest techniques and equipment to ensure that all of our work is completed safely and efficiently.</p>
              <h4 className='pt-10 pb-5'>We're There When You Need Us</h4>
              <p>We know that life doesn't always go the way you plan. Thunderstorms and hurricanes don't care about "business hours." That's why, in addition to residential tree trimming and commercial tree trimming, we are proud to provide 24-hour emergency services for all of our customers. When life throws you a curveball in the form of a downed tree, you can rest easy knowing Kuhn's Tree Service is just a phone call away.</p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Request an Estimate Today</h3>
              <p>If you're interested in any of our commercial or residential tree trimming services, give us a call today to request an honest and upfront estimate.</p>
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

      <ContactForm background='bg-[#f7f7f7]' />
    </>
  );
}
