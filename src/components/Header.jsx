import { useEffect, useState } from "react";
import { SETTINGS } from "../data.js";

const LINKS = [["Kezdőlap", "#kezdolap"], ["Szolgáltatások", "#szolgaltatasok"], ["Szakembereink", "#szakembereink"], ["Galéria", "#galeria"], ["Kapcsolat", "#kapcsolat"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);
  return (
    <header className="header">
      <div className="wrap bar">
        <a className="logo" href="#kezdolap" aria-label={`${SETTINGS.brand} – kezdőlap`}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21C6 17 4 11 6 5c6 1 10 5 6 16z" fill="currentColor"/></svg>
          {SETTINGS.brand}
        </a>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label={open ? "Menü bezárása" : "Menü megnyitása"} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="menu" className={open ? "open" : ""} aria-label="Főmenü">
          <ul>
            {LINKS.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)}>{l}</a></li>)}
            <li><a className="btn sm" href="#kapcsolat" onClick={() => setOpen(false)}>Időpontot foglalok</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
