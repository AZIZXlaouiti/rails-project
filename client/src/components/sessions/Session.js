import React, { useState} from 'react'
import { useHistory } from 'react-router'
import { createUserAccount , login } from '../auth/auth'
const Session = ({match,handleCurrentUser}) => {
    const history = useHistory()
    const [ state , setState ] = useState(
        {
            name:'',
            password:''
        }
    )
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value 
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if (match.path === '/signup'){
            createUserAccount(state,handleCurrentUser)
        }else {
            let check = await login(state,handleCurrentUser)
            if (check.ok){
                history.push('/me')
            }
           
        }
       
 }
 return (
     <>
    {match.path==='/signup'? <h1>Create Account</h1>:<h1>Login</h1>}
     <form onSubmit={handleSubmit}> 
          <label htmlFor="name">User name</label><br/>
         <input type="text" id="name" name="name" placeholder='Enter name' required value={state.name} onChange={(e)=>handleChange(e)}/><br/>
         <label htmlFor="password">password</label><br/>
         <input type="password" id="password" name="password" placeholder='Enter password' required value={state.password} onChange={(e)=>handleChange(e)}/><br/><br/>
         <input type="submit" value="Submit"/>
     </form>
     </>
 )
}

export default Session
