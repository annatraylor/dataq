// src/components/BitcoinBlock.jsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Bitcoin = () => {
    const mesh = useRef();

    useEffect(() => {
        const light = new THREE.AmbientLight(0xffffff); // soft white light
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load("https://raw.githubusercontent.com/javascript-queen/pics-for-websites/main/web3/logo.svg");
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 0.7,
            roughness: 0.3,
        });

        const geometry = new THREE.CylinderGeometry(3, 3, 0.4, 100);
        mesh.current.geometry = geometry;
        mesh.current.material = material;
        mesh.current.light = light;
    }, []);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
        }
    });

    return <mesh ref={mesh} rotation={[2, 1.5, 0]} />;
};

export default Bitcoin;
