import axios from "axios"

export const getAllJobs = async () =>{

    try{
          let res = await axios.get("http://localhost:5000/api/jobs")
          return res
         
    }catch(e){
            console.log("Error getting jobs" , e)
    }

}

