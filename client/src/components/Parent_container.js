import React, { useEffect, useState } from "react";
// import StudentMenu from "./StudentMenu.js";

function ParentContainer({ user }) {



	return (
		<div>
			<h1>Hello {user.first_name},</h1>
			<p>
				Welcome to Cafeteria Delight. This is your one stop shop to
				manage your students school menu.
			</p>
			<p>
				Feel free to add your children to this site. Once created,
				your student will have the freedom to select from your
				personal menu choices
			</p>
			<p>
				You can also add menu items to the list. These items will be
				sent to your school's cafeteria menu.
			</p>
		</div>
	);
}
export default ParentContainer;