/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
'use client';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useScroll } from 'framer-motion'
import { useRef } from 'react';
import { motion } from 'framer-motion-3d'

export default function Earth() {

  const scene = useRef(null)
  
  const [color] = useLoader(TextureLoader, [
    'src/components/earth/earth.jpg'
  ])

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start', 'end start']
  })

  return (
    <>
    <Canvas ref={scene}>
      <ambientLight intensity={0.7} />
      <directionalLight intensity={5} position={[1, 0, -.15]}/>
      <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]}/>
        <meshStandardMaterial map={color} />
      </motion.mesh>
    </Canvas>
    </>
  )
}