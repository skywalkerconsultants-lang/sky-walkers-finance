import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/skywalker-logo.png.asset.json";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/accounting", label: "Accounting" },
  { to: "/vat", label: "VAT" },
  { to: "/corporate-tax", label: "Corporate Tax" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border text-foreground"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className={`inline-flex items-center rounded-xl px-2.5 py-1.5 transition-smooth ${scrolled ? "" : "bg-white shadow-glow"}`}>
            <img src={logo.url} alt="Sky Walkers Consultancy" width={660} height={372}
              className="h-12 lg:h-14 w-auto" />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className="px-3 py-2 text-sm font-medium opacity-90 hover:text-primary transition-smooth"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/971553104053"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:opacity-90 transition-smooth"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background text-foreground">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://wa.me/971553104053"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
