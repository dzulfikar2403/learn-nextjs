import Image from "next/image";
import Link from "next/link";
import React from "react";

export type MealItemProps = { 
  title:string, 
  slug:number, 
  image:string, 
  summary:string,  
  creator:string 
}

const MealItem = ({ title, slug, image, summary, creator }: Partial<MealItemProps>) => {
  return (
    <div className="rounded-md overflow-hidden bg-gradient-to-r from-teal-950 to-teal-900 ">
      <header>
        <div className="relative w-full h-40">
          <Image src={`${image}`} alt={title as string} fill className="object-cover" />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm">by {creator}</p>
        </div>
      </header>
      <div className="p-2">
        <p className="line-clamp-2">{summary}</p>
        <div className="my-1 flex justify-end">
          <Link href={`/meals/${slug}`}  className="font-semibold transition-all px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 rounded-md hover:shadow-lg hover:shadow-teal-400">View Details</Link>
        </div>
      </div>
    </div>
  );
 };

export default MealItem;
