import React from "react";
import { useNavigate } from "react-router-dom";
import { ContactGate } from "../components/ContactGate";
import { Footer } from "../components/Footer";
import { TopNav } from "../components/TopNav";
import { propertyDetails } from "../data/property";
import { useAuth } from "../state/auth";

export function PropertyDetailsPrimaryPage() {
  const navigate = useNavigate();
  const { isAuthenticated, contactVerified } = useAuth();
  const { property, encumbrances } = propertyDetails;
  const activeEncumbrance = encumbrances.find((item) => item.status === "ACTIVE");
  const hasActiveEncumbrance = Boolean(activeEncumbrance);
  const maskedSurveyNumber = "SN-XXX";
  const maskedLoanDescription = "Loan from SBI - Rs. XX,XX,XXX outstanding";
  const visibleSurveyNumber = contactVerified ? property.surveyNumber : maskedSurveyNumber;
  const visibleLoanDescription = contactVerified && activeEncumbrance ? activeEncumbrance.description : maskedLoanDescription;
  const sensitiveHighlight = contactVerified
    ? "rounded-md bg-primary/10 px-2 py-1 text-primary ring-1 ring-primary/30 shadow-[0_0_18px_rgba(122,212,229,0.12)]"
    : "";

  return (
    <div className="min-h-screen">
      <TopNav mode="logged-in" />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-8">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">Asset Identification</span>
              <div className="h-px flex-1 bg-outline-variant/20"></div>
            </div>
            <h1 className="text-6xl font-headline font-extrabold tracking-tighter text-on-surface mb-2">{property.propertyId}</h1>
            <p className="text-2xl font-headline font-light text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                location_on
              </span>
              {property.location}
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <span className="block font-label text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Registered Owner</span>
                <p className="text-xl font-body font-semibold">{property.ownerName}</p>
              </div>
              <div>
                <span className="block font-label text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Survey Number</span>
                <p className={`inline-block text-xl font-body font-semibold ${sensitiveHighlight}`}>{visibleSurveyNumber}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container-low p-8 rounded-lg flex flex-col justify-between aspect-square lg:aspect-auto h-full border border-outline-variant/10">
            <div>
              <span className="font-label text-xs font-bold uppercase tracking-widest text-outline">Compliance Engine Status</span>
              <div className="mt-6 flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full animate-pulse ${hasActiveEncumbrance ? "bg-tertiary shadow-[0_0_15px_rgba(255,183,124,0.6)]" : "bg-primary shadow-[0_0_15px_rgba(122,212,229,0.6)]"}`}></div>
                <h2 className={`text-4xl font-headline font-black ${hasActiveEncumbrance ? "text-tertiary" : "text-primary"}`}>
                  {hasActiveEncumbrance ? "ACTIVE" : "CLEAR"}
                </h2>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <button
                type="button"
                disabled={!contactVerified}
                className={`w-full font-bold py-4 rounded-md transition-all active:scale-95 flex items-center justify-center gap-2 ${
                  contactVerified
                    ? "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg shadow-primary/10"
                    : "bg-surface-container-highest border border-outline-variant/30 text-outline cursor-not-allowed opacity-80"
                }`}
                onClick={() => {
                  if (!isAuthenticated) navigate("/login");
                }}
              >
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {contactVerified ? "verified" : "lock"}
                </span>
                {contactVerified ? "Download Certified Abstract" : "Certified Abstract Locked"}
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-7 bg-surface-container-low rounded-lg p-10">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl font-headline font-bold">Ownership History</h3>
              <span className="material-symbols-outlined text-outline" aria-hidden="true">
                history
              </span>
            </div>
            <div className="relative space-y-12 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/30">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary ring-4 ring-surface-container-low z-10"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary font-label">Current Title Holder</span>
                    <h4 className="text-lg font-bold font-body">{property.ownerName}</h4>
                  </div>
                  <span className="text-sm font-label text-outline">Current</span>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Active title record for {property.propertyId}, linked to survey number {visibleSurveyNumber} in {property.location}.
                </p>
              </div>
              <div className="relative pl-10 opacity-60">
                <div className="absolute left-[5px] top-1 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-surface-container-low z-10"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-outline font-label">Transfer of Title</span>
                    <h4 className="text-lg font-bold font-body">Aeon Prime Development</h4>
                  </div>
                  <span className="text-sm font-label text-outline">May 2018 - Oct 2023</span>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Institutional divestment. Audit trail concludes with zero residual liability for the previous entity.
                </p>
              </div>
              <div className="relative pl-10 opacity-40">
                <div className="absolute left-[5px] top-1 w-3 h-3 rounded-full bg-outline-variant ring-4 ring-surface-container-low z-10"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-outline font-label">Initial Registration</span>
                    <h4 className="text-lg font-bold font-body">Veridia Municipal Authority</h4>
                  </div>
                  <span className="text-sm font-label text-outline">Jan 2012 - May 2018</span>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Original crown-land conversion to commercial industrial zoning category.
                </p>
              </div>
            </div>
          </section>

          <div className="lg:col-span-5 grid grid-cols-1 gap-8">
            <div className="bg-surface-container-highest rounded-lg p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  account_balance
                </span>
                <h4 className="text-sm font-bold uppercase tracking-widest font-label">Loans &amp; Mortgages</h4>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-surface-container-low rounded-md">
                  <div>
                    <p className="text-xs text-outline font-label">{activeEncumbrance?.type ?? "No Encumbrance"}</p>
                    <p className={`text-lg font-bold ${activeEncumbrance ? sensitiveHighlight || "text-on-surface" : "text-on-surface"}`}>
                      {activeEncumbrance ? visibleLoanDescription : "Clear title"}
                    </p>
                  </div>
                  <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full border ${hasActiveEncumbrance ? "bg-tertiary/10 text-tertiary border-tertiary/20" : "bg-primary/10 text-primary border-primary/20"}`}>
                    {activeEncumbrance?.status ?? "NONE"}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Linked to property ID {property.propertyId}. Encumbrance record count: {encumbrances.length}.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-highest rounded-lg p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-tertiary" aria-hidden="true">
                  gavel
                </span>
                <h4 className="text-sm font-bold uppercase tracking-widest font-label">Legal Proceedings</h4>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-md">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-outline" aria-hidden="true">
                    search_check
                  </span>
                  <p className="text-sm font-medium">No active litigation records</p>
                </div>
                <span className="text-[10px] font-bold text-outline">LAST SCAN: 2H AGO</span>
              </div>
            </div>

            <div className="bg-surface-container-highest rounded-lg p-8 border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                  receipt_long
                </span>
                <h4 className="text-sm font-bold uppercase tracking-widest font-label">Municipal Tax Due</h4>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-4xl font-headline font-black text-on-surface">Rs. 0</p>
                  <p className="text-xs text-outline mt-1 font-label">NEXT DUE: MAR 15, 2024</p>
                </div>
                <span className="text-xs text-primary font-bold">PAID IN FULL</span>
              </div>
            </div>
          </div>
        </div>

        <ContactGate />
      </main>

      <Footer />
    </div>
  );
}
