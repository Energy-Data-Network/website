import { SEO, pageSEO } from "../components/SEO";

export const Privacy = () => (
  <div className="bg-white text-slate-950">
    <SEO {...pageSEO.privacy} />
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Privacy Policy</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">How we handle your information</h1>
      <p className="mt-4 text-slate-600">Last updated: 9 September 2026</p>
      <div className="mt-10 space-y-8 leading-7 text-slate-700">
        <section><h2 className="text-2xl font-bold text-slate-950">Information you share</h2><p className="mt-3">When you contact Energy Data Network, we may receive your name, email address, organization, area of interest and the message you send. We use this information to answer your enquiry and discuss the product or service you selected.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">Website information</h2><p className="mt-3">Our hosting and website services may process basic technical information needed to deliver and protect the site, such as your IP address, browser type and request time.</p></section>
        <section id="cookies"><h2 className="text-2xl font-bold text-slate-950">Cookies</h2><p className="mt-3">We use a first-party cookie named <code>edn_cookie_consent</code> to remember whether you allowed optional cookies or chose essential cookies only. It lasts for up to 180 days and does not identify you directly. The website does not currently use advertising or analytics cookies. If optional cookies are introduced, your saved choice will control whether they may run.</p><p className="mt-3">You can change your choice at any time using “Cookie settings” in the website footer. You can also remove the cookie through your browser settings.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">How we use and share information</h2><p className="mt-3">We use information to operate the website, respond to requests, improve our services and meet legal obligations. We only share it with service providers supporting these purposes or when required by law. We do not sell personal information.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">Your choices</h2><p className="mt-3">You may ask us to access, correct or delete information you submitted, subject to applicable law and records we must retain.</p></section>
        <section><h2 className="text-2xl font-bold text-slate-950">Contact</h2><p className="mt-3">For privacy questions, email <a className="font-semibold text-emerald-700 hover:underline" href="mailto:info@energydatanetwork.com">info@energydatanetwork.com</a>. Energy Data Network is based in Lagos, Nigeria.</p></section>
      </div>
    </article>
  </div>
);
