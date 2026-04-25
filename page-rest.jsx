// HydroPulse Alt — secondary pages (About, Themes, Sites, Consortium, News, Resources, Engage, Contact)

const { useState: useStateP, useMemo: useMemoP } = React;
const d = () => window.HP_DATA;

// ═══════════════════════════════════════ ABOUT ═══════════════════════════════════════
window.PageAbout = function PageAbout() {
  window.useReveal();
  const data = d();
  return (
    <div className="page">
      <SubHero eyebrow="About" title={<>A consortium for <em>ecosystem-based</em> hydropower.</>} lead={data.project.longSummary} paletteBand="accent-soft"/>

      <section style={{ padding: "100px 0" }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div className="reveal">
            <span className="eyebrow">— Mission</span>
            <h2 className="display-md" style={{ marginTop: 14 }}>What we're trying to learn.</h2>
          </div>
          <div className="reveal" style={{ display: "grid", gap: 24 }}>
            <MissionPoint num="01" title="Design ecological integration in, not around." text="Treat fish passage, sediment continuity and biodiversity as first-class engineering constraints — co-equal with grid services."/>
            <MissionPoint num="02" title="Operate for climate variability." text="Build adaptive operational frameworks for an Alps with less snowpack, a Mediterranean with longer droughts, a North Sea with stormier winters."/>
            <MissionPoint num="03" title="Earn social license through participation." text="Riparian communities, operators and regulators sit at the same table. Deliberative design is not a garnish — it is the method."/>
            <MissionPoint num="04" title="Publish in the open." text="Datasets, deliverables, code and policy briefs are CC-BY from day one. We make the learning curve public."/>
          </div>
        </div>
      </section>

      <section className="band-cream" style={{ padding: "100px 0" }}>
        <div className="wrap">
          <span className="eyebrow reveal">— Work packages</span>
          <h2 className="display-md reveal" style={{ marginTop: 14, maxWidth: "22ch" }}>Nine work packages coordinate the consortium's effort.</h2>
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="hp-sites-grid">
            {WPS.map((w, i) => (
              <div key={w.code} className="card reveal" style={{ padding: 26, background: "white" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent-700)", letterSpacing: "0.1em" }}>{w.code}</span>
                  <span className="chip chip--ghost">{w.lead}</span>
                </div>
                <h3 className="display-sm" style={{ marginTop: 14, fontSize: 20 }}>{w.title}</h3>
                <p className="body-sm" style={{ marginTop: 10 }}>{w.sum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 0" }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div className="reveal">
            <window.HPImage src="https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1600&q=70" ratio="4 / 5" label="Timeline · 2026–2030"/>
          </div>
          <div className="reveal" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className="eyebrow">— Timeline</span>
            <h2 className="display-md" style={{ marginTop: 14 }}>Five years, five phases.</h2>
            <ul style={{ listStyle: "none", margin: "32px 0 0", padding: 0 }}>
              <Phase year="2026" title="Kickoff & instrumentation" text="Consortium convenes. Baseline telemetry installed at all six sites."/>
              <Phase year="2027" title="First full-season data" text="Fish-passage, sediment, operational & social indicators publish open."/>
              <Phase year="2028" title="Interventions & cross-site synthesis" text="Pilot retrofits enter operation. Policy briefs and the siting handbook."/>
              <Phase year="2029" title="Climate stress tests" text="Adaptive-operations framework released. Cross-basin coordination trials."/>
              <Phase year="2030" title="Upscaling & handover" text="Final guidance to DG ENER, DG ENV, river-basin authorities. Handover plan."/>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const WPS = [
  { code: "WP1", title: "Coordination & governance", lead: "TU Delft", sum: "Consortium management, ethics, and open-science policy." },
  { code: "WP2", title: "Ecological integration", lead: "INRAE", sum: "Fish passage, biodiversity and sediment continuity." },
  { code: "WP3", title: "Water quality & hydrology", lead: "ETH Zürich", sum: "Dissolved oxygen, thermal regime, long-term hydrological change." },
  { code: "WP4", title: "Engineering & retrofit", lead: "TU Delft", sum: "Retrofit typologies and hardware interventions across sites." },
  { code: "WP5", title: "Social participation", lead: "Aarhus University", sum: "Deliberative processes, governance, riparian stakeholder design." },
  { code: "WP6", title: "Adaptive operations", lead: "TU Wien", sum: "Operational frameworks balancing grid services and ecology." },
  { code: "WP7", title: "Climate resilience", lead: "NTNU", sum: "2050 scenario stress tests and resilience pathways." },
  { code: "WP8", title: "Policy & impact", lead: "WWF EPO", sum: "Translation to EU and national regulators." },
  { code: "WP9", title: "Dissemination & engagement", lead: "UCL", sum: "Communications, training, public-facing outputs." },
];

function MissionPoint({ num, title, text }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 18, paddingTop: 28, borderTop: "1px solid var(--rule)" }}>
      <span style={{ fontFamily: "var(--display)", fontSize: 28, color: "var(--accent-700)", fontVariationSettings: '"opsz" 144, "SOFT" 50' }}>{num}</span>
      <div>
        <h3 className="display-sm" style={{ fontSize: 22, marginTop: 0 }}>{title}</h3>
        <p className="body" style={{ marginTop: 8, color: "var(--ink-2)" }}>{text}</p>
      </div>
    </div>
  );
}
function Phase({ year, title, text }) {
  return (
    <li style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 18, paddingTop: 22, paddingBottom: 22, borderTop: "1px solid var(--rule)" }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent-700)", letterSpacing: "0.05em" }}>{year}</span>
      <div>
        <div style={{ fontFamily: "var(--display)", fontSize: 22, letterSpacing: "-0.01em" }}>{title}</div>
        <p className="body-sm" style={{ marginTop: 6 }}>{text}</p>
      </div>
    </li>
  );
}

// ═══════════════════════════════════════ SUB-HERO ═══════════════════════════════════════
function SubHero({ eyebrow, title, lead, paletteBand = "paper" }) {
  const bg = paletteBand === "accent-soft" ? "var(--accent-50)"
    : paletteBand === "cream" ? "var(--cream)"
    : paletteBand === "secondary" ? "var(--secondary-50)"
    : paletteBand === "tertiary" ? "var(--tertiary-50)"
    : "var(--page-bg, var(--paper))";
  return (
    <section style={{ background: bg, paddingTop: "calc(72px + 80px)", paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div className="wrap">
        <span className="eyebrow">— {eyebrow}</span>
        <h1 className="display-xl" style={{ marginTop: 18, maxWidth: "18ch" }}>{title}</h1>
        {lead && <p className="lead" style={{ marginTop: 28, maxWidth: "68ch" }}>{lead}</p>}
      </div>
      <window.WaveBand color="var(--page-bg, var(--paper))"/>
    </section>
  );
}

// ═══════════════════════════════════════ THEMES ═══════════════════════════════════════
window.PageThemes = function PageThemes() {
  window.useReveal();
  const [openId, setOpenId] = useStateP(d().themes[0].id);
  return (
    <div className="page">
      <SubHero eyebrow="Research themes" title={<>Six lines of inquiry, <em>woven together</em>.</>}
        lead="HydroPulse's research is organized into six themes that cut across work packages and sites. Each theme has a thematic lead, a publication track, and a policy audience."
        paletteBand="secondary"/>

      <section style={{ padding: "60px 0 100px" }}>
        <div className="wrap">
          {d().themes.map((t) => {
            const open = openId === t.id;
            return (
              <button key={t.id} className="hp-theme-row" data-open={open} onClick={() => setOpenId(open ? null : t.id)} aria-expanded={open}>
                <span className="hp-theme-row__num">{t.number}</span>
                <span style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 2.4vw, 32px)", letterSpacing: "-0.01em", fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>{t.title}</span>
                <span>
                  <span className="body" style={{ color: "var(--ink-2)" }}>{t.summary}</span>
                  {open && (
                    <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {t.tags.map((tag) => (<span key={tag} className="chip">{tag}</span>))}
                      <span className="chip chip--ghost">Lead · {t.lead}</span>
                      <span className="chip chip--ghost">{t.workPackages.join(" · ")}</span>
                    </div>
                  )}
                </span>
                <span className="hp-theme-row__plus" aria-hidden>
                  <window.Icon name={open ? "minus" : "plus"} size={16}/>
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ SITES ═══════════════════════════════════════
window.PageSites = function PageSites() {
  window.useReveal();
  return (
    <div className="page">
      <SubHero eyebrow="Demonstration sites" title={<>Six rivers, six <em>living laboratories</em>.</>}
        lead="Each site poses a specific, place-based question. The consortium tests interventions locally, then synthesizes findings across the continent."
        paletteBand="tertiary"/>

      <section style={{ padding: "60px 0 120px" }}>
        <div className="wrap" style={{ display: "grid", gap: 28 }}>
          {d().sites.map((s, i) => (
            <SiteRow key={s.id} s={s} index={i}/>
          ))}
        </div>
      </section>
    </div>
  );
};

function SiteRow({ s, index }) {
  const reverse = index % 2 === 1;
  return (
    <article className="card reveal hp-site-row" style={{
      display: "grid",
      gridTemplateColumns: reverse ? "1.4fr 1fr" : "1fr 1.4fr",
      gap: 0,
      overflow: "hidden",
      background: index % 3 === 0 ? "var(--accent-50)" : index % 3 === 1 ? "var(--secondary-50)" : "var(--tertiary-50)"
    }}>
      {!reverse && <window.HPImage src={s.image} ratio="4 / 3" label={s.country} radius={0}/>}
      <div style={{ padding: 36, display: "flex", flexDirection: "column", justifyContent: "center", order: reverse ? 0 : 1 }}>
        <span className="caption">{String(index + 1).padStart(2, "0")} · {s.country} · {s.river}</span>
        <h3 className="display-md" style={{ marginTop: 10 }}>{s.name}</h3>
        <p className="body-lg" style={{ marginTop: 16, color: "var(--ink-2)" }}>{s.summary}</p>
        <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {s.focus.map((f) => (<span key={f} className="chip">{f}</span>))}
        </div>
        <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: "20px 0 0", borderTop: "1px solid var(--rule)" }}>
          {s.kpis.map((k) => (
            <div key={k.label}>
              <div style={{ fontFamily: "var(--display)", fontSize: 22, letterSpacing: "-0.01em" }}>{k.value}</div>
              <div className="body-sm" style={{ marginTop: 2 }}>{k.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          <span className="body-sm">Lead partners · <strong style={{ color: "var(--ink)" }}>{s.lead}</strong></span>
        </div>
        <a href={"#/sites/" + s.id} className="link-arrow" style={{ marginTop: 20, display: "inline-flex" }}>
          View site profile <span className="arrow"><window.Icon name="arrow-right" size={14}/></span>
        </a>
      </div>
      {reverse && <window.HPImage src={s.image} ratio="4 / 3" label={s.country} radius={0}/>}
    </article>
  );
}

// ═══════════════════════════════════════ SITE DETAIL ═══════════════════════════════════════
window.PageSiteDetail = function PageSiteDetail({ siteId }) {
  window.useReveal();
  const data = d();
  const s = data.sites.find((x) => x.id === siteId);
  if (!s) return <window.PageNotFound />;
  const others = data.sites.filter((x) => x.id !== siteId).slice(0, 3);

  return (
    <div className="page">
      <section style={{ paddingTop: "calc(72px + 48px)", paddingBottom: 40, background: "var(--page-bg, var(--paper))" }}>
        <div className="wrap">
          <a href="#/sites" className="link-arrow" style={{ marginBottom: 28, display: "inline-flex" }}>
            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><window.Icon name="arrow-right" size={14}/></span>
            All demonstration sites
          </a>
          <div className="caption" style={{ marginBottom: 14 }}>
            {s.country.toUpperCase()}{s.region ? " · " + s.region.toUpperCase() : ""} · {s.river.toUpperCase()}
          </div>
          <h1 className="display-xl" style={{ margin: 0, maxWidth: "20ch" }}>{s.name}</h1>
        </div>
      </section>

      <window.HPImage src={s.image} ratio="21 / 9" label={s.country} radius={0} style={{ width: "100%", maxWidth: "none" }}/>

      <section style={{ padding: "72px 0" }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }}>
          <div className="reveal">
            <span className="eyebrow">— Overview</span>
            <div style={{ marginTop: 24, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--muted)", lineHeight: 1.9, textTransform: "uppercase" }}>
              <div>Lead · {s.lead}</div>
              <div style={{ marginTop: 8 }}>Focus · {s.focus.join(" · ")}</div>
            </div>
          </div>
          <div className="reveal">
            <p className="lead" style={{ margin: 0 }}>{s.summary}</p>
            <p className="body-lg" style={{ marginTop: 24, color: "var(--ink-2)" }}>
              The site runs ecological, hydrological and operational monitoring across the study reach. Findings are released as open outputs alongside quarterly field notes and consortium deliverables.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 0", background: "var(--cream)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap">
          <span className="eyebrow reveal">— Key figures</span>
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }} className="hp-two-col">
            {s.kpis.map((k, i) => (
              <div key={k.label} className="reveal" style={{ padding: "24px 20px", borderLeft: i === 0 ? "none" : "1px solid var(--rule)" }}>
                <div style={{ fontFamily: "var(--display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.02em" }}>{k.value}</div>
                <div className="caption" style={{ marginTop: 10 }}>{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0 120px" }}>
        <div className="wrap">
          <span className="eyebrow reveal">— Other demonstration sites</span>
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="hp-news-grid">
            {others.map((o) => (
              <a key={o.id} href={"#/sites/" + o.id} className="card card--hover reveal" style={{ textDecoration: "none", color: "var(--ink)" }}>
                <window.HPImage src={o.image} ratio="4 / 3" label={o.country} radius={0}/>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div className="caption">{o.country}</div>
                  <h3 className="display-sm" style={{ marginTop: 8 }}>{o.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ CONSORTIUM ═══════════════════════════════════════
window.PageConsortium = function PageConsortium() {
  window.useReveal();
  const data = d();
  const related = data.relatedProjects || [];
  return (
    <div className="page">
      <SubHero eyebrow="Consortium" title={<>{data.project.partnerCount} partners. <em>{data.project.countries} countries.</em> One programme.</>}
        lead="HydroPulse brings together universities, research institutes, utilities, civil-society organizations and an EU advisory body. Coordination sits with TU Delft."
        paletteBand="accent-soft"/>

      <section style={{ padding: "60px 0 120px" }}>
        <div className="wrap">
          <div className="hp-partner-grid reveal" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--rule-strong)" }}>
            {data.partners.map((p, i) => (
              <div key={p.name} style={{
                padding: "22px 20px",
                borderBottom: "1px solid var(--rule)",
                borderRight: (i + 1) % 4 === 0 ? "none" : "1px solid var(--rule)",
                background: p.role.includes("Coordinator") ? "var(--accent-50)" : "white",
              }}>
                {p.logo ? (
                  <div style={{ marginBottom: 12, minHeight: 36, display: "flex", alignItems: "center" }}>
                    <img src={p.logo} alt="" style={{ maxHeight: 36, maxWidth: "100%", objectFit: "contain" }}/>
                  </div>
                ) : null}
                <div style={{ fontFamily: "var(--display)", fontSize: 19, letterSpacing: "-0.005em" }}>
                  {p.website ? <a href={p.website} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{p.name}<span style={{ opacity: 0.5, fontSize: 12, marginLeft: 4 }}>↗</span></a> : p.name}
                </div>
                <div className="caption" style={{ marginTop: 6, color: "var(--muted)" }}>{p.country}</div>
                <div style={{ marginTop: 10 }}>
                  <span className="chip chip--ghost">{p.role}</span>
                </div>
                <div className="body-sm" style={{ marginTop: 8 }}>{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section style={{ padding: "0 0 100px" }}>
          <div className="wrap">
            <span className="eyebrow reveal">— Related initiatives</span>
            <h2 className="display-md reveal" style={{ marginTop: 14, maxWidth: "28ch" }}>Sister projects and sector context.</h2>
            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="hp-news-grid">
              {related.map((rp) => (
                <a key={rp.name} href={rp.url} target="_blank" rel="noopener noreferrer" className="card card--hover reveal" style={{ textDecoration: "none", color: "var(--ink)", padding: "24px 22px 28px", display: "block" }}>
                  <div className="caption" style={{ color: "var(--accent-700)" }}>External</div>
                  <h3 className="display-sm" style={{ marginTop: 10 }}>{rp.name}</h3>
                  <p className="body-sm" style={{ marginTop: 12, color: "var(--ink-2)" }}>{rp.summary}</p>
                  <span className="link-arrow" style={{ marginTop: 16, display: "inline-flex" }}>Visit <span className="arrow"><window.Icon name="arrow-up-right" size={14}/></span></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="band-ink" style={{ padding: "96px 0" }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <div className="reveal">
            <span className="eyebrow" style={{ color: "var(--accent-300)" }}>— Governance</span>
            <h2 className="display-lg" style={{ color: "white", marginTop: 16 }}>A flat coordination model with shared decision rights.</h2>
          </div>
          <div className="reveal" style={{ color: "rgba(255,255,255,0.78)" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
              <li><strong style={{ color: "white" }}>General Assembly</strong> — all partners, convened twice yearly. Ratifies budgets, major deliverables and mid-course corrections.</li>
              <li><strong style={{ color: "white" }}>Coordination Board</strong> — coordinator + nine WP leads. Monthly operational cadence.</li>
              <li><strong style={{ color: "white" }}>Ethics & Open-Science Committee</strong> — independent, reports directly to the GA. Ratifies data releases and community-research protocols.</li>
              <li><strong style={{ color: "white" }}>Community Advisory Panels</strong> — one per demonstration site, composed of riparian residents, local authorities, and NGOs.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ NEWS ═══════════════════════════════════════
function newsKind(n) {
  return n.kind === "event" ? "event" : "news";
}

function newsCardLabel(n) {
  return newsKind(n) === "event" ? "Event" : n.category;
}

window.PageNews = function PageNews() {
  window.useReveal();
  const [kindFilter, setKindFilter] = useStateP("all");
  const [cat, setCat] = useStateP("All");
  const sorted = useMemoP(() => d().news.slice().sort((a, b) => b.date.localeCompare(a.date)), []);
  const byKind = kindFilter === "all" ? sorted : sorted.filter((n) => newsKind(n) === kindFilter);
  const cats = ["All", ...Array.from(new Set(byKind.map((n) => n.category)))];
  const items = cat === "All" ? byKind : byKind.filter((n) => n.category === cat);

  return (
    <div className="page">
      <SubHero eyebrow="News & updates" title={<>Reports from the <em>six rivers</em>.</>} lead="Project updates, events and webinars, field notes, policy releases, open-data publications, and engagement milestones."/>

      <section style={{ padding: "20px 0 120px" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
            {[
              { id: "all", label: "All" },
              { id: "news", label: "News" },
              { id: "event", label: "Events" },
            ].map((k) => (
              <button key={k.id} type="button" onClick={() => { setKindFilter(k.id); setCat("All"); }}
                className="chip"
                style={{
                  background: kindFilter === k.id ? "var(--ink)" : "white",
                  color: kindFilter === k.id ? "white" : "var(--ink)",
                  borderColor: kindFilter === k.id ? "var(--ink)" : "var(--rule-strong)",
                  cursor: "pointer",
                  padding: "8px 14px",
                  fontSize: 11,
                }}>
                {k.label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
            {cats.map((c) => (
              <button key={c} type="button" onClick={() => setCat(c)}
                className="chip"
                style={{
                  background: c === cat ? "var(--ink)" : "var(--accent-50)",
                  color: c === cat ? "white" : "var(--accent-700)",
                  borderColor: c === cat ? "var(--ink)" : "var(--accent-100)",
                  cursor: "pointer",
                  padding: "8px 14px",
                  fontSize: 11,
                }}>
                {c}
              </button>
            ))}
          </div>

          {/* Featured row (first) */}
          {items[0] && (
            <a href={"#/news/" + items[0].id} className="card reveal" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 0, textDecoration: "none", color: "var(--ink)", background: "var(--accent-50)", marginBottom: 36 }}>
              <window.HPImage src={items[0].image} ratio="16 / 10" label={newsCardLabel(items[0])} radius={0}/>
              <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span className="caption">
                  {new Date(items[0].date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  {items[0].location ? " · " + items[0].location : ""} · {items[0].readTime}
                </span>
                <h2 className="display-md" style={{ marginTop: 14 }}>{items[0].title}</h2>
                <p className="body-lg" style={{ marginTop: 16, color: "var(--ink-2)" }}>{items[0].excerpt}</p>
                <span className="link-arrow" style={{ marginTop: 20 }}>
                  {newsKind(items[0]) === "event" ? "View details" : "Read the update"}
                  <span className="arrow"><window.Icon name="arrow-right" size={14}/></span>
                </span>
              </div>
            </a>
          )}

          <div className="hp-news-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {items.slice(1).map((n) => (
              <a key={n.id} href={"#/news/" + n.id} className="card card--hover reveal" style={{ textDecoration: "none", color: "var(--ink)", background: "white" }}>
                <window.HPImage src={n.image} ratio="5 / 3" label={newsCardLabel(n)} radius={0}/>
                <div style={{ padding: "22px 22px 26px" }}>
                  <div className="caption" style={{ color: "var(--muted)" }}>
                    {new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    {n.location ? " · " + n.location : ""} · {n.readTime}
                  </div>
                  <h3 className="display-sm" style={{ marginTop: 10 }}>{n.title}</h3>
                  <p className="body" style={{ marginTop: 12, color: "var(--ink-2)" }}>{n.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ NEWS DETAIL ═══════════════════════════════════════
window.PageNewsDetail = function PageNewsDetail({ articleId }) {
  window.useReveal();
  const n = d().news.find((x) => x.id === articleId);
  if (!n) return <window.PageNotFound />;
  const related = d().news.filter((x) => x.id !== articleId).slice(0, 3);

  return (
    <div className="page">
      <section style={{ paddingTop: "calc(72px + 48px)", paddingBottom: 36, background: "var(--page-bg, var(--paper))" }}>
        <div className="wrap-tight">
          <a href="#/news" className="link-arrow" style={{ marginBottom: 28, display: "inline-flex" }}>
            <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><window.Icon name="arrow-right" size={14}/></span>
            All updates
          </a>
          <div className="caption" style={{ marginBottom: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span>{new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            {n.location ? <><span>·</span><span>{n.location}</span></> : null}
            <span>·</span>
            <span>{newsCardLabel(n)}</span>
            <span>·</span>
            <span>{n.readTime}</span>
          </div>
          <h1 className="display-lg" style={{ margin: 0, maxWidth: "24ch" }}>{n.title}</h1>
        </div>
      </section>

      <div className="wrap">
        <window.HPImage src={n.image} ratio="21 / 9" label={newsCardLabel(n)} radius={0}/>
      </div>

      <section style={{ padding: "64px 0 96px" }}>
        <div className="wrap-tight">
          {n.externalUrl ? (
            <p style={{ margin: "0 0 24px" }}>
              <a href={n.externalUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 20px", textDecoration: "none" }}>
                Register or watch
                <window.Icon name="arrow-up-right" size={16}/>
              </a>
            </p>
          ) : null}
          <p className="lead">{n.excerpt}</p>
          <p className="body-lg" style={{ marginTop: 28, color: "var(--ink-2)" }}>
            Full article text will be managed in Sanity. This page demonstrates layout, reading width, and related content for each item.
          </p>
          <p className="body-lg" style={{ marginTop: 20, color: "var(--ink-2)" }}>
            Across twenty-three partner institutions in fourteen countries, HydroPulse integrates engineering, ecology, hydrology, and social science to develop, demonstrate, and upscale ecosystem-based hydropower strategies.
          </p>
          <blockquote style={{ margin: "40px 0", padding: "0 0 0 24px", borderLeft: "3px solid var(--accent-500)", fontFamily: "var(--display)", fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.4, fontWeight: 400 }}>
            The question is not whether Europe will need more hydropower in 2035 — it will. The question is which rivers we will have left.
            <footer style={{ marginTop: 16, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
              — Placeholder attribution
            </footer>
          </blockquote>
        </div>
      </section>

      <section style={{ padding: "64px 0 120px", borderTop: "1px solid var(--rule-strong)" }}>
        <div className="wrap">
          <span className="eyebrow reveal">— Continue reading</span>
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="hp-news-grid">
            {related.map((r) => (
              <a key={r.id} href={"#/news/" + r.id} className="card card--hover reveal" style={{ textDecoration: "none", color: "var(--ink)" }}>
                <window.HPImage src={r.image} ratio="4 / 3" label={newsCardLabel(r)} radius={0}/>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div className="caption">{new Date(r.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</div>
                  <h3 className="display-sm" style={{ marginTop: 8 }}>{r.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ RESOURCES ═══════════════════════════════════════
window.PageResources = function PageResources() {
  window.useReveal();
  const all = d().resources;
  const [type, setType] = useStateP("All");
  const [query, setQuery] = useStateP("");
  const [sort, setSort] = useStateP("date-desc");
  const types = ["All", ...Array.from(new Set(all.map((r) => r.type)))];

  const filtered = useMemoP(() => {
    const base = type === "All" ? all : all.filter((r) => r.type === type);
    const qq = query.trim().toLowerCase();
    if (!qq) return base;
    return base.filter((r) =>
      [r.code, r.title, r.type, r.format, r.size, r.date].some((field) =>
        String(field).toLowerCase().includes(qq),
      ),
    );
  }, [all, type, query]);

  const items = useMemoP(() => {
    const copy = filtered.slice();
    copy.sort((a, b) => {
      if (sort === "date-desc") return b.date.localeCompare(a.date);
      if (sort === "date-asc") return a.date.localeCompare(b.date);
      if (sort === "title") return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
      return a.code.localeCompare(b.code, "en", { numeric: true, sensitivity: "base" });
    });
    return copy;
  }, [filtered, sort]);

  const clearFilters = () => {
    setType("All");
    setQuery("");
  };

  return (
    <div className="page">
      <SubHero eyebrow="Resources" title={<>Open outputs, <em>open access</em>.</>}
        lead="Every deliverable, policy brief, dataset and publication is released CC-BY. Browse and download."
        paletteBand="cream"/>

      <section style={{ padding: "40px 0 120px" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
            {types.map((t) => (
              <button key={t} type="button" onClick={() => setType(t)}
                className="chip"
                style={{
                  background: t === type ? "var(--ink)" : "white",
                  color: t === type ? "white" : "var(--ink)",
                  borderColor: t === type ? "var(--ink)" : "var(--rule-strong)",
                  cursor: "pointer", padding: "8px 14px", fontSize: 11,
                }}>
                {t}
              </button>
            ))}
          </div>

          <div className="hp-resources-toolbar reveal" style={{
            display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end", marginBottom: 16,
          }}>
            <label style={{ flex: "1 1 260px", minWidth: 200, display: "block", margin: 0 }}>
              <span className="caption" style={{ display: "block", marginBottom: 8 }}>Search</span>
              <span style={{ display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid var(--rule-strong)", paddingBottom: 4 }}>
                <span style={{ flexShrink: 0, opacity: 0.45, display: "flex" }} aria-hidden><window.Icon name="search" size={18}/></span>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Title, code, type, format…"
                  autoComplete="off"
                  className="hp-input"
                  style={{ flex: 1, margin: 0, padding: "10px 0", minWidth: 0 }}
                  aria-label="Search resources"
                />
              </span>
            </label>
            <label style={{ display: "block", margin: 0 }}>
              <span className="caption" style={{ display: "block", marginBottom: 8 }}>Sort by</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort resources"
                style={{
                  fontFamily: "var(--sans)", fontSize: 14, padding: "10px 36px 10px 12px",
                  border: "1px solid var(--rule-strong)", borderRadius: 0, background: "white", color: "var(--ink)",
                  cursor: "pointer", minWidth: 200,
                }}>
                <option value="date-desc">Published · newest first</option>
                <option value="date-asc">Published · oldest first</option>
                <option value="title">Title · A–Z</option>
                <option value="code">Code · A–Z</option>
              </select>
            </label>
          </div>

          <p className="body-sm reveal" style={{ margin: "0 0 20px", color: "var(--muted)" }} aria-live="polite">
            {items.length === all.length && type === "All" && !query.trim()
              ? <>Showing all <strong style={{ color: "var(--ink)" }}>{all.length}</strong> resources.</>
              : <>
                Showing <strong style={{ color: "var(--ink)" }}>{items.length}</strong>
                {items.length === 1 ? " resource" : " resources"}
                {type !== "All" || query.trim() ? <> (filtered from {all.length})</> : null}.
              </>}
          </p>

          <div className="reveal">
            {items.length === 0 ? (
              <div style={{
                padding: "56px 24px", textAlign: "center", border: "1px dashed var(--rule-strong)", background: "var(--cream)",
              }}>
                <p className="body-lg" style={{ margin: 0, color: "var(--ink-2)" }}>
                  No resources match your search or type filter.
                </p>
                <button type="button" onClick={clearFilters} className="chip" style={{
                  marginTop: 20, cursor: "pointer", padding: "10px 18px", fontSize: 12,
                  background: "var(--ink)", color: "white", borderColor: "var(--ink)",
                }}>
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <div className="hp-res-head" style={{
                  display: "grid", gridTemplateColumns: "90px 1.8fr 140px 120px 120px 40px",
                  gap: 16, padding: "14px 20px",
                  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--muted)", borderTop: "1px solid var(--rule-strong)", borderBottom: "1px solid var(--rule)",
                }}>
                  <span>Code</span><span>Title</span><span>Type</span><span>Format</span><span>Published</span><span></span>
                </div>
                {items.map((r) => (
                  <a key={r.code} href="#/resources" className="hp-res-row" style={{
                    display: "grid", gridTemplateColumns: "90px 1.8fr 140px 120px 120px 40px",
                    gap: 16, padding: "20px 20px",
                    textDecoration: "none", color: "var(--ink)",
                    borderBottom: "1px solid var(--rule)", alignItems: "center",
                    transition: "background var(--dur) var(--ease)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-50)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent-700)" }}>{r.code}</span>
                    <span>
                      <span style={{ fontFamily: "var(--display)", fontSize: 18, letterSpacing: "-0.005em", display: "block" }}>{r.title}</span>
                      <span className="body-sm">{r.size}</span>
                    </span>
                    <span className="body-sm">{r.type}</span>
                    <span className="body-sm">{r.format}</span>
                    <span className="body-sm">{r.date}</span>
                    <span style={{ color: "var(--accent-700)" }}><window.Icon name="download" size={16}/></span>
                  </a>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ ENGAGE ═══════════════════════════════════════
window.PageEngage = function PageEngage() {
  window.useReveal();
  return (
    <div className="page">
      <SubHero eyebrow="Engage" title={<>A door for every <em>role</em>.</>}
        lead="The project serves many audiences. Pick the door that fits you — everyone is welcome."
        paletteBand="accent-soft"/>

      <section style={{ padding: "60px 0 120px" }}>
        <div className="wrap">
          <div className="hp-media-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            <EngageCard title="For journalists" kicker="Press kit · interviews · on-site visits"
              text="A current press kit, consortium fact sheet, high-resolution imagery, and a press contact for interviews and on-site visits."
              actions={[{ label: "Download press kit", icon: "download" }, { label: "Contact press office", icon: "arrow-right" }]}
              img="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?auto=format&fit=crop&w=1400&q=70"
              tone="accent"/>
            <EngageCard title="For researchers" kicker="Summer school · doctoral fellowships"
              text="Annual summer school in Grenoble. Affiliated doctoral fellowships. Open calls for visiting fellows at demonstration sites."
              actions={[{ label: "Summer school 2027", icon: "arrow-right" }, { label: "Fellowship calls", icon: "arrow-right" }]}
              img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70"
              tone="secondary"/>
            <EngageCard title="For communities" kicker="Deliberation forums · local contacts"
              text="Structured deliberation forums at each of the six sites. Attend, observe, or apply to serve on a Community Advisory Panel."
              actions={[{ label: "Find a forum near you", icon: "arrow-right" }]}
              img="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=70"
              tone="tertiary"/>
            <EngageCard title="For operators & regulators" kicker="Policy briefs · practitioner handbooks"
              text="Translate research into practice: participatory siting handbook, ecological-flow guidance, retrofit case library."
              actions={[{ label: "Practitioner library", icon: "arrow-right" }]}
              img="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=70"
              tone="lavender"/>
          </div>
        </div>
      </section>

      <section className="band-cream" style={{ padding: "80px 0" }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "center" }}>
          <div className="reveal">
            <span className="eyebrow">— Newsletter</span>
            <h2 className="display-md" style={{ marginTop: 14 }}>One update per quarter. No spam.</h2>
            <p className="body-lg" style={{ marginTop: 14, color: "var(--ink-2)" }}>
              The HydroPulse newsletter — field notes, publication highlights, and forthcoming deliberations.
            </p>
          </div>
          <form className="reveal" onSubmit={(e) => e.preventDefault()} style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
            <label style={{ flex: 1 }}>
              <span className="caption" style={{ display: "block", marginBottom: 6 }}>Your email</span>
              <input type="email" placeholder="name@institution.eu" className="hp-input"/>
            </label>
            <button type="submit" className="btn">Subscribe <span className="arrow"><window.Icon name="arrow-right" size={14}/></span></button>
          </form>
        </div>
      </section>
    </div>
  );
};

function EngageCard({ title, kicker, text, actions, img, tone = "accent" }) {
  const bgMap = { accent: "var(--accent-50)", secondary: "var(--secondary-50)", tertiary: "var(--tertiary-50)", lavender: "var(--c-lavender-50)" };
  return (
    <article className="card reveal" style={{ background: bgMap[tone] || "white", overflow: "hidden" }}>
      <window.HPImage src={img} ratio="16 / 9" label={kicker} radius={0}/>
      <div style={{ padding: 30 }}>
        <h3 className="display-md" style={{ fontSize: 30 }}>{title}</h3>
        <p className="body" style={{ marginTop: 12, color: "var(--ink-2)" }}>{text}</p>
        <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 12 }}>
          {actions.map((a) => (
            <a key={a.label} href="#/engage" className="link-arrow">
              {a.label} <span className="arrow"><window.Icon name={a.icon} size={14}/></span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

// ═══════════════════════════════════════ CONTACT ═══════════════════════════════════════
window.PageContact = function PageContact() {
  window.useReveal();
  return (
    <div className="page">
      <SubHero eyebrow="Contact" title={<>Get in touch.</>}
        lead="General enquiries reach the coordination office at TU Delft. Work-package leads and press are contactable directly."
        paletteBand="paper"/>

      <section style={{ padding: "40px 0 120px" }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80 }}>
          <form className="reveal" onSubmit={(e) => { e.preventDefault(); alert("Thanks — placeholder form."); }}>
            <label style={{ display: "block", marginBottom: 24 }}>
              <span className="caption" style={{ display: "block", marginBottom: 6 }}>Your name</span>
              <input className="hp-input" placeholder="Your name"/>
            </label>
            <label style={{ display: "block", marginBottom: 24 }}>
              <span className="caption" style={{ display: "block", marginBottom: 6 }}>Your email</span>
              <input type="email" className="hp-input" placeholder="name@institution.eu"/>
            </label>
            <label style={{ display: "block", marginBottom: 24 }}>
              <span className="caption" style={{ display: "block", marginBottom: 6 }}>I am…</span>
              <select className="hp-input" style={{ appearance: "none" }}>
                <option>A researcher</option><option>A journalist</option><option>Community member</option><option>Operator / regulator</option><option>Other</option>
              </select>
            </label>
            <label style={{ display: "block", marginBottom: 28 }}>
              <span className="caption" style={{ display: "block", marginBottom: 6 }}>Message</span>
              <textarea className="hp-input" rows={5} style={{ resize: "vertical", padding: "14px 0" }} placeholder="What can we help with?"/>
            </label>
            <button className="btn" type="submit">Send message <span className="arrow"><window.Icon name="arrow-right" size={14}/></span></button>
          </form>

          <aside className="reveal">
            <h2 className="display-sm">Coordination office</h2>
            <p className="body" style={{ marginTop: 12, color: "var(--ink-2)" }}>
              Technical University of Delft · Faculty of Civil Engineering & Geosciences<br/>
              Stevinweg 1, 2628 CN Delft, the Netherlands<br/>
              <a className="link-inline" href="mailto:office@hydropulse.eu">office@hydropulse.eu</a>
            </p>
            <h3 className="display-sm" style={{ marginTop: 36 }}>Press</h3>
            <p className="body" style={{ marginTop: 12, color: "var(--ink-2)" }}>
              <a className="link-inline" href="mailto:press@hydropulse.eu">press@hydropulse.eu</a><br/>
              Dr. Sophie Laurent · WP9 lead
            </p>
            <h3 className="display-sm" style={{ marginTop: 36 }}>Open data</h3>
            <p className="body" style={{ marginTop: 12, color: "var(--ink-2)" }}>
              <a className="link-inline" href="#/resources">data.hydropulse.eu</a>
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ MEDIA KIT ═══════════════════════════════════════
window.PageMedia = function PageMedia() {
  window.useReveal();
  const tiles = [
    { t: "Logo package", f: "ZIP · 4.2 MB", d: "Wordmark + mark, light/dark, SVG + PNG", band: "var(--accent-50)" },
    { t: "Brand guidelines", f: "PDF · 6.1 MB", d: "Colours, type, spacing, usage rules", band: "var(--secondary-50)" },
    { t: "Photography", f: "ZIP · 720 MB", d: "High-resolution demonstration-site imagery", band: "var(--tertiary-50)" },
    { t: "Fact sheet", f: "PDF · 0.9 MB", d: "Programme overview for press and partners", band: "var(--c-lavender-50)" },
    { t: "Social templates", f: "ZIP · 12 MB", d: "Templates for LinkedIn, X, and other channels", band: "var(--accent-50)" },
    { t: "Press contacts", f: "—", d: "Consortium communications directory", band: "var(--cream)" },
  ];
  return (
    <div className="page">
      <SubHero eyebrow="Media kit" title={<>Visual identity, assets, and <em>press materials</em>.</>}
        lead="Downloads for communications partners, journalists, and consortium members. Final packs ship with the governance-approved brand system."
        paletteBand="paper"/>

      <section style={{ padding: "48px 0 120px" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="hp-news-grid">
            {tiles.map((x, i) => (
              <div key={x.t} className="card reveal" style={{ overflow: "hidden", padding: 0, background: "white" }}>
                <div style={{ aspectRatio: "4 / 3", background: x.band, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--rule)" }}>
                  <span style={{ fontFamily: "var(--display)", fontSize: "clamp(22px, 3vw, 32px)", color: "var(--ink)", opacity: 0.85 }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div style={{ padding: "22px 22px 26px" }}>
                  <div className="caption" style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <span>{x.t}</span><span>{x.f}</span>
                  </div>
                  <p className="body-sm" style={{ marginTop: 12, color: "var(--ink-2)" }}>{x.d}</p>
                  <a href="#" onClick={(e) => e.preventDefault()} className="link-arrow" style={{ marginTop: 16, display: "inline-flex", opacity: 0.65 }} aria-disabled="true">
                    Download <span className="arrow"><window.Icon name="download" size={14}/></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="body-sm reveal" style={{ marginTop: 40, color: "var(--muted)", maxWidth: "72ch" }}>
            Placeholder actions — files will be published when the EU-approved brand pack is released. For urgent press needs, use <a href="#/contact" className="link-inline">Contact</a> or <a href="#/engage" className="link-inline">Engage</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ LEGAL (stub — matches logo-integration) ═══════════════════════════════════════
window.PageLegal = function PageLegal() {
  window.useReveal();
  return (
    <div className="page">
      <SubHero eyebrow="Legal" title={<>Legal notice, privacy, and <em>accessibility</em>.</>}
        lead="Placeholder governance copy. Replace with final consortium legal review before launch."
        paletteBand="paper"/>

      <section style={{ padding: "40px 0 120px" }}>
        <div className="wrap-tight">
          <div className="reveal">
            <h2 className="display-sm" style={{ marginTop: 0 }}>Legal notice</h2>
            <p className="body-lg" style={{ marginTop: 16 }}>
              This site is operated by the HydroPulse consortium, coordinated by TU Delft, under grant agreement No. 101198xxx of the European Union&apos;s Horizon Europe research and innovation programme.
            </p>
            <p className="body" style={{ marginTop: 16, color: "var(--ink-2)" }}>
              Views and opinions expressed are those of the authors only and do not necessarily reflect those of the European Union. Neither the European Union nor the granting authority can be held responsible for them.
            </p>
          </div>
          <div className="reveal" style={{ marginTop: 48 }}>
            <h2 className="display-sm">Privacy</h2>
            <p className="body" style={{ marginTop: 16, color: "var(--ink-2)" }}>
              A full privacy statement will be published here (cookies, analytics, contact form data, and retention) ahead of public launch.
            </p>
          </div>
          <div className="reveal" style={{ marginTop: 48 }}>
            <h2 className="display-sm">Accessibility</h2>
            <p className="body" style={{ marginTop: 16, color: "var(--ink-2)" }}>
              We aim to meet WCAG 2.2 AA for this site. An accessibility statement and feedback channel will be added with the production deployment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════ NOT FOUND ═══════════════════════════════════════
window.PageNotFound = function PageNotFound() {
  return (
    <div className="page" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <span className="eyebrow">— 404</span>
        <h1 className="display-lg" style={{ marginTop: 16 }}>This page doesn't exist yet.</h1>
        <p className="lead" style={{ marginTop: 18, maxWidth: "52ch" }}>
          The consortium site is a living document. This section will arrive with the next content pack.
        </p>
        <a href="#/" className="btn" style={{ marginTop: 28 }}>Back to home <span className="arrow"><window.Icon name="arrow-right" size={14}/></span></a>
      </div>
    </div>
  );
};
