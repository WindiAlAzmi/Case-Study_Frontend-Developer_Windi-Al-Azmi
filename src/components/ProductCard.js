import React from 'react';

const ProductCard = ({data}) => {
         
    return (
        <div className="flex flex-col p-2 border border-neutral-400 rounded-lg p-3">
            <div><img src={data.images[0].imageUrl} className="rounded-lg h-50" alt={data.name} /></div>
            <div className=" flex flex-col left-0 text-black gap-4 text-left bg-white  py-5">
                <h2 className=" font-bold text-lg">{data.name}</h2>
                <p className="text-md font-bold ">$ {data.price}</p>
                <p className="text-md ">{data.description}</p>
            </div>
            <button className="bg-sky-900 border border-black text-white  w-full rounded-lg h-10 mb-2 grid place-items-center">View</button>
        </div>
    )
}

export default ProductCard;