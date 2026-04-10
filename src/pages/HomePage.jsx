import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-oil-gas.jpg'
import { companyProfile } from '../data/site'

function HomePage() {
  return (
    <div className="section-grid">
      <section className="section-shell overflow-hidden lg:py-6" data-reveal>
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Oil &amp; Gas Services</p>
            <h1 className="heading-display mt-4 max-w-xl">
              {companyProfile.heroHeadline}
            </h1>
            <p className="body-copy mt-4 max-w-xl">
              {companyProfile.heroText}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="info-chip border-accent/20 bg-accent-soft text-accent">
                Premium industrial positioning
              </span>
              <span className="info-chip">Nigeria-focused operational support</span>
              <span className="info-chip">Bid-ready corporate presentation</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-secondary">
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(200,106,45,0.26),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(166,134,63,0.12),transparent_30%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-elevated shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(8,12,17,0.08),rgba(8,12,17,0.42)_72%,rgba(8,12,17,0.86))]" />
              <img
                src={heroImage}
                alt="Offshore oil and gas production platform"
                className="h-[280px] w-full object-cover object-center sm:h-[320px] lg:h-[390px]"
              />

              <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="supporting-panel border-white/10 bg-black/30 backdrop-blur-md">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
                      Operational Priority
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Responsive technical support for procurement-led and service-led project requirements.
                    </p>
                  </div>
                  <div className="supporting-panel border-white/10 bg-black/30 backdrop-blur-md">
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
                      Delivery Standard
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Structured with compliance awareness, inspection discipline, and a premium client-facing posture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" data-reveal style={{ '--reveal-delay': '80ms' }}>
        {companyProfile.capabilitySignals.map((item) => (
          <div key={item} className="premium-card flex min-h-24 items-start gap-4" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent-soft text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              EB
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-text-muted">
                Capability
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-text">
                {item}
              </h2>
            </div>
          </div>
        ))}
      </section>

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '120ms' }}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
          <div>
            <p className="section-eyebrow">About Snapshot</p>
            <h2 className="heading-section mt-4 max-w-2xl">
              A focused Nigerian partner for industrial service coordination and technical procurement support.
            </h2>
            <p className="body-copy mt-5 max-w-3xl">
              {companyProfile.aboutSnapshot}
            </p>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
              Positioning
            </p>
            <div className="mt-4 grid gap-4">
              <div className="supporting-panel">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text">
                  Primary Market
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Oil and gas remains the company&apos;s lead commercial identity and website emphasis.
                </p>
              </div>
              <div className="supporting-panel">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text">
                  Secondary Capability
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Agriculture is presented as a complementary capability area without diluting the industrial focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '160ms' }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow">Core Services</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              Premium service coverage structured for technically demanding project environments.
            </h2>
          </div>
          <p className="body-copy max-w-xl">
            Eco Boost presents its service capability with concise, commercially credible scope areas suitable for contract-facing review.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {companyProfile.coreServices.map((service) => (
            <article
              key={service.title}
              className="premium-card flex min-h-[240px] flex-col justify-between bg-[linear-gradient(180deg,rgba(24,33,44,0.98),rgba(15,21,29,0.96))]"
              data-reveal
              style={{ '--reveal-delay': '180ms' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {service.marker}
                </div>
                <span className="rounded-full border border-white/8 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.24em] text-text-muted">
                  Service
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-text">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-brand-gold">
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                Contract-facing scope area
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '180ms' }}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <p className="section-eyebrow">Why Eco Boost</p>
            <h2 className="heading-section mt-4 max-w-xl">
              A value proposition built around disciplined delivery and operational trust.
            </h2>
            <p className="body-copy mt-5 max-w-xl">
              Eco Boost is positioned to appeal to clients who assess not only scope coverage, but also responsiveness, reliability, and the maturity of execution support behind each engagement.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {companyProfile.whyEcoBoost.map((item, index) => (
              <article key={item.title} className="premium-card p-5" data-reveal style={{ '--reveal-delay': '220ms' }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="text-base font-semibold uppercase tracking-[0.16em] text-text">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell overflow-hidden" data-reveal style={{ '--reveal-delay': '220ms' }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow">Sector Capability</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              Sector presence led by oil and gas, with agriculture retained as a supporting capability.
            </h2>
          </div>
          <p className="body-copy max-w-xl">
            The homepage keeps the industrial positioning clear while acknowledging the broader reach of the business.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
          <article className="relative overflow-hidden rounded-[1.75rem] border border-accent/20 bg-[linear-gradient(135deg,rgba(200,106,45,0.16),rgba(15,21,29,0.96)_40%,rgba(15,21,29,0.98))] p-6 shadow-[0_26px_70px_rgba(0,0,0,0.24)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative max-w-3xl">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-accent">
                {companyProfile.sectorCapabilities.primary.label}
              </p>
              <h3 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-text sm:text-4xl">
                {companyProfile.sectorCapabilities.primary.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
                {companyProfile.sectorCapabilities.primary.description}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {companyProfile.sectorCapabilities.primary.points.map((point) => (
                  <div
                    key={point}
                    className="supporting-panel text-sm leading-6 text-text"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="premium-card border-brand-green/18 bg-[linear-gradient(180deg,rgba(77,144,71,0.07),rgba(18,25,33,0.96))]">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-brand-green">
              {companyProfile.sectorCapabilities.secondary.label}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-text">
              {companyProfile.sectorCapabilities.secondary.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              {companyProfile.sectorCapabilities.secondary.description}
            </p>
            <div className="mt-6 grid gap-3">
              {companyProfile.sectorCapabilities.secondary.points.map((point) => (
                <div key={point} className="supporting-panel py-3 text-sm leading-6 text-text-muted">
                  {point}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell overflow-hidden" data-reveal style={{ '--reveal-delay': '240ms' }}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div>
            <p className="section-eyebrow">HSE &amp; Compliance</p>
            <h2 className="heading-section mt-4 max-w-2xl">
              {companyProfile.hseHighlight.title}
            </h2>
            <p className="body-copy mt-5 max-w-xl">
              {companyProfile.hseHighlight.summary}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="supporting-panel border-accent/16 bg-accent-soft">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
                  Delivery Outlook
                </p>
                <p className="mt-2 text-sm leading-6 text-text">
                  Safety-conscious execution aligned with client confidence and contract credibility.
                </p>
              </div>
              <div className="supporting-panel border-brand-gold/16 bg-brand-gold/8">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
                  Reporting Standard
                </p>
                <p className="mt-2 text-sm leading-6 text-text">
                  Structured communication, review discipline, and visible operational accountability.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {companyProfile.hseHighlight.pillars.map((pillar) => (
              <article key={pillar.title} className="premium-card p-5" data-reveal style={{ '--reveal-delay': '260ms' }}>
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-gold">
                  HSE Pillar
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-text">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '260ms' }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow">Certifications &amp; Registrations</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              Presented with the polish expected of a documented and contract-ready company.
            </h2>
          </div>
          <p className="body-copy max-w-xl">
            Registration, permit, and compliance references are represented professionally here without relying on raw certificate scans.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {companyProfile.certificationReferences.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(24,33,44,0.94),rgba(14,20,27,0.96))] px-4 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.18)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/18 bg-accent-soft text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Ref
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.26em] text-text-muted">
                  Documented Reference
                </p>
                <p className="mt-1 text-sm leading-6 text-text">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[1.8rem] border border-accent/18 bg-[linear-gradient(135deg,rgba(200,106,45,0.14),rgba(15,21,29,0.96)_32%,rgba(9,13,18,0.98))] px-5 py-7 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:px-7 lg:px-9 lg:py-8" data-reveal style={{ '--reveal-delay': '280ms' }}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_auto] lg:items-center">
          <div>
            <p className="section-eyebrow">Next Step</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              {companyProfile.finalCta.title}
            </h2>
            <p className="body-copy mt-5 max-w-3xl">
              {companyProfile.finalCta.text}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <Link to="/services" className="btn-secondary">
              Review Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
