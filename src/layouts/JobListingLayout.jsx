import Navbar from "../components/Navbar";
import FilterNavSection from "../components/FilterNavSection";
import JobModal from "../components/modals/JopPostingModal";
import { useModal } from "../context/ModalContext";
import JobStatusModal from "../components/modals/JobUploadStatusModal";
import { Outlet } from "react-router-dom";

const JobListingLayout = () => {
  const { isJobModalOpen } = useModal();
  return (
    <>
      <main className="">
        <header className=" mx-auto py-[21px] min-w-sm bg-[#FFFFFF]  cards">
          <Navbar />
          <FilterNavSection />
        </header>
        <Outlet />
      </main>
      {/* overlaying modals */}
      <JobModal isOpen={isJobModalOpen} />
      <JobStatusModal />
    </>
  );
};

export default JobListingLayout;
