"use client"
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitFormMeal = () => {
  const {pending} = useFormStatus();
  return (
    <button type="submit" disabled={pending} className=" font-semibold transition-all px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 rounded-md hover:shadow-lg hover:shadow-teal-400">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default SubmitFormMeal;
