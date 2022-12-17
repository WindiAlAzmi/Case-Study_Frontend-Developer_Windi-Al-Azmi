import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {

    return (
        <div className="flex flex-col border border-neutral-400 rounded-lg p-3">
            <div><img src={data.images[0].imageUrl} className="rounded-lg w-full" alt={data.name} /></div>
            <div className=" flex flex-col left-0 text-black gap-4 text-left bg-white  py-5">
                <h2 className=" font-bold text-lg">{data.name}</h2>
                <p className="text-base font-bold ">$ {data.price}</p>
                <p className="text-base ">{data.description}</p>
            </div>
            <Link to={`/product/${data.id}`}>
            <button className="bg-sky-900 border border-black text-white  w-full rounded-lg h-10 mb-2 grid place-items-center">
                View
                </button></Link >
        </div>
    )
}

export default ProductCard;