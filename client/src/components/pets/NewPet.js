import React from 'react'

const NewPet = () => {
    return (
        <>
        <h1>add profile</h1>
      <form >
        <div>
          <label htmlFor="title">Name : </label>
          <input type="text" id="title" name="title"  />
        </div>
        <div>
          <label htmlFor="category">breed : </label>
          <input type="text" id="category" name="category" />
        </div>
        <div>
          <label htmlFor="rating">location : </label>
          <input type="number" id="rating" name="rating" class="focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div>
          <label htmlFor="length"> needs :</label>
          <input type="text" id="length" name="length"  />
        </div>
        <div class="relative">
             <label htmlFor="breed">choose breed:</label>        
            <select id='breed'>
                <option>Scottish Fold</option>
                <option>norwegian forest</option>
                <option>russian blue</option>
                <option>Ragdoll </option>
                <option>British Shorthair </option>
                <option>Egyptian Maus </option>
                <option disabled selected>breed </option>   
            </select>
        </div>
        <div class="relative">
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
