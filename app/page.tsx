"use client"

import Image from "next/image";
import Arrow from '@/public/Arrow.svg'
import Loadingpage from "@/Components/Loadingpage";
import { motion } from "motion/react";
import { easeInOut, easeOut } from "motion";
import { useEffect, useState } from "react";
import icon from '@/public/Icon.svg'
import Link from "next/link";



export default function Home() {

  const [OffsetY, setOffsetY] = useState(0)

  const handlescroll = () => setOffsetY(window.pageYOffset) ;

  useEffect(() => {
    window.addEventListener("scroll", handlescroll) ;
    
    return () => window.removeEventListener("scroll", handlescroll) ;

  }, []) 



  return (
    <>
    <div className="flex flex-col w-full h-[90vh] md:h-screen justify-between overflow-hidden ">
      <motion.div id="headpage"
      
      initial={{translateX: 30}} animate={{translateX: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.1}} 
      className="flex md:justify-end justify-end items-end overflow-hidden">
        <Image src={'/image2.webp'} alt="m" width={400} height={400} className="opacity-70 w-80 md:w-180  translate-x-10 -translate-y-20 md:-translate-y-5 "/>
        
        <Image src={'/flower1.webp'} alt="m" width={250} height={300} className="absolute w-40 md:w-74 -translate-y-10 md:translate-x-20 " />
        </motion.div>
          <motion.div
          initial={{translateX: -30}} animate={{translateX: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.1}}
          className="flex md:justify-start justify-end md:items-start items-end">

            <Image src={'/image1.webp'} alt="m" width={750} height={600} className="opacity-70 w-40 md:w-96 "  />
            <Image src={'/flower2.webp'} alt="m" width={370} height={300} className="absolute  w-25 md:w-60 " />

          </motion.div>
        
    </div>
    <div className="w-full md:px-[21%] px-4 flex-col justify-between items-center absolute top-30">
      <motion.div initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1, ease: easeOut, delay: 1.1}} >
        <p className="text-2xl font-light font-sans text-start pt-15 pb-5 md:opacity-100 opacity-0" >
          See our finest project Now !!
        </p>
      </motion.div>
      <motion.div initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.5, ease: easeOut, delay: 1.1}} >
        <h1 className="md:text-9xl text-6xl font-extralight font-sans text-start py-7">
        Make your work stand out
        </h1>
      </motion.div>
      <motion.div  initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.7, ease: easeOut, delay: 1.2}}
       className="flex rounded-full justify-start items-center md:mb-20  my-20">
        <p className="text-2xl font-light font-sans text-start" >
          Our Product
        </p>
        <motion.div initial={{rotate: 0}} animate={{rotate: 45}} transition={{duration: 1.4, ease: easeOut, delay: 1}} 
          className="flex rounded-full mx-3">
          <Image src={Arrow} width={25} height={25} alt="arrow" className="" />
        </motion.div>
      </motion.div>
      
    </div>
    <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} transition={{duration: 1.1, ease: easeInOut}} className="flex flex-col w-full justify-center items-center p-4 md:mb-10 md:mt-10">
      <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl mx-3 mb-3  md:translate-y-0 -translate-y-10" />
    
        <p className='text-center w-full text-2xl' >
              Object 3
            </p>
          
    </motion.div>
    



    <div className="w-full md:px-[21%] px-5 flex-col justify-between items-center md:pt-20 pb-12 ">
      <h1 className="md:text-7xl text-4xl font-extralight font-sans text-start py-7">
      Make your work stand out  Make your work fjiewjfkmew ifewfiewjfmk ewf.ewf fewfew ur work stand out
      </h1>
    </div>

    <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} transition={{duration: 1.1, ease: easeInOut}} className="flex flex-col w-full justify-center items-center p-4 md:mb-10 md:mt-10">
      <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl mx-3 mb-3  md:translate-y-0 -translate-y-10" />         
    </motion.div>

    <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} transition={{duration: 1.1, ease: easeInOut}} className="flex w-full justify-center items-center p-4 ">
      
      <div className="w-full md:px-[21%] flex-col mb-40" >
          <motion.div  initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.7, ease: easeOut, delay: 1.2}}
          className="flex justify-start items-center my-10">
            <p className="text-2xl font-light font-sans text-start " >
              Authority
            </p>
            <motion.div initial={{rotate: 0}} animate={{rotate: 45}} transition={{duration: 1.4, ease: easeOut, delay: 1}} 
              className="flex w-7 h-7 rounded-full mx-3">
              <Image src={Arrow} width={25} height={30} alt="arrow" className="" />
            </motion.div>
          </motion.div>
        <Image src={'/persona.webp'} width={800} height={800} alt="im" className="rounded-3xl md:mx-0 mb-3" />
          <p className="text-start text-2xl mt-6" >
          Make your work stand out  Make your work fjiewjfkmew ifewfiewjfmk ewf.ewf fewfew ur work stand out

          </p>
          <motion.div  initial={{translateY: 30}} animate={{translateY: 0}} transition={{duration: 1.7, ease: easeOut, delay: 1.2}}
       className="flex md:w-40 md:h-40 w-30 h-30 border-1 border-[#17171] border-solid rounded-full justify-center items-center md:mb-15 my-8">
        <p className="text-2xl font-light font-sans text-start" >
          Contact
        </p>
        
      </motion.div>
      </div>
      
    </motion.div>
    

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

    <Link className="flex back justify-center items-center w-14 h-14 bg-[#17171726] rounded-xl fixed bottom-4 right-4 md:right-20 md:bottom-10 z-10" href={"#headpage"}>
      <Image src={Arrow} width={30} height={30} alt="arrow" className="-rotate-90" />
    </Link>
      
      
       <Loadingpage />   

    </>
  );


  
}

