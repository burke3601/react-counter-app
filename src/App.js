
import './App.css';
import { useState } from 'react';

import Home from './Home'
import Joke from './Joke'

import Bracket from './Bracket'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from 'react-router-dom'


function App(props) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const _toggleIsLoggedIn = () => setIsLoggedIn(!isLoggedIn);

 
   
   return (
     <>
    <Router>
      <div className="container">
              
              <br />
              <nav className="navbar">
                  <Link to='/'>Home</Link>
                  <Link to='/joke'>Joke</Link>
                  
                 
                 
                  <Link to='/bracket'>Bracket</Link>
              </nav>
          </div>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/joke">
            <Joke />
        </Route>
       
      
        
        <Route path="/bracket">
            <Bracket />
        </Route>
        <Route path="*">
        <Route path="*">
                  <Redirect to ='/' />
              </Route>
        </Route>
      </Switch>
    </Router>
  </>
  );
}




export default App;
