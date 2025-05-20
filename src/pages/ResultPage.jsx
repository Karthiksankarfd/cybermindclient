import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/cards/JobCard";
import { searchJob } from "../services/searchJob";
import NoResultsPage from "./NoResultPage";
import SkeletonLoader from "../components/Loaders/SkeletonLoader";

const ResultPage = () => {
  // loader state
  const [isLoadingResult, setLoadingResult] = useState(false);
  const [searchParams] = useSearchParams();

  const querys = useMemo(() => {
    return {
      jobTitle: searchParams.get("jobTitle"),
      location: searchParams.get("location"),
      jobType: searchParams.get("jobType"),
      minSalary: searchParams.get("minSalary"),
      maxSalary: searchParams.get("maxSalary"),
    };
  }, [searchParams]);

  // const jobTitle=react&location=&jobminSalary=0&maxSalary=10
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function callApi() {
      setLoadingResult(true);
      if (querys) {
        try {
          const searchresult = await searchJob(querys);
          console.log(searchresult.data, "This is from result component ");
          setResults(searchresult.data || []);
          setLoadingResult((prev) => !prev);
        } catch (err) {
          console.error("Error fetching search results:", err);
        }
        setLoadingResult(false);
      }
    }
    callApi();
  }, [querys]);

  return (
    <section className="w-full p-[25.5px]">
      {isLoadingResult ? (
        <SkeletonLoader />
      ) : (
        <div className="max-w-[1312px] w-[1312px] mx-auto">
          <div className="flex gap-4 flex-wrap">
            {results.length > 0 ? (
              results.map((job) => <JobCard key={job._id} {...job} />)
            ) : (
              <NoResultsPage />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultPage;
