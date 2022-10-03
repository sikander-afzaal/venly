import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ReactSession }  from 'react-client-session';

import "./Register.css";
import axios from "axios";

const Register = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spassword, setSpassword] = useState('');

  const createUserURL = process.env.REACT_APP_URL + '/createuser';
  const loginUrl = process.env.REACT_APP_URL + '/login';

  const navigate = useNavigate();

  const navigateToTerms = () => {
    // 👇️ navigate to /contacts
    navigate('/terms-conditions');
  };
  
  const navigateToPin = () => {
    navigate('/master-pin')
  }

  const navigateToInterface = () => {
    navigate('/inventory')
  }
  
  function createUserFromEmail() {

    if(password != spassword){
      window.alert('Passwords do not match')
      return
    }
    axios.post(createUserURL, {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response.data);
      ReactSession.set("email", email);
      navigateToTerms();
    });
  }

  function loginFromEmail() {

    axios.post(loginUrl, {
      email: email,
      password: password,
    }).then((response) => {
      ReactSession.set("email", email);
      if (response.data.acceptedTerms) {
        if(response.data.hasWallet) {
          navigateToInterface()
        } else {
          navigateToPin();
        }
      } else if (response.data.hasWallet) {
        navigateToInterface()
      } else {
        navigateToTerms();
      }
    })

  }

  return (
    <div className="register__wrapper">
      <div className="register">
        <div className="register__top">
          <div className="register__header">
            <div className="register__logo">
              <img
                src="/assets/logo-gif.gif"
                alt="Logo"
                className="register__logoGif"
              />
            </div>

            <div className="register__headerCenter">
              <span>{showLoginPage ? "Login" : "Create Account"}</span>
            </div>
          </div>

          <div className="register__signOptions">
            <button className="register__signOption register__facebook">
              <img src="assets/facebook.png" alt="facebook" /> Continue with
              Facebook
            </button>

            <button className="register__signOption register__twitter">
              <img src="assets/twitter.png" alt="twitter" /> Continue with
              Twitter
            </button>

            <button className="register__signOption register__google">
              <img src="assets/google.png" alt="google" />
              Continue with Google
            </button>

            <span className="register__topText">
              Or connect MetaMask or TrustWallet:
            </span>

            <button className="register__signOption register__metamask">
              <img src="assets/metamask.png" alt="metamask" />
              Connect MetaMask
            </button>

            <button className="register__signOption register__trustwallet">
              <img src="assets/trustwallet.svg" alt="trustwallet" />
              TrustWallet
            </button>
          </div>
        </div>

        <div className="register__main">
          <span className="register__mainText">Or login with email</span>

          <form className="register__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="register__input"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="register__input"
              placeholder="Password"
              value={password} 
              onChange={e => setPassword(e.target.value)}
            />

            {!showLoginPage && (
              <input
                type="password"
                className="register__input"
                placeholder="Confirm Password"
                value={spassword} 
                onChange={e => setSpassword(e.target.value)}
              />
            )}
            {showLoginPage ? <button className="aqua-btn" onClick={loginFromEmail}>Login</button> : <button className="aqua-btn" onClick={createUserFromEmail}>Create Account</button>}
          </form>

          <span className="register__switchToLogin">
            {showLoginPage
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            {}
            <span
              onClick={() => {
                setShowLoginPage((prev) => !prev);
              }}
            >
              {showLoginPage ? "Register" : "Login"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
