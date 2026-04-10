import { NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { navigationItems } from '../data/navigation'
import { companyProfile } from '../data/site'

function Footer() {
  return (
    <footer className="border-t border-white/6 bg-background-soft/95">
      <div className="page-container py-8 lg:py-10">
        <div className="section-frame-strong">
          <div className="section-backdrop opacity-80" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1fr]">
            <div className="space-y-5">
              <p className="section-eyebrow">Company Summary</p>
              <BrandLogo />
              <p className="body-copy max-w-md">{companyProfile.summary}</p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-accent/25 bg-accent-soft px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-accent">
                  Oil &amp; Gas Led
                </span>
                <span className="rounded-full border border-brand-green/20 bg-brand-green/10 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-brand-green">
                  Agriculture Support
                </span>
                <span className="rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-brand-gold">
                  Procurement Focus
                </span>
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Quick Links</p>
              <div className="mt-5 grid gap-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="rail-item rounded-none border-l border-white/8 px-0 py-2 text-sm text-text-muted transition hover:text-text"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Service Highlights</p>
              <div className="mt-5 rail-list">
                {companyProfile.serviceHighlights.map((item) => (
                  <div key={item} className="rail-item">
                    <p className="text-sm font-medium tracking-[0.04em] text-text">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Contact Details</p>
              <div className="mt-5 rail-list">
                {companyProfile.contactDetails.map((item) => (
                  <div key={item.label} className="rail-item">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-7 flex flex-col gap-3 border-t border-white/6 pt-4 text-[0.68rem] uppercase tracking-[0.24em] text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>Premium industrial presentation</p>
            <p>Oil and gas-led service profile with procurement and inspection support</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
