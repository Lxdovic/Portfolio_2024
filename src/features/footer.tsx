import Image from 'next/image'
import profilePicture from '@/assets/images/pfp.jpeg'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {Icon} from '@iconify/react'
import * as React from 'react'

const Footer = () => {
  return (
    <footer className="flex h-max flex-col gap-6 border-t p-10 xl:px-[20rem] 2xl:px-[26rem]">
      <div className="flex h-max w-full justify-between">
        <div className="flex h-max gap-6">
          <Image
            className="h-16 w-16 rounded-full"
            src={profilePicture}
            alt="Ludovic Debever"
          />

          <div className="flex flex-col justify-center">
            <p className="font-['AlmarenaDisplayBold'] text-xl uppercase">
              Ludovic Debever
            </p>
            <p className="text-sm text-white/80">ludovicdebever0@gmail.com</p>
          </div>
        </div>

        <ul className="flex items-center gap-10">
          <li className="text-white/80 transition hover:text-white hover:underline">
            <Link href="/#home">Home</Link>
          </li>
          <li className="text-white/80 transition hover:text-white hover:underline">
            <Link href="/#about">About</Link>
          </li>
          <li className="text-white/80 transition hover:text-white hover:underline">
            <Link href="/#work">Work</Link>
          </li>
          <li className="text-white/80 transition hover:text-white hover:underline">
            <Link href="https://github.com/Lxdovic">Github</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <p className="text-white/80">
          © 2021-2022 Ludovic Debever™. All Rights Reserved.
        </p>

        <Link
          className="ml-auto"
          href="https://github.com/Lxdovic">
          <Button
            variant="ghost"
            className="aspect-square p-1">
            <Icon
              icon="mdi:github"
              height={20}
            />
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/debeverludovic/">
          <Button
            variant="ghost"
            className="aspect-square p-1">
            <Icon
              icon="mdi:linkedin"
              height={20}
            />
          </Button>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
