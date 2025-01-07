/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../assets/GT.png";
import {motion} from "framer-motion"

const NavBar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
       <motion.div
       className='flex flex-shrink-0 items-center' >
         <img className='mx-2 w-10' src={logo} alt ="logo" />
       </motion.div>
    </nav>
  )
}

export default NavBar
