import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { logout } from '../auth/auth'
const Navbar = ({loggedIn,logoutCurrentUser}) => {
  const history = useHistory()
  const handleLogout=(e)=>{
    logout(e, logoutCurrentUser)
    history.push('/')
  }
    return  loggedIn ?
          <ul className='flex items-center justify-evenly'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pet/new">add pet</Link></li>
              <li> <Link to='/me'>profile</Link></li>
              <li><Link to="/logout" onClick={ (e) =>  handleLogout(e)}>Logout</Link></li>
          </ul>:
          <ul className='flex items-center justify-evenly'>
            <li><Link to="/">Home</Link></li>
            <li> <Link to='/login'>log in</Link></li>  
            <li> <Link to='/signup'>sign up</Link></li>  
          </ul>
            


    
}

export default Navbar
