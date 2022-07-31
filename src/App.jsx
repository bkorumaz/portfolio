import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Configs from "./configurations.json";
import ParticlesBg from "particles-bg";
import Typed from "react-typed";
import AnimatedIconWrapper from "./components/animated-icon-wrapper/animated-icon-wrapper";
import { motion } from "framer-motion";

import {
  BsStackOverflow,
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import AnimatedBox from "./components/animated-box/animated-box";

function App() {
  const [darkBackgroundModes, setDarkBackgroundModes] = useState([
    "day",
    "terminal",
    "torquoise",
    "alizarin",
    "amythyst",
    "carrot",
    "peterriver",
  ]);

  const [lightBackgroundModes, setLightBackgroundModes] = useState([
    "night",
    "lightred",
    "lightpurple",
    "lightgreen",
    "lightblue",
    "lightyellow",
  ]);

  const [backgroundType, setBackgroundType] = useState(
    Configs.backgroundType || "plain"
  );
  const [appClass, setAppClass] = useState(
    Configs.plainBackgroundMode || "daylight"
  );
  const [devIntro, setDevIntro] = useState(Configs.devIntro || "Lorem Ipsum");
  const [devDesc, setDevDesc] = useState(
    Configs.devDesc ||
      "Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa."
  );
  const [backgroundMode, setBackgroundMode] = useState("default");
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [bgStyle, setBgStyle] = useState({});
  const [icons, setIcons] = useState(Configs.icons || []);

  const iconStyle = {
    margin: "10px",
  };

  const [degree, setDegree] = React.useState(0);
  const [delay, setDelay] = useState(100);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDegree((prevDegree) => (prevDegree < 360 ? prevDegree + 1 : 0)); // <-- Change this line!
      console.log("degree:", degree);
    }, delay);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const SvgGradient = () => {
    return (
      <svg width="0" height="0">
        <motion.linearGradient
          id="blue-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
          animate={{
            gradientTransform: `rotate(${degree % 360})`,
          }}
        >
          <stop stopColor="#000000" offset="0%" />
          <stop stopColor="#ffffff" offset="100%" />
        </motion.linearGradient>
        {/* <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#a18cd1" offset="0%" />
          <stop stopColor="#fbc2eb" offset="100%" />
        </linearGradient> */}
      </svg>
    );
  };

  return (
    <div className={appClass} style={bgStyle}>
      <div className={backgroundMode}>
        <main className="App-main">
          <ParticlesBg type="thick" bg={true} />
          <div className="container">
            <h1 className="intro">{devIntro}</h1>
            <div className="shell">full stack developer</div>
            <div className="tagline">
              <Typed
                strings={["React", "Javascript", "Spring Boot", "Java", "Node"]}
                typeSpeed={75}
                backSpeed={50}
                loop
              />
            </div>

            <div className="icons-social">
              <div className="flex-container">
                {/* animated icon begin */}
                <motion.div
                  className="flex-child"
                  animate={{
                    scale: [1.2, 1.3, 1.4, 1.4, 1.3, 1],
                    rotate: [0, 0, 270, 270, 0, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    delay: 0.2,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                    onHoverStart={(e) => {
                      setDelay(30);
                    }}
                    onHoverEnd={(e) => {
                      setDelay(100);
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    size={"7em"}
                    style={{ fill: "url(#blue-gradient)" }}
                  >
                    <SvgGradient />
                    <BsGithub
                      title="GitHub"
                      size={"2em"}
                      style={{ fill: "url(#blue-gradient)" }}
                    />
                  </motion.div>
                </motion.div>
                {/* animated icon end */}
                <div className="flex-child"></div>
                <div className="flex-child"></div>
                <div className="flex-child"></div>
              </div>
              {/* <AnimatedBox /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
