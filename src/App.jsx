import './App.css'
import JobCard from './components/cards/JobCard'
import FilterNavSection from './components/FilterNavSection'
import Navbar from './components/Navbar'
import JobListingLayout from './layouts/JobListingLayout'
import JobListingPage from './pages/JobListingPage'
import { ModalProvider } from './context/ModalContext'
import {JobFormContextProvider} from "./context/JobFormContext"
import AppRoutes from './routes/Routes'
function App() {

  return (
    <JobFormContextProvider>
    <ModalProvider>
      <main className=''>
            {/* <JobListingPage/> */}
            <AppRoutes/>
      </main>
     </ModalProvider>
    </JobFormContextProvider>
 
  )
}

export default App
