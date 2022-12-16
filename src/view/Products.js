import React from 'react';
import { useGetData } from '../hooks/httpRequest';


const Products = () => {

    let url = "https://639bbcf264fcf9c11ca22b0e.mockapi.io/api/v1/products/";

    const responseData = useGetData(url);


    let content = '';

    if(responseData.data){
        
    }



    return (
        <div className="bg-pink-200 grid grid-cols-1">
            {content}
        </div>
    )
}

export default Products;