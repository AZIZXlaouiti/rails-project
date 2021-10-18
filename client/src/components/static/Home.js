import React , {useEffect, useState} from 'react'
const Home = ({loggedIn}) => {
    const [follower , setFollower] = useState([]) 
    const [search , setSearch ] = useState('')
    const [filter , setFilter] = useState(follower)
    const [option , setOption ] = useState(false)
    useEffect(()=>{
      fetch('/user/followers')
      .then(resp=>resp.json())
      .then((data)=>{
        setFollower(data)
        setFilter(data)
      })
      
      console.log('run once')
    },[loggedIn])
    const handleSearch = (event)=>{
      setSearch(event.target.value)
       
      const result = follower.filter((e)=>e.name.toLowerCase().includes(event.target.value.toLowerCase()))
       setFilter(result)
    }
    const handleClick = ()=>{
       fetch('/top-3-pets')
       .then(resp=> resp.json())
       .then(data=>{
         setFilter(data)
          setOption(true)
        })
        
    }

    return (
        <> 

            <h1 >
             
             WELCOME TO PET APP  
            </h1>
            
            <p>connect with pet's owners </p>
            
            <input type='text'placeholder='search...' value={search} onChange={handleSearch}/>
            <input type='submit'/>
            <button onClick={()=>handleClick()}>filter top3 pets </button>
       
         <ul>{filter.map((e)=><li>{e.name}</li>)}</ul>
         
     
         
         </>
       
    
       

    )
}

export default Home
