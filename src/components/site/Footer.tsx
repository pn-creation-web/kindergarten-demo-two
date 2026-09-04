import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contact, nav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <div className="inline-block bg-ivory px-4 py-3">
            <img
              src={site.logo.src}
              alt={site.logo.alt}
              width={320}
              height={67}
              loading="lazy"
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/65">
            A women-owned preschool, daycare and activities centre in {site.locality} — an
            unhurried, structured early-years education for children aged 1.5 to 6.
          </p>
          <a
            href={contact.instagram.url}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm text-gold transition-opacity hover:opacity-80"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            {contact.instagram.handle}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-gold">Explore</h2>
          <ul className="mt-6 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold">Visit & Contact</h2>
          <ul className="mt-6 space-y-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {contact.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </li>
            {contact.phones.map((p) => (
              <li key={p.tel} className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${p.tel}`} className="hover:text-ivory">
                  {p.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-ivory">
                {contact.email}
              </a>
            </li>
          </ul>
          <dl className="mt-6 space-y-1 text-sm text-ivory/60">
            {contact.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs tracking-wide text-ivory/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name} {site.locality}. Women-owned & women-led.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
      {/* Google Ads / conversion tag placeholder — add manually later. */}
    </footer>
  );
}
