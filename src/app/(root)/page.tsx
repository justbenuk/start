import WideContainer from "@/components/container"
import Hero from "@/components/hero/hero"

export const metadata = {
  title: 'Freelance Web Developer'
}

export default function HomePage() {
  return (
    <>
      <WideContainer className="mt-10">
        <Hero />
        <div className="bg-indigo-500 py-12 px-6 mt-10 rounded-2xl"></div>
      </WideContainer >
    </>
  )
}

