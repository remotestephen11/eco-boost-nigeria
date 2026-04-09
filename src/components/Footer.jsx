import { NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { navigationItems } from '../data/navigation'
import { companyProfile } from '../data/site'

function Footer() {
  return (
    <footer className="border-t border-border bg-background-soft/95">
      <div className="page-container py-8 lg:py-10">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(180deg,rgba(21,29,38,0.98),rgba(12,17,22,0.96))] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
          <div className="grid gap-7 px-5 py-7 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] lg:px-9 lg:py-8">
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
                    className="rounded-2xl border border-transparent px-4 py-3 text-sm text-text-muted transition hover:border-white/6 hover:bg-white/4 hover:text-text"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Service Highlights</p>
              <div className="mt-5 grid gap-3">
                {companyProfile.serviceHighlights.map((item) => (
                  <div key={item} className="premium-card">
                    <p className="text-sm font-medium tracking-[0.04em] text-text">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-eyebrow">Contact Details</p>
              <div className="mt-5 grid gap-3">
                {companyProfile.contactDetails.map((item) => (
                  <div key={item.label} className="premium-card">
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
          <div className="flex flex-col gap-3 border-t border-white/6 px-5 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-text-muted sm:flex-row sm:items-center sm:justify-between lg:px-9">
            <p>Premium industrial presentation</p>
            <p>Corporate contact details and credentials will be aligned to approved company records</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
