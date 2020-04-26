import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import submitbtn from "./style";

class Navbar extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <header>
        <nav className="transparent">
          <div className="nav-wrapper">
            <a className="brand-logo">
            <b>K-Mail</b>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a style={submitbtn} className="waves-effect waves-light btn" href="#">
                  <NavLink to="/login" exact>
                    Login
                  </NavLink>
                </a>

                
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
