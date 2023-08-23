import React from "react";
import { useState,useEffect } from "react";
import { Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function UpComing() {
    const[upcoming,SetUpcoming]=React.useState([])

    React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=57335e66120538f2dc9f9e6a729912cb`)
        .then(res=>res.json())
        .then(res=>SetUpcoming(res.results))
    },[])
    console.log(upcoming)
    const [value,setvalue]=React.useState(false)
    const [modalData, setModalData] = useState([]);
    function handleClose(){
        return(
            setvalue(false)
        )
      } 
      const[coloractive,setactive]=React.useState(false)

  function changebackground(){
    return(
        setactive(!coloractive)
    )
  }
    return(
         <>
           <div className='hero-main'>
                <div className='hero-main-header'>
                    <p className='hero-main-toprated'>UpComing</p>
                    
                    {/* <p className='hero-main-small-p'>Based On The Players Count And Release Date</p> */}
              <div className='trending-container-upcoming'>
              {
                       upcoming.map((movie)=>{  
                     
                        
                            return(
                                <div className='trending-paper-container'>

                                     <img src={`https://image.tmdb.org/t/p/original/${movie&&movie.backdrop_path}`} alt="" className="trending-image"
                                     onClick={()=>{
                                        setModalData(movie)
                                        setvalue(true)
                                     }}
                                     ></img>
                                     <p className='p-movie'>{movie.title}</p>
                                     <div className='rating'>
                                        <div className='rating-movie'>
                                        <p className='p-movie '> {movie.vote_average}</p>
                                     <FontAwesomeIcon icon={faStar}/>
                                        </div>
                                    
                                     <button onClick={()=>{
                                        setModalData(movie)
                                        setvalue(true)
                                     }} className='movie-button'>  
                                      <FontAwesomeIcon icon={faAngleDown} size='xl'/>
                                        </button>
                                        <Modal
                                        open={value}
                                        onClose={handleClose}
                                        >
                                            <>
                                        
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
                                               <FontAwesomeIcon icon={faHeart} style={{color:coloractive?"red":"black"}} onClick={changebackground}/>
                                                </div>
                                              
                                                <div>
                                                    <button className='trailer-btn'><a href={`https://www.youtube.com/results?search_query=${modalData.title}+official+trailer`} className='detail-btn-a'>Watch Trailer</a></button>
                                                </div>
                                                <div className='btn-container'>
                                                <button onClick={handleClose} className='return-btn'>
                                                <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
                                                    </button>
                                               </div>
                                               
                                               </div>
                                           </div>
                                            {/* </div>  */}
                                           </div>
                                          
                                            
                                         
                                            </>
                                          
                                                                                 
                                        </Modal>
                                   
                                     </div>
                                    {/* <p className='p-movie-overview'>{movie.overview}</p> */}
                                </div>
                                
                              
                            ) 
                                      
                       })
                      } 
              </div>
              </div>
              </div>
               
        </>
    )
}