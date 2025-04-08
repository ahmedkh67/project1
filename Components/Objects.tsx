"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { easeOut } from "motion";




type Objectsparams = {
  src: string, 
}



const Objects = () => {
  return (
    <>
    <motion.div id="headpage"
      
    initial={{translateX: 30}} animate={{translateX: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.4}} 
    className="flex md:justify-end justify-end items-end overflow-hidden">

        <Image src={'/image2.webp'} alt="m" width={400} height={400} 
        className="opacity-70 w-80 md:w-180  translate-x-10 -translate-y-20 md:-translate-y-5 Objects"/>
    
        <Image src={'/flower1.webp'} alt="m" width={250} height={300} 
        className="absolute w-40 md:w-74 -translate-y-10 md:translate-x-20 " />
    </motion.div>

    <motion.div
    initial={{translateX: -30}} animate={{translateX: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.1}}
    className="flex md:justify-start justify-end md:items-start items-end">

        <Image src={'/image1.webp'} alt="m" width={750} height={600} className="opacity-70 w-40 md:w-96 Objects"  />
        <Image src={'/flower2.webp'} alt="m" width={370} height={300} className="absolute  w-25 md:w-60 " />

    </motion.div>
    </>
  )
}

export default Objects