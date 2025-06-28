import WideContainer from "@/components/container"
import Hero from "@/components/hero/hero"
import Skills from "@/components/skills"

export const metadata = {
  title: 'Freelance Web Developer'
}

export default function HomePage() {
  return (
    <>
      <WideContainer className="my-10">
        <Hero />
        <div className="bg-indigo-500 py-24 px-6 mt-10 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="flex flex-col justify-center lg:px-6">
              <h1 className="text-2xl text-white font-semibold">About Me</h1>
              <p className="text-white font-semibold">I have been building web applications for fun. From blogs to custom e-commerce stores. I am a fullstack developer and turn your ideas and design into your very own application.</p>
              <p className="text-white font-semibold">I have built this on-line portfolio to show some of the projects I have worked on. You can find the full project online an all code on my github.</p>
            </div>
            <Skills />
          </div>
        </div>
        <div className="mt-12">
          <h1>Work</h1>
        </div>
        <div className="mt-12">
          <h1>Blog</h1>
        </div>
      </WideContainer >
    </>
  )
}

