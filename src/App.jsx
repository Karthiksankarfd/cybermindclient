import "./App.css";
import JobCard from "./components/cards/JobCard";
import FilterNavSection from "./components/FilterNavSection";
import Navbar from "./components/Navbar";
import JobListingLayout from "./layouts/JobListingLayout";
import JobListingPage from "./pages/JobListingPage";
import { ModalProvider } from "./context/ModalContext";
import { JobFormContextProvider } from "./context/JobFormContext";
import AppRoutes from "./routes/Routes";
import { FilterProvider } from "./context/FilterContext";

function App() {
  return (
    <FilterProvider>
      <JobFormContextProvider>
        <ModalProvider>
          <main className="">
            <AppRoutes />
          </main>
        </ModalProvider>
      </JobFormContextProvider>
    </FilterProvider>
  );
}

export default App;
