import { companyProfile } from '../data/site'

function AboutPage() {
  return (
    <div className="section-grid">
      <section className="section-shell overflow-hidden" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:items-start">
          <div>
            <p className="section-eyebrow">About Eco Boost</p>
            <h1 className="heading-display mt-4 max-w-4xl">
              Built to support dependable industrial service delivery.
            </h1>
            <p className="body-copy mt-5 max-w-3xl">
              {companyProfile.aboutPageIntro}
            </p>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
              Strategic Positioning
            </p>
            <div className="mt-4 grid gap-3">
              {companyProfile.strategicPositioning.map((item) => (
                <div key={item} className="supporting-panel py-3 text-sm leading-6 text-text">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div>
            <p className="section-eyebrow">Company Overview</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              A focused business profile shaped for operational confidence, procurement support, and industrial credibility.
            </h2>
            <p className="body-copy mt-5 max-w-3xl">
              {companyProfile.aboutSnapshot}
            </p>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
              Dependable Delivery
            </p>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              {companyProfile.dependableDelivery}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="section-shell" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <p className="section-eyebrow">Mission</p>
          <h2 className="heading-section mt-4">Purpose-led execution support.</h2>
          <p className="body-copy mt-5 max-w-2xl">{companyProfile.mission}</p>
        </article>

        <article className="section-shell" data-reveal style={{ '--reveal-delay': '160ms' }}>
          <p className="section-eyebrow">Vision</p>
          <h2 className="heading-section mt-4">
            Long-term client trust through disciplined delivery.
          </h2>
          <p className="body-copy mt-5 max-w-2xl">{companyProfile.vision}</p>
        </article>
      </section>

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '180ms' }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow">Core Values</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              Values that reinforce seriousness, technical conduct, and dependable client service.
            </h2>
          </div>
          <p className="body-copy max-w-xl">
            The company&apos;s operating posture is best understood through the standards it intends to bring into every engagement.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {companyProfile.values.map((value) => (
            <article key={value.title} className="premium-card p-5" data-reveal style={{ '--reveal-delay': '220ms' }}>
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-gold">
                Value
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-text-muted">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
