"use client";
import { useState } from "react";

const CATEGORIES = [
  {
    id: "mensActiveWear",
    label: "Men's Activewear",
    group: "mens",
    tag: "Performance",
    products: [
      {
        name: "Active Polo",
        fabric: "Poly Jersey",
        img: "/(mensActiveWear)/ActivePolo.png",
      },
      {
        name: "Active Polo II",
        fabric: "Neon Poly Jersey, Performance Finish",
        img: "/(mensActiveWear)/ActivePolo2.png",
      },
      {
        name: "Body Fit T",
        fabric: "Warp Knit Nylon Spandex 220gsm with Silicon Print",
        img: "/(mensActiveWear)/BodyFitT.png",
      },
      {
        name: "Training Tee",
        fabric: "Warp Knit Polyester Spandex 220gsm with Silicon Print",
        img: "/(mensActiveWear)/TrainingTee.png",
      },
    ],
  },
  {
    id: "mensActiveJoggers",
    label: "Men's Active Joggers",
    group: "mens",
    tag: "Performance",
    products: [
      {
        name: "Active Jogger I",
        fabric: "Performance Fabric",
        img: "/(mensActiveJoggers)/image1.png",
      },
      {
        name: "Active Jogger II",
        fabric: "Performance Fabric",
        img: "/(mensActiveJoggers)/image2.png",
      },
      {
        name: "Active Jogger III",
        fabric: "Performance Fabric",
        img: "/(mensActiveJoggers)/image3.png",
      },
      {
        name: "Active Jogger IV",
        fabric: "Performance Fabric",
        img: "/(mensActiveJoggers)/image4.png",
      },
    ],
  },
  {
    id: "mensInfographicWear",
    label: "Men's Infographic Wear",
    group: "mens",
    tag: "Style",
    products: [
      {
        name: "Crew Neck I",
        fabric: "Premium Knit",
        img: "/(mensInfographicWear)/crewNeck1.png",
      },
      {
        name: "Crew Neck II",
        fabric: "Premium Knit",
        img: "/(mensInfographicWear)/crewNeck2.png",
      },
      {
        name: "Crew Neck III",
        fabric: "Premium Knit",
        img: "/(mensInfographicWear)/crewNeck3.png",
      },
      {
        name: "Crew Neck IV",
        fabric: "Premium Knit",
        img: "/(mensInfographicWear)/crewNeck4.png",
      },
    ],
  },
  {
    id: "mensKnitShirts",
    label: "Men's Knit Shirts",
    group: "mens",
    tag: "Lifestyle",
    products: [
      {
        name: "Knit Shirt I",
        fabric: "Premium Knit",
        img: "/(mensKnitShirts)/shirt1.png",
      },
      {
        name: "Knit Shirt II",
        fabric: "Premium Knit",
        img: "/(mensKnitShirts)/shirt2.png",
      },
      {
        name: "Knit Shirt III",
        fabric: "Premium Knit",
        img: "/(mensKnitShirts)/shirt3.png",
      },
    ],
  },
  {
    id: "mensPolo",
    label: "Men's Polo",
    group: "mens",
    tag: "Lifestyle",
    products: [
      { name: "Polo I", fabric: "Pique Cotton", img: "/(mensPolo)/polo1.png" },
      { name: "Polo II", fabric: "Pique Cotton", img: "/(mensPolo)/polo2.png" },
      {
        name: "Polo III",
        fabric: "Pique Cotton",
        img: "/(mensPolo)/polo3.png",
      },
      { name: "Polo IV", fabric: "Pique Cotton", img: "/(mensPolo)/polo4.png" },
    ],
  },
  {
    id: "mensTrackerSuit",
    label: "Men's Tracker Suit",
    group: "mens",
    tag: "Performance",
    products: [
      {
        name: "Tracker Suit I",
        fabric: "Performance Blend",
        img: "/(mensTrackerSuit)/image1.png",
      },
      {
        name: "Tracker Suit II",
        fabric: "Performance Blend",
        img: "/(mensTrackerSuit)/image2.png",
      },
      {
        name: "Tracker Suit III",
        fabric: "Performance Blend",
        img: "/(mensTrackerSuit)/image3.png",
      },
      {
        name: "Tracker Suit IV",
        fabric: "Performance Blend",
        img: "/(mensTrackerSuit)/image4.png",
      },
    ],
  },
  {
    id: "mensWinterWear",
    label: "Men's Winter Wear",
    group: "mens",
    tag: "Lifestyle",
    products: [
      {
        name: "Hoodie",
        fabric: "Fleece Cotton Blend",
        img: "/(mensWinterWear)/hoodie.png",
      },
      {
        name: "Jacket",
        fabric: "Nylon Shell, Padded",
        img: "/(mensWinterWear)/jacket.png",
      },
      { name: "Tee", fabric: "Thermal Knit", img: "/(mensWinterWear)/tee.png" },
      {
        name: "Track Pant",
        fabric: "Fleece Cotton Blend",
        img: "/(mensWinterWear)/trackPant.png",
      },
    ],
  },
  {
    id: "womenActiveJoggers",
    label: "Women's Active Joggers",
    group: "womens",
    tag: "Performance",
    products: [
      {
        name: "Leggings I",
        fabric: "Compression Spandex",
        img: "/(womenActiveJoggers)/leggings1.png",
      },
      {
        name: "Leggings II",
        fabric: "Compression Spandex",
        img: "/(womenActiveJoggers)/leggings2.png",
      },
      {
        name: "Tights I",
        fabric: "High Waist Compression",
        img: "/(womenActiveJoggers)/tights1.png",
      },
      {
        name: "Tights II",
        fabric: "High Waist Compression",
        img: "/(womenActiveJoggers)/tights2.png",
      },
    ],
  },
  {
    id: "womenActiveWear",
    label: "Women's Activewear",
    group: "womens",
    tag: "Performance",
    products: [
      {
        name: "Active Top",
        fabric: "Stretch Poly",
        img: "/(womenActiveWear)/activeTop.png",
      },
      {
        name: "Crew Neck I",
        fabric: "Premium Knit",
        img: "/(womenActiveWear)/crewNeck1.png",
      },
      {
        name: "Crew Neck II",
        fabric: "Premium Knit",
        img: "/(womenActiveWear)/crewNeck2.png",
      },
      {
        name: "Crop Top I",
        fabric: "Stretch Poly",
        img: "/(womenActiveWear)/cropTop1.png",
      },
      {
        name: "Crop Top II",
        fabric: "Stretch Poly",
        img: "/(womenActiveWear)/cropTop2.png",
      },
      {
        name: "Crop Top III",
        fabric: "Stretch Poly",
        img: "/(womenActiveWear)/cropTop3.png",
      },
      {
        name: "Crop Top IV",
        fabric: "Stretch Poly",
        img: "/(womenActiveWear)/cropTop4.png",
      },
      {
        name: "Crop Top V",
        fabric: "Stretch Poly",
        img: "/(womenActiveWear)/cropTop5.png",
      },
      {
        name: "Long Sleeve Thumb Hole",
        fabric: "Compression Knit",
        img: "/(womenActiveWear)/longSlvThumbHole.png",
      },
      {
        name: "Vest I",
        fabric: "Mesh Poly",
        img: "/(womenActiveWear)/vest1.png",
      },
      {
        name: "Vest II",
        fabric: "Mesh Poly",
        img: "/(womenActiveWear)/vest2.png",
      },
      {
        name: "V-Neck Top",
        fabric: "Stretch Poly",
        img: "/(womenActiveWear)/vNeckTop.png",
      },
      {
        name: "Zip Polo",
        fabric: "Pique Poly",
        img: "/(womenActiveWear)/zipPolo.png",
      },
    ],
  },
  {
    id: "womenActiveWearShorts",
    label: "Women's Activewear Shorts",
    group: "womens",
    tag: "Performance",
    products: [
      {
        name: "Capri I",
        fabric: "Compression Spandex",
        img: "/(womenActiveWearShorts)/capri1.png",
      },
      {
        name: "Capri II",
        fabric: "Compression Spandex",
        img: "/(womenActiveWearShorts)/capri2.png",
      },
      {
        name: "Shorts I",
        fabric: "Performance Poly",
        img: "/(womenActiveWearShorts)/shorts1.png",
      },
      {
        name: "Shorts II",
        fabric: "Performance Poly",
        img: "/(womenActiveWearShorts)/shorts2.png",
      },
    ],
  },
  {
    id: "womenSportsBra",
    label: "Women's Sports Bra",
    group: "womens",
    tag: "Performance",
    products: [
      {
        name: "Sports Bra I",
        fabric: "Compression Spandex",
        img: "/(womenSportsBra)/sportsBra1.png",
      },
      {
        name: "Sports Bra II",
        fabric: "Compression Spandex",
        img: "/(womenSportsBra)/sportsBra2.png",
      },
      {
        name: "Sports Bra III",
        fabric: "Compression Spandex",
        img: "/(womenSportsBra)/sportsBra3.png",
      },
      {
        name: "Sports Bra IV",
        fabric: "Compression Spandex",
        img: "/(womenSportsBra)/sportsBra4.png",
      },
    ],
  },
  {
    id: "masks",
    label: "Masks",
    group: "accessories",
    tag: "Accessories",
    products: [
      {
        name: "Mask I",
        fabric: "Multi-layer Protection",
        img: "/(masks)/masks1.png",
      },
      {
        name: "Mask II",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask2.png",
      },
      {
        name: "Mask III",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask3.png",
      },
      {
        name: "Mask IV",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask4.png",
      },
      {
        name: "Mask V",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask5.png",
      },
      {
        name: "Mask VI",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask6.png",
      },
      {
        name: "Mask VII",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask7.png",
      },
      {
        name: "Mask VIII",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask8.png",
      },
      {
        name: "Mask IX",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask9.png",
      },
      {
        name: "Mask X",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask10.png",
      },
      {
        name: "Mask XI",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask11.png",
      },
      {
        name: "Mask XII",
        fabric: "Multi-layer Protection",
        img: "/(masks)/mask12.png",
      },
    ],
  },
];

