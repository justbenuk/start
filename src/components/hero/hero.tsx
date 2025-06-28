import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="rounded-xl bg-accent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-18">
        <div className="px-6 lg:px-12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-semibold">Simple, Affordable <span className="text-indigo-500 font-bold">Web Development</span></h1>
          <p className="lg:text-lg mt-4 lg:pr-20">I am a self-taught <span className="font-bold">Web Developer</span> and I build custom <span className="font-bold">Web Applications</span> using NextJs, TailwindCSS and Prisma. If you have a project you would like me to work on, please feel free to <span className="font-bold"><Link href='/contact'>Contact Me</Link></span></p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src={'/assets/hero2.svg'} alt="hero image" height={700} width={700} className="px-6 lg:px-12" />
        </div>
      </div>
    </div >
  )
}

