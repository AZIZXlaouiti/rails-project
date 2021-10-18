import React from 'react'
import { useState } from 'react'
const NewPet = ({currentUser, setCurrentUser,history}) => {
     const [form ,  setForm ] = useState({
      name:'',
      breed:'',
      needs :'',
      gender :'',
      pet_type :'',
      characteristic:''
     })
     const handleChange = (e)=>{
       if (e.target.name === 'pet_type'){

         setForm({
           ...form,
           [e.target.name]:e.target.id
         })
       }else 
        {
          setForm({
            ...form,
            [e.target.name]:e.target.value
          })
        }
     }
     const handleSubmit =(e)=>{
       e.preventDefault()
       const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
        withCredentials: true
      }
       fetch(`/users/${currentUser.id}/pets`,option)
       .then(resp=>resp.json())
       .then((data)=>{
         setCurrentUser({...currentUser,pets:[...currentUser.pets,data]})
         history.push('/me')
     
        }
         )
     }
     console.log('form',form)
     console.log('currentUser',currentUser)
    return (
        <>
        <h3>please choose </h3>
        <label htmlFor='dog'> dog 
        <input type='radio' id='dog' name="pet_type" onChange={handleChange}/>
        </label>
        <label htmlFor='cat'> cat 
        <input type='radio' id='cat' name="pet_type" onChange={handleChange}/>
        </label>

      

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required/>
        </div>
      
        <div>
          <label htmlFor="needs"> needs :</label>
          <input type="text" id="needs" name="needs" value={form.needs} onChange={handleChange}  required/>
        </div>
        <div>
          <label htmlFor="characteristic"> characteristic :</label>
          <input type="text" id="characteristic" name="characteristic" value={form.characteristic} onChange={handleChange}  required/>
        </div>
        <label htmlFor="breed">Choose a breed:</label>
        <select id='breed' name="breed" value={form.breed}  onChange={handleChange} required>
        { form.pet_type === 'cat'?
          <>
                <option value="">None</option> 
                <option value="Scottish Fold">Scottish Fold</option>
                <option value="norwegian forest">norwegian forest</option>
                <option value="russian blue">russian blue</option>
                <option value="Ragdoll">Ragdoll </option>
                <option value="British Shorthair">British Shorthair </option>
                <option value="Egyptian Maus">Egyptian Maus </option>
        </>:<>
            
                <option value="">None</option>
                <option value="Bulldog">Bulldog</option>
                <option value="beagle">beagle</option>
                <option value="dachshund">dachshund</option>
                <option value="German Shepherd">German Shepherd</option>
                <option value="Rottweiler">Rottweiler</option>
                <option value="Pembroke Welsh Corgi">Pembroke Welsh Corgi</option>
          
            </>
        }
        </select>
                 
        <div  required>
             <label htmlFor="gender">choose gender:</label>        
            <select id='gender' name='gender' value={form.gender}  onChange={handleChange} required>
               <option value="">None</option>
                <option value="male">male</option>
                <option value="female">female</option>
            
            </select>
        </div>
        <input type="submit" value={ "add pet" } />
      </form>
      </>
    
    )
}

export default NewPet
