import React from 'react';
import { FaArrowRight} from "react-icons/fa";
function Footer({year, km, type, name}) {
    return (
        <div className='bg-[#CED4DA] flex justify-around border-t-4 border-t-[#000] mt-24 w-full text-2xl'>
            <div className='p-2'>
                <h1 className="">
                    {year}
                </h1>
                <p className='text-main'>Year</p>
            </div>
            <div className='p-2'>
                <h1>
                    {km}
                </h1>
                <p className='text-main'>
                    Millage
                </p>
            </div>
            <div className='p-2'>
                <h1>
                    {name}
                </h1>
                <p className='text-main'>{type}</p>
            </div>
            <div className="flex-col self-center -mt-1 cursor-pointer ">
                <div className="flex items-center">
                    <h1>Full Details</h1>
                    <h1><FaArrowRight/></h1>
                </div>
                <div className='w-full h-0.5 bg-[#000]'></div>
            </div>
        </div>
    );
}

export default Footer;