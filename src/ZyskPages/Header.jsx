import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="feature-announcement">
        <span className="new-feature">New feature</span>
        <a href="#" className="team-dashboard">Check out the team dashboard →</a>
      </div>
      <h1 className="title">
        Beautiful <span className="highlight">Analytics</span> to grow smarter
      </h1>
      <p className="subtitle">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="actions">
        <button className="demo-button">Demo</button>
        <button className="signup-button">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
