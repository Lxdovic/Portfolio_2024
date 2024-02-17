'use client'

import React, {useEffect} from 'react'
import {Radar} from '@/components/ui/radar'
import {Meteors} from '@/components/ui/meteors'
import {IconContainer} from '@/components/ui/icon-container'
import {Badge} from '@/components/ui/badge'
import {Icon} from '@iconify/react'
import AnimatedText from '@/components/animated-text'
import {useInView} from 'react-intersection-observer'
import {isMobile} from 'react-device-detect'

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
  const [ref, inView] = useInView()

  useEffect(() => {}, [inView])

  return (
    <section
      id="about"
      className="relative border-b">
      <Meteors
        number={isMobile ? 10 : 60}
        className="z-0"
      />

      <div className="flex w-full justify-center">
        <h2 className="relative z-10 flex w-[12rem] flex-col pt-32 font-['AlmarenaDisplayBold'] text-[3rem] font-bold uppercase leading-[3rem] text-white sm:w-[20rem] sm:text-7xl lg:w-[24rem] lg:text-8xl">
          <AnimatedText className="text-start text-primary">About</AnimatedText>
          <AnimatedText
            delay={0.1}
            className="text-end">
            Me
          </AnimatedText>
        </h2>
      </div>

      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <h3 className="flex flex-col font-['AlmarenaDisplayBold'] text-[1.5rem] uppercase leading-[1.5rem] sm:text-[2rem] sm:leading-[2rem] md:text-[3rem] md:leading-[2.5rem] lg:text-7xl lg:leading-[3.4rem]">
          <AnimatedText>Crafting</AnimatedText>
          <AnimatedText
            delay={0.1}
            className="md:ml-20">
            digital experiences
          </AnimatedText>
          <AnimatedText
            delay={0.1}
            className="md:ml-10">
            and solving
          </AnimatedText>
          <AnimatedText delay={0.1}>problems</AnimatedText>
          <AnimatedText
            delay={0.1}
            className="md:ml-10">
            is what I do best
          </AnimatedText>
        </h3>
      </div>

      <div
        ref={ref}
        className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        {inView && (
          <>
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  delay={0.8}
                  text="Web Development"
                  icon="streamline:web">
                  <div className="flex flex-wrap gap-2">
                    <FlexBadge icon="logos:react">React</FlexBadge>
                    <FlexBadge icon="devicon:nextjs">Nextjs</FlexBadge>
                    <FlexBadge icon="devicon:nestjs">Nestjs</FlexBadge>
                    <FlexBadge icon="skill-icons:expressjs-dark">
                      Expressjs
                    </FlexBadge>
                    <FlexBadge icon="devicon:tailwindcss">
                      Tailwindcss
                    </FlexBadge>
                    <FlexBadge icon="vscode-icons:file-type-css">CSS</FlexBadge>
                    <FlexBadge icon="vscode-icons:file-type-html">
                      HTML
                    </FlexBadge>
                    <FlexBadge icon="devicon:vuejs">Vue</FlexBadge>
                    <FlexBadge icon="devicon:angular">Angular</FlexBadge>
                    <FlexBadge icon="devicon:phoenix">Phoenix</FlexBadge>
                  </div>
                </IconContainer>

                <IconContainer
                  delay={0.6}
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
                  delay={1}
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
                    <FlexBadge icon="skill-icons:photoshop">
                      Photoshop
                    </FlexBadge>
                    <FlexBadge icon="logos:adobe-indesign">Indesign</FlexBadge>
                  </div>
                </IconContainer>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  delay={0.2}
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
                  delay={0.2}
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
                  delay={0.4}
                  icon="streamline:desktop-code"
                  text="Desktop Development">
                  <div className="flex flex-wrap gap-2">
                    <FlexBadge icon="devicon:tauri">Tauri</FlexBadge>
                    <FlexBadge icon="devicon:electron">Electron</FlexBadge>
                  </div>
                </IconContainer>

                <IconContainer
                  delay={0.5}
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
          </>
        )}

        <Radar
          inView={inView}
          className="absolute -bottom-12"
        />
      </div>
    </section>
  )
}

export default About
