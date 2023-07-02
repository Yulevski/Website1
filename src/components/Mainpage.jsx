import React from 'react';
import {  Link } from 'react-router-dom';
import './styles/mainpage.css';


function Mainpage() {
   

  return( 
    <>
    <div className="mainpage-container">      
      <h1 className='title-main'>Yu's private photos 18+</h1>
       
            <button className='photo-page-main'><Link className='link' to="/Photopage">Photo</Link></button>
            <button className='ui-page-main'><Link className='link' to="/uipage">UI</Link></button>
            <button className='app-page-main'><Link className='link' to="/apppage">app</Link></button>
      
      </div>{/* "mainpage-container" */}

</>
    
  )
}

export default Mainpage;