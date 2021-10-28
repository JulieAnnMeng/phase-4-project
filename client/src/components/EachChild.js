import React from "react";
import { Button } from "semantic-ui-react";

function EachChild({ child }) {
	function handleDelete() {
		console.log("child");
		// fetch(``, {
		// 	method: "DELETE",
		// })
		// 	.then((resp) => resp.json())
		// 	.then((data) => console.log(data));
	}
	return (
		<tr>
			<th>{`${child.first_name} ${child.last_name}`}</th>
			<th>
				<Button
					basic
					color="red"
					content="Delete"
					onClick={handleDelete}
				/>
			</th>
		</tr>
	);
}
export default EachChild;
