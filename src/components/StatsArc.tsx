import type React from "react";
import { ARC_CENTER, arcData, createArcPath, polarPoint } from "./constants";

export default function StatsArc() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-50 hidden sm:block">
      <svg
        viewBox="0 0 380 700"
        preserveAspectRatio="xMaxYMid meet"
        className="h-full w-auto"
        aria-hidden="true"
      >
        <defs>
          {arcData.map((arc, index) => {
            const start = polarPoint(
              ARC_CENTER.x,
              ARC_CENTER.y,
              arc.radius,
              arc.start,
            );

            const end = polarPoint(
              ARC_CENTER.x,
              ARC_CENTER.y,
              arc.radius,
              arc.end,
            );

            return (
              <linearGradient
                key={arc.radius}
                id={`arc-gradient-${index}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="22%" stopColor="white" stopOpacity="0.5" />
                <stop offset="55%" stopColor="white" stopOpacity="0.5" />
                <stop offset="85%" stopColor="white" stopOpacity="0.1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>

        {arcData.map((arc, index) => {
          const path = createArcPath(
            ARC_CENTER.x,
            ARC_CENTER.y,
            arc.radius,
            arc.start,
            arc.end,
          );

          const arcLength =
            arc.radius * Math.abs(((arc.end - arc.start) * Math.PI) / 180);

          const dot = polarPoint(
            ARC_CENTER.x,
            ARC_CENTER.y,
            arc.radius,
            arc.dot,
          );

          const lineDelay = 0.4 + index * 0.22;
          const markDelay = lineDelay + 0.9;

          return (
            <g key={arc.radius}>
              <path
                d={path}
                fill="none"
                stroke={`url(#arc-gradient-${index})`}
                strokeWidth="1.1"
                strokeLinecap="round"
                className="arc-line"
                style={
                  {
                    "--len": `${arcLength}px`,
                    "--delay": `${lineDelay}s`,
                  } as React.CSSProperties
                }
              />

              <circle
                cx={dot.x}
                cy={dot.y}
                r="7"
                fill="none"
                stroke="white"
                strokeWidth="1"
                className="arc-ring"
                style={
                  {
                    "--delay": `${markDelay + 0.3}s`,
                  } as React.CSSProperties
                }
              />

              <circle
                cx={dot.x}
                cy={dot.y}
                r="3.4"
                fill="white"
                className="arc-dot"
                style={
                  {
                    "--delay": `${markDelay}s`,
                  } as React.CSSProperties
                }
              />

              <text
                x={dot.x + 16}
                y={dot.y + 4}
                fill="white"
                fontSize="32"
                fontWeight="400"
                letterSpacing="-1px"
                className="arc-text"
                style={
                  {
                    "--delay": `${markDelay + 0.15}s`,
                  } as React.CSSProperties
                }
              >
                {arc.value}
                <tspan dy="-10" fontSize="19">
                  {arc.suffix}
                </tspan>
              </text>

              <text
                x={dot.x + 18}
                y={dot.y + 22}
                fill="white"
                fontSize="8.5"
                fontWeight="600"
                letterSpacing="2px"
                className="arc-text"
                style={
                  {
                    "--delay": `${markDelay + 0.3}s`,
                  } as React.CSSProperties
                }
              >
                {arc.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
