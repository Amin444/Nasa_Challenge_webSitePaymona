import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import ScrollNav from "./components/ScrollNav/ScrollNav";
import Asd from './assets/textures/1072372.png';
import Celes from './assets/textures/C.png'

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;


function App() {
  
  const [scale, setScale] = useState(null)

  useEffect(() => {
    const handleWindowResize = () => {
      
      const width = 1920 / window.innerWidth
      const height = 1080-(window.outerHeight-window.innerHeight) / window.innerHeight

      console.log(1080-(window.outerHeight-window.innerHeight)
      
      setScale({ x: 1/width, y: height })
    }
    
    handleWindowResize()
    
    window.addEventListener('resize', handleWindowResize)
    
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  useEffect(() => {
    console.log(scale)
  }, [scale])

  if (scale) return (
    <div className="root" style={{ transform: `scale(${scale.x}, ${scale.y})` }}>
      <div id='block1' className="container">

        <CanvasContainer>
          <TopSection />
          <ScrollNav/>
            <Canvas>
             <Suspense fallback={null}>
               <Earth /> 
            </Suspense>
          </Canvas>
        </CanvasContainer>
     </div>
    
    
     <div id='block2' className="block2">
       <div className='titleBlock'>
        <h1 className="h1">DATA</h1>
       </div>
        <div className="topBlocks">
            <img src={Asd} className='img ' />
            <div className='dataCount'> 
              <span className='title'>HOW MUCH DATA WE GOT?</span> 
              <span className='text'>Active Payloads: 4900</span>
              <span className='text'>Analyst Objects: 11400</span>
              <span className='text'>Debris: 18700</span>
              <span className='text bor'>Total: 34900</span>
              <span className='title pad'>We got data from Nasa Partners</span>
              <div className='partners'>
                <a
                 href='https://celestrak.com/' target='_blank'
                 className='celesBlock'>
                  <span className="boldCeles">CELES</span><span className='track'>TRACK</span>
                </a>
                <a
                 href='https://www.space-track.org/auth/login ' target='_blank'
                 className='celesBlock'>
                  <span className="track">SPACE-</span><span className='track'>TRACK</span>
                </a>
              </div>
            </div>
        </div>
        <div className='lastBlock'>
         <span className='title'>Estimated number of artificial objects on Earth orbit</span> 
          <div className='around'>
            <div className='rightBlock'>
              <span className='title'>Spacecraft</span>
              <span className='text'>2218 working</span>
              <span className='text'>4655 defuct</span>
            </div>
            <div className='leftBlock'>
              <span className='title'>Spacecraft</span>
              <div className='rowBlock'>
              <span className='text'>2218 working</span>
              <span className='text'>4655 defuct</span>
              <span className='text'>4655 defuct</span>
              </div>
              <div className='rowBlock'>
              <span className='text'>2218 working</span>
              <span className='text'>4655 defuct</span>
              <span className='text'>4655 defuct</span>
              </div>
            </div>
          </div>
        </div>
     </div>
     <div id='block3' className="block3">
       <h1 className="h1">How we did it?</h1>
       <div className="earth">
         <span className='topic'>1. Get Data</span>
         <a href=' https://pythonhosted.org/OrbitalPy/' target='_blank' className='text'>
           https://pythonhosted.org/OrbitalPy/
         </a>
         <span className='topic'>2.Build Earth model</span>
         <a href=' https://pythonhosted.org/OrbitalPy/' target='_blank' className='text'>
           
         </a>
       </div>
     </div>
    
    </div>
  );

  return <></>
}

export default App;
