import react, { useState } from 'react'
import {useFormik} from 'formik'

const Ex8 = () => {
//   const [data, setData] = useState({
//     username: '',
//     password: '',
//     firstname: '',
//   })

//   const { username, password, firstname } = data

//   const myFun = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value })
//  }

//   const myFun_3 = (e) => {
//     e.preventDefault()
//     // validation
//     if (username.length <= 5) {
//       alert('length can not be less than 5')
//     } else if (password.length == 0) {
//       alert('passwprd must be there')
//     } else console.log(data)
//   }

const formik= useFormik({
    initialValues:{
        username:'',
        password:''
    },
    onSubmit:(values)=>{
        console.log("Form values",formik.values);
    },
    validate:(values)=>{
        let errors={};
        if(!values.username)
        {
            errors.username="User name is required"
        }
        if(!values.password)
        {
            errors.password="password is required"
        }
        return errors;
    }
})



  return (
    <div className="border w-25 mt-5 m-auto p-3 ">
      <center>
        <form autoComplete='off' onSubmit={formik.handleChange}>
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

export default Ex8
