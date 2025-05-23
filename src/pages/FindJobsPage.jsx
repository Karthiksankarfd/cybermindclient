import React from "react";
import { Link } from "react-router-dom";

const FindJobsPage = () => {
  return (
    <div className="h-[calc(100%-30%)] flex flex-col items-center justify-center bg-white text-center p-4">
      <h1 className="text-2xl font-bold text-purple-600 mb-4">Search Jobs </h1>
      <p className="text-2xl text-gray-800 mb-2">Kick Start Your Career</p>
      <p className="text-gray-600 mb-6">More than 3000+ people got jobs...</p>
      {/* <Link
        to="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
      >
        Go Home
      </Link> */}
    </div>
  );
};

export default FindJobsPage;
