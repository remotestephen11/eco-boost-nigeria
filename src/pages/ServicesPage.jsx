import { Link } from 'react-router-dom'
import servicesImage from '../assets/services-industrial.jpg'
import heroImage from '../assets/hero-oil-gas.jpg'
import { companyProfile } from '../data/site'

function ServicesPage() {
  const featuredServices = companyProfile.coreServices.slice(0, 2)
  const supportingServices = companyProfile.coreServices.slice(2)

  return (
    <div className="page-stack">
      <section className="section-frame-strong overflow-hidden" data-reveal>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Oil and gas process infrastructure for service operations"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,15,0.94)_0%,rgba(7,10,15,0.88)_46%,rgba(7,10,15,0.62)_76%,rgba(7,10,15,0.82)_100%)]" />
        </div>

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Services</p>
            </div>
            <h1 className="heading-display mt-5 max-w-3xl">{companyProfile.servicesPageHero.title}</h1>
            <p className="editorial-lead mt-5 max-w-2xl text-white/78">
              {companyProfile.servicesPageHero.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link to="/about" className="btn-secondary border-white/16 bg-black/20">
                Learn About Eco Boost
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:justify-self-end">
            {[
              'Oil and gas-led service architecture',
              'Procurement-sensitive and inspection-aware execution support',
              'Commercially credible presentation for contract-facing review',
            ].map((item) => (
              <div key={item} className="image-caption-panel max-w-md">
                <p className="text-sm leading-6 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.04fr_0.96fr]" data-reveal style={{ '--reveal-delay': '90ms' }}>
        <div className="section-frame">
          <div className="eyebrow-line">
            <span className="section-divider" />
            <p className="editorial-kicker">Featured Services</p>
          </div>
          <h2 className="heading-section mt-4 max-w-xl">
            Lead service lines given stronger prominence to avoid a flat catalogue presentation.
          </h2>
          <p className="editorial-lead mt-5 max-w-xl">
            The services page is intentionally organized with hierarchy, featured capability areas,
            and staggered supporting scopes instead of identical boxes repeated eight times.
          </p>
        </div>

        <div className="image-shell min-h-[280px]">
          <img
            src={servicesImage}
            alt="Industrial equipment and process structures"
            className="h-full w-full object-cover object-center"
          />
          <div className="image-overlay" />
        </div>
      </section>

      <section className="grid gap-5" data-reveal style={{ '--reveal-delay': '110ms' }}>
        {featuredServices.map((service, index) => (
          <article
            key={service.title}
            className="section-frame-strong"
          >
            <div className="section-backdrop" />
            <div className="relative z-10 grid gap-6 xl:grid-cols-[120px_1.05fr_0.95fr] xl:items-start">
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-accent/20 bg-accent-soft text-lg font-semibold uppercase tracking-[0.2em] text-accent">
                {service.marker}
              </div>

              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.32em] text-brand-gold">
                  Featured Service 0{index + 1}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-text">
                  {service.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-text-muted">{service.detail}</p>
              </div>

              <div className="grid gap-4">
                {service.points.map((point) => (
                  <div key={point} className="rail-item">
                    <p className="text-sm leading-7 text-text">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-frame" data-reveal style={{ '--reveal-delay': '140ms' }}>
        <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Supporting Service Lines</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              The broader portfolio remains concise, technical, and commercially sharp.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {supportingServices.map((service, index) => (
              <article
                key={service.title}
                className={`service-band ${index % 2 === 1 ? 'md:translate-y-7' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-accent">
                    {service.marker}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-text">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">{service.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
