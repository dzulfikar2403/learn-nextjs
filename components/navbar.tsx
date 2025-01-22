"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  
  return (
    <div className="py-2 px-4 mx-auto mt-2 flex justify-evenly font-semibold items-center bg-white border-2 text-black border-teal-600 shadow-lg shadow-teal-500 rounded-xl w-2/6">
      <Link href={"/meals"} className={path.startsWith("/meals") ? "transition-all border-b border-teal-400": undefined}>Meals</Link>
      <Link href={"/"}><Image src="/images/logo-meals.png" alt="logo" width={40} height={40} priority /></Link>
      <Link href={"/community"} className={path === "/community" ? "transition-all  border-b border-teal-400": undefined} >Community</Link>
    </div>
  );
};

export default Navbar;
