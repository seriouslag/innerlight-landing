interface HexagonIconLargeProps {
  className?: string;
  strokeColor?: string;
  headColor?: string;
}

/** Large version of the hexagon icon (200x200 viewBox) used as background/decorative element. */
export function HexagonIconLarge({
  className,
  strokeColor = '#f5f1eb',
  headColor = '#f5f1eb',
}: HexagonIconLargeProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none">
      <polygon
        points="100,15 180,55 180,145 100,185 20,145 20,55"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M116,48 C136,56 148,76 148,100 C148,116 140,130 128,140 L128,160 L80,160 L80,140 C68,130 60,116 60,100 C60,72 80,48 108,48 Z"
        stroke={headColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <polygon
        points="100,72 124,86 124,114 100,128 76,114 76,86"
        fill={strokeColor}
        opacity="0.15"
      />
    </svg>
  );
}
