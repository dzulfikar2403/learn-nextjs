import LatestNewsComponent from "@/components/LatestNewsComponent";
import Loading from "@/components/Loading";
import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import React, { Suspense } from "react";

const ListYears = async () => {
  const listYears = await getAvailableNewsYears();
  return (
    <div className="flex gap-4 items-center ">
      {listYears.map((el) => (
        <Link href={`/archive/${el}`} key={el} className="font-semibold hover:text-blue-400">
          {el}
        </Link>
      ))}
    </div>
  );
};

const ArchivePage = () => {
  return (
    <div className="px-4">
      <Suspense fallback={<Loading />}>
        <div className="py-2 space-y-2">
          <h2 className="text-2xl font-extrabold">ArchivePage</h2>
          <ListYears />
        </div>
        <LatestNewsComponent />
      </Suspense>
    </div>
  );
};

export default ArchivePage;
