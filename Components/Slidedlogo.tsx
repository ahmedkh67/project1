"use client"

import { easeOut } from "motion"
import { motion } from "motion/react"


const Slidedlogo = () => {
  return (
    <>
    
    {/*
    
    <div className=" flex flex-row md:pt-20 pb-12 overflow-hidden slider-Wrapper flex-nowrap ">

    <div className="flex mx-2">
    <Image src={icon} width={100} height={10} alt="icon star" className=" rotation" />

    <h1 className="md:text-9xl text-7xl font-extralight font-sans text-start text-nowrap overflow-hidden  item item1">
    Fonat
    </h1>
    </div>
    <div className="flex mx-2">
    <Image src={icon} width={100} height={10} alt="icon star" className=" rotation" />

    <h1 className="md:text-9xl text-7xl font-extralight font-sans text-start text-nowrap overflow-hidden  item item1">
    Fonat
    </h1>
    </div>

        
    </div>
    */ }

    <motion.div initial={{height: 0}} whileInView={{height: 200}} viewport={{once: true}}
    transition={{duration: 0.7 , ease: easeOut}} className="flex w-full relative overflow-hidden bg-amber-400 md:m-0 -mt-[40%]">

      <h1 className="Scrollitem text-8xl text-nowrap">
        fonat fonat fonat fonat fonat fonat fonat  fonat fonat fonat fonat fonat fonat fonat
      </h1>

      
    </motion.div>

    </>
  )
}

export default Slidedlogo