import React,{useState}  from 'react'


const Chai1=()=>{
    const[counter, setCounter]= useState(0)
    const fun1=()=>{
        setCounter(counter+1);
    }
    const fun2=()=>{
        if(counter>0)
        {setCounter(counter-1)}

    }

    return (
        <>
        <h1>my counter is :::{counter}</h1>
        <button onClick={fun1}>increment</button>
        <button onClick={fun2}>decrement</button>
        </>
    )
}

export default Chai1