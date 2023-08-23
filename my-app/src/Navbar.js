import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';




export default function Navbar() {
    const [darkTheme,Setdarktheme]=React.useState(false)
    const toggleTheme =() =>{
           return(Setdarktheme(prevMode=>!prevMode)
           ) 
           
        }
     
    const [query,setquery]=React.useState("")
    const[result,setresult]=useState([])
    console.log(query)
    function searchmovie(){
        
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=57335e66120538f2dc9f9e6a729912cb&language=en-US`)
        .then(res=>res.json())
        .then(res=>setresult(res.results))
    }
    const[coloractive,setcoloractive]=useState('')
    
    function changebackground() {
        return(
            setcoloractive(!coloractive)
        )
    }
    
    
    
    
        return (
            <>
                
                <div className={`${darkTheme?"navbar-container-dark":"navbar-container"}`}> 
                    <div className='navbar-elements-container'>
                    <Link to='/' className='title'>VirtualVerse</Link>
                    {/* <form onSubmit={(e)=>{e.preventDefault();searchmovie();handleopen()}} className='form-navbar'>
    
                    <input type='search' className='navbar-input'
                 placeholder=' Search Movies..' 
                 
                 onChange={(e)=>setquery(e.target.value)
                }
                 />
                    </form> */}
                   
                   {/* <Modal 
                   open={value}
                   onClose={handleClose}
                   >
                        <div className='searchresult-container'>
                          {
                            result.map((movie)=>{
                                return(
                                    <>
                                        <div className='result-box'>
                                        <img src={`https://image.tmdb.org/t/p/original/${movie&&movie.backdrop_path}`} alt="" className="result-image"
                                    
                                     ></img>
                                     <p className='p-movies'>{movie.title}</p>
                                     <div className='ratings'>
                                        <div className='ratings-movie'>
                                        <p className='p-movies '> {movie.vote_average}</p>
                                     <FontAwesomeIcon icon={faStar}/>
                                        </div>
                                        </div>
                                        </div>
                                    </>
                                )
                            })
                          }  
                        </div>
                   </Modal> */}
                   
                
                    
               
                 <div className='item-container'>
                 {/* <div>
                      <label class="switch">
                     <input type="checkbox" onChange={toggleTheme}></input>
                     <span class="slider round"></span>
                     </label>
                    </div> */}
                    
                    <div className='navbar-list'>
                        <ul>
                            <li ><Link to='/toprated' className='navbar-a' >Top-rated</Link></li>
                            <li><Link to='/upcoming' className='navbar-a'>UpComing</Link></li>
                            
                        </ul>
                    </div>
                 </div>
                    </div>
                
                    
                 
                </div>
               
            </>
         )
}
   
        
        
       
                
                
