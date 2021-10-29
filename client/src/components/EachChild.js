import React from "react";
import { Button } from "semantic-ui-react";

function EachChild({ child, renderApp }) {
	function handleDelete() {
		console.log("child");
		fetch(`/api/students/${child.id}`, {
			method: "DELETE",
		}).then((data) => {
			console.log("del", data);
			renderApp();
		});
		// .catch((err) => setUser(null));
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
