import { IMAGES } from "../data.js";

// Rajzolt helyőrző jelenetek. Ha az IMAGES-ben van URL az adott id-hoz, a valódi fotó jelenik meg.
const SCENES = {
  hair: (<><path d="M120 250C95 130 160 80 200 80s105 50 80 170c12 70 34 120 12 190-30-45-60-62-92-62s-62 17-92 62c-22-70 0-120 12-190z" fill="#a8765d"/><ellipse cx="200" cy="235" rx="62" ry="78" fill="#f4d9c8"/><path d="M138 215c20-50 90-70 124 0-30-25-90-25-124 0z" fill="#a8765d"/></>),
  nails: (<><g fill="#f7e3d6">{[[95,170,34,150],[145,130,36,190],[197,115,36,205],[249,135,34,185]].map(([x,y,w,h],i)=><rect key={i} x={x} y={y} width={w} height={h} rx="17"/>)}<rect x="90" y="300" width="205" height="150" rx="50"/><rect x="290" y="270" width="32" height="110" rx="16" transform="rotate(35 290 270)"/></g><g fill="#e9a9a6">{[[100,178,24],[151,138,26],[203,123,26],[254,143,24]].map(([x,y,w],i)=><rect key={i} x={x} y={y} width={w} height="38" rx="12"/>)}</g></>),
  skin: (<><ellipse cx="200" cy="250" rx="95" ry="125" fill="#f4d9c8"/><path d="M105 235c0-80 40-120 95-120s95 40 95 120c-30-35-60-45-95-45s-65 10-95 45z" fill="#fbf1e8"/><g fill="#8fa586"><ellipse cx="85" cy="130" rx="46" ry="16" transform="rotate(-35 85 130)"/><ellipse cx="320" cy="150" rx="46" ry="16" transform="rotate(35 320 150)"/><ellipse cx="300" cy="420" rx="40" ry="14" transform="rotate(-30 300 420)"/></g></>),
  salon: (<><path d="M110 430V190a90 90 0 0 1 180 0v240z" fill="#fbf1e8" stroke="#8fa586" strokeWidth="8"/><path d="M60 450h280" stroke="#a8765d" strokeWidth="8"/><rect x="150" y="360" width="100" height="70" rx="22" fill="#e9a9a6"/><g fill="#8fa586"><ellipse cx="335" cy="395" rx="14" ry="48"/><ellipse cx="315" cy="410" rx="14" ry="38" transform="rotate(-25 315 410)"/><rect x="318" y="435" width="34" height="20" rx="6" fill="#a8765d"/></g></>),
};

export default function Art({ id, kind, alt, label = "Helyőrző kép", className = "" }) {
  const src = IMAGES[id];
  return (
    <figure className={`art art-${kind} ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <>
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${alt} (helyőrző)`}>{SCENES[kind]}</svg>
          <figcaption>{label}</figcaption>
        </>
      )}
    </figure>
  );
}
