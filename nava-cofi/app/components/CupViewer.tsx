'use client'

import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { EffectComposer, DotScreen } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import { DRINK_MODELS, DrinkType } from './Drinks'

function useCutPlane() {
  return useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), [])
}

function Model({ drink, clipPlane }: { drink: DrinkType; clipPlane: THREE.Plane }) {
  const { scene } = useGLTF(DRINK_MODELS[drink])

  useMemo(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const materials = Array.isArray(child.material) ? child.material : [child.material]
        materials.forEach((mat) => {
          mat.clippingPlanes = [clipPlane]
          mat.side = THREE.DoubleSide
          mat.clipShadows = true
        })
      }
    })
  }, [scene, clipPlane])

  return <primitive object={scene} />
}

function RotatingGroup({ drink, clipPlane }: { drink: DrinkType; clipPlane: THREE.Plane }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4
  })

  return (
    <group ref={ref}>
      <Suspense fallback={null}>
        <Model drink={drink} clipPlane={clipPlane} />
      </Suspense>
    </group>
  )
}

export default function CupViewer({ drink }: { drink: DrinkType }) {
  const clipPlane = useCutPlane()

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas
        camera={{ position: [0, 1, 3], fov: 45 }}
        gl={{ localClippingEnabled: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <RotatingGroup drink={drink} clipPlane={clipPlane} />
        <OrbitControls />

        <EffectComposer>
            <BrightnessContrast
                brightness={1}
                contrast={0}
            /> 
        </EffectComposer>
      </Canvas>
    </div>
  )
}