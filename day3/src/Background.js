import React,{useState} from 'react'

const Background = () => {
    const[color, setColor]=useState('red')

    const fun=(e)=>{
        
        setColor(e.target.innerHTML)
        

    }
  return (
    <div style={{backgroundColor: color}}>
        <button style={{ color:"red"}} onClick={fun}>red</button>
        <button style={{color:"yellow"}} onClick={fun}>yellow</button>
        <button style={{color:"orange  "}} onClick={fun}>orange</button>
        <button style={{color:"blue"}} onClick={fun}>green</button>
    </div>
  )
}

export default Background