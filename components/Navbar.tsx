import Image from "next/image";
import React from "react";
import icon from "@/app/icon.png";
import Navlink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="w-full max-w-[800px] relative top-0 px-4 py-2 z-10 flex justify-between items-center">
      <div className="relative w-10 h-10 rounded overflow-hidden">
        <Image src={icon} alt="icon" fill />
      </div>
      <div>
        <Navlink href={"/feed"}>Feed</Navlink>
        <Navlink href={"/feed/post"}>New Post</Navlink>
      </div>
    </nav>
  );
};

export default Navbar;
