"use client";
import Link from "next/link";

const COMPOSITIONS = [
  "Nylon Spandex",
  "Polyester Spandex",
  "Cotton / Polyester Blends",
  "Cotton",
  "Poly / Viscose Blends",
  "Recycled Polyester and Cotton Yarns",
  "Bamboo and Blends",
  "Modal and Blends",
];

const FINISHES = [
  "Moisture Wicking",
  "Anti Microbial",
  "UV Resistance",
  "Antistatic",
  "Water Repellent",
  "Elastomeric",
  "Wicking",
  "Anti-Stain / Oil",
  "Nano Finish",
];

const STRUCTURES = [
  "Jersey's",
  "Interlock's",
  "Ponte",
  "Scuba",
  "Rice / Dot Knits",
  "Mesh's",
  "Twill Knits",
  "Terry",
  "Fleece",
  "Waffle, Ottoman",
];

const VALUES = [
  {
    title: "Our Self Aspirations",
    desc: "Continuously raising our internal standards — in skill, process, and output — to be the best manufacturer our partners could choose.",
    accent: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-6 h-6"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Caring for Environment",
    desc: "Responsible sourcing, sustainable fabrics, and mindful production that respects the planet at every stage of manufacturing.",
    accent: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-6 h-6"
      >
        <path d="M2 22c1.25-1.25 2.5-2.5 3.75-3.75C7 17 8.5 16.5 10 17c1.5.5 3 .5 4.5 0 3-1 5-3.5 5-6.5 0-5-4-9-9-9C5 1.5 1.5 5 1.5 9.5c0 1.5.5 3 1.5 4.25" />
        <path d="M8 14s1-1 2-1 2 1 4 1 2-1 2-1" />
      </svg>
    ),
  },
  {
    title: "Abiding by Governance",
    desc: "Strict compliance with labour laws, ethical practices, and regulatory standards — because integrity is non-negotiable.",
    accent: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Delighting Customers",
    desc: "Every order is a commitment. We deliver quality, consistency, and care that keeps brands coming back.",
    accent: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-6 h-6"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

const CAPABILITIES = [
  {
    title: "CAD Pattern Department",
    desc: "Advanced pattern-making software converts designs into precise, production-ready layouts. Large-format plotters ensure accurate marker making and minimal fabric wastage.",
    img: "/(capabilities)/cadPatternDepartment.png",
  },
  {
    title: "Cutting & Fabric Storage",
    desc: "Bulk lay cutting with precision, supported by an organised fabric storage system. Every roll is tracked from receipt to the cutting floor.",
    img: "/(capabilities)/cuttingandFabricStorageSection.png",
  },
  {
    title: "Stitching Section",
    desc: "Full-scale stitching floor with modern JACK machines and trained operators. Assembly lines structured by garment type for maximum efficiency.",
    img: "/(capabilities)/stitchingSection.png",
  },
  {
    title: "Finishing Section",
    desc: "Thread trimming, pressing, tagging, and final fold & pack. Every garment undergoes thorough quality checks before reaching the packing stage.",
    img: "/(capabilities)/finishingSection.png",
  },
];

function Tag({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase ${light ? "text-white/60" : "text-accent"}`}
    >
      <span
        className={`block w-5 h-px ${light ? "bg-white/40" : "bg-accent"}`}
      />
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        .cap-img img { transition: transform 0.6s ease; }
        .cap-img:hover img { transform: scale(1.06); }
        .val-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .val-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px -10px rgba(249,115,22,0.18); }
      `}</style>

      <div className="min-h-screen bg-bg text-ink font-sans antialiased">
        <section className="relative overflow-hidden bg-ink">
          <div className="absolute inset-0">
            <img
              src="/(capabilities)/stitchingSection.png"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/95 to-ink/50" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-20 ">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">
              <div>
                <h1 className="font-serif font-bold text-white leading-[1.08] tracking-tight mt-5 mb-8 text-[clamp(38px,5vw,72px)]">
                  <span className="text-accent">Ne'Ethoz</span>
                  <br />
                  Quality garments.
                </h1>
                <div className="space-y-5 text-[16px] leading-[1.85] text-white/60 max-w-xl">
                  <p>
                    Ne'Ethoz is a professional clothing manufacturing company
                    dedicated to producing high-quality garments for established
                    and emerging fashion brands. With a strong focus on quality,
                    precision, and timely delivery, we partner with brands to
                    turn their designs into finished products ready for the
                    market.
                  </p>
                  <p>
                    We work with multiple fashion labels and businesses,
                    providing reliable manufacturing solutions that maintain
                    high production standards and consistency. Our experience
                    allows us to handle different types of clothing while
                    ensuring quality at every stage of production.
                  </p>
                  <p>
                    At Ne'Ethoz, we believe in building long-term partnerships
                    with brands by delivering dependable manufacturing services
                    and maintaining strict quality control.
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl overflow-hidden aspect-3/4">
                    <img
                      src="/(capabilities)/stitchingSection.png"
                      alt="Stitching"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-3/4 mt-8">
                    <img
                      src="/(capabilities)/finishingSection.png"
                      alt="Finishing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/10 bg-white/5 overflow-hidden mt-2">
                  {[
                    {
                      value: "85K+",
                      label: "Garmenting",
                      sub: "Units / Month",
                    },
                    { value: "45K+", label: "Printing", sub: "Units / Month" },
                    { value: "6", label: "Inhouse", sub: "Departments" },
                  ].map(({ value, label, sub }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center py-5 px-2 text-center"
                    >
                      <span className="font-serif font-bold text-[28px] leading-none text-white">
                        {value}
                      </span>
                      <span className="text-[12px] font-semibold text-accent mt-1.5 leading-tight">
                        {label}
                      </span>
                      <span className="text-[10px] text-white/40 leading-tight">
                        {sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:hidden grid grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/10 bg-white/5 overflow-hidden mt-10">
              {[
                { value: "85K+", label: "Garmenting", sub: "Units / Month" },
                { value: "45K+", label: "Printing", sub: "Units / Month" },
                { value: "6", label: "Inhouse", sub: "Depts" },
              ].map(({ value, label, sub }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-5 px-2 text-center"
                >
                  <span className="font-serif font-bold text-[clamp(22px,5vw,30px)] leading-none text-white">
                    {value}
                  </span>
                  <span className="text-[11px] font-semibold text-accent mt-1.5 leading-tight">
                    {label}
                  </span>
                  <span className="text-[10px] text-white/40 leading-tight">
                    {sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
              <div>
                <Tag>Our Values</Tag>
                <h2 className="font-serif font-bold text-ink leading-[1.12] tracking-tight mt-4 text-[clamp(32px,4vw,56px)]">
                  Four things we never
                  <br className="hidden md:block" /> compromise on.
                </h2>
              </div>
              <p className="text-[15px] leading-[1.8] text-muted max-w-xs md:text-right">
                These shape every decision we make on the factory floor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {VALUES.map(({ title, desc, accent, icon }, i) => (
                <div
                  key={i}
                  className={`val-card rounded-2xl border p-7 md:p-9 cursor-default
                    ${accent ? "border-accent bg-accent-bg" : "border-subtle bg-surface"}`}
                >
                  <span
                    className={`flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${accent ? "bg-accent text-white" : "bg-subtle text-muted"}`}
                  >
                    {icon}
                  </span>
                  <h3
                    className={`text-[20px] md:text-[22px] font-bold font-sans mb-3 ${accent ? "text-accent" : "text-ink"}`}
                  >
                    {title}
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 md:mb-16">
              <Tag>Inhouse Capabilities & Facility</Tag>
              <h2 className="font-serif font-bold text-ink leading-[1.12] tracking-tight mt-4 text-[clamp(32px,4vw,56px)]">
                Everything under one roof.
              </h2>
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-muted mt-4 max-w-2xl">
                From the first pattern to the final fold — every stage of
                production happens in-house, giving us full control over
                quality, timelines, and consistency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {CAPABILITIES.map(({ title, desc, img }, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-subtle overflow-hidden bg-bg hover:border-accent transition-all duration-300"
                >
                  <div className="cap-img overflow-hidden h-48 md:h-60">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-[18px] md:text-[20px] font-bold font-sans text-ink group-hover:text-accent transition-colors duration-200 mb-3">
                      {title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] leading-[1.75] text-muted">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-14 bg-ink">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 md:mb-16">
              <Tag light>Printing</Tag>
              <h2 className="font-serif font-bold text-white leading-[1.12] tracking-tight mt-4 text-[clamp(32px,4vw,56px)]">
                Inhouse Sublimation
                <br />
                <span className="text-accent">& Heat Transfers.</span>
              </h2>
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-white/50 mt-4 max-w-2xl">
                Full printing capability in-house means faster turnarounds,
                tighter quality control, and no dependency on third-party
                vendors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="overflow-hidden h-52 md:h-64">
                  <img
                    src="/(printingSection)/printingMachine.png"
                    alt="Sublimation Printing Machine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-1">
                    Sublimation Printing
                  </h3>
                  <p className="text-[13px] text-white/40 mb-6">
                    Epson SureColor industrial-grade sublimation printer
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      "Fabric Digital Printing",
                      "Panel Digital Print",
                      "T-Shirt Digital Printing",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                          <svg
                            className="w-2.5 h-2.5 text-accent"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-[15px] text-white/70">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="overflow-hidden h-52 md:h-64">
                  <img
                    src="/(printingSection)/heatTransferMachine.png"
                    alt="Heat Transfer Machine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-1">
                    Heat Transfers
                  </h3>
                  <p className="text-[13px] text-white/40 mb-6">
                    Precision cutting & transfer application unit
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {[
                      "Reflective Grey & Colored",
                      "Flock Transfers",
                      "Glitter Transfers",
                      "Colored Transfers",
                      "Rainbow Transfers",
                      "Iridescent Transfers",
                      "Foil / Metallic Transfers",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                        <span className="text-[14px] text-white/70 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-bg">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 md:mb-14">
              <Tag>Materials</Tag>
              <h2 className="font-serif font-bold text-ink leading-[1.12] tracking-tight mt-4 text-[clamp(32px,4vw,56px)]">
                Fabrics & Finishes
              </h2>
              <p className="text-[15px] md:text-[16px] leading-[1.85] text-muted mt-4 max-w-2xl">
                We work with a broad range of fabric compositions, technical
                finishes, and knit structures to meet the needs of any garment
                category.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {[
                { title: "Compositions", items: COMPOSITIONS, accent: true },
                { title: "Finishes", items: FINISHES, accent: false },
                { title: "Structures", items: STRUCTURES, accent: false },
              ].map(({ title, items, accent }) => (
                <div
                  key={title}
                  className={`rounded-2xl border p-6 md:p-8 ${accent ? "border-accent bg-accent-bg" : "border-subtle bg-surface"}`}
                >
                  <h3 className="text-[13px] font-semibold tracking-[.15em] uppercase text-accent mb-6">
                    {title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-[15px] text-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-14 bg-accent">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-serif font-bold text-white leading-[1.1] tracking-tight mb-4 text-[clamp(28px,4vw,52px)]">
              Ready to start manufacturing?
            </h2>
            <p className="text-[15px] md:text-[16px] text-white/70 mb-8 max-w-md mx-auto">
              Reach out and let's discuss what Ne'Ethoz can build for your
              brand.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                bg-white hover:bg-ink text-accent hover:text-white
                text-[14px] font-semibold no-underline transition-all duration-200"
            >
              Get in Touch
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
