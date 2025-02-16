import { StorePost } from "@/lib/db/posts";
import Link from "next/link";
import React from "react";

const Card = (props: Omit<StorePost, "user_id"> & {id: number}) => {
  return (
    <Link href={`/feed/${props.id}`} className="group relative block rounded overflow-hidden cursor-pointer">
      <img src={props.image_url} alt="icon" className="scale-100 rotate-0  transition-all duration-200 ease-linear group-hover:blur-[4px] group-hover:scale-110 group-hover:rotate-3" />
      <div className="absolute inset-0 flex flex-col justify-end items-start p-2 bg-black/30 opacity-0  group-hover:opacity-100 transition-all duration-200 ease-in-out">
        <h1 className="text-2xl font-extrabold font-mono text-white line-clamp-3">{props.title}</h1>
      </div>
    </Link>
  );
};

export default Card;
