import Art from "./Art.jsx";
import { CONTACT } from "../data.js";

export default function Hero() {
  return (
    <section id="kezdolap" className="hero" aria-labelledby="h-hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="kicker">Szépség. Stílus. Önbizalom.</p>
          <h1 id="h-hero">A szépség, ami igazán te vagy.</h1>
          <p className="lead">Fedezd fel a személyiségedhez illő stílust, és szánj időt magadra egy helyen, ahol a részletek is számítanak.</p>
          <div className="cta">
            <a className="btn" href="#kapcsolat">Időpontot foglalok</a>
            <a className="btn ghost" href="#szolgaltatasok">Fedezd fel szolgáltatásainkat</a>
          </div>
          <p className="demo-note">Designkoncepció: a név, a képek és az adatok helyőrzők, a valódi szalon adataival cserélhetők.</p>
        </div>
        <div className="collage">
          <Art id="hero" kind="salon" alt="Szalonbelső" className="c-main" label="Helyőrző: szalonbelső" />
          <Art id="heroHair" kind="hair" alt="Hajformázás" className="c-a" label="Helyőrző: haj" />
          <Art id="heroNails" kind="nails" alt="Manikűr" className="c-b" label="Helyőrző: köröm" />
        </div>
      </div>
      <div className="wrap quick" aria-label="Gyors elérhetőségek">
        <div><strong>Cím</strong><span>{CONTACT.address}</span></div>
        <div><strong>Telefon</strong><span>{CONTACT.phone}</span></div>
        <div><strong>Nyitvatartás</strong><span>{CONTACT.hours[0]}</span></div>
        <a className="btn sm" href="#kapcsolat">Kapcsolatfelvétel</a>
      </div>
    </section>
  );
}
