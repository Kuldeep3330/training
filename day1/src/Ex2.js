import { Component } from "react";

 class Ex2 extends Component{
    /**stateful passing props */
    state={
        company:"Wipro ltd",
    }
    render(){
        return(
            <div>
                  
                <h2 style={{color:"blue"}}>this is my Es2 from {this.props.name}</h2>
            </div>
        )
    }
}
export default Ex2;