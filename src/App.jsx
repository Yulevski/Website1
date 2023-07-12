// import react from 'react'
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Photopage from './components/Photopage';
import UIpage from './components/UIpage';
import Apppage from './components/Apppage';
import Designpage from './components/Designpage';
import Blogpage from './components/Blogpage';
import Illustpage from './components/Illustpage';
import Photopage2 from './components/Photopage2';
import Architectures from './components/Architectures';
import Nature from './components/Nature';
import Street from './components/Street';
import Airplanes from './components/Airplanes';

import './App.css';

function App() {
  return (

    <BrowserRouter>
     {/* <!-- Header Start --> */}
    {/* <header class="site-header">
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
    </header> */}
    {/* <!-- Header End --> */}


     <Switch>
     <Route exact path="/" render={() => <Mainpage/>} />
     <Route exact path="/photopage" render={() => <Photopage/>} />
     <Route exact path="/uipage" render={() => <UIpage/>} />
     <Route exact path="/designpage" render={() => <Designpage/>} />
     <Route exact path="/apppage" render={() => <Apppage/>} />
     <Route exact path="/blogpage" render={() => <Blogpage/>} />
     <Route exact path="/illustpage" render={() => <Illustpage/>} />
     <Route exact path="/photopage2" render={() => <Photopage2/>} />
     <Route exact path="/architectures" render={() => <Architectures/>} />
     <Route exact path="/nature" render={() => <Nature/>} />
     <Route exact path="/street" render={() => <Street/>} />
     <Route exact path="/airplanes" render={() => <Airplanes/>} />
     {/* <Route exact path="/photopage2" render={() => <Photopage2/>} /> */}
     </Switch>
    
    </BrowserRouter>
  );
}

export default App;
