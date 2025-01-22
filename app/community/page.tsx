import Image from "next/image";
import React from "react";

const CommunityPage = () => {
  return (
    <div className="w-full grid place-items-center mt-12 p-4 ">
      <div className="space-y-6 text-center">
        <h1 className="font-bold text-4xl">
          One shared passion: <span className="text-orange-400">Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>

        <h2 className="font-bold text-2xl">Community Perks</h2>
      </div>

      <ul className="space-y-8">
        <li className="flex items-center flex-col ">
          <Image src="/images/icons/meal.png" alt="A delicious meal" width={120} height={120}  />
          <p className="font-semibold text-lg">Share & discover recipes</p>
        </li>
        <li className="flex items-center flex-col ">
          <Image src="/images/icons/community.png" alt="A crowd of people, cooking" width={120} height={120} />
          <p className="font-semibold text-lg">Find new friends & like-minded people</p>
        </li>
        <li className="flex items-center flex-col ">
          <Image src="/images/icons/events.png" alt="A crowd of people at a cooking event" width={120} height={120} />
          <p className="font-semibold text-lg">Participate in exclusive events</p>
        </li>
      </ul>
    </div>
  );
};

export default CommunityPage;
