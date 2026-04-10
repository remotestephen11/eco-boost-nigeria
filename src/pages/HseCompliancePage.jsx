import hseImage from '../assets/hse-industrial.jpg'
import { companyProfile } from '../data/site'

function HseCompliancePage() {
  return (
    <div className="page-stack">
      <section className="grid gap-5 xl:grid-cols-[1.04fr_0.96fr]" data-reveal>
        <div className="section-frame-strong">
          <div className="section-backdrop" />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">HSE &amp; Compliance</p>
            </div>
            <h1 className="heading-display mt-5 max-w-3xl">{companyProfile.hsePage.heroTitle}</h1>
            <p className="editorial-lead mt-5 max-w-2xl">{companyProfile.hsePage.heroText}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              {companyProfile.hsePage.assuranceMarkers.map((item) => (
                <span key={item} className="overline-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="image-shell min-h-[320px]">
          <img
            src={hseImage}
            alt="Field safety and compliance visual with industrial personnel in PPE"
            className="h-full w-full object-cover object-center"
          />
          <div className="image-overlay" />
          <div className="absolute inset-x-0 bottom-0 z-20 p-5">
            <div className="image-caption-panel">
              <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                Field Discipline
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Safety, reporting, assurance, and preventative control are treated as working
                expectations across industrial support activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame-strong" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="section-backdrop opacity-80" />
        <div className="relative z-10 grid gap-6 xl:grid-cols-[0.76fr_1.24fr]">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Commitment Framework</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              A serious HSE page organized like an operational framework rather than another card grid.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {companyProfile.hsePage.commitments.map((item, index) => (
              <div
                key={item.title}
                className={`rail-item ${index % 2 === 1 ? 'md:translate-y-7' : ''}`}
              >
                <p className="text-[0.66rem] uppercase tracking-[0.3em] text-accent">Commitment</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]" data-reveal style={{ '--reveal-delay': '110ms' }}>
        <div className="section-frame">
          <div className="eyebrow-line">
            <span className="section-divider" />
            <p className="editorial-kicker">HSE Philosophy</p>
          </div>
          <h2 className="heading-section mt-4 max-w-lg">
            Compliance is presented as an operating culture, not a decorative statement.
          </h2>
          <p className="editorial-lead mt-5 max-w-lg">
            Eco Boost positions HSE and compliance as part of how work is prepared, communicated,
            executed, reviewed, and improved. That posture is intended to strengthen trust with
            clients, contractors, and project stakeholders.
          </p>
        </div>

        <div className="section-frame">
          <p className="editorial-kicker">HSE Pillars</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {companyProfile.hseHighlight.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`outline-panel ${index === 1 || index === 4 ? 'border-accent/18 bg-accent-soft/60' : ''}`}
              >
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-text">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HseCompliancePage
