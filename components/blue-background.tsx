import Image from "next/image";
import React from "react";

export default function BlueBackground() {
  return (
    <section className="relative w-full h-[750px] lg:h-[450px] my-30 overflow-hidden my-10 ">
      <div className="absolute rounded-[40px] mx-5 lg:mx-[100px] bg-bd-blue inset-0 z-10 max-w-[1236px]">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-10 p-10">
          <div className="flex-1 max-w-[580px] text-center lg:text-left">
            <h1 className="heading text-slate-50 mb-4">
              Web Hosting Unlimited Terbaik
            </h1>

            <p className="paragraph text-slate-50">
              Layanan Shared-Hosting dengan Teknologi Cloud Generasi Terbaru
              Kombinasi dari teknologi papan atas & pilihan harga yang pas untuk
              memastikan bisnismu naik kelas.
            </p>

            <button className="bg-bd-red rounded-full px-6 py-4 mt-10 text-slate-50">
              Langganan Hosting
            </button>
          </div>
          <div className="flex-1">
            <figure className="max-w-[644px] max-h-[620px] overvlow-hiden">
              <Image
                src={`/assets/hosting-banner.png`}
                alt="hosting-banner"
                width={644}
                height={620}
              />
            </figure>
          </div>
        </div>
      </div>

      {/* radial */}
      <svg
        className="hidden lg:absolute inset-0 filter blur-md "
        width="1400"
        height="558"
        viewBox="0 0 1400 558"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1400"
          height="557.308"
          fill="url(#paint0_radial_1197_2360)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1197_2360"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(700 278.654) rotate(21.7064) scale(753.424 517.79)"
          >
            <stop stop-color="#0050CC" />
            <stop offset="0.661458" stop-color="#005EFF" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* jaring */}
      <svg
        className="hidden lg:absolute -bottom-40 right-0 rotate-[75deg] z-20"
        width="361"
        height="706"
        viewBox="0 0 361 706"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity="0.2" d="M-27.8074 1L1094 437.636" stroke="white" />
        <path
          opacity="0.2"
          d="M-93.7963 26.6845L1028.01 463.321"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-159.785 52.369L962.022 489.005"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-225.774 78.0535L896.034 514.69"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-291.762 103.738L830.045 540.375"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-357.751 129.422L764.057 566.059"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-423.739 155.107L698.068 591.744"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-489.729 180.792L632.079 617.428"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-555.717 206.476L566.09 643.112"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-621.705 232.161L500.102 668.797"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-687.694 257.845L434.113 694.482"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-753.682 283.529L368.125 720.166"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-819.671 309.214L302.136 745.85"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-885.661 334.898L236.147 771.535"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-951.649 360.583L170.158 797.219"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-1017.64 386.268L104.17 822.904"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M-1083.63 411.952L38.1814 848.588"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M104.171 52.369L-1017.64 489.005"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M170.159 78.0535L-951.648 514.69"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M236.148 103.738L-885.66 540.375"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M302.136 129.422L-819.671 566.059"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M368.125 155.107L-753.683 591.744"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M434.114 180.792L-687.694 617.428"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M500.102 206.476L-621.705 643.112"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M566.078 232.161L-555.729 668.797"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M632.066 257.845L-489.741 694.482"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M698.055 283.529L-423.752 720.166"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M764.044 309.214L-357.764 745.85"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M830.032 334.898L-291.775 771.535"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M896.021 360.583L-225.786 797.219"
          stroke="white"
        />
        <path
          opacity="0.2"
          d="M962.01 386.268L-159.798 822.904"
          stroke="white"
        />
      </svg>
    </section>
  );
}
