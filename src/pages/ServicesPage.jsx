import { Link } from 'react-router-dom'
import servicesImage from '../assets/services-industrial.jpg'
import { companyProfile } from '../data/site'

function ServicesPage() {
  return (
    <div className="section-grid">
      <section className="section-shell overflow-hidden lg:py-6" data-reveal>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.95fr)] lg:items-center">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Services</p>
            <h1 className="heading-display mt-4 max-w-3xl">
              {companyProfile.servicesPageHero.title}
            </h1>
            <p className="body-copy mt-4 max-w-2xl">
              {companyProfile.servicesPageHero.text}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn About Eco Boost
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-background-elevated shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(8,12,17,0.16),rgba(8,12,17,0.56)_75%,rgba(8,12,17,0.82))]" />
            <img
              src={servicesImage}
              alt="Offshore drilling platform for oil and gas operations"
              className="h-[250px] w-full object-cover object-center sm:h-[300px] lg:h-[360px]"
            />
            <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="supporting-panel border-white/10 bg-black/30 backdrop-blur-md">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-accent">
                    Service Focus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Oil and gas support capability presented with concise, contract-facing clarity.
                  </p>
                </div>
                <div className="supporting-panel border-white/10 bg-black/30 backdrop-blur-md">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
                    Delivery Style
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Structured, responsive, and commercially credible execution support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" data-reveal style={{ '--reveal-delay': '90ms' }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow">Service Portfolio</p>
            <h2 className="heading-section mt-4 max-w-3xl">
              Eight service lines organized for technical relevance and premium presentation.
            </h2>
          </div>
          <p className="body-copy max-w-xl">
            Each service area is framed to communicate practical value, scope seriousness, and industrial readiness without unnecessary language inflation.
          </p>
        </div>
      </section>

      <section className="grid gap-4">
        {companyProfile.coreServices.map((service, index) => (
          <article key={service.title} className="section-shell overflow-hidden" data-reveal style={{ '--reveal-delay': '140ms' }}>
            <div className="grid gap-6 lg:grid-cols-[120px_minmax(0,1fr)_minmax(240px,0.52fr)] lg:items-start">
              <div className="flex items-center gap-4 lg:block">
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-accent/20 bg-accent-soft text-lg font-semibold uppercase tracking-[0.18em] text-accent">
                  {service.marker}
                </div>
                <p className="mt-0 text-[0.72rem] uppercase tracking-[0.28em] text-text-muted lg:mt-4">
                  Service 0{index + 1}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-text sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-text-muted">
                  {service.detail}
                </p>
              </div>

              <div className="premium-card">
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-gold">
                  Scope Markers
                </p>
                <div className="mt-4 grid gap-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                    className="supporting-panel py-3 text-sm leading-6 text-text"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default ServicesPage
