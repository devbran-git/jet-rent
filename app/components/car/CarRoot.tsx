import { ReactNode } from "react";

interface CarRootProps {
  children: ReactNode;
}

export default function CarRoot({ children }: CarRootProps) {
  return <div className="relative flex items-center gap-5 lg:gap-2">{children}</div>;
}
