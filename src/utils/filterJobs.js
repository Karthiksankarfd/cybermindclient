

function reducerFilterJobs(jobList , action){
    switch(action.type){
            case("jobTitle"):
               return jobList.filter((job)=> job.jobTitle === action.payload )
            case("location"):
                return jobList.filter((job)=> job.location === action.payload )
            default:
                return jobList
    }
}

export default reducerFilterJobs ;