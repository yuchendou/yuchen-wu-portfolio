import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE } from '../config/site'
import { ResumeButton } from './SocialLinks'

const homeHash = (hash: string) => `${import.meta.env.BASE_URL}#${hash}`

const navItems = [
  { label: 'About', href: homeHash('about') },
  { label: 'Experience', href: homeHash('experience') },
  { label: 'Projects', href: homeHash('projects') },
  { label: 'Skills', href: homeHash('skills') },
  { label: 'Education', href: homeHash('education') },
  { label: 'Contact', href: homeHash('contact') },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" aria-label={`${SITE.name} home`}>
          {SITE.name}
        </Link>

        <nav className="navbar__desktop" aria-label="Primary">
          <ul className="navbar__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <ResumeButton className="navbar__resume" variant="secondary" label="Resume" />
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <div
        id={menuId}
        className={`navbar__mobile ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton variant="primary" label="Resume" />
        </nav>
      </div>
    </header>
  )
}
