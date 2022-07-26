import { useState } from "react";
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

  const SvgGradient = () => {
    return (
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#a18cd1" offset="0%" />
          <stop stopColor="#fbc2eb" offset="100%" />
        </linearGradient>
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
                <AnimatedIconWrapper className={"flex-child"}>
                  <SvgGradient />
                  <BsGithub
                    size={"2em"}
                    style={{ fill: "url(#blue-gradient)" }}
                    title="GitHub"
                  />
                </AnimatedIconWrapper>
                <AnimatedIconWrapper className={"flex-child"}>
                  <SvgGradient />
                  <BsLinkedin
                    size={"2em"}
                    style={{ fill: "url(#blue-gradient)" }}
                    title="Linkedin"
                  />
                </AnimatedIconWrapper>
                <AnimatedIconWrapper className={"flex-child"}>
                  <SvgGradient />
                  <BsStackOverflow
                    size={"2em"}
                    style={{ fill: "url(#blue-gradient)" }}
                    title="Stack-overflow"
                  />
                </AnimatedIconWrapper>
                <AnimatedIconWrapper className={"flex-child"}>
                  <SvgGradient />
                  <BsFillFileEarmarkPersonFill
                    size={"2em"}
                    title="Resume"
                    style={{ fill: "url(#blue-gradient)" }}
                  />
                </AnimatedIconWrapper>
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
