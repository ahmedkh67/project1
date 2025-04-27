"use client"

import Image from "next/image";

import { motion } from "motion/react";
import { easeOut,} from "motion";



type MainProductParams = {
  src: string | any, 
  Title: string, 
}


function MainProduct ({src, Title}: MainProductParams) {
  return (
    <motion.div initial={{translateY: 170, opacity: 50}}
    transition={{duration: 0.8, ease: easeOut}} whileInView={{translateY: 0, opacity: 100}}
    viewport={{once: true}} className="flex flex-col w-full justify-center items-center 
    p-4 md:mb-10 md:mt-10">
      <Image src={src} width={900} height={800} alt="im" 
      className="rounded-3xl mx-3 mb-3  md:translate-y-0 -translate-y-0" />
    </motion.div>
  )
}

export default MainProduct