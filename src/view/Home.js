import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className=" text-black flex flex-col  mb-auto">
            <div className="bg-white text-black text-2xl mt-4 text-left ml-3 font-bold"><h3>Best Sellers</h3></div>
            <Products  />
        </div>
    )
}

export default Home;