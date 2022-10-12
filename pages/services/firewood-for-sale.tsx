import Head from "next/head";
import ContactForm from "../../components/contactForm";
import Hero from "../../components/hero";
import KuhnButton from "../../components/kuhnButton";
import SectionWrapper from "../../components/sectionWrapper";
import heroBg from "../../public/kuhn-discount-hero.jpg";

export default function FirewoodForSale() {
  return (
    <>
      <Head>
        <title>Firewood For Sale | Kuhn's Tree Service</title>
      </Head>
      <Hero backgroundImage={heroBg} text="Firewood For Sale" />

      <SectionWrapper className="lg:max-w-3xl">
        <div className="pb-5">
          <p>
            Mixed hardwood is now available for purchase in cord and half cord
            volumes.
          </p>
        </div>
        <div className="pb-5">
          <p>
            A “cord” is a unit of measure for dry volume to measure firewood.
            This amount of firewood when stacked is 4 feet high x 8 feet long x
            4 feet deep.
          </p>
        </div>
        <div className="pb-5">
          <p className="font-bold">Firewood Pricing</p>
          <ul>
            <li>1 cord: $275</li>
            <li>1/2 cord: $175</li>
            <li>Delivery fee: $70</li>
            <li>Stacking 1 cord: $75</li>
            <li>Stacking 1/2 cord: $50</li>
          </ul>
        </div>
        {/* <div className="pb-5">
          <p>Stacking is also available for an additional fee.</p>
        </div> */}
        <div className="pb-5">
          <p>
            Call us today at{" "}
            <a
              href="tel:301-384-4724"
              className="text-kuhn-light-green hover:text-black"
            >
              301-384-4724
            </a>{" "}
            for more information or to schedule your firewood delivery today!
          </p>
        </div>
        <KuhnButton href="/contact" text="Contact Us" center />
      </SectionWrapper>

      <ContactForm background="bg-[#f7f7f7]" />
    </>
  );
}
