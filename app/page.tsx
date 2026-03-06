"use client";
import { useState, useEffect } from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "production", label: "Production" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  {
    title: "Apparel Manufacturing",
    desc: "End-to-end garment production for fashion brands of all sizes, from sampling to final delivery.",
    img: "/image1.jpeg",
  },
  {
    title: "Bulk Clothing Production",
    desc: "Consistent, high-volume runs with strict quality checks built into every stage.",
    img: "/image3.jpeg",
  },
  {
    title: "Private Label",
    desc: "We produce it, you brand it. Clean white-label manufacturing with full confidentiality.",
    img: "/image2.jpeg",
  },
  {
    title: "Design to Production",
    desc: "Technical support from your design files to production-ready patterns and samples.",
    img: "/image5.jpeg",
  },
  {
    title: "Quality Control",
    desc: "Multi-point inspection at every checkpoint before anything leaves our floor.",
    img: "/image4.jpeg",
  },
  {
    title: "Brand Partnerships",
    desc: "Ongoing manufacturing relationships built on transparency, reliability, and results.",
    img: "/image1.jpeg",
  },
];

const WHY = [
  "Experienced garment manufacturing team",
  "High quality production standards",
  "Reliable bulk manufacturing capability",
  "Trusted by multiple fashion brands",
  "Timely delivery and professional process",
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase text-accent">
      <span className="block w-5 h-px bg-accent" />
      {children}
    </span>
  );
}

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

