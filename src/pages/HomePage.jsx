import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-oil-gas.jpg'
import servicesImage from '../assets/services-industrial.jpg'
import hseImage from '../assets/hse-industrial.jpg'
import { companyProfile } from '../data/site'

function HomePage() {
  const featuredServices = companyProfile.coreServices.slice(0, 2)
  const supportingServices = companyProfile.coreServices.slice(2)

  return (
    <div className="page-stack">
      <section
        className="section-frame-strong min-h-[72vh] lg:min-h-[78vh]"
        data-reveal
      >
        <div className="section-backdrop" />
        <div className="surface-glow left-[-5%] top-[-12%] h-56 w-56 bg-accent/16" />
        <div className="surface-glow bottom-[-10%] right-[-4%] h-48 w-48 bg-brand-gold/12" />

        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Oil and gas refinery infrastructure at dusk"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,15,0.96)_0%,rgba(7,10,15,0.84)_42%,rgba(7,10,15,0.56)_68%,rgba(7,10,15,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,15,0.12),rgba(7,10,15,0.22)_35%,rgba(7,10,15,0.92))]" />
        </div>

        <div className="relative z-10 grid gap-8 lg:min-h-[calc(78vh-4rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
          <div className="flex max-w-3xl flex-col justify-center py-2 lg:py-6">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Oil &amp; Gas Services</p>
            </div>

            <h1 className="heading-display mt-5 max-w-2xl text-white">
              {companyProfile.heroHeadline}
            </h1>
            <p className="editorial-lead mt-5 max-w-2xl text-white/78">
              {companyProfile.heroText}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="overline-chip border-accent/20 bg-accent-soft text-accent">
                Premium industrial positioning
              </span>
              <span className="overline-chip">Nigeria-focused technical support</span>
              <span className="overline-chip">Bid-ready corporate presence</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link to="/contact" className="btn-secondary border-white/16 bg-black/20">
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="grid gap-4 self-end lg:justify-self-end lg:pb-2">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ['Execution Focus', 'Oil and gas support, inspection awareness, and procurement responsiveness.'],
                ['Delivery Standard', 'Commercially credible communication and operational discipline.'],
                ['Field Posture', 'Safety-conscious coordination for demanding service environments.'],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="image-caption-panel max-w-md"
                  data-reveal
                  style={{ '--reveal-delay': `${120 + index * 70}ms` }}
                >
                  <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">{text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-3">
              {[
                ['01', 'Oil & gas-first corporate identity'],
                ['02', 'Inspection-conscious operating posture'],
                ['03', 'Procurement-led response capability'],
              ].map(([count, label]) => (
                <div key={count} className="stat-block">
                  <p className="text-lg font-semibold tracking-[-0.03em] text-white">{count}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-frame overflow-hidden"
        data-reveal
        style={{ '--reveal-delay': '80ms' }}
      >
        <div className="section-backdrop opacity-70" />
        <div className="relative z-10 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Capability Strip</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              Industrial support strengths framed for quick executive review.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {companyProfile.capabilitySignals.map((item, index) => (
              <div
                key={item}
                className="rail-item"
                data-reveal
                style={{ '--reveal-delay': `${120 + index * 60}ms` }}
              >
                <p className="text-[0.64rem] uppercase tracking-[0.32em] text-accent">Capability</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-text">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]"
        data-reveal
        style={{ '--reveal-delay': '100ms' }}
      >
        <div className="section-frame-strong">
          <div className="section-backdrop" />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">About Snapshot</p>
            </div>
            <h2 className="heading-section mt-4 max-w-2xl">
              A focused Nigerian business profile designed around serious industrial support.
            </h2>
            <p className="editorial-lead mt-5 max-w-2xl">{companyProfile.aboutSnapshot}</p>

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="outline-panel angled-panel border-accent/18 bg-accent-soft/60">
                <p className="text-[0.64rem] uppercase tracking-[0.3em] text-accent">Primary Market</p>
                <p className="mt-3 text-base font-medium leading-7 text-text">
                  Oil and gas remains the company&apos;s lead commercial identity, service emphasis,
                  and client-facing presentation.
                </p>
              </div>

              <div className="rail-list">
                {companyProfile.strategicPositioning.slice(0, 3).map((item) => (
                  <div key={item} className="rail-item">
                    <p className="text-sm leading-7 text-text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="image-shell min-h-[280px]">
            <img
              src={servicesImage}
              alt="Industrial process equipment and refinery structures"
              className="h-full w-full object-cover object-center"
            />
            <div className="image-overlay" />
            <div className="absolute inset-x-0 bottom-0 z-20 p-5">
              <div className="image-caption-panel">
                <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                  Operating Story
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Built around procurement responsiveness, field awareness, and credible support for
                  industrial clients evaluating delivery partners.
                </p>
              </div>
            </div>
          </div>

          <div className="section-frame">
            <p className="editorial-kicker">Secondary Capability</p>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              Agriculture is retained as a supporting business capability without displacing the
              oil-and-gas-led operating narrative or visual hierarchy of the company.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-frame-strong"
        data-reveal
        style={{ '--reveal-delay': '120ms' }}
      >
        <div className="section-backdrop" />
        <div className="relative z-10">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="eyebrow-line">
                <span className="section-divider" />
                <p className="editorial-kicker">Core Services</p>
              </div>
              <h2 className="heading-section mt-4 max-w-xl">
                Industrial capability presented through featured scope areas and supporting lines.
              </h2>
            </div>
            <p className="editorial-lead max-w-2xl">
              Instead of relying on identical feature cards, the services section is structured to
              emphasize hierarchy, seriousness, and operational relevance.
            </p>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-5">
              {featuredServices.map((service, index) => (
                <article
                  key={service.title}
                  className="service-band"
                  data-reveal
                  style={{ '--reveal-delay': `${150 + index * 70}ms` }}
                >
                  <div className="absolute inset-y-0 right-0 hidden w-28 bg-[linear-gradient(180deg,rgba(200,106,45,0.14),transparent)] lg:block" />
                  <div className="grid gap-6 lg:grid-cols-[86px_minmax(0,1fr)]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-accent/20 bg-accent-soft text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                      {service.marker}
                    </div>
                    <div className="relative z-10">
                      <p className="text-[0.66rem] uppercase tracking-[0.32em] text-brand-gold">
                        Featured Service
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-text">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-text-muted">{service.detail}</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {service.points.map((point) => (
                          <span key={point} className="overline-chip">
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-4">
              {supportingServices.map((service, index) => (
                <article
                  key={service.title}
                  className={`service-band ${index % 2 === 1 ? 'lg:translate-x-6' : ''}`}
                  data-reveal
                  style={{ '--reveal-delay': `${200 + index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                      {service.marker}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-text">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="grid gap-5 xl:grid-cols-[0.84fr_1.16fr]"
        data-reveal
        style={{ '--reveal-delay': '140ms' }}
      >
        <div className="section-frame">
          <div className="eyebrow-line">
            <span className="section-divider" />
            <p className="editorial-kicker">Why Eco Boost</p>
          </div>
          <h2 className="heading-section mt-4 max-w-lg">
            A delivery posture built around operational trust rather than marketing language.
          </h2>
          <p className="editorial-lead mt-5 max-w-lg">
            Eco Boost is presented for buyers who look past service labels and assess technical
            seriousness, accountability, response quality, and execution maturity.
          </p>
        </div>

        <div className="section-frame-strong">
          <div className="section-backdrop opacity-80" />
          <div className="relative z-10 grid gap-5 md:grid-cols-2">
            {companyProfile.whyEcoBoost.map((item, index) => (
              <div
                key={item.title}
                className={`rail-item ${index % 2 === 1 ? 'md:translate-y-6' : ''}`}
                data-reveal
                style={{ '--reveal-delay': `${180 + index * 60}ms` }}
              >
                <p className="text-[0.66rem] uppercase tracking-[0.32em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-[minmax(0,1.22fr)_minmax(300px,0.78fr)]"
        data-reveal
        style={{ '--reveal-delay': '160ms' }}
      >
        <div className="section-frame-strong">
          <div className="section-backdrop" />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Sector Capability</p>
            </div>
            <p className="mt-5 text-[0.66rem] uppercase tracking-[0.34em] text-accent">
              {companyProfile.sectorCapabilities.primary.label}
            </p>
            <h2 className="heading-section mt-3 text-3xl sm:text-[2.6rem]">
              {companyProfile.sectorCapabilities.primary.title}
            </h2>
            <p className="editorial-lead mt-4 max-w-2xl">
              {companyProfile.sectorCapabilities.primary.description}
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {companyProfile.sectorCapabilities.primary.points.map((point, index) => (
                <div
                  key={point}
                  className={`outline-panel ${index === 1 ? 'border-accent/16 bg-accent-soft/70' : ''}`}
                >
                  <p className="text-sm leading-7 text-text">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-frame">
          <p className="text-[0.66rem] uppercase tracking-[0.34em] text-brand-green">
            {companyProfile.sectorCapabilities.secondary.label}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-text">
            {companyProfile.sectorCapabilities.secondary.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-text-muted">
            {companyProfile.sectorCapabilities.secondary.description}
          </p>
          <div className="mt-6 rail-list">
            {companyProfile.sectorCapabilities.secondary.points.map((point) => (
              <div key={point} className="rail-item">
                <p className="text-sm leading-7 text-text-muted">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]"
        data-reveal
        style={{ '--reveal-delay': '180ms' }}
      >
        <div className="image-shell min-h-[300px]">
          <img
            src={hseImage}
            alt="Industrial personnel in protective equipment representing HSE discipline"
            className="h-full w-full object-cover object-center"
          />
          <div className="image-overlay" />
          <div className="absolute inset-x-0 bottom-0 z-20 p-5">
            <div className="image-caption-panel max-w-lg">
              <p className="text-[0.66rem] uppercase tracking-[0.32em] text-accent">
                HSE &amp; Compliance
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Safety culture, compliance alignment, audit readiness, and disciplined reporting are
                treated as operational requirements rather than website decoration.
              </p>
            </div>
          </div>
        </div>

        <div className="section-frame-strong">
          <div className="section-backdrop" />
          <div className="relative z-10">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">HSE Framework</p>
            </div>
            <h2 className="heading-section mt-4 max-w-2xl">{companyProfile.hseHighlight.title}</h2>
            <p className="editorial-lead mt-5 max-w-2xl">{companyProfile.hseHighlight.summary}</p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {companyProfile.hseHighlight.pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`rail-item ${index % 2 === 1 ? 'md:translate-y-6' : ''}`}
                  data-reveal
                  style={{ '--reveal-delay': `${220 + index * 50}ms` }}
                >
                  <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                    HSE Pillar
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-frame"
        data-reveal
        style={{ '--reveal-delay': '200ms' }}
      >
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Certifications &amp; Registrations</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              Reference documentation presented with professional restraint.
            </h2>
            <p className="editorial-lead mt-5 max-w-lg">
              Registration, permit, vendor, and compliance references are represented here as
              documented capability markers instead of raw certificate scans.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {companyProfile.certificationReferences.map((item, index) => (
              <div
                key={item}
                className={`outline-panel ${index === 0 ? 'border-accent/18 bg-accent-soft/60' : ''}`}
              >
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-text-muted">
                  Documented Reference
                </p>
                <p className="mt-3 text-sm leading-7 text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-frame-strong"
        data-reveal
        style={{ '--reveal-delay': '220ms' }}
      >
        <div className="section-backdrop" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Next Step</p>
            </div>
            <h2 className="heading-section mt-4 max-w-3xl">
              {companyProfile.finalCta.title}
            </h2>
            <p className="editorial-lead mt-5 max-w-3xl">{companyProfile.finalCta.text}</p>
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
