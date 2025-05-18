import axios from "axios"

export const searchJob = async (searchValue)=>{
    console.log(searchValue)
    try{

      let res =  await axios.get(`https://cyber-mind-server-1.onrender.com/api/search`, {
           params: { keyword: searchValue}
        })

        return res
        
    }catch(e){
        console.log(e , "Error searching jobs")
    }
}