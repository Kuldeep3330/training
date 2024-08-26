import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ui>
            
                <Link to="/"><li>Home</li></Link>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/payment"><li>Payment</li></Link>
                <Link to="/main"> <li>Main</li></Link>
            
        </ui>
    </div>
  )
}

export default Navbar