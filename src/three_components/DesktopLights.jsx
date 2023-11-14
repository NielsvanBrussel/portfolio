
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'



const DesktopLights = ({ child }) => {

    const greenLightMaterial = child.children[0].material
    const redLightMaterial = child.children[1].material  

    const light1Ref = useRef()
    const light2Ref = useRef()
    const light3Ref = useRef()
    const light4Ref = useRef()
    const light5Ref = useRef()


    useFrame((state, delta) => {
        const rndm1 = Math.random()
        if (rndm1 > 0.999) {
            light1Ref.current.material = redLightMaterial
        } else if (rndm1 < 0.005) {
            light1Ref.current.material = greenLightMaterial
        }
        const rndm2 = Math.random()
        if (rndm2 > 0.999) {
            light2Ref.current.material = redLightMaterial
        } else if (rndm2 < 0.005) {
            light2Ref.current.material = greenLightMaterial
        }
        const rndm3 = Math.random()
        if (rndm3 > 0.999) {
            light3Ref.current.material = redLightMaterial
        } else if (rndm3 < 0.005) {
            light3Ref.current.material = greenLightMaterial
        }
        const rndm4 = Math.random()
        if (rndm4 > 0.999) {
            light4Ref.current.material = redLightMaterial
        } else if (rndm4 < 0.005) {
            light4Ref.current.material = greenLightMaterial
        }
        const rndm5 = Math.random()
        if (rndm5 > 0.999) {
            light5Ref.current.material = redLightMaterial
        } else if (rndm5 < 0.005) {
            light5Ref.current.material = greenLightMaterial
        }

      
    })

           

    return (

        <group>

            <mesh ref={light1Ref}
                castShadow={true} 
                receiveShadow={true} 
                material={redLightMaterial} 
                geometry={child.children[0].geometry}

            >
            </mesh>
            <mesh ref={light2Ref}
                castShadow={true} 
                receiveShadow={true} 
                material={redLightMaterial} 
                geometry={child.children[1].geometry}

            >
            </mesh>
            <mesh ref={light3Ref}
                castShadow={true} 
                receiveShadow={true} 
                material={redLightMaterial} 
                geometry={child.children[2].geometry}

            >
            </mesh>
            <mesh ref={light4Ref}
                castShadow={true} 
                receiveShadow={true} 
                material={redLightMaterial} 
                geometry={child.children[3].geometry}

            >
            </mesh>
            <mesh ref={light5Ref}
                castShadow={true} 
                receiveShadow={true} 
                material={redLightMaterial} 
                geometry={child.children[4].geometry}

            >
            </mesh>
        </group>
    )         
}

export default DesktopLights