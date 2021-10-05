import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import ScrollNav from "./components/ScrollNav/ScrollNav";
import Asd from './assets/textures/asdf.png';

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
        <div className="">
        <img className="img" src={Asd} alt="" />
        </div>
     </div>
    </div>
  );
}

export default App;
