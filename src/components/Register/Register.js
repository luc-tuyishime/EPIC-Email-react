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
          <input type="text" placeholder="Email" value="" />
        </div>
        <div class="tbox">
          <input type="text" placeholder="First Name" value="" />
        </div>
        <div class="tbox">
          <input type="text" placeholder="Last Name" value="" />
        </div>
        <div class="tbox">
          <input type="password" placeholder="Password" value="" />
        </div>
      </form>
      <button onclick="location.href='home.html'" class="btn" type="submit">
        Register
      </button>
    </div>
  </div>
);

export default Register;
