import ApplyButton from "./ApplyButton"
import cy_logo from '../../assets/altlogo.jpg'

   
const JobCard = ({companyLogo , jobTitle , experience ,  workMode , jobType , salary , descriptions,  maxSalary}) => {
  return (
    <div className="job-card-container p-4 w-[316px]  min-w-[316px] bg-[#FFFFFF]  cards flex flex-col gap-y-2 rounded-xl ">
            <div className="job-logo flex justify-between h-[82px]">
                <img src={companyLogo ? companyLogo : cy_logo } alt="company logo" className="p-[8.5px] w-[83px]  rounded-xl  bg-linear-to-b from-[#FEFEFD] to-[#F1F1F1]  border-2 border-[#FFFFFF] object-contain" />
                <span  className="px-[10px] rounded-[10px] self-start py-[7px] font-[500] text-[14px] text-black bg-[#B0D9FF]">{"24h Ago"}</span>
            </div>

            <h1 className="job-title text-[20px] text-black font-[700] py-[4px]">{jobTitle}</h1>

            <div className="job-info text-[16px] font-[500] text-[#5A5A5A] flex justify-between">

                <div className="flex gap-x-1 items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                      <path d="M11.7 14.75C11.7 12.7618 9.28233 11.15 6.29999 11.15C3.31766 11.15 0.899994 12.7618 0.899994 14.75M15.3 12.05V9.35M15.3 9.35V6.65M15.3 9.35H12.6M15.3 9.35H18M6.29999 8.45C4.31177 8.45 2.69999 6.83822 2.69999 4.85C2.69999 2.86177 4.31177 1.25 6.29999 1.25C8.28822 1.25 9.89999 2.86177 9.89999 4.85C9.89999 6.83822 8.28822 8.45 6.29999 8.45Z" stroke="#5A5A5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="experience">{experience || "0-1 year"}</span>
                </div>

                <div className="flex gap-x-1 items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M1.76364 16.3408H3.49091M3.49091 16.3408H12.1273M3.49091 16.3408V4.42274C3.49091 3.45538 3.49091 2.97133 3.67918 2.60185C3.84478 2.27684 4.10882 2.0128 4.43383 1.8472C4.80331 1.65894 5.28736 1.65894 6.25472 1.65894H9.36381C10.3312 1.65894 10.8142 1.65894 11.1837 1.8472C11.5087 2.0128 11.7736 2.27684 11.9392 2.60185C12.1273 2.97097 12.1273 3.45443 12.1273 4.4199V9.43166M12.1273 16.3408H17.3091M12.1273 16.3408V9.43166M17.3091 16.3408H19.0364M17.3091 16.3408V9.43166C17.3091 8.62686 17.309 8.22465 17.1775 7.90723C17.0022 7.484 16.6663 7.14754 16.243 6.97223C15.9256 6.84075 15.5228 6.84075 14.718 6.84075C13.9132 6.84075 13.5108 6.84075 13.1933 6.97223C12.7701 7.14754 12.4341 7.484 12.2588 7.90723C12.1273 8.22465 12.1273 8.62685 12.1273 9.43166M6.08182 7.70439H9.53637M6.08182 5.11348H9.53637" stroke="#5A5A5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="jobtype">{workMode || "Onsite"}</span>
                </div>

                <div className="flex gap-x-1 items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M18.1728 10.0001L9.99096 15.4546L1.80914 10.0001M18.1728 13.6365L9.99096 19.091L1.80914 13.6365M18.1728 6.36373L9.99096 11.8183L1.80914 6.36373L9.99096 0.90918L18.1728 6.36373Z" stroke="#5A5A5A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="salary">{salary || Math.floor(maxSalary) + "LPA"}</span>
                </div>

            </div>

            {/* JOB DESCRIPTION */}
            <ul className="job-description text-[14px] font-[500] list-disc text-[#555555] ml-4">
                 {descriptions?.map((description, index)=>{
                  return(<li className="list-disc text-[14px]" key={index}> {description}</li>)
                 })}
            </ul>
            <ApplyButton />
            
    </div>
  )
}

export default JobCard
