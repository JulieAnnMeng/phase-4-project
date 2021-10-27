import React, { useState, useEffect } from "react";
import "../App.css";
import Auth from "./Auth";
import Parent from "./Parent";
import ParentContainer from "./Parent_container";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
} from "react-router-dom";
import NavBar from "./Navbar";

function App() {
	const [user, setUser] = useState(null);
	const [userLevel, setUserLevel] = useState(null);
	const history = useHistory();
	useEffect(() => {
		fetch("/api/me").then((response) => {
			if (response.ok) {
				response.json().then((user) => setUser(user));
			}
		});
	}, []);

	if (user) {
		console.log(user);
	}

	function handleLogout() {
		fetch("/api/logout", {
			method: "DELETE",
		}).then(() => {
			setUser(null);
			console.log(`${user.username} logged out!`);
			history.push("/login");
		});
	}

	return (
		<div className="App">
			<NavBar handleLogout={handleLogout} user={user} />

			<Switch>
				<Route exact path="/">
					{user ? (
						<Redirect to="/parent" />
					) : (
						<Redirect to="/login" />
					)}
				</Route>

				{user ? (
					<Route exact path="/parent">
						<ParentContainer user={user} />
					</Route>
				) : null}

				<Auth setUser={setUser} user={user} />
			</Switch>
		</div>
	);
}

export default App;
