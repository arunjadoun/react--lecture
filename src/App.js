import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import Profile from "./Profile";
import { Nav, Navbar, NavItem } from "react-bootstrap";



function App() {
    const isLoggedIn = localStorage.getItem('token');
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>

            {isLoggedIn ? (
                    <label></label>
                  ) : (
                    <NavLink activeClassName="active" to="/login">Login</NavLink>
                  )}

            {isLoggedIn ? (
                    <label></label>
                  ) : (
                    <NavLink activeClassName="active" to="/register">Register</NavLink>
                  )}

            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            <NavLink activeClassName="active" to="/about-us">About</NavLink>
            <NavLink activeClassName="profile" to="/profile">Profile</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/contact" component={Contact} />
              <Route path="/about-us" component={About} />
              <Route path="/register" component={Signup} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;