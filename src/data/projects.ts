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
      'My implementation of a chess bot for Sebastian Lague’s Chess Challenge.',
  },
  {
    title: 'Chess Engine',
    href: '/projects/chess-engine',
    image: chessEngine,
    description:
      'A bitboard chess engine made from scratch with no external libraries.',
  },
  {
    title: 'IRC App',
    href: '/projects/irc-app',
    image: ircApp,
    description: 'An Internet Relay Chat (IRC) app.',
  },
  {
    title: 'Pathfinder',
    href: '/projects/pathfinder',
    image: pathfinder,
    description: 'A* algorithm pathfinding visualizer.',
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

    description: 'more of my projects can be found on my GitHub profile.',
  },
]
