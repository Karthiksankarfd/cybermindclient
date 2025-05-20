import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-[calc(100%-30%)] flex flex-col items-center justify-center bg-white text-center p-4">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-2">Page Not Found</p>
      <p className="text-gray-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
