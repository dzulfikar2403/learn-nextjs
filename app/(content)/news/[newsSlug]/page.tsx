import ImageBase from "@/components/Image";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetailsPage = ({ params }: any) => {
  const findNews = DUMMY_NEWS.find((el) => el.slug === params.newsSlug);

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

export default NewsDetailsPage;
