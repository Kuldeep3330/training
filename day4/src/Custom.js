import{useEffect, useState} from 'react'

const useCustom=(url)=>{
    const [data, setData]=useState(null)
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json)
        .then(resData=>setData(resData))
        .catch(err=>console.log(err)
        )

    },[]);
    return data;

}

export default useCustom