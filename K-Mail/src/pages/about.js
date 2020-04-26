import React from "react";
import Particles from 'react-particles-js';


const particleStyle = {
    width: "100%",
    height: "100%",
    position: "fixed",
    "z-index": "-10",
    top: "0",
    left: "0",
    "background-color": "#4287f5"
}
function About(props) {
    return( <main>
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
    }}/>
    <p >
               <center > <h2 ><u>K-Mail Creators</u></h2> <br />
                <h4>Chief Frontend developers :Keerthan & Sathvik</h4><br />
                <h4>Chief Backend developers :Sathvik & Nahusha</h4><br />
                <h4>Intelligent Functionality officer: Nahusha</h4><br /> </center>
    </p>
    </main>
    )
}

export default About;