
import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'



const Fish1 = ({ child }) => {

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

        fishRef.current.position.set(1, 1.5, 0)
        fishRef.current.rotation.set(0 , (Math.PI * 2) , 0)
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
                if (fishRef.current.position.x > 2) {
                    if (fishRef.current.rotation.y > (Math.PI)) {
                        fishRef.current.rotation.y -= delta * 5
                    }
                    
                } else if (fishRef.current.position.x < 1.5) {
                    if (fishRef.current.rotation.y < (2 * Math.PI)) {
                        fishRef.current.rotation.y += delta * 5
                    }
                }
                
                fishRef.current.position.x += Math.sin(time) * 0.7 * delta
                fishRef.current.position.y += Math.sin(time * 3) * 0.09  * delta                 
            }

    })

           

    return (

        <group ref={fishRef} position={[1.2, 1.5, 0]} rotation={[0 , (Math.PI * 2) , 0]} >

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

export default Fish1