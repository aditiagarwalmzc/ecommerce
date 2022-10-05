import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function Particle() {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return(
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              "fullScreen": {
                  "enable": true,
                  "zIndex": -1
              },
              "particles": {
                  "number": {
                      "value": 120,
                      "density": {
                          "enable": true,
                          "value_area": 1000
                      }
                  },
                  "color": {
                      "value": "#ffffff"
                  },
                  "shape": {
                      "type": "circle"
                  },
                  "opacity": {
                      "value": 1,
                      "random": true,
                      "anim": {
                          "enable": true,
                          "speed": 0.5,
                          "opacity_min": 0,
                          "sync": false
                      }
                  },
                  "size": {
                      "value": 1,
                      "random": true,
                      "anim": {
                          "enable": true,
                          "speed": 4,
                          "size_min": 0.3,
                          "sync": false,
                      }
                  },
                  "line_linked": {
                      "enable": false,
                      "distance": 150,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 1
                  },
                  "move": {
                      "enable": true,
                      "speed": 1,
                      "direction": "none",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 600
                      }
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "bubble"
                      },
                      "onclick": {
                          "enable": true,
                          "mode": "repulse"
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
                          "distance": 150,
                          "size": 0,
                          "duration": 2,
                          "opacity": 0,
                          "speed": 3,
                      },
                      "repulse": {
                          "distance": 400,
                          "duration": 0.4
                      },
                      "push": {
                          "particles_nb": 4,
                      },
                      "remove": {
                          "particles_nb": 2
                      }
                  }
              },
              "retina_detect": true,
              "background": {
                  "color": "#000000",
                  "position": "10% 10%",
                  "repeat": "no-repeat",
                  "size": "20%"
              }
          }}
        />
    )
}

export default Particle