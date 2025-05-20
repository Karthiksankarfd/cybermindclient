import React, { useEffect, useState } from "react";
import JobCard from "../components/cards/JobCard";
import SkeletonLoader from "../components/Loaders/SkeletonLoader";
import { useFilter } from "../context/FilterContext";

const IndexPage = () => {
  const { state } = useFilter();
  const [isDummyLoading, setDummyIsLoading] = useState([]);

  useEffect(() => {
    let timeOut;
    setDummyIsLoading(true);
    timeOut = setTimeout(() => {
      setDummyIsLoading((prev) => !prev);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [state]);

  return (
    <section className="w-full p-[25.5px] mx-auto">
      {isDummyLoading ? (
        <SkeletonLoader />
      ) : (
        <div className="max-w-[1312px] min-w-sm w-[1312px] mx-auto ">
          <div className="flex flex-wrap w-full mx-auto gap-4">
            {state.length > 0 ? (
              state.map((job) => <JobCard key={job._id} {...job} />)
            ) : (
              <h1 className="text-2xl mx-auto">No matching jobs</h1>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default IndexPage;
