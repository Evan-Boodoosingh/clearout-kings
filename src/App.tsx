import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import About from "./components/About/About"
import TrustBar from "./components/TrustBar/TrustBar"
import Process from "./components/Process/Process"
import Gallery from "./components/Gallery/Gallery"
import Reviews from "./components/Reviews/Reviews"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
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
      <About/>
      <TrustBar/>
      <Process/>
      <Gallery/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App