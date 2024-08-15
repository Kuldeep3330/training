import React,{ useState } from "react";
import Header from "./Components/Header";
import ReuseBlock from "./Components/ReuseBlock";

const Ex=()=>
{
    /**stateless */
    // state={
    //     myName:"shibhu singh",
    // }
    /**use useState */
    const[name, setName]=useState("shibhu singh");
    
    return(
        <div>
            <h2 style={{color: "red", backgroundColor: "lightblue"}}>This is my functional component!</h2>
            <Header/>
            <ReuseBlock title='greater noida' add='uttar pradesh'/>
        </div>
    );
}

export default Ex;
