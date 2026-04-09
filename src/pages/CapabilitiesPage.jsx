import { companyProfile } from '../data/site'

function CapabilitiesPage() {
  return (
    <div className="section-grid">
      <section className="section-shell overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <p className="section-eyebrow">Capabilities</p>
            <h1 className="heading-display mt-4 max-w-4xl">
              {companyProfile.capabilitiesPage.heroTitle}
            </h1>
            <p className="body-copy mt-5 max-w-3xl">
              {companyProfile.capabilitiesPage.heroText}
            </p>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
              Sector Priority
            </p>
            <div className="mt-4 grid gap-3">
              <div className="supporting-panel border-accent/18 bg-accent-soft text-sm leading-6 text-text">
                Oil and gas remains the dominant capability frame across procurement, inspection, and service support.
              </div>
              <div className="supporting-panel border-brand-green/18 bg-brand-green/10 text-sm leading-6 text-text-muted">
                Agriculture is retained as a secondary capability area without displacing the industrial emphasis.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {companyProfile.capabilitiesPage.pillars.map((item) => (
          <article key={item.title} className="premium-card p-5">
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-accent">
              Capability
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div>
            <p className="section-eyebrow">Sector Support</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              Capabilities aligned to industrial buyers, project support needs, and sector-specific expectations.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {companyProfile.capabilitiesPage.sectorSupport.map((item) => (
                <div key={item} className="supporting-panel text-sm leading-6 text-text">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
              Capability Profile
            </p>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              Eco Boost presents itself as a service company prepared to support technically aware procurement activity, inspection-linked engagement, and delivery coordination within oil and gas-led operating environments. The capability story stays grounded in readiness and practical support.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CapabilitiesPage
