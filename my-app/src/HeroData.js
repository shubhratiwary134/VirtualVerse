import React from "react";
import './herodata.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from '@mui/material';
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export default function HeroData(){
    const [rated,setrated]=useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(res=>setrated(res.results))  
    },[rated])
    // console.log(rated)
    const[value,setvalue]=React.useState(false)
    const[modalData,setModalData]=React.useState([])
    function handleclose(){
        return(
            setvalue(false)
        )
    }
    const[coloractive,setcoloractive]=React.useState(false)
    function changebackground(){
        return(
            setcoloractive(!coloractive)
        )
    }
    return(
        <>
      
    
                <div>
                <p className="hero-main-toprated">Top Rated</p>
            </div>
            <hr></hr>
            <div className="rated-container">
            {
                       rated.map((movie)=>{       
                            return(
                                <div className='rated-paper-container' >
                                     
                                     

                                     <img src={`https://image.tmdb.org/t/p/original/${movie&&movie.backdrop_path}`} alt="" className="rated-image"
                                     onClick={()=>{ 
                                            setModalData(movie)
                                            setvalue(true)
                                     }}
                                     
                                     ></img>
                                     <Modal
                                     open={value}
                                     onClose={handleclose}
                                     >
                                          <>
                                            
                                            <div className='btn-container'>
                                                <button onClick={handleclose} className='return-btn'>
                                                <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
                                                    </button>
                                               </div>
                                           <div className='modal-container'> 
                                           
                                           <div className='modal-img'>
                                               <img src={`https://image.tmdb.org/t/p/original/${modalData&&modalData.poster_path}`} className="detail-img" alt="" ></img>
                                           </div>
                                           <div className='modal-detail'>
                                               <p className='detail-title'>{modalData.title}</p>
                                               <hr className='line-detail'></hr>
                                               <p className='detail-overview'>{ modalData.overview}</p>
                                               
                                               <div className='details-rating'>
                                                <div className='rating-container'>
                                                <p  className='detail-rating-p'>{modalData.vote_average}</p>
                                               <FontAwesomeIcon icon={faHeart} style={{color:coloractive?"red":"white"}} onClick={changebackground}/>
                                                </div>
                                              
                                                <div>
                                                    <button className='trailer-btn'><a href={`https://www.youtube.com/results?search_query=${modalData.title}+trailer`} className='detail-btn-a'>Watch Trailer</a></button>
                                                </div>
                                                {/* <div className='btn-container'>
                                                <button onClick={handleClose} className='return-btn'>
                                                <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
                                                    </button> */}
                                               {/* </div> */}
                                               
                                               </div>
                                           </div>
                                            {/* </div>  */}
                                           </div>
                                           
                                           
                                          
                                            
                                         
                                            </>

                                     </Modal>

                                     <p className='p-movie'>{movie.title}</p>
                                     <p className='p-movie'> {movie.vote_average}</p>
                                    {/* <p className='p-movie-overview'>{movie.overview}</p> */}
                              
                                 
                                </div>
                                   
                             
  
                            )                
                       })
                      } 
            </div>
               
      
            
            
           
        
           
        </>
    )
}