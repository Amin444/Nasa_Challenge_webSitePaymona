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
        <h1 className="h1">Data</h1>
        <div className="qwe">
         <img className="img" src={Asd} alt="" />
          <div className='ewq'>
            <h1 className="title">Estimated number of artificial objects on Earth orbit</h1>
            <div className="fff">
            <div className="rightBor">
              <span className='top'>Spacerafts</span>
              <span className='data'>2,218 working</span>
              <span className='data'>4,655 defunct</span>
            </div>
            <div className='other'>
              <span className='top'>Debris</span>
              <div className='inlineBlocks'>
              <span className='data'>Larger 10cm</span>
              <span className='data'>1-10 cm</span>
              <span className='data'>Smaller 1 cm</span>
              </div>
              <div className='inlineBlocks'>
              <span className='data'>34,000 pieces</span>
              <span className='data'>900,000 pieces</span>
              <span className='data'>128 m. pieces</span>
              </div>  
            </div>
            </div>
          </div>
        </div>
        <div className="countData">
          <span className="title">How much data we got?</span>
          <span className="text">Active Payloads: 4900</span>
          <span className="text">Analyst Objects: 11400</span>
          <span className="text">Debris: 18700</span>
          <span className="text">Total: 34900</span>
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
           https://pythonhosted.org/OrbitalPy/
         </a>
       </div>
     </div>
    
    </div>
  );
}

export default App;
