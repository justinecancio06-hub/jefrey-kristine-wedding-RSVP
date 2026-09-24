import GoldDots from "./GoldDots";

type Variant = "tl" | "tr" | "bl" | "br";

type FloralCornerProps = {
  variant: Variant;
  className?: string;
};

function Blossom({
  x,
  y,
  scale,
  rotate = 0,
}: {
  x: number;
  y: number;
  scale: number;
  rotate?: number;
}) {
  const s = scale;
  const petalAngles = [0, 72, 144, 216, 288];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <circle r={s * 1.25} fill="#c9d4bd" opacity="0.3" />
      <circle r={s * 0.95} fill="#8a9a7b" opacity="0.2" />
      {petalAngles.map((deg) => (
        <g key={deg} transform={`rotate(${deg})`}>
          <ellipse
            cx="0"
            cy={-s * 0.55}
            rx={s * 0.4}
            ry={s * 0.5}
            fill="#fdfbf7"
            opacity="0.95"
            stroke="#e8ede0"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1={-s * 0.1}
            x2="0"
            y2={-s * 1.02}
            stroke="#c9d4bd"
            strokeWidth="0.75"
            opacity="0.8"
          />
        </g>
      ))}
      <circle r={s * 0.12} fill="#c9a961" />
    </g>
  );
}

