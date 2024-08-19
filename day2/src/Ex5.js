import react, { useState } from 'react'

const Ex5 = () => {
  const [data, setData] = useState(1)
  const [value, setValue] = useState(1)
  const myFun = () => {
    setData(data * 2)
    setValue(2)
  }

  const myFun_2 = () => {
    setData(data * 4)
    setValue(4)
  }

  return (
    <>
      <center>
        <h1>calculator</h1>

        <button onClick={myFun}>multBy2</button>
        <button onClick={myFun_2}>multBy4</button>
        <p>
          the value is obtained while multiplying {value} is ::: {data}
        </p>
      </center>
    </>
  )
}

export default Ex5
