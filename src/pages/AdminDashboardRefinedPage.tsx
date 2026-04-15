import React from "react";
import { useNavigate } from "react-router-dom";

interface PropertyEntry {
  id: string;
  name: string;
  location: string;
  owner: string;
  initials: string;
  valuation: string;
  status: "Verified" | "Pending" | "Flagged";
}

export function AdminDashboardRefinedPage() {
  const navigate = useNavigate();
  const [properties] = React.useState<PropertyEntry[]>([
    { id: "#LL-9021-TX", name: "Sterling Heights Estate", location: "Austin, Texas, USA", owner: "Atlas Management Group", initials: "AM", valuation: "$12,450,000", status: "Verified" },
    { id: "#LL-4412-CA", name: "Silicon Valley Hub B", location: "San Jose, California", owner: "Nexus Ventures LLC", initials: "NV", valuation: "$84,000,000", status: "Pending" },
    { id: "#LL-1092-NY", name: "Hudson River Plaza", location: "New York, NY", owner: "Crestwood Holdings", initials: "CH", valuation: "$112,200,000", status: "Flagged" },
    { id: "#LL-5521-FL", name: "Ocean Front Retail", location: "Miami, Florida", owner: "Sun Ray Properties", initials: "SR", valuation: "$3,150,000", status: "Verified" },
  ]);

  const handleAddProperty = () => {
    navigate("/admin/add-property");
  };

  const handleReview = () => {
    console.log("Review High Risk clicked");
  };

  const handleNavigation = (item: string) => {
    console.log("Navigation clicked:", item);
  };

  const handleExport = () => {
    console.log("Export CSV clicked");
  };

  const handleFilter = () => {
    console.log("Filters clicked");
  };

  const handleMoreOptions = (propertyId: string) => {
    console.log("More options for:", propertyId);
  };

  const handleViewFullLedger = () => {
    console.log("View Full Ledger clicked");
  };

  return (
    <div className="dark">
      <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen">
        {/* Background Decorative Elements */}
        <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary-container/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* SideNavBar */}
        <aside className="h-screen w-72 fixed left-0 top-0 border-r border-zinc-800/15 bg-zinc-950/70 backdrop-blur-3xl flex flex-col p-6 gap-8 z-50 font-headline tracking-tight shadow-2xl shadow-cyan-900/5">
          <div className="flex flex-col gap-1 px-2">
            <h1 className="text-xl font-bold tracking-widest text-cyan-400 uppercase">LandLedger</h1>
            <p className="text-xs text-zinc-500 font-medium">Institutional Admin</p>
          </div>
          <nav className="flex-1 flex flex-col gap-2">
            <a className="flex items-center gap-3 px-4 py-3 text-cyan-400 font-bold bg-zinc-800/40 rounded-xl transition-all duration-300" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <span>Dashboard</span>
            </a>
            <button onClick={() => handleNavigation("Property Ledger")} className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-300 transition-colors hover:bg-zinc-800/30 rounded-xl w-full text-left font-body">
              <span className="material-symbols-outlined">account_balance</span>
              <span>Property Ledger</span>
            </button>
            <button onClick={() => handleNavigation("Ownership History")} className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-300 transition-colors hover:bg-zinc-800/30 rounded-xl w-full text-left font-body">
              <span className="material-symbols-outlined">history</span>
              <span>Ownership History</span>
            </button>
            <button onClick={() => handleNavigation("Risk Intelligence")} className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-300 transition-colors hover:bg-zinc-800/30 rounded-xl w-full text-left font-body">
              <span className="material-symbols-outlined">security</span>
              <span>Risk Intelligence</span>
            </button>
            <button onClick={() => handleNavigation("System Audit")} className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:text-zinc-300 transition-colors hover:bg-zinc-800/30 rounded-xl w-full text-left font-body">
              <span className="material-symbols-outlined">admin_panel_settings</span>
              <span>System Audit</span>
            </button>
          </nav>
          <div className="pt-6 border-t border-zinc-800/20 flex flex-col gap-4">
            <button onClick={handleReview} className="bg-primary-container text-on-primary-container py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-95 duration-150 font-body">
              Review High Risk
            </button>
            <div className="flex flex-col gap-1">
              <button onClick={() => handleNavigation("Settings")} className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm w-full text-left font-body">
                <span className="material-symbols-outlined text-sm">settings</span>
                <span>Settings</span>
              </button>
              <button onClick={() => handleNavigation("Support")} className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-zinc-300 transition-colors text-sm w-full text-left font-body">
                <span className="material-symbols-outlined text-sm">contact_support</span>
                <span>Support</span>
              </button>
            </div>
          </div>
        </aside>

        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-18rem)] h-20 bg-zinc-950/70 backdrop-blur-2xl flex justify-between items-center px-10 z-40 font-body text-sm font-medium">
          <div className="flex items-center gap-6">
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-zinc-500">search</span>
              <input className="bg-zinc-900/50 border-none rounded-full pl-10 pr-6 py-2 w-80 text-zinc-300 focus:ring-1 focus:ring-cyan-400 text-xs" placeholder="Search assets, owners, or IDs..." type="text" />
            </div>
            <nav className="flex gap-8 ml-4">
              <button onClick={() => handleNavigation("Reports")} className="text-zinc-400 hover:text-cyan-300 transition-colors">Reports</button>
              <button onClick={() => handleNavigation("Documents")} className="text-zinc-400 hover:text-cyan-300 transition-colors">Documents</button>
              <button onClick={() => handleNavigation("Activity")} className="text-zinc-400 hover:text-cyan-300 transition-colors">Activity</button>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <button className="text-zinc-400 hover:text-cyan-300 transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button onClick={() => handleNavigation("Help")} className="text-zinc-400 hover:text-cyan-300 transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-zinc-800"></div>
            <button onClick={() => navigate("/admin/login")} className="text-cyan-400 hover:opacity-80 transition-opacity font-bold uppercase tracking-wider text-[10px]">Secure Logout</button>
            <img alt="Admin User Profile" className="w-10 h-10 rounded-full border border-zinc-700 bg-gradient-to-br from-primary to-secondary" src="" />
          </div>
        </header>

        {/* Main Content Canvas */}
        <main className="ml-72 pt-28 px-10 pb-16 min-h-screen">
          {/* Header Section */}
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-1">
              <p className="text-primary font-headline font-bold text-xs uppercase tracking-widest">Global Asset Overview</p>
              <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Executive Dashboard</h2>
            </div>
            <button onClick={handleAddProperty} className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-8 py-4 rounded-lg flex items-center gap-3 shadow-lg shadow-primary/10 hover:scale-[1.02] transition-transform active:scale-95 font-body">
              <span className="material-symbols-outlined">add_circle</span>
              <span>Add Property</span>
            </button>
          </div>

          {/* Strategic Intelligence Cards */}
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-4 p-8 rounded-lg relative overflow-hidden group" style={{
              background: "rgba(26, 28, 28, 0.4)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(136, 147, 149, 0.1)",
              boxShadow: "0 0 20px rgba(122, 212, 229, 0.05)"
            }}>
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">account_balance</span>
              </div>
              <p className="text-outline text-xs uppercase tracking-widest font-bold mb-2">Total Managed Assets</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-headline font-extrabold text-primary tracking-tighter">$4.2B</h3>
                <span className="text-primary text-xs font-bold">+12% YoY</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
                <span className="material-symbols-outlined text-sm">verified</span>
                1,248 Institutional Titles
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 p-8 rounded-lg relative overflow-hidden group" style={{
              background: "rgba(26, 28, 28, 0.4)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(136, 147, 149, 0.1)",
              boxShadow: "0 0 20px rgba(122, 212, 229, 0.05)"
            }}>
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">pending_actions</span>
              </div>
              <p className="text-outline text-xs uppercase tracking-widest font-bold mb-2">Pending Verifications</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-headline font-extrabold text-on-surface tracking-tighter">42</h3>
                <span className="text-tertiary text-xs font-bold">Priority</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
                <span className="material-symbols-outlined text-sm text-tertiary">hourglass_empty</span>
                Est. processing: 14 hours
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 p-8 rounded-lg bg-surface-container-low border border-error/10 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">gpp_maybe</span>
              </div>
              <p className="text-outline text-xs uppercase tracking-widest font-bold mb-2">Flagged Risks</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-5xl font-headline font-extrabold text-error tracking-tighter">07</h3>
                <span className="text-error text-xs font-bold">Critical</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400">
                <span className="material-symbols-outlined text-sm text-error">warning</span>
                Requires Admin Override
              </div>
            </div>
          </div>

          {/* Property Ledger */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-headline font-bold">Property Ledger</h3>
              <div className="flex gap-4">
                <button onClick={handleExport} className="bg-surface-container-high px-4 py-2 rounded-md text-xs font-bold text-zinc-400 border border-outline-variant/10 hover:text-on-surface transition-colors font-body">Export CSV</button>
                <button onClick={handleFilter} className="bg-surface-container-high px-4 py-2 rounded-md text-xs font-bold text-zinc-400 border border-outline-variant/10 hover:text-on-surface transition-colors font-body">Filters</button>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/10">
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-lowest/50 text-outline text-[10px] uppercase tracking-widest font-bold">
                  <tr>
                    <th className="px-8 py-5">Property ID</th>
                    <th className="px-8 py-5">Asset Location</th>
                    <th className="px-8 py-5">Primary Owner</th>
                    <th className="px-8 py-5">Valuation</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {properties.map((property) => (
                    <tr key={property.id} className="hover:bg-surface-container-high/50 transition-colors group">
                      <td className="px-8 py-6 font-mono text-xs text-primary">{property.id}</td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{property.name}</span>
                          <span className="text-[10px] text-outline">{property.location}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold">{property.initials}</div>
                          <span className="text-sm">{property.owner}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-sm font-bold">{property.valuation}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                          property.status === "Verified" ? "bg-primary/10 text-primary" :
                          property.status === "Pending" ? "bg-tertiary/10 text-tertiary" :
                          "bg-error/10 text-error"
                        }`}>
                          {property.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button onClick={() => handleMoreOptions(property.id)} className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">more_vert</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center">
              <button onClick={handleViewFullLedger} className="text-outline text-xs font-bold flex items-center gap-2 hover:text-on-surface transition-colors group font-body">
                View Full Ledger
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
