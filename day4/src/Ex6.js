import React,{useRef} from 'react'

const Ex6 = () => {
    const name= useRef('')
    const myFun=(e)=>{
        e.preventDefault();
        console.log(name.current.value);
        
    }

  return (
    <div>
        <form onSubmit={myFun}>
            <input ref={name} type='text' placeholder='enter your name'/>
            <br/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Ex6