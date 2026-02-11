import Navbar from "@/components/Navbar";
import AstonMartinValkyri from "@/components/Aston_Martin_Valkyri";
import { carData } from "@/data/carData";

/* ── Icon components ── */
function IconAero() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M4 36L24 8l20 28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M10 36L24 14l14 22" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="4" y1="36" x2="44" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function IconEngine() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.6" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={angle}
          x1="24"
          y1="8"
          x2="24"
          y2="12"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          transform={`rotate(${angle} 24 24)`}
        />
      ))}
    </svg>
  );
}

function IconHybrid() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M28 4L18 24h12L20 44" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    </svg>
  );
}

function IconChassis() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="14" width="36" height="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="24" y1="14" x2="24" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="12" cy="34" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="36" cy="34" r="3" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function IconCockpit() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <ellipse cx="24" cy="24" rx="14" ry="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="24" cy="24" rx="8" ry="5" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="24" y1="14" x2="24" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function IconSuspension() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M8 16L16 32L24 16L32 32L40 16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="8" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="8" cy="36" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="40" cy="36" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  aero: IconAero,
  engine: IconEngine,
  hybrid: IconHybrid,
  chassis: IconChassis,
  cockpit: IconCockpit,
  suspension: IconSuspension,
};

/* ── Page ── */
export default function Page() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* ═══════════════ SCROLLYTELLING HERO ═══════════════ */}
      <AstonMartinValkyri />

      {/* ═══════════════ TRANSITION DIVIDER ═══════════════ */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-obsidian to-black" />
        <div className="relative flex items-center justify-center gap-4">
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-pagani-gold/40" />
          <div className="w-2 h-2 border border-pagani-gold/40 rotate-45" />
          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-pagani-gold/40" />
        </div>
      </div>

      {/* ═══════════════ TECHNICAL SPECS GRID ═══════════════ */}
      <section id="specifications" className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-black">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 border border-pagani-gold/60 rotate-45" />
              <p className="font-display text-[9px] tracking-[0.5em] text-pagani-gold/60 uppercase">
                Technical Data
              </p>
              <div className="w-2 h-2 border border-pagani-gold/60 rotate-45" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[0.06em] uppercase text-white">
              Specifications
            </h2>
            <div className="gold-divider-center w-16 mx-auto mt-6" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {carData.specs.map((spec, i) => (
              <div
                key={spec.label}
                className="group relative p-6 md:p-8 bg-carbon-gray/30 border border-white/5 hover:border-pagani-gold/20 transition-all duration-500"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-pagani-gold/20 group-hover:border-pagani-gold/50 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-pagani-gold/20 group-hover:border-pagani-gold/50 transition-colors duration-500" />

                {/* Index */}
                <p className="font-display text-[10px] text-pagani-gold/30 tracking-[0.3em] mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>

                {/* Label */}
                <p className="spec-label mb-2">{spec.label}</p>

                {/* Value */}
                <p className="font-body text-lg md:text-xl font-semibold text-white tracking-wide mb-2">
                  {spec.value}
                </p>

                {/* Detail */}
                <p className="text-xs text-white/35 tracking-wide">{spec.detail}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-pagani-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURE BREAKDOWN ═══════════════ */}
      <section id="design" className="relative py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-obsidian">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(212,175,55,0.3) 49px, rgba(212,175,55,0.3) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(212,175,55,0.3) 49px, rgba(212,175,55,0.3) 50px)",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 border border-pagani-gold/60 rotate-45" />
              <p className="font-display text-[9px] tracking-[0.5em] text-pagani-gold/60 uppercase">
                Engineering
              </p>
              <div className="w-2 h-2 border border-pagani-gold/60 rotate-45" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[0.06em] uppercase text-white">
              Feature Breakdown
            </h2>
            <div className="gold-divider-center w-16 mx-auto mt-6" />
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {carData.features.map((feature) => {
              const Icon = iconMap[feature.icon] || IconEngine;
              return (
                <div
                  key={feature.title}
                  className="group relative p-8 md:p-10 bg-obsidian hover:bg-carbon-gray/20 transition-all duration-500"
                >
                  {/* Icon */}
                  <div className="text-pagani-gold/50 group-hover:text-pagani-gold/80 transition-colors duration-500 mb-6">
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xs tracking-[0.2em] uppercase text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-8 h-[1px] bg-pagani-gold/30 group-hover:w-12 group-hover:bg-pagani-gold/60 transition-all duration-500 mb-4" />

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed text-white/45 group-hover:text-white/60 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BAND ═══════════════ */}
      <section id="inquire" className="relative py-20 md:py-28 px-6 bg-black overflow-hidden">
        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="w-full h-[1px] bg-pagani-gold/40 animate-scan-line" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-display text-[9px] tracking-[0.5em] text-pagani-gold/60 uppercase mb-6">
            Limited Production
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.06em] uppercase text-white mb-4">
            Begin Your Acquisition
          </h2>
          <p className="font-body text-sm md:text-base text-white/40 tracking-wide max-w-xl mx-auto mb-10">
            With production limited to 150 road-legal units, each Valkyrie is allocated by invitation.
            Contact Aston Martin Special Sales to begin the process.
          </p>
          <a
            href="#"
            className="inline-block font-display text-[10px] md:text-xs tracking-[0.35em] uppercase px-10 py-4 border border-pagani-gold/40 text-pagani-gold hover:bg-pagani-gold hover:text-black transition-all duration-500 relative group"
          >
            <span className="relative z-10">Request Private Consultation</span>
          </a>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="relative border-t border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Upper footer */}
          <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 border border-pagani-gold/40 flex items-center justify-center rotate-45">
                  <span className="font-display text-[7px] text-pagani-gold -rotate-45 tracking-[0.15em]">
                    AM
                  </span>
                </div>
                <div>
                  <p className="font-display text-[9px] tracking-[0.3em] text-white/80 uppercase">
                    Aston Martin
                  </p>
                  <p className="font-display text-[7px] tracking-[0.25em] text-pagani-gold/60 uppercase">
                    Valkyrie
                  </p>
                </div>
              </div>
              <p className="text-xs text-white/25 leading-relaxed max-w-xs">
                A road-legal Formula 1–inspired hypercar engineered in collaboration with Red Bull Advanced Technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-display text-[9px] tracking-[0.3em] text-pagani-gold/50 uppercase mb-4">
                Explore
              </p>
              <div className="space-y-2">
                {["Overview", "Design", "Performance", "Specifications", "Inquire"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="block text-xs text-white/30 hover:text-pagani-gold/70 transition-colors duration-300 tracking-wide"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="font-display text-[9px] tracking-[0.3em] text-pagani-gold/50 uppercase mb-4">
                Contact
              </p>
              <div className="space-y-2">
                <p className="text-xs text-white/30 tracking-wide">Aston Martin Lagonda Ltd</p>
                <p className="text-xs text-white/30 tracking-wide">Banbury Road, Gaydon</p>
                <p className="text-xs text-white/30 tracking-wide">Warwickshire CV35 0DB, UK</p>
                <p className="text-xs text-pagani-gold/40 tracking-wide mt-4">
                  specialsales@astonmartin.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-white/20 tracking-widest uppercase">
              © {new Date().getFullYear()} Aston Martin Lagonda Limited. All rights reserved.
            </p>
            <p className="font-display text-[8px] tracking-[0.4em] text-pagani-gold/20 uppercase">
              Engineered Beyond Road Limits
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
