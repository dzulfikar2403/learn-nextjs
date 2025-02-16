"use client";
import React, { useActionState } from "react";

const Form = ({ actionHandler }: { actionHandler: any }) => {
  const [state, action, isPending] = useActionState(actionHandler, { errors: [] });

  return (
    <form className="p-4 rounded bg-slate-200" action={action}>
      <h1 className="text-xl font-bold">Create New Post</h1>
      <div className="space-y-4  py-2">
        <div className="grid grid-col-1">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="grid grid-col-1">
          <label htmlFor="image" className="font-semibold">
            Image
          </label>
          <input type="file" name="image" id="image" accept="image/png, image/jpeg" />
        </div>
        <div className="grid grid-col-1">
          <label htmlFor="content" className="font-semibold">
            Content
          </label>
          <textarea rows={4} name="content" id="content"></textarea>
        </div>
      </div>
      {state.errors && (
        <ul className="list-disc list-inside text-red-600 font-semibold">
          {state.errors.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      )}
      <div className="flex justify-end gap-4">
        {!isPending && (
          <button type="reset" className="hover:underline hover:underline-offset-2">
            Reset
          </button>
        )}
        <button disabled={isPending} type="submit" className="px-4 py-1 rounded bg-slate-500 text-white font-semibold hover:bg-slate-400">
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
