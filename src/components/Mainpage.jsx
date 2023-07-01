import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';


function Mainpage() {
   

  return( 
    <>
    <div className="Theme-page">

      <div className='top-theme'>
          <h2 className='theme-selection24'>①この中から</h2>
          <h2 className='theme-selection32'>感情がイメージしやすいテーマ</h2>
          <h2 className='theme-selection24'>を選ぼう</h2>
          
\          <h2 className='photo-page-main'><Link to="/Photopage">Photo</Link></h2>
          <h2 className='ui-page-main'><Link to="/uipage">UI</Link></h2>
          <h2 className='app-page-main'><Link to="/apppage">app</Link></h2>



          
          

      </div>

    </div>
</>
    
  )
}

export default Mainpage;