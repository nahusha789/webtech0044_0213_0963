import React from "react";
import Particles from 'react-particles-js';

class Intro extends React.Component {
    render() {
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
			//"background-image": "linear-gradient(315deg, #5b6467 0%, #5b6467 1%)",
            "background-color": "#afb5bd",
            display: "inline-block",
            "border-radius": "2%",
            "position": "absolute",
            "top": "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            "box-shadow": "5px 5px"
        }
        return (
            <main>
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
                <div className="waves-effect waves-light" style={divStyle}>
                    <h5 className="center"><b>Welcome to K-Mail</b></h5>
                    <pre className="center"> K-mail is a simple, intuitive, efficient mailing system  <br />
						built using React, Express, flask, MongoDB Atlas
			</pre>
                </div>
            </main>
        )
    };
}

export default Intro;
