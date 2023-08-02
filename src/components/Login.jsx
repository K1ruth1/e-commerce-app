import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const BASE_URL = 'http://ecommerce.muersolutions.com/api/v1';
const SIGN_IN_URL = 'http://ecommerce.muersolutions.com/api/v1/user/login';

const AuthForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SIGN_IN_URL, {
        email,
        password,
      });
      console.log('Login success! Server response:', response.data);
      //
    } catch (error) {
      console.error('Login failed! Error:', error);
      //
    }
  };

  return (
    <div className={`auth-form ${isVisible ? 'show' : 'hide'}`}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Email Address:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      <button className="toggle-button" onClick={handleToggleVisibility}>
        {isVisible ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default AuthForm;
