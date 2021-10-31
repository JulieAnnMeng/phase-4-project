import React, { useState, useEffect } from "react";
import { ItemContent, Table } from "semantic-ui-react";
import EachFoodParent from "./EachFoodParent";
import EachFoodOnList from "./EachFoodOnList";
import AddToStudentFood from "./AddToStudentFood";

function CafeteriaMenu({ menu, user }) {
	const [cafeteriaMenu, setCafeteriaMenu] = useState([]);
	const [listForStudents, setListForStudents] = useState([]);

	function handleAdd(item) {
		const found = listForStudents.some((arrVal) => item === arrVal);
		if (!found) {
			setListForStudents([...listForStudents, item]);
		}
	}
	console.log("added", listForStudents);
	console.log(cafeteriaMenu);

	// const linkStyles = {
	//     display: "inline-block",
	//     width: "200px",
	//     padding: "12px",
	//     margin: "20px 6px 6px",
	//     background: "#191815",
	//     textDecoration: "none",
	//     color: "white",
	//     fontSize: "16px",
	// };

	function handleMenu(e) {
		e.preventDefault();
		// Should add if we have time. if no, just use seed data as the Schools set menu
	}

	// useEffect(() => {
	// 	fetch(`/api/cafeteria_menus/`)
	// 		.then((response) => response.json())
	// 		.then((data) => setCafeteriaMenu(data));
	// }, []);

	return (
		<>
			<AddToStudentFood user={user} />
			<h2>List of item to choose from</h2>
			{/* Add this form if we have time. if not, keep seed menu as cafeteria menu
            <button style={linkStyles}activeStyle={{Background: "#a09b8d",}} onClick={handleMenu}>
                Add Menu Item
            </button> */}
			<div class="ui centered cards container">
				{menu.map((item) => (
					<EachFoodParent
						key={item.id}
						item={item}
						handleAdd={handleAdd}
					/>
				))}
			</div>
			{/* <h2>List of item to that Students can choose from</h2>
                <div class="ui centered cards container" style={{ width: "400px" }}>
                    <Table padded="very" celled padded>
                        <Table.Body>
                            {listForStudents.map((item) => (
                                <EachFoodOnList key={item.id} item={item} />
                            ))}
                        </Table.Body>
                    </Table>
			</div> */}
		</>
	);
}
export default CafeteriaMenu;
