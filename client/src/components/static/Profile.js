import React, { useState } from 'react'
const Profile = ({currentUser , setLoading, loading}) => {
  
   console.log(currentUser,'currentUser')
    return loading ?
      
       <div>loading ... </div>
        :  <div >
        <h1> user Profile</h1>
       <p > UserName  = {currentUser.name}</p>
       <h1>--pets--</h1>
       <p>{currentUser.cats.map((e)=><ul><h3>--{e.name}--<button>Edit</button></h3><li>{`breed : ${e.breed}`}</li><li>{`needs : ${e.needs}`}</li><li>{`gender : ${e.gender}`}</li></ul>)}</p>
        
        <p>{currentUser.dogs.map((e)=><ul><h3>--{e.name}--<button>Edit</button></h3><li>{`breed : ${e.breed}`}</li><li>{`needs : ${e.needs}`}</li><li>{`gender : ${e.gender}`}</li></ul>)}</p>

       </div>

}

export default Profile
