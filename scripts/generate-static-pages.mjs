import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const origin = "https://energydatanetwork.com";
const pages = {
  about: {
    title: "About Energy Data Network | AI-Powered Electricity Infrastructure",
    description: "Learn how Energy Data Network builds AI-powered digital infrastructure for electricity access, payments, utility operations and trusted integrations across Africa.",
    body: `<h1>About Energy Data Network</h1><p>Energy Data Network (EDN) is building AI-powered digital infrastructure for Africa’s electricity sector. Its initial product, EDN Light, supports electricity access, payments, subscriptions, and transfers, while its utility-facing tools support revenue assurance, non-technical loss detection, operational analytics, and secure integrations with DisCos and licensed energy-service providers.</p><h2>Why we exist</h2><p>Electricity information is often spread across separate systems. We build clear, connected tools that help people pay for electricity, help providers understand what is happening, and help teams make better decisions.</p><p>We are based in Lagos, Nigeria and build for the everyday realities of African electricity markets.</p>`
  },
  contact: {
    title: "Contact Energy Data Network",
    description: "Contact Energy Data Network in Lagos, Nigeria about EDN Light, electricity payments, utility analytics, revenue assurance or secure integrations.",
    body: `<h1>Contact Energy Data Network</h1><p>Tell us what you need help with and which EDN product interests you. We welcome enquiries about EDN Light, electricity payments, utility analytics, revenue assurance, loss detection and secure system connections.</p><h2>Email</h2><p><a href="mailto:info@energydatanetwork.com">info@energydatanetwork.com</a></p><h2>Location</h2><p>Lagos, Nigeria</p>`
  },
  privacy: {
    title: "Privacy Policy | Energy Data Network",
    description: "How Energy Data Network handles information shared through its website and product enquiries.",
    body: `<h1>Privacy Policy</h1><p>Last updated: 9 September 2026</p><h2>Information you share</h2><p>When you contact Energy Data Network, we may receive your name, email address, organization, area of interest and message. We use it to answer your enquiry and discuss the product or service you selected.</p><h2 id="cookies">Cookies</h2><p>We use a first-party cookie named <code>edn_cookie_consent</code> to remember whether you allowed optional cookies or chose essential cookies only. It lasts for up to 180 days. The website does not currently use advertising or analytics cookies.</p><h2>How we use information</h2><p>We use information to operate and protect the website, respond to requests, improve our services and meet legal obligations. We do not sell personal information.</p><h2>Your choices</h2><p>You may ask us to access, correct or delete information you submitted, subject to applicable law. Email <a href="mailto:info@energydatanetwork.com">info@energydatanetwork.com</a>.</p>`
  },
  terms: {
    title: "Terms of Use | Energy Data Network",
    description: "Terms for using the Energy Data Network website and contacting us about our products.",
    body: `<h1>Terms of Use</h1><p>Last updated: 9 September 2026</p><h2>About this website</h2><p>This website provides information about Energy Data Network and its products. You may use it for lawful personal or business enquiries.</p><h2>Product information</h2><p>Product descriptions explain intended capabilities and development direction. Availability, integrations, trials and commercial terms are confirmed separately in writing.</p><h2>Contact</h2><p>Email <a href="mailto:info@energydatanetwork.com">info@energydatanetwork.com</a> with questions about these terms.</p>`
  }
};

const template = await readFile("dist/index.html", "utf8");
for (const [route, page] of Object.entries(pages)) {
  const canonical = `${origin}/${route}`;
  const shell = `<article><header><a href="/"><img src="/logoedn.svg" alt="Energy Data Network" width="72" height="72"></a><nav><a href="/about">About</a> · <a href="/products">Products</a> · <a href="/contact">Contact</a></nav></header><main>${page.body}</main><footer><p>Lagos, Nigeria · <a href="mailto:info@energydatanetwork.com">info@energydatanetwork.com</a></p><p><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Use</a></p><p>© 2026 Energy Data Network. All rights reserved.</p></footer></article>`;
  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${page.title}</title>`)
    .replace(/<meta name="title" content="[^"]*"\s*\/?>/, `<meta name="title" content="${page.title}" />`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${page.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${page.description}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${page.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${page.description}" />`)
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${shell}</div>`);
  const directory = join("dist", route);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), html);
}
console.log(`Generated ${Object.keys(pages).length} crawlable route pages.`);
