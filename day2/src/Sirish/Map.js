import React,{useRef} from 'react'

const Map=()=>{

    // const arr=["bewar", "mainpuri", "farukhabad", "kannauj"]
    const name=useRef(null);

   const myfun= e=>{
    e.preventDefault();
    alert(name.current.value)
   }

    return (
        <div>
            {/* {
                arr.map((val, ind)=><li key={ind}>{val}</li>)
            } */}
            <form onSubmit={myfun}>
                <input ref={name} type='text' placeholder='enter your name'/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Map