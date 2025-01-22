import Loading from "@/components/Loading";
import MealsGrid from "@/components/MealsGrid";
import { query } from "@/lib/db";
import Link from "next/link";
import React, { Suspense } from "react";

const Meals = async () => {  
  const getMeals = await query("select * from meals", []);
  return <MealsGrid data={getMeals.rows} />;
};

const MealsPage = () => {

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">
        Delicious meals, Created <span className="text-teal-300">by you</span>
      </h1>
      <p className="text-lg py-6">Choose your recipe and cooked. it will be easy & fun!</p>
      <Link href={"/meals/share"} className="font-semibold transition-all px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 rounded-md hover:shadow-lg hover:shadow-teal-400">
        Share your favorite recipe
      </Link>
      <Suspense fallback={<Loading />}>
        <Meals />
      </Suspense>
    </div>
  );
};

export default MealsPage;
