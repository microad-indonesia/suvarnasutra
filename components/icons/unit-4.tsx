import * as React from "react";
import { ComponentProps } from "react";

export function Unit4({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_349_140)">
        <path
          d="M38.5122 19.6295C41.0935 19.6295 43.1861 17.5829 43.1861 15.0583C43.1861 12.5337 41.0935 10.4871 38.5122 10.4871C35.9309 10.4871 33.8383 12.5337 33.8383 15.0583C33.8383 17.5829 35.9309 19.6295 38.5122 19.6295Z"
          stroke="#D1AA67"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M38.5122 17.3439C39.8029 17.3439 40.8492 16.3206 40.8492 15.0583C40.8492 13.796 39.8029 12.7727 38.5122 12.7727C37.2216 12.7727 36.1753 13.796 36.1753 15.0583C36.1753 16.3206 37.2216 17.3439 38.5122 17.3439Z"
          stroke="#D1AA67"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M11.9991 19.6295C14.5804 19.6295 16.673 17.5829 16.673 15.0583C16.673 12.5337 14.5804 10.4871 11.9991 10.4871C9.41777 10.4871 7.3252 12.5337 7.3252 15.0583C7.3252 17.5829 9.41777 19.6295 11.9991 19.6295Z"
          stroke="#D1AA67"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M11.9991 17.3439C13.2898 17.3439 14.3361 16.3206 14.3361 15.0583C14.3361 13.796 13.2898 12.7727 11.9991 12.7727C10.7085 12.7727 9.66217 13.796 9.66217 15.0583C9.66217 16.3206 10.7085 17.3439 11.9991 17.3439Z"
          stroke="#D1AA67"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M44.9436 15.2842H47.129L49.6251 10.4908L47.129 6.57151L33.2437 4.84156L29.4145 0.370361H16.0859L9.48037 6.83082H3.03389L0.378784 10.487L2.33318 15.0583H5.65869"
          stroke="#D1AA67"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.366 15.0583H31.8158"
          stroke="#D1AA67"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.499 6.67529H32.5771"
          stroke="#D1AA67"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_349_140">
          <rect width="50" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
