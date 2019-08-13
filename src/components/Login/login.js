import React from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <Link to="/">
      <h2 class="text-center">EPIC Email</h2>
    </Link>
    <div class="container-login">
      <p class="text-p">LOG IN</p>
      <form class="div-form">
        <div class="tbox">
          <input type="text" placeholder="Email" />
        </div>
        <div class="tbox">
          <input type="password" placeholder="Password" />
        </div>
      </form>
      <button onclick="location.href='home.html'" class="btn" type="submit">
        LOG IN
      </button>
      <Link to="register">
        <p>Register</p>
      </Link>
    </div>
  </div>
);

export default Login;
