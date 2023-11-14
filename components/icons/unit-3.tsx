import * as React from "react";
import { ComponentProps } from "react";

export function Unit3({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 37"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_349_160)">
        <path
          d="M0.591064 0.628586L0.591064 36.3716H12.4488L12.4488 0.628586H0.591064Z"
          stroke="#D1AA67"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.551 0.628586L16.551 36.3716H28.4087V0.628586H16.551Z"
          stroke="#D1AA67"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.88434 15.939V17.9502"
          stroke="#D1AA67"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.1157 15.939V17.9502"
          stroke="#D1AA67"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_349_160">
          <rect width="29" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
