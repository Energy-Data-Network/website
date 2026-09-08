import { Link } from "react-router-dom";
import { SEO, pageSEO } from "../components/SEO";
import { products } from "../data/products";
import koladeImg from "@/images/founder/kolade.jpg";
import timiImg from "@/images/founder/timi.jpg";
import obafemiImg from "@/images/founder/obafemi.jpg";

const secondaryLink = "inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 px-7 text-sm font-bold text-white transition hover:bg-white/15";

const principles = [
  { icon: "ads_click", title: "Useful outcomes", text: "We start with the decision or workflow that needs to improve, then build the data product around it." },
  { icon: "verified_user", title: "Trust by design", text: "We treat security, consent, evidence, model limits and accountability as product requirements." },
  { icon: "hub", title: "Connected systems", text: "We design products that can work across utilities, market institutions and technology systems." },
  { icon: "public", title: "Built for Africa", text: "We develop for the operational, commercial and infrastructure realities of African energy markets." },
];

const team = [
  { name: "Elijah Obafemi", role: "Lead Software Engineer", img: obafemiImg },
  { name: "Liberty Rayesomo", role: "Head of Research", img: timiImg },
  { name: "Kolade Atanseiye", role: "Lead Data Scientist", img: koladeImg },
];

export const About = () => <div className="bg-white pb-20 text-slate-950">
  <SEO {...pageSEO.about} />
  <section className="relative overflow-hidden border-b border-white/10"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,hsl(var(--primary)/0.14),transparent_40%)]" /><div className="container relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28"><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">About EDN</p><h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">We make energy data easier to understand and use.</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">Energy Data Network builds practical digital products for utilities, electricity customers, generation companies and investors across Africa.</p></div></section>

  <section className="container mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Why we exist</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Better energy decisions need better connected data.</h2></div><div className="space-y-5 text-lg leading-relaxed text-muted-foreground"><p>Energy systems generate valuable operational, customer, network and financial data. Too often, that data sits across disconnected tools, arrives without enough context, or never reaches the people making daily decisions.</p><p>EDN brings technology, data science, energy research and product engineering together to close that gap. We build tools that help people see what is happening, understand what it means and take the next action with confidence.</p></div></section>

  <section className="bg-white/[0.025] py-20"><div className="container mx-auto max-w-7xl px-4 md:px-6"><div className="grid gap-6 md:grid-cols-2"><div className="rounded-xl border border-white/10 bg-background/70 p-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Our vision</p><h2 className="mt-4 text-2xl font-bold leading-relaxed">An African energy ecosystem where trusted data improves access, reliability, efficiency and investment.</h2></div><div className="rounded-xl border border-white/10 bg-background/70 p-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Our mission</p><h2 className="mt-4 text-2xl font-bold leading-relaxed">To build useful, trusted and interoperable data products for the people operating, using and financing energy systems.</h2></div></div></div></section>

  <section className="container mx-auto max-w-7xl px-4 py-20 md:px-6"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">What we are building</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A connected portfolio across the energy value chain.</h2><p className="mt-4 text-lg text-muted-foreground">Each product addresses a distinct user and decision while contributing to a broader energy-data ecosystem.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{products.map((product) => <Link key={product.slug} to={`/products/${product.slug}`} className="group rounded-xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-primary/40 hover:bg-white/[0.065]"><div className="flex items-start justify-between gap-4"><span className="material-symbols-outlined text-3xl text-primary">{product.icon}</span><span className="material-symbols-outlined text-primary transition group-hover:translate-x-1">arrow_forward</span></div><h3 className="mt-5 text-xl font-black">{product.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.summary}</p></Link>)}</div></section>

  <section className="bg-white/[0.025] py-20"><div className="container mx-auto max-w-7xl px-4 md:px-6"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">How we work</p><h2 className="mt-3 text-3xl font-black">Principles behind every EDN product.</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{principles.map((item) => <div key={item.title} className="rounded-xl border border-white/10 bg-background/70 p-6"><span className="material-symbols-outlined text-3xl text-primary">{item.icon}</span><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div></div></section>

  <section className="container mx-auto max-w-7xl px-4 py-20 md:px-6"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Our team</p><h2 className="mt-3 text-3xl font-black">Built by people across technology, research and data.</h2></div><div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{team.map((person) => <div key={person.name}><img src={person.img} alt={person.name} className="aspect-square w-full rounded-xl object-cover ring-1 ring-white/10" /><h3 className="mt-4 font-bold">{person.name}</h3><p className="mt-1 text-sm text-primary">{person.role}</p></div>)}</div></div></section>

  <section className="container mx-auto max-w-7xl px-4 md:px-6"><div className="rounded-xl bg-primary px-8 py-10 text-slate-950 md:flex md:items-center md:justify-between md:gap-8"><div><h2 className="text-3xl font-black">See what EDN can do for you.</h2><p className="mt-2 max-w-2xl font-medium text-slate-900/75">Explore our products or tell us about the energy problem you need to solve.</p></div><div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0"><Link to="/products" className="inline-flex h-11 items-center justify-center rounded-md bg-slate-950 px-7 text-sm font-bold text-white hover:bg-slate-900">Explore products</Link><Link to="/contact?product=General%20inquiry" className={secondaryLink}>Contact EDN</Link></div></div></section>
</div>;
