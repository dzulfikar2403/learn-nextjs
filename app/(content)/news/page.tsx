import React, { Suspense } from "react";
import ListCard from "@/components/ListCard";
import Loading from "@/components/Loading";

const NewsPage = () => {
  const ListData = async () => {
    const res = await fetch("http://localhost:3000/api/news", { method: "GET" });

    if (!res.ok) {
      throw new Error("Failed Fetchi data");
    }
    const { data, message } = await res.json();

    return <ListCard news={data} />;
  };

  return (
    <div className="px-4">
      <h1 className="text-4xl pb-6 font-extrabold">NewsPage</h1>
      <Suspense fallback={<Loading />}>
        <ListData />
      </Suspense>
    </div>
  );
};

export default NewsPage;
