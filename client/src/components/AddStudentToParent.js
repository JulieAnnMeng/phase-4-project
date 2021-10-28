import React, { useState } from "react";
import styled from "styled-components";
import { Form, Radio, Grid, Image } from "semantic-ui-react";
import MyImage from "./boy-1822565.jpg";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
	padding: 4em;
	background: green;
	width: 400px;

	margin: auto;
	margin-top: 200px;
`;

function AddStudentToParent({ user }) {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		username: "",
		password: "",
		password_confirmation: "",
		parent_id: user.id,
	});
	const [formUser, setFormUser] = useState("");
	const history = useHistory();

	function handleChange(e, { name, value }) {
		setFormData({ ...formData, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
		// fetch(`/api/signup`, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		first_name: formData.first_name,
		// 		last_name: formData.last_name,
		// 		username: formData.username,
		// 		password: formData.password,
		// 		password_confirmation: formData.password_confirmation,
		// 	}),
		// })
		// 	.then((r) => r.json())
		// 	.then((data) => {
		// 		setUser(data);
		// 		console.log(data);
		// 		history.push("/parent");
		// 	});
		// // .catch((err) => setUser(null));

		setFormData({
			first_name: "",
			last_name: "",
			username: "",
			password: "",
			password_confirmation: "",
		});
	}

	const loginForm = (
		<Wrapper>
			<h1>Add Student to {user.first_name}'s list</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Field>
					<label>First Name</label>
					<Form.Input
						placeholder="First Name"
						name="first_name"
						value={formData.first_name}
						onChange={handleChange}
						icon="user"
						iconPosition="left"
					/>
				</Form.Field>
				<Form.Field>
					<label>Last Name</label>
					<Form.Input
						placeholder="Last Name"
						name="last_name"
						value={formData.last_name}
						onChange={handleChange}
						icon="user"
						iconPosition="left"
					/>
				</Form.Field>
				<Form.Field>
					<label>Username</label>
					<Form.Input
						placeholder="Username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						icon="user"
						iconPosition="left"
					/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<Form.Input
						type="password"
						placeholder="Password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						icon="lock"
						iconPosition="left"
					/>
				</Form.Field>

				<Form.Field>
					<label>Password Confirmation</label>
					<Form.Input
						type="password"
						placeholder="Password Confirmation"
						name="password_confirmation"
						value={formData.password_confirmation}
						onChange={handleChange}
						icon="lock"
						iconPosition="left"
					/>
				</Form.Field>

				<Form.Button
					content="Signup"
					style={{ background: "#191815", color: "white" }}
				/>
			</Form>
		</Wrapper>
	);
	return (
		// <Grid>
		// 	<Grid.Column width={6}>
		// 		<Image
		// 			src={MyImage}
		// 			style={{ height: "500px", width: "auto", margin: '40px'}}
		// 		/>
		// 	</Grid.Column>

		// 	<Grid.Column width={10}>
		<div>{loginForm}</div>
		// 	</Grid.Column>
		// </Grid>
	);
}

export default AddStudentToParent;
