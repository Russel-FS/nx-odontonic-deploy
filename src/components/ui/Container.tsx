import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto max-w-7xl ${className}`}>{children}</div>
  );
}
