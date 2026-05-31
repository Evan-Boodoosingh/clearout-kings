import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import { siteConfig } from "./config/site.config"

function App() {
  return (
    <div
          style={{
        backgroundImage: `url(${siteConfig.theme.grassTexture})`,
        // backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <Hero />
      <Services />
    </div>
  )
}

export default App