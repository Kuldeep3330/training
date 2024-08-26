import React, { useState } from 'react'

const Ex1 = () => {
  const [data, setData] = useState({
    username:'',
    password:'',
  })
  const { username, password } = data;

  const myFun_2 = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const myFun = (e) => {
    e.preventDefault();
    console.log(data)
  }

  return (
    <div>
      <center>
        <form onSubmit={myFun}>
          <input
            type="text"
            placeholder="username"
            value={username}
            name="username"
            onChange={myFun_2}
          />
          <br />
          <input
            type="password"
            placeholder="name"
            value={password}
            name="password"
            onChange={myFun_2}
          />
          <br />
          <input type="submit" name="login" />
        </form>
      </center>
    </div>
  )
}

export default Ex1
