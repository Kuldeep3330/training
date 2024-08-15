import React ,{ Component } from "react";
import Ex2 from "./Ex2";


class Ex1 extends Component{
    state={
        myName:"kuldeep kumar",
    }
    render(){
        return(
            <div>
                <Ex2 name={this.state.myName}/>
            </div>
        );
    }
}

export default Ex1;