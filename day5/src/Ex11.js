import react, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema=Yup.object({
    username:Yup.string().min(5,'must be more than 5 characters').required("username is required"),
    password:Yup.string().required("Password required"),
    pin:Yup.string().matches(/^[0-9]+$/,"Must be only Numbers").min(6,"Must be exactly 6"),
})
const Ex11 = () => {


const formik= useFormik({
    initialValues:{
        username:'',
        password:'',
        pin:'',
    },
    onSubmit:(values)=>{
        console.log("Form values",formik.values);
    },
    // validate:(values)=>{
    //     let errors={};
    //     if(!values.username)
    //     {
    //         errors.username="User name is required"
    //     }
    //     if(!values.password)
    //     {
    //         errors.password="password is required"
    //     }
    //     return errors;
    // }

    validationSchema
})



  return (
    <div className="border w-25 mt-5 m-auto p-3 ">
      <center>
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
          <div className="mt-3">
            <label>user-name</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              value={formik.values.username}
              name="username"
              onChange={formik.handleChange}
            />
            {formik.errors.username}
          </div>
          <div className="mt-3">
            <label>pin</label>
            <input
              type="text"
              className="form-control"
              placeholder="pin"
              value={formik.values.pin}
              name="pin"
              onChange={formik.handleChange}
            />
            {formik.errors.pin}
          </div>

          <div className="mt-3">
            <label>password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
            />
            {formik.errors.password}
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

export default Ex11
