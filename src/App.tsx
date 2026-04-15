import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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

export default function App() {
  return (
    <AuthProvider>
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
        <Route path="*" element={<Navigate to="/landing/guest" replace />} />
      </Routes>
    </AuthProvider>
  );
}

