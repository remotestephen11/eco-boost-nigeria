import heroImage from '../assets/hero-oil-gas.jpg'
import { companyProfile } from '../data/site'

function ContactPage() {
  return (
    <div className="page-stack">
      <section className="section-frame-strong overflow-hidden" data-reveal>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Refinery and pipeline infrastructure representing industrial contact and project inquiry"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,15,0.94)_0%,rgba(7,10,15,0.88)_48%,rgba(7,10,15,0.64)_72%,rgba(7,10,15,0.82)_100%)]" />
        </div>

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Contact</p>
            </div>
            <h1 className="heading-display mt-5 max-w-3xl">{companyProfile.contactPage.heroTitle}</h1>
            <p className="editorial-lead mt-5 max-w-2xl text-white/78">
              {companyProfile.contactPage.heroText}
            </p>
          </div>

          <div className="grid gap-4 lg:justify-self-end">
            <div className="image-caption-panel max-w-md">
              <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                Response Intent
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Use this page for formal inquiries relating to procurement support, inspection
                services, maintenance coordination, advisory scope, or broader operational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.04fr_0.96fr]" data-reveal style={{ '--reveal-delay': '90ms' }}>
        <section className="section-frame-strong">
          <div className="section-backdrop opacity-80" />
          <div className="relative z-10">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Inquiry Form</p>
            </div>
            <h2 className="heading-section mt-4 max-w-2xl">
              Submit a structured request for service discussion.
            </h2>

            <form className="mt-7 grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Name</span>
                  <input type="text" placeholder="Your full name" className="form-input" />
                </label>
                <label className="grid gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Company</span>
                  <input type="text" placeholder="Company name" className="form-input" />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Email</span>
                  <input type="email" placeholder="you@company.com" className="form-input" />
                </label>
                <label className="grid gap-2">
                  <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Phone</span>
                  <input type="tel" placeholder="Phone number" className="form-input" />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Service Needed</span>
                <select className="form-input">
                  <option value="">Select a service area</option>
                  {companyProfile.contactPage.serviceOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Message</span>
                <textarea
                  rows="6"
                  placeholder="Outline your requirement, location, timeline, or service need."
                  className="form-input min-h-[160px] resize-y"
                />
              </label>

              <div className="pt-2">
                <button type="submit" className="btn-primary">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="grid gap-5">
          <div className="section-frame">
            <div className="eyebrow-line">
              <span className="section-divider" />
              <p className="editorial-kicker">Contact Details</p>
            </div>
            <h2 className="heading-section mt-4 max-w-lg">
              Corporate contact channels presented clearly and professionally.
            </h2>
          </div>

          <div className="section-frame">
            <div className="rail-list">
              {companyProfile.contactDetails.map((item) => (
                <div key={item.label} className="rail-item">
                  <p className="text-[0.66rem] uppercase tracking-[0.3em] text-brand-gold">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default ContactPage
