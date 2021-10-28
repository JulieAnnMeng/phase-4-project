import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
	display: "inline-block",
	width: "100px",
	padding: "12px",
	margin: "20px 6px 6px",
	background: "#191815",
	textDecoration: "none",
	color: "white",
	"font-size": "16px",
};

function NavBar({ handleLogout, user }) {
	return (
		<>
			<div>
				{user ? (
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
				) : (
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
				)}
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
			</div>
		</>
	);
}
export default NavBar;
