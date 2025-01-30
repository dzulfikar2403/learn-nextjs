import LatestNewsComponent from "@/components/LatestNewsComponent";
import ListCard from "@/components/ListCard";
import { getAllNews, getAvailableNewsMonths, getAvailableNewsYears, getLatestNews } from "@/lib/news";
import Link from "next/link";
import React from "react";

const ArchivePage = () => {
  const listYears = getAvailableNewsYears();

  return (
    <div className="px-4">
      <div className="py-2 space-y-2">
        <h2 className="text-2xl font-extrabold">ArchivePage</h2>
        <div className="flex gap-4 items-center ">
          {listYears.map((el) => (
            <Link href={`/archive/${el}`} key={el} className="font-semibold hover:text-blue-400">
              {el}
            </Link>
          ))}
        </div>
      </div>
      <LatestNewsComponent />
    </div>
  );
};

export default ArchivePage;
