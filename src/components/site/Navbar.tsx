import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site, primaryPhone } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-ivory/90 py-3 backdrop-blur-md shadow-elegant"
          : "border-b border-transparent bg-ivory/40 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center" aria-label={`${site.name} — home`}>
          <img
            src={site.logo.src}
            alt={site.logo.alt}
            width={320}
            height={67}
            className={`w-auto transition-all duration-500 ${scrolled ? "h-9" : "h-11"}`}
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-[0.8rem] font-normal uppercase tracking-[0.18em] text-navy/75 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${primaryPhone.tel}`}
            className="flex items-center gap-2 text-[0.8rem] tracking-wide text-slate transition-colors hover:text-navy"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {primaryPhone.label}
          </a>
          <Link
            to="/contact"
            hash="book-a-visit"
            className="border border-navy bg-navy px-6 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-transparent hover:text-navy"
          >
            Book a Visit
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 text-navy lg:hidden"
        >
          {open ? <Menu className="hidden" /> : null}
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-ivory lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-border/60 py-4 text-sm uppercase tracking-[0.18em] text-navy/80"
                activeProps={{ className: "text-navy" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              hash="book-a-visit"
              className="mt-5 bg-navy px-6 py-4 text-center text-[0.72rem] uppercase tracking-[0.2em] text-ivory"
            >
              Book a Visit
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
