"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { easeInOut} from "motion";
import { ProductImages } from "@/Constants";

type ProductsImgsparams = {
  src: string , 
}

const ProductsImgs = () => {
  return (
    <>
    <div className="flex w-full flex-col mb-0 mt-20">
      {ProductImages.map((item) => (
          <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} 
          transition={{duration: 1.1, ease: easeInOut}} className="flex flex-col w-full justify-center items-center
          p-4 md:mb-10 mb-[60%] md:mt-10 sticky md:top-25 top-[30%] ">
            <Image src={item.src} width={800} height={800} alt="im" 
            className="rounded-3xl mx-3 mb-3 md:translate-y-0 -translate-y-10 md:h-[500px] h-[400px] " />         
        </motion.div>
      ))}
    </div>
    
    {/*
    <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} transition={{duration: 1.1, ease: easeInOut}} className="flex flex-col w-full justify-center items-center p-4 md:mb-10 md:mt-10">
      <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl mx-3 mb-3  md:translate-y-0 -translate-y-10" />         
    </motion.div>
    <motion.div initial={{scale: 0.95}} whileHover={{scale: 1}} transition={{duration: 1.1, ease: easeInOut}} className="flex flex-col w-full justify-center items-center p-4 md:mb-10 md:mt-10">
      <Image src={'/object1.webp'} width={800} height={800} alt="im" className="rounded-3xl mx-3 mb-3  md:translate-y-0 -translate-y-10" />         
    </motion.div>

*/ }


    </>
  )
}

export default ProductsImgs