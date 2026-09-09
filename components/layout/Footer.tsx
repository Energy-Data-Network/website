import { Link } from "react-router-dom";

const linkClass = "text-sm text-slate-300 transition hover:text-[#55e7bb]";

export const Footer = () => (
  <footer className="relative mt-auto overflow-hidden bg-[#061522] text-white">
    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#18c795]/20" />
    <div className="pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full border border-[#18c795]/15" />
    <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#55e7bb_1px,transparent_1px),linear-gradient(90deg,#55e7bb_1px,transparent_1px)] [background-size:48px_48px]" />

    <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr] lg:gap-20">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Energy Data Network home">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1 shadow-lg shadow-black/20"><img src="/logoedn.svg" alt="" className="h-full w-full" width={56} height={56} /></span>
            <span className="text-lg font-black leading-tight">Energy Data<span className="block text-[#55e7bb]">Network</span></span>
          </Link>
          <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">Simple digital products for people who produce, deliver, use and finance electricity.</p>
          <a href="mailto:info@energydatanetwork.com" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#55e7bb] hover:text-white"><span className="material-symbols-outlined text-lg">mail</span>info@energydatanetwork.com</a>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-400"><span className="material-symbols-outlined text-lg">location_on</span>Lagos, Nigeria</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
          <div><h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">Company</h2><ul className="mt-5 space-y-3"><li><Link to="/about" className={linkClass}>About us</Link></li><li><Link to="/careers" className={linkClass}>Careers</Link></li><li><Link to="/contact" className={linkClass}>Contact</Link></li><li><a href="https://www.linkedin.com/company/energy-data-network/" target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a></li></ul></div>
          <div><h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">Explore</h2><ul className="mt-5 space-y-3"><li><Link to="/products" className={linkClass}>All products</Link></li><li><Link to="/blog" className={linkClass}>Insights</Link></li><li><Link to="/events" className={linkClass}>Events</Link></li><li><Link to="/contact" className={linkClass}>Request a demo</Link></li></ul></div>
          <div className="col-span-2 sm:col-span-1"><h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">Products</h2><ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 sm:block sm:space-y-3"><li><Link to="/products/gridguard" className={linkClass}>GridGuard</Link></li><li><Link to="/products/edn-light" className={linkClass}>EDN Light</Link></li><li><Link to="/products/asteria" className={linkClass}>Asteria</Link></li><li><Link to="/products/bankable-data-exchange" className={linkClass}>Data Exchange</Link></li><li><Link to="/products/core" className={linkClass}>EDN Core</Link></li></ul></div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Energy Data Network. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/privacy" className="hover:text-white">Privacy Policy</Link><Link to="/terms" className="hover:text-white">Terms of Use</Link><button type="button" onClick={() => window.dispatchEvent(new Event("edn:open-cookie-settings"))} className="hover:text-white">Cookie settings</button></div>
      </div>
    </div>
  </footer>
);
