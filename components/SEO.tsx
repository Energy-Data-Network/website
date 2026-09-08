import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
}

const DEFAULT_TITLE =
  "Energy Data Network | Digital Products for Africa's Energy Future";
const DEFAULT_DESCRIPTION =
  "Energy Data Network builds simple digital products that help energy companies understand data, improve operations, serve customers and prepare for investment.";
const DEFAULT_IMAGE = "https://energydatanetwork.com/images/og-image.png";
const SITE_NAME = "Energy Data Network";

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  author,
  publishedTime,
}: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const updateMetaTag = (
      attribute: string,
      value: string,
      content: string
    ) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    updateMetaTag("name", "description", description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // Update Open Graph tags
    updateMetaTag("property", "og:title", fullTitle);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", image);
    updateMetaTag("property", "og:type", type);
    if (url) {
      updateMetaTag("property", "og:url", url);
    }

    // Update Twitter tags
    updateMetaTag("name", "twitter:title", fullTitle);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", image);

    // Article-specific tags
    if (type === "article") {
      if (author) {
        updateMetaTag("name", "author", author);
        updateMetaTag("property", "article:author", author);
      }
      if (publishedTime) {
        updateMetaTag("property", "article:published_time", publishedTime);
      }
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [
    fullTitle,
    description,
    keywords,
    image,
    url,
    type,
    author,
    publishedTime,
  ]);

  return null;
};

// SEO data for each page
export const pageSEO = {
  home: {
    title: undefined, // Uses default
    description:
      "Energy Data Network builds digital products for grid intelligence, customer energy services, simulation, GenCo bankability and trusted energy data exchange.",
    keywords:
      "energy data Africa, utility technology, grid intelligence, customer energy services, GenCo bankability, energy data exchange",
  },
  about: {
    title: "About Us",
    description:
      "Learn how Energy Data Network builds useful digital products for utilities, electricity customers, generation companies and investors across Africa.",
    keywords:
      "about EDN, Energy Data Network, energy technology Africa, utility data, energy products",
  },
  products: {
    title: "Energy Technology Products",
    description:
      "Explore EDN products for utility revenue protection, customer energy services, grid simulation, GenCo bankability and governed energy data exchange.",
    keywords:
      "energy technology products, utility intelligence, EDN Light, GridGuard, digital twin, GenCo bankability, energy data exchange",
  },
  events: {
    title: "Events and Briefings",
    description:
      "Join EDN product demos, energy-data roundtables and industry briefings for energy organizations.",
    keywords:
      "utility intelligence events, revenue protection demo, non-technical losses roundtable, power theft detection briefing",
  },
  blog: {
    title: "Insights",
    description:
      "Read EDN insights on utility intelligence, energy data, customer services, grid operations and energy finance.",
    keywords:
      "utility intelligence insights, power theft detection articles, non-technical losses, smart meter analytics, revenue assurance",
  },
  contact: {
    title: "Contact Us",
    description:
      "Contact Energy Data Network to discuss an energy-data product, demo, pilot or project inquiry.",
    keywords:
      "contact EDN, energy technology demo, utility products, energy data Africa",
  },
  careers: {
    title: "Careers",
    description:
      "Join Energy Data Technology and help build AI systems for power theft detection, non-technical loss reduction, utility analytics, and revenue protection.",
    keywords:
      "utility analytics careers, AI energy jobs, power theft detection jobs, revenue assurance careers, GIS utility jobs",
  },
};
