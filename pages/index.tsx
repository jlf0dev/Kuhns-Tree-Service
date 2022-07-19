import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/KuhnsTreeService_logo.png";
import hero from "../public/kuhns-hero.jpg";
import leavesBg from "../public/kuhn-leaves-bg.jpg";
import woodBg from "../public/kuhn-wood-bg.jpg";
import trimming from "../public/kuhns-tree-trimming.jpg";
import grinding from "../public/kuhns-stump-grinding.jpg";
import removal from "../public/kuhns-tree-removal.jpg";
import fallen from "../public/kuhns-tree-fallen.jpg";
import gallery1 from "../public/kuhn-gallery-1.jpg";
import gallery2 from "../public/kuhn-gallery-2.jpg";
import gallery3 from "../public/kuhn-gallery-3.jpg";
import gallery4 from "../public/kuhn-gallery-4.jpg";
import ContactForm from "../components/contactForm";

const Home: NextPage = () => {
  return (
    <>
      {/* Top Bar with Phone Number */}
      <div className="w-full bg-kuhn-green">
        <div className="max-w-6xl m-auto grid grid-cols-2 text-white py-1">
          <p className="pl-7 text-sm">Operating for Over 35 Years</p>
          <p className="text-right text-sm">301-384-4724</p>
        </div>
      </div>

      {/* Navbar */}
      <div className="max-w-6xl m-auto h-fit py-5 flex flex-wrap justify-between items-center">
        <div className="w-72">
          <Link href="/">
            <a className="flex items-center">
              <Image src={logo} alt="Kuhns Tree Service" />
            </a>
          </Link>
        </div>
        <ul className="flex flex-col md:flex-row justify-between items-center uppercase font-bold text-sm gap-6">
          <li className="">
            <Link href="/" className="">
              <a className="">About Us</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/about">
              <a className="h-full grid place-items-center">Services</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/about">
              <a className="h-full grid place-items-center">Discounts</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/menu">
              <a className="h-full grid place-items-center">Gallery</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/menu">
              <a className="h-full grid place-items-center">Testimonials</a>
            </Link>
          </li>
          <li className="h-11">
            <Link href="/menu">
              <a className="h-full grid place-items-center">Contact Us</a>
            </Link>
          </li>
          {/* <li className="w-full h-11 md:h-fit">
            <Link href="/contact" className="text-[#ffba00] md:text-black">
              <a className="md:bg-[#ffba00] clipped-button md:text-black md:py-2 md:px-5 md:uppercase md:hover:bg-black md:hover:text-slate-50 md:font-bold h-full grid place-items-center">
                Contact
              </a>
            </Link>
          </li> */}
        </ul>
      </div>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <div className="w-full min-h-fit text-slate-50 ">
          <div className="relative h-10 pt-[15%] pb-[20%]">
            <Image
              src={hero}
              alt="Picture of Kuhns trucks"
              className="-z-10"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="flex-grow flex flex-col items-center justify-center max-w-7xl mx-auto z-10 relative bottom-20">
              <h1 className="text-white uppercase pb-10">
                Call today for a free estimate
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="relative h-fit">
            <Image
              src={leavesBg}
              alt="Background picture of leaves"
              className="-z-10"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="max-w-6xl mx-auto py-12 z-10 relative grid grid-cols-2">
              <p className="text-white uppercase text-left text-xl font-bold">
                Tree services delivered with the earth in mind
              </p>
              <div className="text-right">
                <a
                  href="tel:301-384-4724"
                  className="bg-[#639c4d] text-white py-4 px-8 hover:bg-[#1b381f] text-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl flex flex-col py-10">
          <h2 className="py-10">
            More Than 35 Years of Serving Your Community
          </h2>
          <p className="pb-5">
            When you need tree services in Maryland, there is only one team to
            call. Kuhn's Tree Service has been helping residents for more than
            35 years our team has removed tree and their stumps, trimmed,
            planted, and more. We've become a reliable source for post-storm
            cleanup, as heavy winds, rain, and snow can all break limbs or split
            trees. We also help healthy trees get the attention they need to
            keep providing your front or backyard with cooling shade. Simply
            give us a call to discuss the issues and let our team provide the
            answers you need today.
          </p>
          <p className="pb-5">
            Kuhn's Tree Service is fully licensed and insured.
          </p>
          <div className="py-10">
            <Link href="/menu">
              <a className="bg-[#639c4d] text-white py-4 px-8 hover:bg-[#1b381f] text-lg shadow-xl">
                Learn More
              </a>
            </Link>
          </div>
        </div>

        <div
          className="h-fit w-full py-10"
          style={{ backgroundImage: `url(${woodBg.src})` }}
        >
          <div className="max-w-6xl mx-auto">
            <h3 className="py-4">
              Tree Services Available from Kuhn's Experts
            </h3>
            <p className="pb-5 text-center">
              Our team of tree professionals not only get the work you need
              accomplished, but we do so with the environment in mind. Our
              safety practices help get rid of the Green Waste created from our
              tree services by using it to craft picnic tables, Adirondack
              chairs, benches, bird houses, flooring, and custom cut lumber of
              any size or dimension. If you are unsure of the issues with your
              tree, simply give us a call and our experts will inspect and check
              on the health of your tree's limbs and trunk. We will let you know
              what we can do to help or if the tree needs removed entirely.
              Trust our tree service technicians to accomplish the following
              when you need us most:
            </p>
            <div className="grid grid-cols-3 gap-24 text-white my-5">
              <div className="pb-2 bg-[#244b29] hover:bg-[#639c4d] shadow-xl">
                <Image src={trimming} alt="Picture of tree trimming" />
                <h5 className="text-white">Tree Trimming</h5>
              </div>
              <div className="pb-2 bg-[#244b29] hover:bg-[#639c4d] shadow-xl">
                <Image src={removal} alt="Picture of tree removal" />
                <h5 className="text-white">Tree Removal</h5>
              </div>
              <div className="pb-2 bg-[#244b29] hover:bg-[#639c4d] shadow-xl">
                <Image src={grinding} alt="Picture of stump grinding" />
                <h5 className="text-white">Stump Grinding</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl grid grid-cols-2 gap-14 my-5">
          <div className="text-left flex flex-col gap-4 justify-center pt-5">
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
            <div className="py-10">
              <Link href="/menu">
                <a className="bg-[#639c4d] text-white py-4 px-8 hover:bg-[#1b381f] text-lg shadow-xl">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          <div>
            <Image src={fallen} alt="Picture of a tree fallen on a house" />
          </div>
        </div>

        <div className="bg-[#f7f7f7] w-full h-full py-10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[#639c4d]">Tree Services Gallery</h3>
            <div className="grid grid-cols-4 gap-20 py-11">
              <div>
                <Image
                  src={gallery1}
                  alt="Picture of a tree removal"
                  width={276}
                  height={276}
                />
              </div>
              <div>
                <Image
                  src={gallery2}
                  alt="Picture of a fallen tree"
                  width={276}
                  height={276}
                />
              </div>
              <div>
                <Image
                  src={gallery3}
                  alt="Picture of Kuhn's Tree Service crew"
                  width={276}
                  height={276}
                />
              </div>
              <div>
                <Image
                  src={gallery4}
                  alt="Picture of crew removing tree next to house"
                  width={276}
                  height={276}
                />
              </div>
            </div>
            <div className="py-10">
              <Link href="/menu">
                <a className="bg-[#639c4d] text-white py-4 px-8 hover:bg-[#1b381f] text-lg shadow-xl">
                  View More
                </a>
              </Link>
            </div>
          </div>
        </div>

        <ContactForm />
      </main>

      <footer className="flex h-24 w-full items-center justify-center bg-kuhn-green text-white">
        © 2022 Kuhn's Tree Service. All Rights Reserved.
      </footer>
    </>
  );
};

export default Home;
