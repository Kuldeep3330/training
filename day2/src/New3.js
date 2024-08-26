import React,{useState} from 'react'

const New3 = () => {
    const [data, setData]=useState({
        username,
        lastname,
        email,
        password,
    });
    const {username,lastname, email, password}=data;
    const myFun=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
    }

  return (
    <div>
        <center>
            <input type='text' placeholder='username' value={username} name='username' />
            <br/>
            <input type='text' placeholder='lastname' value={lastname} name='lastname'/>
            <br/>
            <input type='email' placeholder='email' value={email} name='email'/>
            <br/>
            <input type='password' placeholder='password' value={password} name='password'/>
            <br/>
            <br/>
            <button onClick={myFun}>submit</button>
            <p>my name is ::::{username}:::{lastname}:::{email}:::{password}</p>

        </center>
    </div>
  )
}

export default New3