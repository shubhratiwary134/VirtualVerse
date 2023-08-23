
import './hero.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {faFire} from "@fortawesome/free-solid-svg-icons";
import {faForwardFast} from "@fortawesome/free-solid-svg-icons";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import {faCrown} from "@fortawesome/free-solid-svg-icons";
import {faArrowUpRightDots} from "@fortawesome/free-solid-svg-icons";
import {faStore} from "@fortawesome/free-solid-svg-icons";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {faChess} from "@fortawesome/free-solid-svg-icons";
import {faPerson} from "@fortawesome/free-solid-svg-icons";
import {faBolt} from "@fortawesome/free-solid-svg-icons";
import HeroData from './HeroData';
import { Modal } from '@mui/material';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function Hero() {
    const [data,setData]=useState([])
    
    useEffect(()=>{
        const API_KEY = "57335e66120538f2dc9f9e6a729912cb"
     fetch( ` https://api.themoviedb.org/3/movie/popular?api_key=57335e66120538f2dc9f9e6a729912cb&language=en-US` )
        .then(res=>res.json())
        .then(res=>setData(res.results))
    },[])
    // console.log(data)
  const[coloractive,setactive]=React.useState(false)

  function changebackground(){
    return(
        setactive(!coloractive)
    )
  }
//   const [video,setvideo]=React.useState([])

//   React.useEffect(()=>{
//     fetch(`https://api.themoviedb.org/3/movie/569094/videos?api_key=57335e66120538f2dc9f9e6a729912cb&language=en-US`)
//     .then(res=>res.json())
//     .then(res=>setvideo(res.results))
//   },[])
//   console.log(video)
   
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzMzNWU2NjEyMDUzOGYyZGM5ZjllNmE3Mjk5MTJjYiIsInN1YiI6IjY0Y2Y5OGQ4NGQ2NzkxMDBmZjY4MWVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KY9a4P0Rb6kGU4MrFXG7J-nGjwC_9ZC0LYY4ar_bW24'
    //     }
    //   };
      
    //   fetch('https://api.themoviedb.org/3/account/20262395/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    const [value,setvalue]=React.useState(false)
    // function handleopen(){
    //     return(
    //         setvalue(true)
    //     )
    //   }
      function handleClose(){
        return(
            setvalue(false)
        )
      } 
      const [modalData, setModalData] = useState([]);
      
    return(
        <>
        
        <div className='hero-container'>
          <div className='hero-sidebar'>
            <div className='hero-sidebar-home'>
              <Link to='/toprated' className='hero-TAGS'> Top Rated</Link>  
            </div>
            <div className='hero-sidebar-reviews'>
            <Link to='/upcoming' className='hero-TAGS'>UpComing</Link>
            </div>
            <div>
                <div>
                 <div>
                    <span className='sidebar-topics'>New Release</span>
                    <ul className='sidebar-list'>
                        <li>
                             <span className='sidebar-icon'><FontAwesomeIcon icon={faStar} /></span>
                              Last 30 Days
  
                        </li>
                        <li>
                       <span className='sidebar-icon'> <FontAwesomeIcon icon={faFire} /></span>
                            This week</li>
                        <li>
                            <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faForwardFast} />
                            </span>
                        
                            Next week</li>
                        <li>
                            <span className='sidebar-icon'>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            </span>
                        
                            Release Calender</li>
                    </ul>
                 </div>
                 <div>
                    <span className='sidebar-topics'>Top</span>
                    <ul className='sidebar-list'>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faTrophy} />
                         </span>
                         <span>Best of the Year </span>
                        </li>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faArrowUpRightDots} />
                         </span>
                         <span>Popular In 2022</span>
                        </li>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faCrown} />
                         </span>
                         <span>All Time Top-50</span>
                        </li>
                        <li></li>
                    </ul>
                 </div>
                <div>
                 <span className='sidebar-topics'>Browse</span>
                    <ul className='sidebar-list'>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faGamepad} />
                         </span>
                         <span>Platforms </span>
                        </li>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faStore} />
                         </span>
                         <span>Stores </span>
                        </li>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faFile} />
                         </span>
                         <span>Collections</span>
                        </li>
                        <li></li>
                        </ul>
                 </div>
                 
                 <div>
                 <span className='sidebar-topics'>Genre</span>
                    <ul className='sidebar-list'>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faBolt} />
                         </span>
                         <span>Action </span>
                        </li>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faChess} />
                         </span>
                         <span>Strategy</span>
                        </li>
                        <li>
                        <span className='sidebar-icon'>
                        <FontAwesomeIcon icon={faPerson} />
                         </span>
                         <span>RPG</span>
                        </li>
                        <li></li>
                        </ul>
                 </div>
                </div>
            </div>
          </div>
          <div className='hero-main'>
                <div className='hero-main-header'>
                    <p className='hero-main-p'>New & Trending</p>
                   
                    {/* <p className='hero-main-small-p'>Based On The Players Count And Release Date</p> */}
              <div className='trending-container'>
              {
                       data.map((movie)=>{  
                     
                        
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
                                            
                                            <div className='btn-container'>
                                                <button onClick={handleClose} className='return-btn'>
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
                                   
                                     </div>
                                    {/* <p className='p-movie-overview'>{movie.overview}</p> */}
                                </div>
                                
                              
                            ) 
                                      
                       })
                      } 
              </div>
                
                     </div>
                     <div className='hero-main-footer'>
                        <HeroData />
                     </div>
          </div>
        </div>
            
        </>
    )
}