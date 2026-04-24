// Tweaks / Design options panel

const { useState: useStateT, useEffect: useEffectT } = React;

const PALETTES = [
  { id: "river",    label: "River",    colors: ["var(--c-river-100)",    "var(--c-river-300)",    "var(--c-river-500)",    "var(--c-river-700)"] },
  { id: "meadow",   label: "Meadow",   colors: ["var(--c-meadow-100)",   "var(--c-meadow-300)",   "var(--c-meadow-500)",   "var(--c-meadow-700)"] },
  { id: "sunrise",  label: "Sunrise",  colors: ["var(--c-sunrise-100)",  "var(--c-sunrise-300)",  "var(--c-sunrise-500)",  "var(--c-sunrise-700)"] },
  { id: "lavender", label: "Lavender", colors: ["var(--c-lavender-100)", "var(--c-lavender-300)", "var(--c-lavender-500)", "var(--c-lavender-700)"] },
];

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "river",
  "surface": "paper",
  "display": "fraunces",
  "density": "default",
  "motion": "on",
  "logoVariant": "inline"
}/*EDITMODE-END*/;

function applyToDom(state) {
  const d = document.documentElement;
  d.setAttribute("data-palette", state.palette);
  d.setAttribute("data-surface", state.surface);
  d.setAttribute("data-display", state.display);
  d.setAttribute("data-density", state.density);
  d.setAttribute("data-motion", state.motion);
  d.setAttribute("data-logo-variant", state.logoVariant);
  window.dispatchEvent(new CustomEvent("hp-tweaks", { detail: state }));
}

window.initTweakDefaults = function initTweakDefaults() {
  applyToDom(DEFAULTS);
};

function tweaksRunStandalone() {
  try {
    return window.parent === window;
  } catch {
    return true;
  }
}

window.Tweaks = function Tweaks() {
  const [state, setState] = useStateT(DEFAULTS);
  // In embeds the host turns this on via postMessage; standalone (local file / dev server) shows it by default.
  const [visible, setVisible] = useStateT(tweaksRunStandalone());
  const [open, setOpen] = useStateT(false);

  useEffectT(() => { applyToDom(state); }, [state]);

  useEffectT(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") { setVisible(true); setOpen(true); }
      if (e.data.type === "__deactivate_edit_mode") { setVisible(false); setOpen(false); }
    };
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch(_) {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const persist = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*"); } catch(_) {}
  };

  const dismiss = () => {
    setOpen(false);
    if (!tweaksRunStandalone()) setVisible(false);
    try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch(_) {}
  };

  if (!visible) return null;

  return (
    <React.Fragment>
      <div className={"tweaks-backdrop" + (open ? " tweaks-backdrop--visible" : "")} onClick={() => setOpen(false)}/>

      <button
        className="tweaks-launcher"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Design options">
        <window.Icon name="spark" size={14}/>
        Design options
      </button>

      <aside className={"tweaks" + (open ? " on" : "")} role="dialog" aria-label="Design options">
        <div className="tweaks__header">
          <h3 className="tweaks__title">Tweaks</h3>
          <button className="tweaks__close" onClick={dismiss} aria-label="Close">
            <window.Icon name="close" size={14}/>
          </button>
        </div>
        <p className="tweaks__hint">Live-edit this alt direction. Explore palette, surface, type, density.</p>

        <div className="tweaks__row">
          <span className="tweaks__label">Accent palette</span>
          <div className="tweaks__palette" style={{ rowGap: 22 }}>
            {PALETTES.map((p) => (
              <button key={p.id}
                className={p.id === state.palette ? "active" : ""}
                onClick={() => persist({ palette: p.id })}
                aria-label={p.label}>
                <span className="tweaks__palette-dot">
                  {p.colors.map((c, i) => (<i key={i} style={{ background: c }}/>))}
                </span>
                <span className="tweaks__palette-label">{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        <hr className="tweaks__divider"/>

        <Seg label="Page surface" value={state.surface} onChange={(v) => persist({ surface: v })}
          options={[{ id: "paper", label: "Paper" }, { id: "cream", label: "Cream" }, { id: "accent", label: "Accent" }]}/>

        <Seg label="Display typeface" value={state.display} onChange={(v) => persist({ display: v })}
          options={[{ id: "fraunces", label: "Fraunces" }, { id: "source", label: "Source" }, { id: "grotesk", label: "Grotesk" }]}/>

        <Seg label="Density" value={state.density} onChange={(v) => persist({ density: v })}
          options={[{ id: "default", label: "Default" }, { id: "compact", label: "Compact" }]}/>

        <Seg label="Motion" value={state.motion} onChange={(v) => persist({ motion: v })}
          options={[{ id: "on", label: "On" }, { id: "off", label: "Reduced" }]}/>

        <Seg label="Logo variant" value={state.logoVariant} onChange={(v) => persist({ logoVariant: v })}
          options={[{ id: "inline", label: "Inline" }, { id: "brand", label: "Official" }]}/>
      </aside>
    </React.Fragment>
  );
};

function Seg({ label, value, onChange, options }) {
  return (
    <div className="tweaks__row">
      <span className="tweaks__label">{label}</span>
      <div className="tweaks__seg">
        {options.map((o) => (
          <button key={o.id}
            className={value === o.id ? "active" : ""}
            onClick={() => onChange(o.id)}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
