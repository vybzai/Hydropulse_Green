// HydroPulse — synthetic content data (placeholder, mid-June content pack expected)
window.HP_DATA = {
  project: {
    name: "HydroPulse",
    tagline: "Hydropower for Participatory Upscaling of Local Solutions and Ecosystem-based Strategies",
    summary:
      "HydroPulse is a European research consortium advancing the next generation of hydropower — systems that expand clean energy capacity while restoring rivers, protecting fish migration, and earning social license through participatory design.",
    longSummary:
      "Across twenty-three partner institutions in fourteen countries, HydroPulse integrates engineering, ecology, hydrology, and social science to develop, demonstrate, and upscale ecosystem-based hydropower strategies. The consortium runs six demonstration sites on European rivers, publishes open research and policy guidance, and coordinates a public programme of engagement with riparian communities.",
    duration: "2026 — 2030",
    funding: "Horizon Europe",
    grantId: "HORIZON-CL5-2025-D3-02-06 · Grant Agreement No. 101198xxx",
    partnerCount: 23,
    countries: 14,
    demoSites: 6,
    workPackages: 9,
    budget: "€ 11.2M",
    coordinator: "Technical University of Delft",
    cordisUrl: "",
  },

  /** Outbound links — replace placeholders when consortium channels go live. Omit or set null to hide a row in the footer. */
  social: {
    linkedIn: "https://www.linkedin.com/",
    youtube: "",
    mastodon: "",
    twitter: "",
    openDataPortal: "#/resources",
    newsletterSignup: "#/engage",
  },

  /** Sister / adjacent EU projects (Consortium page). */
  relatedProjects: [
    { name: "ReHydro", url: "https://www.rehydro.eu/", summary: "Refurbishment and modernisation of European hydropower for sustainability and climate resilience." },
    { name: "RISE-IN", url: "https://www.rise-in.eu/", summary: "Climate adaptation, nature-based solutions, and investment readiness in cities." },
    { name: "Hydropower Europe", url: "https://hydropower-europe.eu/", summary: "Research and innovation agenda and strategic roadmap for the European hydropower sector." },
  ],

  /**
   * Home hero backdrop — extensible list: add entries to `byId` and ids to `order`.
   * Types: "image" | "video" (more can be added as the site grows).
   */
  heroVariants: {
    order: ["still", "motion", "alt"],
    byId: {
      still: {
        type: "image",
        label: "Still image",
        image: {
          src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2400&q=80",
          alt: "A river flowing through forested mountains at first light",
        },
      },
      motion: {
        type: "video",
        label: "Video",
        video: {
          src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4",
          poster:
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2400&q=80",
        },
      },
      alt: {
        type: "image",
        label: "Alternate",
        image: {
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80",
          alt: "Mountain river landscape — swap this asset when the third hero concept is ready",
        },
      },
    },
  },

  themes: [
    {
      id: "ecological-integration",
      number: "01",
      title: "Ecological integration",
      summary:
        "Designing hydropower systems that protect biodiversity, restore fish migration corridors, and preserve sediment regimes.",
      tags: ["Biodiversity", "Fish migration", "Sediment transport"],
      lead: "Prof. Ilaria Marchetti",
      workPackages: ["WP2", "WP4"],
    },
    {
      id: "water-quality",
      number: "02",
      title: "Water quality & hydrology",
      summary:
        "Monitoring dissolved oxygen, temperature regimes, and long-term hydrological change across demonstration basins.",
      tags: ["Hydrology", "Water quality", "Climate signal"],
      lead: "Dr. Aino Virtanen",
      workPackages: ["WP3"],
    },
    {
      id: "social-participation",
      number: "03",
      title: "Social participation & trust",
      summary:
        "Building deliberative processes with riparian communities, operators, and regulators to earn and sustain social license.",
      tags: ["Participation", "Governance", "Social science"],
      lead: "Prof. Lukas Berger",
      workPackages: ["WP5"],
    },
    {
      id: "adaptive-operations",
      number: "04",
      title: "Adaptive operations",
      summary:
        "Real-time operational frameworks that balance grid services, ecological flows, and climate-driven variability.",
      tags: ["Operations", "Grid services", "Adaptive management"],
      lead: "Dr. Nuno Correia",
      workPackages: ["WP6"],
    },
    {
      id: "climate-resilience",
      number: "05",
      title: "Climate resilience",
      summary:
        "Stress-testing European hydropower assets under 2050 climate scenarios and designing resilience pathways.",
      tags: ["Climate", "Scenarios", "Resilience"],
      lead: "Prof. Margit Haugen",
      workPackages: ["WP7"],
    },
    {
      id: "policy-dissemination",
      number: "06",
      title: "Policy & dissemination",
      summary:
        "Translating findings into guidance for the European Commission, national regulators, and river basin authorities.",
      tags: ["Policy", "Communication", "Open science"],
      lead: "Dr. Sophie Laurent",
      workPackages: ["WP8", "WP9"],
    },
  ],

  sites: [
    {
      id: "ardeche",
      name: "Ardèche Gorges",
      country: "France",
      region: "Rhône-Alpes",
      river: "Ardèche",
      lead: "INRAE · Université Grenoble Alpes",
      focus: ["Fish passage", "Sediment", "Tourism pressure"],
      summary:
        "A series of three run-of-river plants in a protected gorge, co-managed with the regional park authority. The site tests retrofit fish-passage structures and sediment-transport interventions.",
      kpis: [{ label: "Installed capacity", value: "24.6 MW" }, { label: "Catchment", value: "2,261 km²" }, { label: "Species monitored", value: "14" }],
      coord: { x: 0.46, y: 0.61 },
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "vorarlberg",
      name: "Vorarlberg High-Head Cascade",
      country: "Austria",
      region: "Vorarlberg",
      river: "Ill",
      lead: "TU Wien · illwerke vkw",
      focus: ["Pumped storage", "Adaptive operations", "Alpine ecology"],
      summary:
        "A three-reservoir pumped-storage cascade in the Austrian Alps, used to study grid-service operations against environmental flow constraints under shifting snowmelt patterns.",
      kpis: [{ label: "Installed capacity", value: "1,040 MW" }, { label: "Storage", value: "540 GWh" }, { label: "Altitude range", value: "540 – 2,300 m" }],
      coord: { x: 0.53, y: 0.54 },
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "iberian",
      name: "Douro Transboundary Basin",
      country: "Portugal / Spain",
      region: "Iberian Plateau",
      river: "Douro",
      lead: "IST Lisboa · CEDEX",
      focus: ["Transboundary governance", "Low-flow operation", "Sediment"],
      summary:
        "A cross-border cascade on the Douro where HydroPulse tests transboundary coordination protocols between Portuguese and Spanish operators during extended drought conditions.",
      kpis: [{ label: "River length studied", value: "380 km" }, { label: "Plants coordinated", value: "8" }, { label: "Transboundary protocols", value: "2 new" }],
      coord: { x: 0.28, y: 0.64 },
      image: "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "finland",
      name: "Oulujoki Boreal System",
      country: "Finland",
      region: "Northern Ostrobothnia",
      river: "Oulujoki",
      lead: "University of Oulu · Fortum",
      focus: ["Ice dynamics", "Migratory species", "Indigenous governance"],
      summary:
        "A boreal cascade of seven plants where the consortium co-develops migration interventions with Sámi stakeholders and tests ice-dynamic operational adjustments.",
      kpis: [{ label: "Plants in study", value: "7" }, { label: "Stakeholder forums", value: "9 / year" }, { label: "Ice-free days Δ", value: "+21 since 1980" }],
      coord: { x: 0.55, y: 0.18 },
      image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "balkan",
      name: "Drina River Pilot",
      country: "Bosnia & Herzegovina / Serbia",
      region: "Western Balkans",
      river: "Drina",
      lead: "University of Sarajevo · Jaroslav Černi",
      focus: ["Small hydro", "Community governance", "Biodiversity"],
      summary:
        "A pilot on a free-flowing stretch of the Drina testing small-scale hydropower typologies designed to co-exist with the region's exceptional freshwater biodiversity.",
      kpis: [{ label: "Fish species present", value: "31" }, { label: "Communities engaged", value: "12" }, { label: "Pilot interventions", value: "4" }],
      coord: { x: 0.58, y: 0.58 },
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "norway",
      name: "Hardangerfjord Coastal",
      country: "Norway",
      region: "Vestland",
      river: "Eidfjordvassdraget",
      lead: "NTNU · Statkraft",
      focus: ["Fjord ecology", "Pumped storage", "Tourism coexistence"],
      summary:
        "A high-head fjord-side plant coupled with a sensitive coastal ecosystem; HydroPulse evaluates operational patterns that reduce thermal and turbidity impacts on the fjord.",
      kpis: [{ label: "Installed capacity", value: "330 MW" }, { label: "Fjord area studied", value: "180 km²" }, { label: "Salmon population index", value: "+12% since 2024" }],
      coord: { x: 0.49, y: 0.24 },
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=70",
    },
  ],

  partners: [
    { name: "TU Delft", role: "Coordinator", type: "University", country: "Netherlands", website: "https://www.tudelft.nl/", logo: "" },
    { name: "TU Wien", role: "WP6 lead", type: "University", country: "Austria" },
    { name: "NTNU", role: "WP7 lead", type: "University", country: "Norway" },
    { name: "INRAE", role: "WP2 lead", type: "Research institute", country: "France" },
    { name: "IST Lisboa", role: "Partner", type: "University", country: "Portugal" },
    { name: "CEDEX", role: "Partner", type: "Research institute", country: "Spain" },
    { name: "University of Oulu", role: "Partner", type: "University", country: "Finland" },
    { name: "ETH Zürich", role: "WP3 lead", type: "University", country: "Switzerland" },
    { name: "Politecnico di Milano", role: "Partner", type: "University", country: "Italy" },
    { name: "Charles University", role: "Partner", type: "University", country: "Czechia" },
    { name: "University of Sarajevo", role: "Partner", type: "University", country: "BiH" },
    { name: "Jaroslav Černi", role: "Partner", type: "Research institute", country: "Serbia" },
    { name: "Aarhus University", role: "WP5 lead", type: "University", country: "Denmark" },
    { name: "KTH", role: "Partner", type: "University", country: "Sweden" },
    { name: "UCL", role: "Partner", type: "University", country: "UK" },
    { name: "Université Grenoble Alpes", role: "Partner", type: "University", country: "France" },
    { name: "Fortum", role: "Industrial partner", type: "Utility", country: "Finland" },
    { name: "Statkraft", role: "Industrial partner", type: "Utility", country: "Norway" },
    { name: "illwerke vkw", role: "Industrial partner", type: "Utility", country: "Austria" },
    { name: "EDP", role: "Industrial partner", type: "Utility", country: "Portugal" },
    { name: "WWF European Policy Office", role: "Civil-society partner", type: "NGO", country: "Belgium" },
    { name: "Eurelectric", role: "Industry association", type: "Association", country: "Belgium" },
    { name: "Joint Research Centre", role: "Advisory", type: "EU body", country: "EU", website: "https://joint-research-centre.ec.europa.eu/", logo: "" },
  ],

  news: [
    {
      id: "webinar-open-science",
      kind: "event",
      date: "2026-05-14",
      category: "Webinar",
      title: "Open-science roadmap — public webinar ahead of kickoff",
      excerpt:
        "Join the coordination team for a one-hour overview of HydroPulse open-data policy, embargo rules, and how partners will publish telemetry and models.",
      readTime: "1h · Online",
      location: "Online",
      externalUrl: "",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "kickoff-delft",
      kind: "event",
      date: "2026-06-04",
      category: "Consortium",
      title: "HydroPulse kicks off in Delft with 23 partners",
      excerpt:
        "The consortium convenes its inaugural General Assembly at TU Delft on 4 June, ratifying the work-package structure and launching the first year of fieldwork across the six demonstration sites.",
      readTime: "Full day",
      location: "Delft, Netherlands",
      externalUrl: "",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "ardeche-fieldwork",
      kind: "news",
      date: "2026-07-18",
      category: "Field notes",
      title: "First instrumented fish-passage season begins on the Ardèche",
      excerpt:
        "Acoustic telemetry arrays have been installed across three retrofit passages in the Ardèche gorges. Early detections include barbel, nase, and the first confirmed Atlantic salmon smolt in the reach since 2019.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "drina-engagement",
      kind: "news",
      date: "2026-09-02",
      category: "Engagement",
      title: "Community deliberation sessions launch on the Drina",
      excerpt:
        "Partners from Sarajevo and Belgrade hosted the first of twelve deliberation forums with riparian municipalities, opening a structured dialogue on small-hydro siting and benefit-sharing.",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "policy-brief-01",
      kind: "news",
      date: "2026-10-11",
      category: "Policy",
      title: "Policy brief: ecological flow standards in the revised WFD",
      excerpt:
        "HydroPulse publishes its first policy brief, contributing consortium findings to the European Commission's ongoing consultation on ecological-flow provisions in the Water Framework Directive.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "vorarlberg-data",
      kind: "news",
      date: "2026-11-22",
      category: "Open data",
      title: "First year of adaptive-operations data released",
      excerpt:
        "The Vorarlberg cascade data package — 14 months of high-resolution operational and ecological telemetry — is now available under CC-BY-4.0 through the HydroPulse open-data portal.",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?auto=format&fit=crop&w=1600&q=70",
    },
    {
      id: "summer-school",
      kind: "news",
      date: "2027-01-15",
      category: "Training",
      title: "Summer school on participatory hydropower — applications open",
      excerpt:
        "Applications are open for the HydroPulse summer school, hosted in Grenoble from 24–30 August 2027. Twenty-four doctoral and early-career places available.",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1600&q=70",
    },
  ],

  resources: [
    { type: "Deliverable", code: "D1.1", title: "Consortium governance framework", date: "2026-07", size: "1.2 MB", format: "PDF" },
    { type: "Deliverable", code: "D2.1", title: "Fish-passage retrofit typology — pan-European survey", date: "2026-11", size: "6.4 MB", format: "PDF" },
    { type: "Policy brief", code: "PB-01", title: "Ecological flow standards under the revised WFD", date: "2026-10", size: "0.8 MB", format: "PDF" },
    { type: "Dataset", code: "DS-01", title: "Vorarlberg operational & ecological telemetry (2026)", date: "2026-11", size: "3.1 GB", format: "CSV + NetCDF" },
    { type: "Publication", code: "JA-03", title: "Sediment continuity under variable reservoir operation", date: "2027-02", size: "0.6 MB", format: "Open-access journal" },
    { type: "Video", code: "V-02", title: "Inside the Ardèche fish-passage season", date: "2027-03", size: "—", format: "Video · 8:12" },
    { type: "Deliverable", code: "D5.1", title: "Deliberative-process handbook for hydropower siting", date: "2027-04", size: "2.1 MB", format: "PDF" },
    { type: "Dataset", code: "DS-02", title: "Douro drought-coordination protocol simulations", date: "2027-05", size: "840 MB", format: "NetCDF" },
    { type: "Publication", code: "JA-04", title: "Boreal ice-phenology shifts and operational implications", date: "2027-06", size: "0.5 MB", format: "Open-access journal" },
    { type: "Policy brief", code: "PB-02", title: "Transboundary coordination during drought", date: "2027-06", size: "0.7 MB", format: "PDF" },
  ],

  // European map — partner country dots, rough lat/lon in normalized 0..1 within a Europe frame
  mapPoints: [
    { c: "NL", x: 0.455, y: 0.41 },
    { c: "AT", x: 0.535, y: 0.53 },
    { c: "NO", x: 0.49, y: 0.19 },
    { c: "FR", x: 0.42, y: 0.54 },
    { c: "PT", x: 0.25, y: 0.66 },
    { c: "ES", x: 0.31, y: 0.66 },
    { c: "FI", x: 0.60, y: 0.14 },
    { c: "CH", x: 0.47, y: 0.52 },
    { c: "IT", x: 0.50, y: 0.62 },
    { c: "CZ", x: 0.54, y: 0.44 },
    { c: "BiH", x: 0.57, y: 0.59 },
    { c: "RS", x: 0.60, y: 0.58 },
    { c: "DK", x: 0.49, y: 0.33 },
    { c: "SE", x: 0.55, y: 0.24 },
    { c: "UK", x: 0.38, y: 0.36 },
    { c: "BE", x: 0.44, y: 0.42 },
    { c: "DE", x: 0.50, y: 0.42 },
    { c: "PL", x: 0.57, y: 0.39 },
  ],
};
