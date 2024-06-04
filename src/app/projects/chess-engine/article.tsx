'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import chessEngineImage from '@/assets/images/chess1.png'
import {Icon} from '@iconify/react'
import {Button} from '@/components/ui/button'

const ChessEngineArticle = () => {
  return (
    <>
      <h1 className="flex h-10 w-full items-center justify-between font-['AlmarenaDisplayBold'] text-5xl uppercase">
        Chess Engine
        <Link
          href="https://github.com/Lxdovic/Lxna"
          className="flex aspect-square h-full">
          <Button
            variant="ghost"
            className="aspect-square h-full p-0">
            <Icon
              height={24}
              icon="mdi:github"
            />
          </Button>
        </Link>
      </h1>

      <Image
        className="w-full rounded-lg"
        src={chessEngineImage}
        alt=""
      />

      <p>
        Last year, I participated to a
        <Link
          href="/projects/chess-challenge"
          className="text-primary">
          {' Chess Challenge by Sebastian Lague. '}
        </Link>
        It was a fun experience and I learned a lot about chess programming and
        algorithms in general. And after the challenge was over, i couldn&apos;t
        help but to think about chess programming. I was fascinated by the idea
        of building a chess engine from scratch. So I decided to give it a try.
      </p>

      <p>
        Now you may wonder what&apos;s the difference between the bot I created
        during this challenge and an actual chess engine?
      </p>

      <p>
        My bot was built on top of a chess API, which means that I didn&apos;t
        have to implement the rules of chess, move generation, check and
        checkmate detection and so on... I only had to implement the logic of
        the bot itself. On the other hand, a chess engine is a standalone
        program that does all of that. It&apos;s a complete chess program that
        can play without any external help. Chess engines also use a protocol
        for communication with graphical user interfaces, so that they can be
        used to play against humans. This protocol is called UCI (Universal
        Chess Interface).
      </p>

      <p>
        My main resources were the chess programming wiki and the Chess
        Programming youtube channel by Code Monkey King. I also read code from
        other engines in order to better understand how they work.
      </p>

      <p>
        This was a fun project and I learned a lot from it. You can find the
        source code on my
        <Link
          href="https://github.com/Lxdovic/Lxna"
          className="text-primary">
          {' Github '}
        </Link>
      </p>
    </>
  )
}

export default ChessEngineArticle
