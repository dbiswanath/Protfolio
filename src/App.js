import './App.css';
import {Routes , Route , useLocation} from 'react-router-dom';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Protfolio from './containers/protfolio';
import Contact from './containers/contact';
import Navbar from './components/NavBar'
import particles from './utils/particles';


function App() {

  const location = useLocation();

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

const renderParticleJsHomePage = location.pathname === '/';

  if (init) {
  return (
    <div className="App">
      
      {/*Particles js*/}

    {
      renderParticleJsHomePage && <Particles id="particles" options={particles}  particlesLoaded={particlesLoaded}/>
    }
      
      
      

      {/*NavBar*/}

      <Navbar/>

      {/*Main Page Content*/}
      <div className='App_main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/about' element={<About/>}/>
        <Route index path='/skills' element={<Skills/>}/>
        <Route index path='/protfolio' element={<Protfolio/>}/>
        <Route index path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </div>
  );
}
return <></>;
}
export default App;
