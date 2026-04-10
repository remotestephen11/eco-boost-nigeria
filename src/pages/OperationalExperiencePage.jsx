import heroImage from '../assets/hero-oil-gas.jpg'
import { companyProfile } from '../data/site'

function OperationalExperiencePage() {
  return (
    <div className="page-stack">
      <section className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]" data-reveal>
        <div className="section-frame-strong">
          <div className="section-backdrop" />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Operational Experience</p>
            </div>
            <h1 className="heading-display mt-5 max-w-3xl">
              {companyProfile.operationalExperience.heroTitle}
            </h1>
            <p className="editorial-lead mt-5 max-w-2xl">
              {companyProfile.operationalExperience.heroText}
            </p>
          </div>
        </div>

        <div className="image-shell min-h-[300px]">
          <img
            src={heroImage}
            alt="Industrial oil and gas infrastructure supporting operational service delivery"
            className="h-full w-full object-cover object-center"
          />
          <div className="image-overlay" />
          <div className="absolute inset-x-0 bottom-0 z-20 p-5">
            <div className="image-caption-panel">
              <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                Bidding Context
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Capability is presented here through readiness, discipline, and execution maturity,
                not invented project claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Execution Readiness</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              Readiness areas arranged like an operating architecture rather than a feature grid.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {companyProfile.operationalExperience.readinessAreas.map((item, index) => (
              <div
                key={item.title}
                className={`rail-item ${index % 2 === 1 ? 'md:translate-y-7' : ''}`}
              >
                <p className="text-[0.66rem] uppercase tracking-[0.32em] text-accent">
                  Readiness Area
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

      <section className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]" data-reveal style={{ '--reveal-delay': '110ms' }}>
        <div className="section-frame">
          <div className="eyebrow-line">
            <span className="section-divider" />
            <p className="editorial-kicker">Sectors Served</p>
          </div>
          <h2 className="heading-section mt-4 max-w-lg">
            Sector familiarity communicated through practical service relevance.
          </h2>
          <div className="mt-6 rail-list">
            {companyProfile.operationalExperience.sectorsServed.map((item) => (
              <div key={item} className="rail-item">
                <p className="text-sm leading-7 text-text">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-frame-strong">
          <div className="section-backdrop opacity-80" />
          <div className="relative z-10">
            <p className="editorial-kicker">Operational Discipline</p>
            <h2 className="heading-section mt-4 max-w-xl">
              Execution credibility reinforced through communication, responsiveness, and reporting.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {companyProfile.operationalExperience.disciplinePoints.map((item, index) => (
                <div
                  key={item}
                  className={`outline-panel ${index === 0 ? 'border-accent/18 bg-accent-soft/60' : ''}`}
                >
                  <p className="text-sm leading-7 text-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OperationalExperiencePage
