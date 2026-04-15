import React from "react";
import { useNavigate } from "react-router-dom";

interface Property {
  id: string;
  location: string;
  owner: string;
  status: "Verified" | "Pending" | "Flagged";
  statusIcon: string;
}

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const [properties] = React.useState<Property[]>([
    { id: "#LL-9024-XQ", location: "Dubai Marina, District 4", owner: "Al-Maktoum Assets LLC", status: "Verified", statusIcon: "location_away" },
    { id: "#LL-4412-TR", location: "Upper East Side, Block 12", owner: "Stark Real Estate Fund", status: "Pending", statusIcon: "pending" },
    { id: "#LL-1002-ZY", location: "Isle of Man, Sector 08", owner: "Unknown Holding Corp", status: "Flagged", statusIcon: "report" },
    { id: "#LL-8854-WP", location: "Victoria, Seychelles", owner: "Blue Horizon Trusts", status: "Verified", statusIcon: "domain" },
  ]);

  const handleAddProperty = () => {
    navigate("/admin/add-property");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    navigate("/admin/login");
  };

  const handleMenuOption = (option: string) => {
    console.log("Menu option clicked:", option);
  };

  return (
    <div className="dark">
      <div className="flex min-h-screen bg-stone-950 text-on-surface font-body">
        {/* SideNavBar */}
        <aside className="h-screen w-64 fixed left-0 top-0 border-r border-stone-800/20 bg-stone-950 flex flex-col p-4 space-y-6 z-50">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-stone-100 font-headline text-lg font-extrabold tracking-tighter">Admin Terminal</h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-stone-500 font-label text-[10px] uppercase tracking-widest">Vault Status: Secure</span>
            </div>
          </div>
          <nav className="flex-1 space-y-1">
            <a className="bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center gap-3 px-4 py-3 font-medium text-sm transition-transform duration-300" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span> Portfolio
            </a>
            <button onClick={() => handleMenuOption("Valuations")} className="w-full text-left text-stone-500 hover:text-stone-300 hover:bg-stone-900 flex items-center gap-3 px-4 py-3 font-medium text-sm transition-transform duration-300">
              <span className="material-symbols-outlined">payments</span> Valuations
            </button>
            <button onClick={() => handleMenuOption("Risk Intelligence")} className="w-full text-left text-stone-500 hover:text-stone-300 hover:bg-stone-900 flex items-center gap-3 px-4 py-3 font-medium text-sm transition-transform duration-300">
              <span className="material-symbols-outlined">security</span> Risk Intelligence
            </button>
            <button onClick={() => handleMenuOption("Transactions")} className="w-full text-left text-stone-500 hover:text-stone-300 hover:bg-stone-900 flex items-center gap-3 px-4 py-3 font-medium text-sm transition-transform duration-300">
              <span className="material-symbols-outlined">swap_horiz</span> Transactions
            </button>
            <button onClick={() => handleMenuOption("Documents")} className="w-full text-left text-stone-500 hover:text-stone-300 hover:bg-stone-900 flex items-center gap-3 px-4 py-3 font-medium text-sm transition-transform duration-300">
              <span className="material-symbols-outlined">description</span> Documents
            </button>
          </nav>
          <div className="pt-6 mt-6 border-t border-stone-800/20 space-y-1">
            <button onClick={() => handleMenuOption("Support")} className="w-full text-left text-stone-500 hover:text-stone-300 hover:bg-stone-900 flex items-center gap-3 px-4 py-2 text-xs font-medium uppercase tracking-widest">
              <span className="material-symbols-outlined text-lg">help_outline</span> Support
            </button>
            <button onClick={() => handleMenuOption("API")} className="w-full text-left text-stone-500 hover:text-stone-300 hover:bg-stone-900 flex items-center gap-3 px-4 py-2 text-xs font-medium uppercase tracking-widest">
              <span className="material-symbols-outlined text-lg">code</span> API
            </button>
          </div>
          <div className="mt-auto p-4 bg-surface-container-low rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-800">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">SN</div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-stone-100 truncate">System Node</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-tighter">Auth Level 09</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Canvas */}
        <main className="ml-64 flex-1 flex flex-col min-h-screen">
          {/* TopNavBar */}
          <header className="fixed top-0 left-64 right-0 z-50 bg-stone-950/70 backdrop-blur-3xl h-16 flex justify-between items-center px-8 w-full border-b border-white/5">
            <div className="flex items-center gap-8">
              <span className="text-xl font-headline font-bold tracking-tighter text-stone-100">Sovereign Intelligence</span>
              <nav className="hidden lg:flex items-center gap-6">
                <a className="text-cyan-400 border-b-2 border-cyan-400 pb-1 font-headline tracking-tight text-sm" href="#">Analytics</a>
                <button onClick={() => handleMenuOption("Audit Log")} className="text-stone-400 hover:text-stone-200 transition-colors font-headline tracking-tight text-sm">Audit Log</button>
                <button onClick={() => handleMenuOption("Security")} className="text-stone-400 hover:text-stone-200 transition-colors font-headline tracking-tight text-sm">Security</button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <span className="material-symbols-outlined text-stone-400 group-hover:text-cyan-400 transition-all cursor-pointer">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
              </div>
              <button onClick={() => handleMenuOption("Settings")} className="material-symbols-outlined text-stone-400 hover:text-stone-100 transition-all cursor-pointer">settings</button>
              <button onClick={handleAddProperty} className="ml-4 bg-gradient-to-r from-primary to-primary-container text-on-primary px-5 py-2 rounded-md font-bold text-sm tracking-tight flex items-center gap-2 transform transition-transform duration-200 active:scale-95 hover:shadow-lg">
                <span className="material-symbols-outlined text-sm">add</span> Add Property
              </button>
            </div>
          </header>

          {/* Main Workspace */}
          <div className="mt-16 p-10 space-y-12 max-w-7xl mx-auto w-full">
            {/* Hero Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group hover:bg-surface-container-high transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-7xl text-primary">account_balance</span>
                </div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">Total Managed Assets</p>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-headline text-5xl font-extrabold text-on-surface tracking-tighter">1,482</h2>
                  <span className="text-primary text-sm font-semibold">+12.4%</span>
                </div>
                <div className="mt-6 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary"></div>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group hover:bg-surface-container-high transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-7xl text-tertiary">pending_actions</span>
                </div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">Pending Verifications</p>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-headline text-5xl font-extrabold text-on-surface tracking-tighter">42</h2>
                  <span className="text-tertiary text-sm font-semibold">Priority</span>
                </div>
                <div className="mt-6 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-tertiary"></div>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden group hover:bg-surface-container-high transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-7xl text-error">gpp_maybe</span>
                </div>
                <p className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">Flagged Risks</p>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-headline text-5xl font-extrabold text-on-surface tracking-tighter">07</h2>
                  <span className="text-error text-sm font-semibold">Immediate</span>
                </div>
                <div className="mt-6 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-1/12 h-full bg-error"></div>
                </div>
              </div>
            </section>

            {/* Properties Workspace */}
            <section className="space-y-8">
              <div className="flex items-end justify-between border-b border-outline-variant/15 pb-6">
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Existing Properties</h3>
                  <p className="text-stone-500 font-body mt-1">Real-time ledger of verified land assets and ownership chains.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-surface-container-lowest border border-outline-variant/10 rounded-lg px-4 py-2">
                    <span className="material-symbols-outlined text-stone-500 text-lg mr-2">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm text-stone-300 w-64 placeholder:text-stone-600" placeholder="Search ID or Owner..." type="text" />
                  </div>
                  <button onClick={() => handleMenuOption("Filter")} className="bg-surface-container-high hover:bg-surface-container-highest text-stone-300 px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
                    <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                  </button>
                </div>
              </div>

              {/* Properties List */}
              <div className="grid grid-cols-1 gap-4">
                {properties.map((property) => (
                  <div key={property.id} className="bg-surface-container-low hover:bg-surface-container-high transition-all p-1 rounded-xl group cursor-pointer border border-transparent hover:border-outline-variant/20">
                    <div className="flex items-center gap-8 p-4">
                      <div className="w-16 h-16 bg-stone-900 rounded-lg flex items-center justify-center border border-stone-800">
                        <span
                          className="material-symbols-outlined"
                          style={{
                            color:
                              property.status === "Verified"
                                ? "#7ad4e5"
                                : property.status === "Pending"
                                  ? "#ffb77c"
                                  : "#ffb4ab",
                            fontVariationSettings: "'FILL' 1"
                          }}
                        >
                          {property.statusIcon}
                        </span>
                      </div>
                      <div className="flex-1 grid grid-cols-4 gap-6">
                        <div>
                          <p className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1">Property ID</p>
                          <p className="text-stone-200 font-mono text-sm">{property.id}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1">Location</p>
                          <p className="text-stone-200 text-sm font-medium">{property.location}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-outline font-bold uppercase tracking-widest mb-1">Owner</p>
                          <p className="text-stone-200 text-sm font-medium">{property.owner}</p>
                        </div>
                        <div className="flex items-center justify-end pr-8">
                          <span
                            className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tighter border"
                            style={{
                              backgroundColor:
                                property.status === "Verified"
                                  ? "rgba(122, 212, 229, 0.1)"
                                  : property.status === "Pending"
                                    ? "rgba(255, 183, 124, 0.1)"
                                    : "rgba(255, 180, 171, 0.1)",
                              color:
                                property.status === "Verified"
                                  ? "#7ad4e5"
                                  : property.status === "Pending"
                                    ? "#ffb77c"
                                    : "#ffb4ab",
                              borderColor:
                                property.status === "Verified"
                                  ? "rgba(122, 212, 229, 0.2)"
                                  : property.status === "Pending"
                                    ? "rgba(255, 183, 124, 0.2)"
                                    : "rgba(255, 180, 171, 0.2)"
                            }}
                          >
                            {property.status}
                          </span>
                        </div>
                      </div>
                      <button onClick={() => handleMenuOption(`More options for ${property.id}`)} className="p-2 text-stone-600 hover:text-stone-200 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Visualization Section */}
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 bg-surface-container-low rounded-lg p-8">
                <h4 className="font-headline text-lg font-bold text-on-surface mb-6">Valuation Trends</h4>
                <div className="aspect-video relative overflow-hidden rounded-xl bg-surface-container-lowest flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-stone-500 text-xs font-mono mb-2">LIVE FEED ACTIVATED</p>
                    <p className="text-cyan-400 font-headline font-bold text-xl">Aggregated Market Index</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-surface-container-low p-8 rounded-lg border-l-4 border-primary">
                  <p className="font-label text-xs uppercase tracking-widest text-outline mb-2">Security Protocol</p>
                  <h4 className="font-headline text-xl font-bold text-on-surface leading-tight">Quantum Ledger Verification Active</h4>
                  <p className="text-stone-500 text-sm mt-4 leading-relaxed italic">"Every asset is tracked across 4 nodes to ensure 99.99% data integrity."</p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-lg relative overflow-hidden h-48 flex flex-col justify-between">
                  <span className="px-2 py-1 bg-primary/20 text-primary-fixed text-[10px] font-bold self-start rounded">Global Node</span>
                  <p className="text-stone-100 font-headline text-lg font-bold">Isolate Regional Risks</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="w-full py-6 mt-auto border-t border-stone-800/20 bg-stone-950 flex justify-between items-center px-12">
            <div className="flex gap-4">
              <span className="text-stone-400 font-label text-[10px] uppercase tracking-widest">© 2024 Sovereign Intelligence</span>
              <span className="text-cyan-400 font-label text-[10px] uppercase tracking-widest">System Status: Nominal</span>
            </div>
            <div className="flex gap-8">
              <button onClick={() => handleMenuOption("Security Protocol")} className="text-stone-600 hover:text-stone-300 font-label text-[10px] uppercase tracking-widest transition-colors">Security Protocol v4.2</button>
              <button onClick={() => handleMenuOption("Privacy Policy")} className="text-stone-600 hover:text-stone-300 font-label text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</button>
              <button onClick={() => handleMenuOption("Terms of Service")} className="text-stone-600 hover:text-stone-300 font-label text-[10px] uppercase tracking-widest transition-colors">Terms of Service</button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
