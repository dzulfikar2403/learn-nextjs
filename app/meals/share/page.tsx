import ImageInput from "@/components/ImageInput";
import SubmitFormMeal from "@/components/Submit-form-meal";
import { postMeal } from "@/lib/actions";
import React from "react";

export type Meal = {
  title: string;
  summary: string;
  instructions: string;
  image: any;
  creator: string;
  creator_email: string;
};

const ShareMealPage = () => {

  return (
    <div className="mt-16 px-4">
      <h1 className="text-5xl font-bold">Share your favorite Meals!</h1>
      <p className="text-lg py-8">throw your recipe and try with your pan</p>
      <form className="space-y-2 w-2/3 py-8" action={postMeal}>
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col gap-2 space-y-2">
            <label htmlFor="creator" className="font-semibold text-lg">
              Your Name
            </label>
            <input type="text" id="creator" name="creator" className="bg-transparent rounded-sm border border-teal-400" required />

            <label htmlFor="creator_email" className="font-semibold text-lg">
              Email
            </label>
            <input type="email" id="creator_email" name="creator_email" className="bg-transparent rounded-sm border border-teal-400" required />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="font-semibold text-lg">
            Title
          </label>
          <input type="text" id="title" name="title" className="bg-transparent rounded-sm border border-teal-400" required />
          <label htmlFor="summary" className="font-semibold text-lg">
            Summary
          </label>
          <input type="text" id="summary" name="summary" className="bg-transparent rounded-sm border border-teal-400" required />
          <label htmlFor="instructions" className="font-semibold text-lg">
            Instructions
          </label>
          <textarea id="instructions" name="instructions" className="bg-transparent rounded-sm border border-teal-400" rows={10} required></textarea>
          <ImageInput name="image" />
        </div>
        <div className="flex justify-end py-2">
          <SubmitFormMeal />
        </div>
      </form>
    </div>
  );
};

export default ShareMealPage;
