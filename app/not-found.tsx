import React from "react";

const notFoundPage = async () => {

  return (
    <div className="flex justify-center items-center text-6xl font-extrabold my-20">
      <div>
        <p className="text-blue-400">404</p>
        <p className="text-blue-300">Not found page.</p>
      </div>
    </div>
  );
};

export default notFoundPage;
