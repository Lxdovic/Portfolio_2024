'use client'

import {Canvas, useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {Vector2, Vector3} from 'three'
import {useLayoutEffect, useMemo, useRef, useState} from 'react'
import {isBrowser, isMobile} from 'react-device-detect'
import vertexShader from './vertex.vert'
import fragmentShader from './fragment.frag'
import almarenaBold from '@/assets/fonts/Almarena-Display-Bold_Regular.json'
import almarenaLight from '@/assets/fonts/Almarena-Display-Light_Regular.json'

import {MeshTransmissionMaterial, Text3D} from '@react-three/drei'
import {RGBELoader} from 'three-stdlib'

const SphereContainer = () => {
  const texture = new RGBELoader().load(
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr'
  )

  return (
    <Canvas
      shadows
      camera={{
        position: [-4, 6, -5],
        fov: 60,
      }}>
      <fogExp2
        attach="fog"
        args={[0x09090b, 0.08]}
      />
      <gridHelper args={[100, 200, 0x333333, 0x333333]} />
      <ambientLight />
      <directionalLight
        position={[0, 5, -3]}
        castShadow
        intensity={2}
      />
      {isBrowser && (
        <>
          <SphereBrowser />
          <Text3D
            receiveShadow
            rotation={[Math.PI / 2, Math.PI, 0]}
            position={[10, 0, 0.5]}
            letterSpacing={-0.1}
            size={1.2}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
            lineHeight={0.8}
            font={almarenaBold as any}>
            LUDOVIC{'\n'}DEBEVER
            <MeshTransmissionMaterial
              backside={true}
              backsideThickness={0.3}
              samples={20}
              resolution={1024}
              transmission={0.95}
              clearcoat={0.0}
              clearcoatRoughness={0.0}
              thickness={1}
              chromaticAberration={5}
              anisotropy={0.3}
              roughness={0}
              distortion={2}
              distortionScale={0.5}
              temporalDistortion={0}
              ior={2}
              color="#da9eff"
              background={texture}
            />
          </Text3D>
          <Text3D
            rotation={[Math.PI / 2, Math.PI, 0]}
            position={[9, 0, -2]}
            height={0.001}
            size={0.5}
            font={almarenaLight as any}>
            <meshPhongMaterial />
            Software Engineer
          </Text3D>
        </>
      )}
      {isMobile && <SphereMobile />}
    </Canvas>
  )
}

const map = (value: number, x1: number, y1: number, x2: number, y2: number) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2

const SphereMobile = () => {
  const mesh: any = useRef()
  const transparentMesh: any = useRef()
  const geometry: any = useRef()
  const positions: any = useRef([])
  const colors: any = useRef([])
  const target: any = useRef(new THREE.Vector3(0, 0, 0))

  const [orientation, setOrientation] = useState<any>()
  const onDeviceOrientation = (event: DeviceOrientationEvent) => {
    if (event.beta === null || event.gamma === null) return

    setOrientation({
      alpha: event.alpha,
      beta: Math.min(Math.max(event.beta, 25), 65),
      gamma: Math.min(Math.max(event.gamma, -25), 25),
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('deviceorientation', onDeviceOrientation, true)

    return () => {
      window.removeEventListener('deviceorientation', onDeviceOrientation, true)
    }
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    if (!positions.current) return
    if (!colors.current) return
    if (!target.current) return

    const gammaRad = THREE.MathUtils.degToRad(
      map(orientation?.gamma - 30 || 0, -90, 90, 0, 360)
    )
    const betaRad = THREE.MathUtils.degToRad(
      map(orientation?.beta || 0, -180, 180, 0, 360)
    )
    const cameraRadius = 8

    const targetPosition = new THREE.Vector3(
      cameraRadius * Math.cos(-gammaRad),
      cameraRadius * Math.sin(-betaRad),
      cameraRadius * Math.sin(-gammaRad)
    )

    state.camera.position.lerp(targetPosition, 0.05)
    state.camera.lookAt(0, 0, 0)
    state.raycaster.setFromCamera(state.pointer, state.camera)

    const elapsed = state.clock.getElapsedTime()

    const total = Math.PI * 20
    const radius = 3

    for (let i = 0; i < total; i++) {
      let lon = map(i, 0, total, 0, Math.PI)
      for (let j = 0; j < total; j++) {
        const lat = map(j, 0, total, -Math.PI, Math.PI)
        const animatedRadius = radius + Math.sin(lon * 15 + elapsed * 2) * 0.1
        const animatedLat = lat + elapsed * 0.1

        target.current.x =
          animatedRadius * Math.sin(lon) * Math.cos(animatedLat)
        target.current.y =
          animatedRadius * Math.sin(lon) * Math.sin(animatedLat)
        target.current.z = animatedRadius * Math.cos(lon)

        const index = i * Math.round(total) + j
        const position = new THREE.Vector3(
          ...(positions.current[index] || [0, 0, 0])
        )

        const finalPos = position.lerp(target.current, 0.1)

        positions.current[index] = [finalPos.x, finalPos.y, finalPos.z]
      }
    }

    geometry.current.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(positions.current.flat(1)), 3)
    )
  })

  return (
    <>
      <mesh ref={transparentMesh}>
        <sphereGeometry args={[3.2, 100, 100]} />
        <meshBasicMaterial
          opacity={0}
          transparent
        />
      </mesh>

      <points
        ref={mesh}
        type="Points">
        <bufferGeometry ref={geometry} />
        <pointsMaterial
          color={'#7424FF'}
          size={0.04}
        />
      </points>
    </>
  )
}

const SphereBrowser = () => {
  const mesh = useRef<any>()
  const transparentMesh: any = useRef()
  const mousePosition = useRef(new Vector2())

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uMouse: {value: new Vector3(0, 0, 0)},
    }),
    []
  )

  useFrame(({clock, raycaster, pointer, camera}) => {
    if (!mesh.current) return

    camera.position.x = 3 + mousePosition.current.lerp(pointer, 0.03).x * 2

    camera.lookAt(3, 0, 0)

    raycaster.setFromCamera(pointer, camera)
    const [intersection] = raycaster.intersectObject(transparentMesh.current)

    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime()
    mesh.current.rotation.y = clock.getElapsedTime() * 0.2

    if (!intersection) {
      mesh.current.material.uniforms.uMouse.value = new Vector3(0, 0, 0)
    } else {
      mesh.current.material.uniforms.uMouse.value = intersection.point
        .clone()
        .applyAxisAngle(new Vector3(0, 1, 0), -mesh.current.rotation.y)
        .applyAxisAngle(new Vector3(1, 0, 0), -mesh.current.rotation.x)
    }
  })

  return (
    <>
      <mesh ref={transparentMesh}>
        <sphereGeometry args={[2, 100, 100]} />
        <meshBasicMaterial
          opacity={0}
          transparent
        />
      </mesh>

      <points ref={mesh}>
        <sphereGeometry args={[2, 200, 200]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe
        />
      </points>
    </>
  )
}

export default SphereContainer
