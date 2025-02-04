import ImageBase from "@/components/Image";
import Loading from "@/components/Loading";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { lazy, Suspense, use } from "react";

// export const findNewsArticle = lazy()

const FindNewsArticle = async ({ slug }: { slug: string }) => {
  const allNews = await getAllNews();
  const findNews = allNews.find((el) => el.slug === slug);

  if (!findNews) {
    notFound();
  }

  return (
    <article className="px-4 space-y-4">
      <ImageBase src={`/images/news/${findNews.image}`} alt={`image-${findNews.image}`} />
      <h2 className="font-bold text-xl">{findNews?.title ?? "..."}</h2>
      <time>{findNews?.date ?? "..."}</time>
      <p>{findNews?.content ?? "..."}</p>
    </article>
  );
};

const NewsDetailsPage = ({ params }: any) => {

  return (
    <Suspense fallback={<Loading />}>
      <FindNewsArticle slug={params.newsSlug} />
    </Suspense>
  );
};

export default NewsDetailsPage;
