import * as React from "react";
import { ComponentProps } from "react";

export function Unit1({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 37"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.04261 16.2778H40.4987C42.9863 16.2778 45.0009 18.3043 45.0009 20.7954V22.7132H0.540405V20.7954C0.540405 18.2994 2.56 16.2778 5.04261 16.2778Z"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.0009 22.7083H0.540405V29.1436H45.0009V22.7083Z"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.10681 30.8984V33.2709C2.10681 34.5017 3.10183 35.5001 4.32836 35.5001C5.55489 35.5001 6.54991 34.5017 6.54991 33.2709V30.8984"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M38.9865 30.8984V33.2709C38.9865 34.5017 39.9815 35.5001 41.2081 35.5001C42.4346 35.5001 43.4296 34.5017 43.4296 33.2709V30.8984"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40.8337 14.7012V3.86684C40.8337 2.63612 39.8386 1.6377 38.6121 1.6377C37.5137 1.6377 36.6024 2.43841 36.4201 3.48626C36.3856 3.69879 36.2231 3.86684 36.0064 3.86684H9.81572C9.59898 3.86684 9.43643 3.69879 9.40195 3.48626C9.21969 2.43841 8.30841 1.6377 7.20995 1.6377C5.98342 1.6377 4.9884 2.63612 4.9884 3.86684V14.7012"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.43152 14.7012V10.3714C9.43152 9.6646 10.0029 9.09619 10.7024 9.09619H19.2733C19.9777 9.09619 20.5442 9.66954 20.5442 10.3714V14.7012"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24.9922 14.7012V10.3714C24.9922 9.6646 25.5636 9.09619 26.2631 9.09619H35.1148C35.8192 9.09619 36.3857 9.66954 36.3857 10.3714V14.7012"
        stroke="#D1AA67"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
