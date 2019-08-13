import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

const Register = () => (
  <div>
    <Link to="/">
      <h2 class="text-center">EPIC Email</h2>
    </Link>
    <div class="container-login">
      <p class="text-p">Register</p>
      <form class="div-form">
        <div class="tbox">
          <input type="text" placeholder="Email" />
        </div>
        <div class="tbox">
          <input type="text" placeholder="First Name" />
        </div>
        <div class="tbox">
          <input type="text" placeholder="Last Name" />
        </div>
        <div class="tbox">
          <input type="password" placeholder="Password" />
        </div>
      </form>
      <button onclick="location.href='home.html'" class="btn" type="submit">
        Register
      </button>
      <Link to="login">
        <p>Login</p>
      </Link>
    </div>
  </div>
);

export default Register;
