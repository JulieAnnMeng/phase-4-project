import React, { useState } from "react";
import styled from "styled-components";
import { Form, Radio, Grid, Image, Message } from "semantic-ui-react";
import MyImage from "./boy-1822565.jpg";
import { useHistory } from "react-router-dom";
// STYLES
const Wrapper = styled.div`
	padding: 4em;
	background: papayawhip;
	width: 400px;

	margin: auto;
	margin-top: 200px;
`;

function Login({ setUser }) {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		user: "",
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

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
		fetch(`/api/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				user: formData.user,
				username: formData.username,
				password: formData.password,
				password_confirmation: formData.password,
			}),
		})
			// .then((r) => r.json())
			// .then((data) => {
			// 	setUser(data);
			// 	// console.log(data);
			// 	history.push("/parent");
			// })
			// .catch((err) => setUser(null));

			.then((r) => {
				// setIsLoading(false);
				if (r.ok) {
					r.json().then((data) => {
						setUser(data);
						history.push("/parent");
					});
				} else {
					r.json().then((err) => setErrors(err.errors));
				}
			});

		setFormData({ username: "", password: "", user: "" });
	}

	const loginForm = (
		<Wrapper>
			<h1>Login</h1>
			<Form onSubmit={handleSubmit}>
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

				{/* <Form.Field>
            <label>Password Confirmation</label>
            <Form.Input
              type='password'
              placeholder='Password Confirmation'
              name='password_confirmation'
              value={formData.password_confirmation}
              onChange={handleChange}
              icon='lock'
              iconPosition='left'
            />
          </Form.Field> */}

				<Form.Field>
					Selected value: <b>{formUser}</b>
				</Form.Field>
				<Form.Field>
					<Radio
						label="Parent"
						name="parent"
						value="parent"
						checked={formUser === "parent"}
						onChange={handleUser}
					/>
				</Form.Field>
				<Form.Field>
					<Radio
						label="Student"
						name="student"
						value="student"
						checked={formUser === "student"}
						onChange={handleUser}
					/>
				</Form.Field>

				<Form.Button
					content="Login"
					style={{ background: "#191815", color: "white" }}
				/>
			</Form>
			{errors ? (
				<Message error header={errors} content="Please sign in again" />
			) : null}
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

export default Login;
