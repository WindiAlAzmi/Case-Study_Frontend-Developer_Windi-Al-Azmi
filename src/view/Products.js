import React, {useState} from 'react';
import { useGetData } from './../hooks/HttpRequest';
import ProductCard from './../components/ProductCard';
import errorImage from './../images/errorImage.svg';
import loader from './../images/loader.svg';



const Products = () => {
   

    let url = "https://639bbcf264fcf9c11ca22b0e.mockapi.io/api/v1/products";

    const responseData = useGetData(url);
   
   


    let content = null;

    if(responseData.loading) {

              content = (
                <div className="w-full mt-20 md:mt-10 grid place-items-center">
                  <img className="w-full md:h-24 h-28" src={loader} alt="loader" />
                </div>
              );
          
 
    }

       if (responseData.error) {
         content = (
           <div className="w-full mt-10 grid place-items-center">
             <img className="md:h-64 md:w-1/2" src={errorImage} alt="errorImage" />
             <p>data is not found!</p>
           </div>
         );
       }


    if(responseData.data){
        content = (
          <div className="w-full place-items-center grid grid-cols-1 p-4 gap-8 md:grid-cols-3  lg:grid-cols-4">
            {responseData.data.map(dt => {
              return <ProductCard data={dt} />;
            })}
          </div>
        );
      
    }

 


    return (
        <div className="w-full">
            {content}
        </div>
    )
}

export default Products;