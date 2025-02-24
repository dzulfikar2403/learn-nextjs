import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Link href={'/feed'} className="bg-stone-200  font-semibold text-lg rounded px-4 py-1">Feed</Link>
    </div>
  );
}
