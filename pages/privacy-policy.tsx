import { NextSeo } from 'next-seo';
import Hero from '../components/hero';
import SectionWrapper from '../components/sectionWrapper';
import heroBg from '../public/kuhn-wood-hero.jpg';

export default function PrivacyPolicy() {
  return (
    <>
      <NextSeo
        title='Privacy Policy'
        description='Kuhns Tree Service privacy policy. We do not sell or share your personal information.'
      />

      <Hero backgroundImage={heroBg} text='Privacy Policy' />

      <SectionWrapper className='text-left lg:max-w-7xl'>
        <div className='mb-10'>
          <p className='mb-10 font-bold'>Last updated August 17, 2022</p>
          <p className='mb-3'>
            This privacy notice for Kuhn's Tree Service ("Company," "we," "us,"
            or "our"), describes how and why we might collect, store, use,
            and/or share ("process") your information when you use our services
            ("Services"), such as when you:
          </p>
          <ul className='mb-3 list-disc pl-10'>
            <li className='mb-1'>
              <p>
                Visit our website at kuhnstreeservice.com, or any website of
                ours that links to this privacy notice
              </p>
            </li>
            <li className='mb-1'>
              <p>
                Engage with us in other related ways, including any sales,
                marketing, or events
              </p>
            </li>
          </ul>
          <p>
            Questions or concerns? Reading this privacy notice will help you
            understand your privacy rights and choices. If you do not agree with
            our policies and practices, please do not use our Services. If you
            still have any questions or concerns, please contact us at
            kuhnstreeservice@gmail.com.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5'>SUMMARY OF KEY POINTS</h3>
          <p className='mb-5'>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for.{' '}
          </p>

          <p className='mb-5'>
            <span className='font-bold'>
              What personal information do we process?
            </span>{' '}
            When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with Kuhn's Tree
            Service and the Services, the choices you make, and the products and
            features you use. Click{' '}
            <a href='#collect' className='text-kuhn-light-green'>
              here{' '}
            </a>
            to learn more.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>
              Do we receive any information from third parties?
            </span>{' '}
            We do not receive any information from third parties.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>
              How do we process your information?
            </span>{' '}
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent. We process your information only
            when we have a valid legal reason to do so. Click{' '}
            <a href='#process' className='text-kuhn-light-green'>
              here
            </a>{' '}
            to learn more.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>
              In what situations and with which types of parties do we share
              personal information?
            </span>{' '}
            We may share information in specific situations and with specific
            categories of third parties. Click{' '}
            <a href='#share' className='text-kuhn-light-green'>
              here
            </a>{' '}
            to learn more.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>
              How do we keep your information safe?
            </span>{' '}
            We have organizational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure, so we cannot promise or guarantee
            that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect,
            access, steal, or modify your information. Click{' '}
            <a href='#security' className='text-kuhn-light-green'>
              here
            </a>{' '}
            to learn more.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>What are your rights?</span> Depending
            on where you are located geographically, the applicable privacy law
            may mean you have certain rights regarding your personal
            information. Click{' '}
            <a href='#rights' className='text-kuhn-light-green'>
              here
            </a>{' '}
            to learn more.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>How do you exercise your rights?</span>{' '}
            The easiest way to exercise your rights is by contacting us. We will
            consider and act upon any request in accordance with applicable data
            protection laws. information.
          </p>
          <p className='mb-5'>
            Want to learn more about what Kuhn's Tree Service does with any
            information we collect? Click{' '}
            <a href='#process' className='text-kuhn-light-green'>
              here
            </a>{' '}
            to review the notice in full.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='toc'>
            TABLE OF CONTENTS
          </h3>
          <ul>
            <li className='mb-5'>
              <a href='#collect' className='text-kuhn-light-green'>
                1. WHAT INFORMATION DO WE COLLECT?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#process' className='text-kuhn-light-green'>
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#share' className='text-kuhn-light-green'>
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#tracking' className='text-kuhn-light-green'>
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#keep' className='text-kuhn-light-green'>
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#security' className='text-kuhn-light-green'>
                6. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#rights' className='text-kuhn-light-green'>
                7. WHAT ARE YOUR PRIVACY RIGHTS?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#controls' className='text-kuhn-light-green'>
                8. CONTROLS FOR DO-NOT-TRACK FEATURES
              </a>
            </li>
            <li className='mb-5'>
              <a href='#california' className='text-kuhn-light-green'>
                9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#updates' className='text-kuhn-light-green'>
                10. DO WE MAKE UPDATES TO THIS NOTICE?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#contact' className='text-kuhn-light-green'>
                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </a>
            </li>
            <li className='mb-5'>
              <a href='#review' className='text-kuhn-light-green'>
                12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='collect'>
            1. WHAT INFORMATION DO WE COLLECT?
          </h3>
          <div className='mb-2'>
            <h4 className='mb-5'>Personal information you disclose to us</h4>
            <p className='mb-5'>
              <span className='font-bold'>In Short:</span> We collect personal
              information that you provide to us.
            </p>
            <p className='mb-5'>
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and Services, when you participate in activities on
              the Services, or otherwise when you contact us.
            </p>
            <p className='mb-5'>
              Personal Information Provided by You. The personal information
              that we collect depends on the context of your interactions with
              us and the Services, the choices you make, and the products and
              features you use. The personal information we collect may include
              the following:
            </p>
            <ul className='mb-5 list-disc pl-10'>
              <li className='mb-1'>
                <p>names</p>
              </li>
              <li className='mb-1'>
                <p>phone numbers</p>
              </li>
              <li className='mb-1'>
                <p>email addresses</p>
              </li>
              <li className='mb-1'>
                <p>mailing addresses</p>
              </li>
              <li className='mb-1'>
                <p>contact preferences</p>
              </li>
            </ul>
            <p className='mb-5'>
              <span className='font-bold'>Sensitive Information.</span> We do
              not process sensitive information.
            </p>
            <p className='mb-5'>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </div>
          <div className='mb-2'>
            <h4 className='mb-5'>Information automatically collected</h4>
            <p className='mb-5'>
              <span className='font-bold'>In Short:</span> Some information —
              such as your Internet Protocol (IP) address and/or browser and
              device characteristics — is collected automatically when you visit
              our Services.
            </p>
            <p className='mb-5'>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p className='mb-5'>
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </p>
            <p className='mb-5'>The information we collect includes:</p>

            <ul className='mb-5 list-disc pl-10'>
              <li className='mb-1'>
                <p>
                  <span className='italic'>Log and Usage Data.</span> Log and
                  usage data is service-related, diagnostic, usage, and
                  performance information our servers automatically collect when
                  you access or use our Services and which we record in log
                  files. Depending on how you interact with us, this log data
                  may include your IP address, device information, browser type,
                  and settings and information about your activity in the
                  Services (such as the date/time stamps associated with your
                  usage, pages and files viewed, searches, and other actions you
                  take such as which features you use), device event information
                  (such as system activity, error reports (sometimes called
                  "crash dumps"), and hardware settings).
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='process'>
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> We process your
            information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to
            comply with law. We may also process your information for other
            purposes with your consent.
          </p>
          <p className='mb-5 font-bold'>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <ul className='mb-5 list-disc pl-10'>
            <li className='mb-1'>
              <p>
                <span className='font-bold'>
                  To deliver and facilitate delivery of services to the user.
                </span>{' '}
                We may process your information to provide you with the
                requested service.
              </p>
            </li>
            <li className='mb-1'>
              <p>
                <span className='font-bold'>
                  To fulfill and manage your orders.
                </span>{' '}
                We may process your information to fulfill and manage your
                orders, payments, returns, and exchanges made through the
                Services.
              </p>
            </li>
            <li className='mb-1'>
              <p>
                <span className='font-bold'>
                  To evaluate and improve our Services, products, marketing, and
                  your experience.
                </span>{' '}
                We may process your information to fulfill and manage your
                orders, payments, returns, and exchanges made through the
                Services.
              </p>
            </li>
            <li className='mb-1'>
              <p>
                <span className='font-bold'>To identify usage trends.</span> We
                may process information about how you use our Services to better
                understand how they are being used so we can improve them.
              </p>
            </li>
            <li className='mb-1'>
              <p>
                <span className='font-bold'>
                  To determine the effectiveness of our marketing and
                  promotional campaigns.
                </span>{' '}
                We may process your information to better understand how to
                provide marketing and promotional campaigns that are most
                relevant to you.
              </p>
            </li>
          </ul>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='share'>
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> We may share
            information in specific situations described in this section and/or
            with the following categories of third parties.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>
              Vendors, Consultants, and Other Third-Party Service Providers.
            </span>{' '}
            We may share your data with third-party vendors, service providers,
            contractors, or agents ("third parties") who perform services for us
            or on our behalf and require access to such information to do that
            work. The categories of third parties we may share personal
            information with are as follows:
          </p>
          <ul className='mb-5 list-disc pl-10'>
            <li className='mb-1'>
              <p>Data Analytics Services</p>
            </li>
          </ul>

          <p className='mb-5'>
            We also may need to share your personal information in the following
            situations:
          </p>
          <ul className='mb-5 list-disc pl-10'>
            <li className='mb-1'>
              <p>
                <span className='font-bold'>Business Transfers.</span> We may
                share or transfer your information in connection with, or during
                negotiations of, any merger, sale of company assets, financing,
                or acquisition of all or a portion of our business to another
                company.
              </p>
            </li>
          </ul>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='tracking'>
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> We may use cookies and
            other tracking technologies to collect and store your information.
          </p>
          <p className='mb-5'>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='keep'>
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> We keep your
            information for as long as necessary to fulfill the purposes
            outlined in this privacy notice unless otherwise required by law.
          </p>
          <p className='mb-5'>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than 90 days.
          </p>
          <p className='mb-5'>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='security'>
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> We aim to protect your
            personal information through a system of organizational and
            technical security measures.
          </p>
          <p className='mb-5'>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='rights'>
            7. WHAT ARE YOUR PRIVACY RIGHTS?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> You may review, change,
            or terminate your account at any time.
          </p>
          <p className='mb-5'>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your local data protection supervisory
            authority. You can find their contact details{' '}
            <a
              href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'
              className='text-kuhn-light-green'
            >
              here
            </a>
            .
          </p>
          <p className='mb-5'>
            If you are located in Switzerland, the contact details for the data
            protection authorities are available{' '}
            <a
              href='https://www.edoeb.admin.ch/edoeb/en/home.html'
              className='text-kuhn-light-green'
            >
              here
            </a>
            .
          </p>
          <p className='mb-5'>
            <span className='font-bold'>Withdrawing your consent:</span> If we
            are relying on your consent to process your personal information,
            which may be express and/or implied consent depending on the
            applicable law, you have the right to withdraw your consent at any
            time. You can withdraw your consent at any time by contacting us by
            using the contact details provided in the section{' '}
            <a href='#contact' className='text-kuhn-light-green'>
              "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
            </a>{' '}
            below.
          </p>
          <p className='mb-5'>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
          </p>
          <p className='mb-5'>
            <span className='font-bold'>Cookies and similar technologies:</span>{' '}
            Most Web browsers are set to accept cookies by default. If you
            prefer, you can usually choose to set your browser to remove cookies
            and to reject cookies. If you choose to remove cookies or reject
            cookies, this could affect certain features or services of our
            Services. To opt out of interest-based advertising by advertisers on
            our Services visit{' '}
            <a
              href='http://www.aboutads.info/choices/'
              className='text-kuhn-light-green'
            >
              http://www.aboutads.info/choices/
            </a>
            .
          </p>
          <p className='mb-5'>
            If you have questions or comments about your privacy rights, you may
            email us at kuhnstreeservice@gmail.com.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='controls'>
            8. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h3>
          <p className='mb-5'>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='california'>
            9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> Yes, if you are a
            resident of California, you are granted specific rights regarding
            access to your personal information.
          </p>
          <p className='mb-5'>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below.
          </p>
          <p className='mb-5'>
            If you are under 18 years of age, reside in California, and have a
            registered account with Services, you have the right to request
            removal of unwanted data that you publicly post on the Services. To
            request removal of such data, please contact us using the contact
            information provided below and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Services,
            but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g., backups, etc.).
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='updates'>
            10. DO WE MAKE UPDATES TO THIS NOTICE?
          </h3>
          <p className='mb-5'>
            <span className='font-bold'>In Short:</span> Yes, we will update
            this notice as necessary to stay compliant with relevant laws.
          </p>
          <p className='mb-5'>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='contact'>
            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h3>
          <p className='mb-5'>
            If you have questions or comments about this notice, you may email
            us at kuhnstreeservice@gmail.com or by post to:
          </p>
          <p>Kuhn's Tree Service</p>
          <p>1206 Briggs Chaney Rd</p>
          <p>Silver Spring, MD 20905</p>
          <p>United States</p>
        </div>
        <div className='mb-10'>
          <h3 className='mb-5' id='review'>
            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h3>
          <p className='mb-5'>
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it. To request to review, update,
            or delete your personal information, please contact
            kuhnstreeservice@gmail.com
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
