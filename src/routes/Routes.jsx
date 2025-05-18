import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import FindJobsPage from '../pages/FindJobsPage'
import JobListingPage from '../pages/JobListingPage'
import IndexPage from '../pages/IndexPage'
import ResultPage from '../pages/ResultPage'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element ={<JobListingPage/>} >
           <Route  index element ={<IndexPage/>}/>
           <Route path='/findjobs' element ={<FindJobsPage/>} />
           <Route path='search/result' element ={<ResultPage/>} />
        </Route>
       
    </Routes>
  )
}

export default AppRoutes ;
