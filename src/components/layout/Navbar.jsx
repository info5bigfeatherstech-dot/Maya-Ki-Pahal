import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAboutContent } from "../../api/hooks";
import { useUIStore } from "../../store/useUIStore";
import Button from "../common/Button";

export default function Navbar() {
  const { data } = useAboutContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobileMenuOpen = useUIStore((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);
  const closeMobileMenu = useUIStore((state) => state.closeMobileMenu);
  const setDonateModalOpen = useUIStore((state) => state.setDonateModalOpen);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  if (!data) return null;
  const { navigation } = data;
  const linkStyle = "text-sm font-medium text-charcoal transition hover:text-terracotta";

  const onDonate = () => {
    closeMobileMenu();
    setDonateModalOpen(true);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 py-1 shadow-soft backdrop-blur-sm"
          : "bg-cream/95 py-1"
      }`}
    >
      <div className="section-wrap flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMobileMenu}
          aria-label={navigation.logo}
          className="flex items-center"
        >
          <img
            src="/maya-ki-pahal-logo.png"
            alt={navigation.logoAlt}
            className="h-[88px] w-[120px] object-contain md:h-[104px] md:w-[142px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navigation.links.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? "text-terracotta" : ""}`
              }
              to={link.href}
              key={link.label}
              end={link.href === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          <Button onClick={onDonate} className="min-h-10 px-5 py-2">
            {navigation.donateLabel}
          </Button>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full text-teal lg:hidden"
          onClick={toggleMobileMenu}
          aria-label={
            isMobileMenuOpen ? navigation.closeMenuLabel : navigation.menuLabel
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-4 top-[calc(100%-0.25rem)] rounded-2xl bg-cream p-5 shadow-soft lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navigation.links.map((link) => (
              <NavLink
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 font-medium hover:bg-white ${
                    isActive ? "text-terracotta" : "text-charcoal"
                  }`
                }
                to={link.href}
                key={link.label}
                end={link.href === "/"}
                onClick={closeMobileMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <Button onClick={onDonate} className="mt-2">
              {navigation.donateLabel}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
