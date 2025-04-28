"use client"

import React from "react"
import Image from "next/image";
import icon from '@/public/Icon.svg'
import mode from '@/public/dark.svg'
import { motion } from "motion/react";
import { easeOut } from "motion";
import instaicon from '@/public/insta.svg'
import gmailicon from '@/public/gmail.svg'
// import youtubeicon from '@/public/youtube.svg'
import Arrow from '@/public/Arrow.svg'
import Link from "next/link";
import order from '@/public/order.svg'
import { useState } from "react";



type NavbarParams = {
    Name: string , 
    Link: string | URL , 
    src: string | any, 
}

const Navbar = () => {


        const [open , setopen] = useState(false)



    return (
        <>

            <motion.div initial={{opacity: 0, translateY: -50}} whileInView={{opacity: 90, translateY: 0}} transition={{duration: 0.5}} className={` ${open ? ' flex ' : ' hidden ' } w-full h-full justify-center items-center fixed top-0 left-0 bg-[#171717be] z-30  *:` }>
                <div className="flex md:w-1/3 md:h-130 bg-[#1e1e1e] rounded-2xl fixed w-[93%] h-[70%] flex-col md:py-6 py-4 md:px-6 px-3 justify-between">
        
        
                    <div className="flex justify-between md:items-start items-end flex-col-reverse md:flex-row">
                        <h1 className='md:text-3xl text-3xl text-start my-2 mb-6 md:my-0'>
                        Let's make sothing awesome together!
                        </h1>
                        <button className='md:text-xl text-lg font-sans border-1 border-solid px-3 rounded-2xl my-2 md:my-0 ' onClick={() => {setopen(!open) }} >
                            Close
                        </button>
                    </div>
        
        
                    <form className="flex h-3/4 w-full flex-col  ">
                        <input type="text" name="" id="" className='w-full h-12  text-2xl font-sans transition-[0.6]  border-b-1 border-solid my-2 focus:border-blue-400 focus:outline-0 placeholder:opacity-50 ' placeholder='Name '  required/>
                        <input type="text" name="" id="" className='w-full h-12  text-2xl font-sans transition-[0.6] border-b-1 border-solid my-2  focus:border-blue-400 focus:outline-0  placeholder:opacity-50  ' placeholder='XXXX@gmail.com ' required />
                        <input type="text" name="" id="" className='w-full h-12  text-2xl font-sans transition-[0.6] border-b-1 border-solid my-2  focus:border-blue-400 focus:outline-0  placeholder:opacity-50  ' placeholder='05X XXX XXXX ' required />
                        <button className='w-3/4 h-12 rounded-2xl md:text-3xl text-2xl border-1 border-solid mt-10 md:mt-20' type="submit" >Submit </button>
                    </form>
        
        
                </div>
            </motion.div>



        <div className="flex w-full justify-center md:mx-0">
            <motion.div
            initial={{opacity: 1}} animate={{opacity: 1}} 
            transition={{duration: 0.7, ease:easeOut ,delay: 1.7}}
            className="flex h-17 w-[90%]
            rounded-2xl my-5 fixed z-30 justify-between items-center    ">
                <div className="flex h-full  rounded-xl items-center">
                    <div className="flex h-full w-44 back md:mr-4 rounded-3xl justify-start items-center px-2 z-30">
                        <Image src={icon} width={40} height={10} alt="icon star" className="rotateanimate" />
                        <p className="text-4xl mx-1" >
                            Fonat
                        </p>
                    </div>
                    <div className="flex items-center fixed md:static bottom-4 left-3">
                        <button className="flex justify-center back items-center w-12 h-12 
                        rounded-xl bg-[#17171746] mx-1 ">
                            <Image src={instaicon} width={29} height={30} alt="insta icon" />
                        </button>
                        
                        <button className="flex justify-center back items-center w-12 h-12 
                        rounded-xl bg-[#17171746] mx-1 ">
                            <Image src={gmailicon} width={30} height={30} alt="insta icon" />
                        </button>
                        
                       {/* <button className="flex justify-center back items-center w-12 h-12 
                        rounded-xl bg-[#17171746] mx-1 ">
                            <Image src={youtubeicon} width={30} height={30} alt="insta icon" />
                        </button> 
                        */ }
                    </div>
                    
                </div>
                


                <div className="flex justify-center items-center">
                    <button className="bg-black rounded-full w-10 h-10 mx-3 flex justify-center items-center " >
                    <Image src={mode} width={26} height={26} alt="dark mode " />
                    </button>
                    <button className="md:px-7 px-3  bg-black py-3 rounded-2xl h-14 " onClick={() => {setopen(!open)}}  >
                        <h2 className="text-lg font-sans text-center font-light text-white md:flex hidden  " >
                            Buy Now
                        </h2>
                        <Image src={order} alt="order icon " width={30} height={50} className="md:hidden flex " />
                    </button>
                </div>
                
            </motion.div>
        </div>

        <Link className="flex back justify-center items-center w-14 h-14 bg-[#17171726] rounded-xl 
        fixed bottom-4 right-4 md:right-20 md:bottom-10 z-10" href={"#headpage"}>
            <Image src={Arrow} width={30} height={30} alt="arrow" className="-rotate-90" />
        </Link>






        





        </>
    )



    

}





export default Navbar ;


