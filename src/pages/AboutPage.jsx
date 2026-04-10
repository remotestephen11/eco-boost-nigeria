import servicesImage from '../assets/services-industrial.jpg'
import { companyProfile } from '../data/site'

function AboutPage() {
  return (
    <div className="page-stack">
      <section className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]" data-reveal>
        <div className="section-frame-strong">
          <div className="section-backdrop" />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">About Eco Boost</p>
            </div>
            <h1 className="heading-display mt-5 max-w-3xl">
              Built to support dependable industrial service delivery.
            </h1>
            <p className="editorial-lead mt-5 max-w-2xl">{companyProfile.aboutPageIntro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {companyProfile.strategicPositioning.map((item, index) => (
                <div
                  key={item}
                  className={`rail-item ${index === 1 || index === 3 ? 'sm:translate-y-5' : ''}`}
                >
                  <p className="text-sm leading-7 text-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="image-shell min-h-[280px]">
            <img
              src={servicesImage}
              alt="Industrial process plant representing Eco Boost's operating environment"
              className="h-full w-full object-cover object-center"
            />
            <div className="image-overlay" />
            <div className="absolute inset-x-0 bottom-0 z-20 p-5">
              <div className="image-caption-panel">
                <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                  Company Overview
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Eco Boost is positioned for clients that need disciplined support, procurement
                  responsiveness, and a serious industrial operating posture.
                </p>
              </div>
            </div>
          </div>

          <div className="section-frame">
            <p className="editorial-kicker">Dependable Service Delivery</p>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              {companyProfile.dependableDelivery}
            </p>
          </div>
        </div>
      </section>

      <section className="section-frame" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Company Positioning</p>
            </div>
            <h2 className="heading-section mt-4 max-w-2xl">
              A focused business profile shaped for procurement support, technical seriousness, and
              industrial credibility.
            </h2>
            <p className="editorial-lead mt-5 max-w-3xl">{companyProfile.aboutSnapshot}</p>
          </div>

          <div className="outline-panel angled-panel border-accent/18 bg-accent-soft/65">
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-accent">Operating Intent</p>
            <p className="mt-4 text-base leading-8 text-text">
              The company presents itself as a dependable Nigerian partner for industrial scopes
              where execution discipline, compliance awareness, and communication maturity all
              contribute to contract confidence.
            </p>
          </div>
        </div>
      </section>

      <section
        className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        data-reveal
        style={{ '--reveal-delay': '110ms' }}
      >
        <article className="section-frame-strong">
          <div className="section-backdrop opacity-80" />
          <div className="relative z-10">
            <p className="editorial-kicker">Mission</p>
            <h2 className="heading-section mt-4 max-w-lg">Purpose-led execution support.</h2>
            <p className="editorial-lead mt-5 max-w-2xl">{companyProfile.mission}</p>
          </div>
        </article>

        <article className="section-frame">
          <p className="editorial-kicker">Vision</p>
          <h2 className="heading-section mt-4 max-w-lg">
            Long-term client trust through disciplined delivery.
          </h2>
          <p className="editorial-lead mt-5 max-w-2xl">{companyProfile.vision}</p>
        </article>
      </section>

      <section className="section-frame-strong" data-reveal style={{ '--reveal-delay': '140ms' }}>
        <div className="section-backdrop" />
        <div className="relative z-10 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Core Values</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              Values intended to reinforce seriousness, discipline, and dependable client service.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {companyProfile.values.map((value, index) => (
              <div
                key={value.title}
                className={`rail-item ${index % 2 === 1 ? 'md:translate-y-8' : ''}`}
              >
                <p className="text-[0.66rem] uppercase tracking-[0.32em] text-brand-gold">
                  Value
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
