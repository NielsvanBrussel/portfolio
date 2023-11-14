
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'



const Clock = ({ child }) => {

    const pointerRef = useRef()
    useFrame((state, delta) => {
        pointerRef.current.rotation.z = pointerRef.current.rotation.z - ( 2 * Math.PI * delta / 60)
    })

    return (
            <mesh ref={pointerRef} position={[5.2, 3.2, -1.01]}
                castShadow={true} 
                receiveShadow={true} 
                material={child.material} 
                geometry={child.geometry}
            >
            </mesh>
    )         
}

export default Clock