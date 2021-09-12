import React, { useEffect, useRef } from 'react';
import { extend } from 'react-three-fiber';
import { PointerLockControls as PointerLockControlsImpl } from 'three/examples/jsm/controls/PointerLockControls';

extend({ PointerLockControls })

export const FPVControls = props => {
    const { camera, gl } = useThree();
    const controls = useRef();

    useEffect(() => {
        document.addEventListener('click', () => {
            controls.current.lock();
        })
    }, []);

    return (
        <PointerLockControlsImpl 
            ref={controls}
            args={[camera, gl.domElement]}
        />
    )
}