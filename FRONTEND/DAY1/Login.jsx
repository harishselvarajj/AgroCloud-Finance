import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../assets/register.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    // Clean up event listeners when component unmounts
    return () => {
      signUpButton.removeEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
      signInButton.removeEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }
    if (!validatePassword(password)) {
      setIsPasswordValid(false);
      return;
    }
    // Perform sign-up logic
    console.log("Sign up successful");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }
    if (!validatePassword(password)) {
      setIsPasswordValid(false);
      return;
    }
    // Perform sign-in logic
    console.log("Sign in successful");
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long
    return password.length >= 8;
  };

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp} style={{ 'textAlign': "center" }}>
            <h1>Create Account</h1>
            <div className="social-container">
             {/* <a href="#" className="social">
                <ion-icon name="logo-facebook" />
              </a>
              <a href="#" className="social">
                <ion-icon name="logo-googleplus" />
              </a>
              <a href="#" className="social">
                <ion-icon name="logo-linkedin" />
              </a> */}
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailValid(true);
              }}
              style={{ borderColor: isEmailValid ? '' : 'red' }}
            />
            {!isEmailValid && <p>Please enter a valid email</p>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsPasswordValid(true);
              }}
              style={{ borderColor: isPasswordValid ? '' : 'red' }}
            />
            {!isPasswordValid && <p>Password must be at least 8 characters long</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn} style={{ 'textAlign': "center" }}>
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <ion-icon name="logo-facebook" />
              </a>
              <a href="#" className="social">
                <ion-icon name="logo-googleplus" />
              </a>
              <a href="#" className="social">
                <ion-icon name="logo-linkedin" />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailValid(true);
              }}
              style={{ borderColor: isEmailValid ? '' : 'red' }}
            />
            {!isEmailValid && <p>Please enter a valid email</p>}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsPasswordValid(true);
              }}
              style={{ borderColor: isPasswordValid ? '' : 'red' }}
            />
            {!isPasswordValid && <p>Password must be at least 8 characters long</p>}
            <Link to = "/"><button type="submit">Sign In</button></Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
