import React from 'react';
import {AiFillCar} from "react-icons/ai";
import {RiArrowDownSLine} from "react-icons/ri";
import {FiSearch} from "react-icons/fi";

function NavBar() {
    return (
        <div className="relative 100vh flex justify-around align-middle text-xl mt-8">
            <div className="flex justify-around items-center cursor-pointer">
                <AiFillCar className="text-2xl"/>
                <h1 className='ml-10 text-2xl'>carslot.</h1>

            </div>
            <div className="flex items-center">
                <div className="flex items-center cursor-pointer">
                    <h1 className="text-main text-lg">Eng</h1>
                    <RiArrowDownSLine className="ml-5" />
                </div>
                <FiSearch className="ml-28 cursor-pointer" />
            </div>
        </div>
    );
}

export default NavBar;