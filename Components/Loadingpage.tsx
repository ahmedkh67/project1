"use client"

import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";

import { animate, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"



const Loadingpage = () => {

    
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    
    useEffect(() => {
        const controls = animate(count, 100, { duration: 0.8 })
        return () => controls.stop()
    }, [])


    return (
        <>
        <motion.div initial={{translateY: 0}} animate={{translateY: -900}} transition={{duration: 0.8 , ease: easeOut, delay: 1.4}} className="flex w-full h-screen bg-[var(--background)] fixed top-0 left-0 z-40 justify-center items-center animateupp">
            <div className="flex overflow-hidden ">
                <motion.div initial={{translateY: 0}} animate={{translateY: 80}} transition={{duration: 0.8, ease: easeOut, delay: 1.1}}  > 
                    
                        <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{ease: easeOut}} className="flex flex-row-reverse rounded-3xl justify-start items-center px-2 animatedownn">
                            {/* <Image src={icon} width={40} height={10} alt="icon star" /> */}
                            <p className="text-4xl">
                                %
                            </p>
                            <motion.pre className="text-5xl mx-1">{rounded}</motion.pre>
                        </motion.div>
                </motion.div>
            </div>
            
        </motion.div>
        </>
    )
}

export default Loadingpage ;

