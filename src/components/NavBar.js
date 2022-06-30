import React, {useState} from 'react';
import {AiFillCar} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import SearchModal from "./SearchModal";
function NavBar() {
    const [open, setOpen] = useState(false)
    const handleClick = ()=>{
        setOpen(!open)
    }
    return (
        <div className="relative 100vh flex justify-around align-middle text-xl mt-8">
            <div className="flex justify-around items-center cursor-pointer">
                <AiFillCar className="text-2xl"/>
                <h1 className='ml-10 text-2xl regular_text'>carslot.</h1>

            </div>
            <div className="flex items-center regular_text">
                <div className="flex items-center cursor-pointer">
                    <form className="text-main text-lg">
                        <select className='bg-[#E9ECEF] border-0 focus:border-0 focus:outline-none'>
                            <option>
                                Eng
                            </option>
                            <option>
                                Ro
                            </option>
                        </select>
                    </form>
                </div>
                <FiSearch className="ml-28 cursor-pointer" onClick={handleClick} />

            </div>
            {open? <SearchModal open={open} /> : null}
        </div>
    );
}

export default NavBar;