
import { useRef, useEffect } from 'react'

const Clock = ({ child }) => {

    const pointerRef = useRef()


    const setClock = () => {
        const today = new Date();
        const hour = today.getHours() 
        const minute = today.getMinutes()

        if (child.name === 'clock_pointer2') {
            pointerRef.current.rotation.z = 2 * Math.PI * (minute / 60) * -1
        } else {
            pointerRef.current.rotation.z = 2 * Math.PI * ((hour / 12) + (minute / (60 * 12))) * -1
        }
        setTimeout(() => {
            setClock()
        }, 60000);
    }

    useEffect(() => {
        setClock()
    }, [])
    

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