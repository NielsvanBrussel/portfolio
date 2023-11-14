import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";

const Screen1 = ({ child, url }) => {

  // const { nodes, materials } = useGLTF("./screen1.glb")

  const [video] = useState(() => {
    const vid = document.createElement("video")
    vid.src = url
    vid.crossOrigin = "Anonymous"
    vid.playsInline = true
    vid.autoplay = true
    vid.loop = true
    vid.muted = true
    vid.play()
    return vid
  });

  return (
    <group>
      <mesh geometry={child.geometry}>
        <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

export default Screen1