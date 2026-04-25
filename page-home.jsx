// HydroPulse Alt — Home page

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

function heroPreferStaticVideo() {
  if (typeof document === "undefined") return false;
  if (document.documentElement.getAttribute("data-motion") === "off") return true;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

function HeroMedia() {
  const variantId = window.useHeroVariant();
  const d = window.HP_DATA;
  const [staticVideo, setStaticVideo] = useStateH(heroPreferStaticVideo);

  useEffectH(() => {
    const sync = () => setStaticVideo(heroPreferStaticVideo());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", sync);
    window.addEventListener("hp-tweaks", sync);
    sync();
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("hp-tweaks", sync);
    };
  }, []);

  const hv = d.heroVariants;
  const order = (hv && hv.order) || ["still"];
  const cfg = (hv && hv.byId && hv.byId[variantId]) || (hv && hv.byId && hv.byId[order[0]]);

  if (!cfg) {
    return (
      <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2400&q=80"
        alt="" decoding="async" onError={(e) => { e.target.style.display = "none"; }}/>
    );
  }

  if (cfg.type === "video" && !staticVideo && cfg.video) {
    return (
      <video
        key={variantId + "-v"}
        src={cfg.video.src}
        poster={cfg.video.poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
    );
  }

  if (cfg.type === "video" && cfg.video) {
    return (
      <img
        key={variantId + "-p"}
        src={cfg.video.poster || ""}
        alt=""
        decoding="async"
        onError={(e) => { e.target.style.display = "none"; }}
      />
    );
  }

  if (cfg.image) {
    return (
      <img
        key={variantId}
        src={cfg.image.src}
        alt={cfg.image.alt || ""}
        decoding="async"
        onError={(e) => { e.target.style.display = "none"; }}
      />
    );
  }

  return null;
}

window.PageHome = function PageHome() {
  window.useReveal();
  const d = window.HP_DATA;
  const heroVariant = window.useHeroVariant();
  const heroCfg = d.heroVariants && d.heroVariants.byId && d.heroVariants.byId[heroVariant];
  const heroVideoBackdrop = heroCfg && heroCfg.type === "video";
  const heroChipStyle = heroVideoBackdrop
    ? {
        background: "rgba(255,255,255,0.94)",
        color: "var(--ink)",
        borderColor: "rgba(14, 27, 46, 0.16)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 1px 0 rgba(255,255,255,0.6) inset",
      }
    : {
        background: "rgba(255,255,255,0.15)",
        color: "white",
        borderColor: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(6px)",
      };

  return (
    <div className="page page--home">
      {/* HERO — configurable still / video / alternate (see HP_DATA.heroVariants) */}
      <section className="hp-hero-image" style={{ minHeight: "min(92vh, 920px)" }}>
        <div className="hp-hero-image__media">
          <HeroMedia />
        </div>
        <div className="hp-hero-image__scrim"/>
        <div className="wrap hp-hero-image__inner">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
            <span className="chip" style={heroChipStyle}>
              <window.Icon name="wave" size={12}/> {d.project.funding} · {d.project.duration}
            </span>
            <span className="chip" style={heroChipStyle}>
              {d.project.partnerCount} partners · {d.project.countries} countries
            </span>
          </div>

          <h1 className="display-xl" style={{ color: "white", maxWidth: "18ch", fontSize: "clamp(56px, 9vw, 148px)" }}>
            Hydropower <em style={{ color: "var(--accent-300)" }}>in rhythm</em><br/>with living rivers.
          </h1>

          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "end" }} className="hp-two-col">
            <p className="lead" style={{ color: "rgba(255,255,255,0.88)", maxWidth: "54ch", textWrap: "pretty" }}>
              {d.project.tagline} — a European research consortium designing the next generation of hydropower: systems that expand clean energy while restoring rivers, protecting fish, and earning social license through participatory design.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#/about" className="btn" style={{ background: "white", color: "var(--ink)" }}>
                About the project
                <span className="arrow"><window.Icon name="arrow-right" size={14}/></span>
              </a>
              <a href="#/sites" className="btn btn-ghost" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
                The six sites
              </a>
            </div>
          </div>

          <div style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.62)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <window.Icon name="arrow-down" size={14}/> Scroll to read
          </div>
        </div>
      </section>

      {/* FACTS STRIP */}
      <section style={{ background: "var(--page-bg, var(--paper))", padding: "88px 0 24px" }}>
        <div className="wrap">
          <div className="hp-facts reveal" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
            <Fact num={d.project.partnerCount} label="Partner institutions" sub={`Across ${d.project.countries} European countries`}/>
            <Fact num={d.project.demoSites} label="Demonstration sites" sub="Alps · Balkans · Iberia · Boreal · Fjord" tone={2}/>
            <Fact num={d.project.workPackages} label="Work packages" sub="Engineering, ecology, governance" tone={3}/>
            <Fact num={d.project.budget} label="Horizon Europe budget" sub="Over 4 years, 2026–2030" tone={4}/>
            <Fact num="CC‑BY" label="All outputs open" sub="Papers, datasets, guidance" tone={5}/>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{ padding: "120px 0 40px" }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 80 }}>
          <div className="reveal">
            <span className="eyebrow">— Our premise</span>
            <h2 className="display-lg" style={{ marginTop: 20 }}>
              Europe needs more clean power, <em>and</em> more living rivers.
            </h2>
          </div>
          <div className="reveal">
            <p className="body-lg" style={{ marginTop: 12 }}>
              {d.project.longSummary}
            </p>
            <p className="body-lg" style={{ marginTop: 20, color: "var(--ink-2)" }}>
              HydroPulse works in six places where that tension is real and specific — a gorge in Ardèche, an alpine cascade in Vorarlberg, a transboundary river on the Iberian plateau, a boreal system in Finland, a Balkan pilot on the Drina, and a fjord-side plant in Norway. We publish what we learn as we learn it.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#/about" className="link-arrow">
                Read the full brief <span className="arrow"><window.Icon name="arrow-right" size={14}/></span>
              </a>
              <a href="#/resources" className="link-arrow">
                Consortium charter (D1.1) <span className="arrow"><window.Icon name="arrow-up-right" size={14}/></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH THEMES — short preview */}
      <section style={{ padding: "80px 0 40px" }}>
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }} className="reveal">
            <div>
              <span className="eyebrow">— Research themes</span>
              <h2 className="display-md" style={{ marginTop: 14, maxWidth: "18ch" }}>Six lines of inquiry, woven across the consortium.</h2>
            </div>
            <a href="#/themes" className="link-arrow">See all themes <span className="arrow"><window.Icon name="arrow-right" size={14}/></span></a>
          </div>

          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="hp-sites-grid">
            {d.themes.slice(0, 6).map((t, i) => (
              <a key={t.id} href="#/themes" className="card card--hover reveal" style={{ padding: 28, textDecoration: "none", color: "var(--ink)", background: i % 3 === 0 ? "var(--accent-50)" : i % 3 === 1 ? "var(--secondary-50)" : "var(--tertiary-50)" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                  <span className="caption">{t.number}</span>
                  <window.Icon name="arrow-up-right" size={16}/>
                </div>
                <h3 className="display-sm" style={{ marginTop: 18 }}>{t.title}</h3>
                <p className="body" style={{ marginTop: 12, color: "var(--ink-2)" }}>{t.summary}</p>
                <div style={{ marginTop: 22, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {t.tags.map((tag) => (<span key={tag} className="chip chip--ghost">{tag}</span>))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SITES MAP TEASER */}
      <section className="band-ink" style={{ padding: "120px 0", marginTop: 80, borderRadius: 0, position: "relative", overflow: "hidden" }}>
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64 }} className="hp-two-col">
            <div className="reveal">
              <span className="eyebrow" style={{ color: "var(--accent-300)" }}>— Demonstration sites</span>
              <h2 className="display-lg" style={{ color: "white", marginTop: 20 }}>
                Six rivers. <em style={{ color: "var(--accent-300)" }}>Six questions.</em>
              </h2>
              <p className="lead" style={{ color: "rgba(255,255,255,0.78)", marginTop: 22 }}>
                Each site poses a different version of the same question: how can a working hydropower system also be a thriving ecosystem and a trusted neighbour?
              </p>
              <a href="#/sites" className="btn" style={{ marginTop: 30, background: "white", color: "var(--ink)" }}>
                Visit the six sites <span className="arrow"><window.Icon name="arrow-right" size={14}/></span>
              </a>
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="reveal">
              {d.sites.map((s, i) => (
                <li key={s.id} style={{
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  borderBottom: i >= 4 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}>
                  <a href={"#/sites/" + s.id} style={{ display: "block", padding: "22px 8px", textDecoration: "none", color: "inherit", outlineOffset: 2 }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent-300)", letterSpacing: "0.1em" }}>0{i+1} · {s.country}</span>
                    <div style={{ marginTop: 6, fontFamily: "var(--display)", fontSize: 22, color: "white", letterSpacing: "-0.01em" }}>{s.name}</div>
                    <div style={{ marginTop: 6, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{s.river}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section style={{ padding: "120px 0 40px" }}>
        <div className="wrap">
          <div className="reveal" style={{ display: "flex", alignItems: "end", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <div>
              <span className="eyebrow">— News & field notes</span>
              <h2 className="display-md" style={{ marginTop: 14 }}>What the consortium is up to.</h2>
            </div>
            <a href="#/news" className="link-arrow">All updates <span className="arrow"><window.Icon name="arrow-right" size={14}/></span></a>
          </div>

          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="hp-news-grid">
            {d.news.slice(0, 3).map((n) => (
              <a key={n.id} href={"#/news/" + n.id} className="card card--hover reveal" style={{ textDecoration: "none", color: "var(--ink)" }}>
                <window.HPImage src={n.image} ratio="5 / 3" label={n.category} radius={0}/>
                <div style={{ padding: "22px 22px 26px" }}>
                  <div className="caption" style={{ color: "var(--muted)" }}>{new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {n.readTime}</div>
                  <h3 className="display-sm" style={{ marginTop: 10 }}>{n.title}</h3>
                  <p className="body" style={{ marginTop: 12, color: "var(--ink-2)" }}>{n.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="band-accent-soft" style={{ padding: "100px 0", marginTop: 80 }}>
        <div className="wrap hp-two-col" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
          <div className="reveal">
            <span className="eyebrow">— Engage</span>
            <h2 className="display-lg" style={{ marginTop: 20 }}>Work with us, or follow along.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Journalists, river-basin authorities, utilities, doctoral candidates, and riparian communities — there's a door for every role in the project.
            </p>
          </div>
          <div className="reveal" style={{ display: "grid", gap: 14 }}>
            <a href="#/engage" className="card" style={{ padding: 22, textDecoration: "none", color: "var(--ink)", background: "white", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <div>
                <div className="caption" style={{ color: "var(--accent-700)" }}>FOR RESEARCHERS</div>
                <div style={{ fontFamily: "var(--display)", fontSize: 22, marginTop: 6 }}>Summer school · Grenoble 2027</div>
              </div>
              <window.Icon name="arrow-up-right" size={18}/>
            </a>
            <a href="#/media" className="card" style={{ padding: 22, textDecoration: "none", color: "var(--ink)", background: "white", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <div>
                <div className="caption" style={{ color: "var(--accent-700)" }}>FOR JOURNALISTS</div>
                <div style={{ fontFamily: "var(--display)", fontSize: 22, marginTop: 6 }}>Press kit & media enquiries</div>
              </div>
              <window.Icon name="arrow-up-right" size={18}/>
            </a>
            <a href="#/engage" className="card" style={{ padding: 22, textDecoration: "none", color: "var(--ink)", background: "white", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <div>
                <div className="caption" style={{ color: "var(--accent-700)" }}>FOR COMMUNITIES</div>
                <div style={{ fontFamily: "var(--display)", fontSize: 22, marginTop: 6 }}>Deliberation forums near you</div>
              </div>
              <window.Icon name="arrow-up-right" size={18}/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

function Fact({ num, label, sub, tone = 1 }) {
  return (
    <div className={"hp-fact" + (tone > 1 ? " hp-fact--s" + tone : "")}>
      <div className="hp-fact__num">{num}</div>
      <div className="hp-fact__label">{label}</div>
      <div className="hp-fact__sub">{sub}</div>
    </div>
  );
}
