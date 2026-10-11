import { SETTINGS, CONTACT } from "../data.js";
const stop = (e) => e.preventDefault();
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot">
        <div><p className="logo">{SETTINGS.brand}</p><p className="small">Designkoncepció egy modern szépségszalon számára.</p></div>
        <ul aria-label="Oldaltérkép">
          {[["Szolgáltatások", "#szolgaltatasok"], ["Szakembereink", "#szakembereink"], ["Galéria", "#galeria"], ["Kapcsolat", "#kapcsolat"]].map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}
        </ul>
        <ul aria-label="Elérhetőségek">
          <li>{CONTACT.address}</li><li>{CONTACT.phone}</li>
          <li><a href="#" onClick={stop}>Instagram [helyőrző]</a></li><li><a href="#" onClick={stop}>Facebook [helyőrző]</a></li>
        </ul>
      </div>
      <div className="wrap legal">
        <span>© 2026 STÚDIÓ BELLE – designkoncepció. Minden jog fenntartva.</span>
        <span><a href="#" onClick={stop}>Adatkezelési tájékoztató [helyőrző]</a> · <a href="#" onClick={stop}>Impresszum [helyőrző]</a></span>
      </div>
    </footer>
  );
}
