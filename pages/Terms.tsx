import { SEO, pageSEO } from "../components/SEO";

export const Terms = () => (
  <div className="bg-white text-slate-950">
    <SEO {...pageSEO.terms} />
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Terms of Use</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Terms for using this website</h1>
      <p className="mt-4 text-slate-600">Last updated: 9 September 2026</p>
      <div className="mt-10 space-y-8 leading-7 text-slate-700">
        <section><h2 className="text-2xl font-bold text-slate-950">About this website</h2><p className="mt-3">This website provides information about Energy Data Network and its products. You may use it for lawful personal or business enquiries.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">Product information</h2><p className="mt-3">Product descriptions explain intended capabilities and development direction. Availability, integrations, trials and commercial terms are confirmed separately in writing. Website content is not financial, legal or technical advice.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">Acceptable use</h2><p className="mt-3">Do not misuse the website, attempt unauthorized access, interfere with its operation, or submit unlawful or harmful material.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">Ownership and links</h2><p className="mt-3">Energy Data Network owns or licenses the website content, branding and software. External links are provided for convenience; their services and content remain under their owners' control.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="font-semibold text-emerald-700 hover:underline" href="mailto:info@energydatanetwork.com">info@energydatanetwork.com</a>. Energy Data Network is based in Lagos, Nigeria.</p></section>
      </div>
    </article>
  </div>
);
