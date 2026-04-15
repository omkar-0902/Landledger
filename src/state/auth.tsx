import React from "react";

type AuthState = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(() => {
    const v = window.localStorage.getItem("landledger.auth");
    return v === "1";
  });

  const login = React.useCallback(() => {
    window.localStorage.setItem("landledger.auth", "1");
    setIsAuthenticated(true);
  }, []);

  const logout = React.useCallback(() => {
    window.localStorage.removeItem("landledger.auth");
    setIsAuthenticated(false);
  }, []);

  const value = React.useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

