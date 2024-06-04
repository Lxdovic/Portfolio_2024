'use client'

import React from 'react'
import Image from 'next/image'
import chessChallengeImage from '@/assets/images/chess-challenge/chess-challenge.png'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {Icon} from '@iconify/react'

const ChessChallengeArticle = () => {
  return (
    <>
      <h1 className="flex h-10 w-full items-center justify-between font-['AlmarenaDisplayBold'] text-5xl uppercase">
        Chess Challenge
        <Link
          href="https://github.com/Lxdovic/Chess-Challenge"
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
        src={chessChallengeImage}
        alt=""
      />

      <p>
        In july of 2023, youtuber
        <a
          className="text-primary"
          href="https://www.youtube.com/@SebastianLague">
          {' Sebastian Lague '}
        </a>
        announced a coding challenge. The participants were given a chess API
        (C#), including features like move generation and validation, check and
        checkmate detection and so on... The goal was to implement a chess bot
        that would utilize this API to play chess on its own. On top of all
        that, one rule was added: the code had to be written in only 1024
        tokens.
      </p>

      <p>
        Once submitted, the bots would be pitted against each other in a
        tournament to see which one would come out on top.
      </p>

      <p>
        As a {'"algorithm enthusiast"'}, this seemed to me like a fun challenge
        and although I had no prior experience in C#, I decided to give it a
        try. This is my attempt at the challenge.
      </p>

      <p>
        I fell into the rabbit hole of chess programming and spent a lot of time
        navigating through the vast amount of information available on the chess
        <a
          className="text-primary"
          href="https://www.chessprogramming.org/Main_Page">
          {' programming wiki'}
        </a>
        . I learnt lots of interesting optimization techniques and tricks while
        working on this project. I also got to know a bit about the C# language
        and its syntax. The final result was a chess bot that played fairly
        well, considering the limitations.
      </p>

      <p>
        On december 18 (2023), Sebastian Lague released his video showcasing the
        results of the tournament. More than 600 bots were submitted.
      </p>

      <iframe
        className="aspect-video"
        src="https://www.youtube.com/embed/Ne40a5LkK6A?si=f4N6Ss72g9nxPM0B&amp;start=2670"
        title="Lxna Match"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      <p>
        And to my surprise, my bot {'"Lxna"'}, barely made the playoffs (top63)
        and was showcased in Sebastian`&apos;s video against smol.cs which would
        later finish top 2 in the tournament.
      </p>

      <p>
        The code is available on my
        <a
          className="text-primary"
          href="https://github.com/Lxdovic/Chess-Challenge">
          {' Github'}
        </a>
      </p>
    </>
  )
}

export default ChessChallengeArticle
