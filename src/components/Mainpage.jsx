import React from 'react';
import {  Link , NavLink} from 'react-router-dom';
import './styles/mainpage.css';


function Mainpage() {
   

  return( 
    <>
     <header class="site-header">
      <div class="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
          </ul>
      </div>
    </header>
    
    <div className="mainpage-container">      
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