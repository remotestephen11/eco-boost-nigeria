import hseImage from '../assets/hse-industrial.png'
import { companyProfile } from '../data/site'

function HseCompliancePage() {
  return (
    <div className="section-grid">
      <section className="section-shell overflow-hidden lg:py-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(340px,0.98fr)] lg:items-center">
          <div>
            <p className="section-eyebrow">HSE &amp; Compliance</p>
            <h1 className="heading-display mt-4 max-w-4xl">
              {companyProfile.hsePage.heroTitle}
            </h1>
            <p className="body-copy mt-4 max-w-3xl">
              {companyProfile.hsePage.heroText}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {companyProfile.hsePage.assuranceMarkers.map((item) => (
                <span key={item} className="info-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-elevated shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(8,12,17,0.08),rgba(8,12,17,0.42)_72%,rgba(8,12,17,0.86))]" />
            <img
              src={hseImage}
              alt="Industrial personnel in protective equipment representing safety and field compliance"
              className="h-[270px] w-full object-cover object-center sm:h-[320px] lg:h-[390px]"
            />
            <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="supporting-panel border-white/10 bg-black/30 backdrop-blur-md">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
                    Compliance Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Safety, reporting, and procedural alignment structured for industrial confidence.
                  </p>
                </div>
                <div className="supporting-panel border-white/10 bg-black/30 backdrop-blur-md">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
                    Field Discipline
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    A preventative operating posture supported by awareness, review, and accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow">Commitment Areas</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              A stronger HSE page built around credible commitment areas relevant to contract review.
            </h2>
          </div>
          <p className="body-copy max-w-xl">
            The company&apos;s HSE and compliance presentation is organized to reflect operating discipline, not decorative policy language.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {companyProfile.hsePage.commitments.map((item) => (
            <article
              key={item.title}
              className="premium-card bg-[linear-gradient(180deg,rgba(24,33,44,0.98),rgba(13,18,24,0.98))] p-5"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-gold">
                Commitment
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div>
            <p className="section-eyebrow">HSE Philosophy</p>
            <h2 className="heading-section mt-4 max-w-2xl">
              Compliance is presented as an operating culture, not a decorative statement.
            </h2>
            <p className="body-copy mt-5 max-w-xl">
              Eco Boost positions HSE and compliance as part of how work should be prepared, communicated, executed, reviewed, and improved. That posture is intended to strengthen trust with clients, contractors, and project stakeholders who expect discipline in the field.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {companyProfile.hseHighlight.pillars.map((pillar) => (
              <article key={pillar.title} className="premium-card p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-accent">
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
    </div>
  )
}

export default HseCompliancePage
