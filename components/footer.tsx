"use client";

const NAV = [
  { id: "home", label: "Home" },
  { id: "production", label: "Production" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="py-12 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpeg"
                alt="Ne'Ethoz"
                className="w-7 h-7 rounded-md object-cover"
              />
              <span className="text-[17px] font-bold text-white font-sans">
                Ne'Ethoz
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
            © 2026 Ne'Ethoz. All rights reserved.
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
  );
}
