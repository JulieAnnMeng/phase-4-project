import React from "react";
import { Header, Image, Table, Button } from "semantic-ui-react";

function EachFoodOnList({ item }) {
	function handleDelete() {
		// fetch(`/api/parent_selections/${item.id}`, {
		// 	method: "DELETE",
		// }).then((data) => console.log("delete", data));
		// console.log("delete");
	}

	// console.log(item);
	return (
		<>
			<Table.Row>
				<Table.Cell>
					<Header as="h4" image>
						<Image src={item.picture} rounded size="mini" />
						<Header.Content>
							{item.meal}
							<Header.Subheader>{item.item}</Header.Subheader>
						</Header.Content>
					</Header>
				</Table.Cell>
				<Table.Cell textAlign="center">
					<Button basic color="red" onClick={handleDelete}>
						Delete
					</Button>
				</Table.Cell>
			</Table.Row>
		</>
	);
}
export default EachFoodOnList;
