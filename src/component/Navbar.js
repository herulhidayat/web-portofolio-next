import Image from "next/image"
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return(
        <>
            <div className="md:item-center md:justify-between md:flex bg-[#FBF8CC] text-[#03045E] font-poppins px-5 w-full">
                <div className="my-auto py-2 justify-between items-center flex p-5">
                    <span className="text-2xl font-semibold">Khairul Hidayat</span>
                    <div className={`${open ? "hidden" : "md:hidden flex"} cursor-pointer`} onClick={() => setOpen(!open)}>
                        <Image
                            src="/icons/bars-solid.svg"
                            alt="dash icon"
                            layout="intrinsic"
                            width="24"
                            height="24"
                        />
                    </div>
                    <div className={`${!open ? "hidden" : "md:hidden flex"} cursor-pointer`} onClick={() => setOpen(!open)}>
                        <Image
                            src="/icons/xmark-solid.svg"
                            alt="dash icon"
                            layout="intrinsic"
                            width="24"
                            height="24"
                        />
                    </div>
                </div>
                <div 
                className={`bg-[#FBF8CC] w-full ${open
                    ? "z-[-1]"
                    : "opacity-0 absolute"
                } transition-all ease-in duration-500 fixed md:z-auto md:static left-0 md:w-auto md:opacity-100`}>
                    <ul className="text-base font-normal md:py-0 py-4 md:pl-0 pl-7 md:flex md:items-center md:justify-between">
                        <li className="md:p-5 py-3 md:my-auto">
                            <a href="/">Home</a>
                        </li>
                        <li className="md:p-5 py-3 md:my-auto">
                            <a href="/">About</a>
                        </li>
                        <li className="md:p-5 py-3 md:my-auto">
                            <a href="/">Work</a>
                        </li>
                        <button className="text-white bg-[#03045E] hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 my-auto">Contact Me</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar