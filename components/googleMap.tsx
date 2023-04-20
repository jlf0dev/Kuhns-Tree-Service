import SectionWrapper from "./sectionWrapper";

interface GoogleMapProps {
    background: string;
}

export default function GoogleMap({ background }: GoogleMapProps) {
    return (
        <SectionWrapper className='lg:max-w-6xl' background={background}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d166591.18435529203!2d-77.01502266571981!3d39.11805785294287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7da9aaaaaaaab%3A0xd1315f5687a39734!2sKuhn&#39;s%20Tree%20Service%2C%20Inc.!5e0!3m2!1sen!2sus!4v1681752730150!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </SectionWrapper>
    );
}
