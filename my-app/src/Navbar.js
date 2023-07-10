import React from 'react';
import './navbar.css';



export default function Navbar() {
    const [darkTheme,Setdarktheme]=React.useState(false)
const toggleTheme =() =>{
       return(Setdarktheme(prevMode=>!prevMode)
       ) 
       
    }
    return(
        <>
            
            <div className={`${darkTheme?"navbar-container-dark":"navbar-container"}`}>

             <p>Virtual Verse</p>
                <div >
                  <label class="switch">
                 <input type="checkbox" onChange={toggleTheme}></input>
                 <span class="slider round"></span>
                 </label>
                </div>
             
            </div>
           
        </>
    )
}