import React from 'react';

function SingleCar({...car}) {
    return (
        <div className='mt-20'>
            <div className='flex'>
                <div className="-mt-11">
                    <h1 className='text-4xl mr-24 bold_text'>${car.price}</h1>
                    <p className='text-secondary text-sm mt-3 text_base'>Cluj Napoca, RO</p>
                </div>
                <img className="" src={car.image} alt={car.name} />
            </div>
        </div>

    );
}

export default SingleCar;