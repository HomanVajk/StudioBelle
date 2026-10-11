import { useState } from "react";
import Art from "./Art.jsx";
import { SERVICES, TEAM, GALLERY, WHY, SETTINGS } from "../data.js";

export function Head({ kicker, title, text, id }) {
  return (
    <div className="head">
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

export function Services() {
  return (
    <section id="szolgaltatasok" className="sec" aria-labelledby="h-svc">
      <div className="wrap">
        <Head id="h-svc" kicker="Szolgáltatások" title="Minden, ami a szépségedhez kell, egy helyen" text="A kínálat koncepció, a végleges lista a szalon valós szolgáltatásaihoz igazítható." />
        <div className="cards3">
          {SERVICES.map((s) => (
            <article className="card" key={s.id}>
              <Art id={s.id} kind={s.kind} alt={`${s.title} – szemléltető kép`} />
              <div className="card-body">
                <h3>{s.title}</h3>
                {s.optional && <span className="badge">Opcionális kategória – nem megerősített</span>}
                <ul className="ticks">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                <a className="btn sm ghost" href="#kapcsolat">Időpontot kérek</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section id="szakembereink" className="sec tint-sage" aria-labelledby="h-team">
      <div className="wrap">
        <Head id="h-team" kicker="Szakembereink" title="Ismerd meg, akire a hajad és a körmeid bízod" text="A profilok helyőrzők: a valódi nevek, fotók és bemutatkozások később kerülnek ide." />
        <div className="team">
          {TEAM.map((t) => (
            <article className="card person" key={t.id}>
              <Art id={t.id} kind={t.kind} alt={`${t.name} – helyőrző portré`} label="Helyőrző portré" />
              <div className="card-body">
                <h3>{t.name}</h3>
                <p className="role">{t.role}</p>
                <p>{t.text} <em>[helyőrző]</em></p>
                <a className="soc" href="#" onClick={(e) => e.preventDefault()}>Instagram [helyőrző]</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const CATS = [["all", "Összes"], ["haj", "Haj"], ["köröm", "Köröm"], ...(SETTINGS.cosmetics ? [["kozmetika", "Kozmetika"]] : [])];

export function Gallery() {
  const [f, setF] = useState("all");
  return (
    <section id="galeria" className="sec" aria-labelledby="h-gal">
      <div className="wrap">
        <Head id="h-gal" kicker="Galéria" title="Inspirációk a következő változáshoz" text="A képek inspirációs helyőrzők, nem a szalon munkái. Valódi fotókkal cserélhetők." />
        <div className="filters" role="group" aria-label="Galéria szűrése">
          {CATS.map(([k, l]) => <button key={k} type="button" aria-pressed={f === k} onClick={() => setF(k)}>{l}</button>)}
        </div>
        <div className="gallery">
          {GALLERY.filter((g) => f === "all" || g.cat === f).map((g) => (
            <Art key={g.id} id={g.id} kind={g.kind} alt={`Inspiráció: ${g.label}`} label={g.label} className={g.size} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ICON = ["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c1-5 4-7 8-7s7 2 8 7", "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM16.5 13a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z", "M3 20h18M6 20V10l6-5 6 5v10M10 20v-6h4v6", "M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7z"];

export function Why() {
  return (
    <section className="sec tint-blush" aria-labelledby="h-why">
      <div className="wrap">
        <Head id="h-why" kicker="Miért mi?" title="Időt szánunk rád, nem csak a hajadra" />
        <div className="why">
          {WHY.map((w, i) => (
            <div className="why-item" key={w.t}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d={ICON[i]} /></svg>
              <h3>{w.t}</h3>
              <p>{w.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
