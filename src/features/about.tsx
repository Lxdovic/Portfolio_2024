'use client'

import React from 'react'
import {Radar} from '@/components/ui/radar'
import {Meteors} from '@/components/ui/meteors'
import {IconContainer} from '@/components/ui/icon-container'
import {Badge} from '@/components/ui/badge'
import {Icon} from '@iconify/react'

interface IFlexBadge {
  children: React.ReactNode
  icon: string
}

const FlexBadge = ({children, icon}: IFlexBadge) => (
  <Badge
    variant="outline"
    className="flex w-max max-w-40 flex-grow gap-2">
    <Icon icon={icon} />
    {children}
  </Badge>
)

const About = () => {
  return (
    <div className="relative border-b">
      <Meteors
        number={60}
        className="z-0"
      />

      <h2 className="relative z-10 px-80 py-10 pt-32 text-center text-7xl font-bold text-white">
        <span className="font-['chatime'] font-normal text-primary">About</span>{' '}
        me
      </h2>

      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <p className="max-w-lg text-white/80">
          {"Hey, I'm Ludovic Debever, a software enginner in the making, currently studying computer science at Epitech" +
            " Paris. I'm also working half-time for Holis, a SaaS startup based at Station F. I'm passionate about" +
            ' programming, design and I also like chess a lot.'}
        </p>

        <p className="max-w-lg text-white/80">
          {'I am a very curious person and I am always looking for new challenges. ' +
            "I'm also a lot into algorithms and data structures. "}
        </p>

        <p className="max-w-lg text-white/80">
          {
            'My core strength is my passion for learning and my ability to adapt to new environments and technologies.'
          }
        </p>
      </div>

      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.2}
              text="Web Development"
              icon="streamline:web">
              <div className="flex flex-wrap gap-2">
                <FlexBadge icon="logos:react">React</FlexBadge>
                <FlexBadge icon="devicon:nextjs">Nextjs</FlexBadge>
                <FlexBadge icon="devicon:nestjs">Nestjs</FlexBadge>
                <FlexBadge icon="skill-icons:expressjs-dark">
                  Expressjs
                </FlexBadge>
                <FlexBadge icon="devicon:tailwindcss">Tailwindcss</FlexBadge>
                <FlexBadge icon="vscode-icons:file-type-css">CSS</FlexBadge>
                <FlexBadge icon="vscode-icons:file-type-html">HTML</FlexBadge>
                <FlexBadge icon="devicon:vuejs">Vue</FlexBadge>
                <FlexBadge icon="devicon:angular">Angular</FlexBadge>
                <FlexBadge icon="devicon:phoenix">Phoenix</FlexBadge>
              </div>
            </IconContainer>

            <IconContainer
              delay={0.4}
              text="Databases"
              icon="mdi:database-outline">
              <div className="flex flex-wrap gap-2">
                <FlexBadge icon="devicon:postgresql">PostgreSQL</FlexBadge>
                <FlexBadge icon="devicon:mongodb">Mongodb</FlexBadge>
                <FlexBadge icon="devicon:prisma">Prisma</FlexBadge>
                <FlexBadge icon="devicon:mongoose">Mongoose</FlexBadge>
                <FlexBadge icon="mdi:database-outline">
                  Indexed Databases
                </FlexBadge>
              </div>
            </IconContainer>

            <IconContainer
              delay={0.4}
              text="IDEs & Tools"
              icon="fluent:window-dev-tools-20-regular">
              <div className="flex flex-wrap gap-2">
                <FlexBadge icon="devicon:vscode">VSCode</FlexBadge>
                <FlexBadge icon="devicon:webstorm">WebStorm</FlexBadge>
                <FlexBadge icon="devicon:intellij">IntelliJ</FlexBadge>
                <FlexBadge icon="devicon:rider">Prisma</FlexBadge>
                <FlexBadge icon="devicon:datagrip">DataGrip</FlexBadge>
                <FlexBadge icon="devicon:androidstudio">
                  Android Studio
                </FlexBadge>
                <FlexBadge icon="devicon:git">Git</FlexBadge>
                <FlexBadge icon="mdi:github">Github</FlexBadge>
                <FlexBadge icon="devicon:docker">Docker</FlexBadge>
                <FlexBadge icon="skill-icons:illustrator">
                  Illustrator
                </FlexBadge>
                <FlexBadge icon="skill-icons:photoshop">Photoshop</FlexBadge>
                <FlexBadge icon="logos:adobe-indesign">Indesign</FlexBadge>
              </div>
            </IconContainer>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.4}
              text="Mobile Development"
              icon="tabler:device-mobile-code">
              <div className="flex flex-wrap gap-2">
                <FlexBadge icon="devicon:flutter">Flutter</FlexBadge>
                <FlexBadge icon="devicon:jetpackcompose">
                  Jetpack Compose
                </FlexBadge>
                <FlexBadge icon="devicon:kotlin">Kotlin</FlexBadge>
              </div>
            </IconContainer>

            <IconContainer
              delay={0.4}
              text="Programming Languages"
              icon="solar:programming-broken">
              <div className="flex flex-wrap gap-2">
                <FlexBadge icon="devicon:javascript">Javascript</FlexBadge>
                <FlexBadge icon="devicon:typescript">Typescript</FlexBadge>
                <FlexBadge icon="cib:rust">Rust</FlexBadge>
                <FlexBadge icon="devicon:csharp">C#</FlexBadge>
                <FlexBadge icon="devicon:java">Java</FlexBadge>
                <FlexBadge icon="devicon:kotlin">Kotlin</FlexBadge>
                <FlexBadge icon="devicon:php">PHP</FlexBadge>
                <FlexBadge icon="devicon:elixir">Elixir</FlexBadge>
                <FlexBadge icon="devicon:cplusplus">C++</FlexBadge>
                <FlexBadge icon="devicon:dart">Dart</FlexBadge>
              </div>
            </IconContainer>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.6}
              icon="streamline:desktop-code"
              text="Desktop Development">
              <div className="flex flex-wrap gap-2">
                <FlexBadge icon="devicon:tauri">Tauri</FlexBadge>
                <FlexBadge icon="devicon:electron">Electron</FlexBadge>
              </div>
            </IconContainer>

            <IconContainer
              delay={0.7}
              icon="mdi:unfold-more-vertical"
              text="Other Skills">
              <div className="flex flex-wrap gap-2">
                <FlexBadge icon="tabler:brand-threejs">Threejs</FlexBadge>
                <FlexBadge icon="tabler:brand-framer-motion">
                  Framer Motion
                </FlexBadge>
                <FlexBadge icon="logos:greensock-icon">GSAP</FlexBadge>
              </div>
            </IconContainer>
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
      </div>
    </div>
  )
}

export default About
