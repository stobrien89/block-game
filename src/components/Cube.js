import React from 'react';
import { useBox } from 'use-cannon';

export const Cube = ({ position, type, ...props}) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
        ...props,
    }));
 
    return (
     <mesh ref={ref}>
        <boxBufferGeometry attach="geometry" />
     </mesh>
 )
}