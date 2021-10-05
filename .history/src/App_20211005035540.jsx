import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import ScrollNav from "./components/ScrollNav/ScrollNav";
import Asd from './assets/textures/1072372.png';
import Word from './assets/textures/Earth.png';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;


function App() {
  return (
    <div className="root">
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
     <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
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
}

export default App;
