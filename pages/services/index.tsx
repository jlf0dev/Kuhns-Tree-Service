import Head from "next/head";
import Link from "next/link";
import Hero from "../../components/hero";
import Image from "next/image";
import SectionWrapper from "../../components/sectionWrapper";
import heroBg from "../../public/kuhn-services-hero.jpg";
import saw from "../../public/kuhn-saw-tree.jpg";
import ContactForm from "../../components/contactForm";

export default function Services() {
  return (
    <>
      <Head>
        <title>Kuhn's Tree Service | Services</title>
      </Head>
      <Hero backgroundImage={heroBg} text="Services" />

      <SectionWrapper className="lg:max-w-3xl">
        <div className="flex flex-col">
          <h2 className="pt-5 pb-10">
            Kuhn's Tree Service Helps Homes and Offices
          </h2>
          <p className="pb-5">
            Our tree services extend well beyond your average neighborhood
            landscaping. We help businesses maintain their property to draw in
            more customers and potential clients. The front of your business
            helps create a first impression, so why not make it look great by
            hiring Kuhn's Tree Service today? We also help homeowners
            experiencing dying or diseased trees. Give your guests something to
            talk about when they come over for your next party by allowing our
            experts to shape and beautify your lawn. Give us a call today to
            start the conversation and to get us to your property to assess,
            diagnose, and develop a game plan for the tree services needed.
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
            <h3>Tree Services from the Experts</h3>
            <p>
              We understand every property is unique and all your individual
              trees require specific knowledge to help treat them. Kuhn's Tree
              Service has been studying traditional and modern methods, tools,
              and practices for all trees in the area for more than 35 years.
              Trust our team to quickly diagnose the issue and to develop a
              treatment plan for your trees to get them living their best life
              quickly. We provide residents and business owners with the
              following tree services:
            </p>
            <ul className="list-disc pl-10">
              <li className="mb-1">Tree Removal</li>
              <li className="mb-1">Tree Pruning</li>
              <li className="mb-1">Stump Grinding</li>
              <li className="mb-1">Landscaping</li>
              <li className="mb-1">Storm Damage</li>
              <li className="mb-1">And So Much More</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="lg:max-w-3xl">
        <h3 className="pb-5">Snow Plowing and Firewood Services</h3>
        <p>
          We figured if we were going to equip our team with big trucks to
          handle tree services, we might as well put a plow on them for the
          Maryland winters. Businesses and homeowners can rely on us to help
          keep their driveways and parking lots clear of snow and ice. We also
          provide our clients with firewood services as a green way to handle
          trees we have to cut down for health or other reasons. We can stack it
          as well for an additional fee. You can either keep the wood from your
          tree we work on or purchase cords from our staff.
        </p>
      </SectionWrapper>

      <ContactForm background="bg-[#f7f7f7]" />
    </>
  );
}
