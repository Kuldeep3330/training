import React, {useState, useEffect} from "react"

function Ex3(){

    // const myFun=()=>alert("hello");
    // const myFun_2=(a)=>{alert(`value of a is ${a}`);}

    // const myFun=(a,e)=>{alert(`value of a is ${a}`)
    //     console.log(e.target);        
    // };

    const [a, setA]= useState(0);
    useEffect(()=>{console.log("clicked");
    },[a])

    const myFun_3=()=>{
        setA(a+1);
        // console.log(a);        
    }

    // useEffect{} hook will execute after return statement executes

    //onChange{} 


    

    return(
        <>
        {/* // <button onClick={myFun}>click</button>
        // <button onClick={()=>alert("hello world")}>click</button>
        // <button onClick={myFun_2(9)}>click</button>
        //we can even pass event information ...., in react it is possible to pass the event information */}

        {/* // <input type="text" onKeyUp={myFun}/> */}

        <p>value of a::: {a}</p>
        <button onClick={myFun_3}>click_+</button>
        {/* <button onClick={()=>setA(a+1)}>click</button> */}
        <button onClick={()=>setA(a-1)}>click_-</button>

            </>
       
    )
}

export default Ex3;