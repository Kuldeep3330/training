import React, { useState } from 'react'

const Assignment = () => {
  const [data, setData] = useState({
    firstname: '',
    lastnamne: '',
    email: '',
    password: '',
    confirmpassword: '',
  })

  const { firstname, lastname, email, password, confirmpassword } = data

  const myfun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const myfun_2=(e)=>{
    e.preventDefault();
    if(firstname.length===0 || lastname.length===0 || email.length===0 || password.length===0 || confirmpassword.length===0 )
    {
        alert("all fields are mandatory")
    }
    else if(firstname.length<=5 )
    {
        alert("name length can not be less than 5")
    }
    else if(password.length <8)
    {
        alert("password must be strong atleast have 8 characters")
    }
    else if(password != confirmpassword)
    {
      alert("passwords are not matching")   
    }
    else
    {console.log(data);}
  }

  return (
    <div className="border w-25 mt-5 m-auto p-3 ">
      <center>
        <form onSubmit={myfun_2}>
          <div className="mt-3">
            <label>first name</label>
            <input
              type="text"
              className="form-control"
              placeholder="firstname"
              value={firstname}
              name="firstname"
              onChange={myfun}
            />
          </div>
          <div className="mt-3">
            <label>last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="lastname"
              value={lastname}
              name="lastname"
              onChange={myfun}
            />
          </div>
          <div className="mt-3">
            <label>email</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              value={email}
              name="email"
              onChange={myfun}
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
              onChange={myfun}
            />
          </div>
          <div className="mt-3">
            <label>confirm password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter password"
              value={confirmpassword}
              name="confirmpassword"
              onChange={myfun}
            />
          </div>
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  )
}

export default Assignment
