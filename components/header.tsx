"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Production", href: "/#production" },
  { label: "Contact", href: "/#contact" },
];

function PrimaryBtn({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full
        bg-accent hover:bg-accent-hover text-white text-[13px] font-semibold
        tracking-wide border-none cursor-pointer transition-colors duration-200"
    >
      {label}
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!isHome) return;
    const fn = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["home", "production", "about", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 90 && r.bottom >= 90) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [isHome]);

  useEffect(() => {
    setScrolled(false);
    if (!isHome) return;
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [pathname, isHome]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const isHashLink = href.includes("#");
    const sectionId = isHashLink ? href.split("#")[1] : null;

    if (isHashLink) {
      if (isHome && sectionId) {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (!isHome) return pathname === href;
    if (href === "/") return activeSection === "home" || activeSection === "";
    if (href.includes("#")) return activeSection === href.split("#")[1];
    return false;
  };

  const navLinkClass = (href: string) =>
    `text-[14px] font-medium font-sans transition-colors duration-200 cursor-pointer
    ${isActive(href) ? "text-accent" : "text-muted hover:text-ink"}`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-bg/95 backdrop-blur-md border-b border-subtle shadow-sm py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <span className="text-[18px] font-bold tracking-tight text-ink font-sans">
            Palak Garmets
          </span>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`bg-transparent border-none ${navLinkClass(item.href)}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <PrimaryBtn
              label="Get in Touch"
              onClick={() => handleNavClick("/#contact")}
            />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-2 bg-transparent border-none cursor-pointer p-1 z-210 relative"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-[1.5px] rounded bg-ink transition-all duration-300 ${
                  i === 0 && mobileOpen
                    ? "rotate-45 translate-y-[6.5px]"
                    : i === 2 && mobileOpen
                      ? "-rotate-45 -translate-y-[6.5px]"
                      : i === 1 && mobileOpen
                        ? "opacity-0"
                        : ""
                }`}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-200 bg-surface flex flex-col items-center justify-center gap-8
        transition-all duration-300
        ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-2xl text-muted bg-transparent border-none cursor-pointer"
        >
          ✕
        </button>
        {NAV.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className="font-serif text-[36px] font-bold text-ink hover:text-accent transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
