import { useState, Suspense, useEffect, useRef } from 'react'
import Default from './three_components/Default';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loading from './Loading'
import Lights from './three_components/Lights'

const Experience = ({ mobileViewMode }) => {
  
  const camera1 = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [ 14.7, 5, 12.4 ]
  }

  const camera2 = {
    fov: 30,
    near: 0.1,
    far: 200,
    position: [ 14.7, 6, 16.4 ]
  }

  useEffect(() => {
    console.log(mobileViewMode)
  }, [mobileViewMode])
  



  return (
      <Canvas shadows camera={mobileViewMode ? camera1 : camera2}>
        <Lights />
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0}/>
        <Suspense fallback={ <Loading /> }> 
          <Default />
        </Suspense>
      </Canvas>
  );
}

export default Experience