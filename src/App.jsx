import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import InfoPage from "./pages/InfoPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-work" element={<InfoPage />} />
        <Route path="/about-us" element={<InfoPage />} />
        <Route path="/events" element={<InfoPage />} />
        <Route path="/contact-us" element={<InfoPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
