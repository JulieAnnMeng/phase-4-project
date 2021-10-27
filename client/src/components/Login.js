import React, {useState} from "react";
import styled from "styled-components";
import { Form, Radio,Grid,Image } from 'semantic-ui-react'
import MyImage from './boy-1822565.jpg'


// STYLES 
const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  width: 400px;

  margin: auto;
  margin-top: 200px;
`;


function Login (){
  const [formData, setFormData] = useState({username: '', password: '', password_confirmation: '', user: ''})
  const [formUser, setFormUser] = useState("")

  function handleUser(e, { value }){
    setFormUser( value )
    setFormData({...formData, user: value })
  }

  function handleChange(e, { name, value }){
    setFormData({...formData, [name]: value })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData)
  
    fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: formData.user,
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.password_confirmation
      }),
    })
      .then((r) => r.json())
      .then(user => console.log(user));

      setFormData({username: '', password: '', password_confirmation: '', user: ''})
  }


  const loginForm = (
    <Wrapper>
    <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
     
          <Form.Field>
          <label>User Input</label>
          <Form.Input
                  placeholder='Username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  icon='user'
                  iconPosition='left'
          />
        </Form.Field>

        <Form.Field>
          <label>Password</label>
          <Form.Input 
            type='password'
            placeholder='Password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            icon='lock'
            iconPosition='left'
          />
          </Form.Field>

          <Form.Field>
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
          </Form.Field>

          <Form.Field>
            Selected value: <b>{formUser}</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label='Parent'
              name='parent'
              value='parent'
              checked={formUser === 'parent'}
              onChange={handleUser}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Student'
              name='student'
              value='student'
              checked={formUser === 'student'}
              onChange={handleUser}
            />
          </Form.Field>

            <Form.Button content='Login' style={{ background: "#191815", color: "white" }} />
     
        </Form>
        </Wrapper>
  )
   return (
    <Grid>
      <Grid.Column  width={6}>
        <Image src={MyImage} style={{ height: "100%", width: "auto" }}/>
      </Grid.Column>
      
      <Grid.Column width={10}>
      <div>
        {loginForm}
      </div>
      </Grid.Column>
    </Grid>
   )
}


export default Login  

