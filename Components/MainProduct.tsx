"use client"

import Image from "next/image";

import { motion } from "motion/react";
import { easeInOut,} from "motion";


type MainProductParams = {
  src: string | any, 
  Title: string, 
}


function MainProduct ({src, Title}: MainProductParams) {
  return (
    <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} 
    transition={{duration: 1.1, ease: easeInOut}} className="flex flex-col w-full justify-center items-center 
    p-4 md:mb-10 md:mt-10">
      <Image src={src} width={800} height={800} alt="im" 
      className="rounded-3xl mx-3 mb-3  md:translate-y-0 -translate-y-0" />
          
    </motion.div>
  )
}

export default MainProduct