import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_NAME = "edn_cookie_consent";

type ConsentChoice = "accepted" | "essential";

const readChoice = (): ConsentChoice | null => {
  const value = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];
  return value === "accepted" || value === "essential" ? value : null;
};

export const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(readChoice() === null);
    const openSettings = () => setIsOpen(true);
    window.addEventListener("edn:open-cookie-settings", openSettings);
    return () => window.removeEventListener("edn:open-cookie-settings", openSettings);
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${COOKIE_NAME}=${choice}; Max-Age=15552000; Path=/; SameSite=Lax${secure}`;
    window.dispatchEvent(new CustomEvent("edn:cookie-consent", { detail: choice }));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-[200] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-2xl sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
    >
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 id="cookie-consent-title" className="text-lg font-black">Your cookie choice</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            We use a necessary cookie to remember your choice. You can allow optional cookies for future experience improvements or continue with essential cookies only. Read our{" "}
            <Link to="/privacy#cookies" className="font-bold text-emerald-700 hover:underline">cookie information</Link>.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
          <button type="button" onClick={() => saveChoice("accepted")} className="h-11 rounded-lg bg-emerald-500 px-5 text-sm font-bold text-slate-950 hover:bg-emerald-400">Allow cookies</button>
          <button type="button" onClick={() => saveChoice("essential")} className="h-11 rounded-lg border border-slate-300 px-5 text-sm font-bold text-slate-700 hover:bg-slate-50">Essential only</button>
        </div>
      </div>
    </aside>
  );
};
