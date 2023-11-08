import React from "react";
import cn from "classnames";

type ButtonProps = {
  title?: string;
  className?: string;
};

export default function RedButton({ title, className }: ButtonProps) {
  return (
    <button
      className={cn(
        className,
        "bg-bd-red hover:bg-slate-50 rounded-full px-6 py-4  text-slate-50 hover:text-bd-red cursor-pointer hover:ring-2 hover:ring-bd-red",
      )}
    >
      {title}
    </button>
  );
}
