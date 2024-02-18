'use client'

import * as React from 'react'
import {useCallback, useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {cn} from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {AnimatePresence, motion} from 'framer-motion'
import {projects} from '@/data/projects'
import {isBrowser, isMobile} from 'react-device-detect'
import {useScreenDetector} from '@/lib/useScreenDetector'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {Button} from '@/components/ui/button'
import {Icon} from '@iconify/react'
import profilePicture from '@/assets/images/pfp.jpeg'
import {Dialog, DialogContent} from '@/components/ui/dialog'
import {toast} from 'sonner'
import RotatingPhone from '@/components/rotating-phone'

export function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)
  const {isTablet} = useScreenDetector()
  const hasWarningBeenDisplayed = React.useRef(false)

  const handleDisplayNavbar = useCallback(() => {
    if (isMobile) return setIsOpen(true)

    if (typeof window !== 'undefined') {
      setIsOpen(window.scrollY <= lastScrollY)
      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (
      isTablet &&
      isHydrated &&
      !isMobile &&
      !hasWarningBeenDisplayed.current
    ) {
      hasWarningBeenDisplayed.current = true

      toast.custom((id) => (
        <div className="flex gap-4 rounded-md border p-4">
          <p className="text-sm text-white/80">
            {`It seems like you're trying to view the mobile version of this site on the wrong device. 
            Go grab your phone, and enjoy the cool features this site has to offer for mobile users!`}
          </p>
          <Button
            variant="outline"
            onClick={() => toast.dismiss(id)}
            className="self-end">
            Dismiss
          </Button>
        </div>
      ))
    }
  }, [isHydrated, isTablet])

  useEffect(() => {
    setIsHydrated(true)
    window.addEventListener('scroll', handleDisplayNavbar)

    return () => {
      window.removeEventListener('scroll', handleDisplayNavbar)
    }
  }, [handleDisplayNavbar, isTablet])

  if (!isHydrated) return null

  if (isMobile || isTablet)
    return <AnimatePresence>{isOpen && <NavItemsMobile />}</AnimatePresence>
  if (isBrowser)
    return <AnimatePresence>{isOpen && <NavItemsBrowser />}</AnimatePresence>
}

const NavItemsMobile = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Dialog open={isOpen && isMobile}>
        <DialogContent className="top-0 w-[calc(100vw-1rem)] translate-y-4 rounded-md">
          <div className="flex gap-6">
            <RotatingPhone width={120} />

            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold">Rotate your phone!</p>
              <p className="text-white/80">
                {`Some animations are using your phone's gyroscope, rotate your
                  phone for a better experience!`}
              </p>

              <Button
                type="submit"
                variant="outline"
                className="mt-auto"
                onClick={() => setIsOpen(false)}>
                Got it!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Drawer>
        <DrawerTrigger
          asChild
          className="fixed left-2 top-2 z-50 flex h-12 text-white shadow-none outline-0 ring-0">
          <Button
            variant="ghost"
            className="h-max p-2 outline-0">
            <Icon
              icon="bx:menu-alt-left"
              height={40}
            />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="z-50">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="flex justify-between gap-4">
              <Image
                height="70"
                width="70"
                className="rounded-full"
                src={profilePicture}
                alt="Ludovic Debever"
              />
              <div className="flex flex-col items-start justify-center gap-2">
                <DrawerTitle className="text-start">
                  Ludovic Debever
                </DrawerTitle>
                <DrawerDescription className="text-start">
                  Student & Half-time software engineer @Holis
                </DrawerDescription>
              </div>
            </DrawerHeader>
            <div className="p-4 pb-0">
              {`Hey, I'm Ludovic, a 23-year-old french student passionate about
              code. I am currently studying at Epitech Paris, and working at
              Holis, a SaaS startup based at Station F.`}
            </div>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="w-full">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const NavItemsBrowser = () => {
  return (
    <motion.div
      key="navbar"
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1, transition: {ease: 'easeInOut'}}}
      exit={{opacity: 0}}
      className="fixed top-0 z-50 flex h-12 w-full justify-center">
      <Link
        tabIndex={0}
        href="/#home"
        className="absolute left-6 mr-auto flex h-12 items-center font-['AlmarenaDisplayBold'] uppercase">
        Ludovic Debever
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              tabIndex={1}
              href="/#home"
              legacyBehavior
              passHref>
              <NavigationMenuLink className="px-4 py-2 text-xs uppercase">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem tabIndex={2}>
            <NavigationMenuTrigger className="text-xs uppercase">
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <li className="w-64">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/">
                      <Image
                        height="80"
                        width="80"
                        className="rounded-full"
                        src={profilePicture}
                        alt="Ludovic Debever"
                      />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Ludovic Debever
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Software Architect, Fullstack Developer
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <div className="flex w-3/5 flex-col gap-4">
                  <p className="flex h-full text-sm text-white/80">
                    {`Hey, I'm Ludovic, a 23-year-old french student passionate about
              code. I am currently studying at Epitech Paris, and working at
              Holis, a SaaS startup based at Station F.`}
                  </p>

                  <p className="flex h-full text-sm text-white/80">
                    {`Let's get in contact, follow me on my socials.`}
                  </p>

                  <div className="flex gap-2 self-end">
                    <Link href="https://github.com/Lxdovic">
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
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs uppercase">
              Work
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {projects.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = 'ListItem'
