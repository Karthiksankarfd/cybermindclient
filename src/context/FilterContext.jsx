// FilterContext.js
import React, { createContext, useReducer, useContext } from "react";
import { jobCards } from "../mockdata/jobCards";

const FilterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "search":
      return state.filter((job) =>
        job.jobTitle.toLowerCase().includes(action.payload.toLowerCase())
      );
    case "location":
      return state.filter((job) =>
        job.location.toLowerCase().includes(action.payload.toLowerCase())
      );

    case "jobType":
      return state.filter((job) =>
        job.jobType.toLowerCase().includes(action.payload.toLowerCase())
      );
    
    // case "minSalary":
    //   return state.filter((job) => { job.minSalary >= action.payload && job.maxSalary >= action.payload } );

    // case "maxSalary":
    //   return jobCards.filter((job) =>job.maxSalary >= action.payload);

      case "salary":
        console.log(action.payload)
        return jobCards.filter((job) =>  (job.minSalary >= Number(action.payload.minSalary) && (job.maxSalary <= Number(action.payload.maxSalary))));

    case "reset":
      return jobCards;

    default:
      return jobCards;
  }
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, jobCards);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
