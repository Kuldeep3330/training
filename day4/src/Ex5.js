import React from 'react'

const Ex5 = () => {
    const arr=["Delhi", "Noida", "Gurgoan", "Greater Noida"]
    const arr_2=[
        {
            id:1,
            place:"Delhi"
        },
        {
            id:2,
            place:"Noida"
        },
        {
            id:3,
            place:"Gurgoan"
        },
        {
            id:4,
            place:"Kolkata"
        },
    ]
  return (
    <div>
        {
            arr_2.map((value, index)=><li key={value.id}>{value.place}</li>)
        }
    </div>
  )
}

export default Ex5