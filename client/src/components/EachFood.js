import React from "react";
import { Button, Card, Image, Icon } from "semantic-ui-react";

function EachFood({ item, handleAdd }) {
	const extra = (
		<Button basic color="green" onClick={() => handleAdd(item)}>
			Add to list
		</Button>
	);
	// console.log(item);
	return (
		<>
			<Card
				image={item.picture}
				header={item.meal}
				description={item.item}
				extra={extra}
			/>
		</>
	);
}
export default EachFood;
