import React, { useState } from 'react';
import "./registrationpage.css";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://h10a-brownie-dev.ap-southeast-2.elasticbeanstalk.com/auth/login", {
        email: data.email,
        password: data.password,
      });

      console.log(response.data);
      localStorage.setItem('authToken', response.data.token); // Save the token to local storage
      localStorage.setItem('userEmail', data.email); // Save the user email to local storage
      setStatus('Login successful!');
      setUserEmail(data.email);
    } catch (err) {
      console.log(err);
      setStatus('Login failed.');
    }
  };

  return (
    <>
      <p className="title">Login Form</p>

      <form className="App" style={{ marginRight: "-20%;" }} onSubmit={handleSubmit(onSubmit)}>
        <label>Email address</label>
        <input type="email" placeholder="name@example.com" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
        <label>Password</label>
        <input type="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
      {status && <p>{status}</p>}

      {userEmail && (
        <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
          Logged in as: {userEmail}
        </div>
      )}
    </>
  );
}

export default Login;

