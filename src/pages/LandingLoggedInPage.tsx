import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { LockedText } from "../components/Locked";
import { TopNav } from "../components/TopNav";
import { useAuth } from "../state/auth";

export function LandingLoggedInPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const locked = !isAuthenticated;

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
              <span className="text-xs font-headline font-bold uppercase tracking-[0.2em] text-outline">Global Portfolio Value</span>
              <p className="text-4xl font-headline font-extrabold text-on-surface mt-1">$42,890,500</p>
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
                alt="Property 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD30lApooXmGNk4Af8bIxX0SBVzVVIF1wQhq2hsHEo-ZnaKnnpV7Jy38tXQtualnhD-t1j-g5UoeaXEj7lsLA07ZgSkGq61dP7XhUDF-1ZneH34gC9Z2kWxxmZ5J195NfK4PxmMExwI48O3zCUm-_zRKZ6x2FlZ7tOcAcT1VbtVH-kOKjJcxDCvWrAiXpPw4sjDGunValmneWQhEMsiBSPIHvzHsq0efGdI8i2W4RBr4J5jsm5AjFTnqz7H-rokKSnFXDkqECotOO5a"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase">
                Verified Asset
              </div>
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.2em]">Asset ID: LL-9902-X</p>
                  <h3 className="text-2xl font-headline font-bold mt-1">Emerald Ridge Estate</h3>
                </div>
                <span className="bg-primary/10 text-primary-fixed-dim px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Low Risk</span>
              </div>
              <div className="space-y-4 border-t border-outline-variant/10 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Owner Identity</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    Dominic V. Sterling
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Encumbrances</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    None / Clear Title
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Last Audit</span>
                  <span className="text-sm font-bold text-on-surface">14 Oct 2024</span>
                </div>
              </div>
              <button
                className="w-full py-4 bg-primary text-on-primary-fixed font-bold rounded-md flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 group/btn"
                onClick={() => (locked ? navigate("/login") : navigate("/property/primary"))}
              >
                VIEW FULL DOSSIER
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          <div className="group bg-surface-container-low rounded-lg overflow-hidden border border-transparent hover:border-tertiary/20 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Property 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXEY758RZdWDkihmBgpZ_dw7-0uPfDDletmBlGdD6duQPISx52ncrRmlk7V7x4mzUvIrf8xTcWsINI_IZFNdF3_pjamYST-QyoKVuP8ypR7vVfAi5eZaWKtONJvZVaOZ00Ia2OB-G7k7eEmwVgqmFIq1REZof_jRJ7ogZrmlZdk_VZgGiToRUGDOyxDHzsBBlVQbvkJFhNbDl655d1jZa30ldB16sHdRjBG2uUNFiC9bEogDx1rCpPo29Ko7lpxf3CbKilABygIgzE"
              />
              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase">
                Active Lien
              </div>
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] font-headline font-bold text-tertiary uppercase tracking-[0.2em]">Asset ID: LL-4410-C</p>
                  <h3 className="text-2xl font-headline font-bold mt-1">Azure Sky Penthouse</h3>
                </div>
                <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Moderate Risk</span>
              </div>
              <div className="space-y-4 border-t border-outline-variant/10 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Owner Identity</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    Harbor Group Ltd.
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Encumbrances</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    1 Mortgage / Bank of Nova
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Last Audit</span>
                  <span className="text-sm font-bold text-on-surface">02 Nov 2024</span>
                </div>
              </div>
              <button
                className="w-full py-4 border border-tertiary/50 text-tertiary font-bold rounded-md flex items-center justify-center gap-2 hover:bg-tertiary hover:text-on-tertiary transition-all active:scale-95 group/btn"
                onClick={() => (locked ? navigate("/login") : navigate("/property/secondary"))}
              >
                INVESTIGATE LIENS
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">
                  security
                </span>
              </button>
            </div>
          </div>

          <div className="group bg-surface-container-low rounded-lg overflow-hidden border border-transparent hover:border-primary/20 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="relative h-64 overflow-hidden">
              <img
                alt="Property 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvgGSxjp0csEcxZAyvSabMh1nOPFIdlAmggt_bvRR_gt4Er15mWKbvjg1fim0VDqiJen-8k4w_LfhjN0kLI0ySH3npZNxFx5OStNrQIxjc-jnWApZNim8Btpifv9Tn5_gA85homz-U4hkWr3b_2Kx4NdHrZMgLo2rttcQv4DMdjZ2YkOKwClvm0wWv-NwJo1cUHNoHWbrlTjFDWkQnv7tSN-IVW89uMUZsYKy7m8L7YxCogvoK9vI33m1pHj1DYOSPsYyNV5xvmSbU"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase">
                Verified Asset
              </div>
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-[0.2em]">Asset ID: LL-1105-H</p>
                  <h3 className="text-2xl font-headline font-bold mt-1">Obsidian HQ Complex</h3>
                </div>
                <span className="bg-primary/10 text-primary-fixed-dim px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Low Risk</span>
              </div>
              <div className="space-y-4 border-t border-outline-variant/10 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Owner Identity</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    Blackwood Holdings
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Encumbrances</span>
                  <LockedText locked={locked} className="text-sm font-bold text-on-surface">
                    None / Clear Title
                  </LockedText>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline font-medium">Last Audit</span>
                  <span className="text-sm font-bold text-on-surface">19 Oct 2024</span>
                </div>
              </div>
              <button
                className="w-full py-4 bg-primary text-on-primary-fixed font-bold rounded-md flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 group/btn"
                onClick={() => (locked ? navigate("/login") : navigate("/property/primary"))}
              >
                VIEW FULL DOSSIER
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
                  <p className="text-sm font-bold text-on-surface">Title Deed Decrypted: LL-9902-X</p>
                  <p className="text-xs text-outline">Ownership confirmed for Dominic V. Sterling via Blockchain Validation.</p>
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
                  <p className="text-sm font-bold text-on-surface">Historical Encumbrance Search initiated</p>
                  <p className="text-xs text-outline">Querying 50 years of public and private records for Azure Sky Penthouse.</p>
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
                  <p className="text-sm font-bold text-on-surface">Security Audit Passed</p>
                  <p className="text-xs text-outline">Biometric re-verification successful for session ID: 772-XJ.</p>
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

