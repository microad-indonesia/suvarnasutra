import Link from "next/link";
import React from "react";

export default function Thankyou() {
  return (
    <div className="flex flex-col items-center justify-center my-auto space-y-8">
      <h1 className="heading text-sakura-brown font-semibold capitalize">
        Thankyou for submitting
      </h1>
      <Link href="/">
        <button className="bg-gradient-to-b from-sakura-10 to-sakura-100 px-6 py-2 rounded-2xl text-slate-50 ">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
