// context/ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [status , setStatus] = useState("")
  const[isJobUploadSuccess , setIsJobUploadSuccess] = useState(false)
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  const toggleJobModal = () => {
    setIsJobModalOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ isJobModalOpen, toggleJobModal,setIsJobModalOpen , isJobUploadSuccess , setIsJobUploadSuccess ,status , setStatus }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
