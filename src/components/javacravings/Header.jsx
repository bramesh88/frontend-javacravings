import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import AuthenticationService from "../js/AuthenticationService";

class HeaderComponent extends Component {
  render() {
    let hasLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <header className="header">
        <nav className="navbar  navbar-expand-md navbar-dark">
          <div className="navbar-brand">
            <Link to="/home" className="nav-link">
              Java Cravings
            </Link>
          </div>
          <ul className="navbar-nav">
            {hasLoggedIn && (
              <li>
                <Link to="/home/Ramesh" className="nav-link">
                  Home
                </Link>
              </li>
            )}
            {hasLoggedIn && (
              <li>
                <Link to="/javaTutorial" className="nav-link">
                  Java Tutorial
                </Link>
              </li>
            )}
            {hasLoggedIn && (
              <li>
                <Link to="/interviews" className="nav-link">
                  Interview Questions
                </Link>
              </li>
            )}
            {hasLoggedIn && (
              <li>
                <Link to="/articles" className="nav-link">
                  Articles
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!hasLoggedIn && (
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {hasLoggedIn && (
              <li>
                <Link
                  to="/logout"
                  className="nav-link"
                  onClick={() => AuthenticationService.logout()}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
