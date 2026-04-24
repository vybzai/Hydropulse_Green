// HydroPulse Alt — shared icons, logo, reveal, hash routing

const { useState, useEffect, useRef, useMemo } = React;

// Hash router
window.useHashRoute = function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || "/");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.slice(1) || "/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);
  return route;
};

window.navTo = function navTo(path) {
  window.location.hash = path;
};

// Reveal on scroll
window.useReveal = function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
};

// Icons — simple line set
window.Icon = function Icon({ name, size = 14, stroke = 1.6 }) {
  const s = size;
  const common = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow-right": return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrow-up-right": return <svg {...common}><path d="M7 17L17 7M8 7h9v9"/></svg>;
    case "arrow-down": return <svg {...common}><path d="M12 5v14M5 13l7 7 7-7"/></svg>;
    case "plus": return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus": return <svg {...common}><path d="M5 12h14"/></svg>;
    case "close": return <svg {...common}><path d="M6 6l12 12M18 6l-12 12"/></svg>;
    case "download": return <svg {...common}><path d="M12 3v14M5 11l7 7 7-7M5 21h14"/></svg>;
    case "play": return <svg {...common}><path d="M8 5l12 7-12 7z" fill="currentColor"/></svg>;
    case "menu": return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
    case "search": return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></svg>;
    case "wave": return <svg {...common}><path d="M2 12c2 0 2 -3 4 -3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3"/></svg>;
    case "spark": return <svg {...common}><path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M5.6 18.4l3.5-3.5M14.9 9.1l3.5-3.5"/></svg>;
    case "leaf": return <svg {...common}><path d="M21 4s-2 12-10 15c-5 2-9-1-9-6s4-8 10-8c3 0 5 1 5 1"/><path d="M6 18c2-3 5-5 9-7"/></svg>;
    case "circle": return <svg {...common}><circle cx="12" cy="12" r="8"/></svg>;
    case "check": return <svg {...common}><path d="M5 12l5 5L20 7"/></svg>;
    default: return null;
  }
};

// ———————————————————————— Logo ————————————————————————
const HP_LOGO = {
  noEu:          "assets/brand/HydroPulse_logo_no_eu_text.svg",
  withEu:        "assets/brand/HydroPulse_logo_eu_text.svg",
  noEuInverse:   "assets/brand/HydroPulse_logo_dark_mode_eu_text.svg",
  withEuInverse: "assets/brand/HydroPulse_logo_dark_mode_eu_text.svg",
};

function readLogoVariantFromDom() {
  if (typeof document === "undefined") return "inline";
  const a = document.documentElement.getAttribute("data-logo-variant");
  if (a === "brand") return "brand";
  return "inline";
}

window.useLogoVariant = function useLogoVariant() {
  const [v, setV] = useState(readLogoVariantFromDom);
  useEffect(() => {
    const onTweaks = (e) => {
      if (e && e.detail && (e.detail.logoVariant === "brand" || e.detail.logoVariant === "inline")) {
        setV(e.detail.logoVariant);
      } else {
        setV(readLogoVariantFromDom());
      }
    };
    window.addEventListener("hp-tweaks", onTweaks);
    return () => window.removeEventListener("hp-tweaks", onTweaks);
  }, []);
  return v;
};

// Inline fallback wordmark with small drop-shape mark
function LogoInline({ theme = "default" }) {
  const inverse = theme === "inverse";
  const color = inverse ? "#FBFAF7" : "var(--ink)";
  const accent = inverse ? "var(--accent-300)" : "var(--accent-500)";
  return (
    <a href="#/" className="hp-logo hp-logo--inline" style={{ display: "inline-flex", alignItems: "center", gap: 11, textDecoration: "none", color }}>
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden>
        {/* rounded drop with pulse line */}
        <defs>
          <linearGradient id="hpLogoGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={inverse ? "#25B8F0" : "var(--accent-500)"}/>
            <stop offset="1" stopColor={inverse ? "#0E5A86" : "var(--accent-700)"}/>
          </linearGradient>
        </defs>
        <path d="M13 2 C 6 10, 4 14, 4 17 a 9 9 0 0 0 18 0 c 0 -3 -2 -7 -9 -15 z" fill="url(#hpLogoGrad)"/>
        <path d="M7.5 17 c 1.5 0 1.5 -2 3 -2 s 1.5 2 3 2 s 1.5 -2 3 -2 s 1.5 2 3 2" fill="none" stroke="#FBFAF7" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
      <span style={{ fontFamily: "var(--display)", fontSize: 22, letterSpacing: "-0.015em", fontWeight: 500, color, fontVariationSettings: '"opsz" 72, "SOFT" 50' }}>HydroPulse</span>
    </a>
  );
}

window.Logo = function Logo({ theme = "default", variant = "noEu", onDarkChip = false }) {
  const panelVariant = window.useLogoVariant();
  const [forceInline, setForceInline] = useState(false);
  const [revertedToLight, setRevertedToLight] = useState(false);
  const isInverse = theme === "inverse";
  // Only "Official" in Tweaks uses the SVG wordmark; "Inline" always uses the drawn wordmark (works on inverse headers too).
  const useBrand = panelVariant === "brand" && !forceInline;

  useEffect(() => { setForceInline(false); setRevertedToLight(false); }, [panelVariant, isInverse, variant, onDarkChip]);

  if (!useBrand) return <LogoInline theme={theme} />;

  let src; let onChip = false;
  if (isInverse && !revertedToLight) {
    src = variant === "withEu" ? HP_LOGO.withEuInverse : HP_LOGO.noEuInverse;
  } else if (isInverse && revertedToLight) {
    src = variant === "withEu" ? HP_LOGO.withEu : HP_LOGO.noEu;
    onChip = !onDarkChip ? false : true;
  } else {
    src = variant === "withEu" ? HP_LOGO.withEu : HP_LOGO.noEu;
    onChip = onDarkChip;
  }
  const alt = variant === "withEu" ? "HydroPulse — co-funded by the European Union" : "HydroPulse";
  return (
    <a href="#/" className={"hp-logo" + (onChip ? " hp-logo--on-dark-chip" : "") + (variant === "withEu" ? " hp-logo--with-eu" : "")} style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", lineHeight: 0 }}>
      <img className="hp-logo__img" src={src} alt={alt} decoding="async"
        onError={() => {
          if (isInverse && !revertedToLight) { setRevertedToLight(true); return; }
          setForceInline(true);
        }}
      />
    </a>
  );
};

// ———————————————————————— Image ————————————————————————
window.HPImage = function HPImage({ src, alt = "", ratio = "16 / 9", label = "PLACEHOLDER", tint = true, radius = 16, style = {}, children, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure style={{ margin: 0, position: "relative", ...style }} className={className}>
      <div className={"hp-img " + (tint ? "hp-img--tint" : "hp-img--plain")} style={{ aspectRatio: ratio, borderRadius: radius, position: "relative" }}>
        {src && (
          <img src={src} alt={alt} onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 700ms var(--ease)" }} loading="lazy" decoding="async"/>
        )}
        {label && <div className="hp-img__label">{label}</div>}
        {children}
      </div>
    </figure>
  );
};

// ———————————————————————— Decorative wave band ————————————————————————
window.WaveBand = function WaveBand({ color = "var(--accent-100)", height = 42, flip = false }) {
  return (
    <svg className="hp-wave-band" viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ height, transform: flip ? "scaleY(-1)" : "none", display: "block" }} aria-hidden="true">
      <path d="M0,30 C150,55 300,5 500,25 C700,45 900,5 1100,28 L1200,28 L1200,60 L0,60 Z" fill={color}/>
    </svg>
  );
};
