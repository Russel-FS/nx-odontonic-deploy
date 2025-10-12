import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center rounded-xl font-medium transition";
const sizes: Record<Size, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-6 py-3.5",
};
const variants: Record<Variant, string> = {
  primary: "bg-brand.blue text-white hover:bg-brand.dark",
  outline:
    "border border-white/80 text-white hover:bg-white/10 hover:border-white",
  ghost:
    "text-brand.blue hover:bg-brand.blue50",
};

export default function Button({
  className = "",
  "data-variant": variant = "primary",
  "data-size": size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  "data-variant"?: Variant;
  "data-size"?: Size;
}) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
