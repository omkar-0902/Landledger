import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";
import { LockedText } from "../components/Locked";
import { TopNav } from "../components/TopNav";
import { landImages, propertyDetails } from "../data/property";
import { useAuth } from "../state/auth";

export function LandingGuestPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [loginPromptOpen, setLoginPromptOpen] = React.useState(false);
  const { property } = propertyDetails;

  const locked = !isAuthenticated;

  const openLocked = React.useCallback(() => {
    setLoginPromptOpen(true);
  }, []);

  return (
    <div className="min-h-screen">
      <TopNav mode="guest" />

      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/80 to-surface z-10"></div>
          <img
            className="w-full h-full object-cover scale-105 opacity-40"
            alt="Cinematic wide shot of high-end architectural estate at twilight with soft interior lights and deep blue sky"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyls_jV-mEOYHTeIcZWdqnKmd9piS6y8T3npZX5Vw1187Dv56-XF3uiOdM_x2j5Cz5eaxPtUHVmPdSskzUoTpAK4aTwy8WTmGexlvh5j2gcXrSlwW8cdjT8wDZSV9LqiEae2fcBVXd5M-2w49ulIMo7h--D20YW57z5ygqjou5VjslD1mk3vVCICfAuvO9IXYHr5pHmrgta5CdBnPESSmdc-Lkhva4cnbeTI4OtoU3Xw8npu-XgNKd-vrJtB8Kamth4BrgKlHEKFWl"
          />
        </div>
        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="font-headline uppercase tracking-[0.3em] text-primary text-xs font-bold">Secure Asset Intelligence</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-headline font-extrabold tracking-tight text-on-surface mb-8 leading-[0.9]">
              Verify Property.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Eliminate Risk.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light mb-12 max-w-2xl leading-relaxed">
              Access high-fidelity property intelligence through our sovereign distributed ledger. Transparent, immutable, and precise.
            </p>
            <div className="flex flex-wrap gap-6">
              <button
                type="button"
                className="px-10 py-5 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold tracking-tight hover:brightness-110 transition-all flex items-center gap-3 active:scale-[0.98]"
                onClick={() => {
                  const section = document.getElementById("listings");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                Explore Properties
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                className="px-10 py-5 rounded-md border border-outline-variant hover:bg-surface-container-low transition-all text-on-surface font-semibold active:scale-[0.98]"
                onClick={() => navigate("/about")}
              >
                System Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="listings" className="py-32 bg-surface-container-low relative scroll-mt-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Available Listings</h2>
              <p className="text-on-surface-variant text-lg">
                Public ledger entries for verified land assets. Property ID, owner name, and location require authentication.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 rounded-xl bg-surface-container-highest flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  verified
                </span>
                <span className="text-sm font-label font-medium uppercase tracking-wider">12,402 Verified Assets</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-surface rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Open land parcel with cultivated boundary lines and rural terrain"
                  src={landImages.fieldParcel}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                    Land Parcel
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-headline font-bold mb-1">Verified Land Parcel</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      location_on
                    </span>
                    <span className="text-sm font-label uppercase tracking-wide">Location protected</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Property ID</span>
                    <LockedText locked={locked} className="text-sm font-mono">
                      {property.propertyId}
                    </LockedText>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Owner Name</span>
                    <LockedText locked={locked} className="text-sm">
                      {property.ownerName}
                    </LockedText>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Location</span>
                    <LockedText locked={locked} className="text-sm">
                      {property.location}
                    </LockedText>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={locked ? openLocked : () => navigate("/property/primary")}
                  className="w-full py-4 rounded-md bg-surface-container-highest border border-outline-variant/30 text-on-surface-variant font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    {locked ? "lock" : "arrow_forward"}
                  </span>
                  View Details
                </button>
              </div>
            </div>

            <div className="group relative bg-surface rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Green land parcel with terrain and visible field divisions"
                  src={landImages.estateGrid}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-tertiary/20 backdrop-blur-md text-tertiary text-[10px] font-bold uppercase tracking-widest border border-tertiary/20">
                    Surveyed Plot
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-headline font-bold mb-1">Verified Land Parcel</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      location_on
                    </span>
                    <span className="text-sm font-label uppercase tracking-wide">Location protected</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Property ID</span>
                    <LockedText locked={locked} className="text-sm font-mono">
                      PROP002
                    </LockedText>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Owner Name</span>
                    <LockedText locked={locked} className="text-sm">
                      Kavitha M.
                    </LockedText>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Location</span>
                    <LockedText locked={locked} className="text-sm">
                      Bangalore Rural
                    </LockedText>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={locked ? openLocked : () => navigate("/property/primary")}
                  className="w-full py-4 rounded-md bg-surface-container-highest border border-outline-variant/30 text-on-surface-variant font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    {locked ? "lock" : "arrow_forward"}
                  </span>
                  View Details
                </button>
              </div>
            </div>

            <div className="group relative bg-surface rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Vast green agricultural landscape with cultivated fields stretching to the horizon under soft sunlight"
                  src={landImages.fieldParcel}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-widest">
                    Agricultural
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-headline font-bold mb-1">Verified Land Parcel</h3>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm" aria-hidden="true">
                      location_on
                    </span>
                    <span className="text-sm font-label uppercase tracking-wide">Location protected</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8 pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Property ID</span>
                    <LockedText locked={locked} className="text-sm font-mono">
                      PROP003
                    </LockedText>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Owner Name</span>
                    <LockedText locked={locked} className="text-sm">
                      Prakash Gowda
                    </LockedText>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-tighter text-outline font-bold">Location</span>
                    <LockedText locked={locked} className="text-sm">
                      Mandya, KA
                    </LockedText>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={locked ? openLocked : () => navigate("/property/primary")}
                  className="w-full py-4 rounded-md bg-surface-container-highest border border-outline-variant/30 text-on-surface-variant font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    {locked ? "lock" : "arrow_forward"}
                  </span>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-lg bg-surface-container-low p-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                <img
                  className="w-full h-full object-cover rounded-lg opacity-60"
                  alt="Digital representation of complex data networks and glowing nodes on a dark background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDMDd_atPZIIYA0d9ukiv4QlaKHSvMM3IymCJ6MWzeaB8c6wgoSZhoD0D-paPGQ_IURUJBKxvbR5EkCDN3GixhCxE4G-V463ELlMfPGRc8CiCn_fAOBh3G4gn_ksgCwNeaGLM-ZwojE-OEquED7leY_vI3t6ayyDmhMReZ5w0rHAXMCa6nF_4HVc5L9A0iVlQGKVvMR_XxJx34UML9c5jXzP9cbARjJXbbjFfnYqOthxrtw2vl2VwzXfk5FWJxrCpu5dnUHXyY-N5J"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 rounded-lg border border-outline-variant/20 max-w-xs text-center bg-[#121414]/70 backdrop-blur-xl">
                    <span className="material-symbols-outlined text-5xl text-primary mb-4" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" as unknown as string }}>
                      security
                    </span>
                    <h4 className="text-xl font-headline font-bold mb-2">Immutable Chain</h4>
                    <p className="text-sm text-on-surface-variant">
                      Every property interaction is cryptographically hashed and stored across our sovereign network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-headline uppercase tracking-widest text-primary font-bold text-sm mb-6 block">The Ledger Advantage</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold mb-8 leading-tight">Elite Precision for Property Vetting.</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">
                      shield
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Zero-Knowledge Verification</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Verify critical risk markers without exposing sensitive owner identity until the transaction layer.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" aria-hidden="true">
                      dataset
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Multi-Source Cross-Referencing</h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      Our intelligence engine aggregates satellite, municipal, and legal data in real-time.
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => navigate("/property/primary")}
                    className="group flex items-center gap-4 text-primary font-bold font-headline uppercase tracking-widest text-sm"
                  >
                    View Compliance Standards
                    <span className="h-[1px] w-8 bg-primary transition-all group-hover:w-16"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-24 bg-surface-container-lowest border-y border-outline-variant/10 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="text-3xl font-headline font-bold mb-4">Want to access full property details?</h3>
          <p className="text-on-surface-variant mb-10 text-lg">Login to access Property IDs, Owner Names, and Locations.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className="px-12 py-4 rounded-md bg-zinc-100 text-zinc-950 font-bold hover:bg-white transition-colors active:scale-[0.98]"
              onClick={() => navigate("/login")}
            >
              Login to LandLedger
            </button>
            <button
              type="button"
              className="px-12 py-4 rounded-md border border-outline-variant hover:bg-surface-container-low transition-all text-on-surface font-semibold active:scale-[0.98]"
              onClick={() => navigate("/secure-access-enhanced")}
            >
              Request Access
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <Modal open={loginPromptOpen} onClose={() => setLoginPromptOpen(false)} title="Login required">
        <p className="text-on-surface-variant leading-relaxed">
          Login to access Property IDs, Owner Names, and Locations.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            className="flex-1 px-6 py-3 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold hover:brightness-110 transition-all active:scale-[0.98]"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            type="button"
            className="flex-1 px-6 py-3 rounded-md border border-outline-variant/40 hover:bg-surface-container-low transition-all font-semibold active:scale-[0.98]"
            onClick={() => setLoginPromptOpen(false)}
          >
            Not now
          </button>
        </div>
      </Modal>
    </div>
  );
}
