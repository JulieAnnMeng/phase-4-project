import React, { useEffect, useState } from "react";
// import ViewChildren from "./ViewChildren.js";
// import ParentMenu from "./ParentMenu";
import StudentMenu from "./StudentMenu.js";
// import AddStudentToParent from "./AddStudentToParent.js";
// import StudentOfParent from "./StudentsOfParent.js";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
} from "react-router-dom";

function ParentContainer({ user, students, parentSelection }) {
	const [studentSelection, setStudentSelection] = useState(null);

	let children;
	let parentPick;
	let studentPick;

	// if (parentSelection !== null) {
	// 	parentPick = parentSelection.map((menu) => {
	// 		let item = menu.cafeteria_menu;

	// 		return (
	// 			<ParentMenu
	// 				key={item.id}
	// 				id={item.id}
	// 				meal={item.meal}
	// 				item={item.item}
	// 				picture={item.picture}
	// 			/>
	// 		);
	// 	});
	// }

	function studentMenu(e) {
		e.preventDefault();
		let id = parseInt(e.target.id);
		fetch(`/api/student_selections/${id}`)
			.then((response) => response.json())
			.then((data) => setStudentSelection(data));
	}

	if (studentSelection !== null) {
		studentPick = studentSelection.map((menu) => {
			console.log(menu);
			let item = menu;
			// console.log(item);
			return (
				<StudentMenu
					key={item.id}
					meal={item.meal}
					item={item.item}
					picture={item.picture}
				/>
			);
		});
	}

	return (
		<>
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
				<button>Add Students</button>
				<button>Add Menu Items</button>
				<br />
				<br />

				<br />
				<br />
				<h2>Student Menu Options</h2>
				<table className="center">
					<thead>
						<tr>
							<th>Meal</th>
							<th>Item</th>
							<th>Picture</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>{parentPick}</tbody>
				</table>
			</div>
			{/* ================ */}

			{/* ================ */}
		</>
	);
}
export default ParentContainer;

// ----code below was moved to App.js. keeping it here incase we need to move it back-----------------

// const [students, setStudents] = useState(null);
// const [parentSelection, setParentSelection] = useState(null);

// function getStudents (id){
//     fetch(`/api/children/${id}`)
//     .then(response => response.json())
//     .then(setStudents)
// }

// function getParentSelection (id){
//     fetch(`/api/parent_selections/${id}`)
//     .then(response => response.json())
//     .then(data => setParentSelection(data))
// }

// useEffect((user) => {
//     // debugger;
// 	let id = user.id;
//     getStudents(id);
//     getParentSelection(id);
// }, [user])
