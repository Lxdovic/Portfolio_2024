'use client'

import {Canvas, useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {useLayoutEffect, useRef, useState} from 'react'
import {isBrowser, isMobile} from 'react-device-detect'

const SphereContainer = () => {
  return (
    <Canvas
      camera={{
        position: [-4, 4, -6],
      }}>
      <fogExp2
        attach="fog"
        args={[0x09090b, 0.08]}
      />
      <gridHelper args={[120, 120, 0x333333, 0x333333]} />
      <ambientLight />
      <directionalLight
        position={[0, 1, 2]}
        color="white"
      />
      {isBrowser && <SphereBrowser />}
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
    setOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('deviceorientation', onDeviceOrientation, true)
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    if (!positions.current) return
    if (!colors.current) return
    if (!target.current) return

    const gammaRad = THREE.MathUtils.degToRad(
      map(orientation?.gamma || 0, -90, 90, 0, 360)
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

    const intersects = state.raycaster.intersectObject(transparentMesh.current)
    const elapsed = state.clock.getElapsedTime()

    const total = Math.PI * 20
    const radius = 3

    for (let i = 0; i < total; i++) {
      let lon = map(i, 0, total, 0, Math.PI)
      for (let j = 0; j < total; j++) {
        let lat = map(j, 0, total, -Math.PI, Math.PI)

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
          size={0.03}
        />
      </points>
    </>
  )
}

const SphereBrowser = () => {
  const mesh: any = useRef()
  const transparentMesh: any = useRef()
  const geometry: any = useRef()
  const positions: any = useRef([])
  const colors: any = useRef([])
  const currentPoint: any = useRef(new THREE.Vector3(0, 0, 0))
  const currentMouse: any = useRef(new THREE.Vector2(0, 0))
  const target: any = useRef(new THREE.Vector3(0, 0, 0))

  useFrame((state) => {
    if (!mesh.current) return
    if (!positions.current) return
    if (!colors.current) return
    if (!currentPoint.current) return
    if (!target.current) return

    state.camera.position.x =
      -4 + currentMouse.current.lerp(state.pointer, 0.03).x * 2
    state.camera.position.y =
      4 + currentMouse.current.lerp(state.pointer, 0.03).y * 2
    state.camera.lookAt(0, 0, 0)
    state.raycaster.setFromCamera(state.pointer, state.camera)

    const intersects = state.raycaster.intersectObject(transparentMesh.current)
    const elapsed = state.clock.getElapsedTime()

    currentPoint.current = currentPoint.current.lerp(
      new THREE.Vector3(
        intersects[0]?.point.x || 0,
        intersects[0]?.point.y || 0,
        intersects[0]?.point.z || 0
      ),
      0.1
    )

    const total = Math.PI * 20
    const radius = 3

    for (let i = 0; i < total; i++) {
      let lon = map(i, 0, total, 0, Math.PI)
      for (let j = 0; j < total; j++) {
        let lat = map(j, 0, total, -Math.PI, Math.PI)

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

        const distance = currentPoint.current.distanceTo(target.current)

        if (distance < 1.4 && state.pointer.x !== 0 && state.pointer.y !== 0) {
          target.current.x =
            (animatedRadius + 1.4 - distance) *
            Math.sin(lon) *
            Math.cos(animatedLat)

          target.current.y =
            (animatedRadius + 1.4 - distance) *
            Math.sin(lon) *
            Math.sin(animatedLat)

          target.current.z = (animatedRadius + 1.4 - distance) * Math.cos(lon)
        }

        const finalPos = position.lerp(target.current, 0.1)
        const color = new THREE.Color(
          `hsl(${THREE.MathUtils.clamp(
            360 - currentPoint.current.distanceTo(target.current) * 30,
            240,
            300
          )}, 100%, 50%)`
        )

        positions.current[index] = [finalPos.x, finalPos.y, finalPos.z]
        colors.current[index] = [color.r, color.g, color.b]
      }
    }

    geometry.current.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(positions.current.flat(1)), 3)
    )

    geometry.current.setAttribute(
      'color',
      new THREE.BufferAttribute(new Float32Array(colors.current.flat(1)), 3)
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
          size={0.03}
          vertexColors
        />
      </points>
    </>
  )
}
export default SphereContainer
