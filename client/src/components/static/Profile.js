import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Profile = ({currentUser , setLoading, loading ,setCurrentUser ,history}) => {
  
   console.log(currentUser,'currentUser')
  
   
   const handleClick = async(id) =>{
      const option = {
         method: "DELETE",
       }
        const resp = await fetch(`/users/${currentUser.id}/pets/${id}`,option)
        const data = resp.json()
        if (resp.ok){
           setLoading(false)
           const filtered = currentUser.pets.filter((e)=>e.id !==id)
           setCurrentUser({
             name:currentUser.name,
             id:currentUser.id,  
             pets:filtered})
        
        }
       else {
            alert(data.errors)
         }
        

   }
  
   

    return loading ?
      
       <div>loading ... </div>
        :  <div >
        <h1> user Profile</h1>
       <p> UserName  = {currentUser.name}</p>
       <h1>--pets--</h1>

       {currentUser.pets.map((e)=><ul key={e.id}><h2>{`--${e.name}--`}<Link to={`/pet/edit/${e.id}`}><button>Edit</button></Link><button onClick={()=>handleClick(e.id)}>X</button></h2><li className='font-bold'>Breed : { e.breed}</li ><li className='font-bold'>characteristic : {e.characteristic}</li><li>needs : {e.needs}</li><li>type : {e.pet_type}</li><li>gender : {e.gender}</li></ul>)}
      
       </div>

}

export default Profile
