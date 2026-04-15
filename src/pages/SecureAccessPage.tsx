import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../state/auth";

export function SecureAccessPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-surface-container-lowest text-on-surface selection:bg-primary/30">
      <div className="fixed inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(122, 212, 229, 0.12) 0%, rgba(18, 20, 20, 0) 80%)" }} />
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTqwf6YEya1em8aQ84Trk8Y-dbYny3v2UzsTWZhBy-or7vUS_MHtuy3OsIZOe4S-rlpopZ1l32KX3Vk03xHvaU-KkTszfr-MdtTKYfe-zMB2hzNzxIFh8FxiLxTXPN_XAGb_-E17_uz6fPuZnJ_VCuecXxFaS8HGNeBVTQwt6zhjFfhKRXntucReQBLgMzOg8Jcf2gDqnYJZRQ_ao-YBCRePChRnPl-WscRQ1tZT7-J2JV72XSPgCzG85c3znfDPQCHSfX9UJTZhpw')",
        }}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-primary/30 rounded-full blur-sm" style={{ animation: "landledger-float 6s ease-in-out infinite" }} />
        <div
          className="absolute top-[65%] right-[15%] w-3 h-3 bg-tertiary/20 rounded-full blur-md"
          style={{ animation: "landledger-float 6s ease-in-out infinite", animationDelay: "-2s" }}
        />
        <div
          className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 bg-primary/15 rounded-full"
          style={{ animation: "landledger-float 6s ease-in-out infinite", animationDelay: "-4s" }}
        />
      </div>

      <main className="flex-grow flex items-center justify-center relative px-6 py-12">
        <div className="w-full max-w-lg relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" as unknown as string }}>
                shield_with_heart
              </span>
              <span className="text-4xl font-extrabold tracking-tighter font-headline text-on-surface">LandLedger</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/30"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-outline font-bold">Sovereign Intel Node</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/30"></div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden relative shadow-2xl border border-primary/10 bg-surface-container-low/40 backdrop-blur-3xl">
            <div
              className="absolute left-0 w-full opacity-20"
              style={{ height: "1px", background: "linear-gradient(90deg, transparent, #7ad4e5, transparent)", animation: "landledger-scan 6s linear infinite" }}
            />
            <div className="p-10 md:p-12">
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold font-headline text-white mb-2">Vault Decryption</h2>
                <p className="text-on-surface-variant/70 text-xs font-medium uppercase tracking-widest leading-loose">
                  Verify identity for secure protocol access
                </p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  login();
                  navigate("/landing/logged-in");
                }}
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary/70 font-bold ml-1" htmlFor="username">
                    Operator Alias
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline/50 text-xl" aria-hidden="true">
                        account_circle
                      </span>
                    </div>
                    <input
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 rounded-md py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/30 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 font-body text-sm"
                      id="username"
                      placeholder="Username"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-primary/70 font-bold ml-1" htmlFor="email">
                    Encrypted Comms
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline/50 text-xl" aria-hidden="true">
                        alternate_email
                      </span>
                    </div>
                    <input
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 rounded-md py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/30 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 font-body text-sm"
                      id="email"
                      placeholder="Email Address"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] uppercase tracking-widest text-primary/70 font-bold ml-1" htmlFor="password">
                      Security Seed
                    </label>
                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      className="text-[10px] text-primary/50 hover:text-primary transition-colors font-bold uppercase tracking-widest"
                    >
                      Reset Key
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-outline/50 text-xl" aria-hidden="true">
                        terminal
                      </span>
                    </div>
                    <input
                      className="w-full bg-surface-container-lowest/50 border border-outline-variant/10 rounded-md py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/30 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 font-body text-sm"
                      id="password"
                      placeholder="••••••••••••"
                      required
                      type="password"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    className="w-full group relative py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-md shadow-xl overflow-hidden active:scale-[0.98] transition-all duration-200 font-headline tracking-widest flex items-center justify-center gap-3"
                    type="submit"
                  >
                    <div className="absolute inset-0 bg-white/10 -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-in-out"></div>
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      sensors
                    </span>
                    INITIALIZE VAULT
                  </button>
                </div>
              </form>

              <div className="mt-8 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-[9px] uppercase tracking-tighter text-outline/50 font-bold mb-1">Status</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#7ad4e5]"></span>
                    <span className="text-[10px] text-on-surface font-medium">LIVE</span>
                  </div>
                </div>
                <div className="w-px h-6 bg-outline-variant/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-[9px] uppercase tracking-tighter text-outline/50 font-bold mb-1">Encryption</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-primary text-[14px]" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" as unknown as string }}>
                      enhanced_encryption
                    </span>
                    <span className="text-[10px] text-on-surface font-medium uppercase tracking-tighter">AES-512</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-outline text-xs tracking-wide">
              New operator?{" "}
              <button
                type="button"
                onClick={() => navigate("/secure-access-enhanced")}
                className="text-primary font-bold hover:underline transition-all underline-offset-4 ml-1"
              >
                Request Authorization Protocol
              </button>
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-primary/5 py-10 px-12 flex flex-col items-center gap-6 z-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <button
            type="button"
            onClick={() => navigate("/secure-access")}
            className="text-outline/40 hover:text-primary transition-colors font-body text-[10px] tracking-[0.2em] uppercase font-bold"
          >
            Security Specs
          </button>
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="text-outline/40 hover:text-primary transition-colors font-body text-[10px] tracking-[0.2em] uppercase font-bold"
          >
            Data Sovereignty
          </button>
          <button
            type="button"
            onClick={() => navigate("/about#advisory")}
            className="text-outline/40 hover:text-primary transition-colors font-body text-[10px] tracking-[0.2em] uppercase font-bold"
          >
            Privacy Core
          </button>
        </div>
        <p className="text-outline/20 text-[9px] font-medium tracking-[0.5em] uppercase text-center">
          © MMXXIV Sovereign Intelligence Network • All Systems Operational
        </p>
      </footer>
    </div>
  );
}

