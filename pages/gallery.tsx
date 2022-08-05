import Head from "next/head";
import Link from "next/link";
import Hero from "../components/hero";
import SectionWrapper from "../components/sectionWrapper";
import heroBg from "../public/kuhn-gallery-hero.jpg";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Professional Tree Services Gallery | Kuhn's Tree Service</title>
      </Head>
      <Hero backgroundImage={heroBg} text="Gallery" />

      <SectionWrapper className="lg:max-w-3xl">
        <div className="flex flex-col">
          <h2 className="pt-5 pb-10">
            Previous Tree Services Throughout Maryland
          </h2>
          <p className="pb-5">
            Check out our gallery of previous jobs we've completed throughout
            Maryland. Each customer is 100 percent satisfied with the tree
            services received. Please reach out today to get your free estimate
            and discuss the tree services we can help you with at your home or
            office.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
