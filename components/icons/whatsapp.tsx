import * as React from "react";
import { ComponentProps } from "react";

export function Whatsapp({
  width,
  height,
  fill = "none",
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
      {...props}
    >
      <path
        d="M13.1891 10.1841L10.9391 9.05906C10.8505 9.01493 10.7519 8.99494 10.6531 9.00111C10.5544 9.00728 10.459 9.0394 10.3766 9.09422L9.34372 9.78328C8.86956 9.52262 8.47937 9.13243 8.21872 8.65828L8.90778 7.62539C8.9626 7.54301 8.99471 7.44762 9.00089 7.34886C9.00706 7.2501 8.98707 7.15146 8.94293 7.06289L7.81793 4.81289C7.7713 4.71872 7.69923 4.6395 7.60988 4.5842C7.52052 4.52889 7.41747 4.49973 7.31239 4.5C6.56647 4.5 5.8511 4.79632 5.32365 5.32376C4.7962 5.85121 4.49989 6.56658 4.49989 7.3125C4.50175 8.95296 5.15424 10.5257 6.31422 11.6857C7.4742 12.8456 9.04693 13.4981 10.6874 13.5C11.0567 13.5 11.4225 13.4273 11.7637 13.2859C12.1049 13.1446 12.415 12.9374 12.6761 12.6762C12.9373 12.4151 13.1445 12.105 13.2858 11.7638C13.4271 11.4226 13.4999 11.0568 13.4999 10.6875C13.5 10.583 13.4709 10.4805 13.416 10.3916C13.3611 10.3027 13.2826 10.2308 13.1891 10.1841ZM10.6874 12.375C9.34519 12.3735 8.05838 11.8397 7.1093 10.8906C6.16022 9.9415 5.62638 8.6547 5.62489 7.3125C5.62478 6.92235 5.75986 6.54421 6.00715 6.24244C6.25444 5.94067 6.59865 5.73391 6.98122 5.65734L7.7884 7.27453L7.10145 8.29688C7.05012 8.37388 7.01857 8.46236 7.00962 8.55447C7.00067 8.64658 7.01458 8.73947 7.05012 8.82492C7.45258 9.78144 8.21352 10.5424 9.17004 10.9448C9.25575 10.982 9.34935 10.9972 9.4424 10.9891C9.53545 10.981 9.62501 10.9498 9.70301 10.8984L10.7303 10.2136L12.3475 11.0208C12.2703 11.4038 12.0626 11.7482 11.7599 11.9951C11.4571 12.2421 11.0781 12.3763 10.6874 12.375ZM8.99989 1.6875C7.7374 1.68722 6.49635 2.01381 5.39753 2.63547C4.29871 3.25714 3.37956 4.15269 2.72954 5.23498C2.07952 6.31726 1.72077 7.5494 1.68822 8.81146C1.65567 10.0735 1.95043 11.3225 2.54379 12.4369L1.74575 14.831C1.67964 15.0292 1.67005 15.242 1.71804 15.4453C1.76604 15.6487 1.86972 15.8347 2.01747 15.9824C2.16522 16.1302 2.3512 16.2339 2.55457 16.2818C2.75794 16.3298 2.97065 16.3202 3.16887 16.2541L5.56301 15.4561C6.54371 15.9777 7.63035 16.269 8.74045 16.308C9.85056 16.347 10.9549 16.1325 11.9698 15.6809C12.9846 15.2293 13.8833 14.5525 14.5975 13.7017C15.3117 12.851 15.8227 11.8487 16.0917 10.771C16.3607 9.69326 16.3807 8.56842 16.1501 7.48184C15.9194 6.39525 15.4443 5.37549 14.7608 4.49994C14.0772 3.6244 13.2031 2.91608 12.2049 2.42877C11.2068 1.94146 10.1107 1.68796 8.99989 1.6875ZM8.99989 15.1875C7.91214 15.1882 6.84347 14.9018 5.90192 14.3571C5.83298 14.3171 5.75634 14.2923 5.67706 14.2841C5.59778 14.276 5.51769 14.2848 5.44207 14.31L2.81239 15.1875L3.68918 12.5578C3.71446 12.4823 3.72339 12.4022 3.71539 12.3229C3.70739 12.2436 3.68264 12.167 3.64278 12.098C2.96073 10.9188 2.68689 9.54744 2.86374 8.19672C3.04059 6.846 3.65824 5.5914 4.62089 4.62754C5.58353 3.66368 6.83735 3.04444 8.18784 2.86588C9.53834 2.68733 10.91 2.95944 12.0901 3.64C13.2701 4.32056 14.1926 5.37153 14.7144 6.62987C15.2362 7.88822 15.3282 9.28359 14.9761 10.5995C14.6239 11.9155 13.8473 13.0784 12.7668 13.908C11.6862 14.7375 10.3621 15.1873 8.99989 15.1875Z"
        fill="#164895"
      />
    </svg>
  );
}