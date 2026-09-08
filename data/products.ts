export type Product = {
  slug: string; name: string; eyebrow: string; category: string; status: string;
  icon: string; image: string; headline: string; summary: string; audience: string[]; outcomes: string[];
  capabilities: { title: string; description: string }[];
  workflow: { title: string; description: string }[]; cta: string; ctaNote: string;
};

export const products: Product[] = [
  {
    slug: "gridguard", name: "EDN GridGuard", eyebrow: "Find and reduce electricity losses",
    category: "For electricity companies", status: "Ready for a trial", icon: "shield_with_heart", image: "/images/products/gridguard.jpg",
    headline: "See where electricity is being lost and know where to act first.",
    summary: "GridGuard compares electricity moving through the network with what meters report. It shows unusual activity and helps teams focus their checks on the right places.",
    audience: ["Electricity companies", "Small power providers", "Field teams", "Meter companies"],
    outcomes: ["Find unusual electricity use sooner", "Know which locations to check first", "See losses by area", "Follow each case from alert to result"],
    capabilities: [
      { title: "Spot unusual activity", description: "Find meters and locations where reported use does not match expected use." },
      { title: "See where losses happen", description: "Compare electricity supplied with electricity recorded across each area." },
      { title: "Organize field checks", description: "Create cases, assign team members and record what they find." },
      { title: "Contact customers", description: "Keep a clear record of calls, follow-ups and cases that need human attention." },
    ],
    workflow: [
      { title: "Connect your records", description: "Bring in meter readings and information about how electricity moves through each area." },
      { title: "Find what looks unusual", description: "GridGuard compares the records and highlights places that need attention." },
      { title: "Check and record the result", description: "Your team visits the location, records what happened and follows the case." },
    ], cta: "Try GridGuard with your team", ctaNote: "Tell us where electricity losses are difficult to find and what records you already have.",
  },
  {
    slug: "edn-light", name: "EDN Light", eyebrow: "Everyday electricity services",
    category: "For people who use electricity", status: "Being connected to providers", icon: "bolt", image: "/images/products/edn-light.jpg",
    headline: "A simpler way for customers to manage, buy and share electricity.",
    summary: "EDN Light is an app for checking a meter, seeing electricity use, buying electricity, sending electricity to someone else and keeping every receipt in one place.",
    audience: ["Homes", "Small businesses", "Electricity companies", "Community power providers"],
    outcomes: ["One customer view of meter and energy activity", "Faster, clearer top-up journeys", "Transparent receipts and transaction history", "Provider-ready customer service channels"],
    capabilities: [
      { title: "Your meter in one place", description: "Connect your meter, check your balance and see how much electricity you use." },
      { title: "Buy or send electricity", description: "Buy for your own meter or pay for electricity for family and friends." },
      { title: "Safe payments", description: "Approve each payment and always see whether it was completed." },
      { title: "Electricity when money is short", description: "Where available, see the full cost before choosing to get electricity and pay later." },
    ],
    workflow: [
      { title: "Verify the customer and meter", description: "Confirm account access and the customer-to-meter relationship." },
      { title: "Choose an energy service", description: "View usage, buy energy, send a gift or review eligible services." },
      { title: "Track every outcome", description: "Keep receipts, tokens, balances and transaction states available after checkout." },
    ], cta: "Talk to us about EDN Light", ctaNote: "Tell us how people currently check meters, buy electricity and get help.",
  },
  {
    slug: "asteria", name: "Asteria Digital Twin", eyebrow: "Grid simulation and validation",
    category: "For people building energy products", status: "Available for testing", icon: "location_city", image: "/images/products/asteria.jpg",
    headline: "Test energy intelligence safely before it touches a live network.",
    summary: "Asteria is a computer-made neighbourhood with homes, meters, poles and power equipment. Teams use it to safely test what their technology will do in different situations.",
    audience: ["Electricity companies", "Technology teams", "Schools and researchers", "Meter and power-equipment companies"],
    outcomes: ["Repeat the same test when needed", "Know what really happened in every test", "Try new systems without affecting customers", "Review every event afterwards"],
    capabilities: [
      { title: "A complete test neighbourhood", description: "Explore connected homes, meters, poles and power equipment." },
      { title: "Safe test situations", description: "Try meter problems, equipment faults and unusual electricity use without affecting real customers." },
      { title: "Reliable test records", description: "Create repeatable information for building and checking new technology." },
      { title: "Live readings", description: "Send meter readings to another system and compare its answer with what really happened." },
    ],
    workflow: [
      { title: "Set up the neighbourhood", description: "Choose how homes use electricity and how quickly the test runs." },
      { title: "Choose what happens", description: "Create a known meter or equipment problem and keep a full record." },
      { title: "Check the result", description: "See whether the technology found the problem and responded correctly." },
    ], cta: "Plan a test with Asteria", ctaNote: "Tell us what situation or technology you need to test safely.",
  },
  {
    slug: "bankable-data-exchange", name: "Bankable Data Exchange", eyebrow: "Clear records for funding decisions",
    category: "For power stations and funders", status: "Being prepared for first use", icon: "account_balance", image: "/images/products/bankable-data-exchange.jpg",
    headline: "Turn fragmented generation evidence into finance-ready decisions.",
    summary: "Bankable Data Exchange brings power production, payments and supporting documents together. It helps power stations explain their performance and helps funders review the facts.",
    audience: ["Power stations", "Power-company groups", "Banks and lenders", "Investors and review teams"],
    outcomes: ["Follow electricity from production to payment", "Compare how ready projects are for funding", "Share documents with the right people", "Repeat financial checks with the same assumptions"],
    capabilities: [
      { title: "Organized records", description: "Bring production, payment and supporting documents together and show where each record came from." },
      { title: "Funding readiness", description: "Explain performance, money collected and missing information in one clear view." },
      { title: "What-if checks", description: "See what may happen when production, costs, payments or loan terms change." },
      { title: "Safe document sharing", description: "Let approved reviewers see selected documents for a limited time." },
    ],
    workflow: [
      { title: "Bring the records together", description: "Add information, keep the original files and point out anything missing or unusual." },
      { title: "Check the facts", description: "Review the documents and connect power produced with money expected and received." },
      { title: "Prepare for a funding review", description: "Create clear summaries, what-if checks and a trusted document pack." },
    ], cta: "Talk about a funding review", ctaNote: "Tell us what power-production records or funding decision you need to make clearer.",
  },
  {
    slug: "core", name: "EDN Core", eyebrow: "A shared home for energy data",
    category: "For energy companies and app builders", status: "In development", icon: "hub", image: "/images/products/core.jpg",
    headline: "One safe way for energy systems and apps to share information.",
    summary: "EDN Core is being built to help energy companies and apps share information in a safe, consistent way without rebuilding the same connections every time.",
    audience: ["Energy companies", "Government and market bodies", "App developers", "Schools and research teams"],
    outcomes: ["Use the same meaning for shared information", "Control who and what can connect", "Build new products without starting from zero", "Know where information came from and who approved it"],
    capabilities: [
      { title: "Share information", description: "Help different energy systems exchange information in the same clear format." },
      { title: "Connect applications", description: "Let approved apps connect and manage what each one is allowed to use." },
      { title: "Keep information trusted", description: "Record identity, permission, quality checks, changes and approvals." },
      { title: "Build more quickly", description: "Give new energy products a shared starting point for data and connections." },
    ],
    workflow: [
      { title: "Set up each organization", description: "Confirm who is connecting, where their information comes from and what they may use." },
      { title: "Use one clear format", description: "Check the information and keep a record of its source and quality." },
      { title: "Connect useful products", description: "Allow approved apps to use the shared information safely." },
    ], cta: "Talk to us about EDN Core", ctaNote: "Tell us which energy systems need to share information and what currently makes that difficult.",
  },
];

export const getProduct = (slug: string | undefined) => products.find((product) => product.slug === slug);
