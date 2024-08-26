import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Ex1 = () => {
    const [data, setdata]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=> res.data)
        .then(data=>{console.log(data)
            setdata(data)
        }
        )
        .catch(e=>console.log(e))
    },[])

  return (
    <div>{
    data.map(i=><li key={i.id}>{i.title}</li>)
        }</div>
  )
}

export default Ex1