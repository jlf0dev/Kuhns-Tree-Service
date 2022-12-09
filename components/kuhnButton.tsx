import Link from 'next/link';

interface ButtonProps {
  href: string;
  text: string;
  center?: boolean;
  onClick?: any;
}
// having a shadow on a button with hover
// breaks on mobile. Using a div wrapper is a workaround.
export default function KuhnButton({
  href,
  text,
  center,
  onClick,
}: ButtonProps) {
  return (
    <div className={`my-10 h-fit w-fit shadow-xl ${center ? 'mx-auto' : ''} `}>
      <Link href={href}>
        <a
          onClick={e => {
            if (onClick && typeof onClick === 'function') onClick(e);
          }}
          className='inline-block bg-kuhn-light-green py-4 px-8 text-lg text-white hover:bg-[#1b381f]'
        >
          {text}
        </a>
      </Link>
    </div>
  );
}
