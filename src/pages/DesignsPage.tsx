import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

const items = [
  { title: "About Us", src: "/about_us/screen.png" },
  { title: "Landing (Guest)", src: "/landing_guest/screen.png" },
  { title: "Landing (Logged In)", src: "/landing_logged_in/screen.png" },
  { title: "Login", src: "/login/screen.png" },
  { title: "Property Details (Primary)", src: "/property_details_primary/screen.png" },
  { title: "Property Details (Secondary)", src: "/property_details_secondary/screen.png" },
  { title: "Secure Access", src: "/secure_access/screen.png" },
  { title: "Secure Access (Enhanced)", src: "/Rgister_user/screen.png" },
];

export function DesignsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-10">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-xs font-headline font-bold text-primary uppercase tracking-[0.3em]">Reference</p>
            <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mt-2">Design References</h1>
          </div>
          <Link
            to="/landing/guest"
            className="px-6 py-3 rounded-md border border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low transition-all font-semibold"
          >
            Back to site
          </Link>
        </div>
        <p className="mt-4 text-on-surface-variant max-w-2xl">
          These screens are the original design references bundled with the project.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((it) => (
            <div key={it.title} className="bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/10">
              <div className="p-6 flex items-center justify-between">
                <h2 className="font-headline font-bold tracking-tight">{it.title}</h2>
                <span className="text-[10px] uppercase tracking-widest text-outline font-bold">PNG</span>
              </div>
              <div className="bg-surface-container-lowest">
                <img src={it.src} alt={`${it.title} screen`} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer variant="about" />
    </div>
  );
}

