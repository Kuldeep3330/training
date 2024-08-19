import react,{useState} from "react";

const Ex4=()=>{
  

    const [data, setData]= useState({
        username:'',
        password:'',
        firstname:'',
        
    });

    const {username , password,firstname}=data;

    const myFun=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]})
        console.log(e);
    }


    // const [user, setUser]=useState("");
    // const myFun=(e)=>{
    //     setUser(e.target.value)
    //     console.log(e.target.value);
        
    // }

    return(
        <>
        <center>
            <input type="text" placeholder="username" value={username} 
            name="username" onChange={myFun}/>
            <br/>
            <input type="password" placeholder="password" value={password} 
            name="password" onChange={myFun}/>
            <br/>
            <input type="text" placeholder="firstname" value={firstname} 
            name="firstname" onChange={myFun}/>
            <br/>
            <p>my name is ::: {username}::: {password} ::: {firstname}</p>
        </center>
        </>
    )
}

export default Ex4;