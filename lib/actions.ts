"use server"

import { Meal } from "@/app/meals/share/page";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const invalidText = (text: string) => {
  return text.trim() === "" || !text;
};

export const postMeal = async (formData: any) => {

  const meal: Meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  if (invalidText(meal.title) || 
      invalidText(meal.summary) || 
      invalidText(meal.instructions) || 
      invalidText(meal.creator_email) || 
      invalidText(meal.creator) || 
      !meal.creator_email.includes("@") ||
      meal.image.size === 0 || !meal.image)
      {
        throw new Error("data input required!")
      } 
  
  await saveMeal(meal);
  // revalidatePath('/','layout')
  redirect("/meals");
};