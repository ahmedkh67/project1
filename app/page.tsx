"use client"

import Image from "next/image";
import Arrow from '@/public/Arrow.svg'
import Loadingpage from "@/Components/Loadingpage";
import { motion } from "motion/react";
import { easeOut } from "motion";

export default function Home() {
  return (
    <>
    <div className="flex flex-col w-full h-[90vh] md:h-screen justify-between overflow-hidden ">
      <motion.div
      initial={{translateX: 30}} animate={{translateX: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.1}}
      className="flex md:justify-end justify-end items-end overflow-hidden">
        <Image src={'/image2.webp'} alt="m" width={400} height={400} className="opacity-60 w-80 md:w-180  translate-x-10 -translate-y-20 md:-translate-y-5 "/>
        <Image src={'/flower1.webp'} alt="m" width={250} height={300} className="absolute w-40 md:w-74 -translate-y-10 md:translate-x-20 " />

      </motion.div>
      <motion.div
      initial={{translateX: -30}} animate={{translateX: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.1}}
      className="flex md:justify-start justify-end md:items-start items-end">
        <Image src={'/image1.webp'} alt="m" width={750} height={600} className="opacity-60 w-40 md:w-96 "  />
        <Image src={'/flower2.webp'} alt="m" width={370} height={300} className="absolute  w-25 md:w-60 " />

      </motion.div>
    </div>
    <div className="w-full md:px-[21%] px-4 flex-col justify-between items-center absolute top-30">
      <motion.div initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1, ease: easeOut, delay: 1.1}} >
        <p className="text-2xl font-light font-sans text-start py-15 md:opacity-100 opacity-0" >
          See our finest project Now !!
        </p>
      </motion.div>
      <motion.div initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.1}} >
        <h1 className="md:text-9xl text-6xl font-extralight font-sans text-start py-7">
        Make your work stand out
        </h1>
      </motion.div>
      <motion.div  initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.7, ease: easeOut, delay: 1.2}}
       className="flex justify-start items-center my-20">
        <p className="text-2xl font-light font-sans text-start " >
          View Objects
        </p>
        <motion.div initial={{rotate: 0}} animate={{rotate: 45}} transition={{duration: 1.4, ease: easeOut, delay: 1}} 
          className="flex w-7 h-7 rounded-full mx-3">
          <Image src={Arrow} width={25} height={30} alt="arrow" className="" />
        </motion.div>
      </motion.div>
      
    </div>
    <div className="flex flex-col w-full justify-center items-center p-4 md:mb-40 md:mb-10 ">
      <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl mx-3 mb-3  md:translate-y-0 -translate-y-10" />
      <p className="text-center w-full text-2xl" >
            Object 3
          </p>
    </div>
    

    <div className="w-full flex-col justify-between items-center md:pt-20 pb-12 overflow-hidden">
      <h1 className="md:text-9xl text-6xl font-extralight font-sans text-start py-7 md:mt-0">
      Make your work stand out
      </h1>
    </div>



    <div className="w-full md:px-[21%] px-4 flex-col justify-between items-center md:pt-20 pb-12 ">
      <h1 className="md:text-9xl text-6xl font-extralight font-sans text-start py-7">
      Make your work stand out
      </h1>
    </div>

    <div className="flex w-full justify-center items-center p-4 ">
      
      <div className=" mb-40" >
       
        <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl md:mx-0 mb-3" />
          <p className="text-start w-full text-2xl" >
            Object 1
          </p>
      </div>
    </div>


    <div className="flex w-full justify-center items-center p-4 ">
      
      <div className=" mb-40 " >
        
        <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl md:mx-0 mb-3" />
          <p className="text-start w-full text-2xl" >
            Object 2
          </p>
      </div>
    </div>


    <div className="flex w-full justify-center items-center p-4 ">
      
      <div className=" mb-40">
        
        <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl md:mx-0 mb-3" />
          <p className="text-start w-full text-2xl" >
            Object 3
          </p>
      </div>
    </div>
    

    <div className="w-full flex-col justify-between items-center md:pt-20 pb-12 ">
      <h1 className="md:text-9xl text-7xl font-extralight font-sans text-start py-7 overflow-hidden">
      Make your work stand out
      </h1>
    </div>

    <div className="flex justify-center items-center mt-20 mb-15 px-4">
        <p className="text-2xl font-light font-sans text-center md:w-1/4 " >
        Show your creativity with Blayden unique portfolio template - and get noticed today!
        </p>
        
    </div>

    <div className="flex w-full justify-center items-center -mb-20">
      <button className="px-11 py-7  border-1 border-black border-solid rounded-full" >
        <p className="text-2xl font-sans text-center  " >
          Purchase Now
        </p>
      </button>
    </div>

    <div className="flex w-full justify-between h-70 overflow-hidden absolute">
    <Image src={'/image3.webp'} width={700} height={600} alt="im" className="rounded-3xl absolute md:-left-35 -left-50 opacity-60 -bottom-45 md:top-0 " />
    <Image src={'/image4.webp'} width={800} height={600} alt="im" className="rounded-3xl absolute md:right-0 -right-50 opacity-60 " />

    </div>

    <div className="flex justify-center items-center w-14 h-14 bg-[#17171726] rounded-xl fixed bottom-4 right-4 md:right-20 md:bottom-10 z-10">
      <Image src={Arrow} width={30} height={30} alt="arrow" className="-rotate-90" />
    </div>
      
      
       <Loadingpage />   

    

    
    
    
    </>
  );
}


