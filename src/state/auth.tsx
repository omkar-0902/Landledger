import React from "react";

type AuthState = {
  isAuthenticated: boolean;
  contactVerified: boolean;
  login: () => void;
  logout: () => void;
  verifyContact: () => void;
};

const AuthContext = React.createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(() => {
    const v = window.localStorage.getItem("landledger.auth");
    return v === "1";
  });
  const [contactVerified, setContactVerified] = React.useState<boolean>(() => {
    const v = window.localStorage.getItem("landledger.contactVerified");
    return v === "1";
  });

  const login = React.useCallback(() => {
    window.localStorage.setItem("landledger.auth", "1");
    setIsAuthenticated(true);
  }, []);

  const logout = React.useCallback(() => {
    window.localStorage.removeItem("landledger.auth");
    window.localStorage.removeItem("landledger.contactVerified");
    setIsAuthenticated(false);
    setContactVerified(false);
  }, []);

  const verifyContact = React.useCallback(() => {
    window.localStorage.setItem("landledger.contactVerified", "1");
    setContactVerified(true);
  }, []);

  const value = React.useMemo(
    () => ({ isAuthenticated, contactVerified, login, logout, verifyContact }),
    [isAuthenticated, contactVerified, login, logout, verifyContact],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
