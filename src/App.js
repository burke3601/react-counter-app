
import './App.css';
import Home from './components/Home'
import Bracket from './components/Bracket'
import About from './components/About'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  
} from 'react-router-dom'


function App(props) {

   return (
     <>
    <Router>
      <div className="container">
              
              <br />
              <nav className="navbar">
               <ul className="navlist" >
                  <li className="linav"><Link to='/'>Home</Link></li>
                  
                  <li className="linav"><Link to='/bracket'>Bracket</Link></li>
                  <li className="linav"><Link to='/about'>About</Link></li>
                </ul>
              </nav>
          </div>
      <Switch>
        <Route exact path="/">
          
            <Home />
            
        </Route>
        <Route path="/bracket">
        
            <Bracket />
        </Route>
        <Route path="/about">
        
            <About />
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
