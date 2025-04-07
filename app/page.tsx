"use client"

import Image from "next/image";
import Arrow from '@/public/Arrow.svg'
import Loadingpage from "@/Components/Loadingpage";
import { motion } from "motion/react";
import { easeInOut, easeOut } from "motion";
import { useEffect, useState } from "react";
import icon from '@/public/Icon.svg'
import Link from "next/link";
import { Authority, FooterObjects, Hero, MainProduct, Objects, ProductsImgs, PurchaseComp, Slidedlogo } from "@/Components";
import { Authorityy, Heroo, MainProductt, MiddleText, Purchasingquote } from "@/Constants";



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

      <Objects />

    </div>

    <Hero Title={Heroo.Title} Header={Heroo.Header}
     NavigateTitle={Heroo.NavigateTitle} />

    <MainProduct src={MainProductt.src} 
    Title={MainProductt.Dis} />
    



    <div className="w-full md:px-[21%] px-5 flex-col justify-between items-center md:pt-20 pb-12 ">
      <motion.h1 initial={{opacity: 0 , translateY: -30}} whileInView={{opacity: 100, translateY: 0}} viewport={{once: true}} transition={{duration: 0.4 , delay: 0.3}} className="md:text-7xl text-4xl font-extralight font-sans text-start py-7">
      {MiddleText}
      </motion.h1>
    </div>


    <ProductsImgs />
    
    <Slidedlogo />
    

    <Authority Title={Authorityy.Title} src={Authorityy.src}
     Dis={Authorityy.Dis} />

    
    <PurchaseComp Title={Purchasingquote} link={""} />

    
    <FooterObjects />
    
      
       <Loadingpage /> 
    </>
  );


  
}

