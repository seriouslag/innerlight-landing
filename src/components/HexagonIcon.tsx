interface HexagonIconProps {
  className?: string;
  /** Stroke color for the outer hexagon */
  strokeColor?: string;
  /** Fill color for the inner hexagon */
  fillColor?: string;
  /** Stroke color for the head silhouette */
  headColor?: string;
}

/** SVG hexagon icon with head silhouette and inner hexagon fill. */
export function HexagonIcon({
  className,
  strokeColor = '#e8991c',
  fillColor = '#e8991c',
  headColor = 'rgba(245,241,235,0.5)',
}: HexagonIconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <polygon
        points="50,8 90,30 90,70 50,92 10,70 10,30"
        stroke={strokeColor}
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M58,24 C68,28 74,38 74,50 C74,58 70,65 64,70 L64,80 L40,80 L40,70 C34,65 30,58 30,50 C30,36 40,24 54,24 Z"
        stroke={headColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <polygon
        points="50,36 62,43 62,57 50,64 38,57 38,43"
        fill={fillColor}
      />
    </svg>
  );
}
