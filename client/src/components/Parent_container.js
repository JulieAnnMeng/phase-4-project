import React from "react";

function ParentContainer({ user }) {
	return (
		<>
			<div>
				<h1>Welcome {user.first_name}</h1>
				<p>below you can add your children and add menu items</p>
				<button>Add Children</button>
				<button>Add Menu Items</button>
				{/* {ViewChildren} */}
				<p>to view children here</p>
			</div>
		</>
	);
}
export default ParentContainer;
