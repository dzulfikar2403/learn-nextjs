import LatestNewsComponent from "@/components/LatestNewsComponent";
import ListCard from "@/components/ListCard";
import Loading from "@/components/Loading";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

  const ArchiveYearComponent = async ({ params }: { params: any }) => {
    const selectedYear = params.yearMonth?.[0];
    const selectedMonth =  params.yearMonth?.[1];

    const listYear = await getAvailableNewsYears();
    const listMonth = await getAvailableNewsMonths(selectedYear);
    
    if (selectedYear && !listYear.includes(selectedYear)) {
      notFound();
    }else if (selectedMonth && !listMonth.includes(selectedMonth)){
      notFound();
    }else if(params.yearMonth.length > 2){
      notFound();
    }

    const list = selectedYear && !selectedMonth ? await getAvailableNewsMonths(selectedYear) : [];
    const news = selectedYear && !selectedMonth ? await getNewsForYear(selectedYear) : await getNewsForYearAndMonth(selectedYear, selectedMonth);

    const newsContent = news && news.length > 0 && <ListCard news={news} />;


    return (
      <div className="px-4">
        <h1 className="text-2xl font-bold">News {selectedYear && !selectedMonth ? `${selectedYear}` : `${selectedYear} / ${selectedMonth}`}</h1>
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

  
const ArchiveYearPage = ({params}:{params:string}) => {
  return(
    <Suspense fallback={<Loading />} >
      <ArchiveYearComponent params={params} />
    </Suspense>
  )
}

export default ArchiveYearPage;
