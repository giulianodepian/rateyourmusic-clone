import React from 'react';
import './../static/styles/SignUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordconfirm: '',
      email: '',
      message: '',
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
    .then(data => data.json())
    .then(data => {
      this.setState({ message: data.message} )
    })
    .catch(error => {
      console.log(error)
    })
    event.preventDefault();
  }

  render() {
    const message = this.state.message;
    return(
      <div class="signupform">
        <p>To begin, please create an account. </p>
        {message !== '' && message !== "Account Created Successfully" &&
          <div class="signuperror">
            <div class="errorstart" />
            <div class="errormessage">
              <i class="fa fa-exclamation-triangle"></i>
              <p> {message} </p>
            </div>
          </div>
        }
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.handleChange} />
          </label>
          <label>
            Enter a password:
            <input type="password" name="password" onChange={this.handleChange} />
          </label>
          <label>
            Type it again:
            <input type="password" name="passwordconfirm" onChange={this.handleChange} />
          </label>
          <label>
            Your email address:
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Create Account >>" />
        </form>
      </div>
    )
  }
}

export default SignUp;
