# STÚDIÓ BELLE – szépségszalon weboldal (designkoncepció)

> **Fontos:** a „STÚDIÓ BELLE" név, a képek, az elérhetőségek, a szakemberek és a szövegek **helyőrzők**. A projekt egy bemutató (demó) célú frontend, nem egy működő üzleti weboldal. Nem tartalmaz valós cégadatot, árat, véleményt vagy foglalási rendszert.

## Tartalomjegyzék

1. [A projekt bemutatása](#1-a-projekt-bemutatása)
2. [A projekt felépítése](#2-a-projekt-felépítése)
3. [A weboldal működése, funkciónként](#3-a-weboldal-működése-funkciónként)
4. [A kapcsolatfelvételi űrlap működése](#4-a-kapcsolatfelvételi-űrlap-működése)
5. [Online időpontfoglalás](#5-online-időpontfoglalás)
6. [Backend és adatbázis](#6-backend-és-adatbázis)
7. [Helyi futtatás és fejlesztés](#7-helyi-futtatás-és-fejlesztés)
8. [Élesítés és tárhely](#8-élesítés-és-tárhely)
9. [Tartalom módosítása](#9-tartalom-módosítása)
10. [Biztonság, adatvédelem és éles használat](#10-biztonság-adatvédelem-és-éles-használat)
11. [Fejlesztési javaslatok](#11-fejlesztési-javaslatok)
12. [Gyors hibakeresés](#12-gyors-hibakeresés)

---

## 1. A projekt bemutatása

### Mire való, kinek készült?

Ez egy egyoldalas (angolul *single page*) weboldal egy modern magyar szépségszalon számára, ahol több szolgáltatás található egy helyen: fodrászat, körömstúdió és – opcionálisan – kozmetika. A célközönség a helyi vendég, aki szolgáltatást keres, megismerné a szakembereket, és időpontot szeretne kérni vagy kapcsolatba lépni a szalonnal.

Az oldal elsődleges célja, hogy a látogatót **kapcsolatfelvételre vagy időpontkérésre** ösztönözze. A projekt egyúttal referenciamunka: így mutatható meg egy leendő ügyfélnek, milyen lehet az elkészült weboldal.

### Használt technológiák

Csak az szerepel itt, ami ténylegesen a projektben van (lásd `package.json`):

| Technológia | Mire használjuk? |
|---|---|
| **React 18** (`react`, `react-dom`) | A felület **komponensekre** bontására. A komponens egy újrahasznosítható, önálló felületi építőelem (pl. a fejléc vagy egy kártya). |
| **Vite 5** (`vite`) | Fejlesztői szerver és build-eszköz. Fejlesztés közben azonnal frissíti a böngészőt, élesítéshez pedig összecsomagolja a kódot. |
| **@vitejs/plugin-react** | Vite-bővítmény, amely a React JSX-szintaxist (a HTML-szerű jelölést a JavaScriptben) értelmezi. |
| **Sima CSS** (`src/styles.css`) | Megjelenés. Nincs Tailwind CSS vagy más CSS-keretrendszer. |
| **JavaScript (JSX)** | A kód JavaScriptben íródott, **nem TypeScriptben**. |
| **Google Fonts** | A betűtípusok (Fraunces, Nunito Sans) az `index.html`-ben megadott külső hivatkozásról töltődnek be. |

Nincs útválasztó (router), állapotkezelő könyvtár, űrlapkönyvtár, UI-keretrendszer, tesztkeret vagy analitika. Nincs backend, adatbázis és hitelesítés sem.

### Demó és éles weboldal – a különbség

| | Jelenlegi demó | Teljes értékű éles weboldal |
|---|---|---|
| Adatok | Helyőrzők (`[Utca, házszám, település]` stb.) | A szalon valós, ellenőrzött adatai |
| Képek | Rajzolt, címkézett helyőrző ábrák | Valós, jogtiszta fotók, a megjelenített személyek hozzájárulásával |
| Kapcsolatfelvételi űrlap | Csak ellenőrzi a mezőket, **semmit nem küld el** | Valós szolgáltatásra vagy backendre köti, spamvédelemmel |
| Időpontfoglalás | Nincs; a gombok a kapcsolat szakaszhoz görgetnek | Foglalási rendszer (külső vagy saját) |
| Adatvédelem | Nincs adatkezelési tájékoztató | Elkészített tájékoztató, jogi oldalak |
| Árak | Nincsenek megjelenítve | Valós árak vagy tájékoztató árak |

---

## 2. A projekt felépítése

```text
studio-belle/
├── index.html               ← a belépési HTML-oldal (cím, leírás, betűtípusok)
├── package.json             ← függőségek és parancsok (npm scripts)
├── package-lock.json        ← a telepített verziók pontos listája (automatikus)
├── vite.config.js           ← a Vite beállítása (csak a React-bővítmény)
├── .gitignore               ← mit ne töltsön fel a Git (node_modules, dist)
├── README.md                ← ez a dokumentum
└── src/
    ├── main.jsx             ← a React „indítópontja", betölti a stílusokat
    ├── App.jsx              ← az oldal váza: a szakaszok sorrendje
    ├── data.js              ← A TARTALOM: nevek, elérhetőségek, szolgáltatások, csapat, galéria, képek
    ├── styles.css           ← az összes stílus és a színek/betűk változói
    └── components/
        ├── Art.jsx          ← képmegjelenítő: valódi fotó vagy rajzolt helyőrző
        ├── Header.jsx       ← fejléc, navigáció, mobilmenü
        ├── Hero.jsx         ← nyitó szakasz és gyors elérhetőségsáv
        ├── Sections.jsx     ← Szolgáltatások, Szakembereink, Galéria, Miért mi? szakaszok
        ├── Contact.jsx      ← elérhetőségek és a demóűrlap
        └── Footer.jsx       ← lábléc
```

Hol található mi?

- **Tartalom (szövegek, adatok):** főleg a `src/data.js`-ben. A szakaszok címei és bevezető szövegei viszont közvetlenül a komponensfájlokban vannak (pl. `Sections.jsx`, `Hero.jsx`).
- **Képek:** jelenleg nincs képfájl a projektben. A helyőrző ábrákat az `Art.jsx` rajzolja SVG-vel. A valódi képek helyét a `data.js` `IMAGES` objektuma szabályozza.
- **Stílusok:** `src/styles.css` (színek és betűk a fájl tetején, a `:root` részben).
- **Újrahasznosítható komponensek:** `src/components/`. Az `Art` (kép) és a `Head` (szakaszfejléc, a `Sections.jsx`-ben) több helyen is használatos.
- **Konfiguráció:** `package.json` (parancsok, függőségek), `vite.config.js` (build-beállítás), és a `data.js` `SETTINGS` objektuma (márkanév, kozmetika be/ki).

A `node_modules/` (telepített csomagok) és a `dist/` (build eredménye) mappa a `npm install`, illetve `npm run build` után jön létre. Ezeket nem kell kézzel szerkeszteni, és a `.gitignore` miatt a Git sem követi őket.

---

## 3. A weboldal működése, funkciónként

Állapotjelölések: **Működő** = valóban működik a böngészőben; **Demó** = látványelem vagy szimuláció; **Helyőrző** = később cserélendő tartalom.

### 3.1 Navigáció és mobilmenü

- **Működés:** a fejléc ragadós (`position: sticky`), vagyis görgetéskor is látszik. A menüpontok (Kezdőlap, Szolgáltatások, Szakembereink, Galéria, Kapcsolat) horgonylinkek (`#szolgaltatasok` stb.), amelyek az azonos azonosítójú szakaszhoz görgetnek. A görgetés sima (`scroll-behavior: smooth`), és a `scroll-padding-top` biztosítja, hogy a fejléc ne takarja el a szakasz tetejét. Keskeny képernyőn (900 px alatt) a menü helyett hamburger gomb jelenik meg. Ez egy React állapotváltozót (`open`) kapcsol; a gomb `aria-expanded` attribútuma jelzi a képernyőolvasónak, hogy nyitva van-e a menü. A menü bezárul linkre kattintva és az `Esc` billentyűre.
- **Felelős fájl:** `src/components/Header.jsx`, stílusok: `styles.css` (`.header`, `nav`, `.burger`). A szakaszok azonosítói a megfelelő komponensekben vannak.
- **Állapot:** Működő.
- **Éleshez:** a márkanevet és a logót cserélni kell. Opcionálisan érdemes lehet az éppen aktív menüpont kiemelése és a mobilmenü fókuszkezelésének (a fókusz a menün belül marad) finomítása.

### 3.2 Hero szakasz és hívásfelhívó gombok

- **Működés:** a nyitó szakasz a címsort (`h1`), a bevezető szöveget és két gombot tartalmaz: „Időpontot foglalok" (a `#kapcsolat` szakaszra görget) és „Fedezd fel szolgáltatásainkat" (a `#szolgaltatasok` szakaszra). Mellette háromképes kollázs látható (`Art` komponensek), alatta egy sáv a címmel, telefonszámmal és a nyitvatartás első sorával, amelyek a `data.js` `CONTACT` objektumából jönnek.
- **Felelős fájl:** `src/components/Hero.jsx`.
- **Állapot:** a gombok és a sáv Működő, de a megjelenített adatok és képek Helyőrzők. A „Designkoncepció…" megjegyzés a `Hero.jsx`-ben közvetlenül szerepel a szövegben.
- **Éleshez:** valós fotók és adatok, a demómegjegyzés eltávolítása. Érdemes megfontolni egy kattintható telefonszámot (`<a href="tel:...">`), de ez jelenleg nincs megvalósítva.

### 3.3 Szolgáltatások és árak

- **Működés:** a `data.js` `SERVICES` listájából minden elemhez egy kártya készül (kép, cím, felsorolás, gomb). A „Kozmetika" kártya „Opcionális kategória – nem megerősített" jelzést kap, mert a szakember megléte nem biztos. A kártyák gombja a kapcsolat szakaszra görget.
- **Felelős fájl:** `Sections.jsx` (`Services` komponens) és `data.js` (`SERVICES`).
- **Állapot:** a kártyák Működők, a tartalom Helyőrző. **Árak nincsenek megvalósítva**: a projekt jelenleg semmilyen árat nem jelenít meg, és a gombok sem választják elő az űrlap szolgáltatás-mezőjét.
- **Éleshez:** az árakat a szalontól kell elkérni. Egy lehetséges megoldás (a jelenlegi kód módosítását igényli): a `data.js`-ben a szolgáltatás-tételeket szövegek helyett objektumokra cserélni, és a `Services` komponensben kiírni az árat:

```js
// data.js (javaslat, még NEM része a projektnek)
items: [{ name: "Géllakk", price: "[ár helyőrző]" }]
```

```jsx
// Sections.jsx, a <ul className="ticks"> belsejében (javaslat)
{s.items.map((i) => <li key={i.name}>{i.name} <span>{i.price}</span></li>)}
```

### 3.4 Szakemberek profiljai

- **Működés:** a `TEAM` lista alapján kártyák jelennek meg portrékép-helyőrzővel, névvel, szereppel, rövid szöveggel és egy Instagram-link-helyőrzővel. A szövegek után szerepel az `[helyőrző]` jelölés.
- **Felelős fájl:** `Sections.jsx` (`Team` komponens), `data.js` (`TEAM`).
- **Állapot:** Helyőrző. Az „Instagram [helyőrző]" link `href="#"` értékű, és kattintásra nem csinál semmit (`preventDefault`), valamint nem a `CONTACT.instagram` értékből jön.
- **Éleshez:** valós nevek, fotók (az érintettek hozzájárulásával) és bemutatkozások. Ha valódi profilhivatkozásokat használsz, a linket személyenként a `TEAM` adataiba kell vezetni, és a `preventDefault`-ot el kell távolítani.

### 3.5 Képgaléria és kategóriaszűrők

- **Működés:** a `GALLERY` lista elemei rácsban jelennek meg. A szűrőgombok (Összes, Haj, Köröm, Kozmetika) egy React állapotot (`f`) állítanak, és a lista a kiválasztott kategória szerint szűrődik. Az aktív gomb `aria-pressed="true"` jelölést kap. Egyes képek `tall` mérettel magasabbak a rácsban. Ha a `SETTINGS.cosmetics` értéke `false`, a Kozmetika szűrő és a kozmetikai elemek eltűnnek.
- **Felelős fájl:** `Sections.jsx` (`Gallery`), adatok: `data.js` (`GALLERY`), képmegjelenítés: `Art.jsx`.
- **Állapot:** a szűrés Működő; a képek Helyőrzők. A galéria képei nem a szalon munkái, hanem rajzolt illusztrációk, ezt a szakasz szövege is jelzi.
- **Éleshez:** valódi, a vendég hozzájárulásával készült fotók, jó méretezés és tömörítés. Egy nagyobb nézet (lightbox) jelenleg nincs megvalósítva.

### 3.6 Elérhetőségek és kapcsolatfelvételi űrlap

- **Működés:** a cím, telefonszám, nyitvatartás és közösségimédia-linkek a `CONTACT` objektumból jelennek meg. Mellettük az űrlap található (részletesen: [4. szakasz](#4-a-kapcsolatfelvételi-űrlap-működése)).
- **Felelős fájl:** `Contact.jsx`, adatok: `data.js` (`CONTACT`).
- **Állapot:** az adatok Helyőrzők; az űrlap Demó (nem küld semmit). A közösségimédia-linkek jelenleg a `preventDefault` miatt nem navigálnak sehova még akkor sem, ha a `CONTACT.instagram` értékét átírod.
- **Éleshez:** valós adatok, és a `Contact.jsx`-ben az `onClick={(e) => e.preventDefault()}` rész törlése a linkekről.

### 3.7 Időpontfoglaló gombok és kapcsolati linkek

- **Működés:** a „Időpontot foglalok" és „Időpontot kérek" gombok sima linkek a `#kapcsolat` szakaszra. Nincs foglalási naptár, időpontlista vagy visszaigazolás.
- **Felelős fájl:** `Header.jsx`, `Hero.jsx`, `Sections.jsx`.
- **Állapot:** a görgetés Működő; a foglalás maga **nincs megvalósítva**.
- **Éleshez:** lásd [5. szakasz](#5-online-időpontfoglalás).

### 3.8 Lábléc és közösségi média

- **Működés:** a lábléc a márkanevet, az oldaltérképet (horgonylinkek), a `CONTACT` címét és telefonszámát, közösségi média- és jogi helyőrző linkeket, valamint másolati jogi sort tartalmaz.
- **Felelős fájl:** `Footer.jsx`.
- **Állapot:** az oldaltérkép Működő; az Instagram, Facebook, Adatkezelési tájékoztató és Impresszum linkek Helyőrzők (`href="#"`, nem navigálnak). A közösségi linkek nem a `CONTACT` objektumból jönnek, hanem közvetlenül a fájlban vannak megadva. A „© 2026 STÚDIÓ BELLE" sor is kézzel írt szöveg.
- **Éleshez:** valós linkek, kész adatkezelési tájékoztató és jogi oldalak, a másolati jogi sor átírása.

### 3.9 Reszponzív viselkedés

- **Működés:** az oldal telefonra, tabletre és asztali gépre is igazodik CSS **média-lekérdezésekkel** (`@media`), amelyek a képernyő szélessége szerint módosítják az elrendezést. A `styles.css`-ben használt töréspontok:
  - **900 px alatt:** hamburger menü, a hero egy oszlopos, a gyors elérhetőségsáv egymás alá kerül;
  - **1000 px alatt:** a csapat és az előnyök két oszlopba, a galéria három oszlopba rendeződik;
  - **820 px alatt:** a szolgáltatáskártyák és a kapcsolat szakasz egy oszlopos, a galéria két oszlopos;
  - **520 px alatt:** a csapat és az előnyök egy oszlopban jelennek meg.
- A `prefers-reduced-motion` beállítás tiszteletben tartása: ha a felhasználó csökkentett mozgást kért az operációs rendszerében, az átmenetek és a sima görgetés kikapcsolnak.
- **Felelős fájl:** `src/styles.css`.
- **Állapot:** a reszponzív szabályok megvannak a kódban, de **valós eszközökön és böngészőkben tesztelni kell őket** (lásd 10. szakasz).
- **Éleshez:** tesztelés különböző készülékeken, szükség esetén a töréspontok finomhangolása.

---

## 4. A kapcsolatfelvételi űrlap működése

### Mi történik most, a demóban?

A `Contact.jsx` egy React-űrlap, amelynek mezői: **Név**, **E-mail-cím vagy telefonszám**, **Szolgáltatás** (legördülő lista), **Üzenet** (nem kötelező, legfeljebb 600 karakter).

1. A látogató kitölti az űrlapot, és a gombra kattint.
2. A kód megakadályozza az oldal újratöltését (`e.preventDefault()`). A böngésző saját ellenőrzése ki van kapcsolva (`noValidate`), helyette a saját ellenőrzés fut.
3. A `check` függvény ellenőrzi a mezőket:
   - a név legalább 2 karakter;
   - az elérhetőség kötelező, és vagy érvényes e-mail-cím formátumú, vagy telefonszámra hasonlít (legalább 7 számjegy);
   - a szolgáltatás kiválasztása kötelező.
4. **Hiba esetén** a hibás mezők alatt magyar hibaüzenet jelenik meg, az űrlap alján megjelenő állapotüzenet jelzi, hogy javítani kell, és a fókusz az első hibás mezőre ugrik. A hibaüzenetek az `aria-describedby` révén a képernyőolvasóhoz is kapcsolódnak.
5. **Siker esetén** zöld üzenet jelenik meg („Ez egy demóűrlap, ezért az üzeneted nem került elküldésre."), és az űrlap kiürül.

### Elküldődik vagy tárolódik valahol az adat?

**Nem.** A kódban nincs hálózati hívás (`fetch`), mentés a böngészőben (`localStorage`) vagy bármilyen más tárolás. Az adat csak a böngésző memóriájában él az űrlap kitöltése alatt, és a sikeres „küldés" után törlődik. Az űrlap tetején a „Demóűrlap – az adatok nem kerülnek elküldésre" felirat ezt egyértelműen jelzi a látogatónak is.

Egy apró egyszerűsítés a jelenlegi működésben: ha egy mezőn hiba volt, és a látogató gépelni kezd, az ellenőrzés az **összes** mezőre lefut, így ilyenkor más, még üres kötelező mezők hibája is megjelenhet.

### Hogyan lehet valódi küldéssé alakítani?

A `Contact.jsx` `submit` függvényében van egy `TODO` megjegyzés, ez a bekötés helye. Két fő irány létezik:

**A) Külső űrlapszolgáltatás** (a legegyszerűbb, nem kell saját backend). Ilyen például a Formspree, a Netlify Forms vagy a Web3Forms. Ezek kapnak egy végpontot (URL-t), és a beküldött üzenetet e-mailben továbbítják a szalonnak. A pontos beállítást és az aktuális feltételeket mindig a szolgáltató dokumentációjából kell megnézni.

**B) Saját backend API.** Egy általad fejlesztett szerveroldali végpont fogadja az adatot, ellenőrzi, tárolja és/vagy e-mailt küld róla.

Mindkét esetben a küldés kódja nagyjából így néz ki (a végpont **csak helyőrző**, nem létező cím):

```js
// A submit függvényben, a validáció után (példa, még NEM része a projektnek)
try {
  const res = await fetch("https://IDE-JON-A-VALOS-VEGPONT", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(v), // az űrlap adatai
  });
  if (!res.ok) throw new Error("Hiba a küldéskor");
  setStatus({ ok: true, text: "Köszönjük, megkaptuk az üzeneted!" });
  setV(empty);
} catch {
  setStatus({ ok: false, text: "A küldés nem sikerült. Kérjük, próbáld újra, vagy hívj minket." });
}
```

Ehhez a `submit` függvényt `async`-ra kell cserélni, és a demófeliratot és a demós sikerüzenetet is át kell írni.

### Éles környezetben szükséges elemek

- **Szerveroldali validáció is.** A böngészőben futó ellenőrzés csak a felhasználói élményt segíti; a rosszindulatú kérést megkerüli. A szervernek mindent újra ellenőriznie kell.
- **Világos siker- és hibaüzenetek:** a látogató tudja meg, hogy az üzenet elment-e, vagy mit tegyen, ha nem (pl. telefonos elérhetőség megadása).
- **Spamvédelem:** rejtett csapdamező (*honeypot*, amelyet csak robotok töltenek ki), CAPTCHA-szolgáltatás (pl. hCaptcha, Cloudflare Turnstile vagy reCAPTCHA), a kérések számának korlátozása (*rate limiting*).
- **Adatvédelmi tájékoztatás** az űrlap mellett, szükség esetén hozzájárulási jelölőnégyzettel (lásd 10. szakasz).
- **Titkok kezelése:** ne tegyél API-kulcsot a frontend kódba (lásd 6. szakasz).

---

## 5. Online időpontfoglalás

### Jelenleg

**Nincs valódi foglalás.** Minden foglalási gomb a kapcsolat szakaszhoz görget, ahol a látogató az (egyelőre demó) űrlapot találja, a szalon adatai pedig helyőrzők. A rendszer nem tud szabad időpontokat mutatni, foglalást rögzíteni vagy visszaigazolást küldeni.

### 1. lehetőség: meglévő foglalási szolgáltatás beépítése

Számos kész időpontfoglaló szolgáltatás létezik (pl. szépségszalonoknak szánt platformok, vagy általános naptárfoglaló eszközök, mint a Calendly). A beépítés jellemzően két módon történik: a gombok egy külső foglalási oldalra mutatnak, vagy a szolgáltató által adott beágyazható kódot (*embed*) tesszük az oldalra.

- **Előnyök:** gyors; nem kell saját backend; a szolgáltató kezeli a naptárat, az értesítéseket és gyakran a fizetést.
- **Hátrányok:** havi költség lehet, a megjelenés kevésbé szabható, a vendég adatai a szolgáltatónál is tárolódnak (adatkezelési következményekkel).
- **Teendő a kódban:** a foglalási gombok `href` értékét a külső foglalási link kapja (pl. egy új `CONTACT.bookingUrl` mező a `data.js`-ben, amelyet a `Header.jsx`, `Hero.jsx` és `Sections.jsx` használ). A szolgáltatók aktuális funkcióit és díjait az adott szolgáltató oldalán kell ellenőrizni.

### 2. lehetőség: saját foglalási rendszer backenddel és adatbázissal

Ez jóval nagyobb fejlesztés. Szükséges elemek:

| Funkció | Mit jelent? | Backend kell? |
|---|---|---|
| Szolgáltatások és időtartamok | Pl. a hajvágás 45 perc, a géllakk 60 perc | Igen (adatbázisban tárolva) |
| Szakemberek és munkaidők | Ki mikor dolgozik, szabadság, szünet | Igen |
| Szabad időpontok kiszámítása | Munkaidő mínusz a már foglalt idősávok, a szolgáltatás hosszával | Igen |
| Foglalás rögzítése | A vendég adatai, szolgáltatás, szakember, időpont mentése | Igen |
| Dupla foglalás megelőzése | Két vendég ne foglalhassa ugyanazt az idősávot | Igen, kötelezően szerveroldalon |
| Visszaigazolás | E-mail vagy SMS a vendégnek és a szalonnak | Igen (e-mail/SMS szolgáltatóval) |
| Lemondás és módosítás | Biztonságos, egyedi hivatkozással vagy bejelentkezéssel | Igen |
| Emlékeztető | Automatikus üzenet a foglalás előtt | Igen (időzített feladat) |
| Foglalási felület (naptár, idősáv-választó) | Amit a vendég lát | Nem, ez React-komponens, de a backendből kapja az adatot |
| Adminisztrációs felület | A szalon megtekinti és kezeli a foglalásokat | Igen (hitelesítéssel) |

A **dupla foglalás megelőzése** a legfontosabb szempont: nem elég a böngészőben letiltani a már foglalt idősávot, mert két vendég egyszerre is megpróbálhatja. A szervernek foglalás mentésekor, tranzakcióban kell ellenőriznie az ütközést (például adatbázis-szintű egyediségi vagy ütközésmegelőző szabállyal). Ügyelni kell a magyarországi időzónára és a nyári/téli időszámításra is.

---

## 6. Backend és adatbázis

### Miért nincs szüksége a jelenlegi demónak backendre?

A jelenlegi oldal csak statikus fájlokból áll (HTML, CSS, JavaScript). Minden tartalom a kódban van, és a böngészőben futó React jeleníti meg. Semmilyen adat nem érkezik szerverről, és nem is megy oda. Ezért bármely statikus tárhelyen futhat.

### Mely jövőbeli funkciókhoz kell backend?

- az űrlapadatok saját rendszerbe mentése vagy feldolgozása (külső űrlapszolgáltatással ez megúszható);
- saját foglalási rendszer;
- vendégfiókok, bejelentkezés;
- adminisztrációs felület a szalonnak;
- e-mail- és SMS-küldés titkos kulccsal;
- fizetés bármilyen formában.

### Egy lehetséges jövőbeli architektúra (nem létező megvalósítás!)

```text
Böngésző (React + Vite frontend)
        │  HTTPS kérések
        ▼
Backend API (pl. Node.js szerver vagy serverless függvények)
   ├── Adatbázis (pl. PostgreSQL)
   ├── E-mail / SMS szolgáltató (értesítések)
   └── Admin felület (hitelesítéssel védve)
```

Ez csak egy példa a lehetséges irányra. A technológiák más eszközökre is cserélhetők.

### Mit tárolhatna egy adatbázis, és miért?

- **Szolgáltatások:** név, időtartam, ár, aktív-e.
- **Szakemberek:** név, melyik szolgáltatásokat végzi.
- **Munkaidők és szabadságok:** a szabad idősávok kiszámításához.
- **Foglalások:** melyik vendég, szakember, szolgáltatás, mikor; állapot (visszaigazolt, lemondott).
- **Vendégek:** név, elérhetőség. **Csak a szükséges adat**, a szükséges ideig.
- **Hozzájárulások naplója:** ki, mikor, mihez járult hozzá (adatvédelmi okból).

### Miért tilos titkokat a frontend kódba tenni?

A frontend kódot a böngésző **letölti a látogatóhoz**, így bárki kiolvashatja (fejlesztői eszközökkel). Ami a frontend kódban van, az nyilvános. Ez érvényes a `.env` fájlokra is: a Vite a `VITE_` előtagú környezeti változókat **beleírja a letöltött kódba**, tehát azok sem titkosak. Az alábbiak soha ne kerüljenek a frontendbe:

- adatbázis-jelszavak,
- e-mail- vagy SMS-szolgáltató titkos kulcsa,
- fizetési szolgáltató titkos kulcsa,
- bármilyen „secret" vagy „private key".

Ezeket csak a backend (vagy a tárhely szolgáltatójának titkos környezeti változói) kezeljék. A frontend csak a backend nyilvános végpontját hívja.

---

## 7. Helyi futtatás és fejlesztés

### Előfeltételek

- **Node.js** (a Vite 5-höz 18-as vagy újabb verzió szükséges; az LTS verzió ajánlott), ez tartalmazza az `npm` csomagkezelőt is. Ellenőrzés:

```bash
node -v
npm -v
```

### Parancsok

```bash
cd studio-belle
npm install
```
Letölti a `package.json`-ban felsorolt függőségeket a `node_modules/` mappába. Várható eredmény: a végén egy összefoglaló jelenik meg; esetleg figyelmeztetések (*warnings*), ami általában nem hiba.

```bash
npm run dev
```
Elindítja a fejlesztői szervert. A terminálban egy cím jelenik meg, alapesetben `http://localhost:5173/`. Ezt nyisd meg a böngészőben. Fájlmentéskor az oldal magától frissül. Leállítás: `Ctrl + C`.

```bash
npm run build
```
Elkészíti az éles, optimalizált változatot a `dist/` mappába (összecsomagolt, kisebb méretű HTML, CSS és JS). Várható eredmény: a terminálban a létrehozott fájlok listája és a „built in …" üzenet.

```bash
npm run preview
```
A már elkészült `dist/` mappát szolgálja ki helyben (alapesetben `http://localhost:4173/`), így az éles változatot próbálhatod ki telepítés előtt. Előtte futtatni kell a `npm run build`-et.

---

## 8. Élesítés és tárhely

A jelenlegi oldal statikus, így bármely statikus tárhely használható. A Vite-beállítás alapján (`vite.config.js`, csak a React-bővítmény, egyedi `base` nélkül):

- **Build parancs:** `npm run build`
- **Kimeneti mappa (output directory):** `dist`

### Vercel

1. Töltsd fel a projektet egy Git-tárhelyre (pl. GitHub). A `node_modules` és a `dist` ne kerüljön fel; ezt a `.gitignore` kezeli.
2. A Vercelben válaszd az „Add New → Project" lehetőséget, és importáld a tárhelyet.
3. A felismert keretrendszer **Vite** legyen; a build parancs `npm run build`, a kimeneti mappa `dist`.
4. A „Deploy" gombra kattintva az oldal elérhetővé válik egy Vercel által adott címen.

### Netlify

1. Importáld a Git-tárhelyet („Add new site → Import an existing project").
2. Build parancs: `npm run build`; publikálási mappa (publish directory): `dist`.
3. A „Deploy" után az oldal egy Netlify által adott címen érhető el. Alternatíva: a `npm run build` után a `dist` mappa a Netlify felületére húzható.

A pontos menüpontok a szolgáltatók felületén változhatnak, ezért érdemes az aktuális dokumentációt is követni.

### Egyedi domain későbbi bekötése

1. Szerezz be domaint egy regisztrátortól.
2. A Vercel/Netlify projektbeállításaiban add hozzá a domaint.
3. A szolgáltató megmutatja, milyen **DNS-rekordokat** (pl. A vagy CNAME) kell felvenned a domain regisztrátornál. Ezeket kell pontosan így beállítani.
4. A DNS-változás órákig is eltarthat; ezután a szolgáltatók általában automatikusan HTTPS-tanúsítványt is biztosítanak.

Ha az oldalt nem a domain gyökerében, hanem almappában akarod kiszolgálni, a `vite.config.js`-ben be kell állítani a `base` értéket. Ez a jelenlegi konfigurációban nincs beállítva.

### Mit ad és mit nem ad a telepítés?

A telepítés **csak** az oldal elérhetővé tételét jelenti az interneten. **Nem hoz létre** backendet, adatbázist, működő űrlapküldést vagy foglalási rendszert. Ezeket külön kell megvalósítani vagy beépíteni (4–6. szakasz).

---

## 9. Tartalom módosítása

| Mit akarsz módosítani? | Hol? |
|---|---|
| Szalon neve (fejléc, lábléc logója) | `src/data.js` → `SETTINGS.brand` |
| A név a lábléc másolati sorában | `src/components/Footer.jsx` (kézzel írt szöveg) |
| Oldal címe a böngészőfülön, leírás | `index.html` (`<title>`, `<meta name="description">`) |
| Cím, telefonszám, nyitvatartás | `src/data.js` → `CONTACT` (`address`, `phone`, `hours`) |
| Közösségimédia-linkek | `data.js` → `CONTACT.instagram`, `CONTACT.facebook`; **de** a `Contact.jsx`, `Footer.jsx` és `Sections.jsx` linkjeiben a `preventDefault` és a fix `href="#"` miatt kézi átalakítás is kell |
| Szolgáltatások | `src/data.js` → `SERVICES` |
| Árak | Nincs megvalósítva; lásd a 3.3 szakasz javaslatát |
| Csapattagok neve és leírása | `src/data.js` → `TEAM` |
| Galéria elemei és kategóriái | `src/data.js` → `GALLERY` |
| Kozmetika kategória eltávolítása | `src/data.js` → `SETTINGS.cosmetics = false` |
| Szakaszcímek és bevezetők | A komponensfájlokban (`Hero.jsx`, `Sections.jsx`, `Contact.jsx`) |
| „Miért mi?" szöveg | `src/data.js` → `WHY` |
| Színek | `src/styles.css` → `:root` változók (`--ivory`, `--blush`, `--sage`, `--beige`, `--ink` stb.) |
| Betűtípusok | `index.html` (Google Fonts hivatkozás) és `styles.css` (`--serif`, `--sans`) |

### Képek cseréje

A `data.js` `IMAGES` objektumában (jelenleg üres) a kulcsok: `hero`, `heroHair`, `heroNails`, `svcHair`, `svcNails`, `svcSkin`, `team1`–`team4`, `g1`–`g8`. Példa:

```js
export const IMAGES = {
  hero: "/img/szalon.jpg",
  g1: "/img/haj-1.jpg",
};
```

Az `/img/...` útvonalhoz hozz létre egy `public/img/` mappát a projekt gyökerében (jelenleg nincs ilyen), és tedd bele a képeket. Egy kulcs megadása esetén az `Art` komponens a helyőrző ábra helyett a valódi képet jeleníti meg. **Minden képhez adj értelmes `alt` szöveget**: ezt jelenleg a komponensek generálják (pl. „Inspiráció: …"), amit a valódi képekhez érdemes pontosítani. Új képkulcsot a `Hero.jsx`, `SERVICES`, `TEAM` vagy `GALLERY` `id` mezőjével kell párosítani.

### Új galéria-elem hozzáadása

Adj egy új objektumot a `GALLERY` listához egyedi `id`-val, és vedd fel a kulcsot az `IMAGES`-be:

```js
{ id: "g9", cat: "haj", kind: "hair", label: "Új frizura", size: "" }
```

A `cat` értéke `haj`, `köröm` vagy `kozmetika` lehet (kisbetűvel, pontosan így). A `kind` a helyőrző rajz típusát adja (`hair`, `nails`, `skin`).

Megjegyzés: a „Miért mi?" szakasz ikonjai a `Sections.jsx`-ben, az elemek sorrendje alapján vannak megadva (4 ikon). Ha a `WHY` listába ötödik elemet veszel fel, ahhoz is ikont kell hozzáadni.

---

## 10. Biztonság, adatvédelem és éles használat

> **Ez a szakasz általános tájékoztatás, nem jogi tanács.** A konkrét teendőkről érdemes jogász vagy adatvédelmi szakember véleményét kérni, illetve a Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH) tájékoztatóit megnézni.

- **Adatkezelési tájékoztató:** ha bármilyen személyes adatot gyűjtesz (űrlap, foglalás, analitika), szükség van érthető tájékoztatóra arról, milyen adatot, miért, meddig és kinek a kezelésében tárolsz.
- **Az űrlapadatok biztonságos kezelése:** HTTPS használata, szerveroldali ellenőrzés, csak a szükséges adat bekérése, hozzáférés korlátozása, a titkok kizárólag a szerveren.
- **GDPR-szempontok:** adattakarékosság (csak a szükséges adat), jogalap, megőrzési idő, az érintettek jogai (tájékoztatás, hozzáférés, törlés), adatfeldolgozók (pl. űrlap- vagy foglalási szolgáltató) megfelelő kezelése. Ha analitikát vagy sütiket használsz, ahhoz hozzájárulás kezelése is kellhet.
- **Google Fonts:** a betűtípusok jelenleg külső (Google) szerverről töltődnek, ami azt jelenti, hogy a látogató böngészője kapcsolatba lép a szolgáltatóval. Érdemes megfontolni a betűtípusok saját tárhelyről való kiszolgálását, és ezt adatvédelmi szempontból jogásszal egyeztetni.
- **Képjogok és hozzájárulás:** csak olyan képet használj, amelyre a felhasználási jogod megvan (saját fotó, licencelt vagy megfelelően jogtiszta kép). Az emberekről készült fotókhoz (vendég vagy dolgozó) az érintettek hozzájárulása kell. A stockképeket ne tüntesd fel a szalon saját munkájaként.
- **Elérhetőség, mobil- és böngészőteszt:** a kód tartalmaz akadálymentességi elemeket (ugrás a tartalomhoz link, látható fókuszjelzés, címkézett űrlapmezők, `aria-` attribútumok, csökkentett mozgás támogatása), de ezek **valós ellenőrzését** (billentyűzetes használat, képernyőolvasó, kontraszt, valódi telefonok és több böngésző) el kell végezni éles használat előtt.
- **Hamis vélemények és kitalált adatok:** ne tegyél ki kitalált értékelést, díjat, statisztikát, képesítést vagy üzleti adatot. A jelenlegi demó ezeket szándékosan nem tartalmazza.
- **Félrevezető működés elkerülése:** csak azt ígérd az oldalon, ami ténylegesen működik. Amíg az űrlap és a foglalás nincs bekötve, ne állítsd róluk, hogy működnek, vagy tüntesd fel egyértelműen a demó jelleget.
- **Jogi adatok:** a magyar szabályok előírhatnak szolgáltatói adatokat az oldalon (pl. impresszum jellegű tájékoztatás). Ezek tartalmát az éles üzemeltető adataival és jogi ellenőrzéssel kell megadni; a projekt jelenleg csak helyőrző feliratot tartalmaz.

---

## 11. Fejlesztési javaslatok

### Elsődleges teendők indulás előtt (**kötelező**)

1. Valós adatok megadása (`data.js`), a márkanév és a szövegek véglegesítése.
2. Valós, jogtiszta fotók beszerzése és beillesztése, a hozzájárulások beszerzése.
3. A demófeliratok és az `[helyőrző]` jelölések eltávolítása.
4. Adatkezelési tájékoztató és a szükséges jogi oldalak elkészítése és bekötése a láblécbe.
5. A közösségi és minden helyőrző link valódi címre cserélése (és a `preventDefault` eltávolítása).
6. **Működő kapcsolatfelvételi mód**: legalább kattintható telefonszám (`tel:`) és e-mail-cím, vagy működő űrlap.
7. Kulcsszavas oldalcím és leírás az `index.html`-ben; favicon hozzáadása (a projektben jelenleg nincs).
8. Mobil-, böngésző- és akadálymentességi tesztelés.

### Opcionális: űrlap bekötése

Külső űrlapszolgáltatás vagy saját API, spamvédelemmel (4. szakasz).

### Opcionális: online időpontfoglalás

Először egy meglévő foglalási szolgáltatás beépítése (gyorsabb, olcsóbb indulás); saját rendszer csak akkor, ha egyedi igények indokolják (5. szakasz).

### Opcionális: backend és adatbázis

Csak akkor érdemes, ha a szalonnak szüksége van saját foglalási logikára, vendégkezelésre vagy admin felületre (6. szakasz).

### Analitika és SEO

- Oldalcím, leírás, Open Graph-adatok (közösségi megosztáshoz), favicon.
- Helyi vállalkozásként Google Cégprofil használata és az adatok egységessége.
- Strukturált adat (`LocalBusiness` típusú JSON-LD) valós adatokkal.
- Képek tömörítése, megfelelő méretezése, `alt` szövegek.
- Analitikai eszköz csak akkor, ha az adatvédelmi követelményeket is teljesíted (sütik, hozzájárulás).
- Megjegyzés: az oldal jelenleg kliensoldali React-alkalmazás. Ez egy egyoldalas bemutatóhoz általában elég, de ha a keresőoptimalizálás kiemelt szempont, érdemes megfontolni előrenderelést (pl. Astro vagy Next.js).

---

## 12. Gyors hibakeresés

| Probléma | Lehetséges ok és megoldás |
|---|---|
| `npm: command not found` | A Node.js nincs telepítve. Telepítsd az LTS verziót, és nyiss új terminált. |
| `npm install` hibával áll le | Ellenőrizd a Node-verziót (`node -v`, 18 vagy újabb legyen) és az internetkapcsolatot. Próbáld: törlöd a `node_modules` mappát és a `package-lock.json`-t, majd újra `npm install`. Ha hálózati hiba (pl. vállalati proxy) van, nézd meg a hálózati beállításokat. |
| `npm run dev` nem indul | Győződj meg róla, hogy a projekt mappájában vagy (ahol a `package.json` van), és lefutott az `npm install`. Ha a port foglalt, a Vite másik portot ajánl fel; olvasd el a terminál üzenetét. |
| Üres fehér oldal | Nyisd meg a böngésző fejlesztői konzolját (F12 → Console), és keresd a piros hibaüzenetet; általában elgépelt importútvonal vagy szintaxishiba. |
| `npm run build` hibával áll le | Olvasd el az első hibasort: fájlnevet és sort ír. Gyakori ok az elgépelt fájlnév (a kis- és nagybetű számít!), hiányzó import vagy lezáratlan JSX-címke. |
| A képek nem töltődnek be | Ellenőrizd az útvonalat és a fájlnevet (kis- és nagybetű). A `public/` mappa fájljait `/` jellel kezdődő útvonalon kell megadni (`/img/kep.jpg`), a `public` szó nélkül. Külső URL esetén a kép legyen elérhető és nyilvános. |
| Nem jelenik meg a valódi kép, csak a helyőrző | Az `IMAGES` kulcs nem egyezik az `id`-val; az `Art` az `id` alapján keresi a képet. |
| Nem működik a közösségi link | A `preventDefault` megakadályozza a navigációt; távolítsd el, és adj meg valós URL-t (3.6 szakasz). |
| A menü linkjei nem görgetnek | A szakasz azonosítója (`id`) nem egyezik a `href`-fel (pl. `#galeria` ↔ `id="galeria"`). |
| Üres lap vagy hiányzó fájlok az éles oldalon | Ellenőrizd a build-beállításokat: kimeneti mappa `dist`, build parancs `npm run build`. Almappába telepítésnél kell a `base` beállítás. |
| A tárhelyen a build sikertelen | Nézd meg a build naplót; a tárhely Node-verziója eltérhet a sajátodtól. A tárhely beállításaiban megadható a Node-verzió. |
| 404 a `/favicon.ico` fájlra | A projektben nincs favicon. Nem kritikus hiba, de érdemes hozzáadni. |
| Az űrlap „küld", de nem érkezik e-mail | Ez a várt viselkedés: a demóűrlap nem küld semmit (4. szakasz). |

---

*Utolsó megjegyzés: ez a projekt designkoncepció. Éles használat előtt a fenti teendőket el kell végezni, és minden helyőrzőt valós, ellenőrzött tartalomra kell cserélni.*
