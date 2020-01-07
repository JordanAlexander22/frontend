import React, { Component } from "react";
import axiosWithAuth from "../clients/API/axiosWithAuth";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      //role: role || "client"
    }
  };

  componentDidMount() {
    axiosWithAuth()
    .post(`https://anywhere-fitness-api.herokuapp.com/api/auth/register`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }


  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.user).then(res => {
      if (res) {
        this.props.history.push("/client");
      }
    });
  };

  render() {
    return (
      <div className="register">
        <div className="register-section">
          <div className="register-label">Create Your Account</div>
          <form className="register-form" onSubmit={this.register}>
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              value={this.state.user.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              value={this.state.user.lastName}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="Password"
              placeholder="email"
              value={this.state.user.email}
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="Password"
              placeholder="password"
              value={this.state.user.password}
              onChange={this.handleChange}
            />
            <button className="register-btn">
                
            </button>
            <Link className="redirect-login" to="/client">
              Already have an Account? Sign in here
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

