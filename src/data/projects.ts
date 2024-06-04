export type Project = {
  title: string
  href: string
  description: string
  image: any
  alt: string
}

import abstract1 from '@/assets/images/abstract1.jpg'
import chessEngine from '@/assets/images/chess1.png'
import abstract2 from '@/assets/images/abstract2.jpg'
import abstract3 from '@/assets/images/abstract3.jpg'
import portfolio from '@/assets/images/abstract4.jpg'

export const projects: Project[] = [
  {
    title: 'Chess Challenge',
    href: '/projects/chess-challenge',
    image: abstract1,
    alt: 'Abstract blue and pink background',
    description:
      'My submission to a coding challenge hosted by Sebastian Lague. I was given a chess framework and had to implement a chess bot on top of it. My bot ended top 63 out of 600+ submissions.',
  },
  {
    title: 'Chess Engine',
    href: '/projects/chess-engine',
    image: chessEngine,
    alt: 'Chess board with pieces on it',
    description:
      'A chess engine I built from scratch. Utilizing many chess engine techniques such as bitboards, magic bitboards, negamax, alpha-beta pruning, quiescence search, transposition tables, null move pruning, and more.',
  },
  {
    title: 'Rhino',
    href: 'https://github.com/Lxdovic/Rhino',
    image: abstract2,
    alt: 'Abstract purple and pink background',
    description:
      'A programming language I built from scratch. It features a REPL, a lexer, a parser, an interpreter and a compiler.',
  },
  {
    title: 'Neural Network',
    href: 'https://github.com/Lxdovic/Epitech-Zoidberg',
    image: abstract3,
    alt: 'Abstract blue and pink background',
    description:
      'A neural network I built from scratch. It is able to detect pneumonia in X-ray images with an accuracy of ~94%.',
  },
  {
    title: 'This website',
    href: 'https://github.com/Lxdovic/Portfolio_2024',
    image: portfolio,
    alt: 'Abstract black, pink, blue, yellow and purple background',
    description:
      'My personal website, built with Next.js, TypeScript, and Tailwind CSS.',
  },
]
