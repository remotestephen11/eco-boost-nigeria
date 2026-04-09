import logo from '../assets/eco-boost-logo.jpeg'

function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
        <img
          src={logo}
          alt="Eco Boost Nigeria Limited logo"
          className={compact ? 'h-11 w-11 rounded-xl object-cover' : 'h-14 w-14 rounded-xl object-cover'}
        />
      </div>
      <div className="min-w-0">
        <p className="text-[0.65rem] uppercase tracking-[0.42em] text-brand-green">
          Eco Boost
        </p>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text">
          Nigeria Limited
        </p>
      </div>
    </div>
  )
}

export default BrandLogo
