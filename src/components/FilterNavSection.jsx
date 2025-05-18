import React, { useEffect, useState } from "react";
import search from "../assets/search.png";
import person from "../assets/person.png";
import Location from "../assets/Location.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchJob } from "../services/searchJob";
import { jobCards } from "../mockdata/jobCards";

const FilterNavSection = () => {

  let navigateTo = useNavigate();

  // const [searchQuery, setSearchQuery] = useState("");
  const [searchValues, setSearchValues] = useState({
    search: "",
    jobtype: "",
    location: "",
    minSalary: 1,
    maxSalary: 200000,
  });

  useEffect(() => {
    // this function is to search value when the user clicks the enter button in keyboard
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        const keyword = searchValues?.search || " ";
        const location = searchValues?.location || " ";
        const jobtype = searchValues?.jobtype || " ";
        const maxsalary = searchValues?.maxSalary ;
        const minsalary = searchValues?.minSalary ;

        const query = new URLSearchParams({keyword,location,jobtype,minsalary, maxsalary}).toString();
        console.log(query)
        setSearchValues({
          search: "",
          jobtype: "",
          location: "",
          minSalary: 1,
          maxSalary: 200000,
        });

        navigateTo(`/search/result?${query}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchValues, navigateTo]);

  const handleSearch = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearchValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    // here i implemented the event bubbling for handle form change
    <nav
      className="text-[16px]  max-w-[1312px] w-full flex items-center flex-wrap-reverse"
      onChange={(e) => handleSearch(e)}
    >
      <div className="realtive flex items-center gap-x-[27px] py-[20px] px-[20px] w-[320px] border-r-2 border-gray-300 ">
        <img src={search} alt="loading" className="h-[18px]" />
        <input
          type="text"
          name="search"
          placeholder="Search By Job Title, Role"
          className="border-none outline-0 focus:outline-2 outline-gray-400"
        />
      </div>

      <div className="realtive flex items-center gap-x-[27px] py-[20px] px-[20px] w-[320px] border-r-2 border-gray-300">
        <img src={Location} alt="loading" className="h-[18px]" />
        <input
          list="locations"
          id="locations"
          name="location"
          placeholder="Search By Job Title, Role"
          className="border-none outline-0 focus:border-2 border-gray-400"
        />
        <datalist id="locations">
          <option value="React" />
          <option value="Angular" />
          <option value="Vue" />
          <option value="Svelte" />
          <option value="Next.js" />
        </datalist>
      </div>

      <div className="select-job-type flex items-center gap-x-[27px] py-[20px] px-[20px] w-[320px] border-r-2 border-gray-300">
        <img src={person} alt="" />
        <select name="jobtype" id="jobtype" className="w-full border-0 ">
          <option className="" value="FullTime">
            FullTime
          </option>
          <option className="" value="Internship">
            Internship
          </option>
          <option className="" value="Internship">
            Remote
          </option>
          <option className="" value="Partime">
            Partime
          </option>
          <option className="" value="Contract">
            Contract
          </option>
        </select>
      </div>

      <div className="salary-range   gap-x-[27px] py-[20px] px-[20px] w-[320px] ">
        <div>
          <span className="text-start">Salary Per Month</span>
          <span>
            ₹
            {searchValues?.minSalary > 1000
              ? searchValues?.minSalary / 1000
              : searchValues?.minSalary}
            k- ₹
            {searchValues.maxSalary > 100000
              ? searchValues.maxSalary / 1000
              : searchValues.maxSalary}
            k
          </span>
        </div>

        <form className="flex items-center">
          <input
            defaultValue="10000"
            name="minSalary"
            type="range"
            className=" custom-range range-slider"
            step="1000"
            min="10000"
            max="100000"
          />
          <input
            step="1000"
            min="300000"
            max="1000000"
            name="maxSalary"
            type="range"
            className=" custom-range range-slider"
          />
        </form>
      </div>
    </nav>
  );
};

export default FilterNavSection;
