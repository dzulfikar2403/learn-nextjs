import Link from "next/link";
import logo from "./icon.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center px-4 min-h-screen">
      <div className="flex justify-center flex-col items-center space-y-4 ">
        <div className="relative w-40 h-40 overflow-hidden rounded-lg">
          <Image src={logo.src} alt="A newspaper" fill />
        </div>
        <div className="w-3/4 mx-auto space-y-4 font-semibold text-xl text-center">
          <h1 className="font-extrabold text-2xl">A News Site For The Next Generation</h1>
          <p>Next News is here to deliver you all the latest news - concise & unbiased!</p>

          <p>
            NextNews aims to provide you with the latest news in a concise and unbiased manner. We strive to deliver the news in a way that is easy to understand and to the point. We want to keep you informed without overwhelming you with
            unnecessary information.
          </p>

          <p>We employ a team of dedicated journalists who are committed to delivering the news in a fair and unbiased manner. Our team is passionate about keeping you informed and up to date with the latest news.</p>
        </div>
        <Link href="/news" className="px-4 py-2 bg-slate-200 text-slate-600 rounded-lg font-bold">Read the latest news</Link>
      </div>
    </div>
  );
}
