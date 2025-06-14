"use client"

import Loadingpage from "@/Components/Loadingpage";
import { Authority, FooterObjects, Hero, MainProduct,
        Objects, ProductsImgs, PurchaseComp, PurchaseDialog, Slidedlogo } from "@/Components";
import { Authorityy, Heroo, MainProductt,
        Purchasingquote } from "@/Constants";
import Paragraph from "@/Components/MiddleParagraph";
import Drag from "@/Components/Mousedrag";


export default function Home() {



  
  return (
    <>
    
    <div className="flex flex-col w-full h-[90vh] md:h-screen justify-between overflow-hidden ">
      <Objects />
    </div>
    <Hero Title={Heroo.Title} Header={Heroo.Header}
     NavigateTitle={Heroo.NavigateTitle} />

     
    <div className="flex w-full h-full justify-center items-center">
  <div className="carousel">

    <div className="wrapper">
      <div className="flex wrapper-comp justify-center items-center  ">
        
          
        
      </div>
      <div className="flex wrapper-comp justify-center items-center ">
        
          
        
      </div>
      <div className="flex wrapper-comp justify-center items-center ">
        
          
        
      </div>
      <div className="flex wrapper-comp justify-center items-center ">
        
          
        
      </div>
      <div className="flex wrapper-comp justify-center items-center ">
        
          
        
      </div>
      <div className="flex wrapper-comp justify-center items-center ">
        
          
        
      </div>
      <div className="flex wrapper-comp justify-center items-center ">
        
          
        
      </div>
      <div className="flex wrapper-comp justify-center items-center ">
        
          
        
      </div>
    </div>
  </div>
</div>

    <MainProduct src={MainProductt.src} 
    Title={MainProductt.Dis} />  
    
    <Paragraph />




    <ProductsImgs /> 
    <Slidedlogo />
    <div className="hidden">
      <Authority Title={Authorityy.Title} src={Authorityy.src}
      Dis={Authorityy.Dis} />

    </div>
    
    <PurchaseComp Title={Purchasingquote} link={""} />
    <FooterObjects />   
    <Loadingpage /> 
     <Drag /> 
     <PurchaseDialog />
    

    </>
  );


  
}

