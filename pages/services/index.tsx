import Hero from '../../components/hero';
import Image from 'next/image';
import { useState } from 'react';
import SectionWrapper from '../../components/sectionWrapper';
import heroBg from '../../public/kuhn-services-hero.jpg';
import saw from '../../public/kuhn-saw-tree.jpg';
import ContactForm from '../../components/contactForm';
import KuhnButton from '../../components/kuhnButton';
import { NextSeo } from 'next-seo';

export default function Services() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <NextSeo
        title='Comprehensive Tree Services in Silver Spring, Maryland | Snow Plowing and Firewood Services'
        description='Our tree services extend well beyond your average neighborhood landscaping. We help businesses maintain their property to draw in more customers and potential clients.'
      />

      <Hero backgroundImage={heroBg} text='Services' />

      <SectionWrapper className='lg:max-w-3xl'>
        <div className='flex flex-col'>
          <h2 className='pt-5 pb-10'>
            Kuhn's Tree Service Helps Homes and Offices
          </h2>
          <p className='pb-5'>
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
          <KuhnButton href='/contact' text='Contact Us' center />
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='my-5 grid grid-cols-1 gap-14 md:grid-cols-2'>
          <div className='grid place-items-center'>
            <Image src={saw} alt='Picture of chainsaw cutting tree' />
          </div>
          <div className='order-last flex flex-col justify-center gap-4 text-left md:-order-none md:pt-5'>
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
            <ul className='list-disc pl-10'>
              <li className='mb-1'>Tree Removal</li>
              <li className='mb-1'>Tree Pruning</li>
              <li className='mb-1'>Stump Grinding</li>
              <li className='mb-1'>And So Much More</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-3xl'>
        <h3 className='pb-5'>Firewood Services</h3>
        <p>
          We also provide our clients with firewood services as a green way to
          handle trees we have to cut down for health or other reasons. We can
          stack it as well for an additional fee. You can either keep the wood
          from your tree we work on or purchase cords from our staff.
        </p>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='flex flex-col gap-3 text-left'>
          <h2 className='py-5'>
            Kuhn's Tree Service - Residential & Commercial Tree Service in
            Maryland
          </h2>
          <p>
            When you need residential or commercial tree service in Maryland,
            call Kuhn’s Tree Service. We’ve been in the business for over 35
            years and have the experience and knowledge to take on any job in
            Silver Spring and surrounding cities.
          </p>
          <p>
            From cutting trees to emergency services to stump grinding, we
            provide comprehensive tree service in Maryland. It is our goal to
            make sure that our community is full of safe and healthy trees.
          </p>
          {showMore && (
            <>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Tree Service in Maryland
              </h3>
              <p>
                Trees can add a lot to a home, business, or community. However,
                they must be properly maintained and cared for to ensure their
                health.
              </p>
              <p>
                Occasionally, trees can become sick and may need to be removed.
                Trees can also become damaged from weather events and may pose a
                risk to surrounding infrastructure. For any of these
                circumstances, Kuhn’s Tree Service provides the highest quality
                tree removal and tree trimming service in Maryland.
              </p>
              <h4 className='py-2'>Tree Removal</h4>
              <p>
                Tree removal in Maryland isn’t as simple as it may seem. Before
                removing a tree, the tree itself and the area needs to be
                thoroughly inspected and, in some cases, documented before
                removal. The state of Maryland has several laws and regulations
                in place to protect trees.
              </p>
              <p>
                Violating these laws, whether intentional or not, can result in
                significant fines. As a home or business owner, the last thing
                you need is a fine hanging over your head for not doing your
                tree homework.
              </p>
              <p>
                If you are dealing with a diseased tree, it is critical that it
                is inspected and handled properly throughout the removal.
                Diseased trees pose a risk to all of the plant life around them.
                If there is one diseased tree on your property, chances are it’s
                not the only one.{' '}
              </p>
              <p>
                The staff at Kuhn’s Tree Service are highly trained and are true
                experts at what they do. Our staff have trained eyes and can
                spot disease and other hazards that the untrained eye will miss.
                Our staff knows what to look for to ensure that all of your
                landscaping is in good health.
              </p>
              <p>
                No matter what the situation on your property is, we always
                recommend calling in an expert for tree removal. We’ve responded
                to many properties to do cleanup when a DIY tree removal did not
                go as planned.
              </p>
              <h4 className='py-2'>Tree Trimming</h4>
              <p>
                If you can’t remember the last time you trimmed your trees, that
                probably means you are overdue. While trees are generally
                low-maintenance plants, they still need to be trimmed every
                three to five years. Trimming trees can make a drastic
                difference in the look of your overall landscaping.
              </p>
              <p>
                However, trimming is just as much about the health of the tree
                as it is about the look of the tree. Trimmed leaves and branches
                promote healthy growth. Without trimming, many trees grow
                unevenly and can eventually become unbalanced.
              </p>
              <p>
                When a tree starts to grow crookedly, this imbalance will
                eventually compromise the integrity of the entire tree and put
                it at risk. Don’t let your trees get to this point. After too
                long without a trim, it can be almost impossible to correct
                unhealthy growth.
              </p>
              <p>
                Trees that receive required trimmings generally last longer than
                those that are left alone. Treat your trees as an investment and
                protect them with the proper maintenance by opting for regular
                tree trimmings.
              </p>
              <p>
                At Kuhn’s Tree Service, our commercial and residential tree
                service includes trimming for just about any type of tree.
                Schedule your trimming service today.
              </p>
              <h4 className='py-2'>Stump Grinding Services</h4>
              <p>
                Our commercial and residential tree service also includes stump
                grinding. Stump grinding is sometimes a skipped step when a tree
                is taken down, but it is the only way to completely remove a
                tree from a property. When you leave the stump, not only is it
                unsightly, but it can prevent other plant life from growing in
                the area.
              </p>
              <p>
                It can be tempting to attempt a stump removal on your own, but a
                botched DIY job can leave the area looking worse than when you
                started. Stump removal can even be dangerous if you don’t have
                the right tools or methods to take it on.
              </p>
              <p>
                In addition, most non-professional stump removal does not take
                up all the roots, and roots will often begin to re-sprout.
              </p>
              <p>
                Kuhn’s Tree Service uses the proper tools to ensure that stumps
                are completely removed, roots and all. When you choose to work
                with us, you’ll have total peace of mind that the job is done
                right the first time.
              </p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Environmentally Conscious Tree Service in Maryland
              </h3>
              <p>
                It is a little-known fact that the tree trimming and removal
                industry can be a wasteful one. When trees and stumps are
                removed, they often end up in landfills. Similarly, tree
                trimmings are often discarded and not recycled.
              </p>
              <p>
                At Kuhn’s Tree Service, we knew there was a better way than
                simply throwing away trees and tree trimmings. We developed a
                recycling program that is one of the most environmentally
                conscious in the industry. We use as much tree waste as possible
                to create new products, such as:
              </p>
              <ul className='list-disc pl-10'>
                <li className='mb-1'>Benches</li>
                <li className='mb-1'>Picnic tables</li>
                <li className='mb-1'>Custom-cut lumber</li>
                <li className='mb-1'>Flooring</li>
                <li className='mb-1'>Chairs</li>
                <li className='mb-1'>Birdhouses</li>
              </ul>
              <p>
                Our recycling program allows Maryland trees to be given a new
                life through other products. Our system conserves space in
                landfills, saves money, and prevents waste. It is a win for our
                customers, the community, and the planet.
              </p>
              <p>
                When we trim your trees or remove a tree, you don’t have to feel
                guilty that you are wasting plant life. You can rest easy
                knowing that it is on its way to a new life.
              </p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Emergency Tree Services
              </h3>
              <p>
                Sometimes tree services just can’t wait. When a weather event
                leads to property damage, road blockage, disrupted electrical
                wires, or other damage, we can be there when you need us.
                Leaving a fallen tree or branch can cause further damage, which
                is why we are on call 24/7.
              </p>
              <p>
                Our staff is available no matter what hour of the day to help
                you through your tree emergency. Our dedicated response team
                will assess the situation and deploy cranes, trucks, and any
                other equipment necessary to get the job done.
              </p>
              <p>
                We know that an unexpected tree event can be a pain. We strive
                to make the process as easy as possible and get your property
                and landscaping back to normal in no time.
              </p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Our Customers
              </h3>
              <p>
                Providing commercial tree service is much different than
                offering residential service. Commercial properties often have
                zoning regulations or HOA rules that must be abided by. In
                addition, when commercial properties have employees or
                customers, business disruptions must be taken into account.
              </p>
              <p>
                We’ve been providing commercial tree service for years and
                appreciate the specific needs of business owners in the
                community. Just a few of our customers include:
              </p>
              <ul className='list-disc pl-10'>
                <li className='mb-1'>Construction companies</li>
                <li className='mb-1'>Apartment complexes</li>
                <li className='mb-1'>HOAs</li>
                <li className='mb-1'>Property management companies</li>
                <li className='mb-1'>Insurance companies</li>
              </ul>
              <p>
                If you have a rare type of tree or a unique landscaping
                situation, we’re always up for the job. Whether you need a
                regular tree trimming, a tree removed, or anything in between,
                we’ve got you covered.
              </p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>
                Kuhn’s Tree Service — Dedicated to Our Community
              </h3>
              <p>
                Kuhn’s Tree Service has been serving the community for over 35
                years. We are a women-owned local business dedicated to
                providing the best commercial and residential tree service in
                the area.
              </p>
              <p>
                We’ve worked hard to earn a reputation for quality and
                dependability. That’s why we have a long list of loyal customers
                that we’ve been serving for years. In addition to quality, we’re
                committed to keeping our prices as affordable as possible.
              </p>
              <p>
                Our presence in the local community means that we are always on
                top of local news and new ordinances that national companies
                aren’t always aware of. If anything goes wrong, you always know
                where to find us. You can get in touch with us long after our
                work is done on your property.
              </p>
              <p>
                Our staff strives to provide the best customer service for every
                client. Whether we are working on a small tree trimming or
                large-scale tree removal, our clients deserve the best. If you
                are unfamiliar with how to best take care of your trees, our
                staff is more than happy to help.
              </p>
              <p>
                To learn more about how we can help with tree services for your
                property, get in touch with us for a free estimate today.
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

      <ContactForm background='bg-white' />
    </>
  );
}
