import React from "react";

interface PlaceholderProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export default function Placeholder({
  width = 400,
  height = 300,
  text = "Image Placeholder",
  className,
}: PlaceholderProps) {
  const bgColor = "#1e293b";
  const textColor = "#94a3b8";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={bgColor} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontFamily="sans-serif"
        fontSize="16"
      >
        {text}
      </text>
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="none"
        stroke={textColor}
        strokeWidth="4"
        strokeDasharray="20,10"
        strokeOpacity="0.5"
      />
    </svg>
  );
}
