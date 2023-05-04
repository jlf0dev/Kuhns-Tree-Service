import Image from 'next/image';
import Hero from '../../components/hero';
import SectionWrapper from '../../components/sectionWrapper';
import heroBg from '../../public/kuhn-removal-hero.jpg';
import removal from '../../public/kuhn-tree-removal.jpg';
import ContactForm from '../../components/contactForm';
import KuhnButton from '../../components/kuhnButton';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

export default function TreeRemoval() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <NextSeo
        title='Commercial & Residential Tree Removal Service in Silver Spring, MD'
        description="We offer commercial & residential tree removal services to the communities of Maryland and surrounding cities. Request an estimate today!"
      />

      <Hero
        backgroundImage={heroBg}
        text='Residential & Commercial Tree Removal Services'
        alt='Man using a chainsaw to removal big tree limbs'
      />

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
        <h3 className='pb-5'>Experience When it Counts</h3>
        <p>
          Not only should you have a professional team remove your tree when
          needed, but you need an experienced one. Our team has helped Maryland
          with these services for more than 35 years. Within this time we have
          been able to train our staff on traditional and modern methods and
          work with industry-leading tools. We keep your property and trees safe
          by handling effectively and efficiently. Thanks to our cutting-edge
          technology, there is no tree we can't handle!
        </p>
      </SectionWrapper>

      <SectionWrapper className='lg:max-w-6xl' background='bg-[#f7f7f7]'>
        <div className='flex flex-col gap-3 text-left'>
          <h2 className='py-5'>Maryland Commercial & Residential Tree Removal Service</h2>
          <p>If your property has trees, there may come a time when they need to be removed. Proper care and maintenance can help extend a tree's life, but there are several reasons why a tree may need to be removed from your property.</p>

          <p>Whether you're concerned about foundation damage to your home or business, unsightly stumps detracting from your curb appeal, or spreading tree disease, you'll need a team with a high level of precision, knowledge, and experience to handle the problem. At Kuhn's Tree Service, we are proud to be that team.</p>
          {showMore && (
            <>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>Our Tree Removal Services</h3>
              <p>We know that unwanted trees are a problem for many Silver Springs residents and businesses. While some companies specialize in just one area, we have provided comprehensive tree removal services for both commercial and residential properties since 1985.</p>
              <p>So no matter where you need our services, we'll be there with expert solutions and excellent customer service.</p>
              <h4 className='pt-10 pb-5'>Residential Tree Removal</h4>
              <p>Many Maryland homes have one or more trees in their yards. Some homeowners choose to plant ornamental trees to enhance the natural beauty of their yards, while others landscape around existing trees that were there when they moved in.</p>
              <p>Regardless of what kind of trees are on your property, our residential tree removal services are a lifeline when you need them gone. Whether you need a mid-size maple tree removed or a large overbearing oak tree, our team is ready for any job.</p>
              <h4 className='pt-10 pb-5'>Commercial Tree Removal</h4>
              <p>If you manage one or more commercial properties in Maryland, you already know the impact that landscaping can have on business. A well-manicured lawn and well-maintained, shapely trees can create a welcoming and professional atmosphere.</p>
              <p>On the other hand, drooping, leaning, or rotting trees may send the wrong message. It may appear that you don't really care about your property.</p>
              <p>
                If your property has trees that are detracting from its overall image or posing a safety threat, it's important to address the issue as soon as possible. Our comprehensive commercial tree removal services make it easy to get rid of unwanted trees and refresh your property.</p>
              <h3 className='pt-10 pb-5 text-kuhn-light-green'>When Should You Call Tree Removal Experts?</h3>
              <p>Knowing when to call tree removal experts is just as important as knowing who to call. If you notice any of the following issues on a tree on your property, it's time to give Kuhn's Tree Service a call. Our experts will swiftly diagnose and remedy the issue, no matter how challenging or technical it may be.</p>
              <h4 className="pt-10 pb-5">A Tree Is Too Close to Building Structures</h4>
              <p>A common problem homeowners and property managers face is trees that are growing too close to building structures. Perhaps you planted a sapling near your building that grew much bigger than you anticipated, and now the adult tree is encroaching on your property's foundation.</p>
              <p>Trees that are too close to building structures may cause foundation damage as the roots grow or significant structural damage if they fall. If you suspect a tree is too close to your home or business, residential or commercial tree removal may be a good idea.When a Tree Begins to Lean
              </p>
              <p>Trees may lean slightly as they age, but healthy trees should not lean significantly or suddenly. As such, if a tree on your property is leaning heavily toward one side, it's a good indicator there is an underlying problem with the roots, and the tree should be removed.</p>
              <p>Our team of experts can assess the severity of your tree's leaning and help you find the best solution. Full removal is not always necessary.</p>
              <h4 className="pt-10 pb-5">There Is Visible Rot</h4>
              <p>A tree may begin to rot when a fungal disease enters the tree through a damaged section of the bark. A rotting tree is usually easy to spot. Telltale signs of rot include a hollow trunk, large holes or cracks in the bark, and fungi growing around the base.</p>
              <p>Once a tree begins to rot, not much can be done to save it. It's best to turn to commercial or residential tree removal services before the fungus spreads to other trees.</p>
              <h4 className="pt-10 pb-5">Branches Are Frequently Falling</h4>
              <p>It's normal for trees to lose branches occasionally. However, if you notice a particular tree seems to be losing a lot of branches, it's time to call Kuhn's Tree Service.</p>
              <p>Frequently falling branches may indicate damage somewhere in the tree due to disease or a pest infestation. Both of these problems need to be addressed swiftly to prevent them from spreading.</p>
              <h4 className="pt-10 pb-5">Overcrowding Is Stunting Other Plant Growth</h4>
              <p>If you have several tall trees on your property, they may create a dense canopy that blocks the sunlight from reaching the grass and other plants around the trees.</p>
              <p>The result is a gradual decline in vegetation until the surrounding soil is completely bare, except for leaves and twigs from the trees. In Maryland, this damp, shady environment is also the perfect environment for mold and algae.</p>
              <p>At Kuhn's Tree Service, we strategically pick the best trees for removal to combat overcrowding and allow more sunlight to help other vegetation flourish.</p>
              <h4 className="pt-10 pb-5">You See Bare Branches Year Round</h4>
              <p>Bare branches are no cause for concern in the fall or winter, but if your leaf-producing trees remain bare throughout spring and summer, something is amiss. Bare branches are often one of the first signs a tree has reached the end of its life due to pest or storm damage or simply old age.</p>
              <p>If your tree has bare branches, this could indicate that the tree is no longer thriving and would likely benefit from our commercial or residential tree removal.</p>
              <h4 className="pt-10 pb-5">There Is Significant Damage to the Crown or Trunk</h4>
              <p>It's normal for trees to experience mild damage during storms. Healthy trees can recover from mild damage. But significant damage to the crown or trunk can leave the tree vulnerable to several problems, including disease, infestation, and falling. As such, significant tree damage typically necessitates removal.</p>
              <p>In general, a tree should be removed if 50% or more of it is damaged. However, every tree is unique. Our experts will assess the damage and make the appropriate treatment recommendations.</p>
              <h4 className="pt-10 pb-5">You Spot an Invasive Species</h4>
              <p>Many invasive species start out as exotic ornamental pieces that quickly out-compete local flora. If you see an invasive species of tree on your property, it should be removed as soon as possible. Some of the invasive trees we battle with in Maryland include:</p>
              <ul className='list-disc pl-10'>
                <li>Japanese Angelica</li>
                <li>Autumn Olive</li>
                <li>Bradford Pear</li>
                <li>Princess Tree</li>
                <li>Tree of Heaven</li>
              </ul>
              <p>If you see any of these trees around your home or business, give us a call for speedy residential and commercial tree removal services.</p>
              <h4 className="pt-10 pb-5">It's in the Way of a New Development</h4>
              <p>If you're planning a new outdoor development — such as an in-ground pool, outdoor kitchen, or gazebo — it may not be possible to build around the trees in your yard.</p>
              <p>Additionally, trees around the development may need to be removed to allow construction vehicles to access the area. Our residential tree removal services make it easy to start your project with a blank slate.</p>
              <h4 className="pt-10 pb-5">It's Growing Under a Power Line</h4>
              <p>Trees and power lines never mix. If you see a tree growing on your property directly under or nearby a power line, it's best to remove it before it grows large enough to come in direct contact with the power line.</p>
              <p>This can be a particularly challenging task and should always be left to the professionals. At Kuhn's Tree Service, our team of experts has the extensive training and experience required to tackle tricky jobs like this.</p>
              <h3 className="pt-10 pb-5 text-kuhn-light-green">Leave Tree Removal to the Professionals</h3>
              <p>For over 35 years, Kuhn's Tree Service has been the team to call when you need tree removal services at your home or surrounding your office. This is a job you should leave to the professionals. Trying to do this yourself can have disastrous results for your health, home, or office. If you have an issue with trees, please give us a call to speedily get to your home to begin our assessment. Each tree deserves personalized attention because they all grow in unique ways. They all showcase different characteristics and go through hibernation and blossom periods in a variety of manners and time periods. Our team carries the training and knowledge to know when and how to remove a tree.</p>
              <h4 className="pt-10 pb-5">Signs and Steps for Tree Removal</h4>
              <p>While some trees may look unhealthy, they may not need to be removed and could need special treatment instead. The professionals at Kuhn's Tree Service know exactly when it's time to say, “TIMBER!” Trees often have to be removed when they become diseased, such as an oak dying from golden-spotted oak borer damage, or the roots have caused structural damage to your foundation or sidewalks. We begin this multi-step process by removing the limbs to limit the reach of the tree. We then cut the trunk down and finish by removing the stump from the ground. Because of the size of some older trees, the project can produce quite a bit of wood and foliage waste removal becomes a significant part of the process. Kuhn's Tree Service is unique in the way we handle this Green Waste. You can either ask us for the wood to be created into stacked cords for fire building, mulching, or we will handle it in another environmentally friendly way.</p>
              <h4 className="pt-10 pb-5">Experience When it Counts</h4>
              <p>Not only should you have a professional team remove your tree when needed, but you need an experienced one. Our team has helped Maryland with these services for more than 35 years. Within this time we have been able to train our staff on traditional and modern methods and work with industry-leading tools. We keep your property and trees safe by handling effectively and efficiently. Thanks to our cutting-edge technology, there is no tree we can't handle!</p>
              <h4 className="pt-10 pb-5">Commercial and Residential Tree Removal in Silver Springs</h4>
              <p>At Kuhn's Tree Service, we know the stress that leaning trees and overhanging branches can cause for businesses and homeowners. That's why we remain dedicated to providing communities of Maryland and surrounding cities with professional and reliable residential and commercial tree removal services.</p>
              <p>Whether you know for sure a tree on your property needs to be removed, or you're looking for an expert opinion, you can count on Kuhn's Tree Service to be there when you need us. Give us a call or fill out our simple online form to request an estimate today!</p>
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
