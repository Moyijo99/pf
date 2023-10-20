import Hero from "./components/Hero"
import Skills from "./components/Skills"
import WebTechs from "./components/WebTechs"
import Projects from "./components/Projects"
import About from "./components/About"
import CTA from "./components/CTA"

export default function Home() {
  return (
    <>
        <Hero />
        <Skills />
        <WebTechs />
        <Projects />
        <About />
        <CTA />
    </>
  )
}
