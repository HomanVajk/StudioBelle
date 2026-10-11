// ===== SZERKESZTHETŐ TARTALOM – minden itt található adat HELYŐRZŐ =====
export const SETTINGS = {
  brand: "STÚDIÓ BELLE",
  // Ha a szalon nem kínál kozmetikai szolgáltatást, állítsd false-ra:
  // a kategória, a profil, a galéria szűrője és az űrlap opciója is eltűnik.
  cosmetics: true,
};

// Helyőrző elérhetőségek – cseréld a szalon valós adataira.
export const CONTACT = {
  address: "[Utca, házszám, település]",
  phone: "[+36 .. ... ....]",
  hours: ["Hétfő–péntek: [..:..–..:..]", "Szombat: [..:..–..:..]", "Vasárnap: [zárva / ..:..–..:..]"],
  instagram: "#", // TODO: valós Instagram-link
  facebook: "#",  // TODO: valós Facebook-link
};

// Képek: ha egy kulcshoz URL-t vagy helyi fájlt adsz meg (pl. "/img/hero.jpg"),
// az felváltja a rajzolt helyőrzőt. Valós, jogtiszta szalonfotókat használj.
export const IMAGES = {
  // hero: "", heroHair: "", heroNails: "", svcHair: "", svcNails: "", svcSkin: "",
  // team1: "", team2: "", team3: "", team4: "", g1: "", g2: "" ...
};

export const SERVICES = [
  { id: "svcHair", kind: "hair", title: "Fodrászat", items: ["Női hajvágás és formázás", "Hajfestés és színfrissítés", "Hajápolás és styling"] },
  { id: "svcNails", kind: "nails", title: "Körömstúdió", items: ["Géllakk", "Műköröm építés", "Manikűr és körömformázás"] },
  { id: "svcSkin", kind: "skin", title: "Kozmetika", optional: true, items: ["Bőrápolási kezelések", "Arckezelések", "Személyre szabott szépségápolás"] },
].filter((s) => SETTINGS.cosmetics || !s.optional);

export const TEAM = [
  { id: "team1", kind: "hair", name: "Fodrász 01", role: "Fodrász", text: "Itt jelenhet meg a fodrász rövid, személyes bemutatkozása." },
  { id: "team2", kind: "hair", name: "Fodrász 02", role: "Fodrász", text: "Ide kerülhet a második fodrász bemutatkozása." },
  { id: "team3", kind: "nails", name: "Körmös", role: "Körömstylist", text: "Ide kerülhet a körömstylist bemutatkozása." },
  { id: "team4", kind: "skin", name: "Kozmetikus", role: "Kozmetikus (opcionális)", optional: true, text: "Csak akkor jelenik meg, ha a szalon kozmetikai szolgáltatást is kínál." },
].filter((t) => SETTINGS.cosmetics || !t.optional);

export const GALLERY = [
  { id: "g1", cat: "haj", kind: "hair", label: "Lágy hullámok", size: "tall" },
  { id: "g2", cat: "köröm", kind: "nails", label: "Pasztell géllakk", size: "" },
  { id: "g3", cat: "kozmetika", kind: "skin", label: "Bőrápolási rituálé", size: "" },
  { id: "g4", cat: "haj", kind: "hair", label: "Természetes melír", size: "" },
  { id: "g5", cat: "köröm", kind: "nails", label: "Letisztult manikűr", size: "tall" },
  { id: "g6", cat: "haj", kind: "hair", label: "Elegáns konty", size: "" },
  { id: "g7", cat: "kozmetika", kind: "skin", label: "Arckezelés-inspiráció", size: "" },
  { id: "g8", cat: "köröm", kind: "nails", label: "Franciás körmök", size: "" },
].filter((g) => SETTINGS.cosmetics || g.cat !== "kozmetika");

export const WHY = [
  { t: "Személyre szabott figyelem", p: "Először meghallgatunk, és csak utána döntünk a formáról, színről vagy kezelésről." },
  { t: "Több szolgáltatás egy helyen", p: "Haj, köröm és opcionálisan kozmetika egy helyszínen, kevesebb szervezéssel." },
  { t: "Igényes, nyugodt környezet", p: "Egy hely, ahol egy kicsit megállhatsz, és tényleg magadra figyelhetsz." },
  { t: "Stílus, amely hozzád illik", p: "Nem trendeket másolunk: olyan megjelenést keresünk, amiben önmagad vagy." },
];
