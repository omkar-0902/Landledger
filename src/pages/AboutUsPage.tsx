import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";

export function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-body text-on-surface antialiased">
      <TopNav mode="about" />

      <main className="relative">
        <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden" id="intelligence">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
              alt="Monolithic modern skyscraper with glass facade reflecting a dark evening sky, high contrast architectural photography with teal tones"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Sx_CLvU3OHumu2G70MyLFzNLMkRgi6Q-8HWexHi8M6-t2kEY3ZN6OuO1OL5yli4mt-Z6WSmhVgkWAb7OptkYY1xCW2kGN8QSgU2F0qqCYo4D2GLzFDht1XBuu1LK376nWD03w6Sz1uKxhnbss5EZ4_px1BWjg3vx3NlbpkzF9BMd0uxcEX-ahbuaj4vKD_PM6ytgP62UOsXWtkw8y_I6COqfn2hWFhxwpybunvidBZZWXK9Vl2U67sXfWvVKpK-P9V3VsN5aWLco"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/80 to-surface"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8">
                The Mission for Transparent Sovereignty
              </span>
              <h1 className="text-5xl md:text-8xl font-extrabold font-headline text-on-surface leading-[1.1] tracking-tighter mb-10">
                Architecting the <span className="text-primary">Digital Trust</span> for Global Land.
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
                LandLedger is the definitive protocol for property intelligence, transforming opaque data into sovereign assets through immutable
                verification.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-surface-container-low" id="portfolio">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-end mb-24">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold font-headline mb-6">The Crisis of Ambiguity</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Global real estate remains one of the last frontiers of fragmented information. Opaque property records, hidden encumbrances, and
                  manual verification processes create systemic risk that costs investors billions in lost value and litigation.
                </p>
              </div>
              <div className="md:w-1/2 h-[1px] bg-outline-variant/30 hidden md:block mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg bg-surface-container shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary mb-4" aria-hidden="true">
                  warning
                </span>
                <h3 className="text-xl font-bold mb-3">Hidden Liens</h3>
                <p className="text-on-surface-variant font-light">
                  Undisclosed financial obligations that jeopardize asset ownership and transferability.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-surface-container shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary mb-4" aria-hidden="true">
                  history_edu
                </span>
                <h3 className="text-xl font-bold mb-3">Legacy Forgery</h3>
                <p className="text-on-surface-variant font-light">
                  Physical documents susceptible to manipulation and catastrophic administrative errors.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-surface-container shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary mb-4" aria-hidden="true">
                  cloud_off
                </span>
                <h3 className="text-xl font-bold mb-3">Data Silos</h3>
                <p className="text-on-surface-variant font-light">
                  Fragmented municipal records that prevent real-time risk assessment and liquidity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 px-6 relative overflow-hidden" id="market">
          <div className="absolute -right-20 top-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight">The Digital Vault Solution</h2>
              <p className="text-on-surface-variant text-xl max-w-3xl mx-auto font-light">
                We leverage cryptographic truth and high-fidelity intelligence to secure the world's most valuable asset class.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
              <div className="md:col-span-8 bg-surface-container-high rounded-lg p-10 flex flex-col justify-between overflow-hidden relative group">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 font-headline">Immutable Ledger</h3>
                  <p className="text-on-surface-variant max-w-md leading-relaxed">
                    Every transaction, lien, and survey is anchored to a sovereign digital record. Once verified, it is permanent, providing a chain
                    of custody that cannot be altered or obscured.
                  </p>
                </div>
                <div className="mt-12 flex gap-4">
                  <div className="px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-bold shadow-lg shadow-primary/20 cursor-pointer transition-transform hover:scale-105 active:scale-95">
                    Explore Protocol
                  </div>
                </div>
                <img
                  className="absolute right-[-10%] bottom-[-10%] w-2/3 h-2/3 object-contain opacity-20 group-hover:scale-110 transition-transform duration-700"
                  alt="Abstract visualization of blockchain nodes and cryptographic data streams in a deep blue and teal digital space"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIIHAhY1IHB6reLT3nxsepIDUzOmj3Nb0x3iKe7J9JdSrXhzBwMPjicWlNVFI5QiEwv4mVXtAS4x3hKFtZWiIfUxfOzxgbnQlWz3PLQlawtT49csuRK2hxiLxQNqDJT-OtdhPC8eQLSGDUNVrW63JNlaJvwbev9RkQuHj98TVBf8cWF5nAQ54dIakgSfSAGho4xTrQOtsmNwx_Iq1TUgud09suTojb3v9eNqLx51wmMob3GQdmUs-CQTu_hEoQDWVQDYLcs6BqA0T"
                />
              </div>
              <div className="md:col-span-4 bg-primary-container/20 rounded-lg p-10 border border-primary/20 flex flex-col justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
                  <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" as unknown as string }}>
                    security
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-headline">Vault Security</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Military-grade encryption for all private property documentation and intelligence reports.
                </p>
              </div>
              <div className="md:col-span-4 bg-surface-container-low rounded-lg p-10 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2 font-headline">Real-time Risk</h3>
                <p className="text-on-surface-variant text-sm">
                  Automated assessment engines monitoring global registries for instant status changes.
                </p>
              </div>
              <div className="md:col-span-8 bg-surface-container-highest rounded-lg p-10 flex items-center justify-between gap-8 group">
                <div className="max-w-sm">
                  <h3 className="text-2xl font-bold mb-4 font-headline">Ownership Verification</h3>
                  <p className="text-on-surface-variant text-sm">
                    Instant cross-referencing of titles against satellite data and legal records.
                  </p>
                </div>
                <div className="hidden md:block w-32 h-32 rounded-lg bg-surface/50 border border-outline-variant/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-5xl" aria-hidden="true">
                    verified_user
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 px-6 bg-surface-container-lowest" id="advisory">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="space-y-8">
                <div className="w-12 h-0.5 bg-primary mb-12"></div>
                <h2 className="text-5xl font-bold font-headline tracking-tighter">Core Principles of Sovereignty</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Our foundation is built on three unshakeable pillars that define the future of land intelligence.
                </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="text-primary text-xs font-bold tracking-widest uppercase mb-2">01. Security</div>
                  <h4 className="text-2xl font-bold font-headline">Zero-Knowledge Integrity</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Protecting the privacy of owners while proving the validity of assets. We secure data at the protocol level, ensuring no single
                    point of failure.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-primary text-xs font-bold tracking-widest uppercase mb-2">02. Transparency</div>
                  <h4 className="text-2xl font-bold font-headline">Radical Open Ledger</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Eliminating the 'black box' of land titles. Publicly verifiable verification paths for every recorded transaction.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="text-primary text-xs font-bold tracking-widest uppercase mb-2">03. Precision</div>
                  <h4 className="text-2xl font-bold font-headline">High-Fidelity Intelligence</h4>
                  <p className="text-on-surface-variant font-light leading-relaxed">
                    Moving beyond 'close enough.' We integrate sub-meter satellite imagery with legal geofencing for absolute boundary certainty.
                  </p>
                </div>
                <div className="p-8 bg-surface-container-high rounded-xl border border-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-xs uppercase tracking-widest text-on-surface-variant">Verification Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden relative p-16 md:p-24 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-surface-container-high z-0"></div>
            <div className="absolute inset-0 opacity-20 z-0">
              <img
                className="w-full h-full object-cover"
                alt="Digital representation of planet earth with illuminated network connections, high-tech global connectivity theme"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4S4bHP5mJhx7Cq4FWcpD2AVVDZJnDjwnhzfi4FdkcYdj9hYg513PQJXKI-NBmfA_ELDzA15HKvJjIFoKU8dZyytLnT78VCcAc6vjqPILQpuzlFL95flSJjxku45_66-vuGWTkecal9U3wwD4V5CzoszUNhgx_2pFh_zZ_D3uFpBRsm06DXZ348cS7dkUW_hrjndmDViDpLr-SshaUqmw1JhboNRGwQlpWKde3Y9OP8SCx24vEnTSBhnAlA374JfVQJNKcwk7OxPH2"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 tracking-tighter">Ready to secure your sovereignty?</h2>
              <p className="text-lg text-on-surface-variant mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Join the world's leading institutions and private investors in building a transparent future for property ownership.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  type="button"
                  onClick={() => navigate("/secure-access-enhanced")}
                  className="bg-primary hover:bg-primary/90 text-on-primary px-10 py-4 rounded-md font-bold transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
                >
                  Initialize Terminal
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/secure-access")}
                  className="border border-outline-variant hover:border-primary px-10 py-4 rounded-md font-bold transition-all backdrop-blur-sm active:scale-[0.98]"
                >
                  View Security Protocol
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="about" />
    </div>
  );
}

