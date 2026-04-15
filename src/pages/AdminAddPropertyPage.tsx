import React from "react";
import { useNavigate } from "react-router-dom";

export function AdminAddPropertyPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    ownerName: "",
    ownerPhone: "",
    propertyId: "",
    city: "",
    surveyNo: "",
    landmark: "",
    landTax: "0",
    loanAmt: "0"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property submitted:", formData);
    navigate("/admin/dashboard");
  };

  const handleDiscard = () => {
    navigate("/admin/dashboard");
  };

  return (
    <div className="dark">
      <div className="bg-surface text-on-surface font-body overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Simulation: Admin Dashboard Content */}
        <main className="fixed inset-0 w-full h-full opacity-30 saturate-50 blur-xl pointer-events-none">
          <nav className="flex justify-between items-center px-12 py-4 w-full bg-[#121414]/70">
            <div className="text-xl font-bold tracking-tighter text-[#e2e2e2] uppercase">Sovereign Intelligence</div>
            <div className="flex gap-8">
              <span className="text-[#7ad4e5]">Portfolio</span>
              <span className="text-[#e2e2e2]/60">Vault</span>
              <span className="text-[#e2e2e2]/60">Intelligence</span>
            </div>
          </nav>
          <div className="p-12 grid grid-cols-3 gap-8">
            <div className="h-64 bg-surface-container-low rounded-lg"></div>
            <div className="h-64 bg-surface-container-low rounded-lg"></div>
            <div className="h-64 bg-surface-container-low rounded-lg"></div>
            <div className="col-span-2 h-96 bg-surface-container-low rounded-lg"></div>
            <div className="h-96 bg-surface-container-low rounded-lg"></div>
          </div>
        </main>

        {/* Focused Overlay (Digital Vault Modal) */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 sm:p-12 bg-surface-dim/40 backdrop-blur-sm">
          <div className="glass-panel w-full max-w-4xl max-h-[921px] overflow-y-auto rounded-xl border border-outline-variant/15 shadow-2xl flex flex-col" style={{
            background: "rgba(26, 28, 28, 0.7)",
            backdropFilter: "blur(40px)"
          }}>
            {/* Modal Header */}
            <header className="flex justify-between items-start p-8 border-b border-outline-variant/10">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  <h1 className="text-3xl font-headline font-extrabold tracking-tighter uppercase text-on-surface">Secure Asset Intake</h1>
                </div>
                <p className="text-on-surface-variant font-label text-sm tracking-widest uppercase opacity-60">Authentication Level: 4 Clearance Required</p>
              </div>
              <button onClick={handleDiscard} className="p-2 hover:bg-surface-container-highest rounded-full transition-all duration-300">
                <span className="material-symbols-outlined text-outline">close</span>
              </button>
            </header>

            {/* Intake Form Content */}
            <form className="p-8 md:p-12 space-y-16" onSubmit={handleSubmit}>
              {/* Section 1: Owner Information */}
              <section className="space-y-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-primary font-headline text-lg font-bold">01</span>
                  <h2 className="font-headline text-xl font-bold tracking-tight text-secondary">Owner Information</h2>
                  <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="space-y-2">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Full Legal Owner Name</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface rounded-md py-3 px-4 transition-all duration-200"
                      placeholder="Entry required"
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Registered Phone Number</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface rounded-md py-3 px-4 transition-all duration-200"
                      placeholder="+X-XXX-XXX-XXXX"
                      type="tel"
                      name="ownerPhone"
                      value={formData.ownerPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>

              {/* Section 2: Location Data */}
              <section className="space-y-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-primary font-headline text-lg font-bold">02</span>
                  <h2 className="font-headline text-xl font-bold tracking-tight text-secondary">Location Data</h2>
                  <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Property ID</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface rounded-md py-3 px-4 transition-all duration-200"
                      placeholder="PID-0000"
                      type="text"
                      name="propertyId"
                      value={formData.propertyId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Administrative City</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface rounded-md py-3 px-4 transition-all duration-200"
                      placeholder="City"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Survey No.</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface rounded-md py-3 px-4 transition-all duration-200"
                      placeholder="S-00/XX"
                      type="text"
                      name="surveyNo"
                      value={formData.surveyNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Specific Landmark</label>
                    <input
                      className="w-full bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-1 focus:ring-primary text-on-surface rounded-md py-3 px-4 transition-all duration-200"
                      placeholder="Description of vicinity"
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>

              {/* Section 3: Financial Ledger */}
              <section className="space-y-8">
                <div className="flex items-baseline gap-4">
                  <span className="text-primary font-headline text-lg font-bold">03</span>
                  <h2 className="font-headline text-xl font-bold tracking-tight text-secondary">Financial Ledger</h2>
                  <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
                </div>
                <div className="bg-surface-container-low p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Land Tax Amt</label>
                      <span className="material-symbols-outlined text-sm text-primary">payments</span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-mono">$</span>
                      <input
                        className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary text-on-surface rounded-md py-3 pl-8 pr-4 transition-all duration-200"
                        placeholder="0.00"
                        type="number"
                        name="landTax"
                        value={formData.landTax}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="block font-label text-xs font-bold uppercase tracking-widest text-outline">Loan Amt (Outstanding)</label>
                      <span className="material-symbols-outlined text-sm text-tertiary">account_balance</span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-mono">$</span>
                      <input
                        className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary text-on-surface rounded-md py-3 pl-8 pr-4 transition-all duration-200"
                        type="number"
                        name="loanAmt"
                        value={formData.loanAmt}
                        onChange={handleInputChange}
                      />
                    </div>
                    <p className="text-[10px] text-outline italic">Default value is 0 for debt-free assets</p>
                  </div>
                </div>
              </section>

              {/* Action Footer */}
              <footer className="pt-8 flex flex-col items-center gap-8 border-t border-outline-variant/10">
                <div className="flex flex-col items-center text-center gap-3 text-on-surface-variant/60">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                    <span className="font-label text-xs font-bold uppercase tracking-widest text-primary">Security Verified</span>
                  </div>
                  <p className="font-label text-xs max-w-md leading-relaxed">
                    Data entered will be encrypted and committed to the titanium-grade property ledger. Changes are permanent once verified.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button
                    className="px-16 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-[0.2em] rounded-md text-sm transition-all duration-300 active:scale-95 hover:shadow-[0_0_45px_rgba(122,212,229,0.6)]"
                    style={{ boxShadow: "0 0 30px rgba(122,212,229,0.4)" }}
                    type="submit"
                  >
                    Submit Asset to Ledger
                  </button>
                </div>
                <button
                  className="text-on-surface-variant/40 hover:text-on-surface text-xs font-label uppercase tracking-widest transition-colors"
                  type="button"
                  onClick={handleDiscard}
                >
                  Discard Entry
                </button>
              </footer>
            </form>
          </div>
        </div>

        {/* Background Texture */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface to-primary/5"></div>
          <img 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
            alt="abstract server room" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0mRIWLEWCYb6QbGcsN0m0oVuKvIMVVKXL0Cy0jW5THmhyW1DIsFRpzvKxu4wb1Ajox2pH5ZHnE_9zppXs4VQL5LPmVq-EEnoCN3uPoiCgzli1Ha5VKbqsbureE8pJy9J4mzyAKDHaRQFVUu41zLi9_aRe_1aU0nAnNq9xsQf-kAXEUaxCG2V8zk69UII8ZK1TSVVksufik__00yc5oUPNpR5TUgB5LHMBWNKmQ2NjCDn2x0jnRM7OPQsj4unqX3mXR7_Vz4yQgCaC"
          />
        </div>
      </div>
    </div>
  );
}
