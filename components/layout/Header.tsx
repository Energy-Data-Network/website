import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../../data/products";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-emerald-700 font-bold"
      : "text-slate-700 hover:text-emerald-700";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Insights", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-slate-200 bg-white/95 text-slate-950 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logoedn.svg"
            alt="Energy Data Network"
            className="h-12 w-12"
          />
          <span className="hidden text-sm font-black leading-tight text-slate-950 sm:block">
            Energy Data
            <span className="block text-primary">Network</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="group relative py-5">
            <button type="button" onClick={() => setIsProductsOpen((open) => !open)} aria-expanded={isProductsOpen} className={`flex items-center gap-1 text-sm font-medium transition-colors ${location.pathname.startsWith("/products") ? "font-bold text-emerald-700" : "text-slate-700 hover:text-emerald-700"}`}>Products<span className={`material-symbols-outlined text-lg transition ${isProductsOpen ? "rotate-180" : "group-hover:rotate-180"}`}>expand_more</span></button>
            <div className={`${isProductsOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"} absolute left-1/2 top-[58px] z-[110] w-[620px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 text-slate-950 shadow-2xl transition`}>
              <div className="grid grid-cols-2 gap-1">{products.map((product) => <Link key={product.slug} to={`/products/${product.slug}`} onClick={() => setIsProductsOpen(false)} className="flex gap-3 rounded-xl p-3 hover:bg-slate-50"><span className="material-symbols-outlined mt-0.5 text-emerald-600">{product.icon}</span><span><span className="block text-sm font-bold">{product.name}</span><span className="mt-1 block text-xs text-slate-500">{product.eyebrow}</span></span></Link>)}</div>
              <Link to="/products" onClick={() => setIsProductsOpen(false)} className="mt-2 flex items-center justify-between rounded-lg bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">View all products<span className="material-symbols-outlined text-lg">arrow_forward</span></Link>
            </div>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${isActive(
                link.path
              )}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#18c795] px-4 py-2 text-sm font-bold text-[#071522] transition-colors hover:bg-[#13b78a]"
          >
            Request Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="p-2 text-slate-900 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-950 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            <Link to="/products" className={isActive("/products")} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <div className="grid gap-2 border-l border-slate-200 pl-4">{products.map((product) => <Link key={product.slug} to={`/products/${product.slug}`} className="text-sm text-slate-600 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>{product.name}</Link>)}</div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${isActive(
                  link.path
                )}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#18c795] px-4 py-2 text-sm font-bold text-[#071522] transition-colors hover:bg-[#13b78a]"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
