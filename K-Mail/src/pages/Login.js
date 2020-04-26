import React from "react";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
import Particles from 'react-particles-js';
import submitbtn from "./style";

class Login extends React.Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
    function check_login_state() {
      var sender_object = {
        xhr: new XMLHttpRequest(),
        send: function () {
          const token = localStorage.getItem('token');
          //alert("Sending request");
          this.xhr.open("GET", "http://localhost:8080/users/checkLogged", true);
          this.xhr.onreadystatechange = this.callback;
          this.xhr.setRequestHeader('Authorization', token);
          this.xhr.send();
        },
        callback: function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              //alert("Not logged in");
              //alert(this.status);
              window.location = '/home';
            }
          }
        }
      }
      sender_object.send();
    }
    check_login_state();
  }
  render() {
    function attempt_login() {
      var sender_object = {
        xhr: new XMLHttpRequest(),
        send: function () {
          const data = {
            user: document.getElementById("email").value,
            password: document.getElementById("password").value
          };
          this.xhr.open("POST", "http://localhost:8080/users/login", true);
          this.xhr.onreadystatechange = this.callback;
          this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          console.log("Sending login data");
          console.log(data);
          this.xhr.send(JSON.stringify(data));
        },
        callback: function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              alert("Successful login");
              let token = "Bearer " + JSON.parse(this.responseText).token;
              localStorage.setItem('token', token);
              localStorage.setItem('user', document.getElementById("email").value);
              var check = localStorage.getItem('token');
              if (check) {
                window.location.href = "/home";
              }
              else {
                alert("Error in Logging");
                window.location.href = "/login"
              }
            }
          }
        }
      }
      sender_object.send();
    }

    function checkUser() {
      console.log("Checking user");
      var sender_object = {
        xhr: new XMLHttpRequest(),
        send: function () {
          this.xhr.open("GET", "http://localhost:8080/users/check?user=" + document.getElementById("email").value, true);
          this.xhr.onreadystatechange = this.callback;
          this.xhr.send();
        },
        callback: function () {
          if (this.readyState === 4) {
            const button = document.getElementById("login");
            if (this.status == 404) {
              console.log("404");
              alert("User does not exist");
              button.disabled = "true";
            }
            if (this.status == 200) {
              console.log("200");
              button.removeAttribute("disabled");
            }
            if (this.status == 500) {
              console.log("500");
              alert("server error");
            }
          }
        }
      }
      sender_object.send()
    }



    const particleStyle = {
      width: "100%",
      height: "100%",
      position: "fixed",
      "z-index": "-10",
      top: "0",
      left: "0",
      "background-color": "#2a0608"
    }

    const divStyle = {
      "background-color" : "#ededf0",
    }

    return (
      <>
        <main className="col s2">
          <Particles style={particleStyle}
            params={{
			  "particles": {
			    "number": {
			      "value": 400,
			      "density": {
				"enable": true,
				"value_area": 800
			      }
			    },
			    "color": {
			      "value": "#fff"
			    },
			    "shape": {
			      "type": "circle",
			      "stroke": {
				"width": 0,
				"color": "#000000"
			      },
			      "polygon": {
				"nb_sides": 5
			      },
			      "image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			      }
			    },
			    "opacity": {
			      "value": 0.5,
			      "random": true,
			      "anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			      }
			    },
			    "size": {
			      "value": 10,
			      "random": true,
			      "anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			      }
			    },
			    "line_linked": {
			      "enable": false,
			      "distance": 500,
			      "color": "#ffffff",
			      "opacity": 0.4,
			      "width": 2
			    },
			    "move": {
			      "enable": true,
			      "speed": 6,
			      "direction": "bottom",
			      "random": false,
			      "straight": false,
			      "out_mode": "out",
			      "bounce": false,
			      "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			      }
			    }
			  },
			  "interactivity": {
			    "detect_on": "window",
			    "events": {
			      "onhover": {
				"enable": false,
				"mode": "repulse"
			      },
			      "onclick": {
				"enable": false,
				"mode": "push"
			      },
			      "resize": true
			    },
			    "modes": {
			      "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 0.5
				}
			      },
			      "bubble": {
				"distance": 400,
				"size": 4,
				"duration": 0.3,
				"opacity": 1,
				"speed": 3
			      },
			      "repulse": {
				"distance": 200,
				"duration": 0.4
			      },
			      "push": {
				"particles_nb": 4
			      },
			      "remove": {
				"particles_nb": 2
			      }
			    }
			  },
			  "retina_detect": true
			}}
          />
          <div className="row" style={{marginTop: "1%"}}>
            <div className="col s8 offset-s2">
            <div className="col s12 m3 offset-m3 card center" style={divStyle}>
              <h5>Login</h5>
            </div>
            <div className="col s12 m3 offset-m0 card center" style={divStyle}>
              <h5>
                <NavLink to="/signup" exact>
                  Signup
                  </NavLink>
              </h5>
            </div>
            <div className="col s12 m6 offset-m3 card center" style={divStyle}>
              <div className="input-field col s12">
                <input className="validate" type="text" name="email" id="email" onBlur={checkUser} required />
                <label for="email">Username</label>
              </div>

              <div className="input-field col s12">
                <input className="validate" type="password" name="password" id="password" required />
                <label for="password">Password</label>
              </div>
              <div>
                <button id="login" style={submitbtn} onClick={attempt_login}>
                  Login
              </button>
              </div>
            </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Login;
