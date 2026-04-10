import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { navigationItems } from '../data/navigation'

function linkClassName({ isActive }) {
  return [
    'nav-link',
    isActive ? 'nav-link-active' : '',
  ].join(' ')
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const handleCloseMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[linear-gradient(180deg,rgba(7,10,15,0.94),rgba(7,10,15,0.82))] backdrop-blur-2xl">
      <div className="page-container">
        <div className="flex items-center justify-between gap-4 py-4">
          <NavLink to="/" onClick={handleCloseMenu} className="shrink-0">
            <BrandLogo compact />
          </NavLink>

          <nav className="hidden items-center gap-1 xl:flex">
            {navigationItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="rounded-full border border-brand-gold/20 bg-black/20 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-brand-gold">
              Contract-ready presence
            </div>
            <NavLink to="/contact" className="btn-primary">
              Request a Quote
            </NavLink>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white/4 text-text transition hover:border-accent/40 hover:bg-accent-soft lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="pb-4 lg:hidden">
            <div className="section-frame rounded-[1.5rem] px-4 py-4">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/6 pb-4">
                <div>
                  <p className="section-eyebrow">Navigation</p>
                  <p className="mt-2 text-sm text-text-muted">
                    {navigationItems.find((item) => item.path === location.pathname)?.label ??
                      'Eco Boost'}
                  </p>
                </div>
                <NavLink to="/contact" className="btn-primary px-4 py-2 text-[0.65rem]" onClick={handleCloseMenu}>
                  Quote
                </NavLink>
              </div>
              <nav className="grid gap-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={linkClassName}
                    onClick={handleCloseMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
