import React from 'react';
import { Canvas } from 'react-three-fiber'
import { Sky } from 'drei';

import { Ground } from './components/Ground'

function App() {
  
    return (
    <Canvas shadowMap sRGB>
      <Sky sunPosition={[100, 20, 100]}/>
    </Canvas>
    )
}

export default App;
