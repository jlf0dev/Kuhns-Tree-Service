import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children, FC } from "react";

type ActiveLinkProps = {
  children: any;
  activeClassName: string;
  href: string;
};

export default function ActiveLink({
  children,
  activeClassName,
  href,
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  const className =
    asPath === href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
}
