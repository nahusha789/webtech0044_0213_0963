import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
import submitbtn from "./style";


class Homenav extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <header>
        <nav className="transparent">
          <div className="nav-wrapper">

            <a href="#"  className="brand-logo">
            
            <b>K-Mail</b>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* <li>
                <a className="waves-effect waves-light btn green" href="#">
                  <NavLink to="/sent" exact>
                    Sent
                  </NavLink>
                </a>                
              </li> */}
              <li>
                <a style={submitbtn} className="waves-effect waves-light btn" href="#">
                  <NavLink to="/logout" exact>
                    Logout
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

export default Homenav;