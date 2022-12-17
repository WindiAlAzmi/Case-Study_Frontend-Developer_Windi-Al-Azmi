import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetData } from '../hooks/HttpRequest';
import errorImage from "./../images/errorImage.svg";
import loader from "./../images/loader.svg";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


const ProductDetail = () => {
    
    const {id} = useParams();

    const url = `https://639bbcf264fcf9c11ca22b0e.mockapi.io/api/v1/products/${id}`;
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
           <div className="w-full mt-10 grid place-items-center ">
             <img className="md:h-64 md:w-1/2" src={errorImage} alt="errorImage" />
             <p>data is not found!</p>
           </div>
         );
       }


    if(responseData.data){
        content = (
          <div className="w-full p-4">
            <div className="flex md:w-1/3 md:ml-8 flex-col md:justify-start rounded-lg p-3">
              <h2 className=" font-bold text-xl mb-4 md:text-black text-white">{responseData.data.name}</h2>
              <div>
                <img src={responseData.data.images[0].imageUrl} className="rounded-lg w-full" alt={responseData.data.name} />
              </div>
              <div className=" flex flex-col left-0 text-black gap-4 text-left bg-white  py-5">
                <h2 className=" font-bold text-lg md:text-white text-black">{responseData.data.name}</h2>
                <p className="text-base font-bold md:-mt-10">$ {responseData.data.price}</p>
                <p className="text-base ">{responseData.data.description}</p>
              </div>
            </div>
             <Link to={`/`}>
              <button className="  text-black md:w-1/6 w-full  h-10 mb-2 flex flex-cols justify-start gap-4 items-center ml-2 md:ml-10">
               <BiArrowBack height="24"/><p>Back</p>
                </button>
                </Link>
          </div>
        );
      
    }

 


    return (
        <div className="w-full h-screen grow md:mb-20 p-4">
            {content}
        </div>
    )


}

export default ProductDetail;