import React from "react";
import { useNavigate } from "react-router-dom";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  // Demo credentials
  const ADMIN_EMAIL = "admin@sovereign.secure";
  const ADMIN_PASSWORD = "secure123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("adminSession", "true");
      localStorage.setItem("adminUser", email);
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials. Try: admin@sovereign.secure / secure123");
    }
  };

  return (
    <div className="dark">
      <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Background Layer */}
        <div className="fixed inset-0 pointer-events-none opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(122, 212, 229, 0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}></div>
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Top Navigation */}
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 no-line backdrop-blur-xl bg-[#121414]/70">
          <div className="text-xl font-extrabold tracking-tighter text-[#e2e2e2] font-headline">
            Sovereign Intelligence
          </div>
          <div className="flex items-center gap-6">
            <button className="text-[#e2e2e2]/60 hover:text-[#7ad4e5] transition-colors duration-300">
              <span className="material-symbols-outlined text-xl">language</span>
            </button>
            <button className="text-[#e2e2e2]/60 hover:text-[#7ad4e5] transition-colors duration-300">
              <span className="material-symbols-outlined text-xl">help_outline</span>
            </button>
          </div>
        </nav>

        {/* Main Administrative Terminal */}
        <main className="relative z-10 w-full max-w-xl px-6">
          <div className="text-center mb-12 space-y-4">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-center glow-accent" style={{ boxShadow: "0 0 20px rgba(122, 212, 229, 0.15)" }}>
                <span className="material-symbols-outlined text-primary text-3xl">shield_person</span>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-headline font-bold tracking-tight text-on-surface">Administrative Access Terminal</h1>
              <p className="text-on-surface-variant font-body text-sm uppercase tracking-[0.15em] opacity-80">Enter secure credentials for level-1 clearance</p>
            </div>
          </div>

          <div className="glass-panel border border-outline-variant/10 rounded-lg p-8 md:p-12" style={{
            background: "rgba(26, 28, 28, 0.7)",
            backdropFilter: "blur(30px)",
            boxShadow: "0 0 20px rgba(122, 212, 229, 0.15)"
          }}>
            <form action="#" className="space-y-8" onSubmit={handleSubmit}>
              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-3 px-4 py-3 bg-error/10 border border-error/20 rounded-md">
                  <span className="material-symbols-outlined text-error text-xl">error</span>
                  <span className="text-error text-sm font-semibold">{error}</span>
                </div>
              )}

              {/* Administrative Override Status */}
              <div className="flex items-center justify-between px-4 py-3 bg-primary/5 border border-primary/20 rounded-md">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-headline font-bold text-primary tracking-[0.2em] uppercase">ADMIN OVERRIDE ACTIVE</span>
                </div>
                <span className="text-[10px] text-primary/60 font-mono tracking-widest">ST-882-SYS</span>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-outline" htmlFor="email">Terminal ID (Email)</label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">alternate_email</span>
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-md py-4 pl-12 pr-4 text-on-surface font-body focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all placeholder:text-outline/30"
                      id="email"
                      name="email"
                      placeholder="ADMIN@SOVEREIGN.SECURE"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-outline" htmlFor="password">Encryption Key (Password)</label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">key</span>
                    </span>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/10 rounded-md py-4 pl-12 pr-4 text-on-surface font-body focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all placeholder:text-outline/30"
                      id="password"
                      name="password"
                      placeholder="••••••••••••"
                      required
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className="w-full py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-extrabold text-sm tracking-[0.2em] rounded-md transition-all active:scale-[0.98] active:opacity-90"
                style={{ boxShadow: "0 0 30px -10px rgba(122,212,229,0.5)" }}
                type="submit"
              >
                DECRYPT ADMIN ACCESS
              </button>

              {/* Security Footer */}
              <div className="pt-4 flex justify-between items-center text-[10px] font-semibold tracking-widest text-outline uppercase">
                <a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
                  <span className="material-symbols-outlined text-sm">lock_reset</span>
                  Forgot Key
                </a>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/20"></span>
                  Encrypted Connection
                </div>
              </div>

            </form>
          </div>

          {/* System Node Graphic */}
          <div className="mt-12 flex flex-col items-center opacity-20 select-none">
            <div className="w-px h-12 bg-gradient-to-b from-primary/0 to-primary"></div>
            <div className="border border-primary rounded-full p-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <p className="mt-4 text-[10px] font-mono tracking-tighter text-primary">NODE ID: LANDLEDGER-MAIN-VAULT</p>
          </div>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full z-40 flex flex-col md:flex-row justify-between items-center px-12 py-8 bg-transparent">
          <div className="text-[#e2e2e2]/40 font-body text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 md:mb-0">
            © 2024 Sovereign Intelligence. Secure Administrative Terminal.
          </div>
          <div className="flex gap-8">
            <a className="text-[#e2e2e2]/40 hover:text-[#e2e2e2] transition-opacity font-body text-[10px] uppercase tracking-[0.2em] font-semibold" href="#">Security Protocol</a>
            <a className="text-[#e2e2e2]/40 hover:text-[#e2e2e2] transition-opacity font-body text-[10px] uppercase tracking-[0.2em] font-semibold" href="#">Privacy Policy</a>
            <a className="text-[#e2e2e2]/40 hover:text-[#e2e2e2] transition-opacity font-body text-[10px] uppercase tracking-[0.2em] font-semibold" href="#">System Status</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
