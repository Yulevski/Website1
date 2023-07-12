// import react from 'react'
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Photopage from './components/Photopage';
import UIpage from './components/UIpage';
import Apppage from './components/Apppage';
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
     <Route exact path="/main" render={() => <Mainpage/>} />
     <Route exact path="/photopage" render={() => <Photopage/>} />
     <Route exact path="/uipage" render={() => <UIpage/>} />
     <Route exact path="/apppage" render={() => <Apppage/>} />
     </Switch>
    
    </BrowserRouter>
  );
}

export default App;
