import React, { useState } from 'react';
import './registerForm.css';
import axios from 'axios';

const BASE_URL = 'http://ecommerce.muersolutions.com/api/v1'
const SIGN_UP_URL = 'http://ecommerce.muersolutions.com/api/v1/user/signup'

const RegisterForm = () => {
    const [isVisible, setIsVisible] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(SIGN_UP_URL,{
      first_name,
      last_name,
      email,
      password, 
      });
      console.log('Registration success! Server response:', response.data);
      //
    } catch (error){
      console.error('Registration failed! Error:', error)
      //
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>

        <label>
          Lastname:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
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

        <button type="submit">Register</button>
      </form>
      <button className="toggle-button" onClick={handleToggleVisibility}>
        {isVisible ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default RegisterForm;
