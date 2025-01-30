import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import ListCard from "@/components/ListCard";
import { getAllNews } from "@/lib/news";

const NewsPage = () => {
  const allNews = getAllNews()
  return (
    <div className="px-4">
      <h1 className="text-4xl pb-6 font-extrabold">NewsPage</h1>
      <ListCard news={allNews}/>
    </div>
  );
};

export default NewsPage;
