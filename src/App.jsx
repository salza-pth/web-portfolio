import { Navbar } from './components/layout/Navbar.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { About } from './components/sections/About.jsx'
import { Projects } from './components/sections/Projects.jsx'
import { Experience } from './components/sections/Experience.jsx'
import { Achievements } from './components/sections/Achievements.jsx'
import { Tools } from './components/sections/Tools.jsx'
import { Contact } from './components/sections/Contact.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only">
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main" className="container">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Tools />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
