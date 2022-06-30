import React from 'react';
import {carsData} from "./carsData";
import SingleCar from "./SingleCar";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import {useState} from "react";
import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill} from "react-icons/bs";
import Footer from "./Footer";
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
        <div>
            <div className="relative 100vh flex justify-center align-middle items-center">

                {carsData.map((car, index)=>{
                    return(
                        <div key={index} className={index=== current? 'mt-20' : 'hidden transition duration-1000 ease-linear'}>
                            <SingleCar {...car} index = {index} />
                        </div>
                    );
                })}
                <div className="flex flex-col items-center ml-36 mt-36 ">
                    <div
                        onMouseOver={()=>{setHover1(true)}}
                        onMouseOut={()=>{setHover1(false)}}
                        className="text-2xl"
                    >
                        {hover1? <BsFillArrowUpCircleFill className="text-2xl" onClick={prevSlide}/>:<FaArrowUp onClick={prevSlide}/>}
                    </div>
                    <p className='pt-14 pb-14 text-2xl text_base'>
                        {current + 1}
                    </p>
                    <div onMouseOver={()=>{setHover2(true)}}
                         onMouseOut={()=>{setHover2(false)}}
                         className="text-2xl"
                    >
                        {hover2? <BsFillArrowDownCircleFill className="text-2xl" onClick={nextSlide}/>:<FaArrowDown onClick={nextSlide}/>}
                    </div>
                </div>
            </div>
            {carsData.map((info, index)=>{
                return(
                    <div key={index} className={index=== current? 'mt-8' : 'hidden transition duration-1000 ease-linear'}>
                        <Footer {...info} index = {index} />
                    </div>
                );
            })}
        </div>

    );
}

export default MainSlider;