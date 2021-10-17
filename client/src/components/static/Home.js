import React , {useEffect, useState} from 'react'
const Home = ({loggedIn}) => {
    const [follower , setFollower] = useState([]) 
    const [search , setSearch ] = useState('')
    const [filter , setFilter] = useState(follower)
    useEffect(()=>{
      fetch('/user/followers')
      .then(resp=>resp.json())
      .then((data)=>{
        setFollower(data)
        setFilter(data)
      })
      
      
    },[loggedIn])
    const handleSearch = (event)=>{
      setSearch(event.target.value)
       
      const result = follower.filter((e)=>e.name.toLowerCase().includes(event.target.value.toLowerCase()))
       setFilter(result)
    }
    return (
        <> 

            <h1 >
             
             WELCOME TO PET APP  
            </h1>
            
            <p>connect with pet's owners </p>
            
            <input type='text'placeholder='search...' value={search} onChange={handleSearch}/>
            <input type='submit'/>
       
       {filter.map((e)=>
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
