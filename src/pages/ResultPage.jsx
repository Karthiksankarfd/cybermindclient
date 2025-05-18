import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/cards/JobCard';
import { searchJob } from '../services/searchJob';
import NoResultsPage from './NoResultPage';

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function callApi() {
      if (keyword) {
        try {
          const searchresult = await searchJob(keyword);
          console.log(searchresult.data.jobs);
          setResults(searchresult.data.jobs || []);
        } catch (err) {
          console.error("Error fetching search results:", err);
        }
      }
    }
    callApi();
  }, [keyword]);

  return (
    <section className="w-full p-[25.5px]">
      <div className="max-w-[1312px] w-[1312px] mx-auto">
        <div className="flex gap-4 flex-wrap">
          {results.length > 0 ? (
            results.map((job) => (
              <JobCard key={job._id} {...job} />
            ))
          ) : (
            <NoResultsPage/>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
