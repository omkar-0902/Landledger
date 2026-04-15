import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { LockedText } from "../components/Locked";
import { TopNav } from "../components/TopNav";
import { landImages, propertyDetails } from "../data/property";
import { useAuth } from "../state/auth";

export function LandingLoggedInPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const locked = !isAuthenticated;
  const { property } = propertyDetails;

  return (
    <div className="min-h-screen">
      <TopNav mode="logged-in" />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <section className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[0.9]">
              Sovereign <span className="text-primary">Intelligence</span>
            </h1>
            <p className="mt-8 text-xl text-outline leading-relaxed max-w-lg">
              Welcome back. Your portfolio of high-value property assets is now decrypted. Real-time encumbrance audits and ownership trails are live.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end">
            <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary shadow-2xl">
              <span className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline">Monitored Land Value</span>
              <p className="text-4xl font-headline font-extrabold text-on-surface mt-1">Rs. 42.8 Cr</p>
              <div className="flex items-center gap-2 mt-2 text-primary">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  trending_up
                </span>
                <span className="text-xs font-bold tracking-widest uppercase">+2.4% THIS MONTH</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined" aria-hidden="true">
              search
            </span>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-md py-4 pl-12 pr-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface"
              placeholder="Search decrypted ledger IDs or owner names..."
              type="text"
            />
          </div>
          <button
            type="button"
            onClick={() => navigate("/property/secondary")}
            className="bg-surface-container-high px-6 py-4 rounded-md flex items-center gap-2 hover:bg-surface-container-highest transition-colors text-sm font-bold uppercase tracking-widest whitespace-nowrap active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              filter_list
            </span>{" "}
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-surface-container-low rounded-lg overflow-hidden border border-transparent hover:border-primary/20 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Open verified land parcel with green fields and surveyable terrain"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={landImages.fieldParcel}
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase">
                Verified Asset
              </div>
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.2em]">Asset ID: {property.propertyId}</p>
                  <h3 className="text-2xl font-headline font-bold mt-1">{property.location} Parcel</h3>
                </div>
                <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Loan Active</span>
              </div>
              <div className="space-y-4 border-t border-outline-variant/10 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Property ID</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    {property.propertyId}
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Owner Name</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    {property.ownerName}
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Location</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    {property.location}
                  </LockedText>
                </div>
              </div>
              <button
                className="w-full py-4 bg-primary text-on-primary-fixed font-bold rounded-md flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 group/btn"
                onClick={() => (locked ? navigate("/login") : navigate("/property/primary"))}
              >
                REVIEW LOAN DETAILS
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          <div className="group bg-surface-container-low rounded-lg overflow-hidden border border-transparent hover:border-tertiary/20 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Green land parcel with terrain and visible field divisions"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={landImages.estateGrid}
              />
              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase">
                Case Pending
              </div>
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] font-headline font-bold text-tertiary uppercase tracking-[0.2em]">Asset ID: PROP002</p>
                  <h3 className="text-2xl font-headline font-bold mt-1">North Taluk Plot</h3>
                </div>
                <span className="bg-error-container/20 text-error px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">High Risk</span>
              </div>
              <div className="space-y-4 border-t border-outline-variant/10 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Property ID</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    PROP002
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Owner Name</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    Kavitha M.
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Location</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    Bangalore Rural
                  </LockedText>
                </div>
              </div>
              <button
                className="w-full py-4 border border-tertiary/50 text-tertiary font-bold rounded-md flex items-center justify-center gap-2 hover:bg-tertiary hover:text-on-tertiary transition-all active:scale-95 group/btn"
                onClick={() => (locked ? navigate("/login") : navigate("/property/secondary"))}
              >
                REVIEW CASE FILE
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">
                  security
                </span>
              </button>
            </div>
          </div>

          <div className="group bg-surface-container-low rounded-lg overflow-hidden border border-transparent hover:border-primary/20 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Agricultural land holding with wide open fields"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={landImages.fieldParcel}
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase">
                Verified Asset
              </div>
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.2em]">Asset ID: PROP003</p>
                  <h3 className="text-2xl font-headline font-bold mt-1">Canal Road Farm</h3>
                </div>
                <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Tax Due</span>
              </div>
              <div className="space-y-4 border-t border-outline-variant/10 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Property ID</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    PROP003
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Owner Name</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    Prakash Gowda
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Location</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    Mandya, KA
                  </LockedText>
                </div>
              </div>
              <button
                className="w-full py-4 bg-primary text-on-primary-fixed font-bold rounded-md flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 group/btn"
                onClick={() => (locked ? navigate("/login") : navigate("/property/primary"))}
              >
                RESOLVE TAX ISSUE
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs font-headline font-bold text-primary uppercase tracking-[0.3em]">Real-Time Security Feed</span>
              <h2 className="text-4xl font-headline font-extrabold mt-2 tracking-tighter">Recent Ledger Activity</h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("/property/primary")}
              className="text-sm font-bold text-outline hover:text-primary transition-colors flex items-center gap-2 group active:scale-[0.98]"
            >
              VIEW SYSTEM AUDIT{" "}
              <span className="material-symbols-outlined text-sm group-hover:rotate-45 transition-transform" aria-hidden="true">
                north_east
              </span>
            </button>
          </div>
          <div className="bg-surface-container-low rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-outline-variant/10">
              <div className="p-6 flex items-center gap-6 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-primary p-3 bg-primary/10 rounded-full" aria-hidden="true">
                  verified
                </span>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-on-surface">Title record verified: {property.propertyId}</p>
                  <p className="text-xs text-outline">Ownership confirmed for {property.ownerName}; SBI loan remains active.</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-on-surface">08:22 AM</p>
                  <p className="text-[10px] text-outline uppercase tracking-widest">Just Now</p>
                </div>
              </div>
              <div className="p-6 flex items-center gap-6 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-tertiary p-3 bg-tertiary/10 rounded-full" aria-hidden="true">
                  history
                </span>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-on-surface">Court case watchlist updated</p>
                  <p className="text-xs text-outline">Boundary dispute flagged for PROP002 before the next hearing.</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-on-surface">07:45 AM</p>
                  <p className="text-[10px] text-outline uppercase tracking-widest">37m ago</p>
                </div>
              </div>
              <div className="p-6 flex items-center gap-6 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-outline p-3 bg-surface-container-highest rounded-full" aria-hidden="true">
                  security
                </span>
                <div className="flex-grow">
                  <p className="text-sm font-bold text-on-surface">Revenue office follow-up queued</p>
                  <p className="text-xs text-outline">PROP003 mutation remains pending until tax dues are cleared.</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-on-surface">06:12 AM</p>
                  <p className="text-[10px] text-outline uppercase tracking-widest">2h ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
