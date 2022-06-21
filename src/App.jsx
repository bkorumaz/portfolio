import { useState } from 'react'
import './App.css';
import Configs from './configurations.json';
import ParticlesBg from 'particles-bg'
import Typed from 'react-typed'

function App() {
  const [darkBackgroundModes, setDarkBackgroundModes] = useState([
    'day',
    'terminal',
    'torquoise',
    'alizarin',
    'amythyst',
    'carrot',
    'peterriver'
  ])

  const [lightBackgroundModes, setLightBackgroundModes] = useState([
    'night',
    'lightred',
    'lightpurple',
    'lightgreen',
    'lightblue',
    'lightyellow'
  ])

  const [backgroundType, setBackgroundType] = useState(Configs.backgroundType || 'plain')
  const [appClass, setAppClass] = useState(Configs.plainBackgroundMode || 'daylight')
  const [devIntro, setDevIntro] = useState(Configs.devIntro || 'Lorem Ipsum')
  const [devDesc, setDevDesc] = useState(Configs.devDesc || 'Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.')
  const [backgroundMode, setBackgroundMode] = useState('default')
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  const [bgStyle, setBgStyle] = useState({})
  const [icons, setIcons] = useState(Configs.icons || [])


  return (
    <div className={appClass} style={bgStyle}>
        <div
          className={backgroundMode}
        >
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
                {icons.map((icon, i) => (
                  <a
                    target="_blank"
                    key={i}
                    rel="noopener noreferrer"
                    href={`${icon.url}`}
                  >
                    <i className={`fab ${icon.image}`} />
                  </a>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
  )
}

export default App
