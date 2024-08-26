//componentDidMount(), componentUpdateMount(), componentWillUnmount()

import React,{Component} from 'react'

class Lifecycle extends Component{

    constructor(props){
        super(props);
        this.state={
            show:true,
            count:0,
        };

    }
    componentDidMount()
    {
        console.log("component did mount method");
        
    }
    componentDidUpdate()
    {
        console.log("componentDidUpadte method");
        
    }
    myfun=()=>{
        this.setState({show: !this.state.show})
    }
    render(){
        let myHeader;
        if(this.state.show)
        {
            myHeader=<Child/>;
        }
        return(<div>
            {myHeader}
          <h3>Count:::{this.state.count}</h3>
          <button onClick={this.myfun}>show</button>

          <button onClick={()=>this.setState({count:this.state.count+1})}>submit</button>
        </div>)
    }
}

class Child extends Component{
    componentWillUnmount(){
        console.log('componentWill Unmount method');
        
    }
    render(){
        return(<>
        <h1>Hello team members</h1>
        </>)
    }
}

export default Lifecycle