import React from 'react'

const NavButton = ({name}) => {
  return (
    <button className='py-[8px] px-[17px] bg-linear-to-b from-[#A128FF] to-[#6100AD] rounded-full text-[16px] font-semibold text-white'>{name}</button>
  )
}

export default NavButton
