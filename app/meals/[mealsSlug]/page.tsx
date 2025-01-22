import Loading from "@/components/Loading";
import { query } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export async function generateMetadata({params}:any) {
  const { rows } = await query(`select *  from meals where slug = $1`, [params.mealsSlug]);
  
  if(rows.length === 0) {
    return notFound()
  }

  return {
    title: `${rows[0].title} | Next level food` ,
    description: rows[0].summary,
  }
}

const MealDetail = async ({ param }: any) => {
  const { rows } = await query(`select *  from meals where slug = $1`, [param.mealsSlug]);
  
  if(rows.length === 0) {
    return notFound()
  }

  return (
    <div className="mt-16 mx-auto min-w-[800px] max-w-[600px]">
      <div className="flex gap-4 justify-center">
        <div className="relative w-56 h-56 rounded overflow-hidden">
          <Image src={rows[0].image} alt={rows[0].title} fill />
        </div>
        <div>
          <h2 className="text-4xl font-bold">{rows[0].title}</h2>
          <p className="flex text-base gap-2">
            create by{" "}
            <a href={`mailto:${rows[0].creator_email}`} className="underline text-teal-400">
              {rows[0].creator}
            </a>
          </p>
        </div>
      </div>
      <p className="px-4 py-2 rounded-md border-2 border-teal-700 my-6" >{rows[0].instructions}</p>
    </div>
  );
};

const MealDetailsPage = ({ params }: any) => {

  return (
    <Suspense fallback={<Loading />}>
      <MealDetail param={params} />
    </Suspense>
  );
};

export default MealDetailsPage;
