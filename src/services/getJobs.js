import axios from "axios"

export const getAllJobs = async () =>{

    try{
           let res = await axios.get("https://cyber-mind-server-2.onrender.com/api/jobs")
          console.log(res)
          return res 
    }catch(e){
            console.log("Error getting jobs" , e)
    }

}

