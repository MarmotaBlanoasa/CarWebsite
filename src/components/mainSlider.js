import React from 'react';
import {carsData} from "./carsData";
import SingleCar from "./SingleCar";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import {useState} from "react";
function MainSlider() {
    const [current, setCurrent]  = useState(0)
    const length = carsData.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1? 0: current + 1 );
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current-1);
    }
    return (
        <div className="relative 100vh flex justify-center align-middle">
            <FaArrowUp onClick={prevSlide}/>
            {carsData.map((car, index)=>{
                return(
                    <div key={index} className={index=== current? 'slide' : 'hidden'}>
                    <SingleCar {...car} index = {index} />
                    </div>
                );
            })}
            <FaArrowDown onClick={nextSlide}/>
        </div>
    );
}

export default MainSlider;