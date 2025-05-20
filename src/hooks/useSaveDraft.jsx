import React from 'react'
import { useJob } from '../context/JobFormContext'
import { useModal } from '../context/ModalContext'

export const useSaveDraft = () => {
    const {jobformData , setJobFormData } = useJob()
    const { toggleJobModal } = useModal()

    const saveJobAsDraft = () =>{
        localStorage.setItem("draftjob" , JSON.stringify(jobformData));
        toggleJobModal()
    }

    const getDraftJob = ()=>{
        const draft = JSON.parse(localStorage.getItem("draftjob"));
        if(draft !== null){
                setJobFormData(draft)
        }else {
            setJobFormData({
                jobTitle: '',
                companyName: '',
                location: '',
                jobType: '',
                minSalary: '',
                maxSalary: '',
                description: '',
            });
    }
        
    }

  return {saveJobAsDraft , getDraftJob }
}


