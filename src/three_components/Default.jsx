import React, { useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";
import Fish1 from './Fish1';
import Fish2 from './Fish2';
import Screen from './Screen';
import url1 from "/video1.mp4";
import url2 from "/video2.mp4";
import Clock from './Clock';
import ClockPointer1 from './ClockPointer1'
import ClockPointer2 from './ClockPointer2'
import DesktopLights from './DesktopLights';


const Default = () => {

        const model = useGLTF("./room.glb")   
        
        model.scene.castShadow = true
        model.scene.receiveShadow = true
        
        // useFrame((state, delta) =>
        // {
        //     console.log(state.camera.position)
        // })

        const applyShadows = () => {
            model.scene.children.forEach((child) => {
                
                    child.castShadow = true;
                    child.receiveShadow = true;                            
      
                if (child instanceof THREE.Group) {
                    child.children.forEach((groupchild) => {
                        
                        groupchild.castShadow = true;
                        groupchild.receiveShadow = true;                            
                        
                    });
                }
            })
            return (model)
        }
        const shadowModel = applyShadows()


        const Aquarium = ({ child }) => {
           
                    child.material = new THREE.MeshPhysicalMaterial();
                    child.material.roughness = 0;
                    child.material.color.set(0x8bd7d0); 
                    child.material.ior = 2;
                    child.material.transmission = 1;
                    child.material.opacity = 1;
                    child.material.depthWrite = false;
                    child.material.depthTest = true;

                    return (
                        <mesh 
                            castShadow={child.castShadow} 
                            receiveShadow={child.receiveShadow} 
                            material={child.material} 
                            geometry={child.geometry}>
                        </mesh>
                    )          
        }


        const Glass = ({ child }) => {
                
                        child.material = new THREE.MeshPhysicalMaterial();
                        child.material.roughness = 0;
                        child.material.metalness = 0;
                        child.material.color.set(0xcae6ec); 
                        child.material.ior = 2;
                        child.material.transmission = 0.9;
                        child.material.opacity = 1;
                        child.material.depthWrite = false;
                        child.material.depthTest = true;
                        return (
                            <mesh 
                                castShadow={false} 
                                receiveShadow={false} 
                                material={child.material} 
                                geometry={child.geometry}>
                            </mesh>
                        )
                    
              
        }


        const SubGroup = ({ child }) => {
            
          
            if (child.name === 'fish1') {
                return <Fish1 child={child} />
            } 
            if (child.name === 'fish2') {
                return <Fish2 child={child} />
            } 
            if (child.name === 'clock') {
                return <Clock child={child}/>
            }
            if (child.name === 'desktop_lights') {
                return <DesktopLights child={child} />
            } else {
                return (
                    child.children.map((subchild, index) => {
                        return (
                            <mesh key={index}
                                castShadow={subchild.castShadow} 
                                receiveShadow={subchild.receiveShadow} 
                                material={subchild.material} 
                                geometry={subchild.geometry}>
                            </mesh>
                        )
                    })
                )                
            }            
        }

    return (
    <group>
        { shadowModel.scene.children.map((child, index) => {
            if (child instanceof THREE.Mesh) {
                if (child.name === 'glass') {
                    return <Glass child={child} />
                } 
                if (child.name === 'aquarium') {
                    return <Aquarium child={child} />
                } 
                if (child.name === 'screen000') {
                    return <Screen child={child} url={url1}/>
                } 
                if (child.name === 'screen001') {
                    return <Screen child={child} url={url2}/>
                } 
                if (child.name === 'clock_pointer1') {
                    return <ClockPointer1 child={child} />
                } 
                if (child.name === 'clock_pointer2' || child.name === 'clock_pointer3') {
                    return <ClockPointer2 child={child} />
                } else {
                    return (
                        <mesh key={index}
                            castShadow={child.castShadow} 
                            receiveShadow={child.receiveShadow} 
                            material={child.material} 
                            geometry={child.geometry}>            
                        </mesh>
                    )                
                }
            } else  if (child instanceof THREE.Group) {
                    return (
                        <SubGroup key={index} child={child}/>
                    )
                
            }
        })}
    </group>
    )
}

export default Default