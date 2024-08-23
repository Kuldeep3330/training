import react, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Hoc from './Hoc'


const Ex12 = (props) => {

  return (
    <div >
      <h1>welcome back {props.name} </h1>
    </div>
  )
}

export default Hoc(Ex12)
