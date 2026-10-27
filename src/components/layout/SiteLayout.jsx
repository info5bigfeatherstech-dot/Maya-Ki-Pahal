import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DonateModal from "./DonateModal";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <DonateModal />
    </>
  );
}