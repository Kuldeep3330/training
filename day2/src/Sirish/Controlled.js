import React,{useState} from 'react'
import Test from './Test';

const Controlled = () => {
    const[name, setName]=useState('');
    const myFun=(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <center>
            Name:{name}<br/>
            <input type='text' onChange={myFun} />
            <Test name="kulddep" company="Wipro" myFun={myFun}/>
        </center>
    </div>
  )
}

export default Controlled