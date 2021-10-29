import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

function EachFoodParent({ item, handleAdd }) {
	// const extra = (
	// 	<Button basic color="green" onClick={() => handleAdd(item)}>
	// 		Add to list
	// 	</Button>
	// );
	console.log(item);
	return (
		<>
			<Card
				image={item.picture}
				header={item.item}
				description={item.meal}
				// extra={extra}
			/>
		</>
	);
}
export default EachFoodParent;
