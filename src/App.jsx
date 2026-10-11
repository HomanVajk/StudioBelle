import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { Services, Team, Gallery, Why } from "./components/Sections.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#tartalom">Ugrás a tartalomhoz</a>
      <Header />
      <main id="tartalom">
        <Hero />
        <Services />
        <Team />
        <Gallery />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
