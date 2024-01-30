export type Project = {
  title: string
  href: string
  description: string
  image?: any
}

import chessChallenge from '@/assets/images/abstract1.jpg'
import chessEngine from '@/assets/images/chess1.png'
import ircApp from '@/assets/images/abstract2.jpg'
import pathfinder from '@/assets/images/abstract3.jpg'
import portfolio from '@/assets/images/abstract4.jpg'

export const projects: Project[] = [
  {
    title: 'Chess Challenge',
    href: '/projects/chess-challenge',
    image: chessChallenge,
    description:
      'My submission to a coding challenge hosted by Sebastian Lague. I was given a chess framework and had to implement a chess bot on top of it. My bot ended top 63 out of 600+ submissions.',
  },
  {
    title: 'Chess Engine',
    href: '/projects/chess-engine',
    image: chessEngine,
    description:
      'A chess engine I built from scratch. Utilizing many chess engine techniques such as bitboards, magic bitboards, negamax, alpha-beta pruning, quiescence search, transposition tables, null move pruning, and more.',
  },
  {
    title: 'IRC App',
    href: '/projects/irc-app',
    image: ircApp,
    description:
      'An Internet Relay Chat (IRC) app built using websockets. It has features like private messaging channels, user authentication, guests, images and gifs, emojis and more.',
  },
  {
    title: 'Pathfinder',
    href: '/projects/pathfinder',
    image: pathfinder,
    description:
      'My implementation of the A* algorithm along with a Three.js scene for visualization.',
  },
  {
    title: 'This website',
    href: '/projects/portfolio',
    image: portfolio,
    description:
      'My personal website, built with Next.js, TypeScript, and Tailwind CSS.',
  },
  {
    title: 'More',
    href: 'https://github.com/Lxdovic',
    image: chessChallenge,
    description: 'more of my projects can be found on my GitHub profile.',
  },
]
