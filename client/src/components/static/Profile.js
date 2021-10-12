import React, { useEffect, useState } from 'react'
const Profile = ({currentUser , setLoading, loading}) => {
    const [pets , setPets ] = useState([])
    
    useEffect(()=>{
        fetch(`/users/${currentUser.id}/pets`)
        .then(resp => resp.json())
        .then(setPets)
        
    },[loading])
    return currentUser ?
        <div >
             <div className='text-xl font-bold text-sml'> USER PROFILE</div>
            <p > NAME  = {currentUser.name}</p>
           {pets.map((pet)=>{
               
             return  (
                <>
                   <h2 className='text-xl font-bold text-sml'>CATS</h2>{pet.cats.map((cat)=><ul><li key={pet.id}><p className='font-bold text-sml '>**NAME **</p>{cat.name}</li><li key={pet.id}><p className='font-bold text-sml'>**BREED**</p>{cat.breed}</li><li key={pet.id}><p className='font-bold text-sml'>**SEX**</p>{cat.sex}</li><li key={pet.id}><p className='font-bold text-sml'>**NEEDS**</p>{cat.needs}</li><li key={pet.id}><p className='font-bold text-sml'>**LOCATION**</p>{cat.location}miles</li>######################</ul>)}
                   
                   <h2 className='text-xl font-bold text-sml'>DOGS</h2>{pet.dogs.map((cat)=><ul><li key={pet.id}><p className='font-bold text-sml '>**NAME **</p>{cat.name}</li><li key={pet.id}><p className='font-bold text-sml'>**BREED**</p>{cat.breed}</li><li key={pet.id}><p className='font-bold text-sml'>**SEX**</p>{cat.sex}</li><li key={pet.id}><p className='font-bold text-sml'>**NEEDS**</p>{cat.needs}</li><li key={pet.id}><p className='font-bold text-sml'>**LOCATION**</p>{cat.location}miles</li>######################</ul>)}
                </>
             )
               
           })}
            </div>
     
        :<div>no user</div>

}

export default Profile
