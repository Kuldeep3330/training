import React,{Component} from 'react'

// lifecycle in class based component
// it means it is a process of executing the methods
// React hooks in functional based components ie useEffect
// also known as side-effects
// in class based component we can't use any react hook ie useRef useState useEffect etc we have lifecycle method here
// componentDidMount() is same as useEffect:- the very first time this method will get invoked 
//after the return statement executes
// componentDidUpdate() :-it will get triggered whenever a state value is getting updated
// componentWillUnmount():- it will get triggered when i am removing any products from the shopping...



class Ex9 extends Component{
  constructor(props){
    super(props);
    this.state={postData:[]};
  }
  API_URL="https://jsonplaceholder.typicode.com/posts";
  componentDidMount(){
    fetch(this.API_URL)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      this.setState({postData:data})

    })
    .catch(err=>console.log(err)
    )
  }
  render(){
    return(
      <>
      <h2>lifecycle based component</h2>
      {
        this.state.postData.map(post=>
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr/>

          </div>
        )
      }

      </>
    )
  }
}

export default Ex9
