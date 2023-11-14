
import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'



const Fish2 = ({ child }) => {

    const { clock } = useThree()
    const fishRef = useRef()
    let runAnimation = false

    setTimeout(() => {
        startAnimation()
    }, 2000);


    const startAnimation = () => {
        clock.running = false
        clock.startTime = 0
        runAnimation = true
    }


    
    // User has switched back to the tab
    const onFocus = () => {

        fishRef.current.position.set(1.8, 1.8, -0.2)
        fishRef.current.rotation.set(0 , (Math.PI * -0.25) , 0)
        clock.running = false
        clock.startTime = 0

    };

    useEffect(() => {
        window.addEventListener("focus", onFocus);
        // Calls onFocus when the window first loads
        onFocus();
        // Specify how to clean up after this effect:
        return () => {
            window.removeEventListener("focus", onFocus);
        };
    }, []);


    useFrame((state, delta) => {

        const time = state.clock.getElapsedTime()
        if (runAnimation) {
            if (fishRef.current.position.x > 1.9) {
                if (fishRef.current.rotation.y > (-0.25 * Math.PI)) {
                    fishRef.current.rotation.y -= delta * 5
                }
                
            } else if (fishRef.current.position.x < 1.5) {
                if (fishRef.current.rotation.y < (0.75 * Math.PI)) {
                    fishRef.current.rotation.y += delta * 5
                }
            }

            if (fishRef.current.position.x > 2.6 || fishRef.current.position.x < 0.8) {
                fishRef.current.position.x = 2
                fishRef.current.rotation.y = Math.PI * 2            
            }
            
            fishRef.current.position.x += Math.cos(time) * 0.5 * delta
            fishRef.current.position.z += Math.cos(time * 3) * 0.3 * delta
        }

    })

    return (
        <group ref={fishRef} position={[2, 1.8, -0.2]} rotation={[0 , (Math.PI * -0.25) , 0]} >

            <mesh ref={fishRef}
                castShadow={true} 
                receiveShadow={true} 
                material={child.children[0].material} 
                geometry={child.children[0].geometry}

            >
            </mesh>
            <mesh ref={fishRef}
                castShadow={true} 
                receiveShadow={true} 
                material={child.children[1].material} 
                geometry={child.children[1].geometry}

            >
            </mesh>
            <mesh ref={fishRef}
                castShadow={true} 
                receiveShadow={true} 
                material={child.children[2].material} 
                geometry={child.children[2].geometry}

            >
            </mesh>
 
        </group>
    )         
}

export default Fish2