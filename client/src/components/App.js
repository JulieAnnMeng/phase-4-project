import React, {useState, useEffect} from 'react';
import '../App.css';
import Auth from './Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if(user) {console.log("you are logged in")}

  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }


  return (
    <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <button onClick={handleLogout}>logout</button>
            </li>
            <li>
              <Link to="/add_new_user">About</Link>
            </li>
          </ul>
        </nav>


      <Switch>
          <Auth setUser={setUser} user={user}/>
      </Switch>
    </div>
  );
}

export default App;
