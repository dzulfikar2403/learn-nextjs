"use server";
import { redirect } from "next/navigation";
import xss from "xss";
import { uploadImage } from "./cloudinary";
import { storePost } from "./db/posts";

export async function actionFormFeed(prev: any, formData: FormData) {
  const title = formData.get("title") as string;
  const image = formData.get("image") as File;
  const content = formData.get("content") as string;
  const filteringContent = xss(content);

  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("title is required");
  }

  if (!filteringContent || filteringContent.trim().length === 0) {
    errors.push("content is required");
  }

  if (image.size === 0) {
    errors.push("image is required");
  }

  if (errors.length > 0) {
    return { errors };
  }
  
  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    return { errors: ["failed upload image.", "post was not created.","try again later."] };
  }

  await storePost({
    title,
    image_url: imageUrl,
    content,
    user_id: 1 //masih static
  })

  redirect("/feed");
}
