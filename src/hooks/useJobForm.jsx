import { useJob } from '../context/JobFormContext'
import { useModal } from '../context/ModalContext'
import { postJob } from '../services/postJob'

const useJobForm = () => { 
 
    const { setIsJobUploadSuccess , setStatus , setIsJobModalOpen } = useModal();
    const { setJobFormData , jobformData} = useJob()

    const handleJobFormData =(e )=>{
        const {name , value} = e.target
        if(name === "minSalary" || name === "maxSalary" ){
            if (isNaN(Number(value))) {
                window.alert("Please enter a numeric value");
            }
        }
        setJobFormData((jobformData)=> ({...jobformData, [name] : value}))
        console.log(jobformData)
    }
   
   const postJobRequested = async () =>{
            setIsJobModalOpen(false)
            setStatus("uploading") ; 
        try{
            await postJob(jobformData) ;
            localStorage.removeItem("draftjob");
            setStatus("success") ; 
        }catch(e){
            console.log(e)
            setStatus("error") ; 
            setIsJobUploadSuccess(false)
        }
   } 
  return { handleJobFormData , postJobRequested}
}

export default useJobForm
