import { StaticImageData } from "next/image";

interface SectionWrapperProps {
  className?: string;
  background?: string | StaticImageData;
  children: JSX.Element | JSX.Element[];
}

// A section wrapper
// provide a large screen max width in the className property
// NOTE: Does not use nextjs image tag for background images
export default function SectionWrapper({
  className,
  background,
  children,
}: SectionWrapperProps) {
  if (background) {
    if (typeof background === "string") {
      return (
        <div className={`h-fit w-full ${background}`}>
          <div className={`max-w-[90%] mx-auto py-10 ${className}`}>
            {children}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="h-fit w-full"
          style={{ backgroundImage: `url(${background.src})` }}
        >
          <div className={`max-w-[90%] mx-auto py-10 ${className}`}>
            {children}
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className={`max-w-[90%] mx-auto py-10 ${className}`}>{children}</div>
    );
  }
}
