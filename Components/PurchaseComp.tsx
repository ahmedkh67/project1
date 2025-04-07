import React from 'react'

type PurchaseCompparams = {
  Title: string, 
  link : string | URL, 
}

function PurchaseComp ({Title}: PurchaseCompparams){


  return (
    <>
    
    <div className="flex justify-center items-center mt-20 mb-15 px-4">
        <p className="text-2xl font-light font-sans text-center md:w-1/4 " >
        {Title}
        </p>
        
    </div>

    <div className="flex w-full justify-center items-center -mb-20">
      <button className="px-11 py-7  border-1 border-black border-solid rounded-full" >
        <p className="text-2xl font-sans text-center  " >
          Purchase Now
        </p>
      </button>
    </div>

    </>
  )
}

export default PurchaseComp