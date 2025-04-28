"use client "

import { MiddleText } from '@/Constants'
import { motion, useTransform } from 'motion/react'
import React from 'react'
import { useRef } from 'react'
import { useScroll } from 'motion/react'


export default function Paragraph () {

    const element = useRef(null) ;

    const { scrollYProgress } = useScroll ({
        target: element , 
        offset: ['start 0.7', 'start 0.25']
    })

   const words = MiddleText.split(" ") ;

  return (
    <div 
    ref={element}

    className="w-full md:px-[21%] px-5 flex-col justify-between items-center md:pt-20 pb-12 ">
      <h1 
         className="md:text-7xl text-5xl font-extralight 
        -sans text-start py-7 flex flex-wrap" >
            {words.map((word, i) => {
            const start = i / words.length ; 
            const end = start + ( 1 / words.length ); 

            return <Word range= {[start, end]} progress={scrollYProgress} key={i}>{word}</Word>
            
            })}
      </h1>
    </div> 
  )
}

const Word = ({children, range, progress}: any) => {
    //
    const opacity = useTransform(progress, range, [0 , 1])
    return (
        <span className='mr-3 font-extralight font-sans relative '>
            <span className='opacity-[0.2] absolute'>{children}</span>
        <motion.span style={{opacity: opacity}}>
                {children}
        </motion.span>
        </span>
    )
}

