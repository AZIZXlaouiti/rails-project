import React from 'react'
import icons from '../icons/icons'
const Home = ({about}) => {
    return (
    <>
        <div className='card'>
            <form className='nav'>
                <input />
                {icons[1].svg}
            </form>
            <div className='img-card' onClick={()=>about()}>
        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/malamute1.jpg'/>
           <div className='img-over '>
              
               <p className='name' >Biscuit{icons[0].svg}</p >
               <p >less than 1.2 mile</p >
               </div>
          
            </div>

         <div className='btn-container'>
             <button className='btn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Cross"><path d="M20 20L4 4m16 0L4 20"/></svg></button>
             <button className='btn'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Heart"><path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z"/></svg></button>
         </div>
        </div>
    </>
    )
}

export default Home
