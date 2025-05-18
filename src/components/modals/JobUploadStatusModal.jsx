import React from 'react';
import { useModal } from '../../context/ModalContext';
import { useNavigate } from 'react-router-dom';
const statusMessages = {
  uploading: { text: 'Uploading job...', color: 'text-blue-600' },
  success: { text: 'Job uploaded successfully!', color: 'text-green-600' },
  error: { text: 'Failed to upload job.', color: 'text-red-600' },
};

const JobStatusModal = () => {
    // navigate user to home 
  const navigateTo = useNavigate() 
  const { status , setStatus} = useModal()
  if (!status) return null;

  //  setting modal based the string value from status variable
  const { text, color } = statusMessages[status] || {};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl w-80 text-center">
        <h2 className={`text-xl font-semibold mb-2 ${color}`}>{text}</h2>
        {(status === 'success' || status === 'error') && (
          <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700" onClick={()=>{setStatus(null) ; navigateTo("/")}}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default JobStatusModal;
