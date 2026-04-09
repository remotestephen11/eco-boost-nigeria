import { companyProfile } from '../data/site'

function WhatsAppButton() {
  return (
    <a
      href={companyProfile.whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp contact"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-green/28 bg-brand-green text-white shadow-[0_16px_35px_rgba(77,144,71,0.28)] transition hover:-translate-y-0.5 hover:bg-[#58a552] sm:bottom-5 sm:right-5 sm:h-13 sm:w-13"
    >
      <span className="text-[0.92rem] font-semibold tracking-[0.1em]">WA</span>
    </a>
  )
}

export default WhatsAppButton
