import ImageSlide from "@/components/ImageSlide";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full grid place-items-center p-4">
      <div className="flex items-center gap-12">
        <div className="w-[400px] h-[400px]">
          <ImageSlide />
        </div>
        <div className="space-y-4">
          <h1 className="uppercase text-teal-400 text-4xl font-bold">
            NextLevel food for <br /> NextLevel foodies
          </h1>
          <p className="font-medium text-lg">Taste & share food from all over the world.</p>
          <div className="flex justify-between items-center">
            <Link href={"/community"} className="text-xl bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 bg-clip-text text-transparent ">
              Join the Community
            </Link>
            <Link href={"/meals"} className="border-2 border-teal-400 font-semibold transition-all text-teal-400 px-4 py-2 rounded-md hover:text-white hover:bg-teal-400">
              Explore Meals
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-8 mt-12">
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Why NextLevel Food?</h2>
          <p>NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place to discover new dishes, and to connect with other food lovers.</p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </div>
    </div>
  );
}
