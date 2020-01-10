import React, { useState } from "react";
import axiosWithAuth from "./API/axiosWithAuth";

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(user);
    axiosWithAuth()
      .post("https://anywhere-fitness-api.herokuapp.com/api/auth/register", user)
      .then(res => {
        console.log(res);
        setUser({
          ...user,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: ""
        });
      })
      .catch(error => console.log(error));
  };
  return (
    <div>
    <h1>Register Here</h1>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={user.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={user.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="role"
        value={user.role}
        onChange={handleChange}
      />
      <button className="register-btn" type="submit">
        Create Your Account
      </button>
    </form>
    </div>
  );
};
export default UserForm;
