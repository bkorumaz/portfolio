import { useState } from "react";
import "./App.css";
import Configs from "./configurations.json";
import ParticlesBg from "particles-bg";
import Typed from "react-typed";

import {
  BsStackOverflow,
  BsLinkedin,
  BsGithub,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import AnimatedIconWrapper from "./components/animated-icon-wrapper/animated-icon-wrapper";

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
                strings={[
                  "React",
                  "Javascript",
                  "Spring Boot",
                  "Java",
                  "Redux",
                ]}
                typeSpeed={75}
                backSpeed={50}
                loop
              />
            </div>

            <div className="icons-social">
              <div class="flex-container">
                <AnimatedIconWrapper className={"flex-child magenta"}>
                  <BsGithub size={"2em"} style={iconStyle} title="GitHub" />
                </AnimatedIconWrapper>
                <AnimatedIconWrapper className={"flex-child magenta"}>
                  <BsLinkedin size={"2em"} style={iconStyle} title="Linkedin" />
                </AnimatedIconWrapper>
                <AnimatedIconWrapper className={"flex-child magenta"}>
                  <BsStackOverflow
                    size={"2em"}
                    style={iconStyle}
                    title="Stack-overflow"
                  />
                </AnimatedIconWrapper>
                <AnimatedIconWrapper className={"flex-child magenta"}>
                  <BsFillFileEarmarkPersonFill
                    size={"2em"}
                    style={iconStyle}
                    title="Resume"
                  />
                </AnimatedIconWrapper>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
