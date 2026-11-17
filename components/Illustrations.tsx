/* Крупные иллюстрации (используются, пока нет реальных фотографий) и иконки. */

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className}>
      <circle cx="32" cy="32" r="31" fill="#FFD84D" />
      <path d="M8 44a24 24 0 0 1 48 0" stroke="#FFA65C" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M15 44a17 17 0 0 1 34 0" stroke="#9DDC82" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M22 44a10 10 0 0 1 20 0" stroke="#8DDCF7" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path
        d="M32 54s-9-5-9-11c0-3 2-5 4.5-5 2 0 3.5 1.2 4.5 3 1-1.8 2.5-3 4.5-3 2.5 0 4.5 2 4.5 5 0 6-9 11-9 11Z"
        fill="#FF7A8A"
      />
      <circle cx="47" cy="17" r="4" fill="#fff" opacity=".8" />
    </svg>
  );
}

/** Уютное здание детского сада. */
export function KindergartenScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" className={className} aria-hidden preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ks-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#BDEBFB" />
          <stop offset="1" stopColor="#E9F9FE" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" fill="url(#ks-sky)" />
      <circle cx="400" cy="70" r="34" fill="#FFD84D" />
      <g fill="#fff">
        <path d="M60 80c-12 0-20-7-20-16s7-15 17-15c3-10 11-16 22-16 10 0 19 6 21 15 11 0 19 7 19 16s-8 16-19 16Z" />
        <path d="M250 56c-9 0-15-5-15-12s6-12 13-12c2-8 9-12 17-12s14 5 16 11c8 0 14 6 14 13s-6 12-14 12Z" opacity=".9" />
      </g>
      <path d="M0 290c80-30 160-30 240-10s160 20 240-10v90H0Z" fill="#9DDC82" />
      <path d="M0 316c100-20 200-16 300 0s140 10 180 0v44H0Z" fill="#7FCB63" />
      {/* дерево */}
      <rect x="400" y="220" width="12" height="70" rx="5" fill="#A7714A" />
      <circle cx="406" cy="206" r="34" fill="#7FCB63" />
      <circle cx="388" cy="222" r="22" fill="#9DDC82" />
      <circle cx="398" cy="196" r="5" fill="#FF7A6B" />
      <circle cx="420" cy="214" r="5" fill="#FF7A6B" />
      {/* здание */}
      <rect x="110" y="150" width="250" height="140" rx="14" fill="#FFF3D1" />
      <path d="M96 160 235 76l139 84Z" fill="#FFA65C" />
      <path d="M96 160 235 76l139 84" stroke="#E98A3C" strokeWidth="8" strokeLinejoin="round" fill="none" />
      <circle cx="235" cy="128" r="18" fill="#FFFDF7" />
      <path d="M235 140s-9-5-9-11c0-3 2-5 4.5-5 2 0 3.5 1.2 4.5 3 1-1.8 2.5-3 4.5-3 2.5 0 4.5 2 4.5 5 0 6-9 11-9 11Z" fill="#FF7A8A" />
      {[135, 300].map((x) => (
        <g key={x}>
          <rect x={x} y="180" width="44" height="44" rx="10" fill="#8DDCF7" />
          <path d={`M${x + 22} 180v44M${x} 202h44`} stroke="#fff" strokeWidth="4" />
        </g>
      ))}
      <rect x="208" y="200" width="54" height="90" rx="27" fill="#C7AEF4" />
      <circle cx="248" cy="248" r="4" fill="#fff" />
      <rect x="126" y="244" width="60" height="16" rx="8" fill="#9DDC82" />
      <rect x="284" y="244" width="60" height="16" rx="8" fill="#FFD84D" />
      {/* флажки */}
      <path d="M110 150c40 16 80 20 125 20s85-4 125-20" stroke="#2C2A4A" strokeOpacity=".25" strokeWidth="2" fill="none" />
      {[
        [130, 156, "#FFD84D"],
        [170, 165, "#8DDCF7"],
        [210, 169, "#9DDC82"],
        [260, 169, "#C7AEF4"],
        [300, 165, "#FFA65C"],
        [340, 156, "#FFD84D"],
      ].map(([x, y, c]) => (
        <path key={`${x}`} d={`M${Number(x) - 8} ${y}h16l-8 14Z`} fill={String(c)} />
      ))}
      {/* мячик и цветы */}
      <circle cx="70" cy="292" r="16" fill="#FFD84D" />
      <path d="M54 292h32M70 276c-8 10-8 22 0 32" stroke="#FFA65C" strokeWidth="3" fill="none" />
      {[300, 330, 360].map((x, i) => (
        <g key={x}>
          <path d={`M${x} 304v-16`} stroke="#3A8A2B" strokeWidth="3" />
          <circle cx={x} cy="284" r="7" fill={["#FF8FA3", "#C7AEF4", "#FFD84D"][i]} />
          <circle cx={x} cy="284" r="2.5" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

/** Центральная композиция раздела «Питание». */
export function Plate({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" className={className} role="img" aria-hidden>
      <circle cx="160" cy="168" r="138" fill="#000" opacity=".06" />
      <circle cx="160" cy="160" r="138" fill="#fff" />
      <circle cx="160" cy="160" r="112" fill="#FFF6D6" />
      <circle cx="160" cy="160" r="112" fill="none" stroke="#FFD84D" strokeWidth="6" strokeDasharray="2 14" strokeLinecap="round" />
      {/* каша-солнышко */}
      <circle cx="122" cy="126" r="44" fill="#FFE58A" />
      <circle cx="122" cy="126" r="44" fill="none" stroke="#F5C842" strokeWidth="4" />
      <circle cx="108" cy="116" r="6" fill="#FF7A6B" />
      <circle cx="128" cy="108" r="5" fill="#C7AEF4" />
      <circle cx="136" cy="132" r="6" fill="#FF7A6B" />
      <circle cx="112" cy="138" r="5" fill="#8DDCF7" />
      {/* брокколи */}
      <rect x="200" y="140" width="12" height="34" rx="5" fill="#8BC96F" />
      <circle cx="196" cy="132" r="16" fill="#6FBF4E" />
      <circle cx="216" cy="128" r="16" fill="#7FCB63" />
      <circle cx="206" cy="114" r="15" fill="#9DDC82" />
      {/* морковные кружочки */}
      {[
        [120, 214],
        [146, 226],
        [172, 214],
      ].map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r="15" fill="#FFA65C" />
          <circle cx={x} cy={y} r="7" fill="#FFC285" />
        </g>
      ))}
      {/* яблочная долька */}
      <path d="M200 196c16 0 34 10 36 30-20 6-40-4-36-30Z" fill="#FF7A6B" />
      <path d="M204 200c12 2 24 10 26 22-14 2-26-8-26-22Z" fill="#FFF0E3" />
      {/* улыбка */}
      <path d="M140 268c12 8 28 8 40 0" stroke="#FFD84D" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ---------- Иконки (stroke) ---------- */
type I = { className?: string };
const ic = (d: React.ReactNode, className = "h-5 w-5") => (
  <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {d}
  </svg>
);

export const PhoneIcon = ({ className }: I) =>
  ic(<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />, className);
export const PinIcon = ({ className }: I) =>
  ic(
    <>
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>,
    className,
  );
export const ClockIcon = ({ className }: I) =>
  ic(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
    className,
  );
export const InstagramIcon = ({ className }: I) =>
  ic(
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </>,
    className,
  );
export const WhatsAppIcon = ({ className }: I) =>
  ic(
    <>
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7Z" />
      <path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2Z" />
    </>,
    className,
  );
export const MenuIcon = ({ className }: I) => ic(<path d="M4 7h16M4 12h16M4 17h16" />, className);
export const CloseIcon = ({ className }: I) => ic(<path d="M6 6l12 12M18 6 6 18" />, className);
export const ChevronLeft = ({ className }: I) => ic(<path d="m15 5-7 7 7 7" />, className);
export const ChevronRight = ({ className }: I) => ic(<path d="m9 5 7 7-7 7" />, className);
export const ArrowRight = ({ className }: I) => ic(<path d="M5 12h14m-5-6 6 6-6 6" />, className);
export const ExternalIcon = ({ className }: I) =>
  ic(<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />, className);
export const DownloadIcon = ({ className }: I) => ic(<path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />, className);
export const FolderIcon = ({ className }: I) =>
  ic(<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />, className);
export const ZoomIcon = ({ className }: I) =>
  ic(
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5M11 8v6M8 11h6" />
    </>,
    className,
  );

export function PdfIcon({ className = "" }: I) {
  return (
    <svg aria-hidden viewBox="0 0 48 56" className={className}>
      <path d="M6 2h26l14 14v34a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" fill="#fff" stroke="#E8E4F5" strokeWidth="2" />
      <path d="M32 2v10a4 4 0 0 0 4 4h10" fill="#F3EDFD" stroke="#E8E4F5" strokeWidth="2" />
      <rect x="0" y="30" width="34" height="16" rx="5" fill="#FF6B5E" />
      <text x="17" y="42" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" fontFamily="system-ui, sans-serif">
        PDF
      </text>
    </svg>
  );
}

/* Тематические иконки кружков */
export function SpeechIllustration({ className = "" }: I) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className}>
      <path d="M8 14a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H28l-12 10v-10a8 8 0 0 1-8-8Z" fill="#8DDCF7" />
      <text x="32" y="31" textAnchor="middle" fontSize="16" fontWeight="900" fill="#fff" fontFamily="system-ui, sans-serif">
        Ә Ө
      </text>
      <circle cx="54" cy="50" r="6" fill="#FFD84D" />
    </svg>
  );
}
export function DanceIllustration({ className = "" }: I) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className}>
      <circle cx="32" cy="12" r="7" fill="#FFA65C" />
      <path d="M32 20 18 30M32 20l14-12M32 20v16" stroke="#C7AEF4" strokeWidth="5" strokeLinecap="round" />
      <path d="M20 50 32 34l12 16Z" fill="#C7AEF4" />
      <path d="M26 50l-6 10M38 50l8 8" stroke="#FFA65C" strokeWidth="4" strokeLinecap="round" />
      <path d="M50 30v-10l8-2v10" stroke="#9DDC82" strokeWidth="3" fill="none" />
      <circle cx="48" cy="31" r="3" fill="#9DDC82" />
      <circle cx="56" cy="29" r="3" fill="#9DDC82" />
    </svg>
  );
}
export function TaekwondoIllustration({ className = "" }: I) {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className={className}>
      <path d="M18 18h28l6 36H12Z" fill="#fff" stroke="#D9D4EE" strokeWidth="2" />
      <path d="M18 18l14 14 14-14" stroke="#D9D4EE" strokeWidth="2" fill="none" />
      <rect x="10" y="34" width="44" height="7" rx="3" fill="#9DDC82" />
      <path d="M30 41l-6 14M34 41l6 14" stroke="#9DDC82" strokeWidth="5" strokeLinecap="round" />
      <circle cx="52" cy="12" r="6" fill="#FFD84D" />
    </svg>
  );
}

