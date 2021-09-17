import React from 'react';
import { Canvas } from 'react-three-fiber'
import { Sky } from 'drei';
import { Physics } from 'use-cannon';

import { Ground } from './components/Ground'
import {Player} from './components/Player'
import { Cube } from './components/Cube';

import { useStore } from './hooks/useStore'

function App() {
    const cubes = useStore(state => state.cubes).map(cube => {
      return <Cube position={cube.pos} texture={cube.texture}/>
    })

    return (
      <Canvas shadowMap sRGB gl={{ alpha: false }}>
        <Sky sunPosition={[100, 20, 100]}/>
        <ambientLight intensity={0.25}/>
        <pointLight castShadow intensity={0.7} position={[100, 100, 100]}/>
        <Physics gravity={[0, -30, 0]}>
          <Ground position={[0, 0.5, 0]}/>
          <Player position={[0, 3, 10]} />
          {cubes}
        </Physics>
      </Canvas>
    )
}

export default App;
