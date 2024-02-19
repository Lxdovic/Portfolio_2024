import Image from 'next/image'
import chessTreeImage from '@/assets/images/chess-challenge/chess-tree.png'

export default function Page() {
  return (
    <section className="mt-40 flex flex-col gap-6 px-80 py-10">
      <h1 className="font-['AlmarenaDisplayBold'] text-5xl uppercase">
        Chess Challenge
      </h1>

      <p>
        In july of 2023, youtuber{' '}
        <a
          className="text-primary"
          href="https://www.youtube.com/@SebastianLague">
          Sebastian Lague
        </a>{' '}
        announced a coding challenge. The participants were given a chess API
        (C#), including features like move generation and validation, check and
        checkmate detection and so on... The goal was to implement a chess bot
        that would utilize this API to play chess on its own. On top of all
        that, one rule was added: the code had to be written in only 1024
        tokens.
      </p>

      <p>
        As a {'"algorithm enthusiast"'}, this seemed to me like a fun challenge
        and although I had no prior experience in C#, I decided to give it a
        try. This is my attempt at the challenge.
      </p>

      <h2 className="mt-10 font-['AlmarenaDisplayBold'] text-4xl uppercase">
        Evaluation
      </h2>

      <p>
        The first important step to build a chess bot is to be able to evaluate
        how good/bad a position is. This can get quite complicated so i will not
        got into detail here, but the main idea is to assign a value to each
        type of piece like so:
      </p>

      <ul className="list-disc">
        <li>Pawn: 100</li>
        <li>Knight: 300</li>
        <li>Bishop: 320</li>
        <li>Rook: 500</li>
        <li>Queen: 900</li>
        <li>King: 10000</li>
      </ul>

      <p>
        Then we can simply count each piece of each type for both black and
        white and calculate the difference. This is called a material
        evaluation.
      </p>

      <p>
        But chess is a strategic game, and the position of the pieces is also
        important. For example, a pawn in the center of the board is more
        valuable than a pawn in the edge. This is called a positional
        evaluation. Here's how it works:
      </p>

      <p>
        For each type of piece, we create a table of values matching the
        chessboard and assign a value to each square. This value represents a
        bonus or a malus for the piece to be in that square.
      </p>

      <code>
        {`
          int[,] pawnTable = new int[8, 8]
          {
            {0, 0, 0, 0, 0, 0, 0, 0},
            {50, 50, 50, 50, 50, 50, 50, 50},
            {10, 10, 20, 30, 30, 20, 10, 10},
            {5, 5, 10, 25, 25, 10, 5, 5},
            {0, 0, 0, 20, 20, 0, 0, 0},
            {5, -5, -10, 0, 0, -10, -5, 5},
            {5, 10, 10, -20, -20, 10, 10, 5},
            {0, 0, 0, 0, 0, 0, 0, 0}
          };
        `}
      </code>

      <h2 className="mt-10 font-['AlmarenaDisplayBold'] text-4xl uppercase">
        Search
      </h2>

      <p>
        Most chess engines use an algorithm named minimax, the idea is simple,
        and in order to understand how it works, we have to imagine our chess
        game is a tree.
      </p>

      <Image
        src={chessTreeImage}
        alt=""
      />

      <p>
        The root of the tree is the current state of the game, and each node is
        a possible move. The leaves of the tree are the possible outcomes of the
        game. Although the tree is not infinite, it is very large, and it is
        impossible to calculate all the possible moves and outcomes.
      </p>

      <p>
        The minimax algorithm is a recursive algorithm that searches the tree
        and evaluates the best move for the current player. Minimax assumes that
        both players will play optimally, and it is based on the idea that the
        best move for the current player is the worst move for the opponent.
      </p>
    </section>
  )
}
