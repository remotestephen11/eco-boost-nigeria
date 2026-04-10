import { companyProfile } from '../data/site'

function OperationalExperiencePage() {
  return (
    <div className="section-grid">
      <section className="section-shell overflow-hidden" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div>
            <p className="section-eyebrow">Operational Experience</p>
            <h1 className="heading-display mt-4 max-w-4xl">
              {companyProfile.operationalExperience.heroTitle}
            </h1>
            <p className="body-copy mt-5 max-w-3xl">
              {companyProfile.operationalExperience.heroText}
            </p>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
              Bidding Context
            </p>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              This page is intentionally structured around capability, discipline, and readiness rather than unverified project storytelling. That approach supports mature contract presentation without overstating prior work.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" data-reveal style={{ '--reveal-delay': '80ms' }}>
        {companyProfile.operationalExperience.readinessAreas.map((item) => (
          <article key={item.title} className="premium-card p-5" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <p className="text-[0.68rem] uppercase tracking-[0.26em] text-accent">
              Readiness Area
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

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '140ms' }}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div>
            <p className="section-eyebrow">Sectors Served</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              Sector familiarity presented through service relevance, not fabricated case studies.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {companyProfile.operationalExperience.sectorsServed.map((item) => (
                <div key={item} className="supporting-panel text-sm leading-6 text-text">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
              Operational Discipline
            </p>
            <div className="mt-4 grid gap-3">
              {companyProfile.operationalExperience.disciplinePoints.map((item) => (
                <div key={item} className="supporting-panel py-3 text-sm leading-6 text-text-muted">
                  {item}
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
