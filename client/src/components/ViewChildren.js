import React, { useEffect, useState } from "react";
import EachChild from "./EachChild";
// import ViewMenu from './ViewMenu';

function ViewChildren({ students }) {
	return (
		<div>
			<h2>Students</h2>
			<table className="center">
				<thead>
					<tr>
						<th>Students</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{students.map((child) => (
						<EachChild key={child.id} child={child} />
					))}
				</tbody>
			</table>
		</div>
	);
}
export default ViewChildren;
