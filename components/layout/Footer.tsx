import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#071522] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col">
            <div>
              <img
                src="/logoedn.svg"
                alt="Energy Data Network"
                className="h-20 w-20"
                width={80}
                height={80}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered utility intelligence for power theft detection and
              revenue protection.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="transition-colors hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="transition-colors hover:text-primary"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/blog"
                  className="transition-colors hover:text-primary"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="transition-colors hover:text-primary"
                >
                  Events and Briefings
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/energy-data-network/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold">Products</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products/gridguard" className="transition-colors hover:text-primary">EDN GridGuard</Link></li>
              <li><Link to="/products/edn-light" className="transition-colors hover:text-primary">EDN Light</Link></li>
              <li><Link to="/products/asteria" className="transition-colors hover:text-primary">Asteria Digital Twin</Link></li>
              <li><Link to="/products/bankable-data-exchange" className="transition-colors hover:text-primary">Bankable Data Exchange</Link></li>
              <li><Link to="/products/core" className="transition-colors hover:text-primary">EDN Core</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Energy Data Network. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
