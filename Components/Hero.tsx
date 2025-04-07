"use client"

import Image from "next/image";
import Arrow from '@/public/Arrow.svg'
import { motion } from "motion/react";
import {easeOut } from "motion";

type HeroParams = {
  Title: string, 
  Header: string, 
  NavigateTitle: string, 
}


function Hero ({Title, Header, NavigateTitle}: HeroParams) {
  return (
    <div className="w-full md:px-[21%] px-4 flex-col justify-between items-center absolute top-30">
      <motion.div initial={{translateY: 30}} animate={{translateY: 0}} 
      transition={{duration: 1, ease: easeOut, delay: 1.4}} >
        <p className="text-2xl font-light font-sans text-start pt-15 pb-5 md:opacity-100 opacity-0" >
          {Header}
        </p>
      </motion.div>
      <motion.div initial={{translateY: 30}} animate={{translateY: 0}} 
      transition={{duration: 1.5, ease: easeOut, delay: 1.4}} >
        <h1 className="md:text-9xl text-6xl font-extralight font-sans text-start py-7">
        {Title}
        </h1>
      </motion.div>
      <motion.div  initial={{translateY: 30}} animate={{translateY: 0}} 
      transition={{duration: 1.7, ease: easeOut, delay: 1.5}}
       className="flex rounded-full justify-start items-center md:mb-20  my-20">
        <p className="text-2xl font-light font-sans text-start" >
          {NavigateTitle}
        </p>
        <motion.div initial={{rotate: 0}} animate={{rotate: 45}} 
        transition={{duration: 1.4, ease: easeOut, delay: 1.4}} 
          className="flex rounded-full mx-3">
          <Image src={Arrow} width={25} height={25} alt="arrow" className="" />
        </motion.div>
      </motion.div>
      
    </div>
  )
}

export default Hero