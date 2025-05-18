import axios from "axios"

export const getAllJobs = async () =>{

    try{
          let res = await axios.get("https://cyber-mind-server-1.onrender.com/api/jobs")
          return res
         
    }catch(e){
            console.log("Error getting jobs" , e)
    }

}

