import Form from "@/components/Form";
import { actionFormFeed } from "@/lib/feedAction";
import type { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
  title: "Post - feedpost",
  description: "post some feed and share it to your friend. make it feedpost usefull! "
}

const FeedPostPage = () => {
  
  return (
    <div className="my-4">
      <Form actionHandler={actionFormFeed} />
    </div>
  );
};

export default FeedPostPage;
