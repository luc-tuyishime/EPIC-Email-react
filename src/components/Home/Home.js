import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div className="Home">
      <div className="container">
        <div className="text-center abp abm">
          <h1>Welcome to EPIC EMAIL</h1>
          <Link to="login">
            <button>Login</button>
          </Link>
          <Link to="register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
