import React,{useEffect, useState} from 'react';

//useEffect():- to perform side effect(asynchronous task) and it work for function component life cycle
//Mounting
//useEffect(()=>{},[])
//Updating
//useEffect(()=>{},[props | state])
//unmounting 
//useEffect(()=>{
//code
// return()=>{
    //unmounting cleanup unwanted data
// }    
// },[])

const Ex10=()=>{
    const [sec, setSec]=useState(0);
    useEffect(()=>{
        const timerId= setInterval(()=> setSec(s=> s+1),1000)
        return ()=>clearInterval(timerId)

    },[])
    return(
        <>
        </>
    )
}
export default Ex10;