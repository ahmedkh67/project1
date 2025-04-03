import React from "react"

const Navbar = () => {
    return (
        <>
        <div className="flex w-full justify-center md:mx-0">
            <div className="flex h-20 w-[90%]
            rounded-2xl my-5 fixed z-30 justify-between items-center    ">
                <div className="flex bg-white h-full opacity-20 rounded-3xl">
                    <div className="flex h-full w-40 bg-black rounded-3xl">

                    </div>
                </div>


                <div className="flex justify-center items-center">
                    <button className="bg-black rounded-full w-10 h-10 mx-3" >

                    </button>
                    <button className="px-7 bg-black py-3 rounded-2xl h-14 ">
                    <h2 className="text-lg font-sans text-center font-light text-white md:flex hidden  " >
                        Buy Now
                    </h2>
                    </button>
                </div>
                
            </div>
        </div>
        
        </>
    )
}
export default Navbar ;