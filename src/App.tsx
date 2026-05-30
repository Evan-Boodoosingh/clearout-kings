import Nav from "./components/Nav/Nav"
import { siteConfig } from "./config/site.config"

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${siteConfig.theme.grassTexture})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <div style={{ height: "200vh" }} />
    </div>
  )
}

export default App