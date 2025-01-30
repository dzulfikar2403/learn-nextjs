import { getLatestNews } from "@/lib/news";
import React from "react";
import ListCard from "./ListCard";

const LatestNewsComponent = () => {
  const latestNews = getLatestNews()
  return (
    <div className="space-y-4 py-4">
      <h2 className="text-2xl font-extrabold">Latest News</h2>
      <ListCard news={latestNews} />
    </div>
  );
};

export default LatestNewsComponent;
