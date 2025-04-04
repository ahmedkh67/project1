"use client"

import React from "react"
import Image from "next/image";
import icon from '@/public/Icon.svg'
import mode from '@/public/dark.svg'
import { motion } from "motion/react";
import { easeOut } from "motion";

const Navbar = () => {
    return (
        <>
        <div className="flex w-full justify-center md:mx-0">
            <motion.div
            initial={{opacity: 0}} animate={{opacity: 1}} 
            transition={{duration: 0.7, ease:easeOut ,delay: 1.6}}
            className="flex h-17 w-[90%]
            rounded-2xl my-5 fixed z-30 justify-between items-center    ">
                <div className="flex bg-[#17171746 h-full rounded-xl items-center">
                    <div className="flex h-full w-44 rounded-3xl justify-start items-center px-2">
                        <Image src={icon} width={40} height={10} alt="icon star" />
                        <p className="text-4xl mx-1" >
                            Fonat
                        </p>
                    </div>
                    <div className="flex items-center fixed md:static bottom-4 left-3">
                        <div className="flex w-12 h-12 rounded-xl bg-[#17171746] mx-1 ">

                        </div>
                        <div className="flex w-12 h-12 rounded-xl bg-[#17171746] mx-1 ">

                        </div>
                        <div className="flex w-12 h-12 rounded-xl bg-[#17171746] mx-1 ">

                        </div>
                    </div>
                    
                </div>
                


                <div className="flex justify-center items-center">
                    <button className="bg-black rounded-full w-10 h-10 mx-3 flex justify-center items-center " >
                    <Image src={mode} width={26} height={26} alt="dark mode " />
                    </button>
                    <button className="px-7 bg-black py-3 rounded-2xl h-14 ">
                    <h2 className="text-lg font-sans text-center font-light text-white md:flex hidden  " >
                        Buy Now
                    </h2>
                    </button>
                </div>
                
            </motion.div>
        </div>

        
        </>
    )
}
export default Navbar ;