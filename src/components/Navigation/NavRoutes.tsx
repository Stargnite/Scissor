import * as React from "react";
import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../Landing-Page/LandingPage";
const LazyAboutPage = React.lazy(() => import("../About-Page/AboutPage.tsx"));
const LazyDashboard = React.lazy(() => import("../Dashboard/Dashboard.tsx"));
import { AuthContext } from "../../store/auth-context";
import NotFound from "../pageNotFound/NotFound";
import Login from "../LogIn-Page/Login";
import Signup from "../Signup-Page/Signup";
import Pricing from "../Landing-Page/Pricing/Pricing";
import FAQ from "../Landing-Page/FAQ-section/FAQ";
import ViewPort2 from "../Landing-Page/ViewPort2";
import Trimmer from "../Trimmer/Trimmer.tsx";

const NavRoutes: React.FC = () => {
  const authCtx = useContext(AuthContext);
  // const user = UseAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/trimmer" element={<Trimmer />} />

      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback="Loading...">
            {authCtx.isLoggedIn && <LazyDashboard />}
            {!authCtx.isLoggedIn && <Navigate to="/login" />}
          </React.Suspense>
        }
      />
      <Route
        path="about"
        element={
          <React.Suspense fallback="Loading...">
            <LazyAboutPage />
          </React.Suspense>
        }
      />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<ViewPort2 />} />
      <Route path="/faqs" element={<FAQ />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavRoutes;
