import React from 'react';
import Footer from "./Footer";

function SingleCar({price,image, name}) {
    return (
        <div>
            <div className='flex'>
                <div>
                    <h1 className='text-4xl mr-14'>${price}</h1>
                    <p className='text-secondary text-sm mt-1'>Cluj Napoca, RO</p>
                </div>
                <img className="" src={image} alt={name} />
            </div>
            <Footer/>
        </div>

    );
}

export default SingleCar;