import React from 'react';
import { Link } from 'react-router-dom';


const NoResultsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 w-full">
      {/* <FaSearch className="text-6xl text-gray-400 mb-4" /> */}
      <h2 className="text-2xl font-semibold text-gray-700">No Results Found</h2>
      <p className="text-gray-500 mt-2 mb-6">
        We couldn't find any jobs matching your search.<br/><span>Try searching using different jobs or salary range...</span>
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NoResultsPage;
