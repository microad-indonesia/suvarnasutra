import * as React from "react";
import { ComponentProps } from "react";

export function Unit2({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 37"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.03754 21.4392V23.9699C4.03754 28.962 8.07179 33.015 13.0518 33.015H24.8787C29.8538 33.015 33.893 28.9669 33.893 23.9699V21.4392"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M31.8882 32.3726L33.893 35.8571"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.0177 32.3577L4.06708 35.8719"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08173 23.97C7.08173 27.2717 9.76138 29.9556 13.0518 29.9556"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M1.7027 21.4392H36.2278"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0518 29.9556H24.8787"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0463 6.68536C24.0463 3.957 26.253 1.74268 28.9721 1.74268C31.6912 1.74268 33.8979 3.957 33.8979 6.68536V19.8625"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20.6573 8.35107H24.0463H27.4303"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0463 10.679V12.2606"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6668 13.3135V14.8951"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4208 13.3135V14.8951"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
