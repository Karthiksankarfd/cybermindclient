import React, { createContext, useContext, useState } from 'react';

const NewJobFormContext = createContext();

export const JobFormContextProvider = ({ children }) => {
  const [jobformData, setJobFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    minSalary: "",
    maxSalary: "",
    applicationDeadLine : 0,
    newJobdescriptions:"",
  });

  return (
    <NewJobFormContext.Provider value={{ jobformData, setJobFormData }}>
      {children}
    </NewJobFormContext.Provider>
  );
};

// ✅ THIS IS THE CORRECT VERSION
export const useJob = () => useContext(NewJobFormContext);
