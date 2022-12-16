import React from 'react';
import { useGetData } from './../hooks/HttpRequest';
import ProductCard from './../components/ProductCard';
import errorImage from './../images/errorImage.svg';
import loader from './../images/loader.svg';

const Products = () => {

    let url = "https://639bbcf264fcf9c11ca22b0e.mockapi.io/api/v1/products";

    const responseData = useGetData(url);
    console.log(responseData);
   


    let content = '';

    if(responseData.loading) {
        content = 
        <div><img src={loader} className="w-1/2" alt="loader" /></div>
    }


    if(responseData.data){
    
        content = (
          <div className="w-full place-items-center grid grid-cols-1 p-4 gap-8 md:grid-cols-4">
            {responseData.data.map(dt => {
              return <ProductCard data={dt} />;
            })}
          </div>
        );
      
    }

    if(responseData.error){
        content = 
        <div className="">
            <img src={errorImage} alt="errorImage" />
            <p>data is not found!</p>
        </div>
    }


    return (
        <div className="w-full">
            {content}
        </div>
    )
}

export default Products;