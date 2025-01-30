import LatestNewsComponent from "@/components/LatestNewsComponent";
import ListCard from "@/components/ListCard";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const ArchiveYearPage = ({ params }: { params: any }) => {
  const selectedYear = params.yearMonth?.[0];
  const selectedMonth = params.yearMonth?.[1];
  
  const list = selectedYear && selectedMonth ? [] : selectedYear && !selectedMonth ? getAvailableNewsMonths(selectedYear) : getAvailableNewsYears();
  const news = selectedYear && !selectedMonth ? getNewsForYear(selectedYear) : getNewsForYearAndMonth(selectedYear,selectedMonth);
  
  const newsContent = news && news.length > 0 ? <ListCard news={news} /> : <p className="text-xl font-semibold">Data not found!</p>;

  if(selectedYear && !getAvailableNewsYears().includes(+selectedYear) || selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)){
    notFound()
  }

  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold">
        News {selectedYear && !selectedMonth ? `${selectedYear}` : `${selectedYear} / ${selectedMonth}`}
      </h1>
      <div className="py-4 flex gap-4 items-center ">
        {list.map((el) => {
          const href = selectedYear ? `/archive/${selectedYear}/${el}` : `/archive/${el}`; 
          return (
            <Link href={href} key={el} className="font-semibold hover:text-blue-400">
              {el}
            </Link>
          );
        })}
      </div>
      {newsContent}
      <LatestNewsComponent />
    </div>
  );
};

export default ArchiveYearPage;
