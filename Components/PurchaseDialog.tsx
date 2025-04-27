"use client "

import { motion } from 'motion/react'
import React from 'react'


const PurchaseDialog = () => {

  return (
    <motion.div initial={{opacity: 0, translateY: -50, visibility: 'hidden'}} animate={{opacity: 90, translateY: 0, visibility: 'visible'}} transition={{duration: 0.5, delay: 10}} className="flex w-full h-full justify-center items-center fixed top-0 left-0 bg-[#171717be] z-30">
        <div className="flex md:w-1/3 md:h-130 bg-[#1e1e1e] rounded-2xl fixed w-[93%] h-[70%] flex-col md:py-6 py-4 md:px-6 px-3 justify-between">


            <div className="flex justify-between md:items-start items-end flex-col-reverse md:flex-row">
                <h1 className='md:text-3xl text-3xl text-start my-2 mb-6 md:my-0'>
                Let's make sothing awesome together!
                </h1>
                <button className='md:text-xl text-lg font-sans border-1 border-solid px-3 rounded-2xl my-2 md:my-0 '>
                    Close
                </button>
            </div>


            <form className="flex h-3/4 w-full flex-col  ">
                <input type="text" name="" id="" className='w-full h-12  text-2xl font-sans  border-b-1 border-solid my-2 ' placeholder='Name '  required/>
                <input type="text" name="" id="" className='w-full h-12  text-2xl font-sans  border-b-1 border-solid my-2 ' placeholder='XXXX@gmail.com ' required />
                <input type="text" name="" id="" className='w-full h-12  text-2xl font-sans  border-b-1 border-solid my-2 ' placeholder='05X XXX XXXX ' required />
                <button className='w-3/4 h-12 rounded-2xl md:text-3xl text-2xl border-1 border-solid mt-10 md:mt-20' type="submit" >Submit </button>
            </form>


        </div>
    </motion.div>
    
  )
}

export default PurchaseDialog 

