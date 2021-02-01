
import './App.css';


import Home from './components/Home'


import Bracket from './components/Bracket'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
  
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
                  
                  
                 
                 
                  <Link to='/bracket'>Bracket</Link>
              </nav>
          </div>
      <Switch>
        <Route exact path="/">
            <Home />
            <Link to='/bracket'>Go To Bracket!</Link>
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
