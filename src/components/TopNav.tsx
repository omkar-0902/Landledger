import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cn } from "../lib/cn";
import { useAuth } from "../state/auth";

type NavMode = "guest" | "logged-in" | "about" | "login";

export function TopNav({ mode }: { mode: NavMode }) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const onPrimaryAuthAction = React.useCallback(() => {
    if (isAuthenticated) {
      logout();
      navigate("/landing/guest");
      return;
    }
    navigate("/login");
  }, [isAuthenticated, logout, navigate]);

  if (mode === "about") {
    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] rounded-full bg-[#121414]/70 backdrop-blur-xl shadow-2xl shadow-black/20 flex justify-between items-center px-8 py-3 max-w-7xl mx-auto z-50">
        <Link to="/landing/guest" className="text-2xl font-bold tracking-tighter text-primary font-headline">
          LandLedger
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-on-surface/60 hover:text-primary transition-colors duration-300 font-headline tracking-tight" href="#intelligence">
            Intelligence
          </a>
          <a className="text-on-surface/60 hover:text-primary transition-colors duration-300 font-headline tracking-tight" href="#portfolio">
            Portfolio
          </a>
          <a className="text-on-surface/60 hover:text-primary transition-colors duration-300 font-headline tracking-tight" href="#market">
            Market
          </a>
          <a className="text-on-surface/60 hover:text-primary transition-colors duration-300 font-headline tracking-tight" href="#advisory">
            Advisory
          </a>
        </div>
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="material-symbols-outlined text-on-surface/60 hover:text-primary transition-transform active:scale-90"
            aria-label="notifications"
            onClick={() => navigate("/landing/logged-in")}
          >
            notifications
          </button>
          <button
            type="button"
            className="material-symbols-outlined text-on-surface/60 hover:text-primary transition-transform active:scale-90"
            aria-label="settings"
            onClick={() => navigate("/landing/logged-in")}
          >
            settings
          </button>
          <button
            type="button"
            onClick={onPrimaryAuthAction}
            className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 grid place-items-center text-on-surface/70 hover:text-primary transition-colors"
            aria-label={isAuthenticated ? "logout" : "login"}
          >
            <span className="material-symbols-outlined text-[18px]">{isAuthenticated ? "lock_open" : "lock"}</span>
          </button>
        </div>
      </nav>
    );
  }

  const navItem = (to: string, label: string, active?: boolean) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "font-headline uppercase tracking-widest text-[11px] font-bold text-zinc-400 hover:text-zinc-100 transition-colors",
          (active ?? isActive) && "text-cyan-400 border-b-2 border-cyan-400 pb-1 font-black",
        )
      }
      end
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="fixed top-0 w-full z-50 mt-4 px-4">
      <div className="max-w-7xl mx-auto rounded-full bg-zinc-950/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] flex justify-between items-center w-full px-8 py-4">
        <div className="flex items-center gap-8">
          <Link to="/landing/guest" className="text-2xl font-bold tracking-tighter text-zinc-100 dark:text-zinc-50 font-headline">
            {mode === "logged-in" ? "LANDLEDGER" : "LandLedger"}
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {navItem("/landing/guest", "Home", mode === "guest")}
            {navItem("/about", "About")}
            {navItem("/about#market", "How It Works")}
            {navItem("/landing/guest#faqs", "FAQs", false)}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className={cn("hidden sm:block", mode !== "guest" && mode !== "logged-in" && "hidden")}>
            <button
              type="button"
              className="material-symbols-outlined text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors"
              aria-label="search"
            >
              search
            </button>
          </div>

          {mode === "logged-in" ? (
            <div className="flex items-center gap-3 pl-4 border-l border-zinc-800/50">
              <span className="text-right hidden sm:block">
                <p className="text-[10px] font-headline font-bold text-outline uppercase tracking-wider">Account Active</p>
                <p className="text-xs font-bold text-on-surface">Alexander Sterling</p>
              </span>
              <button
                type="button"
                onClick={onPrimaryAuthAction}
                className="h-10 w-10 rounded-full border-2 border-primary overflow-hidden grid place-items-center text-primary hover:brightness-110 transition-all active:scale-95"
                aria-label="account"
              >
                <span className="material-symbols-outlined text-[18px]">{isAuthenticated ? "lock_open" : "lock"}</span>
              </button>
            </div>
          ) : mode === "login" ? (
            <button
              type="button"
              className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-md font-semibold text-sm transition-transform active:scale-95 duration-200 ease-in-out"
              onClick={() => navigate("/login")}
            >
              Secure Login
            </button>
          ) : (
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 hover:bg-zinc-800 transition-all cursor-pointer group"
              onClick={onPrimaryAuthAction}
            >
              <span className="material-symbols-outlined text-cyan-400 group-active:scale-95 duration-150 ease-in-out">
                account_circle
              </span>
              <span className="font-headline uppercase tracking-widest text-[11px] font-bold text-zinc-100">
                {isAuthenticated ? "Logout" : "Login"}
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