const TABS = [
  { id: "all", label: "All Products" },
  { id: "mens", label: "Men's" },
  { id: "womens", label: "Women's" },
  { id: "accessories", label: "Accessories" },
];

function ProductCard({
  name,
  fabric,
  img,
}: {
  name: string;
  fabric: string;
  img: string;
}) {
  return (
    <div className="group flex flex-col bg-bg border border-subtle rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300">
      <div
        className="relative overflow-hidden bg-subtle/40"
        style={{ aspectRatio: "3/4" }}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            if (!t.dataset.errored) {
              t.dataset.errored = "1";
              t.src = "/image1.jpeg";
            }
          }}
        />
      </div>
      <div className="p-4 border-t border-subtle">
        <h4 className="text-[14px] font-bold text-ink group-hover:text-accent transition-colors duration-200 font-sans mb-1">
          {name}
        </h4>
        <p className="text-[12px] leading-[1.6] text-muted">{fabric}</p>
      </div>
    </div>
  );
}

function CategorySection({
  cat,
  defaultOpen,
}: {
  cat: (typeof CATEGORIES)[0];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border border-subtle rounded-2xl overflow-hidden bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left cursor-pointer bg-transparent border-none hover:bg-accent-bg transition-colors duration-200 group"
      >
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold tracking-[.2em] uppercase text-accent">
              {cat.tag}
            </span>
            <span className="font-serif font-bold text-ink text-[20px] leading-tight group-hover:text-accent transition-colors duration-200">
              {cat.label}
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-subtle text-[12px] font-semibold text-muted">
            {cat.products.length} styles
          </span>
        </div>
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300
            ${
              open
                ? "bg-accent border-accent text-white rotate-180"
                : "bg-bg border-subtle text-muted group-hover:border-accent group-hover:bg-accent group-hover:text-white"
            }`}
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "9999px" : "0px" }}
      >
        <div className="border-t border-subtle px-7 py-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-start">
            {cat.products.map((product, i) => (
              <div key={i} className="w-full">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.2em] uppercase text-accent">
      <span className="block w-5 h-px bg-accent" />
      {children}
    </span>
  );
}

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = CATEGORIES.filter((cat) =>
    activeTab === "all" ? true : cat.group === activeTab,
  );

  const totalStyles = filteredCategories.reduce(
    (acc, c) => acc + c.products.length,
    0,
  );

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');`}</style>

      <div className="min-h-screen bg-bg text-ink font-sans antialiased">
        {/* Top Nav */}
        <div className="bg-surface border-b border-subtle sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <img
                src="/logo.jpeg"
                alt="Ethoz"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-[17px] font-bold tracking-tight text-ink font-sans">
                Ethoz
              </span>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-[13px] font-semibold no-underline hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <svg
                className="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-surface py-16 md:py-20 border-b border-subtle">
          <div className="max-w-7xl mx-auto px-6">
            <Tag>Our Products</Tag>
            <h1 className="font-serif font-bold text-ink leading-[1.1] tracking-tight mt-5 mb-5 text-[clamp(36px,5vw,68px)]">
              Crafted for every
              <br />
              <span className="text-accent italic">category.</span>
            </h1>
            <p className="text-[16px] leading-[1.85] text-muted max-w-xl">
              From high-performance activewear to lifestyle essentials — browse
              our full range of garments manufactured to the highest standards.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="sticky top-[61px] z-30 bg-bg/95 backdrop-blur-md border-b border-subtle">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 flex-wrap">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-[13px] font-semibold border transition-all duration-200 cursor-pointer font-sans
                  ${
                    activeTab === tab.id
                      ? "bg-accent text-white border-accent shadow-sm"
                      : "bg-surface text-muted border-subtle hover:border-accent hover:text-accent"
                  }`}
              >
                {tab.label}
              </button>
            ))}
            <span className="ml-auto text-[13px] text-muted font-medium hidden sm:block">
              {filteredCategories.length} categories · {totalStyles} styles
            </span>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-4">
          {filteredCategories.map((cat, i) => (
            <CategorySection key={cat.id} cat={cat} defaultOpen={i === 0} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-accent py-16 text-center mt-4">
          <p className="text-[12px] font-semibold tracking-[.2em] uppercase text-white/65 mb-4">
            Interested in manufacturing?
          </p>
          <h2 className="font-serif font-bold text-white text-[clamp(28px,4vw,48px)] mb-6 leading-tight">
            Let's build your product line.
          </h2>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-accent hover:bg-ink hover:text-white text-[14px] font-semibold no-underline transition-all duration-200"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <footer className="py-8 bg-ink text-center">
          <p className="text-[13px] text-white/25">
            © 2026 Ethoz. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
