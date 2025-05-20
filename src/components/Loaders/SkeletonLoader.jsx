import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-4 animate-pulse space-y-4"
        >
          {/* Company Logo */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

          {/* Title */}
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>

          {/* Sub info like Exp, Location, Salary */}
          <div className="flex gap-2">
            <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
            <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
            <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
          </div>

          {/* Job description lines */}
          <div className="h-3 bg-gray-300 rounded w-full"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3"></div>

          {/* Button */}
          <div className="h-10 bg-gray-300 rounded w-1/2 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
