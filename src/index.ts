import { tsParticles } from "tsparticles";
import { } from 'typescript';

window.onload = () => {
    console.log("hello world!");
    tsParticles
        .load("background_particles", {
            "fullScreen": {
              "enable": true
            },
            "fpsLimit": 120,
            "particles": {
              "number": {
                "value": 100,
                "density": {
                  "enable": true,
                  "value_area": 500
                }
              },
              "color": {
                "value": "#ff0000",
                "animation": {
                  "enable": true,
                  "speed": 20,
                  "sync": true
                }
              },
              "shape": {
                "type": "circle"
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 3,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 20,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "links": {
                "enable": true,
                "distance": 100,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8
                },
                "repulse": {
                  "distance": 50
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true,
            "background": {
              "image": "linear-gradient(#5236ff, #0066ff)",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            }
          })
        .then((_) => {
            console.log("callback - tsparticles config loaded");
        })
        .catch((error) => {
            console.error(error);
        });
}
