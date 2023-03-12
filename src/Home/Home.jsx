
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../GamesContext/GamesContext';

export default function Home() {

  const {games,lodingScreen} = useContext(DataContext);
  
  return <>
   
    <div className='text-center home-background position-relative mt-5  border-bottom border-info rounded-2'> 
      <img src="imgs/paladins.b44d33d6e7ee1ba8.png" alt="background-home" />
          <div className='layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center flex-column'>
            <h1 className='gameover-text'>Find & track the best <span className='text-info'>free-to-play</span> games!</h1>
            <p className='text-muted fs-5 fw-lighter'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <Link to="/Games" className='btn btn-outline-secondary'>Browser Games</Link>
           
          </div>
    </div>

    {lodingScreen == true ? <div className="bg-dark  d-flex justify-content-center align-items-center ">
      <div className="sk-wave">
          <div className="sk-wave-rect bg-danger"></div>
          <div className="sk-wave-rect bg-danger"></div>
          <div className="sk-wave-rect bg-danger"></div>
          <div className="sk-wave-rect bg-danger"></div>
          <div className="sk-wave-rect bg-danger"></div>
           </div>
     </div> :<div className='container py-5'>
      <h3 className='gameover-text'><i className="fa-solid fa-robot"></i> Personalized Recommendations</h3>
      <div className='row'>
 
       {games.slice(0,4).map((game,idx)=>
         <div key={idx} className='col-md-3 col-sm-6'>
        <Link to={`/GamesDetails/${game.id}`}>
        <div className='game card   shadow rounded-2 h-100'>
           <img src={game.thumbnail} className='w-100' alt="nord" />
               <div className='p-3'>
               <div className='d-flex justify-content-between'>
                 <h6 className='gameover-text'>{game.title}</h6>
                 <span className='p-1 btn btn-sm bg-primary text-white'>Free</span>
               </div>
               {/* short_description?.split(' ').splice(0,3).join(' ') */}
               <p className='gameover-text'>{game.platform}</p>
              <div className='d-flex justify-content-between'>
              <i className="fa-solid fa-square-plus gameover-text"></i>
              <div>
                <span className='gameover-text p-1 rounded-5 bg-secondary f'>{game.genre}</span>
                {game.platform =="PC (Windows)"? <i className="ms-1 fa-brands fa-windows gameover-text"></i>:
                <i className="ms-1 fa-solid fa-window-maximize gameover-text"></i>}
              </div>
              </div>
               </div>
         </div>
        </Link>
       </div>
       )}

      </div>
    </div>}
    
  
  </>
}
