import React, { useEffect, useState } from 'react'
import { jobCards } from '../mockdata/jobCards'
import JobCard from '../components/cards/JobCard'
import { getAllJobs } from '../services/getJobs'
const IndexPage = () => {
    const [jobList , setJobList] = useState([])
    useEffect(()=>{

        async function getJobs() {
          let res =  await getAllJobs()
          setJobList(res.data.allJobs)
          console.log(res)
        }
    getJobs()

    },[])
  return (
        <section className="w-full  p-[25.5px] ">
            <div className="max-w-[1312px] min-w-sm w-[1312px] mx-auto ">
                <div className=" flex gap-4 flex-wrap ">
                    {jobList?.map((job) => (
                        <JobCard key={job._id} {...job} />
                    ))}
                </div>
            </div>
        </section>
  )
}

export default IndexPage
