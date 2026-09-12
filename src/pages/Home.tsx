import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.hash, location.pathname])

  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
