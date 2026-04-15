import React from "react";
import { Link } from "react-router-dom";

export function Footer({ variant }: { variant?: "default" | "about" | "login" }) {
  if (variant === "about") {
    return (
      <footer className="bg-[#121414] w-full border-t border-[#333535]/15 flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full mt-40 font-body text-sm tracking-wide">
        <div className="mb-8 md:mb-0">
          <div className="text-lg font-bold text-[#e2e2e2] mb-2">LandLedger</div>
          <p className="text-[#e2e2e2]/40 max-w-xs leading-relaxed">© 2024 Sovereign Intelligence. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" to="/about#advisory">
            Privacy Protocol
          </Link>
          <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" to="/secure-access-enhanced">
            Security Standards
          </Link>
          <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" to="/about">
            Terms of Sovereignty
          </Link>
          <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" to="/secure-access">
            Contact Terminal
          </Link>
          <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] underline-offset-4 hover:underline opacity-80 hover:opacity-100 transition-opacity" to="/designs">
            Design References
          </Link>
        </div>
      </footer>
    );
  }

  if (variant === "login") {
    return (
      <footer className="bg-[#121414] w-full border-t border-[#333535]/15 flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full">
        <div className="mb-8 md:mb-0">
          <span className="text-lg font-black text-[#e2e2e2] font-headline tracking-tighter">LandLedger</span>
          <p className="text-[#e2e2e2]/40 text-xs mt-2 font-body uppercase tracking-widest">Sovereign Property Intelligence</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-8">
            <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] transition-colors font-body text-sm tracking-wide uppercase" to="/secure-access">
              Security Protocol
            </Link>
            <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] transition-colors font-body text-sm tracking-wide uppercase" to="/about#advisory">
              Privacy Policy
            </Link>
            <Link className="text-[#e2e2e2]/40 hover:text-[#7ad4e5] transition-colors font-body text-sm tracking-wide uppercase" to="/about">
              Terms of Service
            </Link>
          </div>
          <p className="text-[#e2e2e2]/40 text-[10px] font-body tracking-widest uppercase">© 2024 Sovereign Intelligence. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-zinc-950 w-full border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-lg font-black text-zinc-100 font-headline">LandLedger</span>
          <p className="font-body text-sm leading-relaxed text-zinc-500 max-w-xs text-center md:text-left">
            © 2024 LandLedger. Sovereign Intelligence for Property Assets.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="font-body text-sm text-zinc-500 hover:text-cyan-300 transition-colors" to="/about">
            Terms of Service
          </Link>
          <Link className="font-body text-sm text-zinc-500 hover:text-cyan-300 transition-colors" to="/about#advisory">
            Privacy Policy
          </Link>
          <Link className="font-body text-sm text-zinc-500 hover:text-cyan-300 transition-colors" to="/secure-access-enhanced">
            Security Audit
          </Link>
          <Link className="font-body text-sm text-zinc-500 hover:text-cyan-300 transition-colors" to="/property/primary">
            Compliance
          </Link>
          <Link className="font-body text-sm text-zinc-500 hover:text-cyan-300 transition-colors" to="/designs">
            Design References
          </Link>
        </div>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-cyan-300 transition-all">terminal</span>
          <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-cyan-300 transition-all">lan</span>
        </div>
      </div>
    </footer>
  );
}

