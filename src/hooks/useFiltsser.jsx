import React, { useReducer } from 'react'
import { jobCards } from "../mockdata/jobCards.js"

const useFilter = () => {

    function reducerFilterJobs(state , action){

    switch(action.type){
            case("search"):
            console.log("This is form reducer function")
               return state.filter((job) =>job.jobTitle.toLowerCase().includes(action.payload.toLowerCase()));
            case("location"):
                return state.filter((job)=> job.location.toLowerCase().includes(action.payload.toLowerCase()) )
            default:
                return state
    }
}


const [state, dispatch] = useReducer(reducerFilterJobs , jobCards )


  return { state , dispatch }
}

export default useFilter
