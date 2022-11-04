import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import hero from "../public/kuhn-hero.jpg";
import leavesBg from "../public/kuhn-leaves-bg.jpg";
import woodBg from "../public/kuhn-wood-bg.jpg";
import trimming from "../public/kuhn-tree-trimming.jpg";
import grinding from "../public/kuhn-stump-grinding.jpg";
import removal from "../public/kuhn-tree-removal.jpg";
import fallen from "../public/kuhn-tree-fallen.jpg";
import gallery1 from "../public/kuhn-gallery-1.jpg";
import gallery2 from "../public/kuhn-gallery-2.jpg";
import gallery3 from "../public/kuhn-gallery-3.jpg";
import gallery4 from "../public/kuhn-gallery-4.jpg";
import ContactForm from "../components/contactForm";
import SectionWrapper from "../components/sectionWrapper";
import KuhnButton from "../components/kuhnButton";
import { ImageFrame } from "./gallery";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Maryland Tree Trimming & Removal Services | Kuhns Tree Service{" "}
        </title>
        <meta
          name="description"
          content="Kuhns Tree Service offers tree trimming and removal services to
          residential and commercial properties in Silver Spring, Maryland. Call
          us today for a free estimate!"
        ></meta>
      </Head>

      {/* Hero */}
      <div className="w-full min-h-fit text-slate-50 bg-[#00000061] md:bg-[#00000026]">
        <div className="relative h-80 lg:h-10 pt-[15%] pb-[20%] md:py-[33%] lg:py-[20%]">
          <Image
            src={hero}
            alt="Picture of Kuhns trucks"
            className="-z-10"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            priority
          />
          <div className="lg:max-w-7xl max-w-[90%] mx-auto z-10 relative lg:bottom-20 grid place-items-center h-full md:bottom-10">
            <h1>Call today for a free estimate</h1>
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
          <div className="lg:max-w-6xl max-w-[90%] mx-auto py-9 z-10 relative flex flex-col md:flex-row gap-y-10 items-center">
            <p className="text-white uppercase md:text-left text-xl font-bold flex-grow">
              Tree services delivered with the earth in mind
            </p>
            <div className="md:text-right">
              <a
                href="tel:301-384-4724"
                className="bg-kuhn-light-green text-white py-4 px-8 hover:bg-[#1b381f] text-lg inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <SectionWrapper className="lg:max-w-3xl">
        <div className="flex flex-col">
          <h2 className="pt-5 pb-10">
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
          <KuhnButton href="/about" text="Who We Are" center />
        </div>
      </SectionWrapper>

      <SectionWrapper className="lg:max-w-6xl" background={woodBg}>
        <h3 className="py-4">Tree Services Available from Kuhn's Experts</h3>
        <p className="pb-5 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-3 md: place-items-center gap-24 text-white my-5">
          <Link href="/services/tree-trimming">
            <div className="pb-2 bg-[#244b29] hover:bg-kuhn-light-green shadow-xl w-fit cursor-pointer">
              <Image src={trimming} alt="Picture of tree trimming" />
              <p className="font-heading text-lg font-bold text-white">
                Tree Trimming
              </p>
            </div>
          </Link>
          <Link href="/services/tree-removal">
            <div className="pb-2 bg-[#244b29] hover:bg-kuhn-light-green shadow-xl w-fit cursor-pointer">
              <Image src={removal} alt="Picture of tree removal" />
              <p className="font-heading text-lg font-bold text-white">
                Tree Removal
              </p>
            </div>
          </Link>
          <Link href="/services/stump-grinding">
            <div className="pb-2 bg-[#244b29] hover:bg-kuhn-light-green shadow-xl w-fit cursor-pointer">
              <Image src={grinding} alt="Picture of stump grinding" />
              <p className="font-heading text-lg font-bold text-white">
                Stump Grinding
              </p>
            </div>
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper className="lg:max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 my-5">
          <div className="text-left flex flex-col gap-4 justify-center md:pt-5 order-last md:-order-none">
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
            <KuhnButton href="/contact" text="Contact Us" />
          </div>
          <div className="grid place-items-center">
            <Image src={fallen} alt="Picture of a tree fallen on a house" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="lg:max-w-6xl" background="bg-[#f7f7f7]">
        <h3 className="text-kuhn-light-green">Tree Services Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 pt-11 pb-3">
          <ImageFrame url={gallery1} />
          <ImageFrame url={gallery2} />
          <ImageFrame url={gallery3} />
          <ImageFrame url={gallery4} />
        </div>
        <KuhnButton href="/gallery" text="See Gallery" center />
      </SectionWrapper>

      <ContactForm background="bg-white" />


      <SectionWrapper className="lg:max-w-3xl ktshome">
        <div className="flex flex-col">
          <h2 className="pt-5 pb-10">
            Kuhn's Tree Service
          </h2>
          <p className="pb-5">When you need tree trimming or tree removal in Maryland, trust Kuhn's Tree Service.</p>
          <p className="pb-5">We&rsquo;ve been proudly serving our community for over 35 years. We do more than just cut trees. We also offer emergency services and green waste solutions, making us the go-to crew for all of your tree-related projects.</p>
          <p className="pb-5">We take pride in what we do, and it&rsquo;s our goal to ensure that every homeowner, business owner, and property manager in Silver Springs has healthy, safe, and well-maintained trees.</p>
          <div id="dots1"></div><div id="more1" class="showmore">
          <h2>Tree Services</h2>
          <p className="pb-5">Trees offer many benefits to homeowners, businesses, and communities, but they must be properly cared for throughout their lives.</p>
          <p className="pb-5">When trees die or become sick or structurally compromised, they may need to come down. To this end, Kuhns Tree Services provides tree trimming and tree removal in Maryland.</p>
          <h3>Tree Removal</h3>
          <p className="pb-5">When it comes to tree removal in Maryland, not just anyone can perform the job. Trees need to be carefully inspected and sometimes documented before removal. The state of Maryland has statewide and local ordinances intended to protect trees, and violating these ordinances can result in hefty fines.</p>
          <p className="pb-5">In addition, removing a diseased tree requires special expertise. Diseased trees always run the risk of spreading to other nearby trees and plants. Tree diseases are sometimes hard to spot without a trained eye.</p>
          <p className="pb-5">That&rsquo;s why it&rsquo;s never recommended to attempt tree removal yourself. We&rsquo;ve responded to countless emergency calls due to DIY jobs gone wrong.</p>
          <p className="pb-5">The experts at Kuhn's Tree Service always perform a thorough inspection prior to starting a job. If you aren&rsquo;t sure what to do with your tree, we&rsquo;ll tell you whether you need a full removal and advise you on your various options. We&rsquo;re here to help you make an informed decision that&rsquo;s right for your home or business.</p>
          <p className="pb-5">We also take the time to plan properly for the removal. Simply cutting down a tree without a plan for where it will fall or how to remove it after can be a recipe for disaster. </p>
          <p className="pb-5">Rest assured that when you work with us, your trees are in good hands.</p>
          <h3>Stump Grinding</h3>
          <p className="pb-5">The job of tree removal is often not complete without stump grinding. Stump grinding removes every last trace of the stump that&rsquo;s left behind after a tree has been cut down. It leaves the area with a clean slate that blends in with the surrounding environment. <br>
           If you hire a company for a removal service and they don&rsquo;t remove the stump, it can leave the job feeling incomplete. Stump grinding may also be necessary if you&rsquo;re trying to make room for new landscaping.</p>
          <p className="pb-5">There are several ways to get rid of the stump left behind after a tree has been cut down. Unfortunately, attempting a DIY removal or hiring a contractor without the proper grinding tools can leave the area looking ragged and unattractive. Even worse, it can ruin equipment like lawnmowers and weed eaters when roots start to re-sprout.</p>
          <p className="pb-5">As part of our tree removal services, we offer stump grinding to ensure the tree is completely gone and prevent resprouting. Grinding with the proper tools is the only way to completely get rid of the stump.</p>
          <p className="pb-5">If you&rsquo;ve had a tree cut down in the past, we also offer standalone stump grinding services and can take care of any unsightly stumps that have been left behind on your property.</p>
          <p className="pb-5">Properly removing a stump isn&rsquo;t an easy task. Leave it to the experts at Kuhn&rsquo;s to get it done right the first time.</p>
          <h3>Tree Trimming</h3>
          <p className="pb-5">Many homeowners and property managers have a plant-it-and-forget-it attitude toward the trees on their property. While it&rsquo;s true that trees don&rsquo;t require a lot of maintenance compared to other plants, most need to be trimmed at least every three to five years.</p>
          <p className="pb-5">Routine maintenance and tree trimming not only leaves your trees looking nice, but it helps promote healthy growth. Without trimming, a tree can easily become unbalanced, which can eventually put the structural integrity of the tree at risk.</p>
          <p className="pb-5">When a tree starts growing in an unruly way, it can be difficult to correct. In addition, letting your trees grow wild can make them more prone to breakage in the event of a destructive weather event, putting your property at risk.</p>
          <p className="pb-5">Finally, trees that receive regular maintenance have a longer life than those that are neglected. Trees are an investment worth protecting, and tree trimming is the best way to do that.</p>
          <p className="pb-5">If you can&rsquo;t remember the last time you scheduled a professional tree trimming service, you&rsquo;re probably overdue. Give your trees the love they deserve by scheduling a trimming service with Kuhn&rsquo;s.</p>
          <h2>Our Clients</h2>
          <p className="pb-5">Tending to trees in residential settings is very different from looking after those on commercial properties. Zoning regulations, HOA rules, and business disruptions must all be considered, making routine care tedious and difficult.</p>
          <p className="pb-5">Luckily, Kuhn&rsquo;s specializes in both residential and commercial tree services. Some of our many customers include:</p>
          <ol>
           <li>Homeowners</li>
           <li>Construction companies</li>
           <li>Apartment complexes</li>
           <li>Homeowners associations</li>
           <li>Insurance companies</li>
           <li>Property management companies</li>
          </ol>
          <p className="pb-5">Whether you need a single tree removed or have a large commercial complex that requires maintenance, we&rsquo;ve got you covered.</p>
          <h2>Environmentally Conscious Tree Trimming and Removal</h2>
          <p className="pb-5">Many people don&rsquo;t think of the tree service industry as a wasteful one, but servicing trees can produce a lot of excess waste. Cut trees, trimming, and stumps often end up in landfills, and many trees that are cut down for aesthetic reasons are not recycled or replanted.</p>
          <p className="pb-5">Tree removal and tree trimming in Maryland are part of the natural life cycle of nature. But even necessary tree maintenance isn&rsquo;t always environmentally friendly.</p>
          <p className="pb-5">We knew we could do better, so we developed a removal and recycling program that&rsquo;s more environmentally conscious than most tree services. We eliminated this kind of waste from our tree services by using it to create new products.</p>
          <p className="pb-5">For example, our waste has been used to craft:</p>
          <ol>
           <li>Picnic tables</li>
           <li>Benches</li>
           <li>Bird houses</li>
           <li>Adirondack chairs</li>
           <li>Flooring</li>
           <li>Custom-cut lumber</li>
          </ol>
          <p className="pb-5">Instead of going into a landfill to rot, our tree waste gets a new life and goes on to live for many more years. Items made from our recycled wood are truly one of a kind. When you choose to work with Kuhn&rsquo;s, you can take advantage of premium tree removal or tree trimming in Maryland without feeling guilty that you&rsquo;re wasting precious plant life.</p>
          <h2>24-Hour Emergency Tree Services</h2>
          <p className="pb-5">Weather events like lightning strikes, ice storms, and heavy winds can all take a toll on your property&rsquo;s trees. Sometimes, damage can lead to disrupted electrical wires, broken windows, or damaged property and infrastructure. </p>
          <p className="pb-5">When a tree or limb falls, it doesn&rsquo;t always happen during normal business hours. Leaving a fallen tree or limb on wires or a building can cause further damage. That&rsquo;s why Kuhn&rsquo;s offers 24-hour emergency tree services. We&rsquo;re available around the clock seven days a week to respond to emergency tree situations.</p>
          <p className="pb-5">Our response team is ready to deploy trucks, cranes, chippers, and other equipment to get the job done as soon as you need us. </p>
          <h2>Serving the Community for 35 Years</h2>
          <p className="pb-5">Kuhn&rsquo;s Tree Services is proud to be a family-operated, women-owned local business. We&rsquo;ve been serving our community for more than three decades. In that time, we&rsquo;ve worked hard to earn our reputation as the most dependable tree service company in the area. </p>
          <p className="pb-5">We&rsquo;re committed to providing quality service at an affordable price without any of the hassles that come with the big national companies. These services typically aren&rsquo;t as familiar with the local environment and ordinances, and they can be more difficult to reach if something goes wrong.</p>
          <p className="pb-5">At Kuhn&rsquo;s, we stay current on the latest tree developments in Silver Springs and surrounding areas. Whether it&rsquo;s an emerging tree disease or a new preservation ordinance, rest assured that our staff has done their homework. And since we&rsquo;re in the neighborhood, you always know where to find us for any lingering questions or follow-up work.</p>
          <p className="pb-5">Our crew strives to provide top-tier service for each and every one of our clients. Whether you need a small trim, large-scale tree removal services, or something in between, we&rsquo;re ready to help. Call us today to talk to one of our friendly team members and get a free estimate.</p></div>
          <button onclick="myFunction1()" id="myBtn1" class="btnreadmore">Read more</button>
          <style type="text/css">
          .showmore {display: none;}
          #dots1, #dots2, #dots3, #dots4, #dots5, #dots6, #dots7{display:none!important;}
          .btnreadmore{
              background: #727272;
              border: 0;
              padding: 7px 20px;
              color: #fff;
              border-radius: 5px;
              margin: 10px 0;
          }
          </style>
          <script type="text/javascript">
          function myFunction1() {
            var dots = document.getElementById("dots1");
            var moreText = document.getElementById("more1");
            var btnText = document.getElementById("myBtn1");

            if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more";
              moreText.style.display = "none";
            } else {
              dots.style.display = "none";
              btnText.innerHTML = "Read less";
              moreText.style.display = "inline";
            }
          }
          </script>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;
