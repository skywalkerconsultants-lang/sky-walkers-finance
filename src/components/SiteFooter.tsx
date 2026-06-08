import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.15_0_0)] text-white/80 mt-24">
      <div className="container mx-auto max-w-7xl px-5 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-xl text-white">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gradient-primary">S</span>
            SKY <span className="text-primary">WALKERS</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
            Smart accounting, tax and financial reporting solutions for UAE SMEs, startups, free zone
            companies and CPA firms. Supported by a qualified global accounting team — CMAs, Chartered
            Accountants, ACCA professionals and experienced accountants — delivering reliable solutions
            across multiple jurisdictions.
          </p>
        </div>
        <div>
          <div className="font-display font-semibold text-white mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/accounting" className="hover:text-primary">Accounting</Link></li>
            <li><Link to="/book-cleanup" className="hover:text-primary">Book Cleanup</Link></li>
            <li><Link to="/vat" className="hover:text-primary">VAT Filing</Link></li>
            <li><Link to="/corporate-tax" className="hover:text-primary">Corporate Tax</Link></li>
            <li><Link to="/management-reporting" className="hover:text-primary">Management Reporting</Link></li>
            <li><Link to="/resources" className="hover:text-primary">Resources</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold text-white mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Dubai, United Arab Emirates</li>
            <li>hello@skywalkers.ae</li>
            <li>+971 50 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8 py-6 text-xs text-white/50 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Sky Walkers Consultancy. All rights reserved.</span>
          <span>Made for modern UAE businesses.</span>
        </div>
      </div>
    </footer>
  );
}
