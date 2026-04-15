import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { useAuth } from "../state/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [authMode, setAuthMode] = React.useState<"selection" | "user">("selection");
  const [showPassword, setShowPassword] = React.useState(false);

  if (authMode === "selection") {
    return (
      <div className="min-h-screen flex flex-col bg-surface text-on-surface">
        <TopNav mode="login" />
        <main className="flex-grow flex items-center justify-center relative px-6 py-24 overflow-hidden">
          {/* Ambient Background Layer (Same as form for consistency) */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#333535 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="w-full max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mb-4 tracking-tighter">
                Sovereign <span className="text-primary font-bold">Authentication</span>
              </h1>
              <p className="text-on-surface-variant font-body text-sm md:text-base max-w-lg mx-auto uppercase tracking-[0.2em] opacity-80">
                Identify your authorized access pathway
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User Selection Card */}
              <button
                onClick={() => setAuthMode("user")}
                className="group relative p-8 rounded-2xl border border-outline-variant/10 bg-surface-container-high/40 backdrop-blur-2xl transition-all duration-500 hover:border-primary/50 hover:bg-primary/5 text-left overflow-hidden shadow-2xl hover:shadow-primary/5"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
                  <span className="material-symbols-outlined text-9xl">person</span>
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 shadow-inner">
                    <span className="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Citizen Access</h2>
                    <p className="text-on-surface-variant font-body text-sm mt-2 leading-relaxed">
                      Standard terminal for registered landowners and asset shareholders.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    Enter Portal <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </button>

              {/* Admin Selection Card */}
              <button
                onClick={() => navigate("/admin/login")}
                className="group relative p-8 rounded-2xl border border-outline-variant/10 bg-surface-container-high/40 backdrop-blur-2xl transition-all duration-500 hover:border-secondary/50 hover:bg-secondary/5 text-left overflow-hidden shadow-2xl hover:shadow-secondary/5"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
                  <span className="material-symbols-outlined text-9xl">shield_person</span>
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest border border-outline-variant/15 flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-500 shadow-inner">
                    <span className="material-symbols-outlined text-2xl">shield_person</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Sovereign Admin</h2>
                    <p className="text-on-surface-variant font-body text-sm mt-2 leading-relaxed">
                      Restricted executive terminal for system auditors and institutional managers.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    Engage Override <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </button>
            </div>

            <div className="mt-16 flex justify-center opacity-30 select-none">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
                <div className="text-[10px] font-mono tracking-tighter text-primary">LANDLEDGER CENTRAL GATEWAY</div>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer variant="login" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <TopNav mode="login" />

      <main className="flex-grow flex items-center justify-center relative px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#333535 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10%" cy="20%" fill="#7ad4e5" r="2"></circle>
            <circle cx="85%" cy="15%" fill="#7ad4e5" r="2"></circle>
            <circle cx="90%" cy="80%" fill="#7ad4e5" r="2"></circle>
            <circle cx="5%" cy="75%" fill="#7ad4e5" r="2"></circle>
            <path d="M 10% 20% L 30% 40% L 20% 60% L 10% 20%" fill="none" stroke="#7ad4e5" strokeWidth="0.5"></path>
            <path d="M 85% 15% L 70% 35% L 90% 50% L 85% 15%" fill="none" stroke="#7ad4e5" strokeWidth="0.5"></path>
          </svg>
        </div>

        <div className="w-full max-w-md relative z-10">
          <div className="rounded-lg p-10 shadow-2xl border border-outline-variant/10 bg-surface-container-high/40 backdrop-blur-2xl relative overflow-hidden">
            {/* Back Button */}
            <button
              onClick={() => setAuthMode("selection")}
              className="group mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors transition-transform duration-200 active:scale-95"
            >
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Return to Selector
            </button>

            {/* Form decorative corner */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 blur-2xl rounded-full"></div>
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest rounded-2xl mb-6 shadow-inner border border-outline-variant/15">
                <span className="material-symbols-outlined text-primary text-3xl" aria-hidden="true" style={{ fontVariationSettings: "'FILL' 1" as unknown as string }}>
                  lock
                </span>
              </div>
              <h1 className="text-3xl font-bold font-headline text-on-surface mb-2 tracking-tight">Citizen Access Hub</h1>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Enter your secure credentials to manage your property portfolio.
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
                <label className="text-xs uppercase tracking-widest text-outline font-bold ml-1" htmlFor="identity">
                  Credential ID
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">
                      fingerprint
                    </span>
                  </div>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-md py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-body"
                    id="identity"
                    placeholder="Email or Username"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs uppercase tracking-widest text-outline font-bold" htmlFor="password">
                    Security Key
                  </label>
                  <button
                    type="button"
                    onClick={() => navigate("/secure-access")}
                    className="text-xs text-primary/70 hover:text-primary transition-colors font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors text-xl" aria-hidden="true">
                      key
                    </span>
                  </div>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-md py-4 pl-12 pr-12 text-on-surface placeholder:text-outline/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-body"
                    id="password"
                    placeholder="••••••••••••"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <button
                      className="text-outline hover:text-on-surface transition-colors active:scale-95"
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label="Toggle password visibility"
                    >
                      <span className="material-symbols-outlined text-xl" aria-hidden="true">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-md shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200 font-headline tracking-wide flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-xl" aria-hidden="true">
                    verified_user
                  </span>
                  Authenticate Entry
                </button>
                <div className="flex items-center gap-4 py-2">
                  <div className="h-px flex-grow bg-outline-variant/20"></div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-outline font-bold">Protocol</span>
                  <div className="h-px flex-grow bg-outline-variant/20"></div>
                </div>
                <button
                  className="w-full py-4 bg-transparent border border-outline-variant/30 text-on-surface font-semibold rounded-md hover:bg-surface-container-highest transition-colors active:scale-[0.98] duration-200 font-body text-sm"
                  type="button"
                  onClick={() => navigate("/secure-access-enhanced")}
                >
                  Request Identity Access
                </button>
              </div>
            </form>

            <div className="mt-10 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold">Node: LDG-7412</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">
                  encrypted
                </span>
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold">AES-256 Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer variant="login" />
    </div>
  );
}