function Leaf({
  x,
  y,
  length,
  angle,
  width,
  fill,
  opacity,
}: {
  x: number;
  y: number;
  length: number;
  angle: number;
  width: number;
  fill: string;
  opacity: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const tipX = x + Math.cos(rad) * length;
  const tipY = y + Math.sin(rad) * length;
  const hpx = (-Math.sin(rad) * width) / 2;
  const hpy = (Math.cos(rad) * width) / 2;
  return (
    <path
      d={`M ${x} ${y} Q ${x + hpx} ${y + hpy} ${tipX} ${tipY} Q ${x - hpx} ${
        y - hpy
      } ${x} ${y} Z`}
      fill={fill}
      opacity={opacity}
    />
  );
}

type BlobDef = {
  x: number;
  y: number;
  rx: number;
  ry: number;
  opacity?: number;
};
type StemDef = { d: string; width?: number; opacity?: number };
type LeafDef = {
  x: number;
  y: number;
  length: number;
  angle: number;
  width: number;
  fill: string;
  opacity: number;
};
type BlossomDef = { x: number; y: number; scale: number; rotate?: number };
type DotDef = { x: number; y: number; r: number; o: number };

const VARIANTS: Record<
  Variant,
  { blobs: BlobDef[]; stems: StemDef[]; leaves: LeafDef[]; blossoms: BlossomDef[]; dots: DotDef[] }
> = {
  // Largest cluster, densest leaves, biggest focal flower.
  tl: {
    blobs: [
      { x: 48, y: 54, rx: 44, ry: 34, opacity: 0.42 },
      { x: 88, y: 96, rx: 40, ry: 30, opacity: 0.35 },
    ],
    stems: [
      { d: "M 16 30 C 42 26, 66 30, 88 40", width: 1.4, opacity: 0.75 },
      { d: "M 30 12 C 48 32, 52 56, 62 82", width: 1.1, opacity: 0.6 },
      { d: "M 16 84 C 44 78, 80 84, 108 92", width: 1, opacity: 0.85 },
    ],
    leaves: [
      { x: 30, y: 18, length: 26, angle: 30, width: 12, fill: "#8a9a7b", opacity: 0.9 },
      { x: 38, y: 22, length: 20, angle: -20, width: 9, fill: "#6b7a5e", opacity: 0.75 },
      { x: 60, y: 38, length: 24, angle: -45, width: 11, fill: "#8a9a7b", opacity: 0.85 },
      { x: 52, y: 42, length: 18, angle: 60, width: 8, fill: "#6b7a5e", opacity: 0.7 },
      { x: 82, y: 50, length: 20, angle: -10, width: 9, fill: "#8a9a7b", opacity: 0.8 },
      { x: 70, y: 60, length: 16, angle: 90, width: 7, fill: "#6b7a5e", opacity: 0.65 },
      { x: 100, y: 68, length: 20, angle: -30, width: 9, fill: "#8a9a7b", opacity: 0.75 },
    ],
    blossoms: [
      { x: 88, y: 40, scale: 17, rotate: 8 },
      { x: 64, y: 84, scale: 12, rotate: -6 },
      { x: 112, y: 92, scale: 9, rotate: 14 },
    ],
    dots: [
      { x: 40, y: 52, r: 1.3, o: 0.8 },
      { x: 70, y: 66, r: 1.7, o: 0.6 },
      { x: 128, y: 60, r: 1.1, o: 0.7 },
      { x: 60, y: 40, r: 1.5, o: 0.5 },
    ],
  },

  // Smaller, delicate, airy — fewer flowers, lighter feel.
  tr: {
    blobs: [
      { x: 112, y: 44, rx: 38, ry: 30, opacity: 0.35 },
      { x: 140, y: 18, rx: 26, ry: 20, opacity: 0.3 },
    ],
    stems: [
      { d: "M 152 18 C 126 24, 102 30, 78 46", width: 1.2, opacity: 0.7 },
      { d: "M 134 8 C 116 28, 106 54, 96 82", width: 1, opacity: 0.65 },
    ],
    leaves: [
      { x: 128, y: 22, length: 20, angle: -140, width: 9, fill: "#8a9a7b", opacity: 0.8 },
      { x: 112, y: 30, length: 16, angle: 120, width: 7, fill: "#6b7a5e", opacity: 0.7 },
      { x: 80, y: 48, length: 20, angle: -60, width: 9, fill: "#8a9a7b", opacity: 0.75 },
      { x: 95, y: 55, length: 14, angle: 30, width: 6, fill: "#6b7a5e", opacity: 0.7 },
    ],
    blossoms: [
      { x: 78, y: 46, scale: 11 },
      { x: 96, y: 82, scale: 8, rotate: 12 },
    ],
    dots: [
      { x: 108, y: 58, r: 1.2, o: 0.8 },
      { x: 132, y: 40, r: 1.6, o: 0.6 },
    ],
  },

  // Medium cluster, gold-dot heavy.
  bl: {
    blobs: [
      { x: 70, y: 126, rx: 40, ry: 32, opacity: 0.4 },
      { x: 120, y: 110, rx: 30, ry: 24, opacity: 0.35 },
      { x: 18, y: 138, rx: 26, ry: 20, opacity: 0.3 },
    ],
    stems: [
      { d: "M 18 150 C 46 140, 74 132, 100 118", width: 1.3, opacity: 0.75 },
      { d: "M 12 128 C 34 124, 56 114, 74 96", width: 1, opacity: 0.65 },
      { d: "M 42 158 C 68 148, 96 140, 128 132", width: 1.1, opacity: 0.7 },
    ],
    leaves: [
      { x: 10, y: 130, length: 22, angle: 45, width: 10, fill: "#8a9a7b", opacity: 0.85 },
      { x: 28, y: 140, length: 16, angle: -30, width: 7, fill: "#6b7a5e", opacity: 0.7 },
      { x: 40, y: 110, length: 22, angle: 30, width: 10, fill: "#8a9a7b", opacity: 0.8 },
      { x: 70, y: 130, length: 18, angle: -50, width: 8, fill: "#6b7a5e", opacity: 0.7 },
      { x: 85, y: 105, length: 20, angle: 20, width: 9, fill: "#8a9a7b", opacity: 0.75 },
    ],
    blossoms: [
      { x: 100, y: 118, scale: 12, rotate: -10 },
      { x: 74, y: 96, scale: 10, rotate: 12 },
      { x: 128, y: 132, scale: 8, rotate: -18 },
    ],
    dots: [
      { x: 36, y: 84, r: 1.5, o: 0.75 },
      { x: 100, y: 52, r: 1.8, o: 0.55 },
      { x: 150, y: 96, r: 1.3, o: 0.7 },
      { x: 20, y: 110, r: 1.2, o: 0.6 },
      { x: 64, y: 56, r: 1.4, o: 0.8 },
    ],
  },

  // Medium cluster with one prominent large blossom.
  br: {
    blobs: [
      { x: 104, y: 118, rx: 44, ry: 34, opacity: 0.4 },
      { x: 56, y: 132, rx: 30, ry: 24, opacity: 0.35 },
      { x: 140, y: 86, rx: 24, ry: 18, opacity: 0.3 },
    ],
    stems: [
      { d: "M 148 142 C 116 132, 96 116, 78 100", width: 1.4, opacity: 0.75 },
      { d: "M 138 158 C 112 144, 86 138, 62 124", width: 1.1, opacity: 0.7 },
      { d: "M 142 96 C 128 86, 120 76, 118 66", width: 0.9, opacity: 0.65 },
    ],
    leaves: [
      { x: 78, y: 132, length: 24, angle: -10, width: 11, fill: "#8a9a7b", opacity: 0.85 },
      { x: 95, y: 140, length: 17, angle: -140, width: 8, fill: "#6b7a5e", opacity: 0.7 },
      { x: 70, y: 105, length: 20, angle: 120, width: 9, fill: "#8a9a7b", opacity: 0.8 },
      { x: 110, y: 110, length: 18, angle: 60, width: 8, fill: "#6b7a5e", opacity: 0.7 },
      { x: 55, y: 120, length: 16, angle: 90, width: 7, fill: "#8a9a7b", opacity: 0.75 },
      { x: 125, y: 130, length: 12, angle: 150, width: 5, fill: "#8a9a7b", opacity: 0.7 },
    ],
    blossoms: [
      { x: 78, y: 100, scale: 18, rotate: 6 },
      { x: 62, y: 124, scale: 11, rotate: -14 },
      { x: 118, y: 66, scale: 6, rotate: 20 },
    ],
    dots: [
      { x: 96, y: 50, r: 1.6, o: 0.65 },
      { x: 52, y: 96, r: 1.2, o: 0.8 },
      { x: 132, y: 120, r: 1.8, o: 0.6 },
    ],
  },
};

export default function FloralCorner({
  variant,
  className = "",
}: FloralCornerProps) {
  const { blobs, stems, leaves, blossoms, dots } = VARIANTS[variant];
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" className={className}>
      <defs>
        <filter
          id={`blur-${variant}`}
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {blobs.map((b, i) => (
        <ellipse
          key={i}
          cx={b.x}
          cy={b.y}
          rx={b.rx}
          ry={b.ry}
          fill="#c9d4bd"
          opacity={b.opacity ?? 0.4}
          filter={`url(#blur-${variant})`}
        />
      ))}

      {stems.map((s, i) => (
        <path
          key={i}
          d={s.d}
          fill="none"
          stroke="#6b7a5e"
          strokeWidth={s.width ?? 1.2}
          strokeLinecap="round"
          opacity={s.opacity ?? 0.7}
        />
      ))}

      {leaves.map((l, i) => (
        <Leaf key={i} {...l} />
      ))}

      {blossoms.map((b, i) => (
        <Blossom
          key={i}
          x={b.x}
          y={b.y}
          scale={b.scale}
          rotate={b.rotate ?? 0}
        />
      ))}

      <GoldDots />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#c9a961" opacity={d.o} />
      ))}
    </svg>
  );
}