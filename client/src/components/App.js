import React, { useState, useEffect } from "react";
import "../App.css";
import Auth from "./Auth";
import ParentContainer from "./Parent_container";
import AddStudentToParent from "./AddStudentToParent.js";

import ViewChildren from "./ViewChildren.js";
import FoodSelecion from "./FoodSelection";
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
	const [students, setStudents] = useState(null);
	const [parentSelection, setParentSelection] = useState(null);
	const [reRender, setReRender] = useState(false);

	const history = useHistory();
	function renderApp() {
		setReRender(!reRender);
	}
	useEffect(() => {
		fetch("/api/me").then((response) => {
			if (response.ok) {
				response.json().then((user) => {
					setUser(user);
					// getStudents(user.id);
					// getParentSelection(user.id);
				});
			}
		});
	}, [reRender]);

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

	// function getStudents(id) {
	// 	fetch(`/api/children/${id}`)
	// 		.then((response) => response.json())
	// 		.then(setStudents);
	// }

	// function getParentSelection(id) {
	// 	fetch(`/api/parent_selections/${id}`)
	// 		.then((response) => response.json())
	// 		.then((data) => setParentSelection(data));
	// }

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
					<>
						<Route exact path="/parent">
							<ParentContainer
								user={user}
								students={students}
								parentSelection={parentSelection}
							/>
						</Route>
						<Route exact path="/add_new_student">
							<AddStudentToParent
								user={user}
								renderApp={renderApp}
							/>
						</Route>
						<Route exact path="/view_students">
							<ViewChildren
								students={user.students}
								renderApp={renderApp}
							/>
						</Route>
						<Route exact path="/cafeteria_menu">
							<FoodSelecion menu={user.cafeteria_menus} />
						</Route>
					</>
				) : null}

				<Auth setUser={setUser} user={user} />
			</Switch>
		</div>
	);
}

export default App;
