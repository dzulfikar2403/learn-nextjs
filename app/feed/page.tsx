import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { getPost } from "@/lib/db/posts";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home - feedpost",
  description: "maincore of feedpost web ",
};

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const ListFeedCard = async () => {
  const { rows } = await getPost();

  return <>{rows.length > 0 && rows.map((el, i) => <Card key={i} id={el.id} title={el.title} image_url={el.image_url} content={el.content} />)}</>;
};

const FeedPage = () => {
  return (
    <div className={` py-8 px-4 rounded glassmorphism ${poppinsFont.className} overflow-hidden`}>
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-10 animate-infinite-scroll hover:[animation-play-state:paused]">
          <div className="whitespace-nowrap flex gap-10">
            <span>Lorem ipsum dolor sit amet...</span>
            <span>consectetur, adipisicing elit. Consectetur, quod?</span>
            <span>Ab similique dicta quaerat accusantium illum harum</span>
            <span>dolorum magni perspiciatis unde?</span>
          </div>
          {/* <!-- Duplikasi konten --> */}
          <div className="whitespace-nowrap flex gap-10">
            <span>Lorem ipsum dolor sit amet...</span>
            <span>consectetur, adipisicing elit. Consectetur, quod?</span>
            <span>Ab similique dicta quaerat accusantium illum harum</span>
            <span>dolorum magni perspiciatis unde?</span>
          </div>
        </div>
      </div>
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3">
        <Suspense fallback={<Loading />}>
          {/* card */}
          <ListFeedCard />
        </Suspense>
      </div>
    </div>
  );
};

export default FeedPage;
