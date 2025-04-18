import React, { useState, useEffect } from "react";
import { Particles } from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import { tsParticles } from "tsparticles-engine";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const loopItems = ["Web Developer", "UI/UX Designer", "3D Modeler"];
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    // Load basic particle config
    loadBasic(tsParticles);

    // Loop titles every 2 seconds
    const interval = setInterval(() => {
      setLoopIndex((prev) => (prev + 1) % loopItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
        {/* Particle Background */}
        <div className="frame-layout__particles">
          <Particles
            id="tsparticles"
            options={{
              backgroundMode: { enable: true, zIndex: 1 },
              fullScreen: { enable: false, zIndex: -1 },
              fpsLimit: 70,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: { enable: false, mode: "push" },
                  onHover: { enable: false, mode: "repulse" },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.4,
                    size: 40,
                  },
                  push: { quantity: 4 },
                  repulse: { distance: 200, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#000" },
                links: {
                  color: "#000",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: { enable: true },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: { enable: true, value_area: 800 },
                  value: 30,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { random: true, value: 6 },
              },
              detectRetina: true,
            }}
          />
        </div>

        {/* Background Image */}
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(img/slider/me.png)" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>James Collick<br /></span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={loopItems[loopIndex]}
                    className="loop-text"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {loopItems[loopIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="overlay_effect"></span>
              </h3>
            </div>

            <div className="job_wrap">
              <span className="job">
                based in Detroit, Michigan.
                <span className="overlay_effect"></span>
              </span>
            </div>

            <a href="#portfolio" className="white-fill-bg btn-outline btn-medium">
              SEE PORTFOLIO
              <span className="overlay_effect"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;