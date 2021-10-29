import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
	display: "inline-block",
	width: "200px",
	padding: "12px",
	margin: "20px 6px 6px",
	background: "#191815",
	textDecoration: "none",
	color: "white",
	fontSize: "16px",
};

function NavBar({ handleLogout, user, ADMIN }) {
	return (
		<>
			<div>
				{user ? (
					<>
					{ADMIN === 'parent' ? (
						<>
							<NavLink
							to="/parent"
							exact
							style={linkStyles}
							activeStyle={{
								background: "#a09b8d",
							}}>
							Home
							</NavLink>
							<NavLink
								to="/add_new_student"
								exact
								style={linkStyles}
								activeStyle={{
									background: "#a09b8d",
								}}
							>
								Add Student
							</NavLink>
							<NavLink
								to="/view_students"
								exact
								style={linkStyles}
								activeStyle={{
									background: "#a09b8d",
								}}
							>
								View Students
							</NavLink>
							<NavLink
							to="/cafeteria_menu"
							exact
							style={linkStyles}
							activeStyle={{
								background: "#a09b8d",
							}}
							>
								Cafeteria Menu
							</NavLink>
						</>
					): 
						<>
							<NavLink
								to="/student"
								exact
								style={linkStyles}
								activeStyle={{
									background: "#a09b8d",
								}}>
								Home
							</NavLink>
							<NavLink
								to="/cafeteria_menu"
								exact
								style={linkStyles}
								activeStyle={{
									background: "#a09b8d",
								}}
							>
								Cafeteria Menu
							</NavLink>
						</>
					}
						<NavLink
							to="/"
							exact
							style={linkStyles}
							activeStyle={{
								background: "#a09b8d",
							}}
							onClick={handleLogout}
						>
							Logout
						</NavLink>
					</>
				) : (
					<>
						<NavLink
							to="/login"
							exact
							style={linkStyles}
							activeStyle={{
								background: "#a09b8d",
							}}
						>
							Login
						</NavLink>
						<NavLink
							to="/add_new_user"
							exact
							style={linkStyles}
							activeStyle={{
								background: "#a09b8d",
							}}
						>
							Signup
						</NavLink>
					</>
				)}
			</div>
		</>
	);
}
export default NavBar;
