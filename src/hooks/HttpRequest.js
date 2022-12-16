import {useEffect, useState} from 'react';
import axios from 'axios';


export function useGetData(url){
    const [requestData, setRequestData] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setRequestData({
            loading:true,
            data:null,
            error:false
        })

      
      axios.get(url)
     .then((response)  => {
        setRequestData({
            loading:false,
            data:response.data,
            error:false
        })
     })
     .catch(() => {
          setRequestData({
            loading: false,
            data: null,
            error: true,
          })
     })

     

    }, [url, setRequestData])

    console.log(requestData, 'ini request Data');
    return requestData;
}
