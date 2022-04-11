import React from 'react';
import { Navigate } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    const data = {
      "username": this.state.username,
      "password": this.state.password,
    }
    const options = {
      method:'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch("http://localhost:9000/login", options)
    .then(data => data.json())
    .then(data => {
      console.log(data.redirect);
      this.setState({ redirect: data.redirect });
    })
    .catch(error => console.log(error));
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />
    }
    else {
      return (
        <div class="loginform">
          <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Log In >>" />
          </form>
        </div>
      )
    }
  }
}

export default Login;
