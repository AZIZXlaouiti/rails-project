import React, { useEffect, useState } from 'react'
const Profile = ({currentUser , setLoading, loading ,setCurrentUser}) => {
  
   console.log(currentUser,'currentUser')
   const handleClick = (id,user_id,type) =>{
      const option = {
         method: "DELETE",
       }
        fetch(`/users/${user_id}/${type}s/${id}`,option)
        .then(resp=>resp.json())
        .then(data => console.log(data))
        .then(()=>setLoading(true))

   }
   useEffect(()=>{
      fetch(`/users/${currentUser.id}/pets`)
      .then(resp=>resp.json())
      .then(setCurrentUser)
      .then(setLoading(false))
   },[loading])
   
    return loading ?
      
       <div>loading ... </div>
        :  <div >
        <h1> user Profile</h1>
       <p > UserName  = {currentUser.name}</p>
       <h1>--pets--</h1>
       <div>{currentUser.cats.map((e)=><ul><h3>--{e.name}--<button onClick={()=>handleClick(e.id,currentUser.id,'cat')}>X</button></h3><li>{`breed : ${e.breed}`}</li><li>{`needs : ${e.needs}`}</li><li>{`gender : ${e.gender}`}</li></ul>)}</div>
        
        <div>{currentUser.dogs.map((e)=><ul><h3>--{e.name}--<button onClick={()=>handleClick(e.id,currentUser.id,'dog')}>X</button></h3><li>{`breed : ${e.breed}`}</li><li>{`needs : ${e.needs}`}</li><li>{`gender : ${e.gender}`}</li></ul>)}</div>

       </div>

}

export default Profile
