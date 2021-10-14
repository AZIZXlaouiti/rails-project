import React from 'react'
import { useState } from 'react'
const NewPet = () => {
     const [form ,  setForm ] = useState({
      name:'',
      breed:'',
      location:'',
      needs :'',
      gender :'',
      type :''
     })
     const handleChange = (e)=>{
       if (e.target.name === 'type'){

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
     console.log('form',form)
    return (
        <>
        <h1>please choose </h1>
        <label htmlFor='dog'> dog 
        <input type='radio' id='dog' name="type" onChange={handleChange}/>
        </label>
        <label htmlFor='cat'> cat 
        <input type='radio' id='cat' name="type" onChange={handleChange}/>
        </label>

        

      <form >
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" name="name" value={form.value} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="location">location : </label>
          <input type="number" id="location" name="location" value={form.value} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="length"> needs :</label>
          <input type="text" id="length" name="needs" value={form.value} onChange={handleChange}  required/>
        </div>
        <label htmlFor="breed">Choose a breed:</label>
        <select id='breed' required>
        { form.type === 'cat'?
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
                 
        <div class="relative" required>
             <label htmlFor="gender">choose gender:</label>        
            <select id='gender'>
                <option>male</option>
                <option>female</option>
            
            </select>
        </div>
        <input type="submit" value={ "add pet" } />
      </form>
      </>
    
    )
}

export default NewPet
