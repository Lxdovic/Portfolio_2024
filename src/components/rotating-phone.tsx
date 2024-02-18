import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import iphonePicture from '@/assets/images/phone.png'

interface RotatingPhoneProps {
  className?: string
  width?: number | string
}

const RotatingPhone = ({width = 120}) => {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        perspective: 1000,
      }}>
      <motion.div
        initial={{
          rotateY: 0,
          rotateX: 0,
        }}
        animate={{
          rotateY: [0, 50, -50, 0, 0, 0],
          rotateX: [0, 0, 0, 50, -50, 0],
          transition: {
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
        className="w-max">
        <Image
          width={width}
          src={iphonePicture}
          alt="Phone rotating"
        />
      </motion.div>
    </div>
  )
}

export default RotatingPhone
