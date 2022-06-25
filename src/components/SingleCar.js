import React from 'react';
import Footer from "./Footer";

function SingleCar({price,image, name}) {
    return (
        <div>
            {price}
            <img src={image} alt={name}  />
            <Footer/>
        </div>

    );
}

export default SingleCar;