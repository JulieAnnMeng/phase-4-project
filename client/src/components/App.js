import React, { useState, useEffect } from "react";
import "../App.css";
import Auth from "./Auth";
import ParentContainer from "./Parent_container";
import AddStudentToParent from "./AddStudentToParent.js";
import StudentContainer from "./Student_container"
import ViewChildren from "./ViewChildren.js";
import FoodSelecion from "./FoodSelection";
import CafeteriaMenu from "./CafeteriaMenu"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
} from "react-router-dom";
import NavBar from "./Navbar";

let ADMIN = null;

function App({ADMIN}) {
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
		fetch("/api/me")
		.then((response) => response.json())
		.then((data) => {
			getAdmin(data);
			setUser(data);
		})
		.catch((error) => {console.log(error.message)})
	}, []);
	// reRender

	function getAdmin (data) {
		console.log(data)
		if (data.hasOwnProperty('students')) {
			ADMIN = 'parent';
		} else if (data.hasOwnProperty('parent')) {
			ADMIN = 'student';
		} else {ADMIN = null;}
	}

	function handleLogout() {
		fetch("/api/logout", {
			method: "DELETE",
		}).then(() => {
			setUser(null);
			console.log(`${user.username} logged out!`);
			history.push("/login");
		});
		ADMIN = null;
	}

	if (user) {
		getAdmin(user);
		console.log(user)
		console.log(ADMIN)
	}
	// routes below goes to student, even when logged out, it's late, I'm calling it a night. but pushing it up because views are set


	return (
		<div className="App">
			<NavBar handleLogout={handleLogout} user={user} ADMIN={ADMIN} />
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
					{ADMIN === 'parent' ? (
							<div>
								<Route exact path="/parent">
									<ParentContainer
										user={user}
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
									<CafeteriaMenu menu={user.cafeteria_menus} user={user} />
								</Route>
							</div>
						) : (
						<>
						{ADMIN === 'student' ? (
					<>
						<Route exact path="/student">
							<StudentContainer
								user={user}
							/>
						</Route>
							<Route exact path="/cafeteria_menu">
								<FoodSelecion menu={user.cafeteria_menus} user={user} />
							</Route>
					</> ) : null}
					</> )} 
				</>
				) : null }

				<Auth setUser={setUser} user={user} ADMIN={ADMIN} />
			</Switch>
		</div>
	);
}

export default App;
