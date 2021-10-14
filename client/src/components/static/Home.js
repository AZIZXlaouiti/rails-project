import React , {useEffect, useState} from 'react'
const Home = ({loggedIn}) => {
    const [follower , setFollower] = useState([]) 
    useEffect(()=>{
      fetch('/user/followers')
      .then(resp=>resp.json())
      .then(setFollower)
    },[loggedIn])

   
    return (
        <>
            <h1 >
             
             WELCOME TO PET APP  
            </h1>
            <p>connect with pet's owners </p>
       {/* <p>{follower.map((e)=><ul><h3>--{e.name}--<button>Edit</button></h3><li>{`breed : ${e.breed}`}</li><li>{`needs : ${e.needs}`}</li><li>{`gender : ${e.gender}`}</li></ul>)}</p> */}
           <p>{follower.map((e)=><p>{e.name}</p>)}</p>
       </>
    )
}

export default Home
