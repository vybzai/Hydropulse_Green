// HydroPulse Alt — root app (router)

const { useEffect: useEffectR } = React;

function App() {
  const route = window.useHashRoute();

  // Determine header style — home has image hero (overlay mode)
  const overlay = route === "/" || route === "";

  let Page;
  switch (route) {
    case "/":
    case "": Page = window.PageHome; break;
    case "/about": Page = window.PageAbout; break;
    case "/themes": Page = window.PageThemes; break;
    case "/sites": Page = window.PageSites; break;
    case "/consortium": Page = window.PageConsortium; break;
    case "/news": Page = window.PageNews; break;
    case "/resources": Page = window.PageResources; break;
    case "/engage": Page = window.PageEngage; break;
    case "/contact": Page = window.PageContact; break;
    default: Page = window.PageNotFound;
  }

  return (
    <React.Fragment>
      <window.Header overlay={overlay}/>
      <main>
        <Page/>
      </main>
      <window.Footer/>
      <window.Tweaks/>
    </React.Fragment>
  );
}

window.initTweakDefaults();
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
