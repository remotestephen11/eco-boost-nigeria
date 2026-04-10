import { companyProfile } from '../data/site'

function ContactPage() {
  return (
    <div className="section-grid">
      <section className="section-shell overflow-hidden" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-center">
          <div>
            <p className="section-eyebrow">Contact</p>
            <h1 className="heading-display mt-4 max-w-4xl">
              {companyProfile.contactPage.heroTitle}
            </h1>
            <p className="body-copy mt-4 max-w-3xl">
              {companyProfile.contactPage.heroText}
            </p>
          </div>

          <div className="premium-card">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold">
              Response Intent
            </p>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              Use this page for formal inquiries relating to procurement support, inspection services, maintenance coordination, advisory scope, or broader operational requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.78fr)]">
        <section className="section-shell" data-reveal style={{ '--reveal-delay': '90ms' }}>
          <p className="section-eyebrow">Inquiry Form</p>
          <h2 className="heading-section mt-4 max-w-2xl">
            Submit a structured request for service discussion.
          </h2>

          <form className="mt-7 grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Name</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-accent/40 focus:bg-white/[0.05]"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Company</span>
                <input
                  type="text"
                  placeholder="Company name"
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-accent/40 focus:bg-white/[0.05]"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-accent/40 focus:bg-white/[0.05]"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Phone</span>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-accent/40 focus:bg-white/[0.05]"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-[0.72rem] uppercase tracking-[0.24em] text-text-muted">Service Needed</span>
              <select className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition focus:border-accent/40 focus:bg-white/[0.05]">
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
                className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted/60 focus:border-accent/40 focus:bg-white/[0.05]"
              />
            </label>

            <div className="pt-2">
              <button type="submit" className="btn-primary">
                Send Inquiry
              </button>
            </div>
          </form>
        </section>

        <section className="section-shell" data-reveal style={{ '--reveal-delay': '130ms' }}>
          <p className="section-eyebrow">Contact Details</p>
          <h2 className="heading-section mt-4">
            Corporate contact channels presented clearly and professionally.
          </h2>
          <div className="mt-7 grid gap-4">
            {companyProfile.contactDetails.map((item) => (
              <div key={item.label} className="premium-card">
                <p className="text-[0.68rem] uppercase tracking-[0.26em] text-brand-gold">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}

export default ContactPage
