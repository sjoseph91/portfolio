import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route, useHistory} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import { useState, useEffect } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const history = useHistory();

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  useEffect(() => {
    history.push("/")
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about" >
                <AboutPage />
              </Route>
              <Route path="/projects" >
                <PortfliosPage />
              </Route>
              <Route path="/contact" >
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
