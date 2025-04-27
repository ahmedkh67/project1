"use client"


import { motion } from "motion/react"
import Image from "next/image"
import icon from '@/public/Icon.svg'


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
    transition={{duration: 0.8, delay: 0.2}} className="flex w-full relative overflow-hidden
     bg-amber-4000 md:mt-20 mb-10 -mt-[40%] ">

      <h1 className="Scrollitem md:Scrollitems Scrollitems2 md:text-8xl text-6xl text-nowrap text-white ">
        <Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat<Image src={icon} alt={"start icon "} width={70} height={70} />Fonat
      </h1>

      
    </motion.div>

    </>
  )
}

export default Slidedlogo