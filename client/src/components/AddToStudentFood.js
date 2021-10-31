import React, { useState } from "react";
import styled from "styled-components";
import { Form, Radio, Grid, Image, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
// STYLES
const Wrapper = styled.div`
	padding: 4em;
	background: beige;
	width: 600px;
	margin: auto;
	margin-top: 200px;
`;

function AddToStudentFood({ user }) {
	const [formData, setFormData] = useState({
		meal: "",
		item: "",
		picture: "",
	});
	const [formUser, setFormUser] = useState("");
	const [errors, setErrors] = useState(null);
	const history = useHistory();

	function handleUser(e, { value }) {
		setFormUser(value);
		setFormData({ ...formData, user: value });
	}

	function handleChange(e, { name, value }) {
		setFormData({ ...formData, [name]: value });
	}

	// if (formData.user === "parent"){
	// 	ADMIN = formData.user;
	// 	} else {setAdmin(false)}

	function handleSubmit(e) {
		e.preventDefault();
		fetch(`/api/cafeteria_menus`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				meal: formData.meal,
				item: formData.item,
				picture: formData.picture,
				parent_id: user.id,
			}),
		}).then((r) => {
			// setIsLoading(false);
			if (r.ok) {
				r.json().then((data) => {
					console.log(data);
					// history.push(`/cafeteria_menu`);
				});
			} else {
				r.json().then((err) => setErrors(err.errors));
			}
		});

		setFormData({
			meal: "",
			item: "",
			picture: "",
		});
	}

	const loginForm = (
		<Wrapper>
			<h1>Add food to family</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<label>Meal</label>
					<Form.Input
						placeholder="Meal"
						name="meal"
						value={formData.meal}
						onChange={handleChange}
						icon="user"
						iconPosition="left"
					/>
				</Form.Field>

				<Form.Field>
					<label>Item</label>
					<Form.Input
						placeholder="item"
						name="item"
						value={formData.item}
						onChange={handleChange}
						icon="user"
						iconPosition="left"
					/>
				</Form.Field>
				<Form.Field>
					<label>Picture</label>
					<Form.Input
						placeholder="Picture"
						name="picture"
						value={formData.picture}
						onChange={handleChange}
						icon="user"
						iconPosition="left"
					/>
				</Form.Field>

				<Form.Button
					content="Add"
					style={{ background: "#191815", color: "white" }}
				/>
			</Form>
		</Wrapper>
	);
	return <div>{loginForm}</div>;
}

export default AddToStudentFood;
