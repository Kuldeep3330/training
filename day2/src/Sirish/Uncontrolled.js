import React,{useRef} from 'react'

const Uncontrolled = () => {
    const name=useRef('');
    const myfun=(e)=>{
        e.preventDefault();
        alert(name.current.value);
        
    }

  return (
    <div onSubmit={myfun}>
        <form onSubmit={myfun}>
        <input type='text' ref={name}/>
        <input type='submit' value='submit'/>
        </form>
    </div>
  )
}

export default Uncontrolled