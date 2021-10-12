import React from 'react'
import { useState } from 'react'
const About = ({show}) => {
    const [state , setstate ] = useState({
        min:10,
        max:90,
        value:10
    })
    const handleChange = (e)=>{
        if (e.target.name)
            setstate({
                ...state,
                [e.target.name]:e.target.value
            })
    }
    return show ?
    

      
           
           <form className='nav'>
            <h5>Filter by</h5>
            <input type="radio" id='filter1' name='sex'/>
            <label htmlFor ='filter1'
            >female
            </label>
            <input type="radio" id='filter2' name='sex'/>
            <label htmlFor ='filter2'
            >male
            </label>
            <input type="radio" id='filter3' name='sex'/>
            <label htmlFor ='filter3'
            >Any
            </label>
            <h5>BREED</h5>
            <input type="radio" id='filter4' name='breed'/>
            <label htmlFor ='filter4'
            >breed
            </label>
            <h5>AGE</h5>
   
           <div className='filter-type'>
           <h5>SEX</h5>
           <form >
           {/* <input type="submit"/> */}
                <div class="rangeslider">
                                <input class="min" name="min" type="range"   max="100" min="0" step="1" value={state.min} 
      onChange={(e)=>handleChange(e)} />
                                <input class="max" name="max"  type="range"  max="100" min="0" step="1"  value={state.max} 
      onChange={(e)=>handleChange(e)}/>
                                <span class="range_min light left">{state.min} .00 $</span>
                                <span class="range_max light right">{state.max} .00 $ </span>
                            </div> 
  <label htmlFor='slider'>Select pressure</label><br/>

</form>

           
           

            <h5>for adoption</h5>
            <h5>for walk</h5>
            
            </div>
                <div>
                    
                <h5>BREED</h5>
                <p>Alaskan Malamute</p>
                </div>
                <div>
                <h5>SEX</h5>
                <p>male</p>
                </div>
                <div>
                <h5>CHARACTERISTICS</h5>
                <p>Gentle, playful</p>
                </div>
             
                    
                <h5>NEEDS</h5>
                <p>High — requires daily walks</p>
               
                


            </form>
       
    : null
}

export default About
