import React from 'react';
import {carsData} from "./carsData";
import SingleCar from "./SingleCar";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import {useState} from "react";
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from "react-icons/bs";
function MainSlider() {
    const [current, setCurrent]  = useState(0)
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const length = carsData.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1? 0: current + 1 );
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current-1);
    }
    return (
        <div className="relative 100vh flex justify-center align-middle items-center">

            {carsData.map((car, index)=>{
                return(
                    <div key={index} className={index=== current? 'mt-20' : 'hidden transition duration-1000 ease-linear'}>
                    <SingleCar {...car} index = {index} />
                    </div>
                );
            })}
            <div className="flex flex-col items-center ml-28 ">
                <div
                    onMouseOver={()=>{setHover1(true)}}
                    onMouseOut={()=>{setHover1(false)}}
                    className="text-2xl"
                >
                    {hover1? <BsFillArrowUpCircleFill className="text-4xl" onClick={prevSlide}/>:<FaArrowUp onClick={prevSlide}/>}
                </div>
                <p className='p-8 text-2xl'>
                    {current + 1}
                </p>
                <div onMouseOver={()=>{setHover2(true)}}
                     onMouseOut={()=>{setHover2(false)}}
                     className="text-2xl"
                >
                    {hover2? <BsFillArrowDownCircleFill className="text-4xl" onClick={nextSlide}/>:<FaArrowDown onClick={nextSlide}/>}
                </div>

            </div>
        </div>
    );
}

export default MainSlider;