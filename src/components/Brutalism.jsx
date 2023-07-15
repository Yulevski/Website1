// import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/brutalism.css';
import image1 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/1.jpg";
import image2 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/2.jpg";
import image3 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/3.JPG";
import image4 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/4.JPG";
import image5 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/5.jpg";
import image6 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/6.jpg";
import image7 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/7.jpg";
import image8 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/8.jpg";
import image9 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/9.jpg";
import image10 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/10.jpg";
import image11 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/11.jpg";
import image12 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/12.JPG";
import image13 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/13.jpg";
import image14 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/14.jpg";
import image15 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/15.jpg";
import image16 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/16.jpg";
import image17 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/17.jpg";
import image18 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/18.jpg";
import image19 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/19.jpg";
import image20 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/20.JPG";
import image21 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/21.jpg";
import image22 from "./styles/pictures/Brutalist/architecture/Serbia/Belgrade/22.jpg";

function UIpage() {
  // const [imageWidth, setImageWidth] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const windowWidth = window.innerWidth;
  //     const thirdWidth = windowWidth / 3;
  //     setImageWidth(thirdWidth);
  //   };

  //   // Call handleResize initially and add event listener for window resize
  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return( 
    <>
    <header class="site-header">
      <div class="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/main">Home</NavLink></li>
            <li class="nav_item"><a href="https://www.instagram.com/yu4nai/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li class="nav_item"><a href="https://www.linkedin.com/in/yu-yonai-02b82b15a/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li class="nav_item"><a href="https://www.behance.net/b4436605" target="_blank" rel="noreferrer">Behance</a></li>
            
          </ul>
      </div>
    </header>

    <div className="brutalist-photos">
    <div className="brutalist-photos">
  <div className="photo-container">
    <img src={image1} alt="belgrade1" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image2} alt="belgrade2" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image3} alt="belgrade3" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image4} alt="belgrade4" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image5} alt="belgrade5" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image6} alt="belgrade6" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image7} alt="belgrade7" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image8} alt="belgrade8" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image9} alt="belgrade9" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image10} alt="belgrade10" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image11} alt="belgrade11" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image12} alt="belgrade12" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image13} alt="belgrade13" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image14} alt="belgrade14" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image15} alt="belgrade15" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image16} alt="belgrade16" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image17} alt="belgrade17" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image18} alt="belgrade18" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image19} alt="belgrade19" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image20} alt="belgrade20" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image21} alt="belgrade21" className="photo" />
  </div>
  <div className="photo-container">
    <img src={image22} alt="belgrade22" className="photo" />
  </div>
</div>



      {/* Add more <img> elements for additional photos */}
    </div>
</>
    
  )
}
export default UIpage;