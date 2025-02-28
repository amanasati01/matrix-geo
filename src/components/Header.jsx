import { useState } from 'react'
import matrixgeoLogo from '../assets/matrixgeoLogo.png'
import { motion } from 'motion/react'
function Header() {
   
  return (
    <motion.div
    initial={{
         y : -50,
         opacity : 0
    }}
    whileInView={{
        y : 0,
        opacity : 1,
        transition :{
            type : 'spring'
        }
    }}
     className='w-full  h-14' >
      <div className='flex justify-between items-center px-24 mt-2'>
          <img src={matrixgeoLogo} width={100} height={100} alt="Matrix geo" />
          <ul className='flex justify-center items-center gap-8 text-[8px] font-extrabold'>
            <li>ABOUT</li>
            <li>SECTOR</li>
            <li>SERVICES</li>
            <li>PRODUCTS</li>
            <li>CONTACT US</li>
          </ul>
      </div>
    </motion.div>
  )
}

export default Header
