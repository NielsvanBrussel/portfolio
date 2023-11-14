import { useControls } from 'leva'

const Lights = () => {

    // const ambientCtl = useControls('Ambient Light', {
    //   visible: false,
    //   intensity: {
    //     value: 1.0,
    //     min: 0,
    //     max: 10.0,
    //     step: 0.1,
    //   },
    // })
  
    // const directionalCtl = useControls('Directional Light', {
    //   visible: true,
    //   position: {
    //     x: 3.3,
    //     y: 1.0,
    //     z: 4.4,
    //   },
    //   castShadow: true,
    // })
  
    // const pointCtl = useControls('Point Light', {
    //   visible: false,
    //   position: {
    //     x: 2,
    //     y: 0,
    //     z: 0,
    //   },
    //   intensity: 3,
    //   castShadow: true,
    // })
  
    // const spotCtl = useControls('Spot Light', {
    //   visible: false,
    //   angle: {
    //     value: Math.PI / 6,
    //     min: 0,
    //     max: 2 * Math.PI,
    //   },
    //   position: {
    //     x: 3,
    //     y: 2.5,
    //     z: 1,
    //   },
    //   castShadow: true,
    // })
  
    return (
      <>
        {/* <ambientLight
           
          visible={ambientCtl.visible}
          intensity={ambientCtl.intensity}
        /> */}
        <ambientLight
          visible={true}
          intensity={2}
        />
        <pointLight
          visible={true}
          intensity={100}
          position={[
            -1.2,
            3,
            2.8,
          ]}
          castShadow={true}
          shadow-bias={-0.0002}
        />
        {/* <directionalLight
          visible={true}
          position={[
            -3,
            1,
            -0.5,
          ]}
          intensity={1.2}
          castShadow={true}
          shadow-bias={-0.0002}
        /> */}
        {/* <directionalLight
          visible={directionalCtl.visible}
          position={[
            directionalCtl.position.x,
            directionalCtl.position.y,
            directionalCtl.position.z,
          ]}
          castShadow={directionalCtl.castShadow}
          shadow-bias={-0.001}
        /> */}
        {/* <pointLight
          visible={pointCtl.visible}
          position={[
            pointCtl.position.x,
            pointCtl.position.y,
            pointCtl.position.z,
          ]}
          castShadow={pointCtl.castShadow}
          shadow-bias={-0.001}
          intensity={pointCtl.intensity}
        /> */}
        {/* <spotLight
          visible={spotCtl.visible}
          position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
          angle={spotCtl.angle}
          castShadow={spotCtl.castShadow}
          shadow-bias={-0.1}
        /> */}
      </>
    )
  }

  export default Lights