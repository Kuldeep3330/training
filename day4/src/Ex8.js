import React, { Component } from 'react'

 class Ex8 extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            show:true,
            count:0
        };
    }
    deleteShow=()=>{
        this.setState.show=false;
    }
    componentDidUpdate()
    {
        console.log("ComponentDid Update");
        
    }
    componentDidMount()
    {
        console.log("componentDidMount Method");        
    }
  render() {
    let header;
    if(this.state.show==true)
    {
        header=<Child/>
    };
    return (
      <div>
        {header}
        <h3> count: {this.state.count}</h3>
        <button onClick={()=>this.setState({show: !this.state.show})}>delete</button>
        <button onClick={()=>this.setState({count: this.state.count+1})}>Increment</button>
      </div>
    )
  }
}

class Child extends Component{
    componentWillUnmount(){
        console.log("ComponentWill uncount");
        
    }
    render(){
        return(
            <div>
                <h1>hello Team</h1>
            </div>
        )
    }
}

export default Ex8;
