import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
      <p className="text-gray-700 mb-4">An unexpected error occurred. Please try again later.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Return to Home
      </button>
    </div>
  );
};

export default ErrorPage;
