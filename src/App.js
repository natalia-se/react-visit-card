import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
