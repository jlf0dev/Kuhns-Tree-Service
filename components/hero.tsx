import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface HeroProps {
  backgroundImage: StaticImageData
  text: string
}
export default function Hero({ backgroundImage, text }: HeroProps) {
  return (
    <>
      <div className='h-72 w-full bg-[#0000008a]'>
        <div className='relative h-72'>
          <Image
            src={backgroundImage}
            alt='Picture of Trees'
            className='-z-10'
            layout='fill'
            objectFit='cover'
            height={100}
            placeholder='blur'
            priority
          />
          <div className='z-10 grid h-full place-items-center'>
            <h1 className='text-white'>{text}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
