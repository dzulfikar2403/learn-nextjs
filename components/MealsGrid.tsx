import React from "react";
import MealItem from "./MealItem";

const MealsGrid = ({data}:{data: any[]}) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 py-6 px-4">
      {data.map((el) => (
        <li key={el.id}>
          <MealItem slug={el.slug} image={el.image} summary={el.summary} title={el.title} creator={el.creator} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
