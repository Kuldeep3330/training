import React, { useRef } from 'react'

// useRef:-

const Uncontrolled = () => {
  const name = useRef('')
  const myfun = (e) => {
    e.preventDefault()
    alert(name.current.value)
  }
  return (
    <>
      <form onSubmit={myfun}>
        <input type="text" ref={name} />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default Uncontrolled
