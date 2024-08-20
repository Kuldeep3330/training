import react, { useState } from 'react'

const Ex4 = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    firstname: '',
  })

  const { username, password, firstname } = data

  const myFun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    // console.log(e);
  }

  // const [user, setUser]=useState("");
  // const myFun=(e)=>{
  //     setUser(e.target.value)
  //     console.log(e.target.value);

  // }

  const myFun_3 = (e) => {
    e.preventDefault()
    // validation
    if (username.length <= 5) {
      alert('length can not be less than 5')
    } else if (password.length == 0) {
      alert('passwprd must be there')
    } else console.log(data)
  }

  return (
    <div className="border w-25 mt-5 m-auto p-3 ">
      <center>
        <form onSubmit={myFun_3}>
          <div className="mt-3">
            <label>user-name</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              value={username}
              name="username"
              onChange={myFun}
            />
          </div>

          <div className="mt-3">
            <label>password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              name="password"
              onChange={myFun}
            />
          </div>
          <br />
          <input type="submit" name="submit" />
          {/* <br/>
            <input type="text" placeholder="firstname" value={firstname} 
            name="firstname" onChange={myFun}/>
            <br/>
            <p>my name is ::: {username}::: {password} ::: {firstname}</p> */}
        </form>
      </center>
    </div>
  )
}

export default Ex4
