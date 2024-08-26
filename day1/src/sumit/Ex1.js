import React, {Component} from 'react'

class Ex1 extends Component{
    constructor(props){
        super(props)
        this.state={postData:[]};
    }
    API_URL="https://jsonplaceholder.typicode.com/posts"
    componentDidMount(){
        fetch(this.API_URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({postData:data})            
        })
        .catch(err=>console.log(err) +  
        )
    }
    render(){
        return(
            <>

            </>
        )
    }
}
