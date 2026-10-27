import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useAboutContent } from "../../api/hooks";

export default function Footer() {
  const { data } = useAboutContent();
  if (!data) return <footer className="min-h-80 bg-gray-200" />;
  const { navigation, footer } = data;

  return (
    <footer id="contact" className="bg-gray-200 py-14 text-charcoal">
      <div className="section-wrap grid gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src="/maya-ki-pahal-logo.png"
              alt={footer.logoAlt}
              className="h-24 w-24 object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs leading-6 text-charcoal/75">{footer.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/"
              aria-label={`${footer.socialLabel} Facebook`}
              className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 text-teal transition hover:bg-saffron hover:text-teal"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label={`${footer.socialLabel} Instagram`}
              className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 text-teal transition hover:bg-saffron hover:text-teal"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-xl font-medium">{footer.quickLinksTitle}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {navigation.links.map((link) => (
              <li key={link.label}>
                <Link className="text-sm text-charcoal/75 transition hover:text-terracotta" to={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl font-medium">{footer.contactTitle}</h2>
          <ul className="mt-4 space-y-4 text-sm text-charcoal/75">
            <li className="flex gap-3">
              <MapPin className="shrink-0 text-teal" size={18} aria-hidden="true" />
              <span><strong className="text-charcoal">{footer.addressLabel}:</strong> {footer.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="shrink-0 text-teal" size={18} aria-hidden="true" />
              <a href={`tel:${footer.phone.replaceAll(" ", "")}`} className="hover:text-terracotta">
                <strong className="text-charcoal">{footer.phoneLabel}:</strong> {footer.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="shrink-0 text-teal" size={18} aria-hidden="true" />
              <a href={`mailto:${footer.email}`} className="break-all hover:text-terracotta">
                <strong className="text-charcoal">{footer.emailLabel}:</strong> {footer.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-wrap mt-12 border-t border-gray-300 pt-6 text-center text-sm text-charcoal/65">
        {footer.copyright}
      </div>
    </footer>
  );
}
