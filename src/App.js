
import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path='/search'>
          {/* <h1>this is the search page</h1> */}
            <SearchPage />
          </Route>

          <Route path='/'>
          {/* <h1>this is home page</h1> */}
            <Home />
          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;

//AIzaSyAZusUoMK-FcqSrAWXkHMihvnBo_FIsjK0
