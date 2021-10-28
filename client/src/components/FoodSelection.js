import React, { useState, useEffect } from "react";
import { ItemContent, Table } from "semantic-ui-react";
import EachFood from "./EachFood";
import EachFoodOnList from "./EachFoodOnList";

function FoodSelecion() {
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

	useEffect(() => {
		fetch(`/api/cafeteria_menus/`)
			.then((response) => response.json())
			.then((data) => setCafeteriaMenu(data));
	}, []);

	return (
		<>
			<h2>List of item to that Students can choose from</h2>
			<div class="ui centered cards container" style={{ width: "400px" }}>
				<Table padded="very" celled padded>
					<Table.Body>
						{listForStudents.map((item) => (
							<EachFoodOnList key={item.id} item={item} />
						))}
					</Table.Body>
				</Table>
			</div>
			<h2>List of item to choose from</h2>
			<div class="ui centered cards container">
				{cafeteriaMenu.map((item) => (
					<EachFood key={item.id} item={item} handleAdd={handleAdd} />
				))}
			</div>
		</>
	);
}
export default FoodSelecion;
