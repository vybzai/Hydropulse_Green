// Site chrome — header nav, full-screen menu overlay, footer

const { useState: useStateC, useEffect: useEffectC, useMemo: useMemoC } = React;

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/themes", label: "Research" },
  { path: "/sites", label: "Sites" },
  { path: "/consortium", label: "Consortium" },
  { path: "/news", label: "News" },
  { path: "/resources", label: "Resources" },
  { path: "/media", label: "Media" },
  { path: "/engage", label: "Engage" },
];

function isRouteActive(route, path) {
  if (path === "/") return route === "/" || route === "";
  return route === path || route.startsWith(path + "/");
}

window.Header = function Header({ overlay = false }) {
  const route = window.useHashRoute();
  const [scrolled, setScrolled] = useStateC(false);
  const [menuOpen, setMenuOpen] = useStateC(false);

  useEffectC(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffectC(() => { setMenuOpen(false); }, [route]);
  useEffectC(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const onDark = overlay; // overlay mode = on top of hero image
  const cls = ["hp-site-header"];
  if (scrolled) cls.push("hp-site-header--scrolled");
  if (overlay) cls.push("hp-site-header--overlay");

  return (
    <React.Fragment>
      <header className={cls.join(" ")}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <window.Logo variant="noEu" theme={onDark ? "inverse" : "default"}/>

          <nav className="hp-nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(route, item.path);
              const linkCls = ["hp-nav-link"];
              if (active) linkCls.push("hp-nav-link--active");
              if (onDark) linkCls.push("hp-nav-link--on-dark");
              return (
                <a key={item.path} href={"#" + item.path} className={linkCls.join(" ")}>{item.label}</a>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="#/contact"
              className="btn"
              style={{
                padding: "10px 18px",
                fontSize: 13,
                background: onDark ? "rgba(255,255,255,0.95)" : "var(--ink)",
                color: onDark ? "var(--ink)" : "white",
              }}
            >
              Contact
              <span className="arrow"><window.Icon name="arrow-right" size={14}/></span>
            </a>
            <button
              className="hp-nav-mobile"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                display: "none",
                width: 42, height: 42,
                borderRadius: 999,
                border: "1px solid " + (onDark ? "rgba(255,255,255,0.35)" : "var(--rule-strong)"),
                background: "transparent",
                color: onDark ? "white" : "var(--ink)",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <window.Icon name="menu" size={18}/>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <FullMenu route={route} onClose={() => setMenuOpen(false)}/>}
    </React.Fragment>
  );
};

function FullMenu({ route, onClose }) {
  return (
    <div className="hp-fullmenu" role="dialog" aria-modal="true">
      <div className="wrap" style={{ paddingTop: 24, paddingBottom: 40, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 48 }}>
          <window.Logo variant="noEu" theme="inverse"/>
          <button onClick={onClose} aria-label="Close menu"
            style={{
              width: 44, height: 44, borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)", background: "transparent",
              color: "white", cursor: "pointer",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
            }}>
            <window.Icon name="close" size={18}/>
          </button>
        </div>

        <nav style={{ marginTop: 40, flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          {NAV_ITEMS.map((item, i) => {
            const active = isRouteActive(route, item.path);
            return (
              <a key={item.path} href={"#" + item.path}
                style={{
                  display: "flex", alignItems: "baseline", justifyContent: "space-between",
                  padding: "18px 0",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                  color: active ? "white" : "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                  fontFamily: "var(--display)",
                  fontSize: "clamp(32px, 6vw, 54px)",
                  letterSpacing: "-0.02em",
                  fontVariationSettings: '"opsz" 144, "SOFT" 50',
                }}>
                <span>{item.label}</span>
                <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            );
          })}
        </nav>

        <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between", color: "rgba(255,255,255,0.56)", fontSize: 13 }}>
          <div>Horizon Europe · Grant 101198xxx</div>
          <a href="#/contact" onClick={onClose} style={{ color: "white" }}>Get in touch →</a>
        </div>
      </div>
    </div>
  );
}

// ——— Footer ———
window.Footer = function Footer() {
  const d = window.HP_DATA;
  return (
    <footer className="hp-footer">
      <div className="wrap" style={{ paddingTop: 96, paddingBottom: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr", gap: 40 }} className="hp-two-col">
          <div>
            <window.Logo variant="noEu" theme="inverse"/>
            <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.68)", maxWidth: 360 }}>
              {d.project.summary}
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="chip" style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.15)" }}>{d.project.funding}</span>
              <span className="chip" style={{ background: "rgba(255,255,255,0.08)", color: "white", borderColor: "rgba(255,255,255,0.15)" }}>{d.project.duration}</span>
            </div>
          </div>

          <FooterCol title="Project" links={[
            { label: "About", href: "#/about" },
            { label: "Research themes", href: "#/themes" },
            { label: "Demonstration sites", href: "#/sites" },
            { label: "Consortium", href: "#/consortium" },
          ]}/>
          <FooterCol title="Engage" links={[
            { label: "News", href: "#/news" },
            { label: "Resources", href: "#/resources" },
            { label: "Media kit", href: "#/media" },
            { label: "For journalists", href: "#/engage" },
            { label: "Contact", href: "#/contact" },
          ]}/>
          <FooterCol title="Follow" links={[
            { label: "LinkedIn", href: "#/engage" },
            { label: "Open-data portal", href: "#/resources" },
            { label: "Newsletter", href: "#/engage" },
            { label: "Mastodon", href: "#/engage" },
          ]}/>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid rgba(255,255,255,0.12)", margin: "56px 0 24px" }}/>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.56)", fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <span>{d.project.grantId}</span>
            <span>© 2026 HydroPulse Consortium</span>
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#/legal" style={{ color: "inherit", textDecoration: "none" }}>Legal</a>
            <a href="#/legal" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            <a href="#/legal" style={{ color: "inherit", textDecoration: "none" }}>Accessibility</a>
          </div>
        </div>

        <p style={{ marginTop: 24, fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.5, maxWidth: 820 }}>
          Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Climate, Infrastructure and Environment Executive Agency (CINEA). Neither the European Union nor the granting authority can be held responsible for them.
        </p>
      </div>
    </footer>
  );
};

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: 14 }}>{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
