import React, { useEffect } from "react";
import { useModal } from "../../context/ModalContext";
import useJobForm from "../../hooks/useJobForm";
import { useJob } from "../../context/JobFormContext";
import {useSaveDraft} from "../../hooks/useSaveDraft";

const JOB_TYPES = ["Internship", "Full-Time", "Part-time", "Contract"];
const LOCATION = ["Chennai", "Bangalore", "Hydrebad", "Mumbai"];

const JobModal = ({ isOpen }) => {
  const {  setIsJobModalOpen } = useModal();
  const { jobformData, setJobFormData } = useJob();
  const { handleJobFormData, postJobRequested } = useJobForm();
  const { saveJobAsDraft, getDraftJob } = useSaveDraft();

  useEffect(() => {
    getDraftJob();
  }, []);

  if (!isOpen) return null;

  return (
    <section
      onClick={() => setIsJobModalOpen(false)}
      className="fixed inset-0 z-[5] bg-black/60 h-[dvh] flex items-center justify-center"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          postJobRequested();
        }}
        className="flex items-center justify-center"
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-[848px] px-10 py-9 h-[90%] relative z-[10]">
          <h2 className="text-2xl font-semibold mb-14 text-center">
            Create Job Opening
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[20px] font-semibold">
                Job Title
              </label>
              <input
                onChange={handleJobFormData}
                name="jobTitle"
                value={jobformData.jobTitle}
                className="w-full border border-[#BCBCBC] rounded p-4"
                placeholder="Full Stack Developer"
                required
              />
            </div>
            <div>
              <label className="block text-[20px] font-medium">
                Company Name
              </label>
              <input
                onChange={handleJobFormData}
                name="companyName"
                value={jobformData.companyName}
                className="w-full border border-[#BCBCBC] rounded p-4"
                placeholder="Amazon"
                required
              />
            </div>
            {/* <div>
              <label className="block text-[20px] font-semibold">Location</label>
              <select
                required
                onChange={handleJobFormData}
                name="location"
                value={jobformData.location}
                className="w-full border rounded p-4 border-[#BCBCBC]"
              >
                <option></option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
            </div> */}

            <div className="w-full">
              <label className="block text-[20px] font-semibold">
                Location
              </label>
              <div className="group relative w-full p-4 border border-[#BCBCBC] rounded">
                <div className="flex justify-between items-center">
                  <input
                    required
                    onChange={handleJobFormData}
                    name="jobType"
                    value={jobformData.location}
                    type="text"
                    placeholder="Select Job type"
                    className="outline-0 border-0 focus:outline-0"
                  />
                  <svg
                    className="group-hover:rotate-180 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                  >
                    <path
                      d="M15 1L8 8L1 1"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <ul className="list-none flex-col w-full absolute z-50 left-0 mt-5 shadow-lg opacity-0 invisible transition-all duration-300 delay-100 group-hover:opacity-100 bg-white group-hover:visible">
                  {LOCATION.map((type, index) => (
                    <li
                      onClick={() =>
                        setJobFormData((prev) => ({ ...prev, location: type }))
                      }
                      key={index}
                      className="px-4 py-2 hover:bg-[#F1F1F1] whitespace-nowrap"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-[20px] font-semibold">
                Job Type
              </label>
              <div className="group relative w-full p-4 border border-[#BCBCBC] rounded">
                <div className="flex justify-between items-center">
                  <input
                    required
                    onChange={handleJobFormData}
                    name="jobType"
                    value={jobformData.jobType}
                    type="text"
                    placeholder="Select Job type"
                    className="outline-0 border-0 focus:outline-0"
                  />
                  <svg
                    className="group-hover:rotate-180 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                  >
                    <path
                      d="M15 1L8 8L1 1"
                      stroke="#222222"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <ul className="list-none flex-col w-full absolute z-50 left-0 mt-5 shadow-lg opacity-0 invisible transition-all duration-300 delay-100 group-hover:opacity-100 bg-white group-hover:visible">
                  {JOB_TYPES.map((type, index) => (
                    <li
                      onClick={() =>
                        setJobFormData((prev) => ({ ...prev, jobType: type }))
                      }
                      key={index}
                      className="px-4 py-2 hover:bg-[#F1F1F1] whitespace-nowrap"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[20px] font-semibold">
                Salary Range
              </label>
              <div className="flex items-center gap-2">
                <div className="flex items-center border border-[#BCBCBC] px-4 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15"
                      stroke="#BCBCBC"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    required
                    onChange={handleJobFormData}
                    name="minSalary"
                    value={jobformData.minSalary}
                    type="text"
                    className="w-full rounded p-4 outline-0 "
                    placeholder="₹ 0"
                  />
                </div>

                <div className="flex items-center border border-[#BCBCBC] px-4 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M7 12L4 15M4 15L1 12M4 15V1M9 4L12 1M12 1L15 4M12 1V15"
                      stroke="#BCBCBC"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    required
                    onChange={handleJobFormData}
                    name="maxSalary"
                    value={jobformData.maxSalary}
                    type="text"
                    className="w-full rounded p-4 outline-0 "
                    placeholder="₹ 12,00,000"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="block text-[20px] font-semibold " htmlFor="date">
                Application Dead Line
              </label>
             
              <input id="date"
                required
                onChange={handleJobFormData}
                name="applicationDeadLine"
                value={jobformData.applicationDeadLine}
                type="date"
                className="w-full border border-[#BCBCBC] rounded p-4 appearance-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[20px] font-semibold">
              Job Description
            </label>
            <textarea
              required
              onChange={handleJobFormData}
              name="newJobdescriptions"
              value={jobformData.descriptions}
              className="w-full border border-[#BCBCBC] rounded p-4 text-[16px] text-[#BCBCBC]"
              placeholder="Please share a description to let the candidate know more about the job role"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              onClick={saveJobAsDraft}
              className="border border-[#BCBCBC] px-4 py-2 rounded text-sm"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-[#00AAFF] text-white px-6 py-2 rounded"
            >
              Publish »
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default JobModal;
