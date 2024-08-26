import React from 'react'

const Test = (props) => {
  return (
    <div>Test:::{props.name}:::{props.company}
    <input type='text' onChange={props.myFun}/>
    </div>
  )
}

export default Test