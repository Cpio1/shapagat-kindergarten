/* Декоративные SVG-фигурки. Все aria-hidden и не перехватывают клики. */

type P = { className?: string };
const base = "pointer-events-none select-none";

export function Cloud({ className = "", color = "#FFFFFF" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 64" className={`${base} ${className}`}>
      <path
        fill={color}
        d="M28 60c-13 0-22-8-22-19 0-10 8-18 19-18 3-12 13-20 26-20 12 0 22 7 25 18 2-1 5-2 8-2 11 0 20 9 20 20s-9 21-21 21H28Z"
      />
    </svg>
  );
}

export function Sun({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={`${base} ${className}`}>
      <g className="anim-spin" style={{ transformOrigin: "50px 50px" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="47" y="2" width="6" height="16" rx="3" fill="#FFC21A" transform={`rotate(${i * 30} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r="28" fill="#FFD84D" />
      <circle cx="41" cy="46" r="3" fill="#2C2A4A" />
      <circle cx="59" cy="46" r="3" fill="#2C2A4A" />
      <path d="M40 57c5 6 15 6 20 0" stroke="#2C2A4A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="35" cy="56" r="4" fill="#FFA65C" opacity=".6" />
      <circle cx="65" cy="56" r="4" fill="#FFA65C" opacity=".6" />
    </svg>
  );
}

export function Rainbow({ className = "" }: P) {
  const colors = ["#FFA65C", "#FFD84D", "#9DDC82", "#8DDCF7", "#C7AEF4"];
  return (
    <svg aria-hidden viewBox="0 0 200 104" className={`${base} ${className}`}>
      {colors.map((c, i) => (
        <path
          key={c}
          d={`M${10 + i * 12} 100a${90 - i * 12} ${90 - i * 12} 0 0 1 ${180 - i * 24} 0`}
          stroke={c}
          strokeWidth="11"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function Star({ className = "", color = "#FFD84D", spin = false }: P & { color?: string; spin?: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className={`${base} ${className}`}>
      <path
        className={spin ? "anim-spin" : undefined}
        style={{ transformOrigin: "20px 20px" }}
        fill={color}
        d="M20 2c1.6 0 2.4 9.8 4.6 12.2C27 16.6 38 17.4 38 20s-11 3.4-13.4 5.8C22.4 28.2 21.6 38 20 38s-2.4-9.8-4.6-12.2C13 23.4 2 22.6 2 20s11-3.4 13.4-5.8C17.6 11.8 18.4 2 20 2Z"
      />
    </svg>
  );
}

export function Flower({ className = "", petal = "#C7AEF4", center = "#FFD84D" }: P & { petal?: string; center?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 60 60" className={`${base} ${className}`}>
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse key={i} cx="30" cy="15" rx="9" ry="13" fill={petal} transform={`rotate(${i * 60} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="9" fill={center} />
    </svg>
  );
}

export function Balloon({ className = "", color = "#FFA65C" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 50 110" className={`${base} ${className}`}>
      <path d="M25 66c4 14-6 22 0 42" stroke="#2C2A4A" strokeOpacity=".35" strokeWidth="1.5" fill="none" />
      <ellipse cx="25" cy="30" rx="21" ry="27" fill={color} />
      <path d="M21 57h8l-4 8Z" fill={color} />
      <ellipse cx="17" cy="20" rx="5" ry="8" fill="#fff" opacity=".45" />
    </svg>
  );
}

export function Squiggle({ className = "", color = "#8DDCF7" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 24" className={`${base} ${className}`}>
      <path
        d="M4 12c8-10 16-10 24 0s16 10 24 0 16-10 24 0 16 10 24 0 12-8 16-4"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Pencil({ className = "", color = "#9DDC82" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 30" className={`${base} ${className}`}>
      <rect x="18" y="5" width="80" height="20" rx="3" fill={color} />
      <rect x="18" y="5" width="80" height="7" fill="#fff" opacity=".3" />
      <rect x="6" y="5" width="14" height="20" rx="4" fill="#FF8FA3" />
      <rect x="16" y="5" width="5" height="20" fill="#D9D9E3" />
      <path d="M98 5l20 10-20 10Z" fill="#F6D9A8" />
      <path d="M111 11.5l7 3.5-7 3.5Z" fill="#2C2A4A" />
    </svg>
  );
}

export function Leaf({ className = "", color = "#9DDC82" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 50 50" className={`${base} ${className}`}>
      <path d="M6 44C6 20 20 6 46 4c-2 26-16 40-40 40Z" fill={color} />
      <path d="M8 42C18 30 28 20 40 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

export function Heart({ className = "", color = "#FF8FA3" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 40 36" className={`${base} ${className}`}>
      <path fill={color} d="M20 34S2 23 2 11C2 5 6.5 2 11 2c4 0 7 2.5 9 6 2-3.5 5-6 9-6 4.5 0 9 3 9 9 0 12-18 23-18 23Z" />
    </svg>
  );
}

export function Blob({ className = "", color = "#C7AEF4" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={`${base} ${className}`}>
      <path
        fill={color}
        d="M43 -58C55 -47 62 -30 66 -12C70 6 71 25 62 39C53 53 34 62 14 67C-6 72 -27 73 -42 63C-57 53 -66 32 -69 11C-72 -10 -69 -31 -57 -43C-45 -55 -23 -58 -3 -55C17 -52 31 -69 43 -58Z"
        transform="translate(100 100) scale(1.3)"
      />
    </svg>
  );
}

export function Butterfly({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 60 48" className={`${base} ${className}`}>
      <path d="M30 24C22 6 4 2 4 14s12 12 26 10Z" fill="#C7AEF4" />
      <path d="M30 24C38 6 56 2 56 14s-12 12-26 10Z" fill="#8DDCF7" />
      <path d="M30 26C22 34 10 44 12 34s8-10 18-8Z" fill="#FFA65C" />
      <path d="M30 26C38 34 50 44 48 34s-8-10-18-8Z" fill="#FFD84D" />
      <rect x="28" y="12" width="4" height="26" rx="2" fill="#2C2A4A" />
    </svg>
  );
}

export function Kite({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 60 100" className={`${base} ${className}`}>
      <path d="M30 2 56 30 30 62 4 30Z" fill="#FFA65C" />
      <path d="M30 2v60M4 30h52" stroke="#fff" strokeWidth="2.5" opacity=".8" />
      <path d="M30 62c-6 8 6 12 0 20s6 10 0 16" stroke="#2C2A4A" strokeOpacity=".4" strokeWidth="1.5" fill="none" />
      <path d="M26 74l-6-3 2 6Z M34 86l6-3-2 6Z" fill="#C7AEF4" />
    </svg>
  );
}

export function Note({ className = "", color = "#C7AEF4" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 40 44" className={`${base} ${className}`}>
      <path d="M14 34V6l22-4v28" stroke={color} strokeWidth="4" fill="none" strokeLinejoin="round" />
      <ellipse cx="9" cy="35" rx="7" ry="5.5" fill={color} />
      <ellipse cx="31" cy="31" rx="7" ry="5.5" fill={color} />
    </svg>
  );
}

export function Dots({ className = "", color = "#FFA65C" }: P & { color?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 60 60" className={`${base} ${className}`}>
      {Array.from({ length: 16 }).map((_, i) => (
        <circle key={i} cx={7.5 + (i % 4) * 15} cy={7.5 + Math.floor(i / 4) * 15} r="3" fill={color} />
      ))}
    </svg>
  );
}

/* Еда для раздела «Питание» */
export function Apple({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 50 54" className={`${base} ${className}`}>
      <path d="M25 14c-6-5-21-4-21 14 0 14 10 24 16 24 3 0 3-1 5-1s2 1 5 1c6 0 16-10 16-24 0-18-15-19-21-14Z" fill="#FF7A6B" />
      <path d="M25 14c0-5 2-9 5-11" stroke="#7A4E2D" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M27 10c4-6 12-6 14-4-3 5-9 6-14 4Z" fill="#9DDC82" />
      <ellipse cx="14" cy="26" rx="3" ry="6" fill="#fff" opacity=".45" />
    </svg>
  );
}

export function Carrot({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 60 60" className={`${base} ${className}`}>
      <path d="M40 18 8 54c-2 2-4 0-3-2L32 12c3-4 10-2 8 6Z" fill="#FFA65C" />
      <path d="M20 34l5 4M14 42l4 3M27 25l4 4" stroke="#E07A1F" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 14c2-8 8-12 14-12-2 6-6 10-14 12Zm2 2c6-4 14-4 18 0-6 3-12 3-18 0Z" fill="#9DDC82" />
    </svg>
  );
}

export function Banana({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 60 50" className={`${base} ${className}`}>
      <path d="M6 18c6 22 34 30 50 14 2-2 0-5-3-4-14 6-30 0-40-14-2-3-8-1-7 4Z" fill="#FFD84D" />
      <path d="M12 22c8 12 24 18 38 12" stroke="#E0B300" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M6 18 4 12" stroke="#7A4E2D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Pear({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 44 60" className={`${base} ${className}`}>
      <path d="M22 10c-6 0-8 6-8 12 0 6-10 10-10 22 0 9 8 14 18 14s18-5 18-14c0-12-10-16-10-22 0-6-2-12-8-12Z" fill="#B8E07A" />
      <path d="M22 10V3" stroke="#7A4E2D" strokeWidth="3" strokeLinecap="round" />
      <path d="M23 7c3-5 9-5 11-3-3 4-7 5-11 3Z" fill="#6FBF4E" />
    </svg>
  );
}

export function Spoon({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 24 90" className={`${base} ${className}`}>
      <ellipse cx="12" cy="16" rx="10" ry="14" fill="#C9CBD9" />
      <ellipse cx="10" cy="13" rx="3" ry="6" fill="#fff" opacity=".6" />
      <rect x="9" y="28" width="6" height="60" rx="3" fill="#C9CBD9" />
    </svg>
  );
}

export function Fork({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 24 90" className={`${base} ${className}`}>
      <path d="M3 2v16c0 6 4 10 9 10s9-4 9-10V2" stroke="#C9CBD9" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M12 2v18" stroke="#C9CBD9" strokeWidth="4" strokeLinecap="round" />
      <rect x="9" y="26" width="6" height="62" rx="3" fill="#C9CBD9" />
    </svg>
  );
}

/** Волнистый переход между разделами. Цвет = фон следующего раздела. */
export function Wave({ color, flip = false, className = "" }: { color: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`${base} block h-6 w-full sm:h-10 lg:h-12 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path fill={color} d="M0 32c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0V60H0Z" />
    </svg>
  );
}
