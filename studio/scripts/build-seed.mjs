/**
 * Builds studio/seed/seed.ndjson from repo-root data.js (same source as the static prototype).
 * Run: node scripts/build-seed.mjs
 */
import {readFileSync, writeFileSync, mkdirSync} from "node:fs";
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const studioRoot = join(__dirname, "..");
const repoRoot = join(studioRoot, "..");
const dataPath = join(repoRoot, "data.js");
const outDir = join(studioRoot, "seed");
const outFile = join(outDir, "seed.ndjson");

function loadHpData() {
  const src = readFileSync(dataPath, "utf8");
  const w = {};
  new Function("window", src)(w);
  return w.HP_DATA;
}

function isHttpUrl(v) {
  return typeof v === "string" && /^https?:\/\//i.test(v);
}

function slugId(s) {
  return String(s)
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function line(doc) {
  return JSON.stringify(doc);
}

const d = loadHpData();
const rows = [];

const siteSettingsDoc = {
  _id: "site-settings",
  _type: "siteSettings",
  internalNote: "Global",
  projectTagline: d.project.tagline,
  grantLine: d.project.grantId,
};
if (d.project.cordisUrl && isHttpUrl(d.project.cordisUrl)) {
  siteSettingsDoc.cordisUrl = d.project.cordisUrl;
}
const socialMap = {
  linkedIn: "linkedIn",
  youtube: "youtube",
  twitter: "twitter",
  mastodon: "mastodon",
  openDataPortal: "openDataPortalUrl",
  newsletterSignup: "newsletterSignupUrl",
};
for (const [dataKey, schemaKey] of Object.entries(socialMap)) {
  const v = (d.social || {})[dataKey];
  if (isHttpUrl(v)) siteSettingsDoc[schemaKey] = v;
}
rows.push(siteSettingsDoc);

for (const rp of d.relatedProjects || []) {
  rows.push({
    _id: `related-${slugId(rp.name)}`,
    _type: "relatedProject",
    name: rp.name,
    url: rp.url,
    summary: rp.summary || "",
  });
}

for (const n of d.news || []) {
  const doc = {
    _id: `news-${n.id}`,
    _type: "newsOrEvent",
    kind: n.kind === "event" ? "event" : "news",
    title: n.title,
    slug: {_type: "slug", current: n.id},
    publishedAt: n.date,
    category: n.category || "",
    excerpt: n.excerpt || "",
    readTimeLabel: n.readTime || "",
  };
  if (n.kind === "event" && n.location) doc.location = n.location;
  if (n.kind === "event" && isHttpUrl(n.externalUrl)) doc.externalUrl = n.externalUrl;
  rows.push(doc);
}

for (const p of d.partners || []) {
  const doc = {
    _id: `partner-${slugId(p.name)}`,
    _type: "partner",
    name: p.name,
    role: p.role || "",
    orgType: p.type || "",
    country: p.country || "",
  };
  if (p.website && isHttpUrl(p.website)) doc.website = p.website;
  rows.push(doc);
}

for (const s of d.sites || []) {
  rows.push({
    _id: `demo-site-${s.id}`,
    _type: "demoSite",
    slug: {_type: "slug", current: s.id},
    name: s.name,
    country: s.country || "",
    region: s.region || "",
    river: s.river || "",
    lead: s.lead || "",
    focus: Array.isArray(s.focus) ? s.focus : [],
    summary: s.summary || "",
    kpis: Array.isArray(s.kpis) ? s.kpis : [],
    ...(s.coord && typeof s.coord.x === "number" && typeof s.coord.y === "number"
      ? {mapCoord: {x: s.coord.x, y: s.coord.y}}
      : {}),
  });
}

for (const r of d.resources || []) {
  const codeKey = slugId(r.code || r.title || "item");
  rows.push({
    _id: `resource-${codeKey}`,
    _type: "resourceItem",
    code: r.code || "",
    title: r.title,
    resourceType: r.type || "",
    publishedLabel: r.date || "",
    sizeLabel: r.size || "",
    formatLabel: r.format || "",
  });
}

mkdirSync(outDir, {recursive: true});
writeFileSync(outFile, rows.map(line).join("\n") + "\n", "utf8");
console.error(`Wrote ${rows.length} documents to ${outFile}`);
