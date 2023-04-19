import React, { useState } from 'react';
import "./registrationpage.css";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Registration = () => {
  const {register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState('');

  const onSubmit = async (data) => {
  console.log(data);
  try {
    const response = await axios.post("http://h10a-brownie-dev.ap-southeast-2.elasticbeanstalk.com/auth/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    console.log(response.data);
    localStorage.setItem('authToken', response.data.token); // Save the token to local storage
    setStatus('Registration successful!');
  } catch (err) {
    console.log(err);
    setStatus('Registration failed.');
  }
};


  return (
    <>
      <p className="title">Registration Form</p>
  
      <form className="App" style={{ marginRight: "-20%;" }} onSubmit={handleSubmit(onSubmit)}>
          <label>Full name</label>
          <input type="text" placeholder="Bob Jefferson" {...register("name")} />
          <label>Email address</label>
          <input type="email" placeholder="name@example.com" {...register("email", { required: true })} />
          {errors.email && <span style={{ color: "red" }}>
          *Email* is mandatory </span>}
          <label>Password</label>
          <input type="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
      {status && <p>{status}</p>}
    </>
  );
}
  
export default Registration;




