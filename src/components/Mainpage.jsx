import React from 'react';
import {  Link } from 'react-router-dom';
import './styles/mainpage.css';


function Mainpage() {
   

  return( 
    <>
    <div className="mainpage-container">      
      <h1 className='title-main'>Yu's private photos 18+</h1>
        <Link className='link' to="/Photopage">
        <button className='photo-page-main'>Photo</button>
        </Link>
        <Link className='link' to="/uipage">
        <button className='ui-page-main'>UI</button>
        </Link>
        <Link className='link' to="/apppage">
        <button className='app-page-main'>app</button>
        </Link>
      
      </div>{/* "mainpage-container" */}

</>
    
  )
}

export default Mainpage;