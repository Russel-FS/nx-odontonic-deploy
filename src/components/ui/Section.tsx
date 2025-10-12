import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
