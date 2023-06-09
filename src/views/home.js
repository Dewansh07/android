import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  const redirectToGoogle = () => {
    window.location.href = "google-page.html";
  };
  
  const redirectToFacebook = () => {
    window.location.href = "facebook-page.html";
  };
  
  const redirectToGitHub = () => {
    window.location.href = "github-page.html";
  };
  
  const redirectToHome = () => {
    window.location.href = "home-page.html";
  };
  
  const redirectToEvents = () => {
    window.location.href = "events-page.html";
  };
  
  const redirectToContact = () => {
    window.location.href = "contact-page.html";
  };
  
  const redirectToAboutUs = () => {
    window.location.href = "about-us-page.html";
  };
  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };
  return (
    <div className="home-container">
      <Helmet>
        <title>Login Page</title>
        <meta property="og:title" content="Giant Big Hearted Hare" />
      </Helmet>
      <div className="home-pro1619">
        <img
          src="/external/rectangle5334-568t-1100h.png"
          alt="Rectangle5334"
          className="home-rectangle53"
        />
        
        <div className="home-group25">
          <img
            src="/external/rectangle5638-cjas-800w.png"
            alt="Rectangle5638"
            className="home-rectangle56"
          />
          <img
            src="/external/rectangle5739-y1fp-900h.png"
            alt="Rectangle5739"
            className="home-rectangle57"
          />
          <img
            src="/external/polygon1310-riur.svg"
            alt="Polygon1310"
            className="home-polygon1"
          />
          <img
            src="/external/image7311-7sep-700h.png"
            alt="image7311"
            className="home-image7"
          />
        </div>
        <div className="home-group24">
          <div className="home-group"></div>
          <span className="home-text">
            <span>user login</span>
          </span>
          <span className="home-text02">
            <span>Hey, Enter your details and dive into the Android Club</span>
          </span>
          <div>
          
          <img
            src="/external/rectangle43317-vty-200h.png"
            alt="Rectangle43317"
            className="home-rectangle43 input"
            
          />
          
          </div>
          <img
            src="/external/rectangle44318-c177-200h.png"
            alt="Rectangle44318"
            className="home-rectangle44 input"
          />

          <button
            className="home-rectangle45 button"
            onClick={handleLogin}
          >
            
            <img className="home-rectangle69" src="/external/rectangle45319-6zq9-200h.png"  />
            <span className= "home-text007">Login</span>
          </button>
          
          <span className="home-text04">

            <input type="text" className='home-input01' placeholder='Enter Email' />
            <span>

              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="home-text06">
            <input type="text" className='home-input-02' placeholder='Password (at least 8 character)' />
            
          </span>
          <span className="home-text08">
            <span>LOGIN</span>
          </span>
          <span className="home-text10">
            <span>-Or Sign up with-</span>
          </span>

          <button
            className="home-text12 button"
            onClick={handleForgotPassword}
          >
            <span>Forgot Password?</span>
          </button>
          <div className="home-group20 button" onClick="redirectToGoogle()">
            <span className="home-text14">
              <button>
                <span>Google</span>
              </button>
            </span>
            <img
              src="/external/image4328-hd6r-200h.png"
              alt="image4328"
              className="home-image4"
            />
          </div>
          <div className="home-group22 button" onClick="redirectToFacebook()">
            <span className="home-text16">
              <button>
                <span>Facebook</span>
              </button>
            </span>
            <img
              src="/external/rectangle42332-js0n-200w.png"
              alt="Rectangle42332"
              className="home-rectangle42"
            />
          </div>
          <div className="home-group21 button" onClick="redirectToGitHub()">
            <span className="home-text18">
              <button>
                <span>GitHub</span>
              </button>
            </span>
            <img
              src="/external/image5336-ukkp-200w.png"
              alt="image5336"
              className="home-image5"
            />
          </div>
        </div>
        <img
          src="/external/aclogo337-0mv-300h.png"
          alt="AClogo337"
          className="home--clogo"
        />
        <div className="home-group241">
          <span className="home-text20 button" onClick="redirectToHome()">
            <button>
              <span>HOME</span>
            </button>
          </span>
          <span className="home-text22 button" onClick="redirectToEvents()">
            <button>
              <span>EVENTS</span>
            </button>
          </span>
          <span className="home-text24 button" onClick="redirectToContact()">
            <button>
              <span>CONTACT</span>
            </button>
          </span>
          <span className="home-text26 button" onClick="redirectToAboutUs()">
            <button>
              <span>ABOUT US</span>
            </button>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Home

