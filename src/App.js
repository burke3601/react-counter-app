
import './App.css';
import { useState } from 'react';
import Blog from './Blog'
import About from './About'
import Home from './Home'
import Counter from './Counter'
import Protected from './Protected'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from 'react-router-dom'


function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const _toggleIsLoggedIn = () => setIsLoggedIn(!isLoggedIn);

 
   
   return (
     <>
    <Router>
      <div>
              <button onClick={_toggleIsLoggedIn}>
                  { isLoggedIn ? 'logout' : 'login' }
              </button>
              <br />
              <nav>
                  <Link to='/'>Home</Link>
                  { isLoggedIn && <Link to='/blog'>Blog</Link> }
                  <Link to='/about'>About</Link>
                  <Link to ='/counter'>Counter</Link>
              </nav>
          </div>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/blog">
            <Protected isLoggedIn={isLoggedIn}>
              <Blog />
            </Protected>  
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/counter">
            <Counter />
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