function GhostBtn({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full
        bg-transparent hover:bg-accent-bg text-ink hover:text-accent
        border border-subtle hover:border-accent
        text-[13px] font-semibold tracking-wide cursor-pointer transition-all duration-200"
    >
      {label}
    </button>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30);
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 90 && r.bottom >= 90) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');`}</style>

      <div className="min-h-screen bg-bg text-ink font-sans antialiased">
        <header
          className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-bg/95 backdrop-blur-md border-b border-subtle shadow-sm py-3"
              : "bg-transparent border-b border-transparent py-5"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <button
              onClick={() => go("home")}
              className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer"
            >
              <img
                src="/logo.jpeg"
                alt="Ethoz"
                className="w-9 h-9 rounded-lg object-cover"
              />
              <span className="text-[18px] font-bold tracking-tight text-ink font-sans">
                Ethoz
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {NAV.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`bg-transparent border-none cursor-pointer text-[14px] font-medium
                    font-sans transition-colors duration-200
                    ${active === id ? "text-accent" : "text-muted hover:text-ink"}`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <PrimaryBtn label="Get in Touch" onClick={() => go("contact")} />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-2 bg-transparent border-none cursor-pointer p-1"
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
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                setMobileOpen(false);
                go(id);
              }}
              className="font-serif text-[36px] font-bold text-ink hover:text-accent
                transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        <section
          id="home"
          className="relative w-full overflow-hidden bg-subtle/30"
          style={{ minHeight: "92vh", paddingTop: 72 }}
        >
          <div
            className="relative w-full flex"
            style={{ minHeight: "calc(92vh - 72px)" }}
          >
            <div
              className="relative z-10 flex flex-col justify-center
              w-full lg:w-[48%] px-8 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-0"
            >
              <p className="text-[11px] font-semibold tracking-[.25em] uppercase text-muted mb-5">
                Garment Manufacturer
              </p>

              <h1
                className="font-serif font-bold leading-[1.08] tracking-tight text-ink mb-6
                text-[clamp(36px,4.8vw,68px)]"
              >
                ETHOZ
              </h1>

              <p className="text-[15px] leading-[1.85] text-muted mb-10 max-w-100">
                Ethoz is a professional clothing manufacturer partnering with
                fashion brands to deliver high-quality garments — on time, every
                time.
              </p>

              <div className="flex flex-wrap gap-3 mb-14">
                <PrimaryBtn
                  label="Our Services"
                  onClick={() => go("production")}
                />
                <GhostBtn
                  label="Partner With Us"
                  onClick={() => go("contact")}
                />
              </div>
            </div>

            <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[56%]">
              <img
                src="/banner.jpeg"
                alt="Garment manufacturing"
                className="w-full h-full object-cover object-center"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, #F5F3F0 0%, #F5F3F0 2%, transparent 22%)",
                }}
              />
            </div>

            <div className="lg:hidden absolute inset-0 -z-10">
              <img
                src="/banner.jpeg"
                alt="Garment manufacturing"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-b from-bg/95 via-bg/80 to-bg/60" />
            </div>
          </div>
        </section>

        <section id="production" className="py-24 md:py-32 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl mb-14">
              <Tag>Our Services</Tag>
              <h2
                className="font-serif font-bold text-ink leading-[1.15] tracking-tight mt-5
                text-[clamp(32px,4vw,52px)]"
              >
                Manufacturing services.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle border border-subtle rounded-2xl overflow-hidden">
              {SERVICES.map(({ title, desc, img }, i) => (
                <ServiceCard
                  key={i}
                  title={title}
                  desc={desc}
                  index={i}
                  img={img}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 md:py-32 bg-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <Tag>About Ethoz</Tag>
                <h2
                  className="font-serif font-bold text-ink leading-[1.15] tracking-tight mt-5 mb-7
                  text-[clamp(30px,3.8vw,48px)]"
                >
                  Built on quality.
                  <br />
                  Driven by trust.
                </h2>
                <div className="space-y-5 text-[15px] leading-[1.85] text-muted">
                  <p>
                    Ethoz is a professional clothing manufacturing company
                    dedicated to producing high-quality garments for established
                    and emerging fashion brands. With a strong focus on quality,
                    precision, and timely delivery, we partner with brands to
                    turn designs into finished products ready for the market.
                  </p>
                  <p>
                    We work with multiple fashion labels, providing reliable
                    manufacturing solutions that maintain high production
                    standards and consistency across every order.
                  </p>
                  <p>
                    At Ethoz, we believe in building long-term partnerships —
                    delivering dependable manufacturing services with strict
                    quality control at every stage.
                  </p>
                </div>

                <div className="mt-9">
                  <PrimaryBtn
                    label="Work With Us"
                    onClick={() => go("contact")}
                  />
                </div>
              </div>

              <div className="md:mt-15">
                <h3 className="text-[13px] font-semibold tracking-[.18em] uppercase text-muted mb-6">
                  Why brands choose Ethoz
                </h3>

                <div className="flex flex-col border border-subtle rounded-2xl overflow-hidden bg-surface">
                  {WHY.map((text, i) => (
                    <WhyRow key={i} index={i} text={text} total={WHY.length} />
                  ))}
                </div>

                <div className="mt-4 p-6 rounded-2xl bg-accent-bg">
                  <p className="text-[15px] leading-[1.75] font-medium text-accent">
                    "We believe every stitch is a promise to the brand that
                    trusts us."
                  </p>
                  <p className="mt-3 text-[13px] font-semibold text-ink">
                    — Ethoz Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-15 md:py-15 bg-accent overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/image2.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-3 text-center">
            <p className="text-[12px] font-semibold tracking-[.2em] uppercase text-white/65 mb-5">
              Ready to get started?
            </p>
            <h2
              className="font-serif font-bold text-white leading-[1.1] tracking-tight mb-6
              text-[clamp(30px,4.5vw,58px)]"
            >
              Looking for a reliable
              <br />
              manufacturing partner?
            </h2>
            <p className="text-[16px] leading-[1.8] text-white/70 mb-10 mx-auto max-w-120">
              Ethoz helps brands produce high-quality garments at scale. Let's
              build something great together.
            </p>
            <CtaWhiteBtn onClick={() => go("contact")} />
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <Tag>Contact</Tag>
                <h2
                  className="font-serif font-bold text-ink leading-[1.15] tracking-tight mt-5 mb-5
                  text-[clamp(30px,3.8vw,48px)]"
                >
                  Let's work
                  <br />
                  together.
                </h2>
                <p className="text-[15px] leading-[1.85] text-muted mb-8">
                  Tell us about your brand and what you need. We respond within
                  one business day.
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      icon: "✉",
                      label: "Email",
                      val: "info@ethoz.in",
                      href: "mailto:info@ethoz.in",
                    },
                    {
                      icon: "☎",
                      label: "Phone",
                      val: "+91 98100 09932",
                      href: "tel:+919810009932",
                    },
                    {
                      icon: "◎",
                      label: "Address",
                      val: "34, Block B, Sector 88, Noida, Uttar Pradesh 201304",
                      href: "https://maps.google.com/?q=34,+Block+B,+Sector+88,+Noida,+Uttar+Pradesh+201304",
                    },
                  ].map(({ icon, label, val, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === "Address" ? "_blank" : undefined}
                      rel={
                        label === "Address" ? "noopener noreferrer" : undefined
                      }
                      className="flex items-center gap-4 no-underline group"
                    >
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center
        text-[15px] shrink-0 bg-accent-bg text-accent
        group-hover:bg-accent group-hover:text-white transition-colors duration-200"
                      >
                        {icon}
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold tracking-[.15em] uppercase text-muted">
                          {label}
                        </p>
                        <p className="text-[15px] font-semibold text-ink mt-0.5 group-hover:text-accent transition-colors duration-200">
                          {val}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-8 md:p-10 bg-bg border border-subtle">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {["First Name", "Last Name"].map((l) => (
                    <div key={l}>
                      <label className="block text-[12px] font-semibold text-muted mb-2">
                        {l}
                      </label>
                      <input
                        type="text"
                        placeholder={`Enter ${l.toLowerCase()}`}
                        className="w-full px-4 py-3 rounded-xl text-[14px] text-ink bg-surface
                          border border-subtle outline-none
                          focus:border-accent transition-colors duration-200 font-sans"
                      />
                    </div>
                  ))}
                </div>

                {[
                  { l: "Brand / Company", p: "Your brand name", t: "text" },
                  { l: "Email Address", p: "you@brand.com", t: "email" },
                ].map(({ l, p, t }) => (
                  <div key={l} className="mb-5">
                    <label className="block text-[12px] font-semibold text-muted mb-2">
                      {l}
                    </label>
                    <input
                      type={t}
                      placeholder={p}
                      className="w-full px-4 py-3 rounded-xl text-[14px] text-ink bg-surface
                        border border-subtle outline-none
                        focus:border-accent transition-colors duration-200 font-sans"
                    />
                  </div>
                ))}

                <div className="mb-6">
                  <label className="block text-[12px] font-semibold text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project…"
                    className="w-full px-4 py-3 rounded-xl text-[14px] text-ink bg-surface
                      border border-subtle outline-none resize-none
                      focus:border-accent transition-colors duration-200 font-sans"
                  />
                </div>

                <SubmitBtn />
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-ink">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/logo.jpeg"
                    alt="Ethoz"
                    className="w-7 h-7 rounded-md object-cover"
                  />
                  <span className="text-[17px] font-bold text-white font-sans">
                    Ethoz
                  </span>
                </div>
                <p className="text-[14px] leading-[1.7] text-white/40 max-w-60">
                  Professional garment manufacturing for fashion brands.
                </p>
              </div>

              {[
                {
                  title: "Navigate",
                  links: NAV.map(({ id, label }) => ({ id, label })),
                },
                {
                  title: "Services",
                  links: [
                    { id: "production", label: "Apparel Mfg" },
                    { id: "production", label: "Bulk Production" },
                    { id: "production", label: "Private Label" },
                    { id: "production", label: "Quality Control" },
                  ],
                },
                {
                  title: "Company",
                  links: [
                    { id: "about", label: "About Us" },
                    { id: "contact", label: "Contact" },
                    { id: "about", label: "Our Process" },
                    { id: "contact", label: "Partners" },
                  ],
                },
              ].map(({ title, links }) => (
                <div key={title}>
                  <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-white/35 mb-4">
                    {title}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {links.map(({ id, label }) => (
                      <button
                        key={label}
                        onClick={() => id && go(id)}
                        className="text-left text-[14px] text-white/45 hover:text-white/90
                          transition-colors duration-200 bg-transparent border-none cursor-pointer font-sans"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4 pt-8 border-t border-white/8">
              <p className="text-[13px] text-white/25">
                © 2026 Ethoz. All rights reserved.
              </p>
              <p className="text-[13px] text-white/25">
                Crafted by{" "}
                <b>
                  <a href="https://www.ynrsgroup.com" target="_blank">
                    YNRS Group
                  </a>
                </b>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function ServiceCard({
  title,
  desc,
  index,
  img,
}: {
  title: string;
  desc: string;
  index: number;
  img: string;
}) {
  return (
    <div className="group cursor-default bg-surface hover:bg-accent-bg transition-colors duration-200 overflow-hidden">
      <div className="overflow-hidden h-40">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center mb-5
          bg-bg group-hover:bg-accent transition-colors duration-200"
        >
          <span className="text-[12px] font-bold text-muted group-hover:text-white transition-colors duration-200">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3
          className="text-[17px] font-bold font-sans mb-2.5
          text-ink group-hover:text-accent transition-colors duration-200"
        >
          {title}
        </h3>
        <p className="text-[14px] leading-[1.75] text-muted">{desc}</p>
      </div>
    </div>
  );
}

function WhyRow({
  index,
  text,
  total,
}: {
  index: number;
  text: string;
  total: number;
}) {
  return (
    <div
      className={`group flex items-center gap-4 px-5 py-4 cursor-default
      hover:bg-accent-bg transition-colors duration-200
      ${index < total - 1 ? "border-b border-subtle" : ""}`}
    >
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0
        bg-accent-bg group-hover:bg-accent transition-colors duration-200"
      >
        <svg
          className="w-3 h-3 text-accent group-hover:text-white transition-colors duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <p className="text-[14px] font-medium text-ink">{text}</p>
    </div>
  );
}

function CtaWhiteBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-3 px-8 py-4 rounded-full
        bg-white hover:bg-ink text-accent hover:text-white
        text-[14px] font-semibold border-none cursor-pointer transition-all duration-200"
    >
      Start Manufacturing
      <svg
        className="w-4 h-4"
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

function SubmitBtn() {
  return (
    <button
      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl
        bg-accent hover:bg-accent-hover text-white
        text-[14px] font-semibold border-none cursor-pointer transition-colors duration-200"
    >
      Send Message
      <svg
        className="w-4 h-4"
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
