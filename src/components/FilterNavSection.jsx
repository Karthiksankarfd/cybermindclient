import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";
import person from "../assets/person.png";
import Location from "../assets/Location.png";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../context/FilterContext";

const FilterNavSection = () => {
  const navigateTo = useNavigate();
  const { dispatch } = useFilter();

  const [searchValues, setSearchValues] = useState({
    search: "",
    jobtype: "",
    location: "",
    minSalary: 5,
    maxSalary: 8,
  });

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchValues((prev) => ({ ...prev, [name]: value }));

    if (value.trim() === "") {
      dispatch({ type: "reset" });
    } else if (name === "minSalary" || name === "maxSalary") {
      // const updated = {
      //   ...searchValues,
      //   [name]: value,
      // };
      dispatch({
        type: "salary",
        payload: {
          minSalary: Number(searchValues.minSalary),
          maxSalary: Number(searchValues.maxSalary),
        },
      });
    } else {
      dispatch({ type: name, payload: value });
    }
  };

  useEffect(() => {
    const handleKeyDown = async (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        const query = {
          jobTitle: searchValues.search,
          location: searchValues.location,
          jobType: searchValues.jobtype,
          minSalary: searchValues.minSalary,
          maxSalary: searchValues.maxSalary,
        };
        navigateTo(`/search/result?${new URLSearchParams(query).toString()}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchValues, navigateTo]);

  return (
    <nav
      className="text-[16px] max-w-[1312px] w-full flex items-center flex-wrap mx-auto min-w-sm "
      onChange={handleSearch}
    >
      <div className="flex items-center gap-x-[27px] py-[20px] px-[0px] w-[320px] border-r-2 border-gray-300">
        <img src={searchIcon} alt="search" className="h-[18px]" />
        <input
          type="text"
          name="search"
          value={searchValues.search}
          placeholder="Search By Job Title, Role"
          className="border-none outline-0"
        />
      </div>

      <div className="flex items-center gap-x-[27px] py-[20px] px-[20px] w-[320px] border-r-2 border-gray-300">
        <img src={Location} alt="location" className="h-[18px]" />
        <input
          list="locations"
          id="locations"
          name="location"
          value={searchValues.location}
          placeholder="Preferd Location"
          className="border-none outline-0"
        />
        <datalist id="locations">
          <option value="React" />
          <option value="Angular" />
          <option value="Vue" />
          <option value="Svelte" />
          <option value="Next.js" />
        </datalist>
      </div>

      <div className="flex items-center gap-x-[27px] py-[20px] px-[20px] w-[320px] border-r-2 border-gray-300">
        <img src={person} alt="person" />
        <select
          name="jobtype"
          value={searchValues.jobtype}
          className="w-full border-0 focus:outline-0 bg-white"
        >
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="salary-range gap-x-[27px] py-[20px] px-[20px]  ml-auto">
        <div className="font-[600] text-[16px] text-black  flex justify-between">
          <span className="mr-auto">Salary Per Month</span>
          <span>
            ₹{searchValues.minSalary}0k - ₹{searchValues.maxSalary}0k
          </span>
        </div>

        <form className="flex items-center">
          <input
            name="minSalary"
            type="range"
            step="1"
            min="5"
            max="9"
            value={searchValues.minSalary}
            className="range-slider slider"
          />
          <input
            name="maxSalary"
            type="range"
            step="1"
            min="5"
            max="25"
            value={searchValues.maxSalary}
            className="range-slider slider"
          />
        </form>
      </div>
    </nav>
  );
};

export default FilterNavSection;
