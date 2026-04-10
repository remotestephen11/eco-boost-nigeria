import servicesImage from '../assets/services-industrial.jpg'
import { companyProfile } from '../data/site'

function CapabilitiesPage() {
  return (
    <div className="page-stack">
      <section className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]" data-reveal>
        <div className="section-frame-strong">
          <div className="section-backdrop" />
          <div className="relative z-10 max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Capabilities</p>
            </div>
            <h1 className="heading-display mt-5 max-w-3xl">
              {companyProfile.capabilitiesPage.heroTitle}
            </h1>
            <p className="editorial-lead mt-5 max-w-2xl">{companyProfile.capabilitiesPage.heroText}</p>
          </div>
        </div>

        <div className="image-shell min-h-[300px]">
          <img
            src={servicesImage}
            alt="Industrial process plant and equipment representing technical procurement and support capability"
            className="h-full w-full object-cover object-center"
          />
          <div className="image-overlay" />
          <div className="absolute inset-x-0 bottom-0 z-20 p-5">
            <div className="image-caption-panel">
              <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                Sector Priority
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Oil and gas remains the dominant capability frame across procurement, inspection, and
                service support, while agriculture remains secondary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame" data-reveal style={{ '--reveal-delay': '80ms' }}>
        <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Capability Pillars</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              Technical support capability structured around industrial buyer priorities.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {companyProfile.capabilitiesPage.pillars.map((item, index) => (
              <div
                key={item.title}
                className={`rail-item ${index % 2 === 1 ? 'md:translate-y-7' : ''}`}
              >
                <p className="text-[0.66rem] uppercase tracking-[0.32em] text-accent">Capability</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]" data-reveal style={{ '--reveal-delay': '110ms' }}>
        <div className="section-frame-strong">
          <div className="section-backdrop opacity-80" />
          <div className="relative z-10">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Sector Support</p>
            </div>
            <h2 className="heading-section mt-4 max-w-2xl">
              Capability alignment kept industrial first and operationally credible.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {companyProfile.capabilitiesPage.sectorSupport.map((item, index) => (
                <div
                  key={item}
                  className={`outline-panel ${index === 0 ? 'border-accent/18 bg-accent-soft/60' : ''} ${index === 3 ? 'border-brand-green/18 bg-brand-green/10' : ''}`}
                >
                  <p className="text-sm leading-7 text-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-frame">
          <p className="editorial-kicker">Capability Profile</p>
          <p className="mt-5 text-sm leading-7 text-text-muted">
            Eco Boost presents itself as a service company prepared to support technically aware
            procurement activity, inspection-linked engagement, and delivery coordination within
            oil-and-gas-led operating environments. The capability story stays grounded in readiness
            and practical support rather than catalogue styling.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CapabilitiesPage
