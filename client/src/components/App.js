import React from 'react';
import '../App.css';
import Auth from './Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/add_new_user">About</Link>
            </li>
          </ul>
        </nav>


      <Switch>
          <Auth/>
      </Switch>
    </div>
  );
}

export default App;
