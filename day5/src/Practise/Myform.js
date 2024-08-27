import React, {useState} from 'react'
import {useFormik} from 'formik'


const Myform = () => {
    const formik = useFormik({
        initialValues:{
            username:'',
            password:'',
        },
        onSubmit:(values)=>{
            console.log("form values", formik.values);
        },
        validate:(values)=>{
            let errors={};
            if(!values.username)
            {
                errors.username="username is required"
            }
            if(!values.password)
            {
                errors.password="password is required"
            }
            return errors;
        }

    })
    
    
    // const [data, setData]=useState({
    //     username:'',
    //     password:''
    // })
    // const {username, password} = data;
    // const myFun=(e)=>{
    //     setData({...data, [e.target.name]:e.target.value})
    // }
    // const myFun_2=(e)=>{
    //     e.preventDefault();
    //     console.log(data)
    // }

  return (
    <div>
        <cente>
            <form autoComplete='off' onSubmit={formik.handleSubmit}>
                <input type='text' placeholder='enter your name' name='username' value={formik.values.username} onChange={formik.handleChange}/>
                {formik.errors.username}
                <br/>
                <input type='password' placeholder='Enter Your Password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
                {formik.errors.password}
                <br/>
                <input type='submit' name='submit'/>

            </form>
        </cente>
    </div>
  )
}

export default Myform