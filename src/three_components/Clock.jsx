
const Clock = ({ child }) => {

    return (

        <group position={[5.2, 3.2, -1.01]}>
            <mesh
                castShadow={true} 
                receiveShadow={true} 
                material={child.children[0].material} 
                geometry={child.children[0].geometry}

            >
            </mesh>
            <mesh
                castShadow={true} 
                receiveShadow={true} 
                material={child.children[1].material} 
                geometry={child.children[1].geometry}

            >
            </mesh>
        </group>
    )         
}

export default Clock