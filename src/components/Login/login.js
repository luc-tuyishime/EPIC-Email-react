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
          <input type="text" placeholder="Email.." value="" />
        </div>
        <div class="tbox">
          <input type="password" placeholder="Password" value="" />
        </div>
      </form>
      <button onclick="location.href='home.html'" class="btn" type="submit">
        LOG IN
      </button>
    </div>
  </div>
);

export default Login;
