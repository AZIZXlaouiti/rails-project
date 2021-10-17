import React  , {useState}from 'react'
import { useHistory, useParams } from 'react-router'

const EditPet = ({currentUser , setCurrentUser}) => {
    const {id} = useParams()
    const history = useHistory()
    const edit = currentUser.pets.find((e)=>e.id === parseInt(id,10) )
    const [form ,  setForm ] = useState({
        name:edit.name,
        needs :edit.needs,
        gender :edit.gender,
        characteristic:edit.characteristic
       })
       const handleChange = (e)=>{
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
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
         },
         body: JSON.stringify(form),
         withCredentials: true
       }
        fetch(`/users/${currentUser.id}/pets/${edit.id}`,option)
        .then(resp=>resp.json())
        .then((data)=>{
           const result =  currentUser.pets.map((e)=>{if( e.id === data.id ){return data}else {return e}})
          setCurrentUser({...currentUser,pets:result})
          console.log(result,'result')
          history.push('/me')
        
         }
          )
      }
    return (
        
        <>
            
            
        <h3>Edit Pet</h3>
      
       

      

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
export default EditPet
