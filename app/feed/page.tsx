import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { getPost } from "@/lib/db/posts";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata:Metadata = {
  title: "Home - feedpost",
  description: "maincore of feedpost web "
}

export const ListFeedCard = async () => {
  const {rows} = await getPost();
  
  return (
    <>
      {rows.length > 0 && rows.map((el,i) => <Card key={i} title={el.title} image_url={el.image_url} content={el.content} />)}
    </>
  )
}

const FeedPage = () => {
  return (
    <div className="py-8 px-4">
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
