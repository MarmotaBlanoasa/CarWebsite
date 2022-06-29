import React from 'react';
import Footer from "./Footer";

function SingleCar({...car}) {
    return (
        <div className='mt-20'>
            <div className='flex'>
                <div className="-mt-8">
                    <h1 className='text-4xl mr-14'>${car.price}</h1>
                    <p className='text-secondary text-sm mt-1'>Cluj Napoca, RO</p>
                </div>
                <img className="" src={car.image} alt={car.name} />
            </div>
        </div>

    );
}

export default SingleCar;