import Image from 'next/image'
import profilePicture from '@/assets/images/pfp.jpeg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex h-max flex-col items-center justify-center gap-10 border-t px-64 py-20">
      <div className="flex h-max w-max gap-6">
        <Image
          className="h-20 w-20 rounded-full"
          src={profilePicture}
          alt="profile picture"
        />

        <div className="flex flex-col justify-center">
          <p className="text-2xl text-white/60">Ludovic Debever</p>
          <p className="text-white/90">ludovicdebever0@gmail.com</p>
        </div>
      </div>

      <ul className="flex gap-10">
        <li className="text-white/70 transition hover:text-white/90">
          <Link href="/#home">Home</Link>
        </li>
        <li className="text-white/70 transition hover:text-white/90">
          <Link href="/#about">About</Link>
        </li>
        <li className="text-white/70 transition hover:text-white/90">
          <Link href="/#work">Work</Link>
        </li>
        <li className="text-white/70 transition hover:text-white/90">
          <Link href="https://github.com/Lxdovic">Github</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
