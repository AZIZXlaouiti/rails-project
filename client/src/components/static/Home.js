import React , {useEffect, useState} from 'react'
const Home = ({loggedIn}) => {
    const [follower , setFollower] = useState([]) 
    useEffect(()=>{
      fetch('/user/followers')
      .then(resp=>resp.json())
      .then(setFollower)
    },[loggedIn])

   console.log('followers',follower)
    return (
        <>
            <h1 >
             
             WELCOME TO PET APP  
            </h1>
            <p>connect with pet's owners </p>
           {/* <div>{follower.map((e)=><p key={e.id}>{e.name}</p>)}</div> */}
       {follower.map((e)=>
       <>
        <p key={e.id}>------OWNER------{e.name}--------------</p>
        <>{e.pets.map((e)=><ul key={e.id}>
           <h2>{`--${e.name}--`}</h2>
           
           <li className='font-bold'>Breed : { e.breed}</li>
           <li className='font-bold'>characteristic : {e.characteristic}</li>
           <li>needs : {e.needs}</li>
           <li>type : {e.pet_type}</li>
          <li>gender : {e.gender}</li>
        </ul>)}</>
        </>
       )}
       

       </>
    )
}

export default Home
