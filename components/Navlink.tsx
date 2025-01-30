"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavlinkProps = {
  href: string;
  children: React.ReactNode;
};

const Navlink = ({ href, children }: NavlinkProps) => {
  const path = usePathname();
  
  return (
    <Link href={href} className={path.startsWith(href) ? "text-base font-semibold px-2 py-1 transition-all ease-linear duration-150  rounded  bg-slate-100 text-slate-900" : "text-base font-semibold px-2 py-1 transition-all ease-linear duration-150  rounded  hover:bg-slate-100 hover:text-slate-900"}>
      {children}
    </Link>
  );
};

export default Navlink;
