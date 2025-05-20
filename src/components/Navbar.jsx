import React from 'react'
import cy_logo from "../assets/cy_logo.png"
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import { useModal } from '../context/ModalContext'
const Navbar = () => {
  const {toggleJobModal} = useModal()
  return (
    <nav className='w-[890px] min-w-sm flex justify-center items-center  h-[80px] mx-auto bg-[#FFFFFF]  cards rounded-full '>
        <div className="navbar-inner-wrapper w-[838px]  h-[48px] flex justify-between items-center   px-[26px] py-[16px]">
            <img src={cy_logo} alt="logo" className='h-[44px] w-[44px]' />
            <div className="nav-links flex items-center">
                <Link to="/" className='text-[16px] py-[8px] px-[24px] font-semibold'>Home</Link>
                <Link to="/findjobs" className='text-[16px] py-[8px] px-[24px] font-semibold'>Find Jobs</Link>
                <Link to="/" className='text-[16px] py-[8px] px-[24px] font-semibold'>Find Talents</Link>
                <Link to="/" className='text-[16px] py-[8px] px-[24px] font-semibold'>About us</Link>
                <Link to="/" className='text-[16px] py-[8px] px-[24px] font-semibold'>Testimonils</Link>
            </div>
            <div onClick={toggleJobModal}>
                <NavButton  name = "Create Jobs"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
