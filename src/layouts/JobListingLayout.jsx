import React, { useState } from "react";
import JobCard from "../components/cards/JobCard";
import Navbar from "../components/Navbar";
import FilterNavSection from "../components/FilterNavSection";
import JobModal from "../components/modals/JopPostingModal";
import { useModal } from "../context/ModalContext";
import JobStatusModal from "../components/modals/JobUploadStatusModal";
import { jobCards } from "../mockdata/jobCards";
import { Outlet } from "react-router-dom";

const JobListingLayout = () => {
  const { isJobModalOpen } = useModal();
  return (
    <>
      <main>
        <header className="max-w-[1440px] mx-auto px-[21px] min-w-sm">
          <Navbar />
          <FilterNavSection />
        </header>
        <Outlet />
      </main>
      <JobModal isOpen={isJobModalOpen} />
      <JobStatusModal />
      
    </>
  );
};

export default JobListingLayout;
