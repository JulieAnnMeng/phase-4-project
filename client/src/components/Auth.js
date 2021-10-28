import React, { useState, useEffect } from "react";
import CreateAdminUser from "./CreateAdminUser";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Auth({ setUser, user }) {
	// if (!user) return <Login setUser={setUser} />;
	// if (user) return <Parent user={user} />;

	return (
		<>
			<Route exact path="/login">
				<Login setUser={setUser} />
			</Route>
			<Route exact path="/add_new_user">
				<CreateAdminUser setUser={setUser} />
			</Route>
		</>
	);
}
export default Auth;
