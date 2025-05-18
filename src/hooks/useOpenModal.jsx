import React, { useState } from 'react'

const useOpenModal = () => {
    const [isJobModalOpen , setIsJobModal] = useState(true)

    const toggleJobModal = () => {
        console.log("This is from open modeal")
        return setIsJobModal(prev => !prev)
    }

  return {isJobModalOpen , setIsJobModal, toggleJobModal}
}

export default useOpenModal
