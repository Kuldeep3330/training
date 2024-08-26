import React, {useState} from 'react'
import Test from './Test';


// controlled Component:- when element data is controlled by parent component
// uncontrolled Component:-Elements data is controlled by dom itself, and here not using any callback fn or 
//event like onChange

const Controlled=()=>{
    const [name, setName]=useState("");
    const myFun=(e)=>{
        setName(e.target.value)
    }
    return(
        <>
        <center>
            Name:{name}
            <br/>
            <input type='text' onChange={myFun}/>
            <br/>
            <Test myFun={myFun}/>
        </center>
        
        </>
    )
}

export default Controlled;