import { useState } from "react";
import { CONTACT, SERVICES } from "../data.js";
import { Head } from "./Sections.jsx";

const MAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TEL = /^\+?[\d\s()/-]{7,18}$/;

function check(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Kérjük, add meg a neved (legalább 2 karakter).";
  const c = v.contact.trim();
  if (!c) e.contact = "Kérjük, add meg az e-mail-címed vagy a telefonszámod.";
  else if (!(MAIL.test(c) || (TEL.test(c) && c.replace(/\D/g, "").length >= 7))) e.contact = "Az e-mail-cím vagy a telefonszám formátuma nem megfelelő.";
  if (!v.service) e.service = "Kérjük, válassz szolgáltatást.";
  return e;
}

export default function Contact() {
  const empty = { name: "", contact: "", service: "", message: "" };
  const [v, setV] = useState(empty);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState(null);
  const set = (k) => (e) => {
    const nv = { ...v, [k]: e.target.value };
    setV(nv);
    if (err[k]) setErr(check(nv));
  };
  const submit = (e) => {
    e.preventDefault();
    const er = check(v);
    setErr(er);
    if (Object.keys(er).length) {
      setStatus({ ok: false, text: "Az űrlap hibákat tartalmaz. Kérjük, javítsd a megjelölt mezőket." });
      document.getElementById("f-" + Object.keys(er)[0])?.focus();
      return;
    }
    // TODO: valós küldéshez cseréld ezt fetch() hívásra a választott végpontra vagy foglalási rendszerre.
    setStatus({ ok: true, text: "Köszönjük! Ez egy demóűrlap, ezért az üzeneted nem került elküldésre." });
    setV(empty);
  };
  const field = (k, label, input) => (
    <div>
      <label htmlFor={"f-" + k}>{label}</label>
      {input}
      <p className="err" id={"e-" + k}>{err[k]}</p>
    </div>
  );
  const a = (k) => ({ id: "f-" + k, value: v[k], onChange: set(k), "aria-invalid": !!err[k], "aria-describedby": "e-" + k });
  return (
    <section id="kapcsolat" className="sec" aria-labelledby="h-con">
      <div className="wrap contact">
        <div>
          <Head id="h-con" kicker="Kapcsolat" title="Foglalj időpontot, vagy írj nekünk" text="Add meg az elérhetőségedet és a kívánt szolgáltatást, és felvesszük veled a kapcsolatot." />
          <dl className="info card">
            <dt>Cím</dt><dd>{CONTACT.address}</dd>
            <dt>Telefon</dt><dd>{CONTACT.phone}</dd>
            <dt>Nyitvatartás</dt><dd>{CONTACT.hours.map((h) => <span key={h}>{h}<br /></span>)}</dd>
            <dt>Közösségi média</dt>
            <dd><a href={CONTACT.instagram} onClick={(e) => e.preventDefault()}>Instagram [helyőrző]</a> · <a href={CONTACT.facebook} onClick={(e) => e.preventDefault()}>Facebook [helyőrző]</a></dd>
          </dl>
        </div>
        <form className="card form" onSubmit={submit} noValidate aria-label="Időpontkérő demóűrlap">
          <p className="badge">Demóűrlap – az adatok nem kerülnek elküldésre</p>
          {field("name", "Név", <input {...a("name")} autoComplete="name" />)}
          {field("contact", "E-mail-cím vagy telefonszám", <input {...a("contact")} autoComplete="email" />)}
          {field("service", "Szolgáltatás", (
            <select {...a("service")}>
              <option value="">Válassz szolgáltatást</option>
              {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}
              <option>Még nem tudom, kérek tanácsot</option>
            </select>
          ))}
          <div><label htmlFor="f-message">Üzenet (nem kötelező)</label><textarea id="f-message" rows="4" maxLength="600" value={v.message} onChange={set("message")} /></div>
          <button className="btn" type="submit">Időpontot kérek</button>
          <div role="status" aria-live="polite">{status && <p className={"status " + (status.ok ? "ok" : "bad")}>{status.text}</p>}</div>
        </form>
      </div>
    </section>
  );
}
