import React,{Component} from 'react'

const Hoc = (Component) => {
  return (
    class extends React.Component{
        state={
            auth:true
        }
        render(){
            return(
                <div>
                    {this.state.auth ? <Component name="kuldeep" />: <h1>Please  login</h1>}
                </div>
            )
        }
    }
  )
}

export default Hoc