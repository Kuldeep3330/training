import React from "react";
import Chai3 from "./Chai3";

const Chai2=()=>{
    let myAdd={
        city:'Greter Noida',
        State:'uttar Pradesh'
    }

    let arr=[1,2,3]
    return(
        <>
        <h2>working on props</h2>
        <Chai3 name="kuldeep" age='21' company="wipro" someObj={myAdd}/>
        <Chai3 name="shyamlaal" age='42' company="harfanmaula" someObj={myAdd}/>
        <Chai3 name="Meghna" age='21' company="TCS" someObj={myAdd}/>
        <Chai3 name="Urban gabru" age='18' company="Cipro" someObj={myAdd}/>
        </>
    )
}
export default Chai2