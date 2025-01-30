import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="w-full py-4">
      <nav className="px-4 py-2 flex justify-between items-center">
        <Link href={"/"} className="text-xl font-bold">
          NewsLetter
        </Link>
        <div className="flex gap-2 items-center">
          <Navlink href="/news">News</Navlink>
          <Navlink href="/archive">Archive</Navlink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
