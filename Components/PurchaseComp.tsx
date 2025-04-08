'use client'

import React from 'react'
import { motion } from 'motion/react'

type PurchaseCompparams = {
  Title: string, 
  link : string | URL, 
}

function PurchaseComp ({Title}: PurchaseCompparams){


  return (
    <>
    
    <motion.div initial={{translateY: 50}} 
    whileInView={{ translateY: 0}}
    transition={{duration: 0.4}}
    className="flex justify-center items-center mt-40 mb-15 px-4">
      <p className="text-2xl font-light font-sans text-center md:w-1/4 " >
      {Title}
      </p>
        
    </motion.div>

    <motion.div initial={{translateY: 40}} 
    whileInView={{ translateY: 0}} 
    transition={{duration: 0.6, }}
    className="flex w-full justify-center items-center -mb-20">
      <button className="px-11 py-7  border-1 border-black border-solid rounded-full" >
        <p className="text-2xl font-sans text-center  " >
          Purchase Now
        </p>
      </button>
    </motion.div>
    </>
  )
}

export default PurchaseComp