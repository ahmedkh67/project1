"use client"

import Loadingpage from "@/Components/Loadingpage";
import { motion } from "motion/react";
import { Authority, FooterObjects, Hero, MainProduct,
        Objects, ProductsImgs, PurchaseComp, Slidedlogo } from "@/Components";
import { Authorityy, Heroo, MainProductt, MiddleText,
        Purchasingquote } from "@/Constants";



export default function Home() {

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
      <motion.h1 initial={{opacity: 0 , translateY: 0}} whileInView={{opacity: 100, translateY: 0}} 
      viewport={{once: true}} transition={{duration: 0.4 , delay: 0.3}} className="md:text-7xl text-5xl font-extralight 
      font-sans text-start py-7">
        {MiddleText}
      </motion.h1>
    </div> 
    <ProductsImgs /> 
    <Slidedlogo />
    <div className="hidden">
      <Authority Title={Authorityy.Title} src={Authorityy.src}
      Dis={Authorityy.Dis} />

    </div>
    
    <PurchaseComp Title={Purchasingquote} link={""} />
    <FooterObjects />   
    <Loadingpage /> 
    </>
  );


  
}

