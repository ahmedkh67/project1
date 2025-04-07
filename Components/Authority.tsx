"use client"

import Image from "next/image";
import Arrow from '@/public/Arrow.svg'
import { motion } from "motion/react";
import { easeInOut, easeOut } from "motion";

type AuthorityParams = {
  Title: string, 
  src: string, 
  Dis: string
}

function Authority ({Title, src, Dis }: AuthorityParams) {
  return (
    <>
      <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} transition={{duration: 1.1, ease: easeInOut}} className="flex w-full justify-center items-center p-4 ">
      
      <div className="w-full md:px-[21%] flex-col " >
          <motion.div  initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.7, ease: easeOut, delay: 1.2}}
          className="flex justify-start items-center my-10">
            <p className="text-2xl font-light font-sans text-start " >
              {Title}
            </p>
            <motion.div initial={{rotate: 0}} animate={{rotate: 45}} transition={{duration: 1.4, ease: easeOut, delay: 1}} 
              className="flex w-7 h-7 rounded-full mx-3 ">
              <Image src={Arrow} width={25} height={30} alt="arrow" className="" />
            </motion.div>
          </motion.div>
        <Image src={src} width={800} height={800} alt="im" className="rounded-3xl md:mx-0 mb-3" />
          <p className="text-start text-2xl mt-6" >
          {Dis}

          </p>
          <motion.div  initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.7, ease: easeOut, delay: 1.2}}
       className="flex md:w-40 md:h-40 w-30 h-30 border-1 border-[#17171] border-solid rounded-full justify-center items-center md:mb-15 my-8">
        <p className="text-2xl font-light font-sans text-start" >
          Contact
        </p>
        
      </motion.div>
      </div>

      
      
    </motion.div>
   
    </>
  )
}



export default Authority