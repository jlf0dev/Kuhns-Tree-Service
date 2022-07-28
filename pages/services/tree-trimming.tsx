import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "../../components/hero";
import SectionWrapper from "../../components/sectionWrapper";
import heroBg from "../../public/kuhn-trimming-hero.jpg";
import saw from "../../public/kuhn-saw-branch.jpg";
import ContactForm from "../../components/contactForm";

export default function TreeTrimming() {
  return (
    <>
      <Head>
        <title>Kuhn's Tree Service | Tree Trimming</title>
      </Head>
      <Hero backgroundImage={heroBg} text="Tree Trimming" />

      <SectionWrapper className="lg:max-w-3xl">
        <div className="flex flex-col">
          <h2 className="pt-5 pb-10">Tree Trimming from Kuhn's Tree Service</h2>
          <p className="pb-5">
            When you work with Kuhn's Tree Service, you can expect high-quality
            tree trimming services and professionalism unparalleled in the
            industry. For more than 25 years, we've been helping residents and
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
          <div className="py-10">
            <Link href="/contact">
              <a className="bg-kuhn-light-green text-white py-4 px-8 hover:bg-[#1b381f] text-lg shadow-xl">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="lg:max-w-6xl" background="bg-[#f7f7f7]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 my-5">
          <div className="grid place-items-center">
            <Image src={saw} alt="Picture of chainsaw cutting tree" />
          </div>
          <div className="text-left flex flex-col gap-4 justify-center md:pt-5 order-last md:-order-none">
            <h3>Tree Trimming at Homes and Businesses</h3>
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
            <div className="grid grid-cols-2">
              <ul className="list-disc pl-10">
                <li className="mb-1">Deadwood Removal</li>
                <li className="mb-1">Tree Shaping</li>
                <li className="mb-1">Roof or Building Clearance</li>
                <li className="mb-1">Crown Thinning and Reduction</li>
                <li className="mb-1">Weight Reduction</li>
              </ul>
              <ul className="list-disc pl-10">
                <li className="mb-1">Shaping</li>
                <li className="mb-1">Vista Pruning</li>
                <li className="mb-1">Crown Raising</li>
                <li className="mb-1">Crown Cleaning</li>
                <li className="mb-1">Tree Restoration</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="lg:max-w-3xl">
        <h3 className="pb-5">Emergency Tree Trimming Services</h3>
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

      <ContactForm background="bg-[#f7f7f7]" />
    </>
  );
}
