// HydroPulse Alt — root app (router)
// IA matches build brief: Home, About, Themes, Sites (+ detail), Consortium, News (+ detail),
// Resources, Media kit, Engage, Contact.

const { useEffect: useEffectR } = React;

function App() {
  const route = window.useHashRoute();
  const trimmed = (route || "/").replace(/^\//, "");
  const segments = trimmed.split("/").filter(Boolean);

  // Determine header style — home has image hero (overlay mode)
  const overlay = route === "/" || route === "";

  let Page;
  let pageProps = {};

  if (segments[0] === "sites" && segments[1]) {
    Page = window.PageSiteDetail;
    pageProps = { siteId: segments[1] };
  } else if (segments[0] === "news" && segments[1]) {
    Page = window.PageNewsDetail;
    pageProps = { articleId: segments[1] };
  } else {
    const path = segments.length ? "/" + segments.join("/") : "/";
    switch (path) {
      case "/":
      case "": Page = window.PageHome; break;
      case "/about": Page = window.PageAbout; break;
      case "/themes": Page = window.PageThemes; break;
      case "/sites": Page = window.PageSites; break;
      case "/consortium": Page = window.PageConsortium; break;
      case "/news": Page = window.PageNews; break;
      case "/resources": Page = window.PageResources; break;
      case "/media": Page = window.PageMedia; break;
      case "/engage": Page = window.PageEngage; break;
      case "/contact": Page = window.PageContact; break;
      case "/legal": Page = window.PageLegal; break;
      default: Page = window.PageNotFound;
    }
  }

  return (
    <React.Fragment>
      <window.Header overlay={overlay}/>
      <main>
        <Page {...pageProps}/>
      </main>
      <window.Footer/>
      <window.Tweaks/>
    </React.Fragment>
  );
}

window.initTweakDefaults();
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
