"use client"

import Image from "next/image";

type FooterObjectsParams = {
  src: string ,
}

const FooterObjects = () => {
  return (
    <div className="flex w-full justify-between h-70 overflow-hidden absolute">
      
    <Image src={'/image3.webp'} width={700} height={600} alt="im" 
    className="rounded-3xl absolute md:-left-35 -left-50 opacity-60 -bottom-45 md:top-0 " />
    <Image src={'/image4.webp'} width={800} height={600} alt="im" 
    className="rounded-3xl absolute md:right-0 -right-50 opacity-60 " />
    </div>
  )
}

export default FooterObjects