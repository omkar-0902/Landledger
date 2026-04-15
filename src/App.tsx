import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./state/auth";
import { AboutUsPage } from "./pages/AboutUsPage";
import { LandingGuestPage } from "./pages/LandingGuestPage";
import { LandingLoggedInPage } from "./pages/LandingLoggedInPage";
import { LoginPage } from "./pages/LoginPage";
import { PropertyDetailsPrimaryPage } from "./pages/PropertyDetailsPrimaryPage";
import { PropertyDetailsSecondaryPage } from "./pages/PropertyDetailsSecondaryPage";
import { SecureAccessPage } from "./pages/SecureAccessPage";
import { SecureAccessEnhancedPage } from "./pages/SecureAccessEnhancedPage";
import { DesignsPage } from "./pages/DesignsPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { AdminDashboardRefinedPage } from "./pages/AdminDashboardRefinedPage";
import { AdminAddPropertyPage } from "./pages/AdminAddPropertyPage";

function HashScroll() {
  const { hash, pathname } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = window.decodeURIComponent(hash.slice(1));
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <HashScroll />
      <Routes>
        <Route path="/" element={<Navigate to="/landing/guest" replace />} />
        <Route path="/landing/guest" element={<LandingGuestPage />} />
        <Route path="/landing/logged-in" element={<LandingLoggedInPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/secure-access" element={<SecureAccessPage />} />
        <Route path="/secure-access-enhanced" element={<SecureAccessEnhancedPage />} />
        <Route path="/register-user" element={<SecureAccessEnhancedPage />} />
        <Route path="/property/primary" element={<PropertyDetailsPrimaryPage />} />
        <Route path="/property/secondary" element={<PropertyDetailsSecondaryPage />} />
        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/dashboard-refined" element={<AdminDashboardRefinedPage />} />
        <Route path="/admin/add-property" element={<AdminAddPropertyPage />} />
        <Route path="*" element={<Navigate to="/landing/guest" replace />} />
      </Routes>
    </AuthProvider>
  );
}
