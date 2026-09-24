type GoldDotsProps = {
  className?: string;
};

const dots = [
  { cx: 14,  cy: 22,  r: 1.6, o: 0.75 },
  { cx: 28,  cy: 10,  r: 2.2, o: 0.55 },
  { cx: 44,  cy: 18,  r: 1.2, o: 0.9  },
  { cx: 62,  cy: 8,   r: 1.8, o: 0.65 },
  { cx: 78,  cy: 22,  r: 2.4, o: 0.5  },
  { cx: 94,  cy: 12,  r: 1.4, o: 0.85 },
  { cx: 108, cy: 26,  r: 1.9, o: 0.6  },
  { cx: 124, cy: 14,  r: 1.1, o: 0.8  },
  { cx: 140, cy: 30,  r: 2.0, o: 0.55 },
  { cx: 22,  cy: 48,  r: 1.5, o: 0.7  },
  { cx: 40,  cy: 62,  r: 2.1, o: 0.5  },
  { cx: 58,  cy: 44,  r: 1.3, o: 0.85 },
  { cx: 76,  cy: 58,  r: 1.7, o: 0.65 },
  { cx: 96,  cy: 46,  r: 2.3, o: 0.55 },
  { cx: 114, cy: 62,  r: 1.2, o: 0.85 },
  { cx: 132, cy: 48,  r: 1.8, o: 0.7  },
  { cx: 148, cy: 66,  r: 1.4, o: 0.6  },
  { cx: 18,  cy: 82,  r: 2.0, o: 0.55 },
  { cx: 36,  cy: 96,  r: 1.3, o: 0.8  },
  { cx: 54,  cy: 84,  r: 1.9, o: 0.6  },
  { cx: 72,  cy: 100, r: 1.1, o: 0.85 },
  { cx: 92,  cy: 88,  r: 2.2, o: 0.5  },
  { cx: 110, cy: 102, r: 1.5, o: 0.75 },
  { cx: 128, cy: 84,  r: 1.8, o: 0.6  },
  { cx: 146, cy: 100, r: 1.2, o: 0.8  },
  { cx: 30,  cy: 128, r: 1.6, o: 0.7  },
  { cx: 68,  cy: 134, r: 2.0, o: 0.55 },
  { cx: 112, cy: 130, r: 1.4, o: 0.75 },
];

export default function GoldDots({ className = "" }: GoldDotsProps) {
  return (
    <g className={className}>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="#c9a961"
          opacity={d.o}
        />
      ))}
    </g>
  );
}