import { useState } from 'react'
import { BrowserRouter, Route,Switch ,Link,NavLink} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Photopage from './components/Photopage';
import UIpage from './components/UIpage';
import Apppage from './components/Apppage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Switch>
     <Route exact path="/" render={() => <Mainpage/>} />
     <Route exact path="/photopage" render={() => <Photopage/>} />
     <Route exact path="/uipage" render={() => <UIpage/>} />
     <Route exact path="/apppage" render={() => <Apppage/>} />
     </Switch>
    
    </BrowserRouter>
  );
}

export default App;
