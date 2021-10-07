import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <Link to='/signup'>signup</Link>
            <Link to='/login'>login</Link>
            <Link to='/'>browse</Link>
            <Link to='/me'>profile</Link>

            


        </div>
    )
}

export default Navbar
