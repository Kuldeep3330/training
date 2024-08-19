import react, { useState } from 'react'

const Ex5 = () => {
  const [data, setData] = useState(1)
  const [value, setValue] = useState(0)
  const myFun = (e) => {
    setData(data * 2)
    if (e.target.innerHTML === 'multBy2') {
      setValue(2)
    }
  }

  const myFun_2 = (e) => {
    setData(data * 4)
    if (e.target.innerHTML === 'multBy4') {
      setValue(4)
    }
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