/* Иконки приёмов пищи */
export function MealIcon({ kind, className = "" }: { kind: string; className?: string }) {
  switch (kind) {
    case "breakfast":
      return (
        <svg aria-hidden viewBox="0 0 48 48" className={className}>
          <path d="M6 30a18 18 0 0 1 36 0" fill="#FFD84D" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="22.5" y="2" width="3" height="7" rx="1.5" fill="#FFC21A" transform={`rotate(${-60 + i * 30} 24 30)`} />
          ))}
          <rect x="2" y="30" width="44" height="5" rx="2.5" fill="#FFA65C" />
          <rect x="10" y="38" width="28" height="4" rx="2" fill="#FFA65C" opacity=".5" />
        </svg>
      );
    case "lunch":
      return (
        <svg aria-hidden viewBox="0 0 48 48" className={className}>
          <path d="M14 14c0-4 4-4 4-8M24 14c0-4 4-4 4-8M34 14c0-4 4-4 4-8" stroke="#C9CBD9" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M4 22h40c0 12-9 20-20 20S4 34 4 22Z" fill="#9DDC82" />
          <rect x="2" y="19" width="44" height="5" rx="2.5" fill="#7FCB63" />
          <circle cx="18" cy="30" r="3" fill="#FFA65C" />
          <circle cx="28" cy="32" r="3" fill="#FFD84D" />
        </svg>
      );
    case "snack":
      return (
        <svg aria-hidden viewBox="0 0 48 48" className={className}>
          <path d="M10 16h24l-3 26H13Z" fill="#8DDCF7" />
          <path d="M34 22h4a5 5 0 0 1 0 10h-5" stroke="#8DDCF7" strokeWidth="3.5" fill="none" />
          <rect x="10" y="22" width="24" height="5" fill="#fff" opacity=".6" />
          <path d="M28 16c0-6 4-10 10-10-1 6-4 9-10 10Z" fill="#9DDC82" />
          <circle cx="40" cy="38" r="6" fill="#FF7A6B" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden viewBox="0 0 48 48" className={className}>
          <path d="M30 6a16 16 0 1 0 12 26A14 14 0 0 1 30 6Z" fill="#C7AEF4" />
          <circle cx="38" cy="12" r="2" fill="#FFD84D" />
          <circle cx="44" cy="20" r="1.5" fill="#FFD84D" />
          <rect x="4" y="38" width="40" height="5" rx="2.5" fill="#9B7FE0" />
        </svg>
      );
  }
}
