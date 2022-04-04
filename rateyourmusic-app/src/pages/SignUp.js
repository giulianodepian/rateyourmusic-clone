import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordconfirm: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const data = {
      "username": this.state.username,
      "password": this.state.password,
      "passwordconfirm": this.state.passwordconfirm,
      "email": this.state.email
    };
    const options = {
      method:'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch("http://localhost:9000/signUp", options)
    .then(data => console.log(data.json()))
    .catch(error => {
      console.log("Fetch Error")
    })
    event.preventDefault();
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formUser">
          <Form.Label>Username:</Form.Label>
          <Form.Control name="username" onChange={this.handleChange} type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Enter a password:</Form.Label>
          <Form.Control name="password" onChange={this.handleChange} type="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPasswordconf">
          <Form.Label>Type it again</Form.Label>
          <Form.Control name="passwordconfirm" onChange={this.handleChange} type="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Your email address</Form.Label>
          <Form.Control name="email" onChange={this.handleChange} type="email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Account &#62;&#62;
        </Button>
      </Form>
    )
  }
}

export default SignUp
